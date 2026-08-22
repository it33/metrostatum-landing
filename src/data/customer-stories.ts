export type Industry =
  | "All"
  | "Defense & government"
  | "Critical infrastructure"
  | "Enterprise & finance"
  | "Research & open source"
  | "Security & cyber"
  | "Technology";

export type Country = {
  code: string;
  name: string;
};

export type CustomerStory = {
  slug: string;
  name: string;
  title: string;
  industry: Exclude<Industry, "All">;
  metric?: string;
  image: string;
  href: string;
  country: Country;
};

export const COUNTRIES = {
  US: { code: "us", name: "United States" },
  JP: { code: "jp", name: "Japan" },
  FR: { code: "fr", name: "France" },
  CH: { code: "ch", name: "Switzerland" },
  TR: { code: "tr", name: "Türkiye" },
  DE: { code: "de", name: "Germany" },
  NL: { code: "nl", name: "Netherlands" },
  CZ: { code: "cz", name: "Czech Republic" },
  CA: { code: "ca", name: "Canada" },
  SE: { code: "se", name: "Sweden" },
  DK: { code: "dk", name: "Denmark" },
  AD: { code: "ad", name: "Andorra" },
} as const satisfies Record<string, Country>;

/**
 * Published case studies from mattermost.com/customers.
 * Geography is the organization's home country (legal / HQ), not deployment footprint.
 */
