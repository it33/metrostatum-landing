import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useT } from "@/i18n";
import { LanguageSwitcher } from "@/i18n/LanguageSwitcher";

const CONTACT = "https://mattermost.com/contact-sales/";
const TRY = "https://mattermost.com/sign-up/";

type NavChild = { labelKey: string; href: string };
type NavItem = { labelKey: string; href?: string; children?: NavChild[] };

const NAV_STRUCTURE: NavItem[] = [
  {
    labelKey: "nav.platform",
    children: [
      { labelKey: "nav.overview", href: "https://mattermost.com/platform-overview/" },
      { labelKey: "nav.channels", href: "https://mattermost.com/channels/" },
      { labelKey: "nav.playbooks", href: "https://mattermost.com/playbooks/" },
      { labelKey: "nav.integrations", href: "https://mattermost.com/integrations-overview/" },
      { labelKey: "nav.ai", href: "https://mattermost.com/agents/" },
      { labelKey: "nav.security", href: "https://mattermost.com/security/" },
    ],
  },
  {
    labelKey: "nav.solutions",
    children: [
      { labelKey: "nav.integratedSecurityOps", href: "https://mattermost.com/solutions/use-cases/integrated-security-operations/" },
      { labelKey: "nav.selfSovereign", href: "https://mattermost.com/solutions/use-cases/self-sovereign-collaboration/" },
      { labelKey: "nav.missionCriticalChatOps", href: "https://mattermost.com/solutions/use-cases/mission-critical-chatops/" },
      { labelKey: "nav.defense", href: "https://mattermost.com/solutions/industries/defense/" },
      { labelKey: "nav.criticalInfra", href: "https://mattermost.com/solutions/industries/critical-infrastructure/" },
    ],
  },
  { labelKey: "nav.pricing", href: "https://mattermost.com/pricing/" },
  {
    labelKey: "nav.partners",
    children: [
      { labelKey: "nav.partnerProgram", href: "https://mattermost.com/partners/" },
    ],
  },
  {
    labelKey: "nav.resources",
    children: [
      { labelKey: "nav.resourceLibrary", href: "https://mattermost.com/resources/" },
      { labelKey: "nav.blog", href: "https://mattermost.com/blog/" },
      { labelKey: "nav.customers", href: "https://mattermost.com/customers/" },
      { labelKey: "nav.documentation", href: "https://docs.mattermost.com/" },
    ],
  },
];

