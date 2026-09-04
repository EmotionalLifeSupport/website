import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy notice | Emotional Life Support",
  description: "How Emotional Life Support collects, uses and protects personal information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main>
      <header className="document-header">
        <Link className="eyebrow brand-link" href="/">Emotional Life Support</Link>
      </header>
      <article className="legal-page">
        <p className="hero-context">Privacy notice</p>
        <h1>How we use personal information</h1>
        <p className="legal-version">Updated 4 September 2026 · Complete the launch actions below before accepting paid clients.</p>

        <h2>Who is responsible for your information</h2>
        <p>
          DM4L LTD, trading as Emotional Life Support, is the controller of personal
          information used to provide this service. DM4L LTD is registered in England
          and Wales under company number 13764105. Its registered office is 30 London
          Road, Sawbridgeworth, England, CM21 9JS.
        </p>
        <p className="launch-note">
          <strong>Launch action:</strong> add the public privacy email address here before paid
          bookings open. Until then, privacy requests may be sent to the registered office.
        </p>

        <h2>Information we collect</h2>
        <ul>
          <li>basic contact, identity, booking and communication details;</li>
          <li>contract, invoice and payment records;</li>
          <li>brief, factual service notes and records of agreed actions;</li>
          <li>information you choose to share about your relationships, family, health or wellbeing;</li>
          <li>safety or safeguarding information, including information about other people;</li>
          <li>technical information needed to keep the website secure and remember a cookie choice; and</li>
          <li>with permission, website usage, traffic-source and campaign-attribution information collected through HubSpot and Google Analytics.</li>
        </ul>
        <p>
          Please do not put sensitive information in the website booking form. The
          service does not record sessions by default and will not ask for passwords,
          access to bank accounts or control of your money.
        </p>

        <h2>Why we use it and our lawful bases</h2>
        <div className="legal-table-wrap">
          <table>
            <thead><tr><th>Purpose</th><th>Lawful basis</th></tr></thead>
            <tbody>
              <tr><td>Responding to an enquiry and assessing whether the service is suitable</td><td>Steps requested before a contract and legitimate interests in running a safe service</td></tr>
              <tr><td>Providing support, managing appointments and taking payment</td><td>Performance of a contract</td></tr>
              <tr><td>Invoices, tax records and legally required disclosures</td><td>Legal obligation</td></tr>
              <tr><td>Safety, complaints, legal claims and service quality</td><td>Legitimate interests, legal obligation or vital interests, depending on the circumstances</td></tr>
              <tr><td>Understanding website use, traffic sources and which routes lead to enquiries and bookings</td><td>Consent for optional cookies and related analytics</td></tr>
              <tr><td>Optional email marketing</td><td>Consent, unless a lawful customer soft opt-in is documented and offered</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Information about health, wellbeing or similar highly personal matters is
          special-category data. Where it is needed for this optional support service,
          we normally rely on your explicit consent as the additional condition. In a
          genuine emergency we may instead rely on vital interests where the law allows.
          You may withdraw consent, although information already needed for legal or
          safeguarding records may still be retained.
        </p>
        <p>
          Allegations about possible offences require separate legal protection. We
          minimise this information and use it only when necessary for confidential
          support, safeguarding or legal claims. The final processing condition and
          policy document must be approved before the paid service opens.
        </p>

        <h2>Who receives information</h2>
        <p>
          Information may be handled by carefully selected providers of website hosting,
          booking, email, video calls, secure records and payments. They may use it only
          under appropriate contracts and instructions. We may also share the minimum
          necessary information with a professional you ask us to contact, our advisers
          or insurers, emergency services, or a safeguarding authority when justified.
          We do not sell personal information and do not use a client&apos;s support history
          for targeted advertising.
        </p>
        <p>
          HubSpot provides the booking calendar and related CRM services. Google provides
          website analytics when optional cookies are allowed.
        </p>
        <p>
          You can use the separate HubSpot booking page without accepting optional cookies
          on this website. Information you submit to request an appointment is used to
          handle your booking; it does not give us permission for optional website
          tracking or email marketing. You can withdraw optional website tracking through
          Cookie settings. If analytics is running, the website reloads to stop it.
        </p>
        <p className="launch-note">
          <strong>Launch action:</strong> name the final booking, email/calendar, video,
          payment, messaging, record-storage and hosting providers here after their
          contracts and international-transfer safeguards have been checked.
        </p>

        <h2>International transfers</h2>
        <p>
          Some suppliers may process information outside the UK. Before that happens we
          will check that an adequacy regulation or another lawful safeguard applies,
          such as the UK International Data Transfer Agreement or the UK Addendum, and
          assess whether additional protections are needed.
        </p>

        <h2>How long we keep information</h2>
        <ul>
          <li>unsuccessful or abandoned enquiries: normally 90 days;</li>
          <li>booking and routine correspondence: normally 12 months after the last contact;</li>
          <li>contracts, invoices and payment records: normally six years;</li>
          <li>minimal client, complaint and incident records: normally six years after the service ends, subject to insurer and legal advice;</li>
          <li>marketing records: until consent is withdrawn, with a minimal suppression record retained to respect the opt-out; and</li>
          <li>cookie choice records: until the choice is changed or the storage expires.</li>
        </ul>
        <p>We may keep a particular record longer where a legal claim, safeguarding concern or legal duty requires it.</p>

        <h2>Your rights</h2>
        <p>
          Depending on the circumstances, you may ask for access, correction, deletion,
          restriction, portability or an objection to use of your information. You may
          withdraw consent at any time. You also have the right to complain to the
          Information Commissioner&apos;s Office. Visit <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noreferrer">ico.org.uk/make-a-complaint</a> or call 0303 123 1113.
        </p>

        <h2>Safety and confidentiality</h2>
        <p>
          The service is private but confidentiality is not absolute. We may act where
          there is a credible and serious risk of harm, a safeguarding concern involving
          a child or adult at risk, a legal requirement, or a need to establish or defend
          legal rights. Where safe and lawful, we will discuss this with you first and
          share only what is necessary.
        </p>
      </article>
      <SiteFooter />
    </main>
  );
}
