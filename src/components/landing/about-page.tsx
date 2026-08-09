import { useState } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

const CONTACT = "https://mattermost.com/contact-sales/";

type Leader = {
  name: string;
  title: string;
  bio: string;
  /** LinkedIn vanity (path after /in/) for profile link */
  vanity?: string;
  /** Full URL to headshot (reliable CDN only — no broken placeholders) */
  photo?: string;
  initials: string;
};

function leaderPhotoSrc(leader: Leader) {
  return leader.photo || null;
}

function linkedInUrl(vanity: string) {
  return `https://www.linkedin.com/in/${vanity}`;
}

const PRINCIPLES = [
  { title: "Customer obsession", body: "We exist to make customers successful. In everything we do, we start with the customer's perspective and work backwards." },
  { title: "Ownership", body: "We own the outcomes of our activities. When we see a vacuum on something important, we jump in." },
  { title: "Self awareness", body: "We seek to understand our strengths and growth opportunities. We are open to feedback and share our ideas constructively and respectfully." },
  { title: "High impact", body: "We align our work to our shared vision and stay focused on top priorities." },
  { title: "Earn trust", body: "We make to maximize the trust of others in our judgments. We are open, self-critical, and factual." },
] as const;

const EXECUTIVE: Leader[] = [
  {
    name: "Ian Tien",
    title: "CEO & Co-Founder, Mattermost, Inc.",
    initials: "IT",
    vanity: "iantien",
    photo: "https://unavatar.io/linkedin/iantien",
    bio: "Leads Mattermost, Inc. global parent company delivering sovereign collaboration, automation and AI solutions for national security and critical infrastructure enterprises. Former product leader for Microsoft Office and OneDrive with a dozen patents in Microsoft technologies. Engineering degrees from the University of Waterloo and Cornell University; Stanford MBA. U.S.-Canada dual citizen.",
  },
  {
    name: "Corey Hulen",
    title: "CEO, Mattermost Federal, Inc. & Co-Founder, Mattermost, Inc.",
    initials: "CH",
    vanity: "coreyhulen",
    photo: "https://unavatar.io/linkedin/coreyhulen",
    bio: "Leads the U.S. federal subsidiary with TS/SCI clearance serving Department of War and intelligence community customers. CTO Emeritus and Co-Founder of Mattermost. Founded Tempo AI (acquired by Salesforce); former Microsoft Office engineering manager and architect. Holds 30 patents in Microsoft technologies. U.S. citizen.",
  },
  {
    name: "Adam Enterkin",
    title: "Chief Revenue Officer",
    initials: "AE",
    vanity: "adam-e-14783b",
    bio: "Leads global revenue organization. Former Global CRO for world's leading sovereign communications business at BlackBerry (NYSE: BB; TSX: BB), headquartered in Waterloo, Canada. Led BlackBerry's transformation to global software business, with NATO-certified, BSI-approved solutions trusted by G7. Earlier career at SAP & Citrix. U.S. citizen.",
  },
];

const PRODUCT_ENG: Leader[] = [
  {
    name: "Jason Blais",
    title: "VP Product & NATO Alliances",
    initials: "JB",
    vanity: "jason-blais",
    photo: "https://unavatar.io/linkedin/jason-blais",
    bio: "Based in Helsinki, Finland. 10+ years in enterprise B2B collaboration for IT, DevOps & security teams. Leads product strategy and NATO alliance partnerships, aligning platform capabilities with defense, cybersecurity, and critical infrastructure mission requirements across allied nations.",
  },
  {
    name: "Pavel Zeman",
    title: "SVP Engineering & Security",
    initials: "PZ",
    vanity: "pavel-zeman",
    photo: "https://unavatar.io/linkedin/pavel-zeman",
    bio: "Based in Atlanta, Georgia, USA. 25+ years building and scaling products and engineering organizations at Microsoft (security-focused, multiple patents), Red Canary, and MobileIron (through IPO). Owns platform engineering, security, infrastructure, DDIL/edge architecture, and sovereign AI integration.",
  },
  {
    name: "Daniel Schalla",
    title: "VP Infrastructure & Security",
    initials: "DS",
    vanity: "dschalla",
    bio: "Based in Cologne, Germany. SANS-trained security leader and international speaker. Member of the European Cyber Security Organisation (ECSO). Works with NATO on Locked Shields and other cyber defense exercises. Leads strategic CSP alliances with Microsoft, Oracle, Google, and AWS.",
  },
];

