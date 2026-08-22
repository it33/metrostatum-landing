import type { Leader } from "./leadership-types";
import { LEADER_PHOTOS } from "./leader-photos";
import { RESOURCE_CARD_IMAGES } from "./resource-card-images";

export const PRINCIPLES = [
  {
    title: "Customer obsession",
    body: "We exist to make customers successful. In everything we do, we start with the customer's perspective and work backwards.",
    variant: "denim" as const,
    image: "images/principles/customer-obsession-v2.jpg",
  },
  {
    title: "Ownership",
    body: "We own the outcomes of our activities. When we see a vacuum on something important, we jump in.",
    variant: "marigold" as const,
    image: "images/principles/ownership.jpg",
  },
  {
    title: "Self awareness",
    body: "We seek to understand our strengths and growth opportunities. We are open to feedback and share our ideas constructively and respectfully.",
    variant: "surface" as const,
    image: "images/principles/self-awareness.jpg",
  },
  {
    title: "High impact",
    body: "We align our work to our shared vision and stay focused on top priorities.",
    variant: "outline" as const,
    image: "images/principles/high-impact-v2.jpg",
  },
  {
    title: "Earn trust",
    body: "We make to maximize the trust of others in our judgments. We are open, self-critical, and factual.",
    variant: "slate" as const,
    image: "images/principles/earn-trust.jpg",
  },
] as const;

export const EXECUTIVE: Leader[] = [
  {
    name: "Ian Tien",
    title: "CEO & Co-Founder, Mattermost, Inc.",
    initials: "IT",
    vanity: "iantien",
    photo: LEADER_PHOTOS["iantien"],
    bio: "Leads Mattermost, Inc. global parent company delivering sovereign collaboration, automation and AI solutions for national security and critical infrastructure enterprises. Former product leader for Microsoft Office and OneDrive with a dozen patents in Microsoft technologies. Engineering degrees from the University of Waterloo and Cornell University; Stanford MBA. U.S.-Canada dual citizen.",
  },
  {
    name: "Corey Hulen",
    title: "CEO, Mattermost Federal, Inc. & Co-Founder, Mattermost, Inc.",
    initials: "CH",
    vanity: "coreyhulen",
    photo: LEADER_PHOTOS["coreyhulen"],
    bio: "Leads the U.S. federal subsidiary with TS/SCI clearance serving Department of War and intelligence community customers. CTO Emeritus and Co-Founder of Mattermost. Founded Tempo AI (acquired by Salesforce); former Microsoft Office engineering manager and architect. Holds 30 patents in Microsoft technologies. U.S. citizen.",
  },
  {
    name: "Adam Enterkin",
    title: "Chief Revenue Officer",
    initials: "AE",
    vanity: "adam-e-14783b",
    photo: LEADER_PHOTOS["adam-e-14783b"],
    bio: "Leads global revenue organization. Former Global CRO for world's leading sovereign communications business at BlackBerry (NYSE: BB; TSX: BB), headquartered in Waterloo, Canada. Led BlackBerry's transformation to global software business, with NATO-certified, BSI-approved solutions trusted by G7. Earlier career at SAP & Citrix. U.S. citizen.",
  },
];

export const PRODUCT_ENG: Leader[] = [
  {
    name: "Jason Blais",
    title: "VP Product & NATO Alliances",
    initials: "JB",
    vanity: "jason-blais",
    photo: LEADER_PHOTOS["jason-blais"],
    bio: "Based in Helsinki, Finland. 10+ years in enterprise B2B collaboration for IT, DevOps & security teams. Leads product strategy and NATO alliance partnerships, aligning platform capabilities with defense, cybersecurity, and critical infrastructure mission requirements across allied nations.",
  },
  {
    name: "Pavel Zeman",
    title: "SVP Engineering & Security",
    initials: "PZ",
    vanity: "pavel-zeman",
    photo: LEADER_PHOTOS["pavel-zeman"],
    bio: "Based in Atlanta, Georgia, USA. 25+ years building and scaling products and engineering organizations at Microsoft (security-focused, multiple patents), Red Canary, and MobileIron (through IPO). Owns platform engineering, security, infrastructure, DDIL/edge architecture, and sovereign AI integration.",
  },
  {
    name: "Daniel Schalla",
    title: "VP Infrastructure & Security",
    initials: "DS",
    vanity: "dschalla",
    photo: LEADER_PHOTOS["dschalla"],
    bio: "Based in Cologne, Germany. SANS-trained security leader and international speaker. Member of the European Cyber Security Organisation (ECSO). Works with NATO on Locked Shields and other cyber defense exercises. Leads strategic CSP alliances with Microsoft, Oracle, Google, and AWS.",
  },
];