export function SiteHeader() {
  const t = useT();
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = (label: string) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setActiveMenu(label);
  };
  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setActiveMenu(null), 140);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white text-[var(--color-black)]",
        scrolled && "shadow-[0_1px_0_rgba(30,50,92,0.08),0_8px_24px_rgba(30,50,92,0.06)]",
      )}
    >
      <div className="bg-[var(--color-denim)] text-center text-[13px] leading-snug text-white">
        <a
          href="https://mattermost.com/enterprise/"
          target="_blank"
          rel="noreferrer"
          className="block px-4 py-2.5 transition-colors hover:bg-[var(--color-denim-mid)]"
        >
          {t("promo.text")}
        </a>
      </div>

      <div className="border-b border-[color-mix(in_oklab,#1e325c_12%,transparent)]">
        <div className="mx-auto flex min-h-[72px] max-w-[1200px] flex-wrap items-center gap-x-3 gap-y-2 px-4 py-2 sm:px-6 lg:px-8">
          <a href={import.meta.env.BASE_URL} className="mr-2 flex shrink-0 items-center lg:mr-4" aria-label="Mattermost home">
            <img
              src={`${import.meta.env.BASE_URL}images/brand/logo-horizontal-denim.svg`}
              alt="Mattermost"
              className="h-7 w-auto"
            />
          </a>

          <nav className="ml-2 hidden min-w-0 flex-1 items-center gap-0.5 lg:flex" aria-label="Primary">
            {NAV_STRUCTURE.map((item) => {
              const label = t(item.labelKey);
              if (!item.children) {
                return (
                  <a
                    key={item.labelKey}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md px-3 py-2 text-[15px] font-medium text-[var(--color-black)]/90 hover:bg-[var(--color-bg-subtle)] hover:text-[var(--color-denim)]"
                  >
                    {label}
                  </a>
                );
              }
              const isOpen = activeMenu === item.labelKey;
              return (
                <div
                  key={item.labelKey}
                  className="relative"
                  onMouseEnter={() => openMenu(item.labelKey)}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    type="button"
                    className={cn(
                      "inline-flex items-center gap-1 rounded-md px-3 py-2 text-[15px] font-medium transition-colors",
                      isOpen
                        ? "bg-[var(--color-bg-subtle)] text-[var(--color-denim)]"
                        : "text-[var(--color-black)]/90 hover:bg-[var(--color-bg-subtle)] hover:text-[var(--color-denim)]",
                    )}
                    aria-expanded={isOpen}
                    onClick={() => setActiveMenu(isOpen ? null : item.labelKey)}
                  >
                    {label}
                    <ChevronDown className={cn("size-4 opacity-70 transition-transform", isOpen && "rotate-180")} />
                  </button>
                  {isOpen && (
                    <div className="absolute left-0 top-full z-50 min-w-[260px] pt-2">
                      <div className="overflow-hidden rounded-xl border border-[color-mix(in_oklab,#1e325c_12%,transparent)] bg-white py-2 shadow-[0_12px_40px_rgba(30,50,92,0.12)]">
                        {item.children.map((child) => (
                          <a
                            key={child.labelKey}
                            href={child.href}
                            target="_blank"
                            rel="noreferrer"
                            className="block px-4 py-2.5 text-[14px] font-medium text-[var(--color-black)]/90 hover:bg-[var(--color-bg-elevated)] hover:text-[var(--color-denim)]"
                          >
                            {t(child.labelKey)}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="ml-auto hidden min-w-0 items-center justify-end gap-1.5 lg:flex">
            <LanguageSwitcher />
            <a
              href={TRY}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 shrink-0 items-center justify-center whitespace-nowrap rounded-md border-2 border-[var(--color-denim)] px-3 text-[13px] font-semibold text-[var(--color-denim)] hover:bg-[var(--color-denim)] hover:text-white"
            >
              {t("nav.tryMattermost")}
            </a>
            <a
              href={CONTACT}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 shrink-0 items-center justify-center whitespace-nowrap rounded-md bg-[var(--color-marigold)] px-3 text-[13px] font-semibold text-[var(--color-black)] hover:bg-[var(--color-marigold-hover)]"
            >
              {t("nav.contactSales")}
            </a>
          </div>

          <button
            type="button"
            className="ml-auto inline-flex size-11 items-center justify-center rounded-md border border-[color-mix(in_oklab,#1e325c_14%,transparent)] text-[var(--color-denim)] lg:hidden"
            aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div className={cn("border-b bg-white lg:hidden", open ? "block" : "hidden")}>
        <nav className="mx-auto max-h-[min(85vh,800px)] max-w-[1200px] overflow-y-auto px-4 py-3 sm:px-6">
          {NAV_STRUCTURE.map((item) => (
            <div key={item.labelKey} className="border-b border-[var(--color-border)] last:border-0">
              {item.children ? (
                <details>
                  <summary className="cursor-pointer list-none py-3 text-[15px] font-semibold">
                    {t(item.labelKey)}
                  </summary>
                  <div className="pb-2 pl-3">
                    {item.children.map((c) => (
                      <a
                        key={c.labelKey}
                        href={c.href}
                        target="_blank"
                        rel="noreferrer"
                        className="block py-2 text-sm text-[var(--color-fg-muted)]"
                        onClick={() => setOpen(false)}
                      >
                        {t(c.labelKey)}
                      </a>
                    ))}
                  </div>
                </details>
              ) : (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block py-3 text-[15px] font-semibold"
                  onClick={() => setOpen(false)}
                >
                  {t(item.labelKey)}
                </a>
              )}
            </div>
          ))}
          <div className="mt-3">
            <LanguageSwitcher variant="panel" />
          </div>
          <div className="mt-4 flex flex-col gap-2 pb-2">
            <a href={TRY} target="_blank" rel="noreferrer" className="inline-flex h-11 items-center justify-center rounded-md border-2 border-[var(--color-denim)] text-[15px] font-semibold text-[var(--color-denim)]">
              {t("nav.tryMattermost")}
            </a>
            <a href={CONTACT} target="_blank" rel="noreferrer" className="inline-flex h-11 items-center justify-center rounded-md bg-[var(--color-marigold)] text-[15px] font-semibold text-[var(--color-black)]">
              {t("nav.contactSales")}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
