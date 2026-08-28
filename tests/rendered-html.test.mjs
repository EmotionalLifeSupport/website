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
  assert.match(html, /href="\/favicon\.png"/);
  assert.match(html, /Book your first session free/);
  assert.match(html, /First session free · worth £300/);
  assert.match(html, /Lived experience/);
  assert.match(html, /Choose two hours, one hour, or 30 minutes/);
  assert.match(html, /Select two hours, one hour, or 30 minutes/);
  assert.match(html, /social-share-chair-v1\.png/);
  assert.match(html, /summary_large_image/);
  assert.match(html, /The challenges you face through and after divorce/);
  assert.match(html, /Untangling yourself from your old life/);
  assert.match(html, /Finding yourself and rebuilding your life/);
  assert.match(html, /Peace\. Courage\. Wisdom\./);
  assert.match(html, /What can help while everything is changing/);
  assert.match(html, /Somewhere you don&#x27;t have to pretend you&#x27;re okay/);
  assert.match(html, /Help working out what comes next/);
  assert.equal(
    (html.match(/<details name="support-offering">/g) ?? []).length,
    6,
    "all six support topics should belong to the same exclusive accordion group",
  );
  assert.doesNotMatch(
    html,
    /<details[^>]*name="support-offering"[^>]*\bopen\b/,
    "the support accordion should start fully collapsed",
  );
  assert.match(html, /Get support from someone who understands/);
  assert.match(html, /About you/);
  assert.match(html, /Recommendations/);
  assert.match(html, /What you will get/);
  assert.match(html, /Meet Chris/);
  assert.match(html, /href="https:\/\/andysmanclub\.co\.uk\/"/);
  assert.match(html, /href="https:\/\/www\.samaritans\.org\/"/);
  assert.match(html, /A men’s suicide prevention charity offering free peer-to-peer support groups/);
  assert.match(html, /A charity providing confidential emotional support/);
  assert.ok(
    html.indexOf("Volunteer for") < html.indexOf("Nearly two years navigating"),
    "the volunteering proof point should appear first",
  );
  assert.match(html, /Start with one conversation/);
  assert.doesNotMatch(html, /Start with one conversation\. We can work the rest out afterwards\./);
  assert.doesNotMatch(html, /You only need to decide whether you want to have the first conversation\./);
  assert.match(html, /Get started for free/);
  assert.match(html, /Up to two hours available\. You choose how long/);
  assert.match(html, /View ongoing support options and pricing/);
  assert.match(html, /Regular support for as long as it continues to be useful/);
  assert.match(html, /Divorce Concierge/);
  assert.match(html, /Questions you may have/);
  assert.match(html, /Can I get my ex to pay for this/);
  assert.match(html, /Click to see sample email to solicitor/);
  assert.match(html, /The service would cost £\[amount\]/);
  assert.match(html, /What people I&#x27;ve supported say/);
  assert.ok(
    html.indexOf("What people I&#x27;ve supported say") <
      html.indexOf("You don&#x27;t need to work out what kind of support you need before we talk"),
    "the reassurance booking prompt should follow testimonials",
  );
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
  assert.doesNotMatch(html, /Book your free first session|Free one-hour call|Start with the free hour|Discuss Standard Support|Discuss Enhanced Support|Discuss concierge support/);
  assert.doesNotMatch(html, /No need to choose now|The first conversation is the only decision to make now/);
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
