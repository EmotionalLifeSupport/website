import type { ConsentChoice } from "./consent";

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  [key: `ga-disable-${string}`]: boolean | undefined;
};

const scriptId = "els-google-analytics";

export function applyAnalyticsConsent(choice: ConsentChoice | null, id?: string) {
  if (!id) return;
  const analyticsWindow = window as unknown as AnalyticsWindow;
  const existingScript = document.getElementById(scriptId);

  if (choice !== "optional") {
    analyticsWindow[`ga-disable-${id}`] = true;
    if (existingScript) {
      // Unload the running tracker rather than leaving it sending denied-consent pings.
      // The saved preference survives this reload; blocked storage fails closed.
      window.location.reload();
    }
    return;
  }

  analyticsWindow[`ga-disable-${id}`] = false;
  if (existingScript) return;

  analyticsWindow.dataLayer ??= [];
  analyticsWindow.gtag ??= function () {
    // Google's command queue requires Arguments objects, not rest-parameter arrays.
    // eslint-disable-next-line prefer-rest-params -- Required by the gtag protocol.
    analyticsWindow.dataLayer?.push(arguments);
  };
  const gtag = analyticsWindow.gtag;
  gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  gtag("js", new Date());
  gtag("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  gtag("config", id, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });

  const script = document.createElement("script");
  script.id = scriptId;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(script);
}
