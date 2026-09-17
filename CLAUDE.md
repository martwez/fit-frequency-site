# Fit Frequency Wellness

One-page marketing site for Fit Frequency Wellness, a Mind · Body · Energy
wellness practice (movement, meditation, sound) based in California. Built
from the brand's Instagram (@fitfrequency.wellness): bio, tagline, and weekly
content themes, styled to match the client's own logo (rose/pink lotus, warm
gold, terracotta). No real Instagram photos are used — imagery is CSS
gradients plus the client-provided logo (`public/images/logo-full.png`,
`public/images/logo-icon.png`).

## Stack

Vite + React + TypeScript + Tailwind CSS (v4, via `@tailwindcss/vite`).

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build

## Structure

- `src/App.tsx` — assembles all sections
- `src/components/` — one component per section (`Header`, `Hero`, `About`,
  `Offerings`, `WeeklyRhythm`, `Connect`, `Footer`)
- `src/index.css` — Tailwind import, Google Fonts import (Cormorant Garamond
  + Jost), global resets
- `public/images/` — `logo-full.png` (icon + wordmark, transparent) and
  `logo-icon.png` (icon only, transparent) — both cropped from the client's
  original logo file, also used as the favicon

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds and
publishes `dist/` to GitHub Pages at
https://martwez.github.io/fit-frequency-site/. `vite.config.ts` sets
`base: '/fit-frequency-site/'` to match the Pages project path — update this
if the repo is ever renamed or moved to a custom domain.

## Conventions

- Styling is Tailwind utility classes with inline hex colors matching the
  client's logo palette (blush `#f7d9cd`, gold `#f3e3b8` / `#cf9f4f`,
  terracotta `#c1725a` / `#8f5a44`, cream background `#fdf9f5`) — no separate
  design tokens file yet.
- Content (bio text, weekly themes) is hardcoded in components, not pulled
  from a CMS or data file.
