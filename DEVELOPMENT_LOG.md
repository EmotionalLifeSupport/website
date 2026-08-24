# Development & Change History Log — Emotional Life Support

This document tracks technical decisions, architectural context, and chronological change history for **Emotional Life Support** (`emotionallifesupport.com`). It serves as a continuous reference for AI coding agents and human developers working across different development environments.

---

## 🛠️ Architecture & Build Pipeline Summary

### Tech Stack
- **Framework**: Next.js / Vinext (Vite 8 + React 19 RSC)
- **Styling**: Tailwind CSS v4 (`@import "tailwindcss"`) + Custom CSS variables (`var(--paper)`, `var(--serif)`, `var(--navy)`)
- **Hosting & Deployment**: GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)
- **Custom Domain**: `emotionallifesupport.com` configured in `public/CNAME`

### Static Export Pipeline (`scripts/export-static.mjs`)
- The site exports to static HTML files in `./dist/client` via `npm run export`.
- **`BASE_PATH` Handling**: `basePath` defaults to `""` (empty string) for root custom domains (`emotionallifesupport.com`).
  > **Note for AI Tools/Devs**: Do NOT set `basePath` to `"/website"` unless deploying to a GitHub Pages subpath URL (`username.github.io/website`). Setting `basePath` to `"/website"` when hosting on a custom root domain breaks CSS, script, and image URLs with HTTP 404 errors.

---

## 📜 Chronological Change Log

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
