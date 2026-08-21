/**
 * Shared customer logo registry used by LogoMarquee and case-study cards.
 * Prefer local assets under public/images/logos when available; otherwise use
 * the official mm-card__logo URLs from mattermost.com/customers.
 */

const base = import.meta.env.BASE_URL;

export type CustomerLogo = {
  /** Matches customer story slug (mattermost.com/customers/<slug>/) */
  slug: string;
  name: string;
  src: string;
};

const local = (file: string) => `${base}images/logos/${file}`;

/** Official Mattermost-hosted logos (mm-card__logo) + local brand pack */
const LOGO_BY_SLUG: Record<string, { name: string; src: string }> = {
  "us-department-of-defense": {
    name: "U.S. Air Force",
    src: "https://mattermost.com/wp-content/uploads/2021/08/us-air-force-logo.webp",
  },
  "air-mobility-command": {
    name: "Air Mobility Command",
    src: "https://mattermost.com/wp-content/uploads/2021/08/us-air-force-logo.webp",
  },
  "operation-allies-refuge": {
    name: "Operation Allies Refuge",
    src: "https://mattermost.com/wp-content/uploads/2021/08/us-air-force-logo.webp",
  },
  "european-public-agency": {
    name: "European public agency",
    src: "",
  },
  rte: {
    name: "RTE",
    src: local("rte.webp"),
  },
  "turk-telekom": {
    name: "Türk Telekom",
    src: "https://mattermost.com/wp-content/uploads/2026/07/toppng.com-turk-telekom-logo-4570x1580-1.webp",
  },
  enelyst: {
    name: "Enelyst",
    src: "https://mattermost.com/wp-content/uploads/2026/03/enelyst-logo.webp",
  },
  fujitsu: {
    name: "Fujitsu",
    src: local("fujitsu.webp"),
  },
  nri: {
    name: "NRI",
    src: local("nri.webp"),
  },
  worldline: {
    name: "Worldline",
    src: local("worldline.webp"),
  },
  tulip: {
    name: "Tulip",
    src: "https://mattermost.com/wp-content/uploads/2024/05/Tulip-logo.webp",
  },
  classact: {
    name: "Classact",
    src: "https://mattermost.com/wp-content/uploads/2024/07/Classact@4x.webp",
  },
  cern: {
    name: "CERN",
    src: local("cern.webp"),
  },
  almalinux: {
    name: "AlmaLinux",
    src: local("almalinux.webp"),
  },
  "rocky-linux": {
    name: "Rocky Linux",
    src: local("rocky.webp"),
  },
  medincell: {
    name: "Medincell",
    src: local("medincell.svg"),
  },
  fairphone: {
    name: "Fairphone",
    src: local("fairphone.svg"),
  },
  netfoundry: {
    name: "NetFoundry",
    src: local("netfoundry.webp"),
  },
  pramacom: {
    name: "Pramacom",
    src: local("pramacom.webp"),
  },
  laika: {
    name: "Laika",
    src: local("laika.svg"),
  },
};

export function getCustomerLogoSrc(slug: string): string | null {
  const entry = LOGO_BY_SLUG[slug];
  if (!entry || !entry.src) return null;
  return entry.src;
}

export function getCustomerLogo(slug: string): CustomerLogo | null {
  const entry = LOGO_BY_SLUG[slug];
  if (!entry || !entry.src) return null;
  return { slug, name: entry.name, src: entry.src };
}

/** Ordered list for logo marquees (skip empty / anonymous) */
export const CUSTOMER_LOGOS: CustomerLogo[] = Object.entries(LOGO_BY_SLUG)
  .filter(([, v]) => Boolean(v.src))
  .map(([slug, v]) => ({ slug, name: v.name, src: v.src }));

/** Curated landing strip — same published marks, stable order. */
export const LANDING_MARQUEE_LOGOS: CustomerLogo[] = CUSTOMER_LOGOS;

export function logosForStories(slugs: string[]): CustomerLogo[] {
  return slugs
    .map((slug) => getCustomerLogo(slug))
    .filter((x): x is CustomerLogo => Boolean(x));
}
