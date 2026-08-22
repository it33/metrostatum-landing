export type ContactIntent = "national-security" | "enterprise" | "";

const NS_HINTS = [
  "national-security",
  "intelligence",
  "mission-operations",
  "cyber-comms",
  "cyber",
  "defense",
  "defence",
  "soc-operations",
  "out-of-band",
  "agentic-soc",
  "air-mobility",
  "air-force",
  "usaf",
  "platform-one",
  "cdao",
];

const ENTERPRISE_HINTS = [
  "energy",
  "manufacturing",
  "financial",
  "technology",
  "law-enforcement",
  "government",
  "customers",
  "about",
  "ecosystem",
  "integrations",
  "platform",
  "devsecops",
  "critical-infrastructure",
];

const STORAGE_KEY = "mm:from-page";

export function currentSitePath(): string {
  const hash = window.location.hash || "";
  if (hash.startsWith("#/")) {
    return hash.replace(/^#\/?/, "").split("?")[0].replace(/\/+$/, "") || "home";
  }
  return (window.location.pathname || "/").replace(/\/+$/, "") || "home";
}

export function rememberSourcePage(path?: string) {
  try {
    const p = (path ?? currentSitePath()).replace(/^#\/?/, "").replace(/^\/+/, "");
    if (!p || p.startsWith("contact-sales") || p === "contact") return;
    sessionStorage.setItem(STORAGE_KEY, p);
  } catch {
    /* private mode */
  }
}

export function readInboundPath(): string {
  const hash = window.location.hash || "";
  const qHash = hash.includes("?") ? hash.slice(hash.indexOf("?") + 1) : "";
  const search = (window.location.search || "").replace(/^\?/, "");
  const params = new URLSearchParams(qHash || search);
  const from = params.get("from") || params.get("src") || "";
  if (from) return decodeURIComponent(from).replace(/^#\/?/, "").replace(/^\/+/, "");
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY) || "";
    if (stored) return stored;
  } catch {
    /* ignore */
  }
  try {
    if (document.referrer) {
      const u = new URL(document.referrer);
      if (u.origin === window.location.origin) {
        const p = (u.hash.startsWith("#/") ? u.hash : u.pathname).replace(/^#\/?/, "").replace(/^\/+/, "").split("?")[0];
        if (p && !p.startsWith("contact-sales") && p !== "contact") return p || "home";
      }
    }
  } catch {
    /* ignore */
  }
  return "";
}

export function intentFromPath(path: string): ContactIntent {
  const p = (path || "").toLowerCase();
  if (!p || p === "home" || p === "/") return "";
  if (NS_HINTS.some((h) => p.includes(h))) return "national-security";
  if (ENTERPRISE_HINTS.some((h) => p.includes(h))) return "enterprise";
  return "";
}

export function defenseSpecialistForCountry(country: string): string {
  if (country === "United States") return "U.S. Defense & National Security";
  if (country === "Canada") return "Canadian Government & Defence specialist";
  if (country === "Japan") return "日本の防衛・セキュリティ専門家に相談";
  if (country === "Germany") return "Bundeswehr & NATO";
  if (country === "United Kingdom" || country === "Australia" || country === "New Zealand") return "Five Eyes";
  if (
    [
      "France",
      "Belgium",
      "Netherlands",
      "Italy",
      "Spain",
      "Portugal",
      "Czechia",
      "Denmark",
      "Estonia",
      "Finland",
      "Norway",
      "Poland",
      "Sweden",
      "Austria",
    ].includes(country)
  ) {
    return "NATO & Défense européenne";
  }
  if (
    ["South Korea", "Israel", "Taiwan", "Singapore", "United Arab Emirates"].includes(country)
  ) {
    return "(Other) Allied Government specialist";
  }
  return "(Other) Allied Government specialist";
}

export function specialistFor(country: string, intent: ContactIntent): string {
  if (!country || !intent) return "";
  if (intent === "enterprise") return "Global Enterprise & Commercial";
  return defenseSpecialistForCountry(country);
}

export function contactHrefWithFrom(base: string, fromPath?: string): string {
  const from = (fromPath ?? currentSitePath()).replace(/^#\/?/, "").replace(/^\/+/, "");
  if (!from || from.startsWith("contact-sales") || from === "contact") return base;
  const encoded = encodeURIComponent(from);
  if (base.includes("from=")) return base;
  if (base.startsWith("#")) {
    return base.includes("?") ? `${base}&from=${encoded}` : `${base}?from=${encoded}`;
  }
  return base.includes("?") ? `${base}&from=${encoded}` : `${base}?from=${encoded}`;
}

export function attachContactFromParam() {
  const onClick = (e: MouseEvent) => {
    const a = (e.target as HTMLElement | null)?.closest?.("a");
    if (!a) return;
    const href = a.getAttribute("href") || "";
    if (!href.includes("contact-sales") || href.includes("from=")) return;
    a.setAttribute("href", contactHrefWithFrom(href));
  };
  document.addEventListener("click", onClick, true);
  return () => document.removeEventListener("click", onClick, true);
}
