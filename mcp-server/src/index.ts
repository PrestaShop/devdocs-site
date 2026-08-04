/**
 * PrestaShop Developer Documentation — MCP server.
 *
 * A stateless Streamable HTTP MCP server. It owns no
 * data of its own: search is delegated to the Algolia DocSearch index that already
 * powers the search box on devdocs.prestashop-project.org, and page content is read
 * from the static artifacts published to GitHub Pages by the Hugo build
 * (`/<path>/index.md` and `/mcp-index.json`).
 *
 * Transport: https://modelcontextprotocol.io/specification/2025-11-25/basic/transports
 */

export interface Env {
  DOCS_BASE_URL: string;
  DOCS_VERSION: string;
  ALGOLIA_APP_ID: string;
  ALGOLIA_API_KEY: string;
  ALGOLIA_INDEX: string;
}

const SERVER_NAME = "prestashop-devdocs";
const SERVER_VERSION = "1.0.0";

/** Newest first. The first entry is what we advertise when the client asks for something we don't know. */
const SUPPORTED_PROTOCOL_VERSIONS = [
  "2025-11-25",
  "2025-06-18",
  "2025-03-26",
  "2024-11-05",
];

/** How long a fetched artifact stays cached within a single server instance. */
const INDEX_TTL_MS = 15 * 60 * 1000;

// ---------------------------------------------------------------------------
// JSON-RPC plumbing
// ---------------------------------------------------------------------------

type JsonRpcId = string | number | null;

interface JsonRpcRequest {
  jsonrpc: "2.0";
  id?: JsonRpcId;
  method: string;
  params?: Record<string, unknown>;
}

const ERR_PARSE = -32700;
const ERR_INVALID_REQUEST = -32600;
const ERR_METHOD_NOT_FOUND = -32601;
const ERR_INVALID_PARAMS = -32602;
const ERR_INTERNAL = -32603;

function rpcResult(id: JsonRpcId, result: unknown) {
  return { jsonrpc: "2.0" as const, id, result };
}

function rpcError(id: JsonRpcId, code: number, message: string) {
  return { jsonrpc: "2.0" as const, id, error: { code, message } };
}

const CORS_HEADERS: Record<string, string> = {
  // This server is public, read-only and holds no credentials or user data, so any
  // origin may talk to it. That is what makes it usable from browser-based clients.
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept, MCP-Protocol-Version, Mcp-Session-Id, Authorization",
  "Access-Control-Expose-Headers": "MCP-Protocol-Version",
  "Access-Control-Max-Age": "86400",
};

function jsonResponse(body: unknown, status = 200, extra: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...CORS_HEADERS, ...extra },
  });
}

// ---------------------------------------------------------------------------
// Static artifacts published by the Hugo build
// ---------------------------------------------------------------------------

interface IndexPage {
  path: string;
  markdown: string;
  title: string;
  description: string;
  section: string;
}

interface IndexSection {
  slug: string;
  title: string;
  path: string;
  description: string;
  pageCount: number;
}

interface DocsIndex {
  site: string;
  docsVersion: string;
  generated: string;
  sections: IndexSection[];
  pages: IndexPage[];
}

let cachedIndex: { at: number; value: DocsIndex } | null = null;

/**
 * Cached per instance: with multiple replicas each keeps its own copy, which is
 * fine — the index is small and refreshes within INDEX_TTL_MS everywhere.
 */
