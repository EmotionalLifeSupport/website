# Development & Change History Log — Emotional Life Support

This document tracks technical decisions, architectural context, and chronological change history for **Emotional Life Support** (`emotionallifesupport.com`). It serves as a continuous reference for AI coding agents and human developers working across different development environments.

---

## 🛠️ Architecture & Build Pipeline Summary

### Tech Stack
- **Framework**: Next.js / Vinext (Vite 8 + React 19 RSC)
- **Styling**: Tailwind CSS v4 (`@import "tailwindcss"`) + Custom CSS variables (`var(--paper)`, `var(--sans)`, `var(--navy)`)
- **Hosting & Deployment**: GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)
- **Custom Domain**: `emotionallifesupport.com` configured in `public/CNAME`

### Static Export Pipeline (`scripts/export-static.mjs`)
- The site exports to static HTML files in `./dist/client` via `npm run export`.
- **`BASE_PATH` Handling**: `basePath` defaults to `""` (empty string) for root custom domains (`emotionallifesupport.com`).
  > **Note for AI Tools/Devs**: Do NOT set `basePath` to `"/website"` unless deploying to a GitHub Pages subpath URL (`username.github.io/website`). Setting `basePath` to `"/website"` when hosting on a custom root domain breaks CSS, script, and image URLs with HTTP 404 errors.

---

## 📜 Chronological Change Log

### [2026-08-26] — Refined Desktop CTA and Portrait Alignment
- **Context / Motivation**: Browser review showed the post-benefits reassurance CTA constrained to one half of the desktop support grid and Chris's portrait vertically centred below the start of its accompanying copy.
- **Key Changes**:
  - Made the reassurance CTA span the full width of the desktop support section.
  - Top-aligned Chris's portrait with the adjacent introduction on desktop.
  - Preserved the existing single-column mobile layouts.
- **Files Modified**:
  - [`app/globals.css`](./app/globals.css)
  - [`DEVELOPMENT_LOG.md`](./DEVELOPMENT_LOG.md)
- **Commit / Version**: Uncommitted browser-comment refinements.

### [2026-08-26] — Simplified the First-Conversation Conversion Flow
- **Context / Motivation**: Visitors were being asked to process several service levels, prices and competing action labels before deciding whether to have an initial conversation.
- **Key Changes**:
  - Standardised the primary action across the homepage, navigation, booking surface and Chris page as “Book your free first session”.
  - Added calm decision-point prompts after the six support benefits and Chris's introduction.
  - Reframed the booking section as a three-step “How it works” journey centred on one conversation.
  - Separated the free first session from later support, presenting three simple continuation categories before an expandable pricing and package section.
  - Kept FAQs and testimonials progressively disclosed and moved detailed service boundaries and specialist routes behind an accessible disclosure while retaining a visible reassurance.
  - Added responsive styles, large tap targets and visible keyboard focus for the new disclosures and mobile layouts.
  - Updated server-rendering checks for the revised hierarchy and CTA wording.
- **Files Modified**:
  - [`app/page.tsx`](./app/page.tsx)
  - [`app/chris/page.tsx`](./app/chris/page.tsx)
  - [`app/components/HubSpotMeeting.tsx`](./app/components/HubSpotMeeting.tsx)
  - [`app/components/SiteNavigation.tsx`](./app/components/SiteNavigation.tsx)
  - [`app/globals.css`](./app/globals.css)
  - [`tests/rendered-html.test.mjs`](./tests/rendered-html.test.mjs)
  - [`DEVELOPMENT_LOG.md`](./DEVELOPMENT_LOG.md)
- **Commit / Version**: Uncommitted conversion-flow simplification.

### [2026-08-26] — Updated the Value Proposition
- **Context / Motivation**: The supplied value-proposition manuscript more clearly explains the practical and emotional role of Emotional Life Support, and expands the original four reasons into six distinct benefits.
- **Key Changes**:
  - Replaced the Support-section heading and introductory copy with the supplied wording.
  - Replaced the four existing reason cards with the six supplied propositions, preserving their order and full text.
  - Removed the previous closing statement, which is now covered by the new proposition cards.
  - Updated the desktop card grid to three columns so the expanded content remains readable, while preserving the existing two-column tablet and one-column mobile layouts.
  - Updated the server-rendering content checks to validate the revised section rather than the superseded four-card copy.
  - Verified the section at `1440 × 1000` desktop and `420 × 886` mobile CSS viewports, including navigation, card containment, clean browser logs and zero horizontal overflow.
- **Files Modified**:
  - [`app/page.tsx`](./app/page.tsx)
  - [`app/design-preview/preview.css`](./app/design-preview/preview.css)
  - [`tests/rendered-html.test.mjs`](./tests/rendered-html.test.mjs)
  - [`design-qa.md`](./design-qa.md)
  - [`DEVELOPMENT_LOG.md`](./DEVELOPMENT_LOG.md)
