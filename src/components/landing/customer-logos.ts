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
    src: local("usaf.svg"),
  },
  "air-mobility-command": {
    name: "Air Mobility Command",
    src: "https://mattermost.com/wp-content/uploads/2021/08/us-air-force-logo.webp",
  },
  "operation-allies-refuge": {
    name: "Operation Allies Refuge",
    src: local("usaf.svg"),
  },
  "european-public-agency": {
    name: "European public agency",
    // Anonymous agency — no public brand mark on the source page; omit from marquee via null handling
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
  "osiris-rex": {
    name: "OSIRIS-REx",
    src: "https://mattermost.com/wp-content/uploads/2024/03/osiris-rex-mission-logo12_copy.webp",
  },
  "heidelberg-university": {
    name: "Heidelberg University",
    src: "https://mattermost.com/wp-content/uploads/2022/03/visions_logo_name_width204.webp",
  },
  "max-planck-digital-library": {
    name: "Max Planck Digital Library",
    src: "https://mattermost.com/wp-content/uploads/2024/02/mpdl-logo.webp",
  },
  "wikimedia-deutschland": {
    name: "Wikimedia Deutschland",
    src: "https://mattermost.com/wp-content/uploads/2026/04/Wikimediadeutschland-logo.webp",
  },
  "german-informatics-society": {
    name: "German Informatics Society",
    src: "https://mattermost.com/wp-content/uploads/2025/05/German_Informatics_Society_logo.svg",
  },
  "cyberpeace-institute": {
    name: "CyberPeace Institute",
    src: "https://mattermost.com/wp-content/uploads/2024/12/CyberPeace-Institute-Logo-1024x414-1.webp",
  },
  spamhaus: {
    name: "Spamhaus",
    src: "https://mattermost.com/wp-content/uploads/2024/10/Logo_-_The_Spamhaus_Project.webp",
  },
  "nonprofit-cert": {
    name: "Nonprofit CERT",
    src: "https://mattermost.com/wp-content/uploads/2024/03/SektorCERT@3x.webp",
  },
  "access-now": {
    name: "Access Now",
    src: "https://mattermost.com/wp-content/uploads/2026/01/Access-Now.webp",
  },
  netfoundry: {
    name: "NetFoundry",
    src: local("netfoundry.webp"),
  },
  medincell: {
    name: "MedinCell",
    src: local("medincell.svg"),
  },
  fairphone: {
    name: "Fairphone",
    src: local("fairphone.svg"),
  },
  laika: {
    name: "LAIKA",
    src: local("laika.svg"),
  },
  pramacom: {
    name: "Pramacom",
    src: local("pramacom.webp"),
  },
  galois: {
    name: "Galois",
    src: "https://mattermost.com/wp-content/uploads/2019/07/galois@2x.webp",
  },
};

/** Full list for the customers page marquee (unique visual marks only). */
export const CUSTOMER_LOGOS: CustomerLogo[] = Object.entries(LOGO_BY_SLUG)
  .filter(([, v]) => Boolean(v.src))
  .map(([slug, v]) => ({ slug, name: v.name, src: v.src }));

/**
 * Curated subset used on the home landing marquee (local brand pack, high recognition).
 * Kept stable so the homepage strip does not grow unbounded.
 */
export const LANDING_MARQUEE_LOGOS: CustomerLogo[] = [
  "us-department-of-defense",
  "fujitsu",
  "cern",
  "rte",
  "nri",
  "worldline",
  "almalinux",
  "rocky-linux",
  "netfoundry",
  "medincell",
  "laika",
  "fairphone",
  "pramacom",
]
  .map((slug) => {
    const entry = LOGO_BY_SLUG[slug];
    return entry ? { slug, name: entry.name, src: entry.src } : null;
  })
  .filter((x): x is CustomerLogo => Boolean(x?.src));

/** Logos for every published story on the customers page (deduped by src for marquee). */
export function logosForStories(slugs: string[]): CustomerLogo[] {
  const seen = new Set<string>();
  const out: CustomerLogo[] = [];
  for (const slug of slugs) {
    const entry = LOGO_BY_SLUG[slug];
    if (!entry?.src) continue;
    if (seen.has(entry.src)) continue;
    seen.add(entry.src);
    out.push({ slug, name: entry.name, src: entry.src });
  }
  return out;
}

export function getCustomerLogoSrc(slug: string): string | undefined {
  const src = LOGO_BY_SLUG[slug]?.src;
  return src || undefined;
}

export function getCustomerLogo(slug: string): CustomerLogo | undefined {
  const entry = LOGO_BY_SLUG[slug];
  if (!entry?.src) return undefined;
  return { slug, name: entry.name, src: entry.src };
}
