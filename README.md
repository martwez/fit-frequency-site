# Fit Frequency Wellness

Marketing site for Fit Frequency Wellness, a Mind · Body · Energy wellness practice
(movement, meditation, and sound) based in California — built from the brand's
Instagram, [@fitfrequency.wellness](https://www.instagram.com/fitfrequency.wellness/).

## Stack

- [Vite](https://vite.dev/)
- [React](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)

## Development

```bash
npm install
npm run dev      # start local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes `dist/` to GitHub Pages automatically. Live at:
https://martwez.github.io/fit-frequency-site/
