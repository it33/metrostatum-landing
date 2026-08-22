import catalog from "./marketplace-integrations.json";

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
  if (item.lastUpdatedSource === "listing") {
    return `Last updated ${formatted}`;
  }
  return `Last updated ${formatted}`;
}

export function relatedIntegrations(item: MarketplaceItem, limit = 6): MarketplaceItem[] {
  const cats = new Set(item.categories);
  return MARKETPLACE.filter(
    (i) => i.slug !== item.slug && i.categories.some((c) => cats.has(c)),
  ).slice(0, limit);
}
