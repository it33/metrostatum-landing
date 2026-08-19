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

## Dev / staging / production (GitHub Pages only)

One repo, three branches, one Pages site. A push to `dev`, `staging`, or `main` rebuilds all three trees and deploys them together.

| Env | Branch | URL today | After mattermost.ai is attached |
| --- | --- | --- | --- |
| Production | `main` | https://it33.github.io/metrostatum-landing/ | https://mattermost.ai/ |
| Staging | `staging` | https://it33.github.io/metrostatum-landing/staging/ | https://mattermost.ai/staging/ |
| Dev | `dev` | https://it33.github.io/metrostatum-landing/dev/ | https://mattermost.ai/dev/ |

### Promote path

1. PR into `dev` — integrates and publishes `/dev/`.
2. PR `dev` → `staging` — release candidate at `/staging/`.
3. PR `staging` → `main` — production at `/`.

Rollback: revert the env branch to a prior SHA and push (or re-run the workflow). No tags required.

### One-time enable

1. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Merge the workflow, then push (or re-run Actions) so `dev`, `staging`, and `main` all exist on origin.
3. After the first successful run, the three URLs above are live.

Vite `base` comes from `SITE_BASE` in CI (`/metrostatum-landing/`, `/metrostatum-landing/staging/`, `/metrostatum-landing/dev/`). Local / Grok Build stay on `/`.

### Crawler / AI blocking

`SITE_INDEXABLE` is unset/false by default. Dev and staging builds are always noindex. Even after a production go-live, `/dev/` and `/staging/` stay `Disallow` in the root `robots.txt`.

**Important:** robots.txt and meta robots are *requests*, not hard blocks. GitHub Pages is public. Do not treat previews as private hosting.

### Going public on mattermost.ai

1. At the DNS host for mattermost.ai, add GitHub Pages records (Settings → Pages shows the current A/AAAA/CNAME values).
2. Set the custom domain to `mattermost.ai` on this repo’s Pages settings. Apex + `www` if you want both.
3. Re-run the workflow with `site_root_base=/` so asset URLs match the custom domain (not `/metrostatum-landing/`).
4. Go-live indexing: only then set `SITE_INDEXABLE=true` on the **production** build (`npm run build:live` locally, or the workflow `site_indexable` input). Never flip that on github.io alone.

## Note

Concept landing page inspired by the Mattermost product category. Not affiliated with Mattermost, Inc. “Talk to an expert” links to [mattermost.com/contact-sales](https://mattermost.com/contact-sales/).
