# AI Agent Instructions — Emotional Life Support

This repository uses a mandatory development logging system to maintain complete technical context across different AI coding tools and sessions.

## ⚠️ Mandatory Logging Rule

**EVERY TIME YOU MAKE CHANGES TO THIS CODEBASE**:
1. You **MUST** record your changes in [`DEVELOPMENT_LOG.md`](./DEVELOPMENT_LOG.md) under `## 📜 Chronological Change Log`.
2. Format entries in reverse-chronological order (newest entries at the top of the log section):
   - **Date & Title**: `### [YYYY-MM-DD] — Short Summary of Changes`
   - **Context / Motivation**: Why the change was made or what problem it solves.
   - **Key Changes**: Bullet points of specific code, design, content, or config changes.
   - **Files Modified**: Links to changed or added files.
   - **Commit / Version**: Commit hash or summary message if applicable.

## 🛠️ Build & Architecture Context
- **Static Export**: `npm run export` runs `scripts/export-static.mjs` to generate static HTML in `dist/client`.
- **Domain Root**: `BASE_PATH` defaults to `""` (empty string) for custom domain `emotionallifesupport.com`. Do NOT add a subpath prefix unless deploying to a subpath URL.
- **Jekyll Bypassing**: Ensure `dist/client/.nojekyll` exists so GitHub Pages does not ignore `_next/` folders.

## 📊 Google Analytics
- **GA4 Measurement ID**: `G-9KYHPSW76N` for `emotionallifesupport.com`.
- **Canonical Configuration**: [`app/lib/analytics.ts`](./app/lib/analytics.ts). Do not duplicate or replace the ID with an environment-only value unless deployment configuration is updated and tested at the same time.
- **All-Page Integration**: [`app/layout.tsx`](./app/layout.tsx) passes the ID to the shared consent component, so every published route is covered.
- **Consent Requirement**: [`app/components/CookieConsent.tsx`](./app/components/CookieConsent.tsx) must load `gtag.js` and configure GA only after the visitor selects **Allow optional cookies**. Do not place an unconditional Google tag in the document head.
- **Privacy Configuration**: Keep Google signals, advertising storage and advertising personalisation disabled. If the ID or behaviour changes, update the Cookie Notice, Privacy Notice, tests and `DEVELOPMENT_LOG.md` together.
