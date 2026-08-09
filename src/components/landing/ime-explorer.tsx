import { useCallback, useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Layers,
  Network,
  Radar,
  Server,
  Shield,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const base = import.meta.env.BASE_URL;

/**
 * IME explorer — slow pan/zoom with a clear focus mask.
 * Image is 1920×1080 (16:9). Viewport MUST match that AR so % boxes align.
 */

type Focus = {
  id: string;
  label: string;
  kicker: string;
  title: string;
  body: string;
  bullets: string[];
  icon: typeof Layers;
  originX: number;
  originY: number;
  scale: number;
  box: { left: number; top: number; width: number; height: number };
};

/**
 * Bands calibrated against ime.png + verified in browser screenshots:
 *  0–16%   title banner
 * 17–31%   USE CASES
 * 31–58%   APPLICATION
 * 60–77%   INTEGRATION
 * 81–95%   DEPLOYMENT
 */
const FOCUSES: Focus[] = [
  {
    id: "overview",
    label: "Overview",
    kicker: "Intelligent Mission Environment",
    title: "One platform. End-to-end mission control.",
    body: "Mattermost is a self-hosted, AI-powered collaborative workflow for defense, intelligence, security, and critical infrastructure enterprises — spanning use cases, applications, integrations, and sovereign deployment.",
    bullets: [
      "Purpose-built for high-stakes operations — not consumer chat",
      "Secure collaborative workflow from edge to strategic core",
      "Open, extensible architecture under your control",
    ],
    icon: Layers,
    originX: 50,
    originY: 50,
    scale: 1,
    box: { left: 1, top: 1, width: 98, height: 97 },
  },
  {
    id: "use-cases",
    label: "Use cases",
    kicker: "Mission outcomes",
    title: "Cyber Defense. DevSecOps. Mission Operations.",
    body: "Three primary mission patterns sit at the top of the IME: SOC/CERT and out-of-band response, developer and platform productivity, and critical command workflow from C2 to the tactical edge.",
    bullets: [
      "Cyber Defense — SOC/CERT ops, out-of-band IR, Red Team",
      "DevSecOps — productivity, CI/CD, platform eng, emergency comms",
      "Mission Operations — Zero Trust, C2 to tactical edge, joint ops",
    ],
    icon: Radar,
    originX: 8,
    originY: 24,
    scale: 1.95,
    box: { left: 3.5, top: 17.5, width: 93, height: 13 },
  },
  {
    id: "application",
    label: "Application",
    kicker: "Secure collaborative workflow",
    title: "Messaging, playbooks, calls, boards, and agents.",
    body: "The application layer unifies ChatOps and automation across desktop, web, mobile, and Microsoft Teams — with file sharing, screenshare, workflow automation, bots, agents, and open APIs under advanced security controls.",
    bullets: [
      "Messaging Collaboration — Channels for ChatOps",
      "Workflow Automation — Playbooks for SOPs and IR",
      "Audio & Screenshare — sovereign real-time Calls",
      "Project Tracking — Boards for Kanban & work management",
      "AI Agents & Open APIs — assistance inside the mission boundary",
    ],
    icon: Workflow,
    originX: 8,
    originY: 44,
    scale: 1.7,
    box: { left: 3.5, top: 31.5, width: 93, height: 26 },
  },
  {
    id: "integration",
    label: "Integration",
    kicker: "Integration & AI platform",
    title: "Layered extensibility. Multi-agent. Multi-LLM.",
    body: "Operational extensibility with pre-packaged connectors, automations, and templates — plus sovereign multi-agent / multi-LLM integration under a responsible AI control plane.",
    bullets: [
      "Pre-packaged & custom integrations, webhooks, slash commands, plugins",
      "Video meeting integrations (Teams, Zoom, Webex, and more)",
      "Sovereign AI via OpenAI-compatible APIs, RAG, semantic search",
      "MCP & agent-to-agent architecture without ceding data control",
    ],
    icon: Network,
    originX: 8,
    originY: 68,
    scale: 1.8,
    box: { left: 3.5, top: 60.5, width: 93, height: 16.5 },
  },
  {
    id: "deployment",
    label: "Deployment",
    kicker: "Sovereign, cyber-resilient",
    title: "Tactical edge to strategic core.",
    body: "Kubernetes-based orchestration on private, government, and air-gapped clouds. Scale from the tactical edge to geo-distributed ultra-high availability at the strategic core — with mission-ready security and resilience.",
    bullets: [
      "Runs edge, local datacenter, sovereign & global hyperscaler",
      "Azure, Oracle, AWS, and classified / DDIL environments",
      "Defense-grade controls, monitoring, and mobile security",
      "Scales to 200K+ users with geo-distributed HA",
    ],
    icon: Server,
    originX: 8,
    originY: 88,
    scale: 1.85,
    box: { left: 3.5, top: 81, width: 93, height: 15 },
  },
  {
    id: "security",
    label: "Security",
    kicker: "Mission-ready resilience",
    title: "Zero Trust by architecture — not by brochure.",
    body: "From classification banners and advanced information controls to air-gapped deployment, the IME is designed so sensitive collaboration never depends on consumer SaaS or uncontrolled public models.",
    bullets: [
      "Classified, air-gapped, and DDIL-ready operations",
      "Granular admin, ABAC, and auditability",
      "Sovereign AI keeps mission context inside your boundary",
      "Resilient when other collaboration systems fail",
    ],
    icon: Shield,
    // Zoom into security panel but anchor on its left edge so the heading stays visible
    originX: 56,
    originY: 88.5,
    scale: 2.15,
    box: { left: 54, top: 81, width: 42.5, height: 15 },
  },
];

const AUTO_MS = 10000;

export function IMEExplorer() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const focus = FOCUSES[index]!;
  const Icon = focus.icon;
  const count = FOCUSES.length;

  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  );

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, count, index]);

  const { left, top, width, height } = focus.box;
  const right = left + width;
  const bottom = top + height;
  const isOverview = focus.id === "overview";

  return (
    <section
      id="ime"
      className="scroll-mt-24 border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] py-16 md:py-24"
      aria-labelledby="ime-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setPaused(false);
      }}
    >
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-marigold)]">
            Intelligent Mission Environment
          </p>
          <h2
            id="ime-heading"
            className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl"
          >
            The full picture — explored layer by layer
          </h2>
          <p className="mt-4 text-[var(--color-fg-muted)]">
            Pan and zoom through the IME architecture diagram. Each stop unlocks commentary on use
            cases, applications, integrations, and sovereign deployment.
          </p>
        </div>

        <div
          className="mt-8 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="IME diagram regions"
        >
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
                  ? "border-[var(--color-marigold)] bg-[color-mix(in_oklab,var(--color-marigold)_14%,transparent)] text-[var(--color-fg)]"
                  : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-fg-muted)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)]",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-8">
          <div className="relative overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-border-strong)] bg-[var(--color-black)] shadow-[var(--shadow-card)]">
            {/* Fixed 16:9 stage matching ime.png — eliminates letterbox misalignment */}
            <div className="relative w-full" style={{ aspectRatio: "1920 / 1080" }} data-ime-stage>
              <div
                className="ime-pan absolute inset-0"
                style={{
                  transform: `scale(${focus.scale})`,
                  transformOrigin: `${focus.originX}% ${focus.originY}%`,
                }}
              >
                <img
                  src={`${base}images/product/ime.png`}
                  alt="Mattermost Intelligent Mission Environment architecture diagram"
                  className="absolute inset-0 h-full w-full select-none object-fill"
                  draggable={false}
                  width={1920}
                  height={1080}
                />

                <div
                  className="ime-mask pointer-events-none absolute inset-0 z-[1]"
                  style={{
                    opacity: isOverview ? 0 : 1,
                    background: "rgba(8, 12, 20, 0.7)",
                    clipPath: `polygon(evenodd, 0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, ${left}% ${top}%, ${right}% ${top}%, ${right}% ${bottom}%, ${left}% ${bottom}%, ${left}% ${top}%)`,
                  }}
                  aria-hidden
                />

                {!isOverview && (
                  <div
                    className="pointer-events-none absolute z-[2] rounded-[3px] border-[2.5px] border-[var(--color-marigold)] shadow-[0_0_0_1px_rgba(255,188,31,0.35),0_0_28px_rgba(255,188,31,0.22)]"
                    style={{
                      left: `${left}%`,
                      top: `${top}%`,
                      width: `${width}%`,
                      height: `${height}%`,
                    }}
                    aria-hidden
                  />
                )}
              </div>

              <div
                className="pointer-events-none absolute inset-0 z-[3] ring-1 ring-inset ring-white/10"
                aria-hidden
              />

              <div className="absolute bottom-3 left-3 right-3 z-[4] flex items-center justify-between gap-2">
                <p className="rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur-sm">
                  {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")} ·{" "}
                  {focus.label}
                </p>
                <div className="flex gap-1.5">
                  <button
                    type="button"
                    className="inline-flex size-9 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white backdrop-blur-sm hover:bg-black/70"
                    aria-label="Previous region"
                    onClick={() => go(index - 1)}
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  <button
                    type="button"
                    className="inline-flex size-9 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white backdrop-blur-sm hover:bg-black/70"
                    aria-label="Next region"
                    onClick={() => go(index + 1)}
                  >
                    <ChevronRight className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-[var(--radius-2xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-card)] sm:p-8 lg:min-h-full">
            <div className="mb-4 flex size-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-denim)] text-[var(--color-sky)]">
              <Icon className="size-5" strokeWidth={1.75} />
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-marigold)]">
              {focus.kicker}
            </p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-[var(--color-fg)] sm:text-[1.65rem]">
              {focus.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-fg-muted)] sm:text-base">
              {focus.body}
            </p>
            <ul className="mt-5 space-y-2.5">
              {focus.bullets.map((b) => (
                <li key={b} className="flex gap-2.5 text-sm text-[var(--color-fg-muted)]">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--color-marigold)]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-3 pt-8">
              <Button asChild>
                <a href="#capabilities">
                  Explore capabilities
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://mattermost.com/contact-sales/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Talk to an expert
                </a>
              </Button>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-[var(--color-fg-subtle)]">
          Slow pan/zoom with a clear focus window. Hover to pause · use chips or arrows to jump.
        </p>
      </div>
    </section>
  );
}