- **Commit / Version**: Uncommitted value-proposition content update.

### [2026-08-26] — Added a Desktop-Wide Density System
- **Context / Motivation**: The desktop preview retained mobile-like vertical stacking and generous section padding, so much of the page required multiple screens per section even when substantial horizontal space was available.
- **Key Changes**:
  - Added desktop-only spacing and sizing rules above `1100px`, leaving the mobile-first layouts unchanged.
  - Reduced oversized desktop section padding, illustration heights and decorative whitespace while retaining normal reading-size typography.
  - Changed testimonials to three columns, FAQs to two columns and tightened the Peace, Courage and Wisdom cards so each section fits within a desktop viewport.
  - Reworked the Support illustration into a shallower panoramic divider and brought all four support cards plus the closing statement into the same desktop view.
  - Placed pricing guidance beside the pricing introduction, condensed the plan cards and split the concierge feature list into two desktop columns.
  - Arranged urgent support and complementary professional-support routes side by side on desktop.
  - Verified `1440 × 1000` desktop and `420 × 886` mobile views, responsive stacking, navigation, card containment, clean browser logs and zero horizontal overflow.
- **Files Modified**:
  - [`app/design-preview/preview.css`](./app/design-preview/preview.css)
  - [`design-qa.md`](./design-qa.md)
  - [`DEVELOPMENT_LOG.md`](./DEVELOPMENT_LOG.md)
- **Commit / Version**: Uncommitted desktop-density refinement.

### [2026-08-26] — Reworked the Responsive Support-Difference Section
- **Context / Motivation**: The desktop Support section used a narrow heading column that made the headline unusually tall, constrained its supporting paragraph and left the four reasons looking like an unconsidered table. The same landscape artwork was also being cropped into unsuitable proportions across desktop and mobile.
- **Key Changes**:
  - Rebuilt the section as a full-width reading sequence with a balanced headline, full-width introductory paragraph, panoramic illustration, responsive reason cards and full-width closing statement.
  - Added a generated `2.5:1` desktop illustration that extends the existing path-and-hills visual language without stretching the mobile artwork.
  - Retained the original `3:2` illustration for mobile through a responsive picture source.
  - Changed the four reasons to an evenly spaced four-card row on desktop, two columns on tablet and a single padded column on mobile, with alternating light surfaces and restrained coral cues.
  - Verified the section at `1440 × 1000` and `420 × 886`, including responsive image selection, card containment, navigation to the section, clean browser logs and zero horizontal overflow.
- **Files Modified**:
  - [`app/page.tsx`](./app/page.tsx)
  - [`app/design-preview/preview.css`](./app/design-preview/preview.css)
  - [`public/journey-landscape-desktop-v2.png`](./public/journey-landscape-desktop-v2.png) (New)
  - [`design-qa.md`](./design-qa.md)
  - [`DEVELOPMENT_LOG.md`](./DEVELOPMENT_LOG.md)
- **Commit / Version**: Uncommitted responsive Support-section redesign.

### [2026-08-26] — Restored Mobile Phase Card Padding
- **Context / Motivation**: The two mobile phase cards in the divorce and rebuilding section had suitable outer spacing, but a more specific homepage rule removed their horizontal internal padding and left the copy touching the card edges.
- **Key Changes**:
  - Added a mobile preview override with matching selector specificity for the standard, first and last phase cards.
  - Restored `24px` of horizontal internal padding to both cards while preserving their stacked flow and connector.
  - Verified both cards at an exact `420px` CSS viewport with equal left and right padding and no horizontal overflow.
- **Files Modified**:
  - [`app/design-preview/preview.css`](./app/design-preview/preview.css)
  - [`design-qa.md`](./design-qa.md)
  - [`DEVELOPMENT_LOG.md`](./DEVELOPMENT_LOG.md)
- **Commit / Version**: Uncommitted mobile phase-card spacing correction.

### [2026-08-26] — Reworked Outcomes, Booking and Specialist Routes
- **Context / Motivation**: Chris identified a narrow support closing statement, outcome copy that appeared constrained by oval shapes, unnecessary numbering, insufficient contrast on the Wisdom panel, an awkward desktop booking layout and a need to direct visitors towards appropriate therapy and legal services.
- **Key Changes**:
  - Expanded the support closing statement across the complete support-card width.
  - Replaced the strict outcome ovals with rounded arch panels that preserve the circular visual language while giving the lower copy a stable rectangular width.
  - Removed outcome numbering visually and semantically by changing the ordered list to an unordered list.
  - Increased the Wisdom panel contrast against the section background.
  - Rebuilt the desktop booking section into a balanced two-column layout with a three-line introduction, vertical steps and a dedicated HubSpot calendar column.
  - Added a separate professional-support area with links to the official BACP therapist search and GOV.UK legal-adviser guidance.
  - Verified `1108px` desktop and `420px` mobile CSS widths, text containment, column separation, link destinations, responsive stacking, clean browser logs and zero horizontal overflow.