const GTM: Leader[] = [
  {
    name: "James Mullins",
    title: "VP Sales, EMEA & APAC",
    initials: "JM",
    bio: "Based in London, UK. 30+ years selling into international government, military, and intelligence organizations, as well as financial services, telecommunications, and oil & gas. Prior leadership roles at Ripjar (global threat detection), SS8, Narus (network intelligence), and Equiis Technologies — deep expertise in security and intelligence technology markets across NATO-allied and Five Eyes nations.",
  },
  {
    name: "Matt Mandrgoc",
    title: "VP Sales, US Federal Sales",
    initials: "MM",
    vanity: "matt-mandrgoc-20502912",
    photo: "https://pbs.twimg.com/media/HFj11lla4AAflh3.jpg",
    bio: "20+ years in U.S. defense and national security sales. At Cisco for 16 years leading operations across Army, DISA, Defense Agencies, Special Operations Forces, Department of War/Intel collaboration, and public sector programs. Previously led U.S. federal and government sales at Zoom, Extreme Networks, and Check Point.",
  },
  {
    name: "Shigeru Harasawa",
    title: "General Manager, Mattermost Japan KK",
    initials: "SH",
    vanity: "shigeru-harasawa-127587",
    bio: "Based in Tokyo. 25+ years in enterprise technology with leadership roles at Oracle, DataRobot (Japan Country Manager), IBM, Netezza, and DataStax. Leads Japan market entry and JSDF engagement — key to Indo-Pacific defense modernization and assured cooperation with allied forces.",
  },
  {
    name: 'Devanesan "Moses" Moses',
    title: "VP Customer Enablement & Success",
    initials: "DM",
    vanity: "moses-cyber-defender",
    photo: "https://unavatar.io/linkedin/moses-cyber-defender",
    bio: "25+ years in cybersecurity post-sales leadership (Claroty, Cybereason, Check Point). Leads global Technical Account Management, professional services, support & partner enablement — maximizing customer value, adoption, and retention for defense, intelligence, and critical infrastructure customers worldwide.",
  },
  {
    name: "Leigh Dow",
    title: "Chief Marketing Officer",
    initials: "LD",
    vanity: "leighdow",
    photo: "https://unavatar.io/linkedin/leighdow",
    bio: "25+ years driving GTM strategy across cybersecurity, physical security, and defense within national security, technology and global growth. Began on Capitol Hill in the U.S. Senate shaping policy, advancing into government affairs at Intel. Led global marketing at Honeywell Aerospace. VP Global Marketing at Identiv.",
  },
];

