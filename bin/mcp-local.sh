#!/usr/bin/env bash
#
# Runs the whole MCP stack locally:
#
#   1. builds the site with the same Hugo version CI uses (downloaded on first run)
#   2. serves src/public over HTTP, standing in for GitHub Pages
#   3. runs the Cloudflare Worker against it
#
# The MCP endpoint ends up at http://127.0.0.1:8787/mcp
#
# Pass --no-build to skip the Hugo build and reuse the existing src/public.
#
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
# Must match the version pinned in .github/workflows/build.yml. A newer Hugo will not
# build this site: the theme still uses getJSON, removed in Hugo 0.158.
HUGO_VERSION="0.121.1"
HUGO_DIR="${ROOT}/bin/.hugo/${HUGO_VERSION}"
HUGO_BIN="${HUGO_DIR}/hugo"
SITE_PORT="${SITE_PORT:-8788}"
MCP_PORT="${MCP_PORT:-8787}"

log() { printf '\033[36m▸\033[0m %s\n' "$*"; }
die() { printf '\033[31m✗ %s\033[0m\n' "$*" >&2; exit 1; }

install_hugo() {
  [ -x "$HUGO_BIN" ] && return

  local os arch asset
  os="$(uname -s)"
  arch="$(uname -m)"
  case "$os" in
    Darwin) asset="darwin-universal" ;;
    Linux)
      case "$arch" in
        x86_64)          asset="linux-amd64" ;;
        aarch64|arm64)   asset="linux-arm64" ;;
        *) die "Unsupported Linux architecture: $arch" ;;
      esac
      ;;
    *) die "Unsupported OS: $os. Build the site yourself and rerun with --no-build." ;;
  esac

  log "Downloading Hugo ${HUGO_VERSION} (${asset})…"
  mkdir -p "$HUGO_DIR"
  curl -fsSL -o "${HUGO_DIR}/hugo.tar.gz" \
    "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_${asset}.tar.gz"
  tar -xzf "${HUGO_DIR}/hugo.tar.gz" -C "$HUGO_DIR" hugo
  rm -f "${HUGO_DIR}/hugo.tar.gz"
}

build_site() {
  install_hugo
  local configs="config.yml"
  # config-local.yml is gitignored; it disables the git-info lookup that would
  # otherwise need DEVDOCS_GITHUB_READ_TOKEN.
  [ -f "${ROOT}/src/config-local.yml" ] && configs="config.yml,config-local.yml"

  log "Building the site with Hugo ${HUGO_VERSION}…"
  (cd "${ROOT}/src" && "$HUGO_BIN" --config "$configs" --quiet)

  [ -f "${ROOT}/src/public/mcp-index.json" ] || die "Build produced no mcp-index.json."
  log "Built $(find "${ROOT}/src/public" -name index.md | wc -l | tr -d ' ') markdown artifacts."
}

serve_site() {
  log "Serving src/public on http://127.0.0.1:${SITE_PORT} (standing in for GitHub Pages)…"
  (cd "${ROOT}/src/public" && python3 -m http.server "$SITE_PORT" --bind 127.0.0.1 >/dev/null 2>&1) &
  SITE_PID=$!

  for _ in $(seq 1 40); do
    curl -sf -o /dev/null "http://127.0.0.1:${SITE_PORT}/mcp-index.json" && return
    sleep 0.25
  done
  die "Static server did not come up on port ${SITE_PORT}."
}

port_pids() { lsof -nP -tiTCP:"$1" -sTCP:LISTEN 2>/dev/null || true; }

# Signalling the PIDs we launched is not enough on its own: intermediary processes
# (npm, shells) can leave the real server process alive and still holding the port.
# The contract we actually care about is "both ports are free afterwards", so verify
# that and force it if the polite shutdown stalls.
cleanup() {
  trap - EXIT INT TERM
  log "Shutting down…"

  for pid in "${SERVER_PID:-}" "${SITE_PID:-}"; do
    [ -n "$pid" ] && kill -TERM "$pid" 2>/dev/null || true
  done

  for _ in $(seq 1 20); do
    [ -z "$(port_pids "$MCP_PORT")$(port_pids "$SITE_PORT")" ] && return
    sleep 0.25
  done

  for port in "$MCP_PORT" "$SITE_PORT"; do
    pids="$(port_pids "$port")"
    [ -n "$pids" ] && kill -9 $pids 2>/dev/null || true
  done
}
trap cleanup EXIT INT TERM

# Fail early and clearly rather than half-starting on top of a previous run.
for port_pair in "$SITE_PORT:static server" "$MCP_PORT:MCP endpoint"; do
  port="${port_pair%%:*}"
  if lsof -nP -iTCP:"$port" -sTCP:LISTEN >/dev/null 2>&1; then
    die "Port ${port} (${port_pair#*:}) is already in use — a previous run may still be alive.
    Inspect it with:  lsof -nP -iTCP:${port} -sTCP:LISTEN
    Then stop it, or rerun with SITE_PORT/MCP_PORT set to free ports."
  fi
done

[ "${1:-}" = "--no-build" ] || build_site
[ -d "${ROOT}/src/public" ] || die "No src/public. Run without --no-build first."

serve_site

[ -d "${ROOT}/mcp-server/node_modules" ] || (log "Installing MCP server dependencies…" && cd "${ROOT}/mcp-server" && npm install --silent)

cat <<EOF

  MCP endpoint   http://127.0.0.1:${MCP_PORT}/mcp
  Smoke test     ./mcp-server/test/smoke.sh
  Inspector      npx @modelcontextprotocol/inspector
  Claude Code    claude mcp add --transport http devdocs-local http://127.0.0.1:${MCP_PORT}/mcp

  Ctrl-C to stop.

EOF

cd "${ROOT}/mcp-server"
npm run --silent build

# Deliberately NOT `exec`: that would replace this shell and discard the trap above,
# leaving the static server on $SITE_PORT orphaned when the MCP server stops.
#
# Backgrounded, then waited on, rather than run in the foreground: bash defers trap
# handlers until the current foreground command returns, so a foreground server
# would swallow the signal until it felt like exiting. `wait` is interruptible,
# so the trap fires immediately.
DOCS_BASE_URL="http://127.0.0.1:${SITE_PORT}/" PORT="$MCP_PORT" node dist/server.mjs &
SERVER_PID=$!
wait "$SERVER_PID"
