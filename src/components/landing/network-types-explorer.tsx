import { useCallback, useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Globe,
  Layers,
  Radio,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const base = import.meta.env.BASE_URL;

/**
 * Interactive diagram: one platform across Public, Restricted/Secret, and DDIL networks.
 * Auto-highlights each section for 15s; commentary sits as a horizontal module under the image.
 */

type Region = {
  id: string;
  label: string;
  short: string;
  kicker: string;
  title: string;
  summary: string;
  detail: string;
  bullets: string[];
  icon: LucideIcon;
  box: { left: number; top: number; width: number; height: number };
};

const REGIONS: Region[] = [
  {
    id: "overview",
    label: "Overview",
    short: "All networks",
    kicker: "One platform",
    title: "Public, Restricted/Secret, and DDIL — one collaborative core",
    summary:
      "Mattermost spans every network type: the public internet, restricted and secret enclaves, and denied / degraded / intermittent / limited (DDIL) environments.",
    detail:
      "The same Intelligent Mission Environment powers out-of-band incident response, customer-controlled collaboration and AI, defense and intelligence operations, OT/ICS/SCADA coordination, and DDIL edge ops — without fracturing your stack across disconnected tools.",
    bullets: [
      "Single product family across classification boundaries",
      "Web, desktop, and mobile — standalone or embedded",
      "Designed for air-gapped and intermittently connected users",
      "Use cases from SOC to tactical edge on one architecture",
    ],
    icon: Layers,
    box: { left: 1, top: 9, width: 98, height: 89 },
  },
  {
    id: "public",
    label: "Public Internet",
    short: "Public",
    kicker: "Public internet / VPN end users",
    title: "Out-of-band IR and customer-controlled collaboration",
    summary:
      "On the public internet and VPN, teams run integrated cyber operations, agentic SOC workflows, and modern collaboration — including embedded experiences where operators already work.",
    detail:
      "Public-tier deployments support out-of-band incident response for integrated cyber operations and agentic SOC, plus customer-controlled collaboration and AI: standalone web, desktop, and mobile clients, and embedded experiences in enterprise productivity suites.",
    bullets: [
      "Out-of-band incident response for cyber operations",
      "Agentic SOC workflows on a sovereign control plane",
      "Standalone web, desktop, and mobile clients",
      "Embedded collaboration for everyday operator surfaces",
    ],
    icon: Globe,
    box: { left: 1, top: 10.5, width: 98, height: 28.5 },
  },
  {
    id: "restricted",
    label: "Restricted / Secret",
    short: "Restricted",
    kicker: "Air-gapped end users",
    title: "Defense, intelligence, and OT — fully disconnected",
    summary:
      "On restricted and secret networks, the same platform runs air-gapped for defense and intelligence operations and for OT/ICS/SCADA environments — web, desktop, and mobile inside the boundary.",
    detail:
      "Air-gapped deployments keep messaging, playbooks, boards, calls, and agents entirely inside classified or highly restricted enclaves. Defense and intelligence use cases share the architecture with industrial control and critical infrastructure operations.",
    bullets: [
      "Air-gapped web, desktop, and mobile clients",
      "Defense and intelligence operations use cases",
      "OT / ICS / SCADA operational collaboration",
      "No dependency on public internet reachability",
    ],
    icon: Shield,
    box: { left: 1, top: 39.5, width: 98, height: 27.5 },
  },
  {
    id: "ddil",
    label: "DDIL Network",
    short: "DDIL",
    kicker: "DDIL end users",
    title: "Mission partner, afloat, mobile, and tactical edge",
    summary:
      "In denied, degraded, intermittent, and limited environments, Mattermost supports mobile data centers, mission partner environments, afloat platforms, and the tactical edge.",
    detail:
      "DDIL operations need collaboration that survives bandwidth collapse, disconnection, and austere infrastructure — so command and coordination do not stop when the network does.",
    bullets: [
      "Mobile data center deployments",
      "Mission partner / coalition environments",
      "Afloat and maritime operational contexts",
      "Tactical edge nodes under constrained links",
    ],
    icon: Radio,
    box: { left: 1, top: 67.5, width: 98, height: 30.5 },
  },
];

const HOLD_MS = 15_000;

export function NetworkTypesExplorer() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const region = REGIONS[index]!;
  const count = REGIONS.length;
  const Icon = region.icon;

  const go = useCallback(
    (next: number) => {
      setIndex(((next % count) + count) % count);
      setProgress(0);
    },
    [count],
  );

  useEffect(() => {
    if (paused) return;
    const started = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const elapsed = now - started;
      const p = Math.min(1, elapsed / HOLD_MS);
      setProgress(p);
      if (p >= 1) {
        setIndex((i) => (i + 1) % count);
        setProgress(0);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused, count, index]);

  const { left, top, width, height } = region.box;
  const right = left + width;
  const bottom = top + height;

  return (
    <section
      id="networks"
      className="scroll-mt-24 border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] py-16 md:py-24"
      aria-labelledby="networks-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setPaused(false);
      }}
    >
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-marigold)]">
            Deploy across every network
          </p>
          <h2
            id="networks-heading"
            className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl"
          >
            One platform across every network type
          </h2>
          <p className="mt-4 text-[var(--color-fg-muted)]">
            Public internet, restricted/secret, and DDIL — the same collaborative core. Explore each
            tier; the diagram highlights as the guide updates.
          </p>
        </div>

        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-2"
          role="tablist"
          aria-label="Network sections"
        >
          {REGIONS.map((r, i) => (
            <button
              key={r.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              onClick={() => go(i)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                i === index
                  ? "border-[var(--color-marigold)] bg-[color-mix(in_oklab,var(--color-marigold)_14%,transparent)] text-[var(--color-fg)]"
                  : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-fg-muted)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)]",
              )}
            >
              {r.short}
            </button>
          ))}
        </div>

        {/* Full-width diagram */}
        <div className="mt-8 overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-border-strong)] bg-white shadow-[var(--shadow-card)]">
          <div className="relative w-full">
            <img
              src={`${base}images/network-types.png`}
              alt="Mattermost one platform across public internet, restricted and secret networks, and DDIL environments"
              className="block h-auto w-full select-none"
              width={2089}
              height={1179}
              draggable={false}
            />

            <div
              className="pointer-events-none absolute inset-0 z-[1] bg-black/40 transition-all duration-700"
              style={{
                opacity: region.id === "overview" ? 0.12 : 1,
                clipPath: `polygon(evenodd, 0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, ${left}% ${top}%, ${right}% ${top}%, ${right}% ${bottom}%, ${left}% ${bottom}%, ${left}% ${top}%)`,
              }}
              aria-hidden
            />

            <div
              className="pointer-events-none absolute z-[2] rounded-sm border-[3px] border-[var(--color-marigold)] shadow-[0_0_0_1px_rgba(255,188,31,0.4),0_0_32px_rgba(255,188,31,0.3)] transition-all duration-700 ease-out"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: `${width}%`,
                height: `${height}%`,
              }}
              aria-hidden
            />

            {REGIONS.filter((r) => r.id !== "overview").map((r) => {
              const i = REGIONS.findIndex((x) => x.id === r.id);
              return (
                <button
                  key={r.id}
                  type="button"
                  className={cn(
                    "absolute z-[3] rounded-sm transition-colors",
                    "hover:bg-[color-mix(in_oklab,var(--color-marigold)_8%,transparent)]",
                    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-marigold)]",
                  )}
                  style={{
                    left: `${r.box.left}%`,
                    top: `${r.box.top}%`,
                    width: `${r.box.width}%`,
                    height: `${r.box.height}%`,
                  }}
                  aria-label={`Jump to ${r.label}`}
                  onClick={() => go(i)}
                />
              );
            })}
          </div>

          <div className="flex items-center justify-between gap-3 border-t border-black/10 bg-[var(--color-surface)] px-3 py-2.5 sm:px-4">
            <p className="font-mono text-[11px] font-medium uppercase tracking-wider text-[var(--color-marigold)]">
              {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")} ·{" "}
              {region.label}
              <span className="ml-2 font-sans normal-case tracking-normal text-[var(--color-fg-subtle)]">
                {paused
                  ? "· paused"
                  : `· ${Math.max(0, Math.ceil((1 - progress) * 15))}s`}
              </span>
            </p>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                className="inline-flex size-9 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] text-[var(--color-fg)] hover:border-[var(--color-border-strong)]"
                aria-label="Previous section"
                onClick={() => go(index - 1)}
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                className="inline-flex size-9 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] text-[var(--color-fg)] hover:border-[var(--color-border-strong)]"
                aria-label="Next section"
                onClick={() => go(index + 1)}
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>

          <div className="h-1 w-full bg-[var(--color-border)]" aria-hidden>
            <div className="h-full bg-[var(--color-marigold)]" style={{ width: `${progress * 100}%` }} />
          </div>
        </div>

        {/* Horizontal commentary module under the image */}
        <div className="mt-5 overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]">
          <div className="grid gap-0 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            {/* Left: title + narrative */}
            <div className="border-b border-[var(--color-border)] p-5 sm:p-7 md:border-b-0 md:border-r">
              <div className="flex items-start gap-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-denim)] text-[var(--color-sky)]">
                  <Icon className="size-5" strokeWidth={1.75} />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-marigold)]">
                    {region.kicker}
                  </p>
                  <h3 className="mt-1.5 text-xl font-bold tracking-tight text-[var(--color-fg)] sm:text-2xl">
                    {region.title}
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-sm font-medium leading-relaxed text-[var(--color-fg)]/90 sm:text-[0.95rem]">
                {region.summary}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-fg-muted)]">{region.detail}</p>
            </div>

            {/* Right: bullets + section jump */}
            <div className="flex flex-col p-5 sm:p-7">
              <ul className="grid gap-2.5 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-2.5">
                {region.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5 text-sm text-[var(--color-fg-muted)]">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--color-marigold)]" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-auto border-t border-[var(--color-border)] pt-4 sm:mt-6">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-fg-subtle)]">
                  Jump to section
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {REGIONS.map((r, i) => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => go(i)}
                      className={cn(
                        "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors sm:text-sm",
                        i === index
                          ? "border-[var(--color-marigold)] bg-[color-mix(in_oklab,var(--color-marigold)_14%,transparent)] text-[var(--color-fg)]"
                          : "border-[var(--color-border)] text-[var(--color-fg-muted)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)]",
                      )}
                    >
                      {r.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-[var(--color-fg-subtle)]">
          Each section highlights for 15 seconds. Hover to pause · click a tier on the diagram or use
          the controls to jump.
        </p>
      </div>
    </section>
  );
}