const OPS: Leader[] = [
  {
    name: "Lane McFarland",
    title: "Chief People Officer",
    initials: "LM",
    vanity: "lanem1",
    photo: "https://unavatar.io/linkedin/lanem1",
    bio: "15+ years scaling people operations and talent strategy in cybersecurity and enterprise technology. Previously VP People Operations at Flashpoint (threat intelligence); earlier, Director of People Operations at Risk Based Security (acquired by Flashpoint). Experienced in hiring, developing, and retaining staff with security clearances.",
  },
  {
    name: "Kendra Niedziejko",
    title: "Chief Financial Officer",
    initials: "KN",
    vanity: "kendraniedziejko",
    photo: "https://unavatar.io/linkedin/kendraniedziejko",
    bio: "25+ years in finance at high-growth technology companies. Most recently Chief Accounting Officer at MNTN, Inc.; previously CFO at xMatters, Inc. Earlier career includes key roles in the IPOs of OpenTable and E-LOAN. Leads financial operations, FP&A, strategic planning, and growth objectives across Mattermost's global entities.",
  },
  {
    name: "Nirosha Ruwan",
    title: "VP Legal",
    initials: "NR",
    vanity: "nirosha",
    photo: "https://unavatar.io/linkedin/nirosha",
    bio: "Two decades of leadership across legal, public sector, and business operations. Former attorney at Latham & Watkins and Cleary Gottlieb. Manages corporate legal, compliance, IP, and international subsidiary governance across Mattermost's global entities serving defense, intelligence, and critical infrastructure markets.",
  },
  {
    name: "Linda Dalenberg",
    title: "VP Corporate Controller",
    initials: "LD",
    vanity: "linda-dalenberg-97620a7",
    photo: "https://unavatar.io/linkedin/linda-dalenberg-97620a7",
    bio: "Experienced finance operator with prior roles at MNTN, Everbridge/xMatters (supported $240M M&A), and Kovarus. Owns accounting, financial reporting, payroll, and NetSuite administration — critical to FP&A rigor and investor due diligence readiness.",
  },
];

const OFFICES = [
  { region: "Australia", lines: ["15 Moore Street, Level 4 & 5", "Canberra, 2601"] },
  { region: "Canada", lines: ["200 Bay St, North Tower Suite 1200", "Toronto, Ontario, M5J 2J2"] },
  { region: "Japan", lines: ["Shibuya Dogenzaka Tokyu Building 2F-C", "1-10-8 Dogenzaka, Shibuya-ku, Tokyo"] },
  { region: "Netherlands", lines: ["Piet Heinkade 55", "Amsterdam 1019 GM"] },
  { region: "Sweden", lines: ["Olof Palmesgata 29, 4th Floor", "Stockholm 111 22"] },
  { region: "United Kingdom", lines: ["News Building 3, London Bridge Street, 3rd Floor", "London SE1 9SG"] },
  { region: "United States", lines: ["2100 Geng Road, Suite 210", "Palo Alto, California 94303"] },
  { region: "US Federal", lines: ["11921 Freedom Drive, Suite 550", "Reston, VA, 20190"] },
] as const;

const RESOURCE_CARDS = [
  { title: "Press", body: "Read the latest stories about Mattermost in the news.", href: "https://mattermost.com/newsroom/", image: "https://mattermost.com/wp-content/uploads/2025/02/r2024-about-us-card-press.webp" },
  { title: "Blog", body: "Check out articles, podcasts, and more from our team.", href: "https://mattermost.com/blog/", image: "https://mattermost.com/wp-content/uploads/2025/02/r2024-about-us-card-blog.webp" },
  { title: "Community", body: "Learn about events, hackathons, and other community projects.", href: "https://mattermost.com/community/", image: "https://mattermost.com/wp-content/uploads/2025/02/r2024-about-us-card-community.webp" },
  { title: "Careers", body: "View our open positions and learn more about our culture and values.", href: "https://mattermost.com/careers/", image: "https://mattermost.com/wp-content/uploads/2025/02/r2024-about-us-card-careers.webp" },
  { title: "Partners", body: "Find an existing partner or learn how to apply to our global partner program.", href: "https://mattermost.com/partners/", image: "https://mattermost.com/wp-content/uploads/2025/02/r2024-about-us-card-partners.webp" },
  { title: "Sales", body: "Get in touch with a Mattermost expert and we'll help you get started with our platform.", href: CONTACT, image: "https://mattermost.com/wp-content/uploads/2025/02/r2024-about-us-card-sales.webp" },
] as const;

const BADGES = [
  { src: "https://mattermost.com/wp-content/uploads/2025/07/Shortlist.webp", alt: "Capterra Shortlist 2025" },
  { src: "https://mattermost.com/wp-content/uploads/2025/07/Top-Rated.webp", alt: "TrustRadius Top Rated 2025" },
  { src: "https://mattermost.com/wp-content/uploads/2025/07/Customer-Support.webp", alt: "Software Advice Best Customer Support 2025" },
  { src: "https://mattermost.com/wp-content/uploads/2025/07/Buyers-Choice.webp", alt: "TrustRadius Buyer's Choice 2025" },
  { src: "https://mattermost.com/wp-content/uploads/2025/07/Best-Value.webp", alt: "Capterra Best Value 2025" },
] as const;

