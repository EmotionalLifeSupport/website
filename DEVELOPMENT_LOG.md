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
