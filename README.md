# Sofnology Solutions

Marketing site for Sofnology Solutions — custom software, automation, cloud, and
digital growth systems.

Built with Next.js 15 (App Router), React 19, Tailwind CSS 4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000.

| Script | Purpose |
| --- | --- |
| `npm run dev` | Development server with hot reload |
| `npm run dev:clean` | Clears `.next/` first — use when the dev cache misbehaves |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint via `eslint-config-next` |

## Project layout

```
src/
  app/            Routes. Each page.tsx pairs with a layout.tsx that exports metadata.
    api/contact/  Contact form endpoint
    sitemap.ts    Generated from SITE_ROUTES
    robots.ts
    opengraph-image.tsx  1200×630 share card (Twitter reuses it)
    icon.tsx / apple-icon.tsx
  components/     Shared UI. nav/ holds the navbar, mega panel, and logo.
    interior/     Shared page chrome, heroes, and CTAs (homepage uses the same chrome)
    sections/     Shared mid-page blocks such as FaqSection
  content/        Copy and page config, one file per route
  hooks/          useFocusTrap for the mobile drawer
  lib/
    site.ts             Site name, canonical URL, and the route registry
    metadata.ts         pageMetadata() factory used by every layout
    json-ld.ts          Organization + WebSite graph for the root layout
    motion.ts           Shared easing, durations, and reusable motion presets
    contact-accents.ts  Per-page accent styling for the contact form
    interior.ts         Shared sticky / contact / FAQ / related types
public/           Live images only. Filenames are kebab-case (e.g. /hero.jpg).
```

## Conventions

**Routes.** Adding a page means adding an entry to `SITE_ROUTES` in `src/lib/site.ts`
so it reaches the sitemap, plus a `layout.tsx` calling `pageMetadata()` for canonical
and Open Graph tags. Share cards use the generated `/opengraph-image`. JSON-LD lives
in the root layout and must only repeat facts already on the site.

**Motion.** All animation pulls from `src/lib/motion.ts` — one easing curve and a
fixed set of durations. Reuse `accordionMotion` and `panelMotion` rather than writing
new transitions, so chrome stays consistent.

**Hover states.** Gate hover effects behind
`[@media(hover:hover)_and_(pointer:fine)]` so touch devices don't get stuck in a
hover state after a tap.

**Images.** Keep source files under roughly 400KB and no wider than 2400px.
Photographs belong in `.jpg`; reserve `.png` for logos and flat graphics. Use
kebab-case filenames with no spaces. Every live photo goes through `next/image`.
Do not leave unused files beside live ones, and never put PDFs in `public/`.

## Environment

`NEXT_PUBLIC_SITE_URL` sets the canonical origin used by metadata, the sitemap, and
robots. It falls back to `https://sofnology.com` when unset.

## Deployment

Deployed on Vercel from `main`. Anything committed under `public/` is served publicly
at the site root, so keep non-public documents out of it.
