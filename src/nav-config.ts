/**
 * Single source of truth for header + footer navigation.
 * All internal links use hash routes relative to the SPA root.
 */

export const CONTACT = "#/contact-sales";
export const CONTACT_SALES = CONTACT;

export const SOCIAL_LINKS = [
  { label: "YouTube", href: "https://www.youtube.com/@Mattermost" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/mattermost/" },
  { label: "X", href: "https://x.com/Mattermost" },
] as const;

export type NavLink = { label: string; href: string };
export type NavGroup = { title: string; links: NavLink[] };

export type TopNavItem =
  | { kind: "dropdown"; label: string; children: NavLink[] }
  | { kind: "mega"; label: string; columns: NavGroup[] }
  | { kind: "groups"; label: string; groups: NavGroup[] }
  | { kind: "link"; label: string; href: string };

/** Platform dropdown — one link per in-page section */
export const PLATFORM_LINKS: NavLink[] = [
  { label: "Overview", href: "#/platform" },
  { label: "Zero Trust Application Suite", href: "#/platform/zero-trust-suite" },
  { label: "Sovereign Deployment", href: "#/platform/sovereign-deployment" },
  { label: "Integrations & Automations", href: "#/platform/integrations" },
  { label: "Sovereign AI", href: "#/platform/sovereign-ai" },
  { label: "Advanced Information Controls", href: "#/platform/information-controls" },
  { label: "Federated Communications", href: "#/platform/federated" },
  { label: "Cross Domain Operations", href: "#/platform/cross-domain" },
  { label: "DDIL", href: "#/platform/ddil" },
];

/** Ecosystem dropdown — four groups */
export const ECOSYSTEM_GROUPS: NavGroup[] = [
  {
    title: "Strategic Partners",
    links: [
      { label: "Microsoft", href: "#/ecosystem/partners/microsoft" },
      { label: "Oracle", href: "#/ecosystem/partners/oracle" },
    ],
  },
  {
    title: "Sovereign Cloud",
    links: [
      { label: "Microsoft Azure", href: "#/ecosystem/cloud/microsoft" },
      { label: "Oracle Cloud", href: "#/ecosystem/cloud/oracle" },
      { label: "Google Cloud", href: "#/ecosystem/cloud/google" },
      { label: "AWS", href: "#/ecosystem/cloud/aws" },
    ],
  },
  {
    title: "Federation",
    links: [
      { label: "MS Teams", href: "#/ecosystem/federation/teams" },
      { label: "Matrix", href: "#/ecosystem/federation/matrix" },
      { label: "XMPP", href: "#/ecosystem/federation/xmpp" },
      { label: "Pidgin / libpurple", href: "#/ecosystem/federation/libpurple" },
    ],
  },
  {
    title: "DevSecOps",
    links: [
      { label: "GitLab", href: "#/ecosystem/devsecops/gitlab" },
      { label: "GitHub", href: "#/ecosystem/devsecops/github" },
      { label: "Jira", href: "#/ecosystem/devsecops/jira" },
      { label: "Confluence", href: "#/ecosystem/devsecops/confluence" },
    ],
  },
  {
    title: "Video",
    links: [
      { label: "MS Teams", href: "#/ecosystem/video/teams" },
      { label: "Pexip", href: "#/ecosystem/video/pexip" },
      { label: "Zoom", href: "#/ecosystem/video/zoom" },
      { label: "Cisco", href: "#/ecosystem/video/cisco" },
    ],
  },
  {
    title: "Integrations",
    links: [{ label: "Marketplace", href: "#/integrations" }],
  },
];

/** Solutions mega-menu — three columns */
export const SOLUTIONS_COLUMNS: NavGroup[] = [
  {
    title: "National Security",
    links: [
      { label: "Overview", href: "#/solutions/national-security" },
      { label: "Intelligence", href: "#/solutions/national-security/intelligence" },
      { label: "Mission operations", href: "#/solutions/national-security/mission-operations" },
      { label: "Cyber communications", href: "#/solutions/national-security/cyber-comms" },
    ],
  },
  {
    title: "Cyber",
    links: [
      { label: "Overview", href: "#/solutions/cyber" },
      { label: "Out-of-band IR", href: "#/solutions/cyber/out-of-band-ir" },
      { label: "SOC operations", href: "#/solutions/cyber/soc-operations" },
      { label: "Agentic SOC", href: "#/solutions/cyber/agentic-soc" },
    ],
  },
  {
    title: "DevSecOps",
    links: [
      { label: "Overview", href: "#/solutions/devsecops" },
      { label: "Shared command line", href: "#/solutions/devsecops/shared-command-line" },
      { label: "Cyber-defense integration", href: "#/solutions/devsecops/cyber-defense-integration" },
      { label: "Agile secure workflows", href: "#/solutions/devsecops/agile-secure-workflows" },
    ],
  },
];

/** Industries dropdown */
export const INDUSTRIES_LINKS: NavLink[] = [
  { label: "Overview", href: "#/industries" },
  { label: "National Security", href: "#/solutions/national-security" },
  { label: "Government", href: "#/industries/government" },
  { label: "Law enforcement", href: "#/industries/law-enforcement" },
  { label: "Energy and utilities", href: "#/industries/energy-utilities" },
  { label: "Manufacturing", href: "#/industries/manufacturing" },
  { label: "Financial services", href: "#/industries/financial-services" },
  { label: "Technology", href: "#/industries/technology" },
];

export const TOP_NAV: TopNavItem[] = [
  { kind: "dropdown", label: "Platform", children: PLATFORM_LINKS },
  { kind: "groups", label: "Ecosystem", groups: ECOSYSTEM_GROUPS },
  { kind: "mega", label: "Solutions", columns: SOLUTIONS_COLUMNS },
  { kind: "dropdown", label: "Industries", children: INDUSTRIES_LINKS },
  { kind: "link", label: "About", href: "#/about" },
  { kind: "link", label: "Customers", href: "#/customers" },
];

/** Footer columns mirroring IA + company/legal */
export const FOOTER_COLUMNS: NavGroup[] = [
  {
    title: "Platform",
    links: PLATFORM_LINKS,
  },
  {
    title: "Solutions",
    links: [
      { label: "National Security", href: "#/solutions/national-security" },
      { label: "Cyber", href: "#/solutions/cyber" },
      { label: "DevSecOps", href: "#/solutions/devsecops" },
    ],
  },
  {
    title: "Ecosystem",
    links: [
      { label: "Microsoft", href: "#/ecosystem/partners/microsoft" },
      { label: "AWS", href: "#/ecosystem/cloud/aws" },
      { label: "Oracle", href: "#/ecosystem/partners/oracle" },
      { label: "Google", href: "#/ecosystem/cloud/google" },
      { label: "MS Teams", href: "#/ecosystem/federation/teams" },
      { label: "Marketplace", href: "#/integrations" },
      { label: "Pexip", href: "#/ecosystem/video/pexip" },
    ],
  },
  {
    title: "Industries",
    links: INDUSTRIES_LINKS.filter((l) => l.label !== "Overview"),
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#/about" },
      { label: "Customers", href: "#/customers" },
      { label: "Contact Sales", href: CONTACT },
    ],
  },
];
