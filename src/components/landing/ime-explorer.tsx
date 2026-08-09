import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type FocusId = "overview" | "use-cases" | "application" | "integration" | "deployment";

type Focus = {
  id: FocusId;
  label: string;
  title: string;
  summary: string;
  detail: string;
  box: { x: number; y: number; w: number; h: number };
  scale: number;
  tx: number;
  ty: number;
};

const FOCUSES: Focus[] = [
  {
    id: "overview",
    label: "Overview",
    title: "Intelligent Mission Environment",
    summary: "One platform spanning use cases, applications, integrations, and deployment options.",
    detail: "The full architecture for sovereign collaboration: purpose-built applications on a secure integration layer, deployable anywhere you control the infrastructure.",
    box: { x: 0, y: 0, w: 100, h: 100 },
    scale: 1,
    tx: 0,
    ty: 0,
  },
  {
    id: "use-cases",
    label: "Use cases",
    title: "Mission use cases",
    summary: "Security operations, incident response, ChatOps, and sovereign collaboration patterns.",
    detail: "From integrated security operations to out-of-band incident response and self-sovereign collaboration — patterns proven in national security and critical infrastructure.",
    box: { x: 2, y: 4, w: 96, h: 18 },
    scale: 1.55,
    tx: 8,
    ty: 18,
  },
  {
    id: "application",
    label: "Application",
    title: "Application layer",
    summary: "Channels, Playbooks, Boards, Calls, and Agents — the operator workspace.",
    detail: "Purpose-built applications for messaging, workflow automation, visual task management, sovereign audio, and human–machine teaming — all inside one audited environment.",
    box: { x: 2, y: 28, w: 96, h: 22 },
    scale: 1.7,
    tx: 10,
    ty: -2,
  },
  {
    id: "integration",
    label: "Integration",
    title: "Integration & control plane",
    summary: "APIs, plugins, webhooks, and secure connectors under your sovereignty boundary.",
    detail: "Open extensibility with plugins, slash commands, webhooks, and multi-agent / multi-LLM control — without shipping mission data to public SaaS.",
    box: { x: 2, y: 54, w: 96, h: 18 },
    scale: 1.75,
    tx: 10,
    ty: -22,
  },
  {
    id: "deployment",
    label: "Deployment",
    title: "Deploy anywhere",
    summary: "On-prem, private cloud, hybrid, or fully air-gapped — HA and geo-distributed.",
    detail: "Commercial-off-the-shelf platform that runs on infrastructure you control: sovereign cloud, on-prem, classified, and disconnected environments with high availability.",
    box: { x: 2, y: 76, w: 96, h: 20 },
    scale: 1.7,
    tx: 10,
    ty: -38,
  },
];

const AUTO_MS = 15000;

