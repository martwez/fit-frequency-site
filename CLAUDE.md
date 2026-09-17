# Fit Frequency

One-page marketing site for Fit Frequency, a Mind · Body · Energy wellness
practice (movement, meditation, sound) based in California. Built from the
brand's Instagram (@fitfrequency.wellness): bio, tagline, and weekly content
themes, styled with a soft blush/sage/gold wellness palette. No real Instagram
photos are used — imagery is CSS gradients and an SVG lotus mark.

## Stack

Vite + React + TypeScript + Tailwind CSS (v4, via `@tailwindcss/vite`).

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build

## Structure

- `src/App.tsx` — assembles all sections
- `src/components/` — one component per section (`Header`, `Hero`, `About`,
  `Offerings`, `WeeklyRhythm`, `Connect`, `Footer`) plus `LotusMark.tsx`, the
  shared SVG brand mark
- `src/index.css` — Tailwind import, Google Fonts import (Cormorant Garamond
  + Jost), global resets

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds and
publishes `dist/` to GitHub Pages at
https://martwez.github.io/fit-frequency-site/. `vite.config.ts` sets
`base: '/fit-frequency-site/'` to match the Pages project path — update this
if the repo is ever renamed or moved to a custom domain.

## Conventions

- Styling is Tailwind utility classes with inline hex colors matching the
  brand palette (blush `#f6e2df`, sage `#dde8d3`, gold `#c9a75c`, brown
  `#8a6f52`, cream background `#fdf9f5`) — no separate design tokens file yet.
- Content (bio text, weekly themes) is hardcoded in components, not pulled
  from a CMS or data file.
