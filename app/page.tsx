import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNavigation from "./components/SiteNavigation";
import SiteFooter from "./components/SiteFooter";

export const metadata: Metadata = {
  title: "Emotional Life Support",
  description:
    "Private emotional support through separation, divorce and rebuilding after an unhealthy relationship.",
  alternates: {
    canonical: "/",
  },
};

const bookingUrl = "https://meetings-eu1.hubspot.com/chris247";

export default function Home() {
  return (
    <>
      <SiteNavigation isHomePage />
      <main id="main-content">
        <section className="page-section hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-context">Support through separation, divorce and rebuilding</p>
            <h1 id="hero-title">Emotional support through the end of an unhealthy relationship</h1>
            <p className="lead">
              The care and honesty of a good friend, with time set aside entirely for you.
            </p>
          </div>
          <figure className="hero-media">
            <Image
              src="/hero-calm-relief-woman-v3.png"
              alt="A woman holding a cup of tea and looking peacefully towards a window"
              width={1122}
              height={1402}
              priority
              sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1200px) 42vw, 560px"
            />
          </figure>
          <div className="hero-action">
            <a className="button" href="#first-conversation">Book a free one-hour support call</a>
            <p className="button-note">
              One full hour focused on what would help you most. No preparation and no
              pressure to continue.
            </p>
            <p className="hero-assurance">
              Someone in your corner who understands difficult divorce first-hand and is
              outside the situation.
            </p>
            <a className="scope-cue" href="#scope">Non-clinical support · Read the scope and safety note</a>
          </div>
        </section>

        <aside className="reassurance-strip" aria-label="What to expect">
          <span>Free 60-minute call</span>
          <span>Private conversation</span>
          <span>No pressure to continue</span>
          <span>Non-clinical support</span>
        </aside>

        <section className="page-section relevance-section" aria-labelledby="relevance-title">
          <p className="section-kicker">This may help if you are…</p>
          <h2 className="section-heading--supporting" id="relevance-title">
            Trying to find steadier ground.
          </h2>
          <div className="relevance-list">
            <article>
              <p className="relevance-label">Leaving</p>
              <p>Unsure whether to stay, go, or how to take the next safe step.</p>
            </article>
            <article>
              <p className="relevance-label">Divorcing</p>
              <p>Carrying difficult decisions, disruption and emotional strain.</p>
            </article>
            <article>
              <p className="relevance-label">Rebuilding</p>
              <p>Finding your confidence, identity and hope for what comes next.</p>
            </article>
          </div>
        </section>

        <section className="page-section early-trust" aria-labelledby="early-trust-title">
          <Image
            className="early-trust-photo"
            src="/chris-amc.jpg"
            alt="Chris Heffer"
            width={540}
            height={900}
            sizes="(max-width: 760px) 112px, 150px"
          />
          <div>
            <p className="section-kicker">Meet Chris</p>
            <h2 className="section-heading--supporting" id="early-trust-title">
              Calm, independent support from someone who understands.
            </h2>
            <ul className="trust-summary">
              <li>First-hand experience of a difficult divorce and rebuilding afterwards</li>
              <li>Volunteer facilitator with ANDYSMANCLUB</li>
              <li>Emotional Support training from Samaritans</li>
            </ul>
            <a className="text-link" href="/chris">Read Chris&apos;s full backstory</a>
          </div>
        </section>

        <section className="page-section problem-section" aria-labelledby="problem-title">
          <h2 className="section-heading--supporting" id="problem-title">
            A difficult divorce can make everything feel uncertain at once.
          </h2>
          <div>
            <p>
              Home, finances, children, work, routines and your sense of self can all
              shift while you are expected to make important decisions. Friends and family
              may care deeply, but they cannot always give the time or independent perspective you need.
            </p>
            <p className="pull-quote">You do not have to hold the whole situation by yourself.</p>
          </div>
        </section>

        <section className="page-section statement-section" aria-labelledby="deeper-title">
          <p className="section-kicker">A steadier way through</p>
          <h2 id="deeper-title">Divorce is painful. The right support can make it easier to carry.</h2>
          <p>
            You cannot remove every hard feeling or conversation. But emotional support,
            practical perspective and space to think can make the situation feel less lonely
            and overwhelming.
          </p>
          <p>The situation may still be difficult. You do not need to face it alone.</p>
        </section>

        <section className="page-section support-section" id="support" aria-labelledby="support-title">
          <p className="section-kicker">What support looks like</p>
          <h2 id="support-title">The right support at the right time.</h2>
          <div className="support-parts">
            <article>
              <h3>Emotional support</h3>
              <p>
                Dedicated time to talk honestly about what is happening and how it is
                affecting you, without judgement, guilt or pressure to feel differently.
              </p>
            </article>
            <article>
              <h3>A sounding board for difficult decisions</h3>
              <p>
                Someone to help you slow things down, explore your options and work out
                which choices feel right for you. The decisions remain yours.
              </p>
            </article>
          </div>
          <p>
            I will not position myself as the expert on your life or tell you what to do.
            I can listen closely, share relevant experience where it may help, ask useful
            questions and stay with the whole picture while you decide what comes next.
          </p>
        </section>

        <section className="page-section about-section" id="about" aria-labelledby="about-title">
          <div className="about-summary">
            <Image
              className="profile-photo"
              src="/chris-amc.jpg"
              alt="Chris Heffer"
              width={540}
              height={900}
              sizes="(max-width: 760px) calc(100vw - 72px), 380px"
            />
            <div className="about-copy">
              <p className="section-kicker">Why Chris</p>
              <h2 id="about-title">Support from someone who understands.</h2>
              <p className="about-intro">
                Hi, I&apos;m Chris. I&apos;ve lived through a difficult divorce and rebuilt my
                life afterwards. I know how valuable it is to have someone calm,
                independent and genuinely present in your corner.
              </p>
              <dl className="proof-list">
                <div>
                  <dt>Lived experience</dt>
                  <dd>A nearly two-year divorce, serious illness and the work of rebuilding family life.</dd>
                </div>
                <div>
                  <dt>Support experience</dt>
                  <dd>Volunteer for ANDYSMANCLUB peer to peer support &amp; Samaritans emotional support</dd>
                </div>
                <div>
                  <dt>Your choices stay yours</dt>
                  <dd>I listen, ask useful questions and share perspective without assuming your experience is the same as mine.</dd>
                </div>
              </dl>
              <a className="text-link" href="/chris">Find out more about my backstory</a>
            </div>
          </div>
        </section>

        <section className="page-section process-section" id="process" aria-labelledby="journey-title">
          <p className="section-kicker">Where you are now</p>
          <h2 id="journey-title">Support for each part of the process.</h2>
          <ol className="journey-list">
            <li>
              <p className="stage-cue">Uncertain and conflicted</p>
              <h3>Leaving</h3>
              <p>Make space for what you are feeling and think through whether, when and how to leave.</p>
            </li>
            <li>
              <p className="stage-cue">Stretched and overwhelmed</p>
              <h3>Divorcing</h3>
              <p>Navigate emotional strain, practical disruption and decisions without losing sight of yourself.</p>
            </li>
            <li>
              <p className="stage-cue">Ready for what comes next</p>
              <h3>Rebuilding</h3>
              <p>Recover confidence, rediscover yourself and decide what you want from the life ahead.</p>
            </li>
          </ol>
          <p>
            You do not need to have made every decision before getting in touch, and
            rebuilding often begins before the divorce itself is complete.
          </p>
        </section>

        <section className="page-section call-section" id="first-conversation" aria-labelledby="call-title">
          <div className="call-intro">
            <p className="section-kicker">Start with one conversation</p>
            <h2 id="call-title">If you&apos;re struggling, give me an hour.</h2>
            <p>
              Bring whatever feels hardest right now. We&apos;ll talk it through and see whether
              you feel any calmer, clearer or less alone by the end.
            </p>
          </div>
          <ol className="plan-list plan-list--compact">
            <li><strong>Book</strong><span>Choose a time that suits you.</span></li>
            <li><strong>Talk</strong><span>Use the hour for what matters most.</span></li>
            <li><strong>Decide</strong><span>Continue only if it feels useful.</span></li>
          </ol>
          <div className="meeting-booking">
            <div>
              <p className="section-kicker">Your free support call</p>
              <h3>Choose a time.</h3>
              <p>
                See Chris&apos;s live availability. Please add contact details only, not sensitive
                personal information.
              </p>
            </div>
            <ul className="booking-assurances" aria-label="Booking details">
              <li>60 minutes</li>
              <li>Private conversation</li>
              <li>No pitch or pressure afterwards</li>
            </ul>
            <a className="button booking-button" href={bookingUrl} target="_blank" rel="noreferrer">
              View available times
            </a>
            <p className="booking-fallback">
              Opens a booking page in a new tab. Read our <Link href="/privacy">privacy notice</Link>.
            </p>
          </div>
        </section>

        <section className="page-section pricing-section" id="pricing" aria-labelledby="packages-title">
          <p className="section-kicker">Ongoing support</p>
          <h2 id="packages-title">Private support, month by month.</h2>
          <p>
            Support rolls monthly and is billed on the same calendar date each month. You can
            end it at any time with 30 days&apos; written notice. Consumer prices include VAT.
          </p>

          <aside className="pricing-guidance">
            <div>
              <h3>Not sure what you need?</h3>
              <p>You do not need to choose a package before we have spoken.</p>
            </div>
            <a className="button button--secondary" href="#first-conversation">Start with the free hour</a>
          </aside>

          <div className="package-list">
            <article>
              <div className="package-heading">
                <h3>Standard Support</h3>
                <p className="package-price">£1,200 <span>including VAT · per month</span></p>
              </div>
              <dl className="package-details">
                <div><dt>Cadence</dt><dd>Two private sessions each week</dd></div>
                <div><dt>Time</dt><dd>Two hours per session</dd></div>
                <div><dt>Best for</dt><dd>Regular space to think, talk and make difficult decisions.</dd></div>
                <div><dt>Renewal</dt><dd>Rolling monthly · 30 days&apos; notice to end</dd></div>
              </dl>
              <a className="text-link package-action" href="#first-conversation">Discuss this option</a>
            </article>

            <article>
              <div className="package-heading">
                <h3>Enhanced Support</h3>
                <p className="package-price">£3,000 <span>including VAT · per month</span></p>
              </div>
              <dl className="package-details">
                <div><dt>Cadence</dt><dd>Five private sessions each week</dd></div>
                <div><dt>Time</dt><dd>Two hours per session</dd></div>
                <div><dt>Best for</dt><dd>Periods when separation is affecting everyday life.</dd></div>
                <div><dt>Renewal</dt><dd>Rolling monthly · 30 days&apos; notice to end</dd></div>
              </dl>
              <a className="text-link package-action" href="#first-conversation">Discuss this option</a>
            </article>
          </div>

          <article className="concierge-panel">
            <div className="concierge-heading">
              <p className="section-kicker">Bespoke support</p>
              <h3>Divorce Concierge</h3>
              <p className="package-price">£10,000 <span>including VAT · per month</span></p>
            </div>
            <div className="concierge-copy">
              <p>
                Intensive emotional, decision and practical support for clients whose
                divorce places exceptional demands on their time, attention and privacy.
              </p>
              <ul>
                <li>On-demand emotional and practical support, shaped around what you need</li>
                <li>Priority response</li>
                <li>Organising correspondence, chronologies, deadlines and next steps</li>
                <li>Emotional and practical support preparing for, attending and debriefing after professional appointments</li>
                <li>Communication-management support to reduce pressure and stress</li>
                <li>Administrative liaison with professional advisers when you authorise it in writing</li>
              </ul>
              <p className="scope-inline">
                You remain in control of communications and decisions. The service does not
                contact a former partner, access your accounts or money, or provide legal,
                financial or tax advice. Availability is agreed as part of your monthly
                arrangement; it is not an emergency service.
              </p>
              <a className="button button--secondary" href="#first-conversation">Discuss concierge support</a>
            </div>
          </article>

          <div className="session-location">
            <h3>Where sessions take place</h3>
            <p>
              Sessions are available remotely or face-to-face in the Bournemouth area.
              Other locations may be possible by arrangement, with travel time and expenses
              agreed in advance.
            </p>
          </div>
        </section>

        <section className="page-section outcome-section" aria-labelledby="success-title">
          <p className="section-kicker">What you are working towards</p>
          <h2 id="success-title">Find peace with what has happened and hope for who you are becoming.</h2>
          <div className="support-parts outcome-parts">
            <article><h3>Peace</h3><p>Feel less consumed by the situation and more settled within yourself.</p></article>
            <article><h3>Confidence</h3><p>Feel more able to make your own decisions and trust the choices you make.</p></article>
            <article><h3>Hope</h3><p>Begin to feel enthusiasm and excitement for the life you can create next.</p></article>
          </div>
          <p className="outcome-disclaimer">These are aims, not promised results. Outcomes vary and the service does not promise an emotional, legal, relationship or financial result.</p>
        </section>

        <section className="page-section stakes-section" aria-labelledby="stakes-title">
          <h2 className="section-heading--supporting" id="stakes-title">
            Without the right support, overwhelm can keep taking the lead.
          </h2>
          <p>
            Important decisions can be delayed and isolation can grow. Having somewhere
            to think and talk can help prevent feeling stuck from becoming the shape of everyday life.
          </p>
        </section>

        <section className="page-section final-section" aria-labelledby="final-title">
          <h2 id="final-title">Start with one hour that is entirely about you.</h2>
          <p>Bring the question, decision or feeling that is taking up the most space.</p>
          <a className="button" href="#first-conversation">Book my free one-hour support call</a>
        </section>

        <section className="page-section scope-section" id="scope" aria-labelledby="scope-title">
          <p className="section-kicker">Scope and safety</p>
          <h2 id="scope-title">Clear about what this support is and is not.</h2>
          <p>
            Emotional Life Support is a non-clinical support service. It is not therapy,
            crisis care, domestic-abuse advocacy, mediation, or legal, financial, tax or
            medical advice. When specialist help is needed, part of the role is to recognise
            that and help you find an appropriate route.
          </p>
          <p>
            It is for adults aged 18 or over and is not monitored as an emergency service.
            Conversations are private, subject to limited serious-safety, safeguarding and
            legal exceptions described in the <Link href="/privacy">privacy notice</Link>.
          </p>
          <h3 className="scope-resources-title">Urgent and specialist support</h3>
          <p className="button-note">Emotional Life Support is not affiliated with or endorsed by these services.</p>
          <div className="support-routes">
            <article className="support-route support-route--urgent">
              <div><strong>Immediate danger</strong><span>If you or someone else is at immediate risk.</span></div>
              <a href="tel:999">Call 999</a>
            </article>
            <article className="support-route">
              <div><strong>Urgent mental-health help</strong><span>Get urgent advice and find the right service.</span></div>
              <div className="support-actions"><a href="tel:111">Call 111</a><a href="https://111.nhs.uk/triage/check-your-mental-health-symptoms" target="_blank" rel="noreferrer">Visit NHS 111 online</a></div>
            </article>
            <article className="support-route">
              <div><strong>Someone to talk to now</strong><span>Samaritans is free, day or night.</span></div>
              <a href="tel:116123">Call 116 123</a>
            </article>
            <article className="support-route support-route--safe">
              <div>
                <strong>Specialist domestic-abuse support</strong>
                <span>Find confidential, specialist routes through GOV.UK.</span>
                <em>Only use this link if it is safe for you to do so.</em>
              </div>
              <a href="https://www.gov.uk/guidance/domestic-abuse-how-to-get-help" target="_blank" rel="noreferrer">View support options</a>
            </article>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
