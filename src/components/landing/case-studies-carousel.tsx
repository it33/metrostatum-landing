import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { getCustomerLogoSrc } from "./customer-logos";

type CaseStudy = {
  slug: string;
  name: string;
  industry: string;
  metric: string;
  benefit: string;
  href: string;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "us-department-of-defense",
    name: "U.S. Air Force",
    industry: "Defense",
    metric: "4× mission info availability",
    benefit:
      "Rolled out to 48,000 DoD personnel in one week. Secure CUI collaboration replaced ad-hoc chat tools and sped pre-flight readiness.",
    href: "https://mattermost.com/customers/us-department-of-defense/",
  },
  {
    slug: "cern",
    name: "CERN",
    industry: "Scientific research",
    metric: "22,000 users · 100+ tools",
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
    metric: "13,000 employees · 14 countries",
    benefit:
      "Replaced HipChat at scale for J-SOX-compliant collaboration, cutting meetings and connecting DevOps workflows across APAC.",
    href: "https://mattermost.com/customers/nri/",
  },
  {
    slug: "worldline",
    name: "Worldline",
    industry: "Payments & transactions",
    metric: "3,000 employees · 500+ teams",
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
      "France’s electricity transmission operator uses Mattermost for real-time crisis coordination across maintenance, communications, and sales.",
    href: "https://mattermost.com/customers/rte/",
  },
  {
    slug: "almalinux",
    name: "AlmaLinux",
    industry: "Open source foundation",
    metric: "2,000+ members · 100k posts",
    benefit:
      "Built a global contributor community on Mattermost—organized by project, integrated with Grafana, and aligned with open-source values.",
    href: "https://mattermost.com/customers/almalinux/",
  },
];

function CaseCard({ study }: { study: CaseStudy }) {
  const logo = getCustomerLogoSrc(study.slug);
  return (
    <a
      href={study.href}
      target="_blank"
      rel="noreferrer"
      className="flex h-full min-h-[220px] flex-col gap-3 rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)] transition-shadow hover:border-[var(--color-border-strong)] hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-[7.5rem] shrink-0 items-center justify-start overflow-hidden">
          {logo ? (
            <img
              src={logo}
              alt={study.name}
              className="block h-7 max-h-9 w-auto max-w-[7rem] object-contain object-left"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <span className="text-sm font-bold text-[var(--color-denim)]">{study.name}</span>
          )}
        </div>
        <span className="rounded-full bg-[var(--color-denim)]/8 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--color-denim)]">
          {study.industry}
        </span>
      </div>
      <p className="text-[1.05rem] font-bold leading-snug tracking-tight text-[var(--color-denim)]">
        {study.metric}
      </p>
      <p className="flex-1 text-sm leading-relaxed text-[var(--color-fg-muted)]">{study.benefit}</p>
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-denim)]">
        Read case study
        <ArrowRight className="size-3.5" />
      </span>
    </a>
  );
}

/**
 * Self-contained horizontal case-study carousel.
 * Side arrows only — no scrollbar, no dots.
 */
export function CaseStudiesCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const indexRef = useRef(0);
  const count = CASE_STUDIES.length;

  const scrollToIndex = useCallback(
    (i: number) => {
      const el = scrollerRef.current;
      if (!el || count === 0) return;
      const card = el.children[i] as HTMLElement | undefined;
      if (!card) return;
      const padLeft = parseFloat(getComputedStyle(el).paddingLeft) || 0;
      el.scrollTo({ left: Math.max(0, card.offsetLeft - padLeft), behavior: "smooth" });
    },
    [count],
  );

  const go = useCallback(
    (next: number) => {
      if (count === 0) return;
      const i = ((next % count) + count) % count;
      indexRef.current = i;
      setIndex(i);
      scrollToIndex(i);
    },
    [count, scrollToIndex],
  );

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const cards = Array.from(el.children) as HTMLElement[];
        if (!cards.length) return;
        const origin = el.scrollLeft + el.clientWidth * 0.35;
        let best = 0;
        let bestDist = Infinity;
        cards.forEach((c, i) => {
          const d = Math.abs(c.offsetLeft - origin);
          if (d < bestDist) {
            bestDist = d;
            best = i;
          }
        });
        if (best !== indexRef.current) {
          indexRef.current = best;
          setIndex(best);
        }
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (paused || count < 2) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const id = window.setInterval(() => go(indexRef.current + 1), 5000);
    return () => window.clearInterval(id);
  }, [paused, count, go]);

  return (
    <section
      className="scroll-mt-24 border-t border-[var(--color-border)] bg-[var(--color-bg)] py-16 md:py-24"
      aria-labelledby="case-studies-heading"
    >
      <div className="container-page">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-marigold)]">
            Customer outcomes
          </p>
          <h2
            id="case-studies-heading"
            className="mt-3 text-[1.65rem] font-bold tracking-tight text-[var(--color-fg)] sm:text-3xl md:text-4xl md:whitespace-nowrap"
          >
            Trusted by the world's most demanding operators
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--color-fg-muted)]">
            From allied air mobility and national power grids to global research and payments—teams
            choose Mattermost when operational control, data sovereignty, and speed are vital.
          </p>
        </div>
      </div>

      <div
        className="relative mt-10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button
          type="button"
          aria-label="Previous case study"
          onClick={() => go(index - 1)}
          className="absolute left-2 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-white text-[var(--color-denim)] shadow-md hover:bg-[var(--color-bg-elevated)] md:left-4"
        >
          <ChevronLeft className="size-5" />
        </button>

        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto scroll-smooth px-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:px-12"
          style={{ scrollSnapType: "x mandatory" }}
          role="region"
          aria-label="Customer case studies"
        >
          {CASE_STUDIES.map((s) => (
            <div
              key={s.slug}
              className="w-[min(320px,82vw)] shrink-0"
              style={{ scrollSnapAlign: "start" }}
            >
              <CaseCard study={s} />
            </div>
          ))}
        </div>

        <button
          type="button"
          aria-label="Next case study"
          onClick={() => go(index + 1)}
          className="absolute right-2 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-white text-[var(--color-denim)] shadow-md hover:bg-[var(--color-bg-elevated)] md:right-4"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      <div className="container-page mt-8 text-center">
        <a
          href="#/customers"
          className="inline-flex min-h-11 items-center gap-1.5 px-2 text-sm font-semibold text-[var(--color-denim)] transition-colors hover:text-[var(--color-marigold)]"
        >
          View all customer stories
          <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}
