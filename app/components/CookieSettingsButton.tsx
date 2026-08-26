"use client";

import { useSyncExternalStore } from "react";
import {
  COOKIE_SETTINGS_EVENT,
  getServerConsentChoice,
  readConsentChoice,
  subscribeToConsentChoice,
} from "../lib/consent";

export default function CookieSettingsButton() {
  const choice = useSyncExternalStore(
    subscribeToConsentChoice,
    readConsentChoice,
    getServerConsentChoice,
  );

  if (choice === null) return null;

  return (
    <button
      className="footer-cookie-settings"
      type="button"
      onClick={() => window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT))}
    >
      Cookie settings
    </button>
  );
}
