#!/usr/bin/env bash
#
# Smoke test for the devdocs MCP server. Exercises the transport rules and every tool.
#
#   ./bin/mcp-local.sh            # in one terminal
#   ./mcp-server/test/smoke.sh    # in another
#
# Override the endpoint with MCP_URL to test a deployed server.
#
set -uo pipefail

EP="${MCP_URL:-http://127.0.0.1:8787/mcp}"
PASS=0
FAIL=0

green() { printf '\033[32m%s\033[0m' "$1"; }
red()   { printf '\033[31m%s\033[0m' "$1"; }

rpc() {
  curl -s -X POST "$EP" \
    -H 'Content-Type: application/json' \
    -H 'Accept: application/json, text/event-stream' \
    -H 'MCP-Protocol-Version: 2025-11-25' \
    -d "$1"
}

# check <name> <expected-substring> <actual>
check() {
  if printf '%s' "$3" | grep -qF -- "$2"; then
    printf '  %s %s\n' "$(green '✓')" "$1"; PASS=$((PASS + 1))
  else
    printf '  %s %s\n     expected to contain: %s\n     got: %s\n' \
      "$(red '✗')" "$1" "$2" "$(printf '%s' "$3" | head -c 300)"; FAIL=$((FAIL + 1))
  fi
}

status() { curl -s -o /dev/null -w '%{http_code}' "$@"; }

echo "Testing ${EP}"
echo
echo "Transport"
check "GET /mcp is 405 (no SSE stream offered)"   "405" "$(status "$EP")"
check "DELETE /mcp is 405"                        "405" "$(status -X DELETE "$EP")"
check "OPTIONS /mcp is 204 (CORS preflight)"      "204" "$(status -X OPTIONS "$EP")"
check "unsupported protocol version is 400"       "400" "$(status -X POST -H 'MCP-Protocol-Version: 1999-01-01' "$EP")"
check "notification is 202 with no body"          "202" \
  "$(status -X POST -H 'Content-Type: application/json' -d '{"jsonrpc":"2.0","method":"notifications/initialized"}' "$EP")"
check "batched request is rejected"               "Batched requests are not supported" \
  "$(rpc '[{"jsonrpc":"2.0","id":1,"method":"ping"}]')"
check "malformed JSON is a parse error"           "-32700" \
  "$(curl -s -X POST "$EP" -H 'Content-Type: application/json' -d 'not json')"

echo
echo "Lifecycle"
INIT=$(rpc '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"smoke","version":"1"}}}')
check "initialize echoes the client protocol version" '"protocolVersion":"2025-06-18"' "$INIT"
check "initialize advertises the tools capability"    '"tools"'                        "$INIT"
check "initialize carries usage instructions"         '"instructions"'                 "$INIT"
check "unknown protocol version falls back to latest" '"protocolVersion":"2025-11-25"' \
  "$(rpc '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2030-01-01","capabilities":{}}}')"
check "ping works"                                    '"result":{}'                    "$(rpc '{"jsonrpc":"2.0","id":2,"method":"ping"}')"
check "unknown method is -32601"                      '-32601'                         "$(rpc '{"jsonrpc":"2.0","id":3,"method":"nope/nope"}')"

TOOLS=$(rpc '{"jsonrpc":"2.0","id":4,"method":"tools/list"}')
for t in search_docs get_doc list_sections; do
  check "tools/list exposes ${t}" "\"name\":\"${t}\"" "$TOOLS"
done

echo
echo "search_docs"
S=$(rpc '{"jsonrpc":"2.0","id":10,"method":"tools/call","params":{"name":"search_docs","arguments":{"query":"register a hook from a module","limit":5}}}')
check "finds pages"                  "page(s) matching"      "$S"
check "returns version 9 paths only" "/9/"                   "$S"
check "points at get_doc"            "Call \`get_doc\`"      "$S"
check "section filter narrows scope" "/9/webservice/" \
  "$(rpc '{"jsonrpc":"2.0","id":11,"method":"tools/call","params":{"name":"search_docs","arguments":{"query":"authentication","section":"webservice","limit":3}}}')"
