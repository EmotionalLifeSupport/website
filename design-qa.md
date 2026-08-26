# Design QA — Reference-Inspired Homepage Preview

## 2026-08-26 — Value proposition content update

- Replaced the Support-section heading and introductory paragraph with the supplied value-proposition copy.
- Expanded the section from four to six cards: being able to speak openly, lived divorce experience, time entirely about the visitor, independent support, ongoing support as life happens and practical help alongside emotional support.
- Removed the former closing paragraph because the six supplied cards now cover the same role more clearly.
- At `1440 × 1000`, all six cards form two balanced rows of three with no internal or horizontal overflow. At `420 × 886`, the cards form a single readable column with no internal or horizontal overflow.
- Desktop navigation to Support and mobile menu navigation to Support both land the section below the sticky header. Browser warnings and errors are empty.
- Browser evidence:
  - `/private/tmp/els-value-proposition-desktop.png`
  - `/private/tmp/els-value-proposition-mobile.png`

revision result: passed

## 2026-08-26 — Desktop-wide density pass

- Added a desktop-only density layer at `1100px` and above. Mobile remains one-column and unchanged at the existing breakpoints.
- At `1440 × 1000`, Support now occupies `0.99` viewport, Meet Chris `0.71`, Testimonials `0.58`, Peace/Courage/Wisdom `0.79`, the one-off offer `0.41`, FAQs `0.44` and the final chair action `0.47`.
- The native HubSpot booking area remains `1.07` viewports because the third-party calendar controls its internal height. Pricing remains `1.64` viewports because it contains two monthly offers plus the detailed concierge offer. Scope and safety remains `1.15` viewports because all six specialist routes remain visible and fully described.
- Compared with the prior measured section heights, Support is approximately `35%` shorter, Testimonials `35%`, Peace/Courage/Wisdom `25%`, Pricing `26%`, FAQs `56%` and Scope `19%`.
- All testimonial, outcome, pricing and support-route cards report zero internal overflow. The desktop document has no horizontal overflow and browser warnings and errors are empty.
- At `420 × 886`, Support, testimonials, outcomes, pricing, FAQs, safety routes and the responsive illustration retain their established one-column/mobile behavior with zero horizontal overflow.
- Mobile navigation was opened and Pricing selected, landing the section below the sticky header.
- Browser evidence:
  - `/private/tmp/els-density-support-desktop.png`
  - `/private/tmp/els-density-testimonials-desktop.png`
  - `/private/tmp/els-density-process-desktop.png`
  - `/private/tmp/els-density-pricing-desktop.png`
  - `/private/tmp/els-density-scope-desktop.png`

revision result: passed

## 2026-08-26 — Responsive Support-section redesign

- Expanded the Support headline and introduction to the full section width, reducing the desktop headline from a narrow vertical stack to two balanced lines.
- Added a dedicated `2.5:1` desktop landscape illustration and retained the original `3:2` version for mobile. Browser inspection confirms the correct source loads at each breakpoint.
- Replaced the tight two-by-two card table with four equal desktop cards, two tablet columns and one mobile column. Every tested card contains its full copy without clipping or overflow.
- At `1440 × 1000`, the heading uses the available `1136px` content width, the illustration renders at a `2.5:1` ratio and the four cards form a single row.
- At `420 × 886`, the heading, introduction and image use the full `372px` content width, the mobile illustration renders at `3:2`, all cards stack and the document has no horizontal overflow.
- Mobile navigation was opened and the Support link was selected, correctly landing the section below the sticky header. Browser warnings and errors are empty.
- Browser evidence:
  - `/private/tmp/els-support-redesign-desktop.png`
  - `/private/tmp/els-support-cards-desktop.png`
  - `/private/tmp/els-support-redesign-mobile.png`
  - `/private/tmp/els-support-cards-mobile.png`

revision result: passed

## 2026-08-26 — Mobile phase-card padding correction

- Corrected a mobile cascade conflict that removed the internal horizontal padding from the divorce and rebuilding phase cards.
- At an exact `420px` CSS viewport, both cards now have `24px` left and right padding, a consistent `24px` outer inset and no horizontal overflow.
- The cards remain sequentially stacked with the existing restrained downward connector.
- Browser evidence: `/private/tmp/els-mobile-card-padding-fixed.png`.

revision result: passed

## 2026-08-26 — Desktop support, outcomes, booking and specialist-route revision

