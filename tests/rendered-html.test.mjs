import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the complete homepage journey", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Emotional Life Support<\/title>/i);
  assert.match(html, /Book a free hour/);
  assert.match(html, /Trying to find steadier ground/);
  assert.match(html, /Meet Chris/);
  assert.match(html, /View available times/);
  assert.match(html, /Rolling monthly/);
  assert.match(html, /Divorce Concierge/);
  assert.match(html, /Urgent and specialist support/);
  assert.match(html, /Privacy/);
  assert.doesNotMatch(html, /MeetingsEmbedCode|meetings-iframe-container|hs-script-loader/i);
});

test("server-renders the Chris and legal routes", async () => {
  const routes = [
    ["/chris", /Why I created Emotional Life Support/],
    ["/privacy", /How we use personal information/],
    ["/cookies", /Your privacy choices on this website/],
    ["/terms", /A clear agreement for support/],
  ];

  for (const [pathname, expected] of routes) {
    const response = await render(pathname);
    assert.equal(response.status, 200, `${pathname} should render successfully`);
    assert.match(await response.text(), expected);
  }
});
