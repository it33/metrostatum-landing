import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import {
  EXECUTIVE,
  PRODUCT_ENG,
  GTM,
  OPS,
  OFFICES,
  RESOURCE_CARDS,
} from "./leadership-data";
import {
  PrinciplesMarquee,
  LeaderGroup,
} from "./leadership-ui";
import { AwardsMarquee } from "./awards-marquee";

const CONTACT = "#/contact-sales";
const base = import.meta.env.BASE_URL;

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

      <AwardsMarquee />

      <section className="py-16 md:py-24">
        <div className="container-page">
          <h2 className="max-w-3xl text-balance text-2xl font-bold tracking-tight md:text-3xl">
            Mattermost is the leading sovereign collaboration and AI automation platform for
            national security and critical infrastructure environments
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-[var(--color-fg-muted)]">
            <p>
              Mattermost is purpose-built for organizations that cannot compromise on security,
              compliance, or operational continuity. From air-gapped defense networks to regulated
              critical infrastructure, Mattermost delivers secure collaboration, workflow automation,
              and AI that stays under your control.
            </p>
            <p>
              Our platform runs where you need it—sovereign cloud, private cloud, on-premises, and
              disconnected edge—so mission teams can operate with confidence regardless of network
              conditions or classification requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] py-16 md:py-24">
        <div className="container-page">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Leadership Principles</h2>
          <p className="mt-3 max-w-2xl text-[var(--color-fg-muted)]">
            How we lead, decide, and deliver for the operators who depend on us.
          </p>
          <div className="mt-12">
            <PrinciplesMarquee />
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] py-16 md:py-24">
        <div className="mx-auto w-[min(100%-2rem,1280px)]">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Mattermost Leadership Team</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--color-fg-muted)]">
            <strong className="font-semibold text-[var(--color-fg)]">One team. One mission.</strong>{" "}
            The Mattermost leadership team is dedicated to the success of operators in national
            security, cybersecurity, and critical infrastructure. Our leaders bring deep domain
            expertise across military, intelligence, and mission-critical operations — with decades
            of combined experience at organizations like Microsoft, Cisco, Oracle, Ripjar, Check
            Point, and the U.S. Department of War.
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
                className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
              >
                <a
                  href={o.maps}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block aspect-[16/10] overflow-hidden bg-[var(--color-bg-elevated)]"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}${o.image}`}
                    alt={o.alt}
                    className="h-full w-full object-cover object-center"
                  />
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-3 py-2 text-[11px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                    Open in Maps
                  </span>
                </a>
                <div className="p-5">
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4 text-[var(--color-marigold)]" strokeWidth={1.75} />
                    <h3 className="text-sm font-semibold">{o.region}</h3>
                  </div>
                  <div className="mt-3 space-y-0.5 text-sm text-[var(--color-fg-muted)]">
                    {o.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
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