export const GTM: Leader[] = [
  {
    name: "James Mullins",
    title: "VP Sales, EMEA & APAC",
    initials: "JM",
    vanity: "jamullins",
    photo: LEADER_PHOTOS["jamullins"],
    bio: "Based in London, UK. 30+ years selling into international government, military, and intelligence organizations, as well as financial services, telecommunications, and oil & gas. Prior leadership roles at Ripjar (global threat detection), SS8, Narus (network intelligence), and Equiis Technologies — deep expertise in security and intelligence technology markets across NATO-allied and Five Eyes nations.",
  },
  {
    name: "Matt Mandrgoc",
    title: "VP Sales, US Federal Sales",
    initials: "MM",
    vanity: "matt-mandrgoc-20502912",
    photo: LEADER_PHOTOS["matt-mandrgoc-20502912"],
    bio: "20+ years in U.S. defense and national security sales. At Cisco for 16 years leading operations across Army, DISA, Defense Agencies, Special Operations Forces, Department of War/Intel collaboration, and public sector programs. Previously led U.S. federal and government sales at Zoom, Extreme Networks, and Check Point.",
  },
  {
    name: "Shigeru Harasawa",
    title: "General Manager, Mattermost Japan KK",
    initials: "SH",
    vanity: "shigeru-harasawa-127587",
    photo: LEADER_PHOTOS["shigeru-harasawa-127587"],
    bio: "Based in Tokyo. 25+ years in enterprise technology with leadership roles at Oracle, DataRobot (Japan Country Manager), IBM, Netezza, and DataStax. Leads Japan market entry and JSDF engagement — key to Indo-Pacific defense modernization and assured cooperation with allied forces.",
  },
  {
    name: "Devanesan \"Moses\" Moses",
    title: "VP Customer Enablement & Success",
    initials: "DM",
    vanity: "moses-cyber-defender",
    photo: LEADER_PHOTOS["moses-cyber-defender"],
    bio: "25+ years in cybersecurity post-sales leadership (Claroty, Cybereason, Check Point). Leads global Technical Account Management, professional services, support & partner enablement — maximizing customer value, adoption, and retention for defense, intelligence, and critical infrastructure customers worldwide.",
  },
  {
    name: "Leigh Dow",
    title: "Chief Marketing Officer",
    initials: "LD",
    vanity: "leighdow",
    photo: LEADER_PHOTOS["leighdow"],
    bio: "25+ years driving GTM strategy across cybersecurity, physical security, and defense within national security, technology and global growth. Began on Capitol Hill in the U.S. Senate shaping policy, advancing into government affairs at Intel. Led global marketing at Honeywell Aerospace. VP Global Marketing at Identiv.",
  },
];

export const OPS: Leader[] = [
  {
    name: "Lane McFarland",
    title: "Chief People Officer",
    initials: "LM",
    vanity: "lanem1",
    photo: LEADER_PHOTOS["lanem1"],
    bio: "15+ years scaling people operations and talent strategy in cybersecurity and enterprise technology. Previously VP People Operations at Flashpoint (threat intelligence); earlier, Director of People Operations at Risk Based Security (acquired by Flashpoint). Experienced in hiring, developing, and retaining staff with security clearances.",
  },
  {
    name: "Kendra Niedziejko",
    title: "Chief Financial Officer",
    initials: "KN",
    vanity: "kendraniedziejko",
    photo: LEADER_PHOTOS["kendraniedziejko"],
    bio: "25+ years in finance at high-growth technology companies. Most recently Chief Accounting Officer at MNTN, Inc.; previously CFO at xMatters, Inc. Earlier career includes key roles in the IPOs of OpenTable and E-LOAN. Leads financial operations, FP&A, strategic planning, and growth objectives across Mattermost's global entities.",
  },
  {
    name: "Nirosha Ruwan",
    title: "VP Legal",
    initials: "NR",
    vanity: "nirosha",
    photo: LEADER_PHOTOS["nirosha"],
    bio: "Two decades of leadership across legal, public sector, and business operations. Former attorney at Latham & Watkins and Cleary Gottlieb. Manages corporate legal, compliance, IP, and international subsidiary governance across Mattermost's global entities serving defense, intelligence, and critical infrastructure markets.",
  },
  {
    name: "Linda Dalenberg",
    title: "VP Corporate Controller",
    initials: "LD",
    vanity: "linda-dalenberg-97620a7",
    photo: LEADER_PHOTOS["linda-dalenberg-97620a7"],
    bio: "Experienced finance operator with prior roles at MNTN, Everbridge/xMatters (supported $240M M&A), and Kovarus. Owns accounting, financial reporting, payroll, and NetSuite administration — critical to FP&A rigor and investor due diligence readiness.",
  },
];

