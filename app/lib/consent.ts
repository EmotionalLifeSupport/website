export const CONSENT_STORAGE_KEY = "els_cookie_consent_v1";
export const CONSENT_CHANGE_EVENT = "els:consent-change";
export const COOKIE_SETTINGS_EVENT = "els:open-cookie-settings";

export type ConsentChoice = "optional" | "essential";

let pageChoice: ConsentChoice | undefined;

export function readConsentChoice(): ConsentChoice | null {
  if (pageChoice !== undefined) return pageChoice;
  try {
    const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return stored === "optional" || stored === "essential" ? stored : null;
  } catch {
    return null;
  }
}

export function saveConsentChoice(choice: ConsentChoice) {
  pageChoice = choice;
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  } catch {
    // The choice still applies for the current page if storage is unavailable.
  }

  window.dispatchEvent(
    new CustomEvent<ConsentChoice>(CONSENT_CHANGE_EVENT, { detail: choice }),
  );
}

export function subscribeToConsentChoice(onStoreChange: () => void) {
  const handleChange = () => onStoreChange();
  const handleStorage = (event: StorageEvent) => {
    if (event.key !== null && event.key !== CONSENT_STORAGE_KEY) return;
    pageChoice = undefined;
    onStoreChange();
  };
  window.addEventListener(CONSENT_CHANGE_EVENT, handleChange);
  window.addEventListener("storage", handleStorage);
  return () => {
    window.removeEventListener(CONSENT_CHANGE_EVENT, handleChange);
    window.removeEventListener("storage", handleStorage);
  };
}

export function getServerConsentChoice() {
  return null;
}
