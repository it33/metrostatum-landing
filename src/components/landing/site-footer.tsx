import { CONTACT, FOOTER_COLUMNS } from "@/nav-config";

const base = import.meta.env.BASE_URL;

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
          <p className="max-w-md text-sm text-white/70">Deploy anywhere. Control everything.</p>
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
          <a
            href={CONTACT}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-white/70 hover:text-white"
          >
            Talk to an Expert
          </a>
        </div>
      </div>
    </footer>
  );
}