- **Files Modified**:
  - [`app/page.tsx`](./app/page.tsx)
  - [`app/design-preview/preview.css`](./app/design-preview/preview.css)
  - [`design-qa.md`](./design-qa.md)
  - [`DEVELOPMENT_LOG.md`](./DEVELOPMENT_LOG.md)
- **Commit / Version**: Uncommitted outcomes, booking and specialist-route refinement.

### [2026-08-26] — Refined Phase Flow, Testimonials and Booking Embed
- **Context / Motivation**: Chris reviewed the preview at `1316 × 886` and `420 × 886` and identified an awkward desktop phase layout, cramped mobile phase cards, a portrait crop that removed part of his hair, inconsistent testimonial card colours and weak booking-help visibility around the native HubSpot embed.
- **Key Changes**:
  - Centred the phase section on desktop and balanced its two cards beneath the heading.
  - Stacked the phase cards on mobile and added a subtle responsive arrow to communicate progression without numbering the phases or implying a fixed start and end.
  - Made the Chris portrait taller and top anchored so the full hairline is preserved and the face sits centrally within the organic crop.
  - Standardised testimonial card colours and introduced a responsive two-column grid that supports additional testimonial records without component changes, with odd final cards centred automatically.
  - Added a rounded clipping boundary around the native HubSpot iframe and replaced the low-contrast fallback with a visible prompt for choosing another date or opening the booking page directly.
  - Verified the updated desktop and mobile layouts, equal testimonial treatments, testimonial expansion, booking fallback contrast, iframe width containment and horizontal overflow in the in-app browser.
- **Files Modified**:
  - [`app/components/HubSpotMeeting.tsx`](./app/components/HubSpotMeeting.tsx)
  - [`app/design-preview/preview.css`](./app/design-preview/preview.css)
  - [`design-qa.md`](./design-qa.md)
  - [`DEVELOPMENT_LOG.md`](./DEVELOPMENT_LOG.md)
- **Commit / Version**: Uncommitted phase, testimonial and booking refinement.

### [2026-08-25] — Standardised DM Sans and Repaired Responsive Layouts
- **Context / Motivation**: Chris reviewed the design preview at several tablet and desktop widths and identified lingering serif typography, clipped labels and card copy, narrow heading columns, a misaligned portrait crop, weak text contrast and awkward footer cookie controls.
- **Key Changes**:
  - Removed the Cormorant Garamond imports and package dependency, replaced all remaining serif font references, and standardised the whole website on DM Sans.
  - Reworked the relevance, Support, Peace/Courage/Wisdom, booking, final action and support-scope layouts at `698px`, `764px`, `822px` and `850px` so headings and card text use the available width without clipping or overflow.
  - Repositioned Chris's photo within its organic crop and kept the face visually centred.
  - Added explicit high-contrast colours to booking assurances, the HubSpot fallback link and final call-to-action copy.
  - Moved the post-consent Cookie settings action from a fixed floating button to the footer legal row while retaining one-click access to the full settings panel.
  - Verified DM Sans and zero horizontal overflow at `390 × 844` and `1440 × 1000`, with clean browser logs, passing ESLint, a successful production build and all rendered-route tests passing.
- **Files Modified**:
  - [`app/layout.tsx`](./app/layout.tsx)
  - [`app/globals.css`](./app/globals.css)
  - [`app/design-preview/preview.css`](./app/design-preview/preview.css)
  - [`app/lib/consent.ts`](./app/lib/consent.ts)
  - [`app/components/CookieConsent.tsx`](./app/components/CookieConsent.tsx)
  - [`app/components/CookieSettingsButton.tsx`](./app/components/CookieSettingsButton.tsx) (New)
  - [`app/components/SiteFooter.tsx`](./app/components/SiteFooter.tsx)
  - [`package.json`](./package.json)
  - [`package-lock.json`](./package-lock.json)
  - [`design-qa.md`](./design-qa.md)
  - [`DEVELOPMENT_LOG.md`](./DEVELOPMENT_LOG.md)
- **Commit / Version**: Uncommitted DM Sans and responsive-layout refinement.

