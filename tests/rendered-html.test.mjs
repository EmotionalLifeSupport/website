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
  assert.match(html, /Book your free first session/);
  assert.match(html, /Support through the divorce itself/);
  assert.match(html, /Peace\. Courage\. Wisdom\./);
  assert.match(html, /Someone in your corner when life gets difficult/);
  assert.match(html, /You don&#x27;t have to pretend you&#x27;re okay/);
  assert.match(html, /More than just someone to talk to/);
  assert.match(html, /Meet Chris/);
  assert.match(html, /href="https:\/\/andysmanclub\.co\.uk\/"/);
  assert.match(html, /href="https:\/\/www\.samaritans\.org\/"/);
  assert.match(html, /A men’s suicide prevention charity offering free peer-to-peer support groups/);
  assert.match(html, /A charity providing confidential emotional support/);
  assert.match(html, /Start with one conversation/);
  assert.match(html, /The first conversation is the only decision you need to make right now/);
  assert.match(html, /View ongoing support options and pricing/);
  assert.match(html, /Regular support for as long as it continues to be useful/);
  assert.match(html, /Divorce Concierge/);
  assert.match(html, /Questions you may have/);
  assert.match(html, /What people I&#x27;ve supported say/);
  assert.match(html, /Upgrades can take effect immediately/);
  assert.match(html, /not guaranteed emotional, relationship, legal or financial results/);
  assert.match(html, /Urgent and specialist support/);
  assert.match(html, /Read about boundaries, urgent help and specialist support/);
  assert.match(html, /Privacy/);
  assert.doesNotMatch(html, /<h3>Leaving<\/h3>/i);
  assert.match(html, /One-Off Two-Hour Support Session/);
  assert.match(html, /£300/);
  assert.match(html, /optional next step after your free first session/);
  assert.doesNotMatch(html, /Book a two-hour support session/);
  assert.doesNotMatch(html, /Start with the free hour|Discuss Standard Support|Discuss Enhanced Support|Discuss concierge support/);
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

test("every published route includes the consent-aware Google Analytics configuration", async () => {
  const routes = ["/", "/chris", "/privacy", "/cookies", "/terms"];

  for (const pathname of routes) {
    const response = await render(pathname);
    assert.equal(response.status, 200, `${pathname} should render successfully`);
    const html = await response.text();
    assert.match(html, /G-9KYHPSW76N/, `${pathname} should include the shared GA4 measurement ID`);
  }
});
