import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Cookie notice | Emotional Life Support",
  description: "Cookies and similar technologies used by the Emotional Life Support website.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <main>
      <header className="document-header"><Link className="eyebrow brand-link" href="/">Emotional Life Support</Link></header>
      <article className="legal-page">
        <p className="hero-context">Cookie notice</p>
        <h1>Your privacy choices on this website</h1>
        <p className="legal-version">Draft dated 19 August 2026</p>

        <h2>What the site uses</h2>
        <p>
          The main website does not load advertising or HubSpot analytics trackers. It
          may use strictly necessary technology for security, delivery and remembering
          a privacy choice. These functions do not require optional-cookie consent.
        </p>

        <h2>HubSpot booking page</h2>
        <p>
          The website does not embed HubSpot or load HubSpot code. If you choose “View
          available times”, you leave this website and open HubSpot in a new tab. HubSpot
          may then receive your IP address, browser and device information and use cookies
          for its meeting service or measurement. That separate visit is governed by the
          notices and controls shown on HubSpot&apos;s website.
        </p>

        <h2>Changes</h2>
        <p>
          Any future embedded booking tool, analytics, advertising pixels, chat tools or recordings must remain
          disabled until an equally prominent accept and reject choice has been made.
          This notice and the consent control must be updated before adding them.
        </p>
      </article>
      <SiteFooter />
    </main>
  );
}
