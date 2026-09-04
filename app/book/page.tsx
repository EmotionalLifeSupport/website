import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HubSpotMeeting from "../components/HubSpotMeeting";
import CookieSettingsButton from "../components/CookieSettingsButton";
import "./booking.css";

export const metadata: Metadata = {
  title: "Book Your First Session | Emotional Life Support",
  description: "Book a free first conversation with Chris. Choose 2 hours, 1 hour, or just 30 minutes, with no preparation and no pressure to continue.",
  alternates: { canonical: "/book" },
};

export default function BookingPage() {
  return (
    <>
      <header className="booking-header">
        <Link className="brand-link" href="/">
          <Image className="brand-logo" src="/emotional-life-support-logo.png" alt="" width={256} height={256} priority />
          <span>Emotional Life Support</span>
        </Link>
        <Link className="booking-back" href="/">Back to the website</Link>
      </header>
      <main className="booking-page" id="main-content">
        <div className="booking-intro">
          <p className="section-kicker">A little space, just for you</p>
          <h1>Book your first session free, saving £300.</h1>
          <p className="booking-lead">A free, one-to-one conversation with Chris to talk through what is happening and what would help you most.</p>
          <ul className="booking-reassurance" aria-label="What to expect">
            <li>First session free</li>
            <li>No preparation needed</li>
            <li>No pressure to continue</li>
          </ul>
        </div>
        <section className="booking-calendar" aria-labelledby="calendar-title">
          <h2 id="calendar-title">Choose a time that works for you</h2>
          <p>Choose 2 hours, 1 hour, or just 30 minutes. Your first session is free whichever duration you choose.</p>
          <HubSpotMeeting bookingUrl="https://meetings-eu1.hubspot.com/chris247" />
        </section>
        <section className="booking-expectations" aria-labelledby="expectations-title">
          <h2 id="expectations-title">You don&apos;t need to have it all worked out.</h2>
          <p>Bring whatever feels most difficult or important. There is no need to tell your story in a particular order, and you do not need to choose a support package. We can use the time for what would help you most.</p>
          <p>Sessions are available online or face-to-face in Bournemouth, Christchurch and Poole. If you would prefer to meet face-to-face, book an online session first, then reply to your booking confirmation email to request a face-to-face session.</p>
          <p>Emotional Life Support offers non-clinical emotional and practical support.</p>
        </section>
      </main>
      <footer className="booking-footer">
        <p>Emotional Life Support · A trading name of DM4L LTD</p>
        <nav aria-label="Legal information">
          <Link href="/privacy">Privacy</Link>
          <Link href="/cookies">Cookies</Link>
          <Link href="/terms">Service terms</Link>
          <CookieSettingsButton />
        </nav>
      </footer>
    </>
  );
}
