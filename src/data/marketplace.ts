import catalog from "./marketplace-integrations.json";

export type MarketplaceLink = { label: string; href: string };
export type MarketplaceSection = { heading: string; paragraphs: string[] };

export type MarketplaceItem = {
  slug: string;
  name: string;
  description: string;
  href: string;
  icon: string;
  author: string;
  categories: string[];
  badges: string[];
  supported: boolean;
  github?: string | null;
  lastUpdated?: string | null;
  lastUpdatedSource?: string | null;
  version?: string | null;
  releaseNotes?: string;
  tagline?: string;
  disclaimer?: string | null;
  links?: MarketplaceLink[];
  sections?: MarketplaceSection[];
};

export const MARKETPLACE: MarketplaceItem[] = catalog as MarketplaceItem[];

export const MARKETPLACE_CATEGORIES: string[] = Array.from(
  new Set(MARKETPLACE.flatMap((i) => i.categories)),
).sort((a, b) => a.localeCompare(b));

export function getIntegration(slug: string): MarketplaceItem | undefined {
  return MARKETPLACE.find((i) => i.slug === slug);
}

export function lastUpdatedLabel(item: MarketplaceItem): string {
  if (!item.lastUpdated) return "Last update unknown";
  const d = new Date(`${item.lastUpdated}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return "Last update unknown";
  const formatted = d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
  return `Last updated ${formatted}`;
}

export function versionLabel(item: MarketplaceItem): string {
  return item.version ? item.version : "Version unknown";
}

const SKIP_LINK = /privacy|terms of use|\[email|mailto:|^here$/i;

export function listingLinks(item: MarketplaceItem): MarketplaceLink[] {
  const out: MarketplaceLink[] = [];
  const seen = new Set<string>();
  const add = (label: string, href?: string | null) => {
    if (!href) return;
    const key = href.replace(/\/$/, "");
    if (seen.has(key)) return;
    if (SKIP_LINK.test(label) || SKIP_LINK.test(href)) return;
    seen.add(key);
    const pretty =
      /^https?:\/\//i.test(label) ? "Website" : label.trim() || "Link";
    out.push({ label: pretty, href });
  };
  for (const l of item.links || []) add(l.label, l.href);
  add("Source on GitHub", item.github);
  add("Release notes", item.releaseNotes);
  add("Legacy Integrations Listing", item.href);
  return out;
}

export function isFirstParty(item: MarketplaceItem): boolean {
  return item.author.trim().toLowerCase() === "mattermost";
}
  const cats = new Set(item.categories);
  return MARKETPLACE.filter(
    (i) => i.slug !== item.slug && i.categories.some((c) => cats.has(c)),
  ).slice(0, limit);
}
