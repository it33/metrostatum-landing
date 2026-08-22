import { useEffect } from "react";
import { ArrowRight, Lock, Radio, Radar } from "lucide-react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { MissionVideo } from "./mission-video";
import { CONTACT_SALES } from "@/nav-config";

const base = import.meta.env.BASE_URL;

const PILLARS = [
  {
    id: "intelligence",
    icon: Radar,
    title: "Intelligence",
    body: "Speed analytic coordination with controlled channels, structured workflows, and integrations — keeping sensitive products inside the authorized boundary.",
    bullets: [
      "Segmented teams and channels for community-of-interest isolation",
      "Playbooks for production and crisis rhythms",
      "Searchable history across shifts",
    ],
  },
  {
    id: "mission-operations",
    icon: Radio,
    title: "Mission operations",
    body: "Coordinate joint and allied activity with assured messaging, playbooks, and federation — whether connected to the enterprise WAN or operating through constrained links.",
    bullets: [
      "Channels and playbooks as a common workspace",
      "Deploy close to the operator for DDIL conditions",
      "Federation for coalition coordination without a shared consumer tenant",
    ],
  },
  {
    id: "cyber-comms",
    icon: Lock,
    title: "Cyber communications",
    body: "Provide secure, attributable collaboration for cyber mission forces — integrated with operational workflows and defensive tooling.",
    bullets: [
      "Dedicated instances for cyber mission forces",
      "Playbook-driven response",
      "Integrations to security tooling",
    ],
  },
];

export function NationalSecurityPage({
  hashRoutes = false,
  initialSection,
}: {
  hashRoutes?: boolean;
  initialSection?: string;
}) {
  const customers = hashRoutes ? "#/customers/air-mobility-command" : "/customers/air-mobility-command";

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    const hash = window.location.hash.replace(/^#/, "");
    const fromHash = hash.includes("#") ? hash.split("#").pop() : hash.startsWith("/") ? "" : hash;
    const id = initialSection || fromHash;
    if (id && ["intelligence", "mission-operations", "cyber-comms", "video"].includes(id)) {
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    }
  }, [initialSection]);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-fg)]">
      <SiteHeader />

      <section className="relative overflow-hidden bg-[var(--color-denim)] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.55) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
          aria-hidden
        />
        <div className="container-page relative py-16 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-marigold)]">
            National security
          </p>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Sovereign collaboration for defense, intelligence, and allied missions
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            Intelligence, operations, and cyber teams get a self-hosted environment for mission
            traffic — with auditability and deployment flexibility aligned to Zero Trust and
            sovereign hosting.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={CONTACT_SALES}
              className="inline-flex h-11 items-center gap-2 rounded-md bg-[var(--color-marigold)] px-5 text-sm font-semibold text-[var(--color-black)] hover:bg-[var(--color-marigold-hover)]"
            >
              Talk to an expert
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#video"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-white/25 px-5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Watch the mission video
            </a>
          </div>
        </div>
      </section>

      <MissionVideo />

      <section className="border-t border-[var(--color-border)] py-16 md:py-24">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-marigold)]">
            Mission outcomes
          </p>
          <h2 className="mt-2 max-w-2xl text-3xl font-bold tracking-tight">
            One workspace for intelligence, operations, and cyber
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PILLARS.map((p) => (
              <article
                key={p.id}
                id={p.id}
                className="scroll-mt-40 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-card)]"
              >
                <p.icon className="size-8 text-[var(--color-marigold)]" strokeWidth={1.6} />
                <h3 className="mt-4 text-xl font-bold text-[var(--color-denim)]">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-fg-muted)]">{p.body}</p>
                <ul className="mt-4 space-y-2">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-[var(--color-fg-muted)]">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--color-marigold)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] py-16">
        <div className="container-page grid items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white">
            <img
              src={`${base}images/industries/defense.jpg`}
              alt="Air Mobility Command case study — ChatOps for a large-scale readiness exercise"
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-marigold)]">
              In the field
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
              Built for classified networks, the edge, and coalition operations
            </h2>
            <p className="mt-4 text-[var(--color-fg-muted)]">
              Support force collaboration, cyber operations, and coalition coordination with a
              platform designed for sovereignty, Zero Trust patterns, and degraded connectivity —
              including air-gapped and DDIL operating realities.
            </p>
            <a
              href={customers}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-denim)] hover:text-[var(--color-marigold)]"
            >
              Read the Air Mobility Command story
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] py-16">
        <div className="container-page flex flex-col items-start justify-between gap-6 rounded-[var(--radius-2xl)] bg-[var(--color-denim)] px-8 py-10 text-white md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Plan a national security deployment</h2>
            <p className="mt-2 max-w-xl text-white/80">
              Talk with a regional specialist about air-gapped, on-prem, and private-cloud
              collaboration for defense and intelligence missions.
            </p>
          </div>
          <a
            href={CONTACT_SALES}
            className="inline-flex h-11 shrink-0 items-center gap-2 rounded-md bg-[var(--color-marigold)] px-5 text-sm font-semibold text-[var(--color-black)] hover:bg-[var(--color-marigold-hover)]"
          >
            Talk to an expert
            <ArrowRight className="size-4" />
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
