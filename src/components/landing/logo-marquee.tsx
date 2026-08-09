import { useT } from "@/i18n";

const base = import.meta.env.BASE_URL;

/** Logos limited to published case studies on mattermost.com/customers */
const LOGOS: { name: string; src: string }[] = [
  { name: "U.S. Air Force", src: `${base}images/logos/usaf.svg` },
  { name: "Fujitsu", src: `${base}images/logos/fujitsu.webp` },
  { name: "CERN", src: `${base}images/logos/cern.webp` },
  { name: "RTE", src: `${base}images/logos/rte.webp` },
  { name: "NRI", src: `${base}images/logos/nri.webp` },
  { name: "Worldline", src: `${base}images/logos/worldline.webp` },
  { name: "AlmaLinux", src: `${base}images/logos/almalinux.webp` },
  { name: "Rocky Linux", src: `${base}images/logos/rocky.webp` },
  { name: "NetFoundry", src: `${base}images/logos/netfoundry.webp` },
  { name: "MedinCell", src: `${base}images/logos/medincell.svg` },
  { name: "LAIKA", src: `${base}images/logos/laika.svg` },
  { name: "Fairphone", src: `${base}images/logos/fairphone.svg` },
  { name: "Pramacom", src: `${base}images/logos/pramacom.webp` },
];

function LogoRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul className="logo-marquee__track" aria-hidden={ariaHidden || undefined}>
      {LOGOS.map((logo) => (
        <li key={`${ariaHidden ? "b" : "a"}-${logo.name}`} className="logo-marquee__item">
          <img src={logo.src} alt={ariaHidden ? "" : logo.name} className="logo-marquee__img" loading="lazy" decoding="async" />
        </li>
      ))}
    </ul>
  );
}

export function LogoMarquee() {
  const t = useT();
  return (
    <div className="logo-marquee" role="region" aria-label={t("logos.aria", "Customers with published case studies")}>
      <div className="logo-marquee__fade logo-marquee__fade--left" aria-hidden />
      <div className="logo-marquee__fade logo-marquee__fade--right" aria-hidden />
      <div className="logo-marquee__viewport">
        <LogoRow />
        <LogoRow ariaHidden />
      </div>
    </div>
  );
}
