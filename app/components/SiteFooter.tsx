import Link from "next/link";
import CookieSettingsButton from "./CookieSettingsButton";

export default function SiteFooter() {
  return (
    <footer>
      <div className="footer-main">
        <p>
          Emotional Life Support · Support through divorce and rebuilding · Online across
          England and Wales and face-to-face in Bournemouth, Christchurch and Poole
        </p>
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
