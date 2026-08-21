import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "@/i18n/LanguageSwitcher";
import {
  CONTACT,
  TOP_NAV,
  type NavGroup,
  type NavLink,
  type TopNavItem,
} from "@/nav-config";

const base = import.meta.env.BASE_URL;

function isInternal(href: string) {
  return href.startsWith("#");
}

function LinkAttrs(href: string) {
  return isInternal(href) ? {} : { target: "_blank" as const, rel: "noreferrer" };
}

export function SiteHeader() {
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
      <div className="border-b border-[color-mix(in_oklab,#1e325c_12%,transparent)]">
        <div className="mx-auto flex min-h-[72px] max-w-[1200px] flex-wrap items-center gap-x-3 gap-y-2 px-4 py-2 sm:px-6 lg:px-8">
          <a href="#/" className="mr-2 flex shrink-0 items-center lg:mr-4" aria-label="Mattermost home">
            <img
              src={`${base}images/brand/logo-horizontal-denim.svg`}
              alt="Mattermost"
              className="h-7 w-auto"
            />
          </a>

          <nav className="ml-2 hidden min-w-0 flex-1 items-center gap-0.5 lg:flex" aria-label="Primary">
            {TOP_NAV.map((item) => (
              <DesktopNavItem
                key={item.label}
                item={item}
                activeMenu={activeMenu}
                openMenu={openMenu}
                scheduleClose={scheduleClose}
                setActiveMenu={setActiveMenu}
              />
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <LanguageSwitcher />
            <a
              href={CONTACT}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-md bg-[var(--color-denim)] px-4 py-2 text-[14px] font-semibold text-white hover:bg-[var(--color-denim-mid)] sm:inline-flex"
            >
              Talk to an expert
            </a>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-md border border-[var(--color-border)] lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="border-b border-[var(--color-border)] bg-white lg:hidden">
          <div className="mx-auto max-w-[1200px] px-4 py-2 sm:px-6">
            {TOP_NAV.map((item) => (
              <MobileNavItem key={item.label} item={item} onNavigate={() => setOpen(false)} />
            ))}
            <a
              href={CONTACT}
              target="_blank"
              rel="noreferrer"
              className="mt-2 mb-3 inline-flex w-full items-center justify-center rounded-md bg-[var(--color-denim)] px-4 py-3 text-[15px] font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Talk to an expert
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function DesktopNavItem({
  item,
  activeMenu,
  openMenu,
  scheduleClose,
  setActiveMenu,
}: {
  item: TopNavItem;
  activeMenu: string | null;
  openMenu: (label: string) => void;
  scheduleClose: () => void;
  setActiveMenu: (label: string | null) => void;
}) {
  if (item.kind === "link") {
    return (
      <a
        href={item.href}
        className="inline-flex items-center rounded-md px-3 py-2 text-[15px] font-medium text-[var(--color-black)]/90 hover:bg-[var(--color-bg-subtle)] hover:text-[var(--color-denim)]"
      >
        {item.label}
      </a>
    );
  }

  const isOpen = activeMenu === item.label;

  return (
    <div
      className="relative"
      onMouseEnter={() => openMenu(item.label)}
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
        onClick={() => setActiveMenu(isOpen ? null : item.label)}
      >
        {item.label}
        <ChevronDown className={cn("size-4 opacity-70 transition-transform", isOpen && "rotate-180")} />
      </button>
      {isOpen && (
        <div
          className={
            item.kind === "groups" || item.kind === "mega"
              ? "absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2"
              : "absolute left-0 top-full z-50 pt-2"
          }
        >
          {item.kind === "dropdown" && <SimpleDropdown links={item.children} />}
          {item.kind === "mega" && <MegaMenu columns={item.columns} />}
          {item.kind === "groups" && <GroupsMenu groups={item.groups} />}
        </div>
      )}
    </div>
  );
}

function SimpleDropdown({ links }: { links: NavLink[] }) {
  return (
    <div className="min-w-[280px] overflow-hidden rounded-xl border border-[color-mix(in_oklab,#1e325c_12%,transparent)] bg-white py-2 shadow-[0_12px_40px_rgba(30,50,92,0.12)]">
      {links.map((child) => (
        <a
          key={child.href}
          href={child.href}
          {...LinkAttrs(child.href)}
          className="block px-4 py-2.5 text-[14px] font-medium text-[var(--color-black)]/90 hover:bg-[var(--color-bg-elevated)] hover:text-[var(--color-denim)]"
        >
          {child.label}
        </a>
      ))}
    </div>
  );
}

function MegaMenu({ columns }: { columns: NavGroup[] }) {
  return (
    <div className="w-max min-w-[32rem] max-w-[min(48rem,calc(100vw-2rem))] rounded-xl border border-[color-mix(in_oklab,#1e325c_12%,transparent)] bg-white p-5 shadow-[0_12px_40px_rgba(30,50,92,0.12)]">
      <div className="grid grid-cols-3 gap-8">
        {columns.map((col) => (
          <div key={col.title} className="min-w-[10rem]">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--color-denim)]">
              {col.title}
            </p>
            <ul className="space-y-0.5">
              {col.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-md px-2 py-1.5 text-[14px] font-medium text-[var(--color-black)]/90 hover:bg-[var(--color-bg-elevated)] hover:text-[var(--color-denim)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function GroupsMenu({ groups }: { groups: NavGroup[] }) {
  return (
    <div className="w-max min-w-[42rem] max-w-[min(60rem,calc(100vw-2rem))] rounded-xl border border-[color-mix(in_oklab,#1e325c_12%,transparent)] bg-white p-5 shadow-[0_12px_40px_rgba(30,50,92,0.12)]">
      <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-5">
        {groups.map((g) => (
          <div key={g.title} className="min-w-[9.5rem]">
            <p className="mb-2 text-[11px] font-bold uppercase leading-snug tracking-[0.12em] text-[var(--color-denim)]">
              {g.title}
            </p>
            <ul className="space-y-0.5">
              {g.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block whitespace-nowrap rounded-md px-2 py-1.5 text-[14px] font-medium text-[var(--color-black)]/90 hover:bg-[var(--color-bg-elevated)] hover:text-[var(--color-denim)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileNavItem({ item, onNavigate }: { item: TopNavItem; onNavigate: () => void }) {
  if (item.kind === "link") {
    return (
      <div className="border-b border-[var(--color-border)]">
        <a
          href={item.href}
          className="block py-3 text-[15px] font-semibold"
          onClick={onNavigate}
        >
          {item.label}
        </a>
      </div>
    );
  }

  const groups: NavGroup[] =
    item.kind === "dropdown"
      ? [{ title: item.label, links: item.children }]
      : item.kind === "mega"
        ? item.columns
        : item.groups;

  return (
    <div className="border-b border-[var(--color-border)]">
      <details>
        <summary className="cursor-pointer list-none py-3 text-[15px] font-semibold">
          {item.label}
        </summary>
        <div className="pb-3 pl-2">
          {groups.map((g) => (
            <div key={g.title} className="mb-3">
              {groups.length > 1 && (
                <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--color-denim)]">
                  {g.title}
                </p>
              )}
              {g.links.map((c) => (
                <a
                  key={c.href}
                  href={c.href}
                  {...LinkAttrs(c.href)}
                  className="block py-2 text-sm text-[var(--color-fg-muted)]"
                  onClick={onNavigate}
                >
                  {c.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </details>
    </div>
  );
}
