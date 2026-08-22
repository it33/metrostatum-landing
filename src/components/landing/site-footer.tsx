import { Linkedin, Youtube } from "lucide-react";
import { CONTACT, FOOTER_COLUMNS, SOCIAL_LINKS } from "@/nav-config";

const base = import.meta.env.BASE_URL;

function XLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.727-8.835L1.254 2.25H8.08l4.25 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const SOCIAL_ICONS = {
  YouTube: Youtube,
  LinkedIn: Linkedin,
  X: XLogo,
};

function SocialRow() {
  return (
    <ul className="flex items-center gap-2">
      {SOCIAL_LINKS.map((s) => {
        const Icon = SOCIAL_ICONS[s.label];
        return (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${s.label} feed`}
              title={`${s.label} feed`}
              className="inline-flex size-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white hover:bg-white hover:text-[var(--color-denim)]"
            >
              <Icon className="size-4" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[var(--color-denim)] text-[var(--color-sky)]">
      <div className="container-page py-14 md:py-16">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <a href="#/" className="inline-flex items-center">
            <img
              src={`${base}images/brand/logo-horizontal-white.svg`}
              alt="Mattermost"
              className="h-7 w-auto"
            />
          </a>
          <div className="flex flex-col items-start gap-3 sm:items-end">
            <p className="max-w-md text-sm text-white/70">Deploy anywhere. Control everything.</p>
            <SocialRow />
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-white">{col.title}</p>
              <ul className="mt-3">
                {col.links.map((link) => {
                  const isInternal = link.href.startsWith("#");
                  return (
                    <li key={`${col.title}-${link.label}`}>
                      <a
                        href={link.href}
                        {...(isInternal ? {} : { target: "_blank", rel: "noreferrer" })}
                        className="inline-flex min-h-10 w-full items-center text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Mattermost, Inc. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href={CONTACT} className="font-semibold text-white/70 hover:text-white">
              Talk to an Expert
            </a>
            <SocialRow />
          </div>
        </div>
      </div>
    </footer>
  );
}
