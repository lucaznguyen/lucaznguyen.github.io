# Thinh Nguyen (Lucaz) Academic Homepage

Premium editorial academic homepage for Thinh Nguyen (Lucaz), built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and markdown-backed notes.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Useful checks:

```bash
npm run lint
npm run build
```

## Edit Content

Start with these files:

- `src/data/profile.ts`: name, bio, research interests, process, stats, affiliations, portrait path.
- `src/data/publications.ts`: selected and full publication records, tags, links, filter categories.
- `src/data/projects.ts`: project tiles and placeholders.
- `src/data/news.ts`: timeline items, awards, milestones, service, and profile updates.
- `src/data/socials.ts`: email and external academic/social links.
- `src/content/notes/*.md`: markdown notes with front matter.

Notes use front matter:

```md
---
title: "Draft: Example Note"
date: "2026-01-01"
description: "Short summary."
tags:
  - Federated Learning
draft: true
---
```

## Replace Profile Image

The current public portrait is `public/images/thinh-nguyen.jpg`, generated from `profile_picture_material/0.jpg`.

To replace it:

1. Add a new portrait to `public/images/`.
2. Update `portrait` and `portraitAlt` in `src/data/profile.ts`.
3. Replace `public/og-image.png` if you want the Open Graph preview to match the new portrait.

## Deploy To GitHub Pages

This project is configured for GitHub Pages static deployment.

For the canonical GitHub Pages domain, create the repository as:

```text
lucaznguyen.github.io
```

Then push the code to the `main` branch. The workflow in `.github/workflows/deploy.yml` builds the static site into `out/` and deploys it to GitHub Pages.

After the first push:

1. Open the repository settings on GitHub.
2. Go to **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Wait for the `Deploy to GitHub Pages` action to finish.

The site will be available at:

```text
https://lucaznguyen.github.io
```

If you later use a custom domain, set `NEXT_PUBLIC_SITE_URL` to that production URL.

The project intentionally does not include a CV page or CV download CTA.
