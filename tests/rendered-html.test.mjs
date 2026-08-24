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
  assert.match(html, /<title>Emotional Support Through Divorce \| Emotional Life Support<\/title>/i);
  assert.match(html, /Book a free hour/);
  assert.match(html, /Support through the divorce itself/);
  assert.match(html, /Peace\. Courage\. Wisdom\./);
  assert.match(html, /Guilt-free time entirely about you/);
  assert.match(html, /Meet Chris/);
  assert.match(html, /href="https:\/\/andysmanclub\.co\.uk\/"/);
  assert.match(html, /href="https:\/\/www\.samaritans\.org\/"/);
  assert.match(html, /A men’s suicide prevention charity offering free peer-to-peer support groups/);
  assert.match(html, /A charity providing confidential emotional support/);
  assert.match(html, /Take an hour that is entirely yours/);
  assert.match(html, /Open the booking page/);
  assert.match(html, /Regular support for as long as you need it/);
  assert.match(html, /Discuss Standard Support/);
  assert.match(html, /Divorce Concierge/);
  assert.match(html, /Questions you may have/);
  assert.match(html, /What people I&#x27;ve supported say/);
  assert.match(html, /Upgrades can take effect immediately/);
  assert.match(html, /not guaranteed emotional, relationship, legal or financial results/);
  assert.match(html, /Urgent and specialist support/);
  assert.match(html, /Privacy/);
  assert.doesNotMatch(html, /<h3>Leaving<\/h3>/i);
  assert.match(html, /One-Off Two-Hour Support Session/);
  assert.match(html, /£300/);
  assert.match(html, /optional next step after your free support call/);
  assert.doesNotMatch(html, /Book a two-hour support session/);
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
