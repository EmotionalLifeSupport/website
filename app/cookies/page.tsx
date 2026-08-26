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
        <p className="legal-version">Updated 25 August 2026</p>

        <h2>What the site uses</h2>
        <p>
          The website uses essential technology for security, delivery and remembering
          your privacy choice. With your permission, it can also load the embedded
          HubSpot booking calendar and Google Analytics.
        </p>
        <p>
          Essential technology operates without optional-cookie consent. HubSpot and
          Google Analytics remain disabled until you select <strong>Allow optional cookies</strong>.
        </p>

        <h2>HubSpot booking calendar</h2>
        <p>
          If you allow optional cookies, the website loads HubSpot&apos;s embedded booking
          calendar. HubSpot may receive your IP address, browser and device information,
          use cookies needed for the calendar and measurement, and receive the information
          you enter when booking.
        </p>
        <p>
          If you choose <strong>Essential cookies only</strong>, the calendar does not load
          on this website. You can still open the separate HubSpot booking page. That visit
          is governed by the notices and controls shown by HubSpot.
        </p>

        <h2>Google Analytics</h2>
        <p>
          If you allow optional cookies, Google Analytics helps us understand how people
          find and use the website and which routes lead to enquiries and bookings. We
          configure it without advertising personalisation or Google signals and do not
          send names, email addresses, phone numbers or booking-form content to Google
          Analytics.
        </p>
        <p>
          Google Analytics remains disabled if you select <strong>Essential cookies only</strong>.
        </p>

        <h2>Changing your choice</h2>
        <p>
          You can reopen <strong>Cookie settings</strong> from any page and change your
          choice at any time. Choosing essential cookies only prevents optional tools from
          loading on future page views. You can also clear cookies through your browser
          settings.
        </p>
      </article>
      <SiteFooter />
    </main>
  );
}
