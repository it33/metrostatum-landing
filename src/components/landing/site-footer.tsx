import { useT } from "@/i18n";

const base = import.meta.env.BASE_URL;

type FooterLink = { label: string; href: string };

const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#/about" },
      { label: "Newsroom", href: "https://mattermost.com/newsroom/" },
      { label: "Partners", href: "https://mattermost.com/partners/" },
      { label: "Careers", href: "https://mattermost.com/careers/" },
      { label: "Brand Guidelines", href: "https://mattermost.com/brand-guidelines/" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Platform Overview", href: "https://mattermost.com/platform-overview/" },
      { label: "Channels", href: "https://mattermost.com/channels/" },
      { label: "Playbooks", href: "https://mattermost.com/playbooks/" },
      { label: "Security", href: "https://mattermost.com/security/" },
      { label: "Customers", href: "https://mattermost.com/customers/" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "https://support.mattermost.com/" },
      { label: "Community", href: "https://community.mattermost.com/" },
      { label: "Contact Us", href: "https://mattermost.com/contact-sales/" },
    ],
  },
];

export function SiteFooter() {
  const t = useT();
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
          <p className="max-w-md text-sm text-white/70">{t("footer.tagline")}</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-white">{col.title}</p>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => {
                  const isInternal = link.href.startsWith("#");
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        {...(isInternal
                          ? {}
                          : { target: "_blank", rel: "noreferrer" })}
                        className="text-sm text-white/70 transition-colors hover:text-white"
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
        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
}
