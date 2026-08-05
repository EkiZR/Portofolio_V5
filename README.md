# sajidalam.co.uk

Personal site — [sajidalam.co.uk](https://sajidalam.co.uk)

Static, server-rendered at build time, and deliberately close to zero JavaScript:
the entire site ships **0 KB of framework JS** and one ~15-line inline script for
the scroll reveal.

## Stack

| | |
|---|---|
| Framework | [Astro](https://astro.build) 7 — static output |
| Styling | Tailwind CSS 4 (CSS-first `@theme` tokens, no `tailwind.config.js`) |
| Fonts | Inter Variable + JetBrains Mono Variable, self-hosted via Fontsource |
| Hosting | GitHub Pages, custom domain via `public/CNAME` |

## Commands

```bash
npm install
npm run dev      # http://localhost:4321
npm run check    # astro check — type checking
npm run build    # -> dist/
npm run preview  # serve the built output
```

## Structure

```
src/
  data/site.ts        Single source of truth for all content and metrics
  layouts/            BaseLayout (SEO + JSON-LD), CaseStudyLayout
  components/         Header, Footer, Section, WorkCard — all zero-JS .astro
  pages/
    index.astro       Hero, selected work, OSS footprint, talks, contact
    about.astro       Long-form bio, experience, education, publication
    talks.astro       Speaking and the Kedro Coffee Chat series
    work/*.astro      Four case studies
    llms.txt.ts       Plain-text summary generated from src/data/site.ts
  styles/global.css   Design tokens, fluid type scale, prose, motion policy
```

Content lives in `src/data/site.ts`. Editing a metric or a talk there updates the
page, the `llms.txt` endpoint and the structured data together.

## Conventions worth keeping

- **Fluid type only.** Every heading size is a `clamp()` that interpolates between
  320px and 1440px. No `text-3xl md:text-5xl` jumps — that pattern was the cause
  of the previous version's mobile layout bugs.
- **Never mask overflow.** `overflow-x: hidden` on `html`/`body` hides the symptom.
  Wide content scrolls inside its own container, or reflows.
- **No fixed pixel widths on interactive elements.** Buttons wrap; they don't clip.
- **Content is never hidden behind JavaScript.** The reveal styles are scoped to
  `.js`, which is only added by an inline script, so the page is fully readable
  with JS disabled or broken.
- **`prefers-reduced-motion` is honoured** for every animation.

## Verifying a change

```bash
npm run build
grep -q "Senior Software Engineer at" dist/index.html   # content is server-rendered
```

CI runs both of those plus a check for `CNAME` and `llms.txt`, so a regression to
client-only rendering fails the build rather than shipping silently.

For responsive checks, test at 320 / 360 / 390 / 430 / 768 / 1024 / 1440 and confirm
`document.documentElement.scrollWidth === innerWidth` at each.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which type-checks,
builds, verifies the output, and publishes `dist/` to GitHub Pages.

The custom domain is pinned by `public/CNAME`, so it survives a Pages settings
reset rather than living only in repository settings.
