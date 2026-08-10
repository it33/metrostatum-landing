import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { cn } from "@/lib/utils";

type Industry =
  | "All"
  | "Defense & government"
  | "Critical infrastructure"
  | "Enterprise & finance"
  | "Research & open source"
  | "Security & cyber"
  | "Technology";

type CustomerStory = {
  slug: string;
  name: string;
  title: string;
  industry: Exclude<Industry, "All">;
  metric?: string;
  image: string;
  href: string;
};

/**
 * Published case studies from mattermost.com/customers.
 * Hero images matched 1:1 to the live mm-card imagery on that page.
 */
const STORIES: CustomerStory[] = [
  {
    slug: "us-department-of-defense",
    name: "U.S. Air Force",
    title: "USAF improves mission information availability by 4x with Mattermost",
    industry: "Defense & government",
    metric: "4\u00d7 mission info availability",
    image:
      "https://mattermost.com/wp-content/uploads/2021/08/mattermost-customers-us-air-force-saves-time-and-money.webp",
    href: "https://mattermost.com/customers/us-department-of-defense/",
  },
  {
    slug: "air-mobility-command",
    name: "Air Mobility Command",
    title: "Air Mobility Command uses ChatOps to support largest-ever readiness exercise",
    industry: "Defense & government",
    metric: "15,000+ forces coordinated",
    image: "https://mattermost.com/wp-content/uploads/2023/10/Case_Study_Air_Mobility_v2.webp",
    href: "https://mattermost.com/customers/air-mobility-command/",
  },
  {
    slug: "operation-allies-refuge",
    name: "Operation Allies Refuge",
    title: "Mattermost enables mission success in Operation Allies Refuge",
    industry: "Defense & government",
    image:
      "https://mattermost.com/wp-content/uploads/2025/09/Mattermost-operation-allies-refuge-scaled.jpg",
    href: "https://mattermost.com/customers/operation-allies-refuge/",
  },
  {
    slug: "european-public-agency",
    name: "European public agency",
    title: "European public agency chooses Mattermost & Pexip for secure collaboration",
    industry: "Defense & government",
    image:
      "https://mattermost.com/wp-content/uploads/2025/09/Swedish-Pension-FundHero-Horzontal.jpg",
    href: "https://mattermost.com/customers/european-public-agency/",
  },
  {
    slug: "rte",
    name: "RTE",
    title: "RTE uses Mattermost to manage France's power grid and reduce outage response time",
    industry: "Critical infrastructure",
    metric: "Faster outage response",
    image: "https://mattermost.com/wp-content/uploads/2022/11/Case_Study_RTE.webp",
    href: "https://mattermost.com/customers/rte/",
  },
  {
    slug: "turk-telekom",
    name: "T\u00fcrk Telekom",
    title: "T\u00fcrk Telekom's SOC team eliminated tool fragmentation and boosted productivity by 40%",
    industry: "Critical infrastructure",
    metric: "40% productivity boost",
    image: "https://mattermost.com/wp-content/uploads/2026/07/Turk_Study-Hero-Horzontal.jpg",
    href: "https://mattermost.com/customers/turk-telekom/",
  },
  {
    slug: "enelyst",
    name: "Enelyst",
    title: "How Enelyst powers a global energy intelligence community with Mattermost",
    industry: "Critical infrastructure",
    image: "https://mattermost.com/wp-content/uploads/2026/03/Enelyst-Case_Study-Hero-Horzontal.jpg",
    href: "https://mattermost.com/customers/enelyst/",
  },
  {
    slug: "fujitsu",
    name: "Fujitsu",
    title: "Fujitsu customers with Biodrug Design Accelerator use Mattermost for collaboration",
    industry: "Enterprise & finance",
    metric: "Self-hosted R&D control",
    image: "https://mattermost.com/wp-content/uploads/2024/03/Case_Study_Fujitsu.webp",
    href: "https://mattermost.com/customers/fujitsu/",
  },
  {
    slug: "nri",
    name: "NRI",
    title: "NRI gives operational efficiency a boost with Mattermost",
    industry: "Enterprise & finance",
    metric: "13,000 employees \u00b7 14 countries",
    image:
      "https://mattermost.com/wp-content/uploads/2021/08/mattermost-customers-NRI-from-hipchat-to-partner.webp",
    href: "https://mattermost.com/customers/nri/",
  },
  {
    slug: "worldline",
    name: "Worldline",
    title: "Worldline creates a collaborative culture for a global team with Mattermost",
    industry: "Enterprise & finance",
    metric: "3,000 employees \u00b7 500+ teams",
    image:
      "https://mattermost.com/wp-content/uploads/2021/08/mattermost-customers-Worldline-global-team-knowlege-sharing-developer-productivity.webp",
    href: "https://mattermost.com/customers/worldline/",
  },
  {
    slug: "tulip",
    name: "Tulip",
    title: "Elevating retail resilience: Tulip slashed incident response times by 50\u201360%",
    industry: "Enterprise & finance",
    metric: "50\u201360% faster IR",
    image: "https://mattermost.com/wp-content/uploads/2024/05/Case_Study_Tulip.webp",
    href: "https://mattermost.com/customers/tulip/",
  },
  {
    slug: "classact",
    name: "Classact",
    title: "Classact speeds up IT service delivery, accelerating incident response by over 50%",
    industry: "Enterprise & finance",
    metric: "50%+ faster IR",
    image: "https://mattermost.com/wp-content/uploads/2024/07/Case_Study_Classact.webp",
    href: "https://mattermost.com/customers/classact/",
  },
  {
    slug: "cern",
    name: "CERN",
    title: "CERN integrates 100+ tools into Mattermost for more effective global collaboration",
    industry: "Research & open source",
    metric: "22,000 users \u00b7 100+ tools",
    image:
      "https://mattermost.com/wp-content/uploads/2021/08/mattermost-customers-Cern-secure-self-hosted-messaging-collaboration.webp",
    href: "https://mattermost.com/customers/cern/",
  },
  {
    slug: "almalinux",
    name: "AlmaLinux",
    title: "AlmaLinux builds a global digital community with Mattermost",
    industry: "Research & open source",
    metric: "2,000+ members \u00b7 100k posts",
    image: "https://mattermost.com/wp-content/uploads/2023/05/Case_Study_AlmaLinux.webp",
    href: "https://mattermost.com/customers/almalinux/",
  },
  {
    slug: "rocky-linux",
    name: "Rocky Linux",
    title: "Rocky Linux builds community collaboration with Mattermost",
    industry: "Research & open source",
    image: "https://mattermost.com/wp-content/uploads/2021/10/Rocky-Linux-Cover.webp",
    href: "https://mattermost.com/customers/rocky-linux/",
  },
  {
    slug: "osiris-rex",
    name: "OSIRIS-REx",
    title: "Connecting OSIRIS-REx's global team for innovative research while maintaining data sovereignty",
    industry: "Research & open source",
    image: "https://mattermost.com/wp-content/uploads/2024/03/Case_Study_University_AZ.webp",
    href: "https://mattermost.com/customers/osiris-rex/",
  },
  {
    slug: "heidelberg-university",
    name: "Heidelberg University",
    title: "Heidelberg University accelerates research collaboration with Mattermost",
    industry: "Research & open source",
    image:
      "https://mattermost.com/wp-content/uploads/2022/03/Case_Study_University_of_Heidelberg.webp",
    href: "https://mattermost.com/customers/heidelberg-university/",
  },
  {
    slug: "max-planck-digital-library",
    name: "Max Planck Digital Library",
    title: "Max Planck Digital Library chooses Mattermost for secure research collaboration",
    industry: "Research & open source",
    image: "https://mattermost.com/wp-content/uploads/2024/02/Case_Study_MaxPlanck.webp",
    href: "https://mattermost.com/customers/max-planck-digital-library/",
  },
  {
    slug: "wikimedia-deutschland",
    name: "Wikimedia Deutschland",
    title: "Wikimedia Deutschland chooses self-hosted Mattermost for secure collaboration and data sovereignty",
    industry: "Research & open source",
    image: "https://mattermost.com/wp-content/uploads/2026/04/Wiki-Case_Study-Hero-Horzontal.webp",
    href: "https://mattermost.com/customers/wikimedia-deutschland/",
  },
  {
    slug: "german-informatics-society",
    name: "German Informatics Society",
    title: "German Informatics uses Mattermost to accelerate research timelines 6x & ensure GDPR compliance",
    industry: "Research & open source",
    metric: "6\u00d7 faster research timelines",
    image:
      "https://mattermost.com/wp-content/uploads/2025/05/Case_Study_German_Informatics_Society.webp",
    href: "https://mattermost.com/customers/german-informatics-society/",
  },
  {
    slug: "cyberpeace-institute",
    name: "CyberPeace Institute",
    title: "CyberPeace moves to self-hosted Mattermost for data security & user-friendly design",
    industry: "Security & cyber",
    image: "https://mattermost.com/wp-content/uploads/2024/12/Case_Study_CyberPeace_Institute.webp",
    href: "https://mattermost.com/customers/cyberpeace-institute/",
  },
  {
    slug: "spamhaus",
    name: "Spamhaus",
    title: "Spamhaus uses Mattermost to accelerate communication and strengthen online trust & safety",
    industry: "Security & cyber",
    image: "https://mattermost.com/wp-content/uploads/2024/10/Case_Study_Spamhaus.webp",
    href: "https://mattermost.com/customers/spamhaus/",
  },
  {
    slug: "nonprofit-cert",
    name: "Nonprofit CERT",
    title: "Empowering cyber resilience: How a nonprofit CERT safeguards mission-critical infrastructure",
    industry: "Security & cyber",
    image: "https://mattermost.com/wp-content/uploads/2024/03/Case_Study_SektorCERT.webp",
    href: "https://mattermost.com/customers/nonprofit-cert/",
  },
  {
    slug: "access-now",
    name: "Access Now",
    title: "Access Now increases focus & security with self-hosted Mattermost",
    industry: "Security & cyber",
    image: "https://mattermost.com/wp-content/uploads/2026/01/Access-Now-hero-horz.jpg",
    href: "https://mattermost.com/customers/access-now/",
  },
  {
    slug: "netfoundry",
    name: "NetFoundry",
    title: "NetFoundry builds zero-trust collaboration workflows with Mattermost",
    industry: "Technology",
    image: "https://mattermost.com/wp-content/uploads/2024/01/Case_Study_NetFoundry@2x.webp",
    href: "https://mattermost.com/customers/netfoundry/",
  },
  {
    slug: "medincell",
    name: "MedinCell",
    title: "MedinCell enables secure collaborative drug development with Mattermost",
    industry: "Technology",
    image:
      "https://mattermost.com/wp-content/uploads/2021/08/mattermost-customers-MedinCell-secure-collaborative-drug-development.webp",
    href: "https://mattermost.com/customers/medincell/",
  },
  {
    slug: "fairphone",
    name: "Fairphone",
    title: "Fairphone eliminates \u201creply all\u201d threads with Mattermost",
    industry: "Technology",
    image: "https://mattermost.com/wp-content/uploads/2021/09/Fairphone.webp",
    href: "https://mattermost.com/customers/fairphone/",
  },
  {
    slug: "laika",
    name: "LAIKA",
    title: "LAIKA powers creative production collaboration with Mattermost",
    industry: "Technology",
    image:
      "https://mattermost.com/wp-content/uploads/2021/08/mattermost-customers-Laika-empower-creatives-secure-assets.webp",
    href: "https://mattermost.com/customers/laika/",
  },
  {
    slug: "pramacom",
    name: "Pramacom",
    title: "Pramacom modernizes secure communications with Mattermost",
    industry: "Technology",
    image: "https://mattermost.com/wp-content/uploads/2023/07/Case_Study_Pramacom.webp",
    href: "https://mattermost.com/customers/pramacom/",
  },
  {
    slug: "galois",
    name: "Galois",
    title: "Galois chooses Mattermost for high-assurance engineering collaboration",
    industry: "Technology",
    image:
      "https://mattermost.com/wp-content/uploads/2021/08/mattermost-customers-Galois-collaborate-worldwide-retaining-data-control-security.webp",
    href: "https://mattermost.com/customers/galois/",
  },
];

