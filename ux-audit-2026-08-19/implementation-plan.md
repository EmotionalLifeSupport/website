# Emotional Life Support Website Implementation Plan

Date: 19 August 2026  
Implementation target: `storybrand-wireframe`  
Primary files: `app/page.tsx`, `app/globals.css`  
Likely new component: `app/components/SiteNavigation.tsx`

## Objective

Create a shorter, clearer and more reassuring journey from the homepage hero to a booked free call, while preserving the current editorial brand, existing photography and responsible safety boundaries.

## Approved Scope

Approved recommendations: 1, 2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17, 20, 21, 22, 23, 24, 25 and 26.

Explicit exclusions:

- 7: Do not replace or restyle the existing Chris portrait.
- 8: Keep the hero reassurance copy understated; do not add the separate two-row treatment.
- 18: Do not introduce a new timezone message beside the first dates.
- 19: Do not add a “no payment” message.

## Delivery Strategy

Implement the work as five reviewable releases. Each release should be visually checked on desktop and mobile before the next one begins. Production deployment should happen only after the complete regression pass.

## Release 0 — Baseline and Safeguards

Purpose: protect the current brand and working behaviour before layout changes begin.

Work:

- Capture reference screenshots at 1440 × 1000, 1024 × 900, 760 × 900 and 390 × 844.
- Record the current navigation anchors, booking embed behaviour, image crops, focus states and page height.
- Confirm the production source and deployment workflow for `storybrand-wireframe`.
- Confirm whether HubSpot can remove its promotional footer on the current account or subscription.
- Preserve the four explicit exclusions above as design constraints.

Acceptance:

- The homepage builds and tests successfully before edits.
- All important page sections have a reference screenshot.
- The HubSpot branding constraint has a confirmed technical answer.

Estimated effort: half a day.

## Release 1 — Hero, Header and Navigation

Recommendations: 1, 2, 3, 4, 11, 12 and 25.

### Header

- Add a compact terracotta “Book a free hour” action to the desktop navigation.
- Reduce the mobile wordmark size enough to give the menu button comfortable space.
- Replace the current mobile `<details>` navigation with a small client component that can:
  - show a clear open and close state;
  - close after an anchor is selected;
  - include the booking action at the bottom;
  - restore focus to the menu button when closed;
  - close with Escape.
- Make the header sticky after the hero begins to leave the viewport.
- Add a restrained active-section indicator to the current navigation item.

### Hero

- Reduce the empty vertical gap between the promise, button and reassurance copy.
- Keep the two existing reassurance paragraphs understated, in line with the rejection of recommendation 8.
- Add a slim reassurance strip below the hero containing:
  - Free 60-minute call
  - Private and confidential
  - No pressure to continue
  - Non-clinical support
- Add a concise scope link near the primary CTA, leading to the complete safety section.

Likely code:

- Edit `app/page.tsx` hero markup.
- Edit `app/globals.css` header, hero and responsive styles.
- Add `app/components/SiteNavigation.tsx` with `use client` for menu and active-section behaviour.

Acceptance:

- A booking action remains reachable at every scroll position on desktop and mobile.
- The sticky header never covers an anchor target.
- The mobile wordmark and menu do not collide at 320px or 390px.
- The mobile menu works with touch, keyboard, Escape and focus return.
- The hero and reassurance strip fit without horizontal overflow or an excessive first-screen height.

Estimated effort: one day.

## Release 2 — Content Hierarchy and Earlier Trust

Recommendations: 5, 6, 9, 10, 13 and 14.

### Recognition and trust

- Add a short “This may help if…” row immediately after the hero, covering Leaving, Divorcing and Rebuilding.
- Introduce Chris before the first long narrative section using a compact trust panel with:
  - Chris’s name;
  - first-hand experience of difficult divorce;
  - ANDYSMANCLUB facilitator role;
  - Samaritans listening-volunteer training;
  - a link to the full backstory.
- Reuse the existing Chris photograph; do not replace or visually restyle it.

### Copy and hierarchy

- Shorten the current problem section from three long paragraphs to one concise explanation plus one highlighted takeaway.
- Shorten the dark statement section while retaining its core emotional message.
- Introduce a secondary heading scale so supporting sections do not compete with the most important turning points.
- Break the full Chris biography into:
  - a short introductory paragraph;
  - three proof-point rows;
  - the existing backstory link.
- Expand the three process stages with one emotional cue and one concrete example per stage while keeping their visual height consistent.

Likely code:

- Restructure the relevant sections in `app/page.tsx`.
- Add heading-level and trust-panel styles in `app/globals.css`.

Acceptance:

- A visitor can identify whether the service is relevant, who Chris is and why he is credible before reaching the second long-form section.
- The first three content sections are visibly shorter than the current version.
- The heading hierarchy has at least two clearly differentiated section levels.
- The existing Chris image remains unchanged.

Estimated effort: one day, plus copy approval.

## Release 3 — Booking Journey

Recommendations: 15, 16, 17 and 20.