- Expanded the support closing statement across the full card-grid width.
- Replaced the narrow outcome ovals with rounded arch panels whose lower halves remain wide enough for the complete text. Removed the visual and semantic numbering, and increased the Wisdom panel contrast.
- Rebuilt the desktop free-call section as a clear two-column layout: a three-line introduction with vertically arranged steps on the left and the native HubSpot calendar on the right.
- Added a separate non-urgent section for professional services that complement Emotional Life Support, linking to the official BACP therapist search and GOV.UK legal-adviser guidance.
- Exact CSS-width checks at `1108px` confirm all three outcome descriptions remain inside their panels, the booking columns do not overlap, the support closing statement matches the full card-grid width and the two professional-service cards remain side by side.
- Exact CSS-width checks at `420px` confirm the outcome cards and professional-service cards stack to one column, the support closing statement remains full width and there is no horizontal overflow.
- Browser evidence: `/private/tmp/els-final-fullpage-2026-08-26.png`.

revision result: passed

## 2026-08-26 — Phase, portrait, testimonial and booking refinements

- Changed the divorce and rebuilding section from an uneven desktop split into a centred heading with two balanced phase cards.
- Added a restrained directional connector between the two phases. It becomes a downward connector when the cards stack on mobile, without numbering the phases or presenting them as a fixed start and end.
- Increased the portrait crop height and anchored the photograph to the top so Chris's full hairline remains visible and his face sits centrally within the organic shape.
- Standardised every testimonial card to the same white treatment. The responsive grid now uses two columns on desktop and one on mobile, with an odd final card centred, so four or five testimonials remain balanced without component changes.
- Clipped the native HubSpot embed within a consistent rounded container and added a high-contrast helper link for choosing another date or opening the booking page directly.
- Confirmed that the HubSpot promotional footer and selected-date state are rendered inside HubSpot's cross-origin iframe. The site cannot independently restyle or clear those internal elements while retaining the native embed.
- Browser evidence:
  - `/private/tmp/els-phases-desktop-1316.png`
  - `/private/tmp/els-phases-mobile-420.png`
  - `/private/tmp/els-portrait-mobile-420.png`
- Browser measurements confirm one phase column at the mobile breakpoint, two centred columns on desktop, equal testimonial backgrounds, an exact iframe-to-container width match, visible white booking-help copy and zero horizontal document overflow.
- Testimonial expansion was exercised and exposed the full story correctly.

revision result: passed

## 2026-08-25 — Mobile-first `/design-preview` route

### DM Sans and tablet-layout revision

- Removed Cormorant Garamond imports, package references and residual serif font tokens. Body text, headings, labels, navigation and controls now resolve directly to DM Sans.
- Reworked the `698px`, `764px`, `822px` and `850px` layouts so relevance cards, Peace/Courage/Wisdom cards, booking content, safety content and footer legal controls fit their containers without clipping or narrow artificial heading columns.
- Repositioned Chris's portrait crop so his face sits centrally within the organic oval.
- Restored explicit contrast for booking assurances, the HubSpot fallback link and final call-to-action copy.
- Moved the post-consent Cookie settings control into the footer legal row. Activating it reopens the full consent panel, and the former floating text button is no longer rendered.
- Browser evidence:
  - `/private/tmp/els-dmsans-relevance-764.png`
  - `/private/tmp/els-dmsans-support-698.png`
  - `/private/tmp/els-dmsans-about-698.png`
  - `/private/tmp/els-dmsans-process-822.png`
  - `/private/tmp/els-dmsans-call-822.png`
  - `/private/tmp/els-dmsans-final-822.png`
  - `/private/tmp/els-dmsans-scope-822.png`
  - `/private/tmp/els-dmsans-footer-850.png`
  - `/private/tmp/els-dmsans-cookie-panel-850.png`
  - `/private/tmp/els-dmsans-mobile-390.png`
  - `/private/tmp/els-dmsans-desktop-1440.png`
- Final browser measurements at `390 × 844` and `1440 × 1000` report DM Sans for both body and heading text, zero horizontal overflow and no console warnings or errors.
- Route ESLint, the production build and all three rendered-route tests pass.

revision result: passed

### Annotated mobile feedback revision

- Browser comment viewport: `567 × 886`; additional checks: `390 × 844` and `1440 × 1000`, all at device scale factor 1.
- Revised evidence:
  - `/private/tmp/els-feedback-fullpage-567.png`
  - `/private/tmp/els-feedback-support-567.png`
  - `/private/tmp/els-feedback-support-card-visible.png`
  - `/private/tmp/els-feedback-about-567.png`
  - `/private/tmp/els-feedback-about-proof-567.png`
  - `/private/tmp/els-feedback-process-567.png`
  - `/private/tmp/els-feedback-call-567.png`
  - `/private/tmp/els-feedback-hero-points-567.png`
  - `/private/tmp/els-feedback-mobile-top-final.png`
  - `/private/tmp/els-feedback-mobile-process-final.png`
  - `/private/tmp/els-feedback-desktop-top-final.png`
