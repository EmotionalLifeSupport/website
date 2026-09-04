"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { applyAnalyticsConsent } from "../lib/google-analytics";
import {
  type ConsentChoice,
  COOKIE_SETTINGS_EVENT,
  getServerConsentChoice,
  readConsentChoice,
  saveConsentChoice,
  subscribeToConsentChoice,
} from "../lib/consent";

type CookieConsentProps = {
  googleAnalyticsId?: string;
};

export default function CookieConsent({ googleAnalyticsId }: CookieConsentProps) {
  const choice = useSyncExternalStore(
    subscribeToConsentChoice,
    readConsentChoice,
    getServerConsentChoice,
  );
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const openSettings = () => setShowSettings(true);
    window.addEventListener(COOKIE_SETTINGS_EVENT, openSettings);
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, openSettings);
  }, []);

  useEffect(() => {
    applyAnalyticsConsent(choice, googleAnalyticsId);
  }, [choice, googleAnalyticsId]);

  const choose = (nextChoice: ConsentChoice) => {
    saveConsentChoice(nextChoice);
    setShowSettings(false);

    if (nextChoice === "essential") applyAnalyticsConsent(nextChoice, googleAnalyticsId);
  };

  if (choice !== null && !showSettings) {
    return null;
  }

  return (
    <aside className="cookie-consent" aria-labelledby="cookie-consent-title">
      <div className="cookie-consent-copy">
        <h2 id="cookie-consent-title">Help us improve your experience</h2>
        <p>
          With your permission, we use optional HubSpot and Google Analytics cookies to
          understand how people find and use this website. This helps us make the experience
          more useful and understand which routes lead to enquiries and bookings. You can
          change your choice at any time.
        </p>
        {showSettings ? (
          <div className="cookie-category-copy">
            <p><strong>Essential:</strong> Keeps the website working and remembers your choice.</p>
            <p><strong>Optional:</strong> Loads the embedded booking calendar and privacy-conscious website analytics.</p>
          </div>
        ) : null}
        <p className="cookie-notice-link">
          Read the <Link href="/cookies">cookie notice</Link>.
        </p>
      </div>
      <div className="cookie-consent-actions">
        <button className="button" type="button" onClick={() => choose("optional")}>
          Allow optional cookies
        </button>
        <button className="button button--secondary" type="button" onClick={() => choose("essential")}>
          Essential cookies only
        </button>
        {!showSettings ? (
          <button className="cookie-choose-button" type="button" onClick={() => setShowSettings(true)}>
            Choose settings
          </button>
        ) : null}
      </div>
    </aside>
  );
}
