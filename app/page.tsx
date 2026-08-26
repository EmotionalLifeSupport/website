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
              Book your first session free <ArrowRightIcon aria-hidden="true" />
            </a>
            <p className="button-note">
              Choose 30 minutes, one hour or up to two hours. With up to two hours available,
              your free first session is worth £300. No preparation and no pressure to continue.
            </p>
          </div>
        </section>

        <aside className="reassurance-strip" aria-label="What to expect">
          <span><CheckCircledIcon aria-hidden="true" />First session free · worth £300</span>
          <span><HeartIcon aria-hidden="true" />Divorce experience</span>
          <span><ChatBubbleIcon aria-hidden="true" />One-to-one support</span>
          <span><LockClosedIcon aria-hidden="true" />Non-clinical support</span>
        </aside>

        <section className="page-section relevance-section" aria-labelledby="relevance-title">
          <h2 className="section-heading--supporting" id="relevance-title">
            The challenges you face through and after divorce
          </h2>
          <div className="relevance-list">
            <article>
              <p className="relevance-label">Untangling yourself from your old life</p>
              <p>
                Dismantling the life you built together, deciding what belongs where, and making
                huge decisions about your future while dealing with heavy emotions, uncertainty
                and difficult conversations.
              </p>
            </article>
            <article>
              <p className="relevance-label">Finding yourself and rebuilding your life</p>
              <p>
                Starting again can feel exciting and overwhelming. You have to work out what you
                want, what you need, what matters most to your family, and what you want the next
                chapter of your life to look like.
              </p>
            </article>
          </div>
        </section>

        <section className="page-section support-section" id="support" aria-labelledby="support-title">
          <p className="section-kicker">What you may need right now</p>
          <h2 id="support-title">What can help while everything is changing</h2>
          <p className="value-intro">
            Friends may care deeply and professional support can be valuable. But difficult divorce
            can create needs that are easy to overlook.
          </p>
          <p className="value-intro">
            Space to be honest. Time to think clearly. Independence from the situation. Continuity
            as things change. Perspective when you feel stuck. Help working out what comes next.
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
              <h3>Somewhere you don&apos;t have to pretend you&apos;re okay</h3>
              <p>
                There are times when you have to hold things together for work, family or friends.
                You also need somewhere you don&apos;t.
              </p>
              <p>
                Somewhere you can say what is really going on without softening it, tidying it up
                or reassuring the person listening.
              </p>
            </article>
            <article>
              <h3>Understanding of how much divorce affects</h3>
              <p>
                Divorce can touch almost every part of your life at once. Your home, children,
                finances, work, relationships and sense of who you are.
              </p>
              <p>
                It helps when that complexity is understood, rather than having to explain why it
                feels like so much.
              </p>
            </article>
            <article>
              <h3>Time entirely about you</h3>
              <p>
                You need space where you don&apos;t have to shorten the story, protect the listener or
                remember to ask about their life.
              </p>
              <p>
                If you need to talk about the same thing again, you can. The time is yours.
              </p>
            </article>
            <article>
              <h3>Independence from the situation</h3>
              <p>
                The people closest to you may have their own feelings, loyalties and opinions about
                what should happen.
              </p>
              <p>
                Sometimes it helps to have space that is outside those pressures, where you can
                think about what feels right for you.
              </p>
            </article>
            <article>
              <h3>Continuity as things change</h3>
              <p>
                Divorce keeps moving.
              </p>
              <p>
                New messages arrive, decisions need to be made and unexpected problems appear.
              </p>
              <p>
                It can help when you don&apos;t have to start from the beginning every time something
                changes.
              </p>
            </article>
            <article>
              <h3>Help working out what comes next</h3>
              <p>
                Sometimes you need to be heard. Sometimes you need another perspective.
              </p>
              <p>
                And sometimes you need help thinking through a difficult conversation, a message,
                a decision or a practical problem before deciding what to do next.
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
              <h2 id="about-title">Get support from someone who understands.</h2>
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
              <div className="about-action">
                <p>Start with one conversation. We can work the rest out afterwards.</p>
                <a className="button" href="#first-conversation">
                  Book your first session free
                </a>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />

        <div className="page-section decision-point">
          <p>You don&apos;t need to work out what kind of support you need before we talk.</p>
          <a className="button" href="#first-conversation">
            Book your first session free <ArrowRightIcon aria-hidden="true" />
          </a>
        </div>

        <section className="page-section process-section" id="process" aria-labelledby="journey-title">
          <p className="section-kicker">What you will get</p>
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
            <p className="section-kicker">How it works</p>
            <h2 id="call-title">Start with one conversation.</h2>
            <p>
              You only need to decide whether you want to have the first conversation.
              Everything else can be worked out afterwards.
            </p>
          </div>
          <ol className="plan-list plan-list--compact">
            <li><strong>Book your first session free</strong><span>Start with one conversation. You do not need to choose a support package first.</span></li>
            <li><strong>Talk through what is happening</strong><span>Discuss what feels difficult and what would be most useful right now.</span></li>
            <li><strong>Decide what happens next</strong><span>Leave it there, return when needed, or choose ongoing support later.</span></li>
          </ol>
          <div className="meeting-booking">
            <div>
              <p className="section-kicker">First session free · worth £300</p>
              <h3>Up to two hours available. You choose how long.</h3>
              <p>
                Select two hours, one hour, or 30 minutes in the calendar below. Your first session
                is free whichever duration you choose.
              </p>
            </div>
            <ul className="booking-assurances" aria-label="Booking details">
              <li>Up to two hours available</li>
              <li>One-to-one conversation</li>
              <li>No pitch or pressure afterwards</li>
            </ul>
            <HubSpotMeeting bookingUrl={bookingUrl} />
          </div>
        </section>

        <section className="page-section pricing-section" id="pricing" aria-labelledby="packages-title">
          <p className="section-kicker">If you&apos;d like support afterwards</p>
          <h2 id="packages-title">Choose what comes next only when you&apos;re ready.</h2>
          <p>
            Your first session stands on its own. Afterwards, you can leave it there or
            choose the kind of support that feels useful once we have spoken.
          </p>

          <div className="support-category-list">
            <article>
              <p className="category-number">01</p>
              <h3>One-off support</h3>
              <p>Come back whenever another conversation would be useful.</p>
            </article>
            <article>
              <p className="category-number">02</p>
              <h3>Ongoing support</h3>
              <p>Regular support for as long as it continues to be useful.</p>
            </article>
            <article>
              <p className="category-number">03</p>
              <h3>More involved support</h3>
              <p>Considerably more practical and emotional help navigating separation or divorce.</p>
            </article>
          </div>

          <div className="pricing-guidance">
            <div>
              <h3>Get started for free</h3>
              <p>Your first session is free, with up to two hours available. You choose how long.</p>
            </div>
            <a className="button" href="#first-conversation">Book your first session free</a>
          </div>

          <details className="support-options-disclosure">
            <summary>View ongoing support options and pricing</summary>
            <div className="support-options-content">
              <article id="one-off-session" className="one-off-section" aria-labelledby="one-off-title">
                <div>
                  <p className="section-kicker">A one-off session</p>
                  <h3 id="one-off-title">One-Off Two-Hour Support Session</h3>
                  <p>
                    Two uninterrupted hours focused entirely on what is happening in your life
                    and what would help now.
                  </p>
                  <p>
                    This is an optional next step after your free first session, with no monthly
                    commitment and no requirement to continue afterwards.
                  </p>
                </div>
                <div className="one-off-action">
                  <p className="package-price">£300 <span>including VAT</span></p>
                  <a className="button" href="#first-conversation">Book your first session free</a>
                </div>
              </article>

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
                  <a className="text-link package-action" href="#first-conversation">Book your first session free</a>
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
                  <a className="text-link package-action" href="#first-conversation">Book your first session free</a>
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
                  <a className="button button--secondary" href="#first-conversation">Book your first session free</a>
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
            </div>
          </details>
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
              <summary>What happens during my free first session?</summary>
              <p>Bring whatever feels most difficult or important. There is no required preparation and no need to tell your story in a particular order. Choose 30 minutes, one hour or up to two hours, and we will use that time for what would help you most.</p>
            </details>
            <details>
              <summary>Do I have to continue after my free first session?</summary>
              <p>No. There is no pitch, obligation or pressure to book another session.</p>
            </details>
            <details>
              <summary>What is the paid two-hour session for?</summary>
              <p>After your free first session, it is a one-off opportunity for more uninterrupted time to explore what is happening and work out what would help next. It does not require a monthly commitment.</p>
            </details>
            <details>
              <summary>Can I change monthly plans?</summary>
              <p>Yes. Upgrades can take effect immediately, subject to availability. Downgrades take effect on the next monthly billing date.</p>
            </details>
            <details>
              <summary>Can I get my ex to pay for this?</summary>
              <p>Possibly.</p>
              <p>If your ex agrees to contribute towards the cost, then yes.</p>
              <p>
                If they don&apos;t agree, or you would rather not ask them directly, it&apos;s worth
                speaking to your family solicitor before ruling the service out on cost alone.
              </p>
              <p>
                Ask your solicitor whether the cost of professional support during your divorce
                could be taken into account when negotiating or determining your financial
                settlement. Depending on your circumstances, this could affect the real cost to
                you.
              </p>
              <p>
                There are no guarantees, and I can&apos;t advise you how the cost will be treated in
                your particular case. That&apos;s a question for your solicitor.
              </p>
              <details className="faq-sample-email">
                <summary>Click to see sample email to solicitor</summary>
                <div>
                  <p>
                    I&apos;m considering paying for professional emotional and practical support to
                    help me through my divorce. The service would cost £[amount].
                  </p>
                  <p>
                    Before I make a decision, could you advise me whether expenditure of this kind
                    could be taken into account when negotiating or determining my financial
                    settlement?
                  </p>
                  <p>
                    In particular, I&apos;d like to understand whether paying for the support would
                    ultimately reduce the assets available for division, be treated as an expense
                    or liability on my side, or simply be treated as money I have chosen to spend
                    personally.
                  </p>
                  <p>
                    I&apos;m not looking to spend money simply to reduce the matrimonial assets. I want
                    the support, but I&apos;d like to understand the likely net financial cost to me
                    before deciding whether I can afford it.
                  </p>
                </div>
              </details>
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
          <h2 id="final-title">Get started for free.</h2>
          <p>
            I&apos;m confident this support can help you move forward, so your first session is free,
            with up to two hours available.
          </p>
          <a className="button" href="#first-conversation">
            Book your first session free <ArrowRightIcon aria-hidden="true" />
          </a>
        </section>

        <section className="page-section scope-section" id="scope" aria-labelledby="scope-title">
          <p className="section-kicker">Scope and safety</p>
          <h2 id="scope-title">Clear about what this support is and is not.</h2>
          <p className="scope-reassurance">
            Emotional Life Support is a private, non-clinical service for adults. It can sit
            alongside professional help, but does not replace therapy, crisis care or legal,
            financial, tax or medical advice.
          </p>
          <details className="scope-disclosure">
            <summary>Read about boundaries, urgent help and specialist support</summary>
            <div className="scope-disclosure-content">
              <p>
                Emotional Life Support is not therapy, crisis care, domestic-abuse advocacy or
                mediation. When specialist help is needed, part of the role is to recognise that
                and help you find an appropriate route.
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
            </div>
          </details>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
