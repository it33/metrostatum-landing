# Mattermost-inspired Landing Page (Metrostatum)

Full rebuild of the operational-sovereignty marketing landing page.

## What's included

- **Mattermost-style header** — promo bar, Platform / Solutions / Pricing / Partners / Resources, Login, Try Mattermost, Contact Sales
- **Hero** — left-aligned "Operational Sovereignty…" title with lighter overlay so more of the image shows through
- **Logo marquee** — **only** companies with published case studies on mattermost.com/customers (Fastly, Samsung, Nasdaq, etc. removed)
- **Product carousel** — messaging, playbooks, calls, boards, agents, integrations
- **IME explorer** — layer-by-layer pan/zoom; commentary module moves **up** when zoomed; pan biased **left** so row headings stay visible
- **Positioning carousel** — Purpose-Built Mattermost vs. Custom Proprietary / Commercial SaaS / Niche & Legacy
- **Deploy + Security + Footer** matching Mattermost marketing patterns
- Light/white Mattermost brand theme (Denim `#1E325C`, Marigold `#FFBC1F`)

## Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS v4
- lucide-react

## Develop

```bash
npm install
npm run dev      # http://0.0.0.0:8080
npm run build
npm run typecheck
```

## Note

Concept landing page inspired by the Mattermost product category. Not affiliated with Mattermost, Inc.