const FILTERS: Industry[] = [
  "All",
  "Defense & government",
  "Critical infrastructure",
  "Enterprise & finance",
  "Research & open source",
  "Security & cyber",
  "Technology",
];

export function CustomersPage() {
  const [filter, setFilter] = useState<Industry>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return STORIES.filter((s) => {
      if (filter !== "All" && s.industry !== filter) return false;
      if (!q) return true;
      return (
        s.name.toLowerCase().includes(q) ||
        s.title.toLowerCase().includes(q) ||
        s.industry.toLowerCase().includes(q) ||
        (s.metric?.toLowerCase().includes(q) ?? false)
      );
    });
  }, [filter, query]);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-fg)]">
      <SiteHeader />

      <section className="relative overflow-hidden bg-[var(--color-denim)] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 20%, rgba(255,255,255,0.14), transparent 42%), radial-gradient(circle at 82% 0%, rgba(255,188,31,0.14), transparent 38%)",
          }}
          aria-hidden
        />
        <div className="container-page relative py-16 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-marigold)]">
            Customer stories
          </p>
          <h1 className="mt-3 max-w-3xl text-balance font-display text-4xl font-bold tracking-[-0.02em] sm:text-5xl md:text-[3.25rem] md:leading-[1.1]">
            Powering digital operations around the world
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            From allied defense and national power grids to global research and payments\u2014see how
            organizations run mission-critical collaboration on Mattermost with full operational
            control.
          </p>
          <p className="mt-4 text-sm font-semibold text-white/75">
            {STORIES.length} published case studies
          </p>
        </div>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)] py-6">
        <div className="container-page">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Industry filter">
              {FILTERS.map((f) => {
                const active = f === filter;
                return (
                  <button
                    key={f}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setFilter(f)}
                    className={cn(
                      "rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide transition",
                      active
                        ? "bg-[var(--color-denim)] text-white"
                        : "border border-[var(--color-border)] bg-white text-[var(--color-fg-muted)] hover:border-[var(--color-denim)]/40 hover:text-[var(--color-denim)]",
                    )}
                  >
                    {f}
                  </button>
                );
              })}
            </div>
            <label className="relative block w-full max-w-sm">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[var(--color-fg-subtle)]" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search customers\u2026"
                className="w-full rounded-full border border-[var(--color-border)] bg-white py-2 pl-10 pr-4 text-sm outline-none ring-[var(--color-denim)]/20 placeholder:text-[var(--color-fg-subtle)] focus:ring-2"
              />
            </label>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-page">
          {filtered.length === 0 ? (
            <p className="py-16 text-center text-[var(--color-fg-muted)]">
              No customer stories match your filters.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((s) => (
                <a
                  key={s.slug}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:border-[var(--color-denim)]/30 hover:shadow-lg"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-[var(--color-bg-elevated)]">
                    <img
                      src={s.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      onError={(e) => {
                        const el = e.currentTarget;
                        el.style.display = "none";
                      }}
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold text-[var(--color-denim)]">{s.name}</span>
                      <span className="rounded-full bg-[var(--color-denim)]/8 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--color-denim)]">
                        {s.industry}
                      </span>
                    </div>
                    {s.metric && (
                      <p className="text-sm font-bold tracking-tight text-[var(--color-fg)]">
                        {s.metric}
                      </p>
                    )}
                    <p className="text-sm leading-relaxed text-[var(--color-fg-muted)]">{s.title}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-xs font-semibold text-[var(--color-denim)] transition-colors group-hover:text-[var(--color-marigold)]">
                      Read case study
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}

          <div className="mt-12 rounded-[var(--radius-2xl)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-6 py-10 text-center md:px-10">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Ready to write your own success story?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[var(--color-fg-muted)]">
              Talk with our team about sovereign collaboration for defense, critical infrastructure,
              and enterprise security operations.
            </p>
            <a
              href="https://mattermost.com/contact-sales/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-marigold)] px-5 py-2.5 text-sm font-semibold text-[var(--color-denim)] transition hover:brightness-105"
            >
              Talk to an expert
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
