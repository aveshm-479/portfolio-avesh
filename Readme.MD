<div align="center">

# 🚀 Personal Portfolio & Insights Dashboard

Modern React + TypeScript portfolio powered by Vite, Tailwind CSS, and Framer Motion. It highlights professional background, showcases flagship projects with client attribution, and pulls live insights (weather + news) to keep the home page fresh.

</div>

## ✨ Highlights

- **Hero landing** with animated intro, CTA buttons, and quick stats.
- **Project gallery** featuring fintech, aviation, and mobility programs with tech stacks, company names, and smart search.
- **Experience + skills** data visualizations sourced from structured TypeScript models.
- **Contact + insights** section featuring an Open‑Meteo powered weather widget and curated tech news feed.
- **Responsive UI** built with Tailwind utility classes, custom components, and Framer Motion nuance.

## 🧱 Tech Stack

- `React 19` + `TypeScript`
- `Vite 5` development/build pipeline
- `Tailwind CSS 3` + `PostCSS/Autoprefixer`
- `Framer Motion` for animations
- `Lucide React` icons
- `Axios` for external data fetching

## 🛠 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation
```bash
git clone https://github.com/aveshm-479/portfolio-avesh.git
cd portfolio-avesh
npm install
npm run dev
```
Visit `http://localhost:5173` (default Vite port) to view the app.

### NPM Scripts
| Command | Description |
| --- | --- |
| `npm run dev` | Start local development server with hot reload |
| `npm run build` | Produce production-ready assets in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run deploy` | Build and publish `dist/` to GitHub Pages (gh-pages) |

## 📁 Project Structure

```
src/
├─ assets/               # Images and static media
├─ components/
│  ├─ layout/            # Header, Footer, Layout shell
│  └─ ui/                # Buttons, cards, helpers
├─ data/                 # Portfolio, skills, and experience datasets
├─ pages/                # Home, About, Projects, Contact routes
├─ services/             # weatherService, newsService
├─ types/                # Shared TypeScript interfaces/enums
└─ utils/                # Higher-order helpers and decorators
```

## 🔧 Customization Guide

- **Profile + copy:** update `src/pages` content blocks or hero text in `Home.tsx`.
- **Projects, skills, experience:** edit `src/data/portfolioData.ts` (company names, tech stacks, descriptions, featured flags, etc.).
- **Branding:** tweak Tailwind design tokens in `tailwind.config.js` and global styles in `src/index.css`.
- **Assets:** replace `src/assets/self.jpg` and other imagery to match your brand.
- **Insights widgets:** adjust logic in `src/services/weatherService.ts` and `src/services/newsService.ts` (e.g., change coordinates, switch providers, or plug in API keys if you opt for authenticated sources).

## 🌤 External Data

- **Weather:** uses Open-Meteo (no API key required) to fetch Ahmedabad conditions and forecast. Update coordinates or provider inside `weatherService.ts` to localize.
- **News:** `newsService.ts` currently serves curated/mocked tech stories for deterministic demos. Swap in a real API (NewsAPI, GDELT, etc.) if desired.

## 🚀 Deployment

1. `npm run build`
2. Deploy `/dist` to any static host (GitHub Pages, Vercel, Netlify, Cloudflare Pages, etc.).
3. For GitHub Pages, run `npm run deploy` (gh-pages publishes automatically).

## 📝 Roadmap Ideas

- Theme switcher (dark/light)
- CMS-backed blog or case studies
- CMS-driven project data instead of static file
- Expanded analytics widget section (GitHub stats, speaking events)

## 🙌 Credits

- Built by **Avesh M.** using React, Vite, Tailwind, and Framer Motion.
- Weather courtesy of [open-meteo.com](https://open-meteo.com/).
- Illustrative photography sourced from Unsplash.

If this starter helps you, ⭐ the repo and share your build!