### [2026-08-25] — Addressed Annotated Mobile Preview Feedback
- **Context / Motivation**: Chris reviewed the localhost design preview at mobile size and identified cramped headings, insufficient card padding, an awkward portrait crop, unreadable text, an unhelpful decorative thread, proof-point copy and ordering changes, and a need for meaningful Peace, Courage and Wisdom illustrations.
- **Key Changes**:
  - Removed the repeating left-edge thread decoration and released the Support, Meet Chris and booking headings from narrow mobile width constraints.
  - Rebalanced the mobile heading scale and corrected light-on-light and dark-on-dark text contrast, including the relevance cards and cobalt booking section.
  - Added consistent padding, borders, spacing and white surfaces to the four support-difference cards.
  - Changed Chris's portrait to a taller, lower crop that shows more hair, shoulders and surrounding context.
  - Updated the first proof point to reference navigating divorce while undergoing cancer treatment, moved rebuilding to the second item and volunteering to the third.
  - Added coordinated generated raster illustrations for Peace, Courage and Wisdom using a dove, lion, and owl with an open book.
  - Shortened the four hero assurances so they fit cleanly within the responsive grid.
  - Removed em dashes from all visible application copy, including testimonial attribution and support headings in the Terms page.
  - Verified the revised route at `567 × 886`, `390 × 844` and `1440 × 1000`; mobile navigation and testimonial expansion work, no star ratings appear, browser logs are clean, the production build passes and all rendered-route tests pass.
- **Files Modified**:
  - [`app/page.tsx`](./app/page.tsx)
  - [`app/components/Testimonials.tsx`](./app/components/Testimonials.tsx)
  - [`app/terms/page.tsx`](./app/terms/page.tsx)
  - [`app/design-preview/preview.css`](./app/design-preview/preview.css)
  - [`app/globals.css`](./app/globals.css)
  - [`public/outcome-peace-dove-v1.png`](./public/outcome-peace-dove-v1.png) (New)
  - [`public/outcome-courage-lion-v1.png`](./public/outcome-courage-lion-v1.png) (New)
  - [`public/outcome-wisdom-owl-v1.png`](./public/outcome-wisdom-owl-v1.png) (New)
  - [`design-qa.md`](./design-qa.md)
  - [`DEVELOPMENT_LOG.md`](./DEVELOPMENT_LOG.md)
- **Commit / Version**: Uncommitted annotated mobile-preview refinement.

### [2026-08-25] — Built a Mobile-First Combined Design Preview
- **Context / Motivation**: Chris approved the combined Emotional Life Support design direction and asked for a working localhost preview that applies the new visual template to all copy and content from the live homepage, while retaining the native HubSpot booking embed.
- **Key Changes**:
  - Added a separate `/design-preview` route that renders the existing homepage component, keeping all live copy, offers, safety information, FAQs, testimonials and booking content in sync without changing the production root route.
  - Added a scoped mobile-first visual layer using predominantly white and warm-light surfaces, restrained cobalt, coral calls to action, editorial typography, organic section edges and a knot/thread motif that progressively loosens down the page.
  - Added real raster artwork for the evolving journey thread and the final booking scene, including a comfortable armchair, plant, side table, mug and rug.
  - Preserved the consent-aware native HubSpot meeting embed without attempting to restyle its internal calendar.
  - Retained expandable full testimonial stories, added clear read/close cues through the existing component and confirmed that no unsupported star ratings appear.
  - Verified the route at `390 × 844` and `1440 × 1000`, including mobile navigation, testimonial expansion, booking anchor, HubSpot loading, chair call-to-action and horizontal overflow; completed route ESLint and a successful production build.
- **Files Modified**:
  - [`app/design-preview/page.tsx`](./app/design-preview/page.tsx) (New)
  - [`app/design-preview/preview.css`](./app/design-preview/preview.css) (New)
  - [`public/conversation-chair-light-v1.png`](./public/conversation-chair-light-v1.png) (New)
  - [`public/journey-thread-v1.png`](./public/journey-thread-v1.png) (New)
  - [`design-qa.md`](./design-qa.md)
  - [`DEVELOPMENT_LOG.md`](./DEVELOPMENT_LOG.md)
- **Commit / Version**: Uncommitted localhost design-preview route.

### [2026-08-25] — Replaced Textured Page Surfaces with a Clean White Foundation
- **Context / Motivation**: Chris felt the paper-textured background made the reference-inspired preview look old-fashioned and asked for the cleaner white-background treatment shown in the selected example.
- **Key Changes**:
  - Removed the paper texture from the page, sticky header, footer, early-trust area and mobile navigation.
  - Changed the primary page surface to true white and retained only restrained, flat warm-neutral and powder-blue panels where section separation helps readability.
  - Made cards and reassurance surfaces white so the navy, coral and editorial photography provide the visual character instead of an all-over texture.
  - Corrected the Meet Chris layout at narrow mobile widths after responsive browser verification exposed a two-column override.
  - Rechecked desktop and mobile rendering, horizontal overflow, mobile-menu behavior and browser logs; updated the visual QA record and evidence.