function LeaderAvatar({ leader }: { leader: Leader }) {
  const [failed, setFailed] = useState(false);
  const src = leaderPhotoSrc(leader);
  const showPhoto = Boolean(src) && !failed;

  const avatar = showPhoto ? (
    <img
      src={src!}
      alt=""
      className="size-14 shrink-0 rounded-full object-cover ring-2 ring-[var(--color-denim)]/15"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  ) : (
    <div
      className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[var(--color-denim)] text-sm font-bold tracking-wide text-white"
      aria-hidden
    >
      {leader.initials}
    </div>
  );

  if (leader.vanity) {
    return (
      <a
        href={linkedInUrl(leader.vanity)}
        target="_blank"
        rel="noreferrer"
        className="shrink-0 transition-opacity hover:opacity-90"
        title={`View ${leader.name} on LinkedIn`}
      >
        {avatar}
      </a>
    );
  }
  return avatar;
}

function LeaderCard({ leader }: { leader: Leader }) {
  return (
    <article className="flex flex-col rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
      <div className="flex items-start gap-4">
        <LeaderAvatar leader={leader} />
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-[var(--color-fg)]">{leader.name}</h3>
          <p className="mt-0.5 text-sm font-medium text-[var(--color-denim)]">{leader.title}</p>
        </div>
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--color-fg-muted)]">{leader.bio}</p>
      {leader.vanity ? (
        <a
          href={linkedInUrl(leader.vanity)}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-denim)] transition-colors hover:text-[var(--color-marigold)]"
        >
          LinkedIn
          <ArrowRight className="size-3.5" />
        </a>
      ) : null}
    </article>
  );
}

