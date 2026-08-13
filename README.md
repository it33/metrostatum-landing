# Mattermost-inspired Landing Page (Metrostatum)

Full rebuild of the operational-sovereignty marketing landing page with multilingual support (en-US, en-CA, fr-CA, ja).

## What’s included

- **Mattermost-style header** — promo bar, Platform / Solutions / Pricing / Partners / Resources, Login, Try Mattermost, Contact Sales + language switcher
- **Hero** — left-aligned “Operational Sovereignty…” title with lighter overlay
- **Logo marquee** — only companies with published case studies on mattermost.com/customers
- **Product carousel**, **IME explorer**, **Positioning carousel**
- Light Mattermost brand theme (Denim `#1E325C`, Marigold `#FFBC1F`)
- **i18n**: en-US · en-CA · fr-CA · ja

## Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS v4
- lucide-react
- Pure React context i18n (no extra deps)

## Develop (Grok Build / local)

```bash
npm install
npm run dev      # http://0.0.0.0:8080  (base = "/")
npm run build
npm run preview
npm run typecheck
```

## GitHub Pages (staging preview)

This site is configured for project pages at:

**https://it33.github.io/metrostatum-landing/**

### One-time enable

1. Push `main` (the workflow in `.github/workflows/deploy-pages.yml` will build & deploy).
2. In the GitHub repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. After the first successful Actions run, the site is live at the URL above.

Local / Grok Build continue to use `base: "/"`. The Actions workflow sets `GITHUB_PAGES=true` so the production build uses `base: "/metrostatum-landing/"`.

### Crawler / AI blocking (staging)

Until you map a custom domain and intentionally go public, the site requests that crawlers stay away. This is driven by `SITE_INDEXABLE` being unset or false (the default):

- Staging (default): `npm run build` or the GitHub Pages workflow. `SITE_INDEXABLE` is unset/false.
- `robots.txt` — `Disallow: /` for all user-agents, plus explicit blocks for GPTBot, Google-Extended, ClaudeBot, CCBot, Bytespider, etc.
- HTML meta — `noindex, nofollow` (and googlebot/bingbot equivalents) plus `referrer: no-referrer`

**Important:** robots.txt and meta robots are *requests*, not hard blocks. GitHub Pages sites are publicly reachable. Do not treat this as private hosting.

### Going fully public later

Indexing is a build-time flag — do not edit `robots.txt` or `index.html` by hand.

1. Go-live: `SITE_INDEXABLE=true npm run build` or `npm run build:live`. That flips robots to `Allow: /` and meta to `index, follow`.
2. Do **not** flip `SITE_INDEXABLE=true` on the github.io URL. Point a real domain and set Vite `base` to `/` in `vite.config.ts` when you do (attach the custom domain under Settings → Pages).
3. Leave the Pages workflow with `SITE_INDEXABLE` unset so the github.io preview stays noindex.

## Note

Concept landing page inspired by the Mattermost product category. Not affiliated with Mattermost, Inc. “Talk to an expert” links to [mattermost.com/contact-sales](https://mattermost.com/contact-sales/).