async function loadIndex(env: Env): Promise<DocsIndex> {
  const now = Date.now();
  if (cachedIndex && now - cachedIndex.at < INDEX_TTL_MS) return cachedIndex.value;

  const url = new URL("mcp-index.json", env.DOCS_BASE_URL).toString();
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Could not load ${url} (HTTP ${res.status})`);

  const value = (await res.json()) as DocsIndex;
  cachedIndex = { at: now, value };
  return value;
}

/**
 * Turns anything a model might plausibly pass — a full URL, a site path, a path
 * ending in .md — into the canonical `/9/section/page/` form, or null if it points
 * outside the supported documentation version.
 */
function normalizeDocPath(input: string, version: string): string | null {
  let p = String(input || "").trim();
  if (!p) return null;

  if (/^https?:\/\//i.test(p)) {
    try {
      p = new URL(p).pathname;
    } catch {
      return null;
    }
  }

  p = p.split("#")[0].split("?")[0];
  if (p.includes("..")) return null;
  if (!p.startsWith("/")) p = `/${p}`;

  if (p.endsWith("/index.md")) p = p.slice(0, -"index.md".length);
  else if (p.endsWith(".md")) p = `${p.slice(0, -".md".length)}/`;
  if (!p.endsWith("/")) p = `${p}/`;

  if (!p.startsWith(`/${version}/`)) return null;
  return p;
}

// ---------------------------------------------------------------------------
// Algolia DocSearch
// ---------------------------------------------------------------------------

interface AlgoliaHit {
  url: string;
  content: string | null;
  hierarchy: Record<string, string | null>;
  _snippetResult?: { content?: { value: string } };
}

function stripHighlight(s: string): string {
  return s.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

function hitBreadcrumb(hit: AlgoliaHit): string {
  return ["lvl0", "lvl1", "lvl2", "lvl3", "lvl4"]
    .map((k) => hit.hierarchy?.[k])
    .filter((v): v is string => Boolean(v))
    .map(stripHighlight)
    .join(" › ");
}

/**
 * `strict` requires every word of the query to match. Algolia's default is to drop
 * words until something matches, which means a query about something the docs simply
 * do not cover still comes back with a page of confident-looking irrelevant hits —
 * exactly the material a model will happily hallucinate from. We search strictly
 * first and only fall back to the lenient behaviour when that finds nothing, so loose
 * results can be labelled as such.
 */
async function algoliaSearch(
  env: Env,
  query: string,
  hitsPerPage: number,
  strict: boolean,
): Promise<AlgoliaHit[]> {
  const url = `https://${env.ALGOLIA_APP_ID}-dsn.algolia.net/1/indexes/${encodeURIComponent(env.ALGOLIA_INDEX)}/query`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "X-Algolia-API-Key": env.ALGOLIA_API_KEY,
      "X-Algolia-Application-Id": env.ALGOLIA_APP_ID,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      hitsPerPage,
      facetFilters: [[`version:${env.DOCS_VERSION}`]],
      attributesToRetrieve: ["url", "content", "hierarchy"],
      attributesToSnippet: ["content:40"],
      snippetEllipsisText: "…",
      ...(strict ? { removeWordsIfNoResults: "none" } : {}),
    }),
  });

  if (!res.ok) {
    throw new Error(`Algolia search failed (HTTP ${res.status}): ${stripHighlight(await res.text()).slice(0, 200)}`);
  }
  const body = (await res.json()) as { hits?: AlgoliaHit[] };
  return body.hits ?? [];
}

// ---------------------------------------------------------------------------
// Tools
// ---------------------------------------------------------------------------

const TOOLS = [
  {
    name: "search_docs",
    title: "Search PrestaShop developer documentation",
    description:
      "Full-text search across the official PrestaShop 9 developer documentation " +
      "(devdocs.prestashop-project.org). Returns matching pages with the heading path of " +
      "each match and the doc path to pass to `get_doc`. Use this first for any question " +
      "about hooks, modules, themes, the Admin API, the webservice, the console, CQRS, " +
      "grids, forms, upgrading, or contributing to PrestaShop.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "Search terms, e.g. 'register a hook from a module' or 'actionValidateOrder'.",
        },
        limit: {
          type: "integer",
          description: "Maximum number of pages to return (default 8, max 25).",
          minimum: 1,
          maximum: 25,
        },
        section: {
          type: "string",
          description:
            "Optional top-level section to restrict results to, e.g. 'modules', 'development', " +
            "'themes', 'webservice', 'admin-api', 'basics', 'testing', 'contribute'. " +
            "Call `list_sections` to see all of them.",
        },
      },
      required: ["query"],
    },
    annotations: { readOnlyHint: true, openWorldHint: true },
  },
  {
    name: "get_doc",
    title: "Read a documentation page",
    description:
      "Fetch the full markdown source of one documentation page. Accepts a doc path " +
      "('/9/modules/concepts/hooks/'), a full devdocs URL, or a path to the .md file. " +
      "Use the paths returned by `search_docs` or `list_sections`.",
    inputSchema: {
      type: "object",
      properties: {
        path: {
          type: "string",
          description: "Doc path or full devdocs.prestashop-project.org URL of the page to read.",
        },
        offset: {
          type: "integer",
          description: "Character offset to start reading from, for paging through long pages (default 0).",
          minimum: 0,
        },
        max_chars: {
          type: "integer",
          description: "Maximum number of characters to return (default 40000, max 120000).",
          minimum: 1000,
          maximum: 120000,
        },
      },
      required: ["path"],
    },
    annotations: { readOnlyHint: true, openWorldHint: true },
  },
  {
    name: "list_sections",
    title: "Browse the documentation tree",
    description:
      "List the top-level sections of the PrestaShop 9 developer documentation, or, when " +
      "`section` is given, every page inside that section. Use this to get an overview " +
      "before searching, or to enumerate a topic exhaustively.",
    inputSchema: {
      type: "object",
      properties: {
        section: {
          type: "string",
          description: "Section slug to expand, e.g. 'modules'. Omit to list all sections.",
        },
      },
    },
    annotations: { readOnlyHint: true, openWorldHint: true },
  },
];