function LeaderGroup({ title, leaders }: { title: string; leaders: Leader[] }) {
  return (
    <div className="mt-12">
      <h3 className="text-lg font-semibold tracking-tight text-[var(--color-fg)]">{title}</h3>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {leaders.map((l) => (
          <LeaderCard key={l.name} leader={l} />
        ))}
      </div>
    </div>
  );
}

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-fg)]">
      <SiteHeader />

      <section className="relative overflow-hidden bg-[var(--color-denim)] text-white">
        <img
          src="https://mattermost.com/wp-content/uploads/2025/02/r2024-denim-bg-pattern.webp"
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="container-page relative py-16 md:py-24">
          <h1 className="max-w-3xl text-balance font-display text-4xl font-bold tracking-[-0.02em] sm:text-5xl md:text-[3.25rem] md:leading-[1.1]">
            Empower the people the world relies on
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            Too often the people asked to do the most are given the worst tools, due to intense
            security requirements. We bring cutting edge collaboration, automation and AI to mission
            critical operators, across sovereign cloud, air-gapped, and DDIL environments. Because
            the teams protecting our world deserve technology built for the future, not stuck in the
            past.
          </p>
        </div>
      </section>

      <section className="border-b border-[var(--color-border)] bg-white py-8">
        <div className="container-page">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {BADGES.map((b) => (
              <img key={b.src} src={b.src} alt={b.alt} className="h-16 w-auto object-contain sm:h-20" />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page">
          <h2 className="max-w-3xl text-balance text-2xl font-bold tracking-tight md:text-3xl">
            Mattermost is the leading sovereign collaboration and AI automation platform for
            national security and critical infrastructure enterprises.
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-[var(--color-fg-muted)]">
            <p>
              Trusted by governments, enterprises and allied militaries around the world, our
              platform runs on-premises and in private clouds, delivering secure messaging, file
              sharing, workflow automation, audio/screenshare, and project management—all with
              complete data and operational control. Mattermost powers high-stakes workflows across
              mission planning, real-time operations, DevSecOps, incident response, and cyber
              security.
            </p>
            <p>
              We enable zero-trust collaboration from tactical edge and DDIL environments to
              enterprise HQ, with advanced information controls including ABAC, data classification
              banners, data spillage mitigation and interoperable, federated communications. Teams
              operate across web, desktop, and mobile, with embedded interoperability for Microsoft
              Teams, Outlook, and Microsoft 365.
            </p>
            <p>
              For AI-enabled organizations, Mattermost offers the Intelligent Mission Environment
              (IME)—a self-hosted, multi-user, multi-agent framework for AI-accelerated workflows
              with sovereign and global models. Built on an in-house, hardened open source platform
              with complete auditability and supply chain security verification, Mattermost is
              co-developed with leading security experts to meet the world's most demanding
              operational needs.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] py-16 md:py-24">
        <div className="container-page">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Our Leadership Principles</h2>
          <p className="mt-3 max-w-2xl text-[var(--color-fg-muted)]">
            These principles guide our behaviors and decision-making processes from everyday projects
            to company strategy.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <article
                key={p.title}
                className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
              >
                <h3 className="text-base font-semibold text-[var(--color-denim)]">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-fg-muted)]">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] py-16 md:py-24">
        <div className="container-page">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Mattermost Leadership Team</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--color-fg-muted)]">
            <strong className="font-semibold text-[var(--color-fg)]">One team. One mission.</strong>{" "}
            The Mattermost leadership team is dedicated to the success of operators in national
            security, cybersecurity, and critical infrastructure. Our leaders bring deep domain
            expertise across military, intelligence, and mission-critical operations — with decades
            of combined experience at organizations like Microsoft, Cisco, Oracle, Ripjar, Check
            Point, and the U.S. Department of War.
          </p>
          <p className="mt-3 text-sm text-[var(--color-fg-muted)]">
            Headshots use verified sources only. Click a photo or LinkedIn link to open that leader's
            profile. Missing photos show branded initials until a reliable headshot is available.
          </p>

          <LeaderGroup title="Executive Leadership" leaders={EXECUTIVE} />
          <LeaderGroup title="Product, Engineering & Security Leadership" leaders={PRODUCT_ENG} />
          <LeaderGroup title="Go-to-Market Leadership" leaders={GTM} />
          <LeaderGroup title="Global Operations Leadership" leaders={OPS} />
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] py-16 md:py-24">
        <div className="container-page">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Our Global Footprint</h2>
          <p className="mt-3 max-w-2xl text-[var(--color-fg-muted)]">
            In-region presence matters for sovereign operations. Mattermost maintains local entities,
            cleared personnel, and partner networks in key jurisdictions to meet data residency,
            security clearance, and regulatory requirements where our customers operate.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {OFFICES.map((o) => (
              <article
                key={o.region}
                className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="size-4 text-[var(--color-marigold)]" strokeWidth={1.75} />
                  <h3 className="text-sm font-semibold">{o.region}</h3>
                </div>
                <div className="mt-3 space-y-0.5 text-sm text-[var(--color-fg-muted)]">
                  {o.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] py-16 md:py-24">
        <div className="container-page">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {RESOURCE_CARDS.map((c) => (
              <a
                key={c.title}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] transition-shadow hover:shadow-md"
              >
                <div className="aspect-[680/354] overflow-hidden bg-[var(--color-bg-elevated)]">
                  <img
                    src={c.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-[var(--color-fg)] group-hover:text-[var(--color-denim)]">
                    {c.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-[var(--color-fg-muted)]">{c.body}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] py-16 md:py-20">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-6 py-12 text-center md:px-12 md:py-16">
            <h2 className="text-balance text-2xl font-bold tracking-tight md:text-3xl">
              Ready to put the mission in motion?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--color-fg-muted)]">
              Talk with our team about zero-trust collaboration, automation, and AI for private
              cloud, air-gapped, and on-prem environments.
            </p>
            <div className="mt-8 flex justify-center">
              <Button size="lg" asChild>
                <a href={CONTACT} target="_blank" rel="noreferrer">
                  Talk to an expert
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
