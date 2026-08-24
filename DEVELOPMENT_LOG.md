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
