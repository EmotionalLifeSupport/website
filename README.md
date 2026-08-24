# Emotional Life Support

Calm, practical, one-to-one support through separation, divorce, and rebuilding after an unhealthy relationship.

Live site: [https://emotionallifesupport.com](https://emotionallifesupport.com)

---

## 📚 Development & Architecture Log

> **For AI Assistants & Developers:**  
> A detailed history of architectural decisions, component locations, build export rules (`basePath` settings), and change logs is maintained in **[`DEVELOPMENT_LOG.md`](./DEVELOPMENT_LOG.md)**. Please refer to `DEVELOPMENT_LOG.md` before making structural or deployment pipeline changes.

---

## 🛠️ Tech Stack & Structure

- **Framework**: Next.js / Vinext (Vite 8 + React 19 RSC)
- **Styling**: Tailwind CSS v4 + CSS Variables (`var(--paper)`, `var(--serif)`, `var(--navy)`)
- **Deployment**: GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)
- **Custom Domain**: `emotionallifesupport.com` (`public/CNAME`)

---

## 🚀 Quick Commands

```bash
# Start local development server (http://localhost:3000)
npm run dev

# Run linter checks
npm run lint

# Run HTML render unit tests
npm run test

# Build and export static site to ./dist/client
npm run export
```