function toolText(text: string, isError = false) {
  return { content: [{ type: "text", text }], isError };
}

async function runSearchDocs(env: Env, args: Record<string, unknown>) {
  const query = typeof args.query === "string" ? args.query.trim() : "";
  if (!query) return toolText("`query` is required and must be a non-empty string.", true);

  const limit = Math.min(Math.max(Number(args.limit) || 8, 1), 25);
  const section = typeof args.section === "string" ? args.section.trim().replace(/^\/|\/$/g, "") : "";

  const base = new URL(env.DOCS_BASE_URL);
  // Over-fetch: DocSearch indexes one record per heading, so several hits routinely
  // collapse into the same page once we group them.
  const overFetch = Math.min(limit * 5, 100);

  const group = (hits: AlgoliaHit[]) => {
    const pages = new Map<string, { url: string; matches: string[] }>();
    for (const hit of hits) {
      if (!hit.url) continue;
      let pathname: string;
      try {
        pathname = new URL(hit.url).pathname;
      } catch {
        continue;
      }
      const docPath = pathname.split("#")[0];
      if (!docPath.startsWith(`/${env.DOCS_VERSION}/`)) continue;
      if (section && !docPath.startsWith(`/${env.DOCS_VERSION}/${section}/`)) continue;

      let entry = pages.get(docPath);
      if (!entry) {
        if (pages.size >= limit) continue;
        entry = { url: new URL(docPath, base).toString(), matches: [] };
        pages.set(docPath, entry);
      }

      const crumb = hitBreadcrumb(hit);
      const snippet = stripHighlight(hit._snippetResult?.content?.value ?? hit.content ?? "");
      const line = [crumb, snippet].filter(Boolean).join(" — ");
      if (line && entry.matches.length < 3 && !entry.matches.includes(line)) entry.matches.push(line);
    }
    return pages;
  };

  let pages = group(await algoliaSearch(env, query, overFetch, true));
  let approximate = false;
  if (pages.size === 0) {
    pages = group(await algoliaSearch(env, query, overFetch, false));
    approximate = true;
  }

  if (pages.size === 0) {
    const scope = section ? ` in section '${section}'` : "";
    return toolText(
      `No results for "${query}"${scope} in the PrestaShop ${env.DOCS_VERSION} documentation.\n\n` +
        "Try broader or different terms, drop the `section` filter, or call `list_sections` to browse the tree.",
    );
  }

  const lines: string[] = approximate
    ? [
        `No page matches all the terms in "${query}". These ${pages.size} page(s) are ` +
          "APPROXIMATE matches on some of the terms only — treat them as leads, verify with " +
          "`get_doc` before relying on them, and say so if the documentation does not actually " +
          "cover the question.",
        "",
      ]
    : [
        `${pages.size} page(s) matching "${query}" in the PrestaShop ${env.DOCS_VERSION} developer documentation:`,
        "",
      ];
  let i = 1;
  for (const [docPath, entry] of pages) {
    lines.push(`${i}. ${docPath}`);
    lines.push(`   url: ${entry.url}`);
    for (const m of entry.matches) lines.push(`   • ${m}`);
    lines.push("");
    i++;
  }
  lines.push("Call `get_doc` with one of the paths above to read the full page.");
  return toolText(lines.join("\n"));
}

async function runGetDoc(env: Env, args: Record<string, unknown>) {
  const raw = typeof args.path === "string" ? args.path : "";
  const docPath = normalizeDocPath(raw, env.DOCS_VERSION);
  if (!docPath) {
    return toolText(
      `Invalid path: ${JSON.stringify(raw)}. Expected a path inside the supported documentation ` +
        `version, e.g. "/${env.DOCS_VERSION}/modules/concepts/hooks/" or a full ` +
        `${env.DOCS_BASE_URL} URL. Only PrestaShop ${env.DOCS_VERSION} is served by this server.`,
      true,
    );
  }

  const offset = Math.max(Number(args.offset) || 0, 0);
  const maxChars = Math.min(Math.max(Number(args.max_chars) || 40000, 1000), 120000);

  const mdUrl = new URL(`${docPath.slice(1)}index.md`, env.DOCS_BASE_URL).toString();
  const res = await fetch(mdUrl);

  if (res.status === 404) {
    return toolText(
      `No page at ${docPath} (fetched ${mdUrl}, HTTP 404).\n\n` +
        "Use `search_docs` or `list_sections` to find the correct path.",
      true,
    );
  }
  if (!res.ok) return toolText(`Failed to fetch ${mdUrl} (HTTP ${res.status}).`, true);

  const body = await res.text();
  const slice = body.slice(offset, offset + maxChars);
  const end = offset + slice.length;

  let out = slice;
  if (offset > 0) out = `[…truncated, resuming at character ${offset} of ${body.length}]\n\n${out}`;
  if (end < body.length) {
    out += `\n\n[…truncated at character ${end} of ${body.length}. Call get_doc again with offset=${end} to continue.]`;
  }
  return toolText(out);
}