- **Files Modified**:
  - [`app/globals.css`](./app/globals.css)
  - [`design-qa.md`](./design-qa.md)
  - [`DEVELOPMENT_LOG.md`](./DEVELOPMENT_LOG.md)
- **Commit / Version**: Uncommitted clean white-background refinement.

### [2026-08-25] — Enabled Consent-Aware Google Analytics Across the Published Site
- **Context / Motivation**: Chris supplied the Emotional Life Support GA4 tracking code and asked for its details to be preserved for future agents and included on every relevant published page.
- **Key Changes**:
  - Recorded GA4 measurement ID `G-9KYHPSW76N` in a canonical application configuration module and in the repository guidance for future agents.
  - Connected the measurement ID to the shared root layout so all five static routes initialise Google Analytics after a visitor allows optional cookies.
  - Completed the standard Google tag initialisation sequence while retaining denied advertising storage, disabled Google signals and disabled advertising personalisation.
  - Updated the Cookie Notice, Privacy Notice, consent-settings copy and tracking approval record to describe the enabled, consent-aware behaviour accurately.
  - Added a rendered-route regression test requiring the shared GA4 configuration on every published route.
- **Files Modified**:
  - [`app/lib/analytics.ts`](./app/lib/analytics.ts) (New)
  - [`app/layout.tsx`](./app/layout.tsx)
  - [`app/components/CookieConsent.tsx`](./app/components/CookieConsent.tsx)
  - [`app/cookies/page.tsx`](./app/cookies/page.tsx)
  - [`app/privacy/page.tsx`](./app/privacy/page.tsx)
  - [`tests/rendered-html.test.mjs`](./tests/rendered-html.test.mjs)
  - [`AGENTS.md`](./AGENTS.md)
  - [`README.md`](./README.md)
  - [`TRACKING_NOTICE_COPY_APPROVAL.md`](./TRACKING_NOTICE_COPY_APPROVAL.md)
  - [`DEVELOPMENT_LOG.md`](./DEVELOPMENT_LOG.md)
- **Commit / Version**: Uncommitted consent-aware GA4 integration.

### [2026-08-24] — Created Reference-Inspired Homepage Design Preview
- **Context / Motivation**: Chris selected a warm navy, coral and cream editorial website concept as his preferred direction and asked for a working preview of the existing website in that style, while retaining the approved emotional-support content and functional booking journey.
- **Key Changes**:
  - Restyled the homepage around the selected concept's warm paper texture, bold sans-serif hero, editorial serif supporting headings, cobalt transition sections, coral calls to action, compact reassurance icons and softer card treatments.
  - Preserved all approved service, pricing, safeguarding, FAQ and legal wording rather than shortening the real site to the concept's illustrative page length.
  - Reworked the existing woman-and-mug hero into a reference-aligned editorial composition and added matching landscape and armchair raster assets.
  - Added the generated landscape illustration to the support section and the furniture vignette to the closing call to action.
  - Replaced the testimonial's inline chevron SVG with the existing Radix icon system and added Radix reassurance and action icons.
  - Corrected mobile call-to-action ordering, long organisation-link wrapping and horizontal overflow; verified the mobile menu open and Escape-close behavior.
  - Completed desktop/mobile browser verification, reference comparison, application linting, production build, rendered-route tests and the static export.
- **Files Modified**:
  - [`app/page.tsx`](./app/page.tsx)
  - [`app/globals.css`](./app/globals.css)
  - [`app/components/Testimonials.tsx`](./app/components/Testimonials.tsx)
  - [`public/hero-calm-relief-editorial-v1.png`](./public/hero-calm-relief-editorial-v1.png) (New)
  - [`public/journey-landscape-v1.png`](./public/journey-landscape-v1.png) (New)
  - [`public/conversation-chair-v2.png`](./public/conversation-chair-v2.png) (New)
  - [`design-qa.md`](./design-qa.md)
  - [`DEVELOPMENT_LOG.md`](./DEVELOPMENT_LOG.md)
- **Commit / Version**: Uncommitted reference-inspired homepage preview.

### [2026-08-24] — Linked Volunteer Organisations with Accessible Summaries
- **Context / Motivation**: Chris asked for the ANDYSMANCLUB and Samaritans names in his volunteer-experience statement to link to their official websites and explain each organisation on hover.
- **Key Changes**:
  - Linked ANDYSMANCLUB and Samaritans separately to their official websites, opening each in a new tab.
  - Added concise, source-grounded hover text describing each organisation.
  - Added screen-reader descriptions and visible keyboard-focus styling so the contextual information is not limited to mouse users.
  - Added rendered-page regression checks for both links and descriptions.