export const CUSTOMER_STORIES: CustomerStory[] = [
  {
    slug: "us-department-of-defense",
    name: "U.S. Air Force",
    title: "USAF improves mission information availability by 4x with Mattermost",
    industry: "Defense & government",
    metric: "4× mission info availability",
    image:
      "https://mattermost.com/wp-content/uploads/2021/08/mattermost-customers-us-air-force-saves-time-and-money.webp",
    href: "https://mattermost.com/customers/us-department-of-defense/",
    country: COUNTRIES.US,
  },
  {
    slug: "air-mobility-command",
    name: "Air Mobility Command",
    title: "Air Mobility Command uses ChatOps to support largest-ever readiness exercise",
    industry: "Defense & government",
    metric: "15,000+ forces coordinated",
    image: "https://mattermost.com/wp-content/uploads/2023/10/Case_Study_Air_Mobility_v2.webp",
    href: "https://mattermost.com/customers/air-mobility-command/",
    country: COUNTRIES.US,
  },
  {
    slug: "operation-allies-refuge",
    name: "Operation Allies Refuge",
    title: "Mattermost enables mission success in Operation Allies Refuge",
    industry: "Defense & government",
    image:
      "https://mattermost.com/wp-content/uploads/2025/09/Mattermost-operation-allies-refuge-scaled.jpg",
    href: "https://mattermost.com/customers/operation-allies-refuge/",
    country: COUNTRIES.US,
  },
  {
    slug: "european-public-agency",
    name: "European public agency",
    title: "European public agency chooses Mattermost & Pexip for secure collaboration, replacing Skype for Business",
    industry: "Defense & government",
    image:
      "https://mattermost.com/wp-content/uploads/2025/09/Swedish-Pension-FundHero-Horzontal.jpg",
    href: "https://mattermost.com/customers/european-public-agency/",
    country: COUNTRIES.SE,
  },
  {
    slug: "rte",
    name: "RTE",
    title: "RTE uses Mattermost to manage France's power grid and reduce outage response time",
    industry: "Critical infrastructure",
    metric: "Faster outage response",
    image: "https://mattermost.com/wp-content/uploads/2022/11/Case_Study_RTE.webp",
    href: "https://mattermost.com/customers/rte/",
    country: COUNTRIES.FR,
  },
  {
    slug: "turk-telekom",
    name: "Türk Telekom",
    title: "How Türk Telekom’s SOC Team Eliminated Tool Fragmentation and Boosted Productivity by 40% with Mattermost",
    industry: "Critical infrastructure",
    metric: "40% productivity boost",
    image: "https://mattermost.com/wp-content/uploads/2026/07/Turk_Study-Hero-Horzontal.jpg",
    href: "https://mattermost.com/customers/turk-telekom/",
    country: COUNTRIES.TR,
  },
  {
    slug: "enelyst",
    name: "Enelyst",
    title: "How Enelyst powers a global energy intelligence community with Mattermost",
    industry: "Critical infrastructure",
    image: "https://mattermost.com/wp-content/uploads/2026/03/Enelyst-Case_Study-Hero-Horzontal.jpg",
    href: "https://mattermost.com/customers/enelyst/",
    country: COUNTRIES.US,
  },
  {
    slug: "fujitsu",
    name: "Fujitsu",
    title: "Fujitsu Customers with Biodrug Design Accelerator (BDA) use Mattermost to power secure collaboration",
    industry: "Enterprise & finance",
    metric: "Self-hosted R&D control",
    image: "https://mattermost.com/wp-content/uploads/2024/03/Case_Study_Fujitsu.webp",
    href: "https://mattermost.com/customers/fujitsu/",
    country: COUNTRIES.JP,
  },
  {
    slug: "nri",
    name: "NRI",
    title: "NRI gives operational efficiency a boost with Mattermost",
    industry: "Enterprise & finance",
    metric: "13,000 employees · 14 countries",
    image:
      "https://mattermost.com/wp-content/uploads/2021/08/mattermost-customers-NRI-from-hipchat-to-partner.webp",
    href: "https://mattermost.com/customers/nri/",
    country: COUNTRIES.JP,
  },
  {
    slug: "worldline",
    name: "Worldline",
    title: "Worldline creates a collaborative culture to a global team with Mattermost",
    industry: "Enterprise & finance",
    metric: "3,000 employees · 500+ teams",
    image:
      "https://mattermost.com/wp-content/uploads/2021/08/mattermost-customers-Worldline-global-team-knowlege-sharing-developer-productivity.webp",
    href: "https://mattermost.com/customers/worldline/",
    country: COUNTRIES.FR,
  },
  {
    slug: "tulip",
    name: "Tulip",
    title: "Elevating retail resilience: How Tulip slashed incident response times by 50% to 60% with Mattermost",
    industry: "Enterprise & finance",
    metric: "50–60% faster IR",
    image: "https://mattermost.com/wp-content/uploads/2024/05/Case_Study_Tulip.webp",
    href: "https://mattermost.com/customers/tulip/",
    country: COUNTRIES.CA,
  },
  {
    slug: "classact",
    name: "Classact",
    title: "Classact speeds up IT service delivery by consolidating comms, accelerating incident response by over 50%",
    industry: "Enterprise & finance",
    metric: "50%+ faster IR",
    image: "https://mattermost.com/wp-content/uploads/2024/07/Case_Study_Classact.webp",
    href: "https://mattermost.com/customers/classact/",
    country: COUNTRIES.JP,
  },
  {
    slug: "cern",
    name: "CERN",
    title: "CERN integrates 100+ tools into Mattermost for more effective global collaboration",
    industry: "Research & open source",
    metric: "22,000 users · 100+ tools",
    image:
      "https://mattermost.com/wp-content/uploads/2021/08/mattermost-customers-Cern-secure-self-hosted-messaging-collaboration.webp",
    href: "https://mattermost.com/customers/cern/",
    country: COUNTRIES.CH,
  },
  {
    slug: "almalinux",
    name: "AlmaLinux",
    title: "AlmaLinux builds a global digital community with Mattermost",
    industry: "Research & open source",
    metric: "2,000+ members · 100k posts",
    image: "https://mattermost.com/wp-content/uploads/2023/05/Case_Study_AlmaLinux.webp",
    href: "https://mattermost.com/customers/almalinux/",
    country: COUNTRIES.US,
  },
  {
    slug: "rocky-linux",
    name: "Rocky Linux",
    title: "Rocky Linux gives 5,000 open source contributors a collaboration hub with Mattermost",
    industry: "Research & open source",
    image: "https://mattermost.com/wp-content/uploads/2021/10/Rocky-Linux-Cover.webp",
    href: "https://mattermost.com/customers/rocky-linux/",
    country: COUNTRIES.US,
  },
  {
    slug: "osiris-rex",
    name: "OSIRIS-REx",
    title:
      "Connecting OSIRIS-REx's global team for innovative research while maintaining data sovereignty",
    industry: "Research & open source",
    image: "https://mattermost.com/wp-content/uploads/2024/03/Case_Study_University_AZ.webp",
    href: "https://mattermost.com/customers/osiris-rex/",
    country: COUNTRIES.US,
  },
  {
    slug: "heidelberg-university",
    name: "Heidelberg University",
    title: "Heidelberg University keeps research teams moving forward with Mattermost",
    industry: "Research & open source",
    image:
      "https://mattermost.com/wp-content/uploads/2022/03/Case_Study_University_of_Heidelberg.webp",
    href: "https://mattermost.com/customers/heidelberg-university/",
    country: COUNTRIES.DE,
  },
  {
    slug: "max-planck-digital-library",
    name: "Max Planck Digital Library",
    title: "The Max Planck Digital Library uses Mattermost to accelerate research workflows, maintain data sovereignty & ensure compliance",
    industry: "Research & open source",
    image: "https://mattermost.com/wp-content/uploads/2024/02/Case_Study_MaxPlanck.webp",
    href: "https://mattermost.com/customers/max-planck-digital-library/",
    country: COUNTRIES.DE,
  },
  {
    slug: "wikimedia-deutschland",
    name: "Wikimedia Deutschland",
    title:
      "Wikimedia Deutschland chooses self-hosted Mattermost for secure collaboration and data sovereignty",
    industry: "Research & open source",
    image: "https://mattermost.com/wp-content/uploads/2026/04/Wiki-Case_Study-Hero-Horzontal.webp",
    href: "https://mattermost.com/customers/wikimedia-deutschland/",
    country: COUNTRIES.DE,
  },
  {
    slug: "german-informatics-society",
    name: "German Informatics Society",
    title:
      "German Informatics uses Mattermost to accelerate research timelines 6x & ensure GDPR compliance",
    industry: "Research & open source",
    metric: "6× faster research timelines",
    image:
      "https://mattermost.com/wp-content/uploads/2025/05/Case_Study_German_Informatics_Society.webp",
    href: "https://mattermost.com/customers/german-informatics-society/",
    country: COUNTRIES.DE,
  },
  {
    slug: "cyberpeace-institute",
    name: "CyberPeace Institute",
    title: "CyberPeace moves to self-hosted Mattermost for data security & user-friendly design",
    industry: "Security & cyber",
    image: "https://mattermost.com/wp-content/uploads/2024/12/Case_Study_CyberPeace_Institute.webp",
    href: "https://mattermost.com/customers/cyberpeace-institute/",
    country: COUNTRIES.CH,
  },
  {
    slug: "spamhaus",
    name: "Spamhaus",
    title: "Spamhaus uses Mattermost to accelerate communication and strengthen online trust & safety",
    industry: "Security & cyber",
    image: "https://mattermost.com/wp-content/uploads/2024/10/Case_Study_Spamhaus.webp",
    href: "https://mattermost.com/customers/spamhaus/",
    country: COUNTRIES.AD,
  },
  {
    slug: "nonprofit-cert",
    name: "Nonprofit CERT",
    title:
      "Empowering cyber resilience: How a nonprofit CERT safeguards mission-critical infrastructure",
    industry: "Security & cyber",
    image: "https://mattermost.com/wp-content/uploads/2024/03/Case_Study_SektorCERT.webp",
    href: "https://mattermost.com/customers/nonprofit-cert/",
    country: COUNTRIES.DK,
  },
  {
    slug: "access-now",
    name: "Access Now",
    title: "Access Now increases focus & security with self-hosted Mattermost",
    industry: "Security & cyber",
    image: "https://mattermost.com/wp-content/uploads/2026/01/Access-Now-hero-horz.jpg",
    href: "https://mattermost.com/customers/access-now/",
    country: COUNTRIES.US,
  },
  {
    slug: "netfoundry",
    name: "NetFoundry",
    title: "NetFoundry uses Mattermost with OpenZiti for zero trust internal and external communications",
    industry: "Technology",
    image: "https://mattermost.com/wp-content/uploads/2024/01/Case_Study_NetFoundry@2x.webp",
    href: "https://mattermost.com/customers/netfoundry/",
    country: COUNTRIES.US,
  },
  {
    slug: "medincell",
    name: "MedinCell",
    title: "MedinCell gives pharmaceutical researchers a secure collaboration workspace with Mattermost",
    industry: "Technology",
    image:
      "https://mattermost.com/wp-content/uploads/2021/08/mattermost-customers-MedinCell-secure-collaborative-drug-development.webp",
    href: "https://mattermost.com/customers/medincell/",
    country: COUNTRIES.FR,
  },
  {
    slug: "fairphone",
    name: "Fairphone",
    title: "Fairphone eliminates “reply all” threads with Mattermost",
    industry: "Technology",
    image: "https://mattermost.com/wp-content/uploads/2021/09/Fairphone.webp",
    href: "https://mattermost.com/customers/fairphone/",
    country: COUNTRIES.NL,
  },
  {
    slug: "pramacom",
    name: "Pramacom",
    title: "Pramacom uses Mattermost to accelerate workflows & keep Czech citizens safe",
    industry: "Technology",
    image: "https://mattermost.com/wp-content/uploads/2023/07/Case_Study_Pramacom.webp",
    href: "https://mattermost.com/customers/pramacom/",
    country: COUNTRIES.CZ,
  },
  {
    slug: "galois",
    name: "Galois",
    title: "Galois stays in control of company data without compromising on collaboration with Mattermost",
    industry: "Technology",
    image:
      "https://mattermost.com/wp-content/uploads/2021/08/mattermost-customers-Galois-collaborate-worldwide-retaining-data-control-security.webp",
    href: "https://mattermost.com/customers/galois/",
    country: COUNTRIES.US,
  },
];

export const INDUSTRY_FILTERS: Industry[] = [
  "All",
  "Defense & government",
  "Critical infrastructure",
  "Enterprise & finance",
  "Research & open source",
  "Security & cyber",
  "Technology",
];

export const GEOGRAPHY_FILTERS: Country[] = Array.from(
  new Map(CUSTOMER_STORIES.map((s) => [s.country.code, s.country])).values(),
).sort((a, b) => a.name.localeCompare(b.name));