async function runListSections(env: Env, args: Record<string, unknown>) {
  const index = await loadIndex(env);
  const section = typeof args.section === "string" ? args.section.trim().replace(/^\/|\/$/g, "") : "";

  if (!section) {
    const lines = [
      `Top-level sections of the PrestaShop ${index.docsVersion} developer documentation ` +
        `(${index.pages.length} pages, index generated ${index.generated}):`,
      "",
    ];
    for (const s of index.sections) {
      lines.push(`- ${s.slug} — ${s.title} (${s.pageCount} pages) → ${s.path}`);
      if (s.description) lines.push(`    ${s.description}`);
    }
    lines.push("", "Call `list_sections` with a `section` slug to list its pages, or `search_docs` to search.");
    return toolText(lines.join("\n"));
  }

  const known = index.sections.find((s) => s.slug === section);
  const pages = index.pages.filter((p) => p.section === section);
  if (!known && pages.length === 0) {
    return toolText(
      `Unknown section '${section}'. Available: ${index.sections.map((s) => s.slug).join(", ")}.`,
      true,
    );
  }

  const lines = [`${pages.length} page(s) in section '${section}'${known ? ` (${known.title})` : ""}:`, ""];
  for (const p of pages) {
    lines.push(`- ${p.path} — ${p.title}${p.description ? `: ${p.description}` : ""}`);
  }
  lines.push("", "Call `get_doc` with one of the paths above to read a page.");
  return toolText(lines.join("\n"));
}

async function callTool(env: Env, name: string, args: Record<string, unknown>) {
  switch (name) {
    case "search_docs":
      return runSearchDocs(env, args);
    case "get_doc":
      return runGetDoc(env, args);
    case "list_sections":
      return runListSections(env, args);
    default:
      return null;
  }
}

// ---------------------------------------------------------------------------
// MCP method dispatch
// ---------------------------------------------------------------------------

async function handleRpc(msg: JsonRpcRequest, env: Env): Promise<unknown | null> {
  const id = msg.id ?? null;
  const params = (msg.params ?? {}) as Record<string, unknown>;

  switch (msg.method) {
    case "initialize": {
      const requested = typeof params.protocolVersion === "string" ? params.protocolVersion : "";
      const negotiated = SUPPORTED_PROTOCOL_VERSIONS.includes(requested)
        ? requested
        : SUPPORTED_PROTOCOL_VERSIONS[0];
      return rpcResult(id, {
        protocolVersion: negotiated,
        capabilities: { tools: { listChanged: false } },
        serverInfo: {
          name: SERVER_NAME,
          title: "PrestaShop Developer Documentation",
          version: SERVER_VERSION,
        },
        instructions:
          `Official developer documentation for PrestaShop ${env.DOCS_VERSION} ` +
          `(${env.DOCS_BASE_URL}). Start with \`search_docs\`; read whole pages with \`get_doc\`; ` +
          "use `list_sections` to browse. Prefer these tools over recalling PrestaShop APIs from " +
          "memory — PrestaShop 9 runs on Symfony 6.4 and PHP 8.1+, and differs substantially " +
          "from 1.7 and 8.x.",
      });
    }

    case "ping":
      return rpcResult(id, {});

    case "tools/list":
      return rpcResult(id, { tools: TOOLS });

    case "tools/call": {
      const name = typeof params.name === "string" ? params.name : "";
      const args = (params.arguments ?? {}) as Record<string, unknown>;
      try {
        const result = await callTool(env, name, args);
        if (result === null) return rpcError(id, ERR_INVALID_PARAMS, `Unknown tool: ${name}`);
        return rpcResult(id, result);
      } catch (err) {
        // Tool-level failures are reported in-band so the model can react to them.
        return rpcResult(id, toolText(`Tool '${name}' failed: ${(err as Error).message}`, true));
      }
    }

    // Advertised as unsupported in `capabilities`, but some clients probe anyway.
    case "resources/list":
      return rpcResult(id, { resources: [] });
    case "resources/templates/list":
      return rpcResult(id, { resourceTemplates: [] });
    case "prompts/list":
      return rpcResult(id, { prompts: [] });

    default:
      // Notifications (no id) that we don't care about are simply acknowledged.
      if (msg.id === undefined) return null;
      return rpcError(id, ERR_METHOD_NOT_FOUND, `Method not found: ${msg.method}`);
  }
}