export function IMEExplorer() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const focus = FOCUSES[index]!;
  const isOverview = focus.id === "overview";

  const go = useCallback((next: number) => {
    setIndex(((next % FOCUSES.length) + FOCUSES.length) % FOCUSES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % FOCUSES.length), AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, index]);

  const box = focus.box;
  const clipPath = isOverview
    ? undefined
    : `polygon(evenodd, 0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, ${box.x}% ${box.y}%, ${box.x}% ${box.y + box.h}%, ${box.x + box.w}% ${box.y + box.h}%, ${box.x + box.w}% ${box.y}%, ${box.x}% ${box.y}%)`;

  return (
    <section
      id="ime"
      className="scroll-mt-24 border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] py-16 md:py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-denim)]">
            Intelligent Mission Environment
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            The full picture — explored layer by layer
          </h2>
          <p className="mt-4 text-[var(--color-fg-muted)]">
            Click a layer or use the controls. On mobile, commentary moves up when zoomed so it stays visible.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2" role="tablist" aria-label="IME layers">
          {FOCUSES.map((f, i) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              onClick={() => go(i)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                i === index
                  ? "border-[var(--color-denim)] bg-[color-mix(in_oklab,var(--color-denim)_8%,white)] text-[var(--color-denim)]"
                  : "border-[var(--color-border)] bg-white text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4">
          {!isOverview && (
            <div className="order-1 rounded-[var(--radius-xl)] border border-[var(--color-border-strong)] bg-white p-5 shadow-[var(--shadow-card)] sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[11px] font-medium uppercase tracking-wider text-[var(--color-denim)]">
                    {String(index).padStart(2, "0")} / {String(FOCUSES.length - 1).padStart(2, "0")} · Layer
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-[var(--color-fg)]">{focus.title}</h3>
                  <p className="mt-2 text-sm font-medium text-[var(--color-fg-muted)]">{focus.summary}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-fg-muted)]">{focus.detail}</p>
                </div>
                <div className="flex shrink-0 gap-2">
                  <button type="button" className="inline-flex size-10 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] hover:bg-[var(--color-bg-subtle)]" aria-label="Previous layer" onClick={() => go(index - 1)}>
                    <ChevronLeft className="size-5" />
                  </button>
                  <button type="button" className="inline-flex size-10 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] hover:bg-[var(--color-bg-subtle)]" aria-label="Next layer" onClick={() => go(index + 1)}>
                    <ChevronRight className="size-5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className={cn("order-2 overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-border-strong)] bg-[var(--color-denim)] shadow-[var(--shadow-card)]", isOverview && "order-1")}>
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <div className="ime-pan absolute inset-0 origin-center" style={{ transform: `scale(${focus.scale}) translate(${focus.tx}%, ${focus.ty}%)` }}>
                <div className="absolute inset-0 flex flex-col p-[3%] gap-[2%]">
                  {[
                    { id: "use-cases", label: "USE CASES", items: "SecOps · IR · ChatOps · Sovereign collab", bg: "rgba(255,188,31,0.2)" },
                    { id: "application", label: "APPLICATION", items: "Channels · Playbooks · Boards · Calls · Agents", bg: "rgba(197,210,236,0.25)" },
                    { id: "integration", label: "INTEGRATION", items: "APIs · Plugins · Webhooks · Multi-agent control", bg: "rgba(197,210,236,0.18)" },
                    { id: "deployment", label: "DEPLOYMENT", items: "On-prem · Private cloud · Air-gapped · Hybrid", bg: "rgba(197,210,236,0.12)" },
                  ].map((row) => (
                    <button key={row.id} type="button" onClick={() => go(FOCUSES.findIndex((f) => f.id === row.id))} className="flex flex-1 items-center gap-4 rounded-lg border border-white/15 px-4 text-left transition hover:border-[var(--color-marigold)]/60" style={{ background: row.bg }}>
                      <span className="w-28 shrink-0 text-[11px] font-bold uppercase tracking-wider text-[var(--color-marigold)] sm:w-36 sm:text-xs">{row.label}</span>
                      <span className="text-xs text-white/90 sm:text-sm">{row.items}</span>
                    </button>
                  ))}
                </div>
                {!isOverview && <div className="ime-mask pointer-events-none absolute inset-0 bg-black/55" style={{ clipPath }} />}
                {!isOverview && (
                  <div className="pointer-events-none absolute rounded-lg ring-2 ring-[var(--color-marigold)] ring-offset-2 ring-offset-transparent" style={{ left: `${box.x}%`, top: `${box.y}%`, width: `${box.w}%`, height: `${box.h}%` }} />
                )}
              </div>
            </div>
          </div>

          {isOverview && (
            <div className="order-2 rounded-[var(--radius-xl)] border border-[var(--color-border-strong)] bg-white p-5 shadow-[var(--shadow-card)] sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[11px] font-medium uppercase tracking-wider text-[var(--color-denim)]">Overview</p>
                  <h3 className="mt-1 text-xl font-bold">{focus.title}</h3>
                  <p className="mt-2 text-sm font-medium text-[var(--color-fg-muted)]">{focus.summary}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-fg-muted)]">{focus.detail}</p>
                </div>
                <div className="flex shrink-0 gap-2">
                  <button type="button" className="inline-flex size-10 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] hover:bg-[var(--color-bg-subtle)]" aria-label="Previous" onClick={() => go(index - 1)}><ChevronLeft className="size-5" /></button>
                  <button type="button" className="inline-flex size-10 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] hover:bg-[var(--color-bg-subtle)]" aria-label="Next" onClick={() => go(index + 1)}><ChevronRight className="size-5" /></button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