check "empty query is a tool error"  '"isError":true' \
  "$(rpc '{"jsonrpc":"2.0","id":12,"method":"tools/call","params":{"name":"search_docs","arguments":{"query":"  "}}}')"
check "flags loose matches as approximate" "APPROXIMATE matches" \
  "$(rpc '{"jsonrpc":"2.0","id":13,"method":"tools/call","params":{"name":"search_docs","arguments":{"query":"zzzqqqxyzzy no such thing"}}}')"
check "reports nothing found when Algolia has nothing" "No results for" \
  "$(rpc '{"jsonrpc":"2.0","id":14,"method":"tools/call","params":{"name":"search_docs","arguments":{"query":"qqqzzzxyw vvvbbbnnn"}}}')"
check "exact matches are not flagged approximate" "page(s) matching" \
  "$(rpc '{"jsonrpc":"2.0","id":15,"method":"tools/call","params":{"name":"search_docs","arguments":{"query":"override a controller","limit":3}}}')"

echo
echo "list_sections"
L=$(rpc '{"jsonrpc":"2.0","id":20,"method":"tools/call","params":{"name":"list_sections","arguments":{}}}')
check "lists top-level sections" "modules"                    "$L"
check "reports page counts"      "pages) →"                   "$L"
check "expands a section"        "/9/faq/upgrade/" \
  "$(rpc '{"jsonrpc":"2.0","id":21,"method":"tools/call","params":{"name":"list_sections","arguments":{"section":"faq"}}}')"
check "rejects unknown section"  "Unknown section" \
  "$(rpc '{"jsonrpc":"2.0","id":22,"method":"tools/call","params":{"name":"list_sections","arguments":{"section":"nope"}}}')"

echo
echo "get_doc"
D=$(rpc '{"jsonrpc":"2.0","id":30,"method":"tools/call","params":{"name":"get_doc","arguments":{"path":"/9/development/components/console/","max_chars":1000}}}')
check "returns markdown with front matter" 'title: '           "$D"
check "links back to the GitHub source"    'github.com/PrestaShop/docs/blob/9.x/' "$D"
check "explains how to page on truncation" 'offset='           "$D"
check "accepts a full URL"                 'version: ' \
  "$(rpc '{"jsonrpc":"2.0","id":31,"method":"tools/call","params":{"name":"get_doc","arguments":{"path":"https://devdocs.prestashop-project.org/9/basics/installation/#anchor","max_chars":1000}}}')"
check "accepts an .md path"                'version: ' \
  "$(rpc '{"jsonrpc":"2.0","id":32,"method":"tools/call","params":{"name":"get_doc","arguments":{"path":"/9/faq/upgrade/index.md","max_chars":1000}}}')"
check "offset resumes mid-page"            'resuming at character 500' \
  "$(rpc '{"jsonrpc":"2.0","id":33,"method":"tools/call","params":{"name":"get_doc","arguments":{"path":"/9/basics/installation/","offset":500,"max_chars":1000}}}')"
check "refuses unsupported versions"       '"isError":true' \
  "$(rpc '{"jsonrpc":"2.0","id":34,"method":"tools/call","params":{"name":"get_doc","arguments":{"path":"/8/basics/"}}}')"
check "refuses path traversal"             '"isError":true' \
  "$(rpc '{"jsonrpc":"2.0","id":35,"method":"tools/call","params":{"name":"get_doc","arguments":{"path":"/9/../../etc/passwd"}}}')"
check "reports a missing page"             'No page at' \
  "$(rpc '{"jsonrpc":"2.0","id":36,"method":"tools/call","params":{"name":"get_doc","arguments":{"path":"/9/does/not/exist/"}}}')"
check "unknown tool is -32602"             '-32602' \
  "$(rpc '{"jsonrpc":"2.0","id":37,"method":"tools/call","params":{"name":"nope","arguments":{}}}')"

echo
if [ "$FAIL" -eq 0 ]; then
  printf '%s %d checks passed\n' "$(green '✓')" "$PASS"
else
  printf '%s %d passed, %d failed\n' "$(red '✗')" "$PASS" "$FAIL"
fi
exit $((FAIL > 0))
