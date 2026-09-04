import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import test from "node:test";
import ts from "typescript";

function loadModule(file, globals) {
  const source = readFileSync(new URL(file, import.meta.url), "utf8");
  const code = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const context = vm.createContext({ exports: {}, ...globals });
  vm.runInContext(code, context);
  return context.exports;
}

function analyticsHarness() {
  const scripts = [];
  let reloads = 0;
  const window = { location: { reload: () => { reloads += 1; } } };
  const document = {
    getElementById: id => scripts.find(script => script.id === id),
    createElement: () => ({}),
    head: { appendChild: script => scripts.push(script) },
  };
  const { applyAnalyticsConsent } = loadModule("../app/lib/google-analytics.ts", { window, document });
  return { applyAnalyticsConsent, window, scripts, reloads: () => reloads };
}

const id = "G-9KYHPSW76N";

test("unknown and essential consent never load Google or queue tracking", () => {
  const h = analyticsHarness();
  for (const choice of [null, "essential"]) h.applyAnalyticsConsent(choice, id);
  assert.equal(h.scripts.length, 0);
  assert.equal(h.window.dataLayer, undefined);
  assert.equal(h.window[`ga-disable-${id}`], true);
  assert.equal(h.reloads(), 0);
});

test("acceptance uses Google's Arguments command protocol with advertising denied", () => {
  const h = analyticsHarness();
  h.applyAnalyticsConsent("optional", id);
  assert.equal(h.scripts.length, 1);
  assert.equal(h.scripts[0].src, `https://www.googletagmanager.com/gtag/js?id=${id}`);
  const commands = h.window.dataLayer;
  for (const command of commands) assert.equal(Object.prototype.toString.call(command), "[object Arguments]");
  assert.equal(commands[0][0], "consent");
  assert.equal(commands[0][1], "default");
  assert.equal(commands[0][2].analytics_storage, "denied");
  const update = commands.find(c => c[0] === "consent" && c[1] === "update");
  assert.equal(update[2].analytics_storage, "granted");
  for (const field of ["ad_storage", "ad_user_data", "ad_personalization"]) assert.equal(update[2][field], "denied");
  const config = commands.find(c => c[0] === "config");
  assert.equal(config[1], id);
  assert.equal(config[2].allow_google_signals, false);
  assert.equal(config[2].allow_ad_personalization_signals, false);
});

test("repeated acceptance does not duplicate the initial page-view configuration", () => {
  const h = analyticsHarness();
  h.applyAnalyticsConsent("optional", id);
  h.applyAnalyticsConsent("optional", id);
  assert.equal(h.scripts.length, 1);
  assert.equal(h.window.dataLayer.filter(c => c[0] === "config").length, 1);
});

test("withdrawal disables collection and unloads analytics without queuing denied pings", () => {
  const h = analyticsHarness();
  h.applyAnalyticsConsent("optional", id);
  const count = h.window.dataLayer.length;
  h.applyAnalyticsConsent("essential", id);
  assert.equal(h.window[`ga-disable-${id}`], true);
  assert.equal(h.window.dataLayer.length, count);
  assert.equal(h.reloads(), 1);
});

test("cookie choices work when browser storage is blocked and respond to cross-tab withdrawal", () => {
  const listeners = new Map();
  const window = {
    localStorage: {
      getItem: () => { throw new Error("Blocked"); },
      setItem: () => { throw new Error("Blocked"); },
    },
    addEventListener: (name, fn) => listeners.set(name, fn),
    removeEventListener: name => listeners.delete(name),
    dispatchEvent: event => listeners.get(event.type)?.(event),
  };
  class CustomEvent { constructor(type, options) { this.type = type; this.detail = options.detail; } }
  const consent = loadModule("../app/lib/consent.ts", { window, CustomEvent });
  let changes = 0;
  const unsubscribe = consent.subscribeToConsentChoice(() => changes++);
  assert.equal(consent.readConsentChoice(), null);
  consent.saveConsentChoice("optional");
  assert.equal(consent.readConsentChoice(), "optional");
  consent.saveConsentChoice("essential");
  assert.equal(consent.readConsentChoice(), "essential");
  window.localStorage.getItem = () => "optional";
  listeners.get("storage")({ key: consent.CONSENT_STORAGE_KEY });
  assert.equal(consent.readConsentChoice(), "optional");
  window.localStorage.getItem = () => "essential";
  listeners.get("storage")({ key: consent.CONSENT_STORAGE_KEY });
  assert.equal(consent.readConsentChoice(), "essential");
  assert.equal(changes, 4);
  unsubscribe();
  assert.equal(listeners.size, 0);
});
