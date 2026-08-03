/**
 * Node entry point for the devdocs MCP server.
 *
 * The core in ./index.ts is written against the Web fetch API; this file only
 * translates Node's http primitives to Request/Response and back. It is the sole
 * entry point for local development and for the container image alike.
 */
import { createServer } from "node:http";
import { Readable } from "node:stream";
import app, { type Env } from "./index";

const env: Env = {
  DOCS_BASE_URL: process.env.DOCS_BASE_URL ?? "https://devdocs.prestashop-project.org/",
  DOCS_VERSION: process.env.DOCS_VERSION ?? "9",
  ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID ?? "79DO4UR9Y5",
  ALGOLIA_API_KEY: process.env.ALGOLIA_API_KEY ?? "352524fc37137a45610faa44bcc1a47c",
  ALGOLIA_INDEX: process.env.ALGOLIA_INDEX ?? "prestashop",
};

const port = Number(process.env.PORT ?? 8080);

const server = createServer(async (req, res) => {
  try {
    const url = `http://${req.headers.host ?? "localhost"}${req.url ?? "/"}`;
    const headers = new Headers();
    for (const [name, value] of Object.entries(req.headers)) {
      if (Array.isArray(value)) for (const v of value) headers.append(name, v);
      else if (value !== undefined) headers.set(name, value);
    }

    const method = req.method ?? "GET";
    const hasBody = method !== "GET" && method !== "HEAD";
    const request = new Request(url, {
      method,
      headers,
      body: hasBody ? (Readable.toWeb(req) as unknown as RequestInit["body"]) : undefined,
      // Required by undici when streaming a request body.
      ...(hasBody ? { duplex: "half" as const } : {}),
    });

    const response = await app.fetch(request as never, env);

    res.writeHead(response.status, Object.fromEntries(response.headers.entries()));
    if (response.body) {
      Readable.fromWeb(response.body as never).pipe(res);
    } else {
      res.end();
    }
  } catch (err) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ jsonrpc: "2.0", id: null, error: { code: -32603, message: String(err) } }));
  }
});

server.listen(port, () => {
  console.log(`devdocs MCP server listening on :${port} (docs: ${env.DOCS_BASE_URL})`);
});

// Orchestrators send SIGTERM before stopping an instance; close cleanly.
process.on("SIGTERM", () => server.close(() => process.exit(0)));
