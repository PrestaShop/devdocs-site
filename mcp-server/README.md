# PrestaShop DevDocs MCP server

A [Model Context Protocol](https://modelcontextprotocol.io/) server that exposes the
PrestaShop developer documentation to AI assistants (Claude, Cursor, ChatGPT, VS Code,
Zed, …), so they answer PrestaShop 9 questions from the actual documentation instead of
from training-data recall.

## How it fits together

GitHub Pages can only serve static files, and an MCP server has to answer `POST` requests
with JSON-RPC — so the two halves live in different places:

```
┌─ this repository ──────────────────────────────────────────────┐
│  Hugo build (build.yml)  ──►  GitHub Pages                      │
│                               ├─ /9/**/index.md   raw markdown  │
│                               ├─ /llms.txt        page index    │
│                               └─ /mcp-index.json  page catalogue│
└─────────────────────────────────────────────────────────────────┘
              ▲                                    ▲
              │ fetch (cached)                     │
┌─ mcp-server/ (Cloudflare Worker) ──────────────────────────────┐
│  POST /mcp   Streamable HTTP, stateless                        │
│  search_docs ──► Algolia DocSearch (the site's own index)      │
│  get_doc     ──► /<path>/index.md on GitHub Pages              │
│  list_sections ► /mcp-index.json                               │
└─────────────────────────────────────────────────────────────────┘
              ▲
              │ https
      Claude / Cursor / ChatGPT / …
```

The Worker stores nothing. Search relevance comes from the same Algolia DocSearch index
that powers the search box on the website, and page content is read from the markdown
files the Hugo build already publishes. **New documentation is live as soon as GitHub
Pages redeploys — the Worker never needs redeploying for content changes.**

## Tools

| Tool | Purpose |
| --- | --- |
| `search_docs(query, limit?, section?)` | Full-text search, returns pages with the heading path of each match |
| `get_doc(path, offset?, max_chars?)` | Full markdown source of one page, with paging for long pages |
| `list_sections(section?)` | Browse the documentation tree |

Only the currently supported documentation version (PrestaShop 9, per
`params.versions.current` in `src/config.yml`) is served. `get_doc` rejects paths outside
that version.

## Using it

Once deployed, point any MCP client at the `/mcp` endpoint.

```bash
claude mcp add --transport http prestashop-devdocs https://<worker-host>/mcp
```

Or, in a `mcp.json` / `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "prestashop-devdocs": {
      "type": "http",
      "url": "https://<worker-host>/mcp"
    }
  }
}
```

No authentication — the server is public and read-only, exactly like the website it reads.

## Running it locally

One command brings up the whole stack — it builds the site with the Hugo version CI uses
(downloaded to `bin/.hugo/` on first run), serves `src/public` in place of GitHub Pages,
and starts the Worker against it:

```bash
npm run mcp:local          # from the repository root
```

The MCP endpoint lands on `http://127.0.0.1:8787/mcp`. Add `-- --no-build` to skip the
Hugo build and reuse the existing `src/public`. `SITE_PORT` and `MCP_PORT` override the
ports.

> Do not use a system-wide `hugo` for this. The theme still calls `getJSON`, removed in
> Hugo 0.158, so anything newer fails to build the site at all. The script pins 0.121.1 to
> match `.github/workflows/build.yml`.

### Testing it

```bash
npm run mcp:test           # 38 checks: transport rules, lifecycle, every tool
```

With the official [MCP Inspector](https://github.com/modelcontextprotocol/inspector) —
`--cli` for one-shot calls, or drop it for the browser UI:

```bash
npx @modelcontextprotocol/inspector --cli http://127.0.0.1:8787/mcp \
  --transport http --method tools/list

npx @modelcontextprotocol/inspector --cli http://127.0.0.1:8787/mcp \
  --transport http --method tools/call \
  --tool-name search_docs --tool-arg 'query=actionValidateOrder'
```

Or wire the local server into Claude Code and use it for real:

```bash
claude mcp add --transport http devdocs-local http://127.0.0.1:8787/mcp
claude mcp remove devdocs-local     # when you are done
```

Plain `curl` works too — it is only JSON-RPC over `POST`:

```bash
curl -s -X POST http://127.0.0.1:8787/mcp \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/call",
       "params":{"name":"search_docs","arguments":{"query":"actionValidateOrder"}}}'
```

### Working on the Worker alone

`npm run dev` in this directory starts just the Worker, reading the **live**
`https://devdocs.prestashop-project.org/`. Useful for iterating on search, but `get_doc`
and `list_sections` will 404 until the artifacts from this branch are actually deployed.

## Search behaviour

`search_docs` queries Algolia twice. The first pass requires every word of the query to
match; only if that finds nothing does it retry with Algolia's default behaviour of
dropping words until something matches, and then labels the results as approximate.

This matters: on the lenient default, a question the documentation does not cover comes
back with a page of confident-looking irrelevant hits — `"zzzqqqxyzzy no such thing"`
returns 358 of them — which is precisely the material a model will hallucinate from. The
strict-first pass returns zero for that, and long natural-language questions still get
answers through the labelled fallback.

## Deployment

**Deployment is owned by the platform/devops team — this repository does not deploy the
server.** There is deliberately no CI workflow and there are no deployment secrets here.

Whichever host: Algolia DocSearch is free for open source and already in use by the
website, and the compute involved is negligible on any platform's free tier.

## Protocol notes

- Transport: Streamable HTTP, stateless (no `Mcp-Session-Id`, no SSE stream).
- `POST /mcp` returns `application/json`; `GET`/`DELETE /mcp` return `405`, which the spec
  permits for servers that do not offer server-initiated streams.
- Negotiates protocol versions `2025-11-25` down to `2024-11-05`.
- CORS is fully open. The server is unauthenticated, read-only and holds no user data, so
  the DNS-rebinding threat the `Origin` check defends against does not apply; allowing all
  origins is what makes it usable from browser-based clients.
