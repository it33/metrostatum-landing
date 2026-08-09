import { ArrowRight, Cloud, Lock, Network, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { LogoMarquee } from "./logo-marquee";
import { ProductCarousel } from "./product-carousel";
import { MissionVideo } from "./mission-video";
import { IMEExplorer } from "./ime-explorer";
import { PositioningCarousel } from "./positioning-carousel";
import { useT } from "@/i18n";

const CONTACT = "https://mattermost.com/contact-sales/";
const base = import.meta.env.BASE_URL;

export function LandingPage() {
  const t = useT();

  const deployOptions = [
    { icon: Cloud, titleKey: "deploy.sovereignCloud", bodyKey: "deploy.sovereignCloudBody" },
    { icon: Server, titleKey: "deploy.onPrem", bodyKey: "deploy.onPremBody" },
    { icon: Lock, titleKey: "deploy.airGapped", bodyKey: "deploy.airGappedBody" },
    { icon: Network, titleKey: "deploy.hybrid", bodyKey: "deploy.hybridBody" },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-fg)]">
      <SiteHeader />

      <div className="hero-top">
        <img
          className="hero-top__photo"
          src={`${base}images/hero-bg.webp`}
          alt=""
          aria-hidden
          fetchPriority="high"
        />
        <div className="hero-top__overlay" aria-hidden />

        <div className="hero-top__content flex min-h-[min(78vh,700px)] flex-col">
          <section className="relative flex flex-1 flex-col justify-center">
            <div className="container-page pb-16 pt-12 md:pb-20 md:pt-16">
              <div className="max-w-xl text-left md:max-w-2xl">
                <h1 className="text-balance font-display text-4xl font-bold tracking-[-0.02em] text-white sm:text-5xl md:text-[3.25rem] md:leading-[1.1]">
                  {t("hero.title")}
                </h1>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-white/90 sm:text-lg">
                  {t("hero.subtitle")}
                </p>
                <p className="mt-4 text-sm font-semibold tracking-wide text-white/80">
                  {t("hero.tagline")}
                </p>
                <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
                  <Button size="lg" asChild>
                    <a href={CONTACT} target="_blank" rel="noreferrer">
                      {t("hero.talkToExpert")}
                      <ArrowRight className="size-4" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10"
                    asChild
                  >
                    <a href="#ime">{t("hero.explorePlatform")}</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <LogoMarquee />
        </div>
      </div>

      <MissionVideo />


      <ProductCarousel />

      <div id="ime-wrap">
        <IMEExplorer />
      </div>

      <PositioningCarousel />

      <section className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] py-16 md:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-denim)]">
              {t("deploy.eyebrow")}
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              {t("deploy.title")}
            </h2>
            <p className="mt-4 text-[var(--color-fg-muted)]">{t("deploy.subtitle")}</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {deployOptions.map((d) => (
              <article
                key={d.titleKey}
                className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
              >
                <d.icon className="size-5 text-[var(--color-marigold)]" strokeWidth={1.75} />
                <h3 className="mt-4 text-sm font-semibold">{t(d.titleKey)}</h3>
                <p className="mt-2 text-sm text-[var(--color-fg-muted)]">{t(d.bodyKey)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] py-16 md:py-24">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-6 py-12 text-center md:px-12 md:py-16">
            <div className="relative">
              <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">{t("hero.title")}</h2>
              <p className="mx-auto mt-4 max-w-xl text-[var(--color-fg-muted)]">{t("hero.subtitle")}</p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <a href={CONTACT} target="_blank" rel="noreferrer">
                    {t("cta.talkToExpert")}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#ime">{t("cta.explorePlatform")}</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
