import Link from "next/link";
import CookieSettingsButton from "./CookieSettingsButton";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="17.4" cy="6.65" r="1" className="social-icon-fill" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15.25 3v11.35a5.35 5.35 0 1 1-4.3-5.24v3.28a2.2 2.2 0 1 0 1.15 1.96V3h3.15Zm0 0c.38 2.25 1.72 3.58 3.75 3.95v3.12a7.7 7.7 0 0 1-3.75-1.32" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.25 21v-8h2.7l.4-3h-3.1V8.1c0-.87.25-1.46 1.54-1.46h1.65V3.95a22 22 0 0 0-2.4-.12c-2.38 0-4.01 1.45-4.01 4.12V10H8.34v3h2.69v8h3.22Z" className="social-icon-fill" />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer>
      <div className="footer-main">
        <p>
          Emotional Life Support · Support through divorce and rebuilding · Online across
          England and Wales and face-to-face in Bournemouth, Christchurch and Poole
        </p>
        <nav className="footer-social-links" aria-label="Social media">
          <a
            href="https://www.instagram.com/EmotionalLifeSupport/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
            <span className="visually-hidden">Emotional Life Support on Instagram</span>
          </a>
          <a
            href="https://www.tiktok.com/@EmotionalLifeSupport"
            target="_blank"
            rel="noreferrer"
          >
            <TikTokIcon />
            <span className="visually-hidden">Emotional Life Support on TikTok</span>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61593985436193"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
            <span className="visually-hidden">Emotional Life Support on Facebook</span>
          </a>
        </nav>
        <nav className="footer-links" aria-label="Legal information">
          <Link href="/privacy">Privacy</Link>
          <Link href="/cookies">Cookies</Link>
          <Link href="/terms">Service terms</Link>
          <CookieSettingsButton />
        </nav>
      </div>
      <p className="company-details">
        Emotional Life Support is a trading name of DM4L LTD, registered in England and
        Wales. Company number 13764105. Registered office: 30 London Road,
        Sawbridgeworth, England, CM21 9JS.
      </p>
    </footer>
  );
}
