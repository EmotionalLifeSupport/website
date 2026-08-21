import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../components/SiteFooter";
import SiteNavigation from "../components/SiteNavigation";

export const metadata: Metadata = {
  title: "Why I created Emotional Life Support",
  description:
    "Chris shares the personal experience behind Emotional Life Support and why he supports people through separation, divorce and rebuilding.",
  alternates: {
    canonical: "/chris",
  },
};

export default function ChrisPage() {
  return (
    <>
      <SiteNavigation />
      <main id="main-content">

      <article className="page-section profile-hero profile-story">
        <p className="hero-context">About Chris</p>
        <h1>Why I created Emotional Life Support</h1>

        <p className="lead">I know what it is like to lose sight of the life beyond separation.</p>

        <p>
          Having experienced my parents&apos; divorce, I entered marriage determined to
          keep my own family together. But after more than a decade, it became clear
          that neither of us was happy. Important needs were not being met,
          communication had become difficult, and our marriage was no longer working
          for either of us. We had kept going for longer than perhaps we should have.
        </p>

        <p>
          Even so, accepting that we needed to separate was incredibly difficult. Our
          lives were completely intertwined, and I could not imagine what life apart
          would look like. More than anything, I could not bear the thought of going
          from seeing my two children every day to seeing them only some of the time.
        </p>

        <p>
          The divorce took almost two years and eventually involved legal costs
          approaching £100,000, money I deeply wish had not needed to be spent. I tried
          to communicate calmly, focus on the facts and keep moving forward, but there
          were times when the process felt endless. I felt trapped, overwhelmed and
          unable to cope with things I would normally have handled.
        </p>

        <p>
          At the same time, I was undergoing high-intensity chemotherapy. I have beaten
          cancer twice and have also been through radiotherapy, but there were days on
          the cancer ward when cancer did not feel like the biggest thing I was facing.
          Missing my children did.
        </p>

        <p>
          At my lowest, I was not suicidal or planning to harm myself. But I had lost
          my sense of purpose. I struggled to understand what my life was for or to
          imagine a future beyond what I was going through. Friends and family did
          their best, but none of them had experienced anything similar. Being told
          “it will be all right” did not help when nobody could tell me what “all right”
          might look like or how long it would take to get there.
        </p>

        <p>
          I needed someone who understood, someone who could listen without offering
          false reassurance, help me make sense of my options and support me through
          the overwhelm one step at a time.
        </p>

        <p>
          I did not handle every moment perfectly. With the experience I have now, I
          would approach some things differently. The right support would not have made
          the difficult realities disappear, but I believe it could have helped me make
          clearer decisions, feel less alone and avoid some unnecessary time, cost and
          stress.
        </p>

        <p>
          Rebuilding involved creating new friendships, learning to parent on my own,
          prioritising my physical and mental health, and building a new home for myself
          and my children. At first, making every decision alone felt strange.
          Gradually, it became part of regaining control of a life that had felt beyond
          my control for so long.
        </p>

        <p>
          In 2023, I first walked into ANDYSMANCLUB because I was struggling with my
          marriage and did not know what to do. I discovered that I was not alone and
          that it really is okay to talk. I later became a volunteer facilitator,
          helping to run its weekly peer-to-peer support groups and create a safe place
          where men can speak openly about how they feel.
        </p>

        <p>
          I am also training to become a listening volunteer with Samaritans. That
          training is helping me become a more empathetic and attentive listener, and
          better able to provide emotional support to people experiencing difficult
          situations.
        </p>
        <p className="credential-note">
          My volunteer roles and training are separate from Emotional Life Support.
          Neither organisation provides or endorses this service.
        </p>

        <p>
          My life is not perfect and my rebuilding is not finished. But I have gone
          from dreading the morning to feeling optimistic about the future. I am
          building a life with purpose and meaning, working out who I am and what I
          want, and making it happen.
        </p>

        <p>
          I will never assume that my experience is the same as yours. But I understand
          how frightening, lonely and overwhelming separation can become, and how much
          difference it makes when someone listens, understands and stays alongside you
          while you find your way forward.
        </p>

        <p className="profile-footer-link">
          <Link className="text-link" href="/">Return to Emotional Life Support</Link>
        </p>
      </article>

      <section className="page-section call-section profile-booking" aria-labelledby="profile-booking-title">
        <h2 id="profile-booking-title">Book a free one-hour support call.</h2>
        <p>
          Choose a time for a private conversation focused entirely on what would help
          you most. There is no preparation, pitch or pressure to continue afterwards.
        </p>
        <div className="meeting-booking">
          <div>
            <p className="section-kicker">Your free support call</p>
            <h3>Choose a time.</h3>
            <p className="booking-location">
              Meetings take place online by default. If you are in the Bournemouth area
              and would prefer to meet in person, reply to your confirmation email after
              booking and we can discuss a suitable alternative location.
            </p>
          </div>
          <ul className="booking-assurances" aria-label="Booking details">
            <li>60 minutes</li>
            <li>Private conversation</li>
            <li>No pitch or pressure afterwards</li>
          </ul>
          <a className="button booking-button" href="https://meetings-eu1.hubspot.com/chris247" target="_blank" rel="noreferrer">
            View available times
          </a>
          <p className="booking-fallback">
            Opens a booking page in a new tab. Please do not put health, relationship, legal or
            safeguarding details in the booking form. Read our <Link href="/privacy">privacy notice</Link>.
          </p>
        </div>
      </section>
      </main>
      <SiteFooter />
    </>
  );
}