- Removed the decorative left-edge thread because it appeared disconnected from the sections rather than helping the journey narrative.
- Removed narrow mobile heading constraints from the Support, Meet Chris and booking sections and reduced the mobile display scale so headings use the available content width without excessive vertical stacking.
- Restored comfortable internal padding, borders and gaps to the four support-difference cards.
- Changed the Chris portrait to a taller crop with a lower focal position, showing more hair, shoulders and context.
- Updated and reordered the Meet Chris proof points: cancer treatment now appears in the first item, rebuilding remains in the second, and volunteering is third.
- Added three coordinated raster illustrations to the Peace, Courage and Wisdom cards: dove, lion and owl with book.
- Corrected inherited white-on-white text in the relevance cards and explicit navy-on-cobalt text in the booking section. Browser screenshots confirm readable text on both light and dark surfaces.
- Shortened the four hero assurances so each sits on one line at the reviewed desktop width and within its own mobile grid cell.
- Removed em dashes from all visible application copy. Browser DOM verification found none on the preview route.
- Mobile navigation, testimonial expansion, testimonial no-star treatment and console health pass after the revision. Production build and rendered-route tests pass.

revision result: passed

- Source visual truth:
  - `/Users/chrisheffer/.codex/generated_images/01a034d0-6ff0-7c30-9359-0800261b680d/exec-91a6dd0a-2fdd-497e-87b9-edacbe363c1d.png`
  - `/Users/chrisheffer/.codex/generated_images/01a034d0-6ff0-7c30-9359-0800261b680d/exec-461fe02f-9f20-4325-88ea-7dad4751cec4.png`
  - `/Users/chrisheffer/.codex/generated_images/01a034d0-6ff0-7c30-9359-0800261b680d/exec-58200689-c258-4398-a105-96a8c38dc99f.png`
- Browser-rendered evidence:
  - `/private/tmp/els-design-preview-mobile-final.png`
  - `/private/tmp/els-design-preview-mobile-testimonial-fixed.png`
  - `/private/tmp/els-design-preview-mobile-booking.png`
  - `/private/tmp/els-design-preview-mobile-chair.png`
  - `/private/tmp/els-design-preview-desktop-top.png`
- Tested viewports: `390 × 844` mobile and `1440 × 1000` desktop at device scale factor 1.

### Findings and resolution

- The preview uses the complete live homepage component, so its copy, pricing, safety wording, FAQs and booking journey remain in sync with the current website.
- The approved visual language is present throughout: light surfaces, restrained cobalt, coral actions, photography plus illustration, organic edges and the coral knot/thread motif progressing down the page.
- The final booking action uses a real raster scene with a comfortable armchair, plant, side table, mug and rug rather than a waiting-room chair or CSS-built approximation.
- HubSpot remains the native consent-aware embed. Its internal calendar styling is intentionally not overridden.
- All three testimonial cards contain expandable full stories with visible “Read full story” and “Close story” cues. No rating stars are present.
- A P2 expanded-testimonial height issue found during mobile QA was fixed by removing the inherited full-height summary rule; the open story now flows directly below its quote.
- Mobile navigation opens and routes to Testimonials correctly. The booking anchor and HubSpot calendar load, and the previously checked `390px` viewport has no horizontal overflow.
- Route-specific ESLint, the production build and the local HTTP response pass; `/design-preview` returns `200` and is included in the application route build.

final result: passed

- Source visual truth: `/var/folders/ts/8mhlgjhd2xg418vwx9blfnt00000gn/T/codex-clipboard-da661970-be54-4990-9b21-c77759de1fac.png`
- Browser-rendered implementation evidence:
  - `/private/tmp/els-white-background-desktop.png`
  - `/private/tmp/els-white-background-mobile.png`
  - `/private/tmp/els-reference-style-desktop-handoff-final.png`
  - `/private/tmp/els-reference-style-desktop-full-final-v3.png`
  - `/private/tmp/els-reference-style-mobile-final-v3.png`
  - `/private/tmp/els-reference-style-mobile-menu-final.png`
- Combined comparison evidence:
  - `/private/tmp/els-design-qa-hero-final-v2.png`
  - `/private/tmp/els-design-qa-overall-final-v2.png`