export const OFFICES = [
  { region: "Australia", lines: ["15 Moore Street, Level 4 & 5", "Canberra, 2601"] },
  { region: "Canada", lines: ["200 Bay St, North Tower Suite 1200", "Toronto, Ontario, M5J 2J2"] },
  { region: "Japan", lines: ["Shibuya Dogenzaka Tokyu Building 2F-C", "1-10-8 Dogenzaka, Shibuya-ku, Tokyo"] },
  { region: "Netherlands", lines: ["Piet Heinkade 55", "Amsterdam 1019 GM"] },
  { region: "Sweden", lines: ["Olof Palmesgata 29, 4th Floor", "Stockholm 111 22"] },
  { region: "United Kingdom", lines: ["News Building 3, London Bridge Street, 3rd Floor", "London SE1 9SG"] },
  { region: "United States", lines: ["2100 Geng Road, Suite 210", "Palo Alto, California 94303"] },
  { region: "US Federal", lines: ["11921 Freedom Drive, Suite 550", "Reston, VA, 20190"] },
] as const;

export const RESOURCE_CARDS = [
  {
    title: "Press",
    body: "Read the latest stories about Mattermost in the news.",
    href: "https://mattermost.com/newsroom/",
    image: RESOURCE_CARD_IMAGES.press,
  },
  {
    title: "Blog",
    body: "Check out articles, podcasts, and more from our team.",
    href: "https://mattermost.com/blog/",
    image: RESOURCE_CARD_IMAGES.blog,
  },
  {
    title: "Community",
    body: "Learn about events, hackathons, and other community projects.",
    href: "https://mattermost.com/community/",
    image: RESOURCE_CARD_IMAGES.community,
  },
  {
    title: "Careers",
    body: "View our open positions and learn more about our culture and values.",
    href: "https://mattermost.com/careers/",
    image: RESOURCE_CARD_IMAGES.careers,
  },
  {
    title: "Partners",
    body: "Find an existing partner or learn how to apply to our global partner program.",
    href: "https://mattermost.com/partners/",
    image: RESOURCE_CARD_IMAGES.partners,
  },
  {
    title: "Sales",
    body: "Get in touch with a Mattermost expert and we'll help you get started with our platform.",
    href: "#/contact-sales",
    image: RESOURCE_CARD_IMAGES.sales,
  },
] as const;

export const BADGES = [
  {
    src: "images/awards/capterra-shortlist-2025.webp",
    alt: "Capterra Shortlist 2025 — Team Communication",
    label: "Capterra Shortlist",
    year: "2025",
  },
  {
    src: "images/awards/capterra-best-value-2025.webp",
    alt: "Capterra Best Value 2025",
    label: "Capterra Best Value",
    year: "2025",
  },
  {
    src: "images/awards/trustradius-top-rated-2025.webp",
    alt: "TrustRadius Top Rated 2025",
    label: "TrustRadius Top Rated",
    year: "2025",
  },
  {
    src: "images/awards/trustradius-buyers-choice-2025.webp",
    alt: "TrustRadius Buyer’s Choice 2025",
    label: "TrustRadius Buyer’s Choice",
    year: "2025",
  },
  {
    src: "images/awards/software-advice-support-2025.webp",
    alt: "Software Advice Best Customer Support 2025",
    label: "Software Advice Best Support",
    year: "2025",
  },
  {
    src: "images/awards/tmc-cyber-2025.png",
    alt: "2025 TMCnet Cybersecurity Excellence Award — Mattermost Enterprise Advanced",
    label: "TMC Cybersecurity Excellence",
    year: "2025",
  },
  {
    src: "images/awards/infotech-voc-2025.png",
    alt: "Info-Tech SoftwareReviews Voice of the Customer — Mattermost",
    label: "Info-Tech Voice of the Customer",
    year: "2025",
  },
  {
    src: "images/awards/devies-2026.png",
    alt: "2026 DEVIES Award — Best Innovation in Communication and Messaging",
    label: "DEVIES Communication & Messaging",
    year: "2026",
  },
  {
    src: "images/awards/devies-2024.png",
    alt: "2024 DEVIES Award — Best Innovation in ITOps",
    label: "DEVIES Best Innovation in ITOps",
    year: "2024",
  },
  {
    src: "images/awards/capterra-shortlist-2024.png",
    alt: "Capterra Shortlist 2024 — Team Communication",
    label: "Capterra Shortlist",
    year: "2024",
  },
  {
    src: "images/awards/devies-2023.png",
    alt: "2023 DEVIES Award — Best Innovation in Communication and Messaging",
    label: "DEVIES Communication & Messaging",
    year: "2023",
  },
  {
    src: "images/awards/inc-power-partner-2023.png",
    alt: "Inc. Power Partner Awards 2023",
    label: "Inc. Power Partner",
    year: "2023",
  },
  {
    src: "images/awards/trustradius-best-of-2022.png",
    alt: "TrustRadius Best of 2022 — Collaboration and DevOps",
    label: "TrustRadius Best of",
    year: "2022",
  },
] as const;
