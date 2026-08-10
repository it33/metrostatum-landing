import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getCustomerLogoSrc } from "./customer-logos";

type CaseStudy = {
  slug: string;
  name: string;
  industry: string;
  metric: string;
  benefit: string;
  href: string;
  logoClassName?: string;
};

/**
 * Top enterprise / well-known published case studies from mattermost.com/customers
 * Selected for brand recognition + clear operational outcomes.
 * Logos resolved from the shared customer-logos registry.
 */
const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "us-department-of-defense",
    name: "U.S. Air Force",
    industry: "Defense",
    metric: "4\u00d7 mission info availability",
    benefit:
      "Rolled out to 48,000 DoD personnel in one week. Secure CUI collaboration replaced ad-hoc chat tools and sped pre-flight readiness.",
    href: "https://mattermost.com/customers/us-department-of-defense/",
  },
  {
    slug: "cern",
    name: "CERN",
    industry: "Scientific research",
    metric: "22,000 users \u00b7 100+ tools",
    benefit:
      "Centralized collaboration across 3,000 teams and integrated 100+ research tools into one on-prem platform for global science operations.",
    href: "https://mattermost.com/customers/cern/",
  },
  {
    slug: "fujitsu",
    name: "Fujitsu",
    industry: "Enterprise IT & R&D",
    metric: "Self-hosted R&D control",
    benefit:
      "Powers the Biodrug Design Accelerator so specialized teams share sensitive discovery data in real time under full data ownership.",
    href: "https://mattermost.com/customers/fujitsu/",
  },
  {
    slug: "nri",
    name: "NRI",
    industry: "Consulting & financial IT",
    metric: "13,000 employees \u00b7 14 countries",
    benefit:
      "Replaced HipChat at scale for J-SOX-compliant collaboration, cutting meetings and connecting DevOps workflows across APAC.",
    href: "https://mattermost.com/customers/nri/",
  },
  {
    slug: "worldline",
    name: "Worldline",
    industry: "Payments & transactions",
    metric: "3,000 employees \u00b7 500+ teams",
    benefit:
      "Unified a global engineering culture with GitLab-integrated channels so distributed teams ship faster without context switching.",
    href: "https://mattermost.com/customers/worldline/",
  },
  {
    slug: "rte",
    name: "RTE",
    industry: "Critical infrastructure",
    metric: "Faster grid outage response",
    benefit:
      "France\u2019s electricity transmission operator uses Mattermost for real-time crisis coordination across maintenance, communications, and sales.",
    href: "https://mattermost.com/customers/rte/",
  },
  {
    slug: "almalinux",
    name: "AlmaLinux",
    industry: "Open source foundation",
    metric: "2,000+ members \u00b7 100k posts",
    benefit:
      "Built a global contributor community on Mattermost\u2014organized by project, integrated with Grafana, and aligned with open-source values.",
    href: "https://mattermost.com/customers/almalinux/",
  },
];

function CaseCard({ study, ariaHidden }: { study: CaseStudy; ariaHidden?: boolean }) {
  const logo = getCustomerLogoSrc(study.slug);
  return (
    <a
      href={study.href}
      target="_blank"
      rel="noreferrer"
      className="case-studies-marquee__card group"
      aria-hidden={ariaHidden || undefined}
      tabIndex={ariaHidden ? -1 : undefined}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-[7.5rem] shrink-0 items-center justify-start">
          {logo && (
            <img
              src={logo}
              alt={ariaHidden ? "" : study.name}
              className={cn("case-studies-marquee__logo", study.logoClassName)}
              loading="lazy"
              decoding="async"
            />
          )}
        </div>
        <span className="rounded-full bg-[var(--color-denim)]/8 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--color-denim)]">
          {study.industry}
        </span>
      </div>
      <p className="case-studies-marquee__metric">{study.metric}</p>
      <p className="case-studies-marquee__benefit">{study.benefit}</p>
      <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-denim)] transition-colors group-hover:text-[var(--color-marigold)]">
        Read case study
        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </a>
  );
}

export function CaseStudiesCarousel() {
  return (
    <section
      className="scroll-mt-24 border-t border-[var(--color-border)] bg-[var(--color-bg)] py-16 md:py-24"
      aria-labelledby="case-studies-heading"
    >
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-marigold)]">
            Customer outcomes
          </p>
          <h2
            id="case-studies-heading"
            className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl"
          >
            Trusted by the world's most demanding operators
          </h2>
          <p className="mt-4 text-[var(--color-fg-muted)]">
            From allied air mobility and national power grids to global research and payments—teams
            choose Mattermost when operational control, data sovereignty, and speed matter.
          </p>
        </div>
      </div>

      <div
        className="case-studies-marquee mt-10"
        role="region"
        aria-label="Customer case studies carousel"
      >
        <div className="case-studies-marquee__fade case-studies-marquee__fade--left" aria-hidden />
        <div className="case-studies-marquee__fade case-studies-marquee__fade--right" aria-hidden />
        <div className="case-studies-marquee__viewport">
          <div className="case-studies-marquee__track">
            {CASE_STUDIES.map((s) => (
              <CaseCard key={`a-${s.slug}`} study={s} />
            ))}
          </div>
          <div className="case-studies-marquee__track" aria-hidden>
            {CASE_STUDIES.map((s) => (
              <CaseCard key={`b-${s.slug}`} study={s} ariaHidden />
            ))}
          </div>
        </div>
      </div>

      <div className="container-page mt-8 text-center">
        <a
          href="#/customers"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-denim)] transition-colors hover:text-[var(--color-marigold)]"
        >
          View all customer stories
          <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}
