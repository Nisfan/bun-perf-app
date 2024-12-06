const server = Bun.serve({
  port: 4000,
  async fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") {
      await new Promise((resolve) => setTimeout(() => resolve(0), 0));
      return new Response("Bun!");
    }

    return new Response("404!");
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
