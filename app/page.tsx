import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  ChatBubbleIcon,
  CheckCircledIcon,
  HeartIcon,
  LockClosedIcon,
} from "@radix-ui/react-icons";
import SiteNavigation from "./components/SiteNavigation";
import SiteFooter from "./components/SiteFooter";
import Testimonials from "./components/Testimonials";
import HubSpotMeeting from "./components/HubSpotMeeting";

export const metadata: Metadata = {
  title: "Emotional Support Through Divorce | Emotional Life Support",
  description:
    "Calm, independent support while you navigate divorce and rebuild your life afterwards. Online across England and Wales and face-to-face in Bournemouth, Christchurch and Poole.",
  alternates: {
    canonical: "/",
  },
};

const bookingUrl = "https://meetings-eu1.hubspot.com/chris247";

export default function Home() {
  return (
    <>
      <SiteNavigation isHomePage />
      <main className="homepage" id="main-content">
        <section className="page-section hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-context">Support through divorce and rebuilding</p>
            <h1 id="hero-title">Emotional support through the end of an unhealthy relationship</h1>
            <p className="lead">
              Calm, independent support from someone who understands difficult divorce
              first-hand, with the care and honesty of a good friend and time set aside
              entirely for you.
            </p>
          </div>
          <figure className="hero-media">
            <Image
              src="/hero-calm-relief-editorial-v1.png"
              alt="A woman holding a cup of tea and looking peacefully towards a window"
              width={1122}
              height={1402}
              priority
              sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1200px) 42vw, 560px"
            />
          </figure>
          <div className="hero-action">
            <a className="button" href="#first-conversation">
              Book a free one-hour support call <ArrowRightIcon aria-hidden="true" />
            </a>
            <p className="button-note">
              One full hour focused on what would help you most. No preparation and no
              pressure to continue.
            </p>
          </div>
        </section>

        <aside className="reassurance-strip" aria-label="What to expect">
          <span><CheckCircledIcon aria-hidden="true" />Free one-hour call</span>
          <span><HeartIcon aria-hidden="true" />Divorce experience</span>
          <span><ChatBubbleIcon aria-hidden="true" />One-to-one support</span>
          <span><LockClosedIcon aria-hidden="true" />Non-clinical support</span>
        </aside>

        <section className="page-section relevance-section" aria-labelledby="relevance-title">
          <h2 className="section-heading--supporting" id="relevance-title">
            Support through the divorce itself and the life after it.
          </h2>
          <div className="relevance-list">
            <article>
              <p className="relevance-label">Navigating divorce</p>
              <p>
                Carrying emotional strain, disruption, difficult conversations and
                important decisions while your life is changing around you.
              </p>
            </article>
            <article>
              <p className="relevance-label">Rebuilding your life</p>
              <p>
                Regaining stability, confidence and a sense of who you are while you begin
                shaping what comes next.
              </p>
            </article>
          </div>
        </section>

        <section className="page-section support-section" id="support" aria-labelledby="support-title">
          <p className="section-kicker">Why this support is different</p>
          <h2 id="support-title">Someone in your corner when life gets difficult.</h2>
          <p className="value-intro">
            Friends may care deeply and professional support can be valuable, but sometimes you
            need something different. Emotional Life Support gives you a consistent, independent
            person who understands difficult divorce, gets to know your situation, and can support
            you emotionally and practically as life unfolds.
          </p>
          <figure className="support-visual">
            <picture>
              <source media="(min-width: 761px)" srcSet="/journey-landscape-desktop-v2.png" />
              <Image
                src="/journey-landscape-v1.png"
                alt="An illustrated winding path moving through calm blue hills towards warm light"
                width={1536}
                height={1024}
                sizes="(max-width: 760px) calc(100vw - 32px), min(1280px, calc(100vw - 80px))"
              />
            </picture>
          </figure>
          <div className="support-parts value-parts">
            <article>
              <h3>You don&apos;t have to pretend you&apos;re okay</h3>
              <p>
                There are times when you need to hold things together for work, family or
                friends. Here, you don&apos;t. You can say what is really going on without having
                to soften it, tidy it up or reassure anyone else.
              </p>
            </article>
            <article>
              <h3>Lived experience of difficult divorce</h3>
              <p>
                I&apos;ve been through a difficult divorce myself. I won&apos;t assume your experience
                is the same as mine, but you won&apos;t need to explain why divorce can affect almost
                every part of your life at once.
              </p>
            </article>
            <article>
              <h3>Time entirely about you</h3>
              <p>
                No need to shorten the story, protect the listener or remember to ask about their
                life. Talk about it again if you need to. This time is deliberately yours.
              </p>
            </article>
            <article>
              <h3>Independent, but in your corner</h3>
              <p>
                I&apos;m outside your family and friendship network, with no competing loyalties or
                personal stake in the outcome. I can support you without judgement while still
                being honest when I think something may not be helping you.
              </p>
            </article>
            <article>
              <h3>Support as life happens</h3>
              <p>
                Difficult moments do not wait for a weekly appointment. This is an ongoing
                relationship with someone who knows the story and can support you as situations
                change and new problems appear.
              </p>
            </article>
            <article>
              <h3>More than just someone to talk to</h3>
              <p>
                Sometimes you need to be heard. Sometimes you need help deciding what to do next.
                I can help you think through messages, conversations, decisions and practical
                problems as well as how you are feeling.
              </p>
            </article>
          </div>
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
              <p className="section-kicker">Meet Chris</p>
              <h2 id="about-title">Support from someone who understands.</h2>
              <p className="about-intro">
                Hi, I&apos;m Chris. I&apos;ve lived through a difficult divorce and rebuilt my
                life afterwards. I know how valuable it can be to have someone calm,
                independent and genuinely present in your corner.
              </p>
              <ul className="about-proof-list">
                <li>Nearly two years navigating a difficult divorce while undergoing cancer treatment</li>
                <li>First-hand experience of rebuilding family life, health, confidence and purpose after divorce</li>
                <li>
                  Volunteer for{" "}
                  <a
                    className="organisation-link"
                    href="https://andysmanclub.co.uk/"
                    target="_blank"
                    rel="noreferrer"
                    title="A men’s suicide prevention charity offering free peer-to-peer support groups across the UK and online."
                    aria-describedby="andysmanclub-summary"
                  >
                    ANDYSMANCLUB
                  </a>
                  <span className="visually-hidden" id="andysmanclub-summary">
                    A men’s suicide prevention charity offering free peer-to-peer support
                    groups across the UK and online.
                  </span>{" "}
                  and{" "}
                  <a
                    className="organisation-link"
                    href="https://www.samaritans.org/"
                    target="_blank"
                    rel="noreferrer"
                    title="A charity providing confidential emotional support for anyone having a difficult time."
                    aria-describedby="samaritans-summary"
                  >
                    Samaritans
                  </a>
                  <span className="visually-hidden" id="samaritans-summary">
                    A charity providing confidential emotional support for anyone having a
                    difficult time.
                  </span>
                </li>
              </ul>
              <a className="text-link" href="/chris">Read my full story</a>
              <p className="affiliation-note">
                My volunteer roles are separate from Emotional Life Support. Neither
                organisation provides or endorses this service.
              </p>
            </div>
          </div>
        </section>

        <Testimonials />

        <section className="page-section process-section" id="process" aria-labelledby="journey-title">
          <p className="section-kicker">A practical way forward</p>
          <h2 id="journey-title">Peace. Courage. Wisdom.</h2>
          <p className="process-intro">
            I help you find peace in accepting what you cannot change, the courage to change
            what you can, and the wisdom to know the difference.
          </p>
          <ul className="journey-list">
            <li>
              <Image
                className="journey-illustration"
                src="/outcome-peace-dove-v1.png"
                alt="A white dove carrying an olive branch"
                width={1254}
                height={1254}
                sizes="(max-width: 760px) 160px, 180px"
              />
              <p className="stage-cue">Acceptance</p>
              <h3>Peace</h3>
              <p>
                Recognising what cannot be controlled and finding a way to stop fighting
                every unchangeable part of the situation.
              </p>
            </li>
            <li>
              <Image
                className="journey-illustration"
                src="/outcome-courage-lion-v1.png"
                alt="A calm lion representing courage"
                width={1254}
                height={1254}
                sizes="(max-width: 760px) 160px, 180px"
              />
              <p className="stage-cue">Action</p>
              <h3>Courage</h3>
              <p>
                Identifying what is within your control and taking the next manageable step
                towards changing it.
              </p>
            </li>
            <li>
              <Image
                className="journey-illustration"
                src="/outcome-wisdom-owl-v1.png"
                alt="An owl perched above an open book"
                width={1254}
                height={1254}
                sizes="(max-width: 760px) 160px, 180px"
              />
              <p className="stage-cue">Understanding</p>
              <h3>Wisdom</h3>
              <p>
                Working out which parts of the situation need acceptance, which need action
                and what matters most now.
              </p>
            </li>
          </ul>
          <p>
            The aim is not to remove every difficult feeling or promise a particular outcome.
            It is to help you feel more able to meet the situation as it is and shape the
            life that comes next.
          </p>
        </section>

        <section className="page-section call-section" id="first-conversation" aria-labelledby="call-title">
          <div className="call-intro">
            <p className="section-kicker">Start with one conversation</p>
            <h2 id="call-title">Take an hour that is entirely yours.</h2>
            <p>
              Bring whatever feels hardest right now. We will talk it through and see whether
              you feel any calmer, clearer or less alone by the end.
            </p>
          </div>
          <ol className="plan-list plan-list--compact">
            <li><strong>Book</strong><span>Choose a time using the calendar below.</span></li>
            <li><strong>Talk</strong><span>Use the hour for whatever feels most important.</span></li>
            <li><strong>Choose what comes next</strong><span>Continue only if another conversation feels useful.</span></li>
          </ol>
          <div className="meeting-booking">
            <div>
              <p className="section-kicker">Book your free support call</p>
              <h3>Choose a time from my live availability below.</h3>
            </div>
            <ul className="booking-assurances" aria-label="Booking details">
              <li>60 minutes</li>
              <li>One-to-one conversation</li>
              <li>No pitch or pressure afterwards</li>
            </ul>
            <HubSpotMeeting bookingUrl={bookingUrl} />
          </div>
        </section>

        <section
          id="one-off-session"
          className="page-section one-off-section"
          aria-labelledby="one-off-title"
        >
            <div>
              <p className="section-kicker">A one-off session</p>
              <h2 id="one-off-title">One-Off Two-Hour Support Session</h2>
              <p>
                Two uninterrupted hours focused entirely on what is happening in your life
                and what would help now.
              </p>
              <p>
                This is an optional next step after your free support call, with no monthly
                commitment and no requirement to continue afterwards.
              </p>
            </div>
            <div className="one-off-action">
              <p className="package-price">£300 <span>including VAT</span></p>
              <a className="button" href="#first-conversation">
                Start with the free hour
              </a>
            </div>
        </section>

        <section className="page-section pricing-section" id="pricing" aria-labelledby="packages-title">
          <p className="section-kicker">Ongoing support</p>
          <h2 id="packages-title">Regular support for as long as you need it.</h2>
          <p>
            Choose a monthly plan when you want consistent time, attention and continuity.
            We can discuss moving between plans as your needs change.
          </p>

          <aside className="pricing-guidance">
            <div>
              <h3>Not sure what you need?</h3>
              <p>You do not need to choose a plan before we have spoken.</p>
            </div>
            <a className="button button--secondary" href="#first-conversation">Start with the free hour</a>
          </aside>

          <div className="package-list">
            <article>
              <div className="package-heading">
                <h3>Standard Support</h3>
                <p className="package-price">£1,200 <span>including VAT per month</span></p>
              </div>
              <p className="package-frequency">Two two-hour support sessions each week.</p>
              <p className="package-description">
                Regular, protected time to talk, think through difficult decisions and deal
                with whatever feels most important as the situation develops.
              </p>
              <a className="text-link package-action" href="#first-conversation">Discuss Standard Support</a>
            </article>

            <article>
              <div className="package-heading">
                <h3>Enhanced Support</h3>
                <p className="package-price">£3,000 <span>including VAT per month</span></p>
              </div>
              <p className="package-frequency">Five two-hour support sessions each week.</p>
              <p className="package-description">
                Frequent, consistent support during periods when divorce is placing
                exceptional pressure on everyday life and you want someone reliably in your
                corner.
              </p>
              <a className="text-link package-action" href="#first-conversation">Discuss Enhanced Support</a>
            </article>
          </div>

          <p className="plan-terms">
            Prices include VAT. Plans continue monthly. Upgrades can take effect immediately,
            subject to availability. Downgrades take effect on the next monthly billing date.
            Thirty days&apos; written notice is required to end monthly support.
          </p>

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
              Sessions are available online or face-to-face in the Bournemouth, Christchurch
              and Poole area. Meetings elsewhere may be possible by arrangement, with any
              travel time and expenses agreed in advance.
            </p>
          </div>
        </section>

        <section className="page-section faq-section" aria-labelledby="faq-title">
          <h2 className="section-kicker" id="faq-title">Questions you may have</h2>
          <div className="faq-list">
            <details>
              <summary>Is this therapy or counselling?</summary>
              <p>No. Emotional Life Support is a non-clinical support service. It does not diagnose or treat mental-health conditions and is not a replacement for therapy, counselling, crisis care or professional advice.</p>
            </details>
            <details>
              <summary>Will you tell me what decisions to make?</summary>
              <p>No. I can help you slow things down, think through what matters and consider different perspectives, but the decisions remain yours.</p>
            </details>
            <details>
              <summary>What happens during the free call?</summary>
              <p>Bring whatever feels most difficult or important. There is no required preparation and no need to tell your story in a particular order. We will use the hour for what would help you most.</p>
            </details>
            <details>
              <summary>Do I have to continue after the free call?</summary>
              <p>No. There is no pitch, obligation or pressure to book another session.</p>
            </details>
            <details>
              <summary>What is the two-hour session for?</summary>
              <p>It is a one-off opportunity for more uninterrupted time to explore what is happening and work out what would help next. It does not require a monthly commitment.</p>
            </details>
            <details>
              <summary>Can I change monthly plans?</summary>
              <p>Yes. Upgrades can take effect immediately, subject to availability. Downgrades take effect on the next monthly billing date.</p>
            </details>
            <details>
              <summary>Where do sessions take place?</summary>
              <p>Sessions are available online or face-to-face in the Bournemouth, Christchurch and Poole area. Other arrangements may be possible by agreement.</p>
            </details>
            <details>
              <summary>Are conversations confidential?</summary>
              <p>Conversations are private, but confidentiality is not absolute. Limited serious-safety, safeguarding and legal exceptions are explained in the privacy notice and at the start of the support relationship.</p>
            </details>
          </div>
        </section>

        <section className="page-section final-section" aria-labelledby="final-title">
          <h2 id="final-title">Start with one hour that is entirely about you.</h2>
          <p>
            Bring whatever feels most difficult or important right now. There is no
            preparation and no pressure to continue afterwards.
          </p>
          <a className="button" href="#first-conversation">
            Book my free one-hour support call <ArrowRightIcon aria-hidden="true" />
          </a>
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
          <h3 className="scope-resources-title professional-support-title">
            Professional support alongside this service
          </h3>
          <p className="button-note">
            These independent directories can help when therapy or legal advice would be
            useful alongside, or instead of, Emotional Life Support.
          </p>
          <div className="support-routes support-routes--complementary">
            <article className="support-route">
              <div>
                <strong>Looking for therapy</strong>
                <span>
                  Search the BACP directory for registered or accredited counsellors and
                  psychotherapists.
                </span>
              </div>
              <a
                href="https://www.bacp.co.uk/search/Therapists"
                target="_blank"
                rel="noreferrer"
              >
                Find a therapist
              </a>
            </article>
            <article className="support-route">
              <div>
                <strong>Looking for legal advice</strong>
                <span>
                  Use GOV.UK to find legal advice about divorce, children, money or property.
                </span>
              </div>
              <a
                href="https://www.gov.uk/find-legal-advice/find-legal-adviser"
                target="_blank"
                rel="noreferrer"
              >
                Find a legal adviser
              </a>
            </article>
          </div>
          <p className="outcome-disclaimer">
            Emotional Life Support offers support, not guaranteed emotional, relationship,
            legal or financial results.
          </p>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