- **Files Modified**:
  - [`app/page.tsx`](./app/page.tsx)
  - [`app/globals.css`](./app/globals.css)
  - [`tests/rendered-html.test.mjs`](./tests/rendered-html.test.mjs)
  - [`DEVELOPMENT_LOG.md`](./DEVELOPMENT_LOG.md)
- **Commit / Version**: `feat: implement approved homepage journey and tracking`

### [2026-08-24] — Made the Free Call the Only Public Booking Route
- **Context / Motivation**: The one-off two-hour session should only be offered after a prospective client has first had the free one-hour conversation. The website therefore should not provide a separate paid-session booking route at this stage.
- **Key Changes**:
  - Made the one-off two-hour support session visible as an optional next step after the free support call.
  - Kept the approved £300 including VAT price visible, while removing the direct paid-booking action and its environment-variable dependency.
  - Changed the offer action to “Start with the free hour,” linking back to the existing free-call section.
  - Removed the dedicated two-hour booking URL from the outstanding implementation-information list.
  - Updated the rendered-page regression checks to protect the revised buying journey.
- **Files Modified**:
  - [`app/page.tsx`](./app/page.tsx)
  - [`tests/rendered-html.test.mjs`](./tests/rendered-html.test.mjs)
  - [`TRACKING_NOTICE_COPY_APPROVAL.md`](./TRACKING_NOTICE_COPY_APPROVAL.md)
  - [`DEVELOPMENT_LOG.md`](./DEVELOPMENT_LOG.md)
- **Commit / Version**: `feat: implement approved homepage journey and tracking`

### [2026-08-24] — Implemented Round 3 Homepage Decisions
- **Context / Motivation**: Chris completed the third copy review, approved all remaining homepage decisions except Divorce Concierge, and authorised the selected wording for implementation.
- **Key Changes**:
  - Updated the reassurance strip, testimonial heading and free-call section with the selected customer-centred wording.
  - Added consent-aware HubSpot meeting-calendar support with an external booking fallback.
  - Added the approved cookie message, equal essential/optional choices, persistent settings and a hook for Google Analytics once a GA measurement ID is supplied.
  - Updated monthly-plan terms and FAQ wording so upgrades can begin immediately subject to availability and downgrades begin on the next billing date.
  - Added the approved shorter outcome qualification near the bottom of the homepage.
  - Prepared the approved £300 one-off session behind a dedicated booking-URL configuration; it remains unpublished because the required two-hour HubSpot scheduling URL has not yet been supplied.
  - Kept the current Divorce Concierge copy and added a focused Round 4 approval document based on Chris's latest positioning feedback.
  - Added a side-by-side tracking-notice review because enabling the calendar and analytics would otherwise contradict the current Cookie Notice and Privacy Notice.
  - Normalized the Round 3 decision checkboxes for reliable Markdown rendering.
- **Files Modified**:
  - [`app/page.tsx`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/app/page.tsx)
  - [`app/layout.tsx`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/app/layout.tsx)
  - [`app/globals.css`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/app/globals.css)
  - [`app/components/CookieConsent.tsx`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/app/components/CookieConsent.tsx) (New)
  - [`app/components/HubSpotMeeting.tsx`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/app/components/HubSpotMeeting.tsx) (New)
  - [`app/components/Testimonials.tsx`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/app/components/Testimonials.tsx)
  - [`app/lib/consent.ts`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/app/lib/consent.ts) (New)
  - [`tests/rendered-html.test.mjs`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/tests/rendered-html.test.mjs)
  - [`COPY_APPROVAL_REVIEW_ROUND_3.md`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/COPY_APPROVAL_REVIEW_ROUND_3.md)
  - [`COPY_APPROVAL_REVIEW_ROUND_4.md`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/COPY_APPROVAL_REVIEW_ROUND_4.md) (New)
  - [`TRACKING_NOTICE_COPY_APPROVAL.md`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/TRACKING_NOTICE_COPY_APPROVAL.md) (New)
  - [`DEVELOPMENT_LOG.md`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/DEVELOPMENT_LOG.md)
- **Commit / Version**: `feat: implement approved homepage journey and tracking`

### [2026-08-24] — Implemented Approved Homepage Copy and Prepared Final Review
- **Context / Motivation**: Chris completed Round 2, approved selected wording and explicitly authorised implementation while leaving several sections blank, revised or deferred.
- **Key Changes**:
  - Implemented only the homepage copy approved in Rounds 1 and 2, including the narrower divorce-and-rebuilding focus, approved hero, value propositions, Chris introduction, Peace/Courage/Wisdom framework, monthly plans, FAQ, location and footer.
  - Removed the decision-to-leave stage, duplicated Chris introduction, separate outcomes framework and negative-stakes section as approved.
  - Corrected the mobile hero crop by preserving the source image's portrait composition.
  - Kept the reassurance strip, testimonials heading, free-call section, Concierge copy and tracking implementation unchanged because their replacement wording remains unresolved.
  - Recorded the approved £300 one-off-session price without publishing the offer because its name and sales wording were not approved.
  - Added a short Round 3 review containing only the remaining copy and operational decisions.
  - Updated rendered-homepage tests to reflect the approved content and guard against reintroducing the leaving stage or prematurely publishing the £300 offer.
