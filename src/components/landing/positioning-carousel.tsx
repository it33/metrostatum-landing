import { useCallback, useEffect, useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Minus,
  Shield,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Cell = "yes" | "partial" | "no";

type CriteriaId = "security" | "adaptability" | "focus" | "efficiency" | "resilience";

const CRITERIA: {
  id: CriteriaId;
  name: string;
  description: string;
}[] = [
  {
    id: "security",
    name: "Security",
    description:
      "No kill switches. Zero-trust with sovereign control in private and air-gapped operations.",
  },
  {
    id: "adaptability",
    name: "Adaptability",
    description: "Meets rapidly evolving mission, interoperability, and agentic needs.",
  },
  {
    id: "focus",
    name: "Focus",
    description:
      "Purpose-built for critical infrastructure operations today, and the journey to an agentic future.",
  },
  {
    id: "efficiency",
    name: "Efficient",
    description:
      "Commercial-off-the-shelf platform, continuously secured, maintained, and upgraded.",
  },
  {
    id: "resilience",
    name: "Resilience",
    description:
      "Independent of global infrastructure. Deploys private cloud and on-prem with high availability and geo-distribution.",
  },
];

type Capability = {
  id: CriteriaId;
  purposeBuilt: Cell;
  alternative: Cell;
  note?: string;
};

type Slide = {
  id: string;
  category: string;
  categoryBlurb: string;
  problemTitle: string;
  problem: string;
  problemPoints: string[];
  solutionTitle: string;
  solution: string;
  solutionPoints: string[];
  capabilities: Capability[];
  icon: LucideIcon;
};

const SLIDES: Slide[] = [
  {
    id: "custom",
    category: "Custom Proprietary",
    categoryBlurb: "One-off systems built in-house or by a single integrator",
    problemTitle: "The problem with custom builds",
    problem:
      "Bespoke collaboration stacks can meet a narrow security bar, but they stall when missions evolve. Every new workflow, agent, or federation requirement becomes a multi-year engineering program — with no commercial cadence for security hardening or upgrades.",
    problemPoints: [
      "Zero-trust, ABAC, and information controls are incomplete or one-off",
      "Automation, AI, and secure federation rarely ship as first-class capabilities",
      "No continuous commercial upgrade path — every change is a custom project",
      "Interoperability with modern tool chains is slow and brittle",
    ],
    solutionTitle: "The purpose-built solution",
    solution:
      "A commercial-off-the-shelf platform that already carries sovereign security, open extensibility, and agentic workflow — so operators adapt missions without restarting the build.",
    solutionPoints: [
      "No kill switches — zero-trust with sovereign control in private and air-gapped ops",
      "Meets rapidly evolving mission, interoperability, and agentic needs",
      "Continuously secured, maintained, and upgraded as a product — not a project",
      "Independent of global consumer infrastructure; HA and geo-distributed by design",
    ],
    capabilities: [
      { id: "security", purposeBuilt: "yes", alternative: "partial", note: "ZT, ABAC, info-control gaps" },
      { id: "adaptability", purposeBuilt: "yes", alternative: "no" },
      { id: "focus", purposeBuilt: "yes", alternative: "partial", note: "Automation / AI / federation gaps" },
      { id: "efficiency", purposeBuilt: "yes", alternative: "no" },
      { id: "resilience", purposeBuilt: "yes", alternative: "yes" },
    ],
    icon: AlertTriangle,
  },
  {
    id: "saas",
    category: "Commercial SaaS",
    categoryBlurb: "Repurposed general-purpose collaboration tools",
    problemTitle: "The problem with commercial SaaS",
    problem:
      "Mass-market collaboration is efficient for everyday work — and a liability when the mission cannot leave a sovereignty boundary. Shared tenancy, public-cloud dependency, and consumer product roadmaps leave kill-switch, data-residency, and classified-ops requirements unmet.",
    problemPoints: [
      "No true sovereign or air-gapped control plane for private operations",
      "Zero-trust and advanced information controls are incomplete or absent",
      "Purpose-built mission workflow, automation, and agentic ops are not first-class",
      "Availability collapses when global commercial infrastructure is degraded or denied",
    ],
    solutionTitle: "The purpose-built solution",
    solution:
      "Deploy the same modern collaboration experience on infrastructure you control — private cloud, on-prem, or fully air-gapped — without trading away product velocity or enterprise efficiency.",
    solutionPoints: [
      "COTS platform velocity with sovereign deployment options",
      "Security architecture for private, classified, and DDIL environments",
      "Focused on critical infrastructure and mission operations — not the break room",
      "Resilient when public SaaS and global backbones are unavailable",
    ],
    capabilities: [
      { id: "security", purposeBuilt: "yes", alternative: "no" },
      { id: "adaptability", purposeBuilt: "yes", alternative: "no" },
      { id: "focus", purposeBuilt: "yes", alternative: "no" },
      { id: "efficiency", purposeBuilt: "yes", alternative: "yes" },
      { id: "resilience", purposeBuilt: "yes", alternative: "no" },
    ],
    icon: Sparkles,
  },
  {
    id: "niche-legacy",
    category: "Niche & Legacy",
    categoryBlurb: "Sub-scale niche offerings and abandoned on-prem systems",
    problemTitle: "The problem with niche and legacy stacks",
    problem:
      "Specialist messaging and aging on-prem suites often start with a security story, then fall behind on automation, AI, federation, and continuous hardening. Many lack high availability, geo-distribution, and a viable upgrade path for the next decade of mission work.",
    problemPoints: [
      "Partial zero-trust and information controls with uneven enforcement",
      "Gaps in automation, AI, CDS, and secure federation",
      "Weak upgrade cadence and cyber-hardening over time",
      "High-availability and geo-failover often missing or incomplete",
    ],
    solutionTitle: "The purpose-built solution",
    solution:
      "Replace fragmented niche tools and end-of-life stacks with one purpose-built platform that spans messaging, playbooks, boards, calls, and agents — continuously maintained for sovereign scale.",
    solutionPoints: [
      "One platform for secure collaborative workflow and human–machine teaming",
      "Open, extensible architecture that keeps pace with mission change",
      "Commercial lifecycle: continuous security, upgrades, and support",
      "Private cloud and on-prem HA that scales to large, geo-distributed deployments",
    ],
    capabilities: [
      { id: "security", purposeBuilt: "yes", alternative: "partial", note: "ZT, ABAC, info-control gaps" },
      { id: "adaptability", purposeBuilt: "yes", alternative: "no" },
      { id: "focus", purposeBuilt: "yes", alternative: "partial", note: "Automation / AI / CDS gaps" },
      { id: "efficiency", purposeBuilt: "yes", alternative: "partial", note: "Upgrade & hardening gaps" },
      { id: "resilience", purposeBuilt: "yes", alternative: "partial", note: "HA & failover often lacking" },
    ],
    icon: Shield,
  },
];

const AUTO_MS = 9000;

function CellBadge({ value, note }: { value: Cell; note?: string }) {
  if (value === "yes") {
    return (
      <span className="inline-flex flex-col items-start gap-0.5">
        <span className="inline-flex items-center gap-1 rounded-md bg-emerald-600/12 px-2.5 py-1 text-sm font-bold text-emerald-700">
          <Check className="size-3.5" strokeWidth={2.5} />
          Yes
        </span>
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span className="inline-flex flex-col items-start gap-0.5">
        <span className="inline-flex items-center gap-1 rounded-md bg-amber-500/15 px-2.5 py-1 text-sm font-bold text-amber-800">
          Partial
        </span>
        {note && (
          <span className="max-w-full break-words text-[10px] leading-snug text-[var(--color-fg-subtle)]">
            {note}
          </span>
        )}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-md bg-[var(--color-bg-subtle)] px-2.5 py-1 text-sm font-bold text-[var(--color-fg-subtle)]">
      <Minus className="size-3.5" />
      No
    </span>
  );
}

export function PositioningCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = SLIDES[index]!;
  const count = SLIDES.length;
  const Icon = slide.icon;

  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  );

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, count, index]);

  return (
    <section
      id="positioning"
      className="scroll-mt-24 border-t border-[var(--color-border)] bg-[var(--color-bg)] py-16 md:py-24"
      aria-labelledby="positioning-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setPaused(false);
      }}
    >
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-denim)]">
            One platform, every requirement
          </p>
          <h2
            id="positioning-heading"
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-[var(--color-fg)] md:text-4xl"
          >
            Purpose-Built Mattermost vs. {slide.category}
          </h2>
          <p className="mt-4 text-[var(--color-fg-muted)]">
            How a purpose-built platform compares to other market categories — without naming
            vendors. See the criteria first, then the problem and the solution.
          </p>
        </div>

        <div
          className="mt-8 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Market categories"
        >
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              onClick={() => go(i)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                i === index
                  ? "border-[var(--color-denim)] bg-[color-mix(in_oklab,var(--color-denim)_8%,white)] text-[var(--color-denim)]"
                  : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-fg-muted)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)]",
              )}
            >
              {s.category}
            </button>
          ))}
        </div>

        <div className="mt-8 min-w-0 overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-border-strong)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]">
          <div className="flex flex-col gap-4 border-b border-[var(--color-border)] bg-[var(--color-denim)] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-white/10 text-[var(--color-sky)]">
                <Icon className="size-5" strokeWidth={1.75} />
              </span>
              <div>
                <p className="font-mono text-[11px] font-medium uppercase tracking-wider text-[var(--color-marigold)]">
                  {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")} · Market
                  option
                </p>
                <h3 className="mt-0.5 text-xl font-bold text-white sm:text-2xl">
                  Purpose-Built Mattermost vs. {slide.category}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-sky)]">{slide.categoryBlurb}</p>
              </div>
            </div>
            <div className="flex shrink-0 gap-2 self-end sm:self-center">
              <button
                type="button"
                className="inline-flex size-11 items-center justify-center rounded-[var(--radius-md)] border border-white/20 bg-white/10 text-white hover:bg-white/15"
                aria-label="Previous category"
                onClick={() => go(index - 1)}
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                className="inline-flex size-11 items-center justify-center rounded-[var(--radius-md)] border border-white/20 bg-white/10 text-white hover:bg-white/15"
                aria-label="Next category"
                onClick={() => go(index + 1)}
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>

          <div className="border-b border-[var(--color-border)] px-5 py-6 sm:px-8 sm:py-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-fg-subtle)]">
              Critical capabilities
            </p>
            <p className="mt-1 w-full text-sm leading-relaxed text-[var(--color-fg-muted)]">
              Five criteria that separate purpose-built platforms from the rest of the market for
              sovereign, mission-critical operations.
            </p>

            <div className="mt-5 space-y-3 md:hidden">
              {slide.capabilities.map((c) => {
                const meta = CRITERIA.find((x) => x.id === c.id)!;
                return (
                  <div
                    key={c.id}
                    className="rounded-[var(--radius-lg)] border border-[var(--color-border)] p-4"
                  >
                    <p className="font-bold text-[var(--color-fg)]">{meta.name}</p>
                    <p className="mt-1 text-[13px] leading-relaxed break-words text-[var(--color-fg-muted)]">
                      {meta.description}
                    </p>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <div className="min-w-0 rounded-md bg-emerald-50 px-2.5 py-2">
                        <p className="text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
                          Purpose-built
                        </p>
                        <div className="mt-1">
                          <CellBadge value={c.purposeBuilt} />
                        </div>
                      </div>
                      <div
                        className={cn(
                          "min-w-0 rounded-md px-2.5 py-2",
                          c.alternative === "partial" && "bg-amber-50",
                          c.alternative === "no" && "bg-[var(--color-bg-subtle)]",
                          c.alternative === "yes" && "bg-emerald-50",
                        )}
                      >
                        <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--color-fg-subtle)]">
                          {slide.category}
                        </p>
                        <div className="mt-1">
                          <CellBadge value={c.alternative} note={c.note} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 hidden overflow-x-auto md:block">
              <table className="w-full table-fixed border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-[var(--color-border)]">
                    <th className="w-[46%] py-2.5 pr-4 font-semibold text-[var(--color-fg-muted)]">
                      Criteria
                    </th>
                    <th className="w-[22%] px-3 py-2.5 font-semibold text-emerald-700">
                      Purpose-built
                    </th>
                    <th className="w-[32%] px-3 py-2.5 font-semibold text-[var(--color-fg-muted)]">
                      {slide.category}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {slide.capabilities.map((c) => {
                    const meta = CRITERIA.find((x) => x.id === c.id)!;
                    return (
                      <tr
                        key={c.id}
                        className="border-b border-[var(--color-border)]/80 last:border-0 align-top"
                      >
                        <td className="py-4 pr-4">
                          <p className="font-bold text-[var(--color-fg)]">{meta.name}</p>
                          <p className="mt-1 text-[13px] leading-relaxed break-words text-[var(--color-fg-muted)]">
                            {meta.description}
                          </p>
                        </td>
                        <td className="bg-emerald-50 px-3 py-4">
                          <CellBadge value={c.purposeBuilt} />
                        </td>
                        <td
                          className={cn(
                            "px-3 py-4",
                            c.alternative === "partial" && "bg-amber-50",
                            c.alternative === "no" && "bg-[var(--color-bg-subtle)]/60",
                            c.alternative === "yes" && "bg-emerald-50",
                          )}
                        >
                          <CellBadge value={c.alternative} note={c.note} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid lg:grid-cols-2">
            <div className="border-b border-[var(--color-border)] p-5 sm:p-8 lg:border-b-0 lg:border-r">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-red-700">
                The problem
              </p>
              <h4 className="mt-2 text-lg font-bold text-[var(--color-fg)]">{slide.problemTitle}</h4>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-fg-muted)]">
                {slide.problem}
              </p>
              <ul className="mt-5 space-y-2.5">
                {slide.problemPoints.map((p) => (
                  <li key={p} className="flex min-w-0 gap-2.5 text-sm text-[var(--color-fg-muted)]">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-red-500" />
                    <span className="min-w-0 break-words">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[color-mix(in_oklab,var(--color-sky)_28%,white)] p-5 sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-denim)]">
                The solution · Purpose-built Mattermost
              </p>
              <h4 className="mt-2 text-lg font-bold text-[var(--color-fg)]">{slide.solutionTitle}</h4>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-fg-muted)]">
                {slide.solution}
              </p>
              <ul className="mt-5 space-y-2.5">
                {slide.solutionPoints.map((p) => (
                  <li key={p} className="flex min-w-0 gap-2.5 text-sm text-[var(--color-fg-muted)]">
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-[var(--color-denim)]"
                      strokeWidth={2.5}
                    />
                    <span className="min-w-0 break-words">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--color-border)] px-5 py-4 sm:px-8">
            <div className="flex" role="tablist" aria-label="Slide dots">
              {SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  aria-label={`Show ${s.category}`}
                  aria-selected={i === index}
                  className="inline-flex size-11 items-center justify-center"
                  onClick={() => go(i)}
                >
                  <span
                    className={cn(
                      "rounded-full transition-all",
                      i === index
                        ? "h-2 w-8 bg-[var(--color-denim)]"
                        : "size-2 bg-[var(--color-border-strong)] hover:bg-[var(--color-fg-subtle)]",
                    )}
                  />
                </button>
              ))}
            </div>
            <Button size="sm" asChild>
              <a href="https://mattermost.com/contact-sales/" target="_blank" rel="noreferrer">
                Talk to an expert
                <ArrowRight className="size-3.5" />
              </a>
            </Button>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-[var(--color-fg-subtle)]">
          Categories only — no vendor product names. Comparison reflects typical market posture for
          sovereign, mission-critical operations.
        </p>
      </div>
    </section>
  );
}