### Booking introduction

- Convert the three booking steps into compact numbered rows so all three appear together.
- Reduce the vertical space before the first available booking control.
- Retain the existing “no pitch” reassurance, but do not add a payment or timezone message.

### Booking surface

- Wrap the booking control in a first-party-looking cream card using the existing typography, colours and spacing.
- Ensure the mobile booking surface does not crop, create horizontal scrolling or leave a large blank area before pricing.
- Load a clear fallback link if the embedded booking tool fails.

### HubSpot constraint

The current HubSpot meeting widget is cross-origin. Its internal layout and promotional footer cannot be reliably removed with site CSS or JavaScript.

Use this decision path:

1. If the HubSpot account offers a supported “remove branding” setting, enable it and retain the embed.
2. If branding cannot be removed, use a branded first-party pre-booking card and open the HubSpot scheduling page as a deliberate next step rather than embedding a visually broken widget.
3. Only build a fully custom calendar if there is a supported booking API or another scheduling provider has been approved. Do not imitate a working calendar with non-functional controls.

Likely code:

- Edit the `call-section` and `meeting-booking` markup in `app/page.tsx`.
- Edit booking, iframe and mobile styles in `app/globals.css`.
- Add a small client component only if embed loading and fallback state need to be observed.

Acceptance:

- The first booking control begins materially sooner on mobile.
- The booking experience has no clipping, horizontal scroll or unexplained empty area at 320px, 390px and 760px.
- Promotional HubSpot branding is absent when the account supports removal; otherwise the limitation is handled through an explicit external transition.
- The real booking route remains functional end to end.

Estimated effort: one to three days, depending on HubSpot capability.

## Release 4 — Pricing Architecture

Recommendations: 21, 22, 23 and 24.

Work:

- Add a “Not sure what you need?” panel before the prices, linking back to the free-hour booking route.
- Give Standard Support and Enhanced Support identical comparison rows:
  - price per month;
  - session frequency;
  - time included;
  - best suited for;
  - concise included-support summary.
- Add “Discuss this option” to each fixed package and route it to the free-hour booking section.
- Move Divorce Concierge into a separate full-width “Bespoke support” panel below the two fixed packages.
- Keep the existing package names and prices unless a separate commercial review changes them.
- Do not use the strongest dark colour simply to make the highest-priced package dominant.

Likely code:

- Restructure `package-list` in `app/page.tsx`.
- Replace the three-column card rules in `app/globals.css` with a two-plan comparison plus full-width concierge layout.

Acceptance:

- The differences between Standard and Enhanced can be understood without reading paragraphs.
- Every package has a clear next action.
- Concierge is visibly bespoke but no longer dominates the fixed packages.
- Pricing remains readable without horizontal scrolling at mobile widths.

Estimated effort: one day.

## Release 5 — Safety Actions and Full QA

Recommendations: 26, plus final verification of 25.

### Safety presentation

- Retain the complete non-clinical scope statement.
- Present urgent resources as distinct, high-contrast action rows:
  - Call 999
  - Visit or call NHS 111
  - Call Samaritans
  - View specialist domestic-abuse support
- Keep the “only use these links or numbers if it is safe to do so” warning visually attached to the domestic-abuse resource.
- Use meaningful link labels and preserve native `tel:` behaviour.

### Regression and accessibility checks

- Test at 1440px, 1024px, 760px, 390px and 320px.
- Test 200% browser zoom and text-only zoom where available.
- Verify heading order, landmark structure, link names and visible focus.
- Verify sticky-header anchor offsets.
- Test the complete keyboard path through navigation, mobile menu, booking controls and safety links.
- Check the HubSpot failure and slow-loading states.
- Check for horizontal overflow, cropped images, text collisions and excessive blank space.
- Compare new screenshots against both the current production screenshots and the approved concept direction.
- Run the existing build, lint and rendered HTML tests.

Acceptance:

- All approved recommendations are represented in the rendered site.
- All rejected recommendations remain excluded.
- No relevant console errors or framework overlays appear.
- Core navigation and booking work at desktop and mobile sizes.
- Safety contacts are readable and actionable without relying on colour alone.

Estimated effort: one day.

## Recommendation-to-Release Map

| Recommendation | Release |
|---|---:|
| 1, 2, 3, 4, 11, 12, 25 | 1 |
| 5, 6, 9, 10, 13, 14 | 2 |
| 15, 16, 17, 20 | 3 |
| 21, 22, 23, 24 | 4 |
| 26 | 5 |

## Overall Effort

Expected implementation effort for one developer: approximately five to seven working days, including responsive and accessibility QA. A custom replacement for the HubSpot scheduler would be additional work and should not begin until integration feasibility is confirmed.

## Recommended Review Gates

1. Approve Release 1 screenshots before content restructuring.
2. Approve revised homepage copy before Release 2 is merged.
3. Choose the supported HubSpot path before Release 3 implementation.
4. Confirm package comparison wording before Release 4 is merged.
5. Run the complete cross-device review before production deployment.