- Viewports and density:
  - Desktop implementation: CSS and pixels `1440 × 1000`, device scale factor 1.
  - Mobile implementation: CSS and pixels `390 × 844`, device scale factor 1.
  - Source image: `862 × 1825` pixels. It is a full-page presentation image rather than a declared browser viewport, so the focused hero comparison uses a normalized contain-fit rather than claiming pixel-identical geometry.
- State: homepage opening view, mobile navigation open and closed, booking anchor selected, live HubSpot calendar loaded.

## Findings

No actionable P0, P1 or P2 differences remain for the requested white-background refinement.

- The hero now carries the reference's bold sans-serif promise, clean white field, coral action, portrait-led two-column balance and immediate reassurance row.
- The implementation deliberately retains the existing site's approved service copy, pricing, safety information, FAQs and real booking experience. This makes the full page substantially longer than the reference concept, but the added length is an intentional content constraint rather than visual drift.
- The blue support band, editorial serif section headings, landscape illustration, personal introduction, testimonial treatment, three-part Peace/Courage/Wisdom section and furniture-led closing action consistently apply the selected design language without relying on an all-over paper texture.

## Required fidelity surfaces

- Fonts and typography: DM Sans supplies the full site type system, including headings, navigation, labels, body copy and controls. The desktop hero was revised from four lines to the reference's three-line rhythm.
- Spacing and layout rhythm: desktop uses a wide two-column hero, compact reassurance strip, full-width cobalt transition and alternating editorial sections. Mobile places the primary call to action before the portrait and has no horizontal overflow.
- Colors and visual tokens: true white is now the dominant page surface, supported by deep cobalt/navy, coral action color and restrained flat warm-neutral and powder-blue panels. Text and controls retain visible focus and practical contrast.
- Image quality and asset fidelity: the existing woman-and-mug subject is preserved in a new editorial hero background. The landscape and chair assets are real generated raster images with matching art direction; no CSS illustrations, handcrafted SVG artwork or placeholder imagery are used. Existing Chris photography is preserved.
- Copy and content: all existing approved service wording remains intact. Only non-copy presentation structure, icon placement and visual assets changed.
- Icons and states: Radix icons provide a consistent line weight for reassurance, arrows, menu controls and testimonial expansion. The prior inline testimonial chevron SVG was replaced with the library icon.
- Accessibility and responsiveness: semantic headings and landmarks remain intact, images have meaningful alt text, focus styling is visible, the mobile menu exposes `aria-expanded`, closes with Escape and returns to a usable closed state, and the tested mobile viewport has no overflow.

## Browser and interaction verification

- Page identity and meaningful DOM content verified at `http://localhost:3000/`.
- No framework overlay or blank state detected.
- Browser logs checked at desktop and mobile sizes: no application warnings or errors.
- Hero, landscape, profile and closing furniture imagery loaded successfully.
- Hero booking action navigates to `#first-conversation`; the target lands below the sticky header.
- Mobile menu opens, exposes the full navigation, closes with Escape and preserves usable controls.
- Desktop and mobile screenshots were captured from the in-app browser.
- `npx eslint app`, production build, rendered-route tests and the static export pass.
- Repository-wide `npm run lint` remains affected by unrelated downloaded webpage files already present outside the application source.

## Comparison history

1. Initial desktop comparison found a P2 typography mismatch: the hero promise wrapped to four lines instead of the reference's three. The desktop display size and usable line width were refined; the focused post-fix comparison confirms the three-line rhythm.
2. Initial mobile validation found P2 horizontal overflow caused by long linked organisation names. The inline wrapping behavior and homepage overflow containment were corrected; `scrollWidth` now equals the `390px` viewport.
3. Initial mobile composition placed the portrait before the booking action. The hero switches to an explicit mobile flex order so the call to action now precedes the image, matching the intended conversion hierarchy.
4. Follow-up feedback identified the global paper texture as dated. The texture was removed from all page-level surfaces in favour of true white, with only a small number of flat pale panels retained for hierarchy.
5. The white-background mobile review exposed a P2 Meet Chris grid override at narrow widths. The section now collapses to one column below `820px` and has no horizontal overflow.

## Follow-up polish

- P3: the existing site contains much more commercial, safety and legal content than the reference concept, so the complete page cannot match the concept's compact overall height without removing approved material.
- P3: the live HubSpot booking calendar retains HubSpot's own embedded styling because it is a real third-party scheduling surface.

final result: passed
