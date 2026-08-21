# Design QA

- Source visual truth:
  - `/Users/chrisheffer/Library/Mobile Documents/com~apple~CloudDocs/Code/Emotional Life Support/ux-audit-2026-08-19/preview-hero-desktop.png`
  - `/Users/chrisheffer/Library/Mobile Documents/com~apple~CloudDocs/Code/Emotional Life Support/ux-audit-2026-08-19/preview-booking-mobile.png`
  - `/Users/chrisheffer/Library/Mobile Documents/com~apple~CloudDocs/Code/Emotional Life Support/ux-audit-2026-08-19/preview-pricing-mobile.png`
- Browser-rendered implementation evidence:
  - `/private/tmp/els-implementation-desktop-final.png`
  - `/private/tmp/els-implementation-mobile.png`
  - `/private/tmp/els-implementation-mobile-booking-tall.png`
  - `/private/tmp/els-implementation-mobile-pricing-details.png`
- Combined comparison evidence:
  - `/private/tmp/els-design-qa-comparison-hero-final.png`
  - `/private/tmp/els-design-qa-comparison-booking.png`
  - `/private/tmp/els-design-qa-comparison-pricing.png`
- Viewports and density:
  - Desktop source and implementation: `1504 × 1046` pixels at CSS `1504 × 1046`, device scale factor 1.
  - Mobile source concepts: `927 × 1697` booking and `831 × 1893` pricing, scaled proportionally in the combined comparison.
  - Mobile implementation: CSS `390 × 844` and `390 × 1139` browser captures, device scale factor 1.
- State: homepage hero; mobile booking section; mobile pricing comparison; mobile menu open and closed; active navigation after anchor selection.

## Findings

No actionable P0, P1 or P2 differences remain.

- The hero preserves the approved editorial composition: three-line serif promise, warm paper surface, terracotta action, portrait-led right column and immediate reassurance strip.
- The booking section preserves the approved dark-green/cream hierarchy and compact three-step introduction. The concept's illustrative calendar is intentionally replaced with a real HubSpot scheduling handoff because the cross-origin embed cannot be reliably styled, cropped or stripped of promotional branding. The live journey remains functional and no fake calendar is presented.
- The pricing section preserves the approved pre-price guidance, directly comparable fixed plans and visually separated concierge treatment. Existing launch pricing, VAT, service-term and availability decisions in the workspace are retained.

## Required fidelity surfaces

- Fonts and typography: Cormorant Garamond remains the editorial display face and DM Sans remains the body/control face. The hero now matches the concept's three-line desktop wrap. Supporting headings use a smaller scale to avoid competing with key turning points.
- Spacing and layout rhythm: hero, reassurance, trust, booking and pricing spacing follows the approved concepts. Desktop anchors land below the sticky header. No horizontal overflow was detected at 320, 390, 1024 or 1504 pixels.
- Colors and tokens: the existing parchment, navy, olive and terracotta system is preserved. No new visual language was introduced.
- Image quality and asset fidelity: the supplied hero portrait and existing Chris photograph are used without replacement, filters or generated substitutes. Images loaded at all tested breakpoints.
- Copy and content: approved shortening, recognition cues, proof points, booking preparation, plan comparison, early scope note and urgent actions are present. Explicitly rejected timezone and payment messages were not added.
- Icons and states: the Radix menu/close icons remain consistent with the existing dependency. Menu open, close, Escape, focus return, selected-anchor close and active-section states were verified.
- Accessibility: semantic headings, lists, definitions, meaningful link labels, focus outlines, `aria-expanded`, `aria-controls`, `aria-current`, image alt text, reduced-motion handling and practical mobile tap targets are present.

## Browser and interaction verification

- Homepage identity and meaningful DOM verified.
- Desktop and mobile hero image loading verified.
- Sticky header and anchor offset verified (`pricing` and `support` landed below the header).
- Mobile menu opens, closes on selection, closes with Escape and restores focus to its toggle.
- Active navigation updates on desktop and mobile.
- Real booking URL is present on the homepage and Chris page; the old iframe and HubSpot embed script are absent.
- Pricing cards, concierge panel, safety actions and legal footer stack without horizontal overflow.
- Chris route renders at mobile width without overflow.
- Browser console checked: no errors.
- `npm run lint`, production build and rendered-route tests pass.

## Comparison history

1. Initial comparison found a P2 hero proportion mismatch: the implementation headline wrapped to six lines and pushed the reassurance strip below the source composition. The hero container, grid tracks, heading width and image height were revised.
2. Post-fix comparison at `1504 × 1046` shows the intended three-line headline, balanced portrait column and visible reassurance strip. The earlier P2 is resolved.
3. Mobile booking review found avoidable card height. Booking copy and assurance layout were tightened while preserving the privacy warning and real scheduling handoff. No actionable mobile mismatch remains.

## Follow-up polish

- P3: the approved hero concept used small check icons in the reassurance strip; the implementation keeps the strip text-only to avoid introducing a new decorative icon treatment.
- P3: the real booking handoff necessarily differs from the illustrative calendar controls in the concept.

final result: passed
