export type Crumb = { label: string; href: string };

export type NavLinkLike = { label: string; href: string };
export type NavGroupLike = { title: string; children?: NavLinkLike[]; links?: NavLinkLike[] };
export type NavItemLike = {
  label: string;
  href?: string;
  children?: NavLinkLike[];
  groups?: NavGroupLike[];
};

export function normalizePath(input: string): string {
  let s = (input || "").trim();
  if (s.startsWith("#/")) s = s.slice(1);
  else if (s === "#" || s === "#/") return "/";
  s = s.replace(/\/+$/, "");
  if (!s) return "/";
  if (!s.startsWith("/") && !s.startsWith("#")) s = `/${s}`;
  return s;
}

/** Combine pathname + hash into a comparable route key. */
export function currentRoute(pathname: string, hash: string): string {
  const h = hash || "";
  if (h.startsWith("#/")) return normalizePath(h);
  const path = normalizePath(pathname || "/");
  if (h.startsWith("#") && h.length > 1 && !h.startsWith("#/")) {
    return `${path}${h}`;
  }
  return path || "/";
}

function groupLinks(g: NavGroupLike): NavLinkLike[] {
  return g.links ?? g.children ?? [];
}

function allLinks(item: NavItemLike): NavLinkLike[] {
  const out: NavLinkLike[] = [];
  if (item.href) out.push({ label: item.label, href: item.href });
  item.children?.forEach((c) => out.push(c));
  item.groups?.forEach((g) => groupLinks(g).forEach((l) => out.push(l)));
  return out;
}

function firstSegment(href: string): string {
  const n = normalizePath(href).replace(/^#/, "");
  const path = n.split("#")[0];
  const seg = path.split("/").filter(Boolean)[0];
  return seg ? `/${seg}` : "/";
}

export function sectionRoot(item: NavItemLike): string {
  if (item.href) return firstSegment(item.href);
  const first = allLinks(item)[0];
  return first ? firstSegment(first.href) : "/";
}

function splitHash(href: string): [string, string] {
  const n = normalizePath(href);
  const i = n.indexOf("#");
  if (i === -1) return [n, ""];
  return [n.slice(0, i) || "/", n.slice(i + 1)];
}

function isMatch(href: string, current: string): boolean {
  const a = normalizePath(href);
  const b = normalizePath(current);
  if (a === "/" || b === "/") return a === b;
  if (a === b) return true;

  const [aPath, aHash] = splitHash(a);
  const [bPath, bHash] = splitHash(b);

  // Hash targets only match the same page + fragment
  if (aHash) return aPath === bPath && aHash === bHash;

  // Path prefix: /ecosystem matches /ecosystem/partners/microsoft
  return bPath === aPath || bPath.startsWith(`${aPath}/`);
}

function length(href: string) {
  return normalizePath(href).length;
}

export function matchNav(
  items: NavItemLike[],
  current: string,
  homeHref: string,
): { activeLabel: string | null; crumbs: Crumb[] } {
  const cur = normalizePath(current);
  if (cur === "/" || cur === "") {
    return { activeLabel: null, crumbs: [] };
  }

  const active =
    items.find((item) => {
      const root = sectionRoot(item);
      if (root !== "/" && (cur === root || cur.startsWith(`${root}/`) || cur.startsWith(`${root}#`))) {
        return true;
      }
      return item.href ? isMatch(item.href, cur) : false;
    }) ?? null;

  if (!active) {
    return { activeLabel: null, crumbs: [{ label: "Home", href: homeHref }] };
  }

  const crumbs: Crumb[] = [
    { label: "Home", href: homeHref },
    { label: active.label, href: active.href ?? `${homeHref.replace(/\/$/, "")}${sectionRoot(active)}`.replace(/\/\/+/g, "/") },
  ];

  // Prefer an explicit section overview href
  if (active.href) crumbs[1].href = active.href;
  else crumbs[1].href = `${sectionRoot(active)}`;

  let bestLink: NavLinkLike | null = null;
  let bestGroup: NavGroupLike | null = null;

  for (const g of active.groups ?? []) {
    for (const l of groupLinks(g)) {
      if (isMatch(l.href, cur) && (!bestLink || length(l.href) > length(bestLink.href))) {
        bestLink = l;
        bestGroup = g;
      }
    }
  }
  for (const l of active.children ?? []) {
    if (isMatch(l.href, cur) && (!bestLink || length(l.href) > length(bestLink.href))) {
      bestLink = l;
      bestGroup = null;
    }
  }

  if (bestGroup) {
    const first = groupLinks(bestGroup)[0];
    crumbs.push({ label: bestGroup.title, href: first?.href ?? crumbs[1].href });
  }

  if (bestLink && bestLink.label.toLowerCase() !== "overview" && bestLink.href !== crumbs[1].href) {
    const last = crumbs[crumbs.length - 1];
    if (last.label !== bestLink.label) {
      crumbs.push({ label: bestLink.label, href: bestLink.href });
    }
  }

  return { activeLabel: active.label, crumbs };
}
