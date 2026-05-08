# Thinh Nguyen (Lucaz) — Academic Homepage

A polished multi-page personal academic homepage for **Nguyen Tran Huu Thinh / Thinh Nguyen (Lucaz)**, built with **Astro + TypeScript + handcrafted CSS** and designed for deployment to **GitHub Pages**.

The design direction is an original academic portfolio inspired by bold editorial-agency websites: oversized typography, playful academic stickers, high-contrast cards, marquee rows, and a blue / green / yellow / ivory / black palette. It does **not** copy any external site assets, code, or proprietary fonts.

## Tech stack

- Astro
- TypeScript data files
- Handcrafted CSS
- Static output
- GitHub Pages workflow included

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL printed by Astro.

## Build locally

```bash
npm run build
npm run preview
```

## Edit profile data

Most content lives in `src/data/`:

- `src/data/profile.ts` — name, bio, affiliation, links, quick facts
- `src/data/publications.ts` — publications and project cards
- `src/data/news.ts` — timeline updates
- `src/data/awards.ts` — awards and honors
- `src/data/talks.ts` — invited talks, presentations, future speaking topics

The main pages are in `src/pages/`.

## Add a publication

Open `src/data/publications.ts` and add another object to the `publications` array. Use `featured: true` to highlight it on the homepage.

Unavailable links should be left empty or set to `null`; the card component will only show usable links.

## Add invited talks

Open `src/data/talks.ts` and add an item to `invitedTalks`. The site currently shows a tasteful empty state because no invited talks were provided.

## Replace the headshot

Replace:

```txt
public/assets/headshot-placeholder.svg
```

with your own image, for example:

```txt
public/assets/headshot.webp
```

Then update `headshot` in `src/data/profile.ts`.

## Replace logos

Placeholder text/SVG badges are included for:

```txt
public/assets/logos/vinuni-placeholder.svg
public/assets/logos/sail-placeholder.svg
public/assets/logos/vishc-placeholder.svg
```

Replace them with authorized official logo files only. Avoid scraping, hotlinking, or using logos without permission.

## CV file

The CV page is included at `/cv`, but the Download CV button is disabled until you add a real file.

To enable it:

1. Put a real CV at `public/cv.pdf`.
2. Open `src/data/profile.ts`.
3. Set `cvAvailable: true`.

## Deploy to GitHub Pages

This project is configured for the repository:

```txt
lucaznguyen.github.io
```

For this repo name, `astro.config.mjs` uses:

```js
site: 'https://lucaznguyen.github.io'
```

No `base` path is needed.

Deployment steps:

1. Create a GitHub repository named `lucaznguyen.github.io`.
2. Push this project to the `main` branch.
3. In GitHub, go to **Settings → Pages**.
4. Set the source to **GitHub Actions**.
5. Push again or run the workflow manually.

The included workflow is at:

```txt
.github/workflows/deploy.yml
```

## If the repository is not lucaznguyen.github.io

For a project repository such as `academic-homepage`, edit `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://lucaznguyen.github.io',
  base: '/academic-homepage',
  output: 'static'
});
```

Also update links and metadata if needed.

## Add Vietnamese later

The current site is English-first. To add Vietnamese, you can:

- duplicate data files, for example `profile.vi.ts`,
- add language-prefixed pages, for example `/vi/about`,
- add a language switcher in `Header.astro`.

## Notes

- The site does not invent invited talks or academic service roles.
- It uses placeholder logo/headshot assets until you replace them.
- Fonts are loaded from Google Fonts: Instrument Serif and Instrument Sans.