- **Files Modified**:
  - [`app/page.tsx`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/app/page.tsx)
  - [`app/layout.tsx`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/app/layout.tsx)
  - [`app/globals.css`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/app/globals.css)
  - [`app/components/SiteFooter.tsx`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/app/components/SiteFooter.tsx)
  - [`tests/rendered-html.test.mjs`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/tests/rendered-html.test.mjs)
  - [`COPY_APPROVAL_REVIEW_ROUND_3.md`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/COPY_APPROVAL_REVIEW_ROUND_3.md) (New)
  - [`DEVELOPMENT_LOG.md`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/DEVELOPMENT_LOG.md)
- **Commit / Version**: Uncommitted approved-copy implementation and Round 3 review.

### [2026-08-24] — Added Second-Round Homepage Copy Review
- **Context / Motivation**: Chris asked to proceed after reviewing the first side-by-side copy document, while retaining explicit control over all website wording.
- **Key Changes**:
  - Added a focused second-round approval document covering only unresolved copy and pricing decisions.
  - Preserved the first-round review as the source record and made clear that no website implementation is authorised.
  - Added provisional qualitative keyword findings with an explicit warning that genuine search-volume research is still required.
  - Presented the £200 and £300 one-off session prices as a decision for Chris rather than assuming one.
  - Proposed revised value propositions, hero language, credibility points, plan copy, concierge positioning, outcome qualification and softer cookie messaging.
- **Files Modified**:
  - [`COPY_APPROVAL_REVIEW_ROUND_2.md`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/COPY_APPROVAL_REVIEW_ROUND_2.md) (New)
  - [`DEVELOPMENT_LOG.md`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/DEVELOPMENT_LOG.md)
- **Commit / Version**: Uncommitted second-round review draft.

### [2026-08-24] — Saved Chris's Homepage Copy Review Decisions
- **Context / Motivation**: Chris completed the homepage copy approval review outside the editor and supplied the edited text for preservation.
- **Key Changes**:
  - Confirmed the pasted review and repository copy contain the same edited decisions and comments.
  - Preserved all of Chris's approvals, revision requests, offer decisions and copy feedback.
  - Normalized selected Markdown checkboxes to `[x]` so the decisions render visibly as checked.
  - Left unresolved revision requests as review work; no homepage implementation was performed.
- **Files Modified**:
  - [`COPY_APPROVAL_REVIEW.md`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/COPY_APPROVAL_REVIEW.md)
  - [`DEVELOPMENT_LOG.md`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/DEVELOPMENT_LOG.md)
- **Commit / Version**: Uncommitted reviewed draft.

### [2026-08-24] — Added Homepage Copy Approval Review
- **Context / Motivation**: Chris required explicit control over all website wording and requested a side-by-side deliverable showing the existing homepage copy against proposed revisions before any implementation.
- **Key Changes**:
  - Added a section-by-section comparison of existing and proposed homepage copy.
  - Added explicit approval choices and comment space for every section.
  - Recorded the agreed audience, offer, methodology, HubSpot and analytics directions without treating those structural decisions as approval of the wording.
  - Marked legal pages, campaign materials and other cross-site copy as requiring separate approval.
  - Made clear that the document grants no implementation authority until final approval is recorded.
- **Files Modified**:
  - [`COPY_APPROVAL_REVIEW.md`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/COPY_APPROVAL_REVIEW.md) (New)
  - [`DEVELOPMENT_LOG.md`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/DEVELOPMENT_LOG.md)
- **Commit / Version**: Uncommitted working draft.

### [2026-08-23] — Asset Path Fix for Custom Domain Root
- **Issue**: Site rendered without styles on `https://emotionallifesupport.com/` (black and white text, unstyled elements).
- **Root Cause**: `scripts/export-static.mjs` defaulted `basePath` to `"/website"`, prefixing all stylesheet, JavaScript, and image URLs with `/website/_next/static/css/...` which returned HTTP 404 on the root domain.
- **Fix**: Updated `scripts/export-static.mjs` so `basePath` defaults to `process.env.BASE_PATH ?? ""` (empty string).
- **Files Modified**:
  - [`scripts/export-static.mjs`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/scripts/export-static.mjs)
- **Commit**: `94a11dc` (`fix: remove /website basePath prefix for custom domain root static assets`)

---