// ---------------------------------------------------------------------------
// HTTP entry point
// ---------------------------------------------------------------------------

const LANDING_PAGE = (env: Env, endpoint: string) => `<!doctype html>
<meta charset="utf-8">
<title>PrestaShop DevDocs MCP server</title>
<style>
 body{font:16px/1.6 system-ui,sans-serif;max-width:46rem;margin:4rem auto;padding:0 1.5rem;color:#1c1c1c}
 code,pre{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:.9em}
 pre{background:#f5f5f7;padding:1rem;border-radius:.5rem;overflow-x:auto}
 a{color:#25b9d7}
 @media(prefers-color-scheme:dark){body{background:#111;color:#eee}pre{background:#1d1d21}}
</style>
<h1>PrestaShop DevDocs MCP server</h1>
<p>Model Context Protocol server for the
<a href="${env.DOCS_BASE_URL}">PrestaShop ${env.DOCS_VERSION} developer documentation</a>.</p>
<h2>Endpoint</h2>
<pre>POST ${endpoint}   (Streamable HTTP)</pre>
<h2>Add it to Claude Code</h2>
<pre>claude mcp add --transport http prestashop-devdocs ${endpoint}</pre>
<h2>Tools</h2>
<ul>
${TOOLS.map((t) => `<li><code>${t.name}</code> — ${t.title}</li>`).join("\n")}
</ul>
<p>Read-only and unauthenticated. Source:
<a href="https://github.com/PrestaShop/devdocs-site">PrestaShop/devdocs-site</a>.</p>
`;

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    if (url.pathname !== "/mcp") {
      if (url.pathname === "/" && request.method === "GET") {
        // Build the copy-pasteable endpoint URL from the request itself, honouring
        // the proxy headers a TLS-terminating ingress sets.
        const proto = request.headers.get("x-forwarded-proto")?.split(",")[0].trim()
          ?? url.protocol.replace(":", "");
        const host = request.headers.get("x-forwarded-host")?.split(",")[0].trim() ?? url.host;
        return new Response(LANDING_PAGE(env, `${proto}://${host}/mcp`), {
          headers: { "Content-Type": "text/html; charset=utf-8", ...CORS_HEADERS },
        });
      }
      return jsonResponse({ error: "Not found. The MCP endpoint is at /mcp." }, 404);
    }

    // The spec allows a stateless server to decline server-initiated streams.
    if (request.method === "GET" || request.method === "DELETE") {
      return jsonResponse(rpcError(null, ERR_INVALID_REQUEST, "This server does not offer an SSE stream."), 405);
    }

    if (request.method !== "POST") {
      return jsonResponse(rpcError(null, ERR_INVALID_REQUEST, "Method not allowed."), 405);
    }

    const declared = request.headers.get("MCP-Protocol-Version");
    if (declared && !SUPPORTED_PROTOCOL_VERSIONS.includes(declared)) {
      return jsonResponse(
        rpcError(null, ERR_INVALID_REQUEST, `Unsupported MCP-Protocol-Version: ${declared}`),
        400,
      );
    }

    let payload: unknown;
    try {
      payload = await request.json();
    } catch {
      return jsonResponse(rpcError(null, ERR_PARSE, "Invalid JSON."), 400);
    }

    if (Array.isArray(payload)) {
      // JSON-RPC batching was removed from MCP in the 2025-06-18 revision.
      return jsonResponse(rpcError(null, ERR_INVALID_REQUEST, "Batched requests are not supported."), 400);
    }

    const msg = payload as JsonRpcRequest;
    if (!msg || typeof msg.method !== "string") {
      return jsonResponse(rpcError(null, ERR_INVALID_REQUEST, "Not a JSON-RPC request."), 400);
    }

    try {
      const response = await handleRpc(msg, env);
      // Notifications and responses get 202 Accepted with an empty body.
      if (response === null) return new Response(null, { status: 202, headers: CORS_HEADERS });
      return jsonResponse(response);
    } catch (err) {
      return jsonResponse(rpcError(msg.id ?? null, ERR_INTERNAL, (err as Error).message), 500);
    }
  },
};