### [2026-08-22] — Navigation & Domain Setup
- **Changes**:
  - Added `"Testimonials"` item to the main header navigation menu in [`app/components/SiteNavigation.tsx`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/app/components/SiteNavigation.tsx).
  - Created [`public/CNAME`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/public/CNAME) file containing `emotionallifesupport.com`.
  - Pushed custom domain DNS configuration instructions for GoDaddy/Cloudflare A-records (`185.199.108.153` to `111.153`) and CNAME (`emotionallifesupport.github.io`).
- **Files Modified**:
  - [`app/components/SiteNavigation.tsx`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/app/components/SiteNavigation.tsx)
  - [`public/CNAME`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/public/CNAME)
- **Commits**: `c7e4df1`, `7f5f0c8`

---

### [2026-08-22] — Testimonials Module Implementation (Concept 1)
- **Feature**: Added Testimonials module featuring real client quotes (**Terri**, **Howard**, **Hayley**) extracted from Google Sheets.
- **Design Pattern**: Concept 1 — Stacked Accordion Cards with prominent italic serif pull-quotes (`var(--serif)` Cormorant Garamond) and expandable backstory details.
- **Accessibility & UX**: Uses native HTML `<details name="testimonial-accordion">` and `<summary>` elements. Mutually exclusive accordions close automatically when another quote is opened while preserving native browser "Find in page" searchability.
- **Files Modified**:
  - [`app/components/Testimonials.tsx`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/app/components/Testimonials.tsx) (New component)
  - [`app/globals.css`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/app/globals.css) (Added `.testimonials-section`, `.testimonial-card`, `.testimonial-headline`, and chevron transitions)
  - [`app/page.tsx`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/app/page.tsx) (Embedded `<Testimonials />` between `#about` and `#process` sections)
- **Commit**: `b94701c` (`feat: add testimonials module with Concept 1 accordion cards`)

---

### [2026-08-21] — Migration from Codex to Google Antigravity & GitHub Pages Automation
- **Context & Goal**: Migrated development workflow from Codex to Google Antigravity and moved website hosting from OpenAI ChatGPT Sites to GitHub Pages.
- **Root Codebase Consolidation**:
  - Identified that the live site source code was located inside `storybrand-wireframe/` (Next.js / Vinext application), while the workspace root contained an obsolete Phase 0 prototype (`index.html`).
  - Promoted the Next.js / Vinext source code from `storybrand-wireframe/` directly to the project root directory.
  - Removed outdated prototype files (`index.html`, `styles.css`, `script.js`).
  - Added `.openai/hosting.json` and `build/sites-vite-plugin.ts` build shims to decouple Vite/Vinext builds from Codex sandbox proprietary dependencies.
- **Static Site Export Engine (`scripts/export-static.mjs`)**:
  - Created [`scripts/export-static.mjs`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/scripts/export-static.mjs) which executes `dist/server/index.js` to pre-render static HTML files for all pages (`/`, `/chris`, `/privacy`, `/cookies`, `/terms`) into `./dist/client`.
  - Added `"export": "npm run build && node scripts/export-static.mjs"` to `package.json`.
  - Configured `.nojekyll` file creation inside `dist/client` to prevent GitHub Pages from skipping `_next/` directories.
- **GitHub Actions Deployment Pipeline (`.github/workflows/deploy.yml`)**:
  - Created `.github/workflows/deploy.yml` workflow to automate static build and deployment to GitHub Pages on pushes to `main`.
  - Switched repository deployment setting from `legacy` branch mode to `workflow` mode via GitHub API.
- **Next.js Static Image Optimization Fix**:
  - **Issue**: Next.js `<Image>` component generated dynamic `/_next/image?url=...` resizer URLs and `srcset` query strings which returned 404 errors on static hosts.
  - **Fix**: Added regex transformation logic to `scripts/export-static.mjs` to rewrite image `src` and `srcset` attributes directly to static public assets (`/hero-calm-relief-woman-v3.png`, `/chris-amc.jpg`).
- **Files Created/Modified**:
  - [`scripts/export-static.mjs`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/scripts/export-static.mjs) (New)
  - [`.github/workflows/deploy.yml`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/.github/workflows/deploy.yml) (New)
  - [`package.json`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/package.json)
  - [`.gitignore`](file:///Users/chrisheffer/Library/Mobile%20Documents/com~apple~CloudDocs/Code/Emotional%20Life%20Support/.gitignore)

---

## 🧰 Development Commands Cheat Sheet

```bash
# Start local development server (http://localhost:3000)
npm run dev

# Run linter checks
npm run lint

# Build static server and test rendered HTML output
npm run test

# Build production bundle & export static site to ./dist/client
npm run export

# Git push trigger for GitHub Actions auto-deployment
git add .
git commit -m "your commit message"
git push origin main
```
