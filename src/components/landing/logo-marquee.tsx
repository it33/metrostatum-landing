import { useT } from "@/i18n";
import {
  LANDING_MARQUEE_LOGOS,
  type CustomerLogo,
} from "./customer-logos";

export type LogoMarqueeProps = {
  /** Override logo set. Defaults to the curated landing pack. */
  logos?: CustomerLogo[];
  /** Accessible region label */
  ariaLabel?: string;
  className?: string;
};

function LogoRow({
  logos,
  ariaHidden = false,
}: {
  logos: CustomerLogo[];
  ariaHidden?: boolean;
}) {
  return (
    <ul className="logo-marquee__track" aria-hidden={ariaHidden || undefined}>
      {logos.map((logo) => (
        <li key={`${ariaHidden ? "b" : "a"}-${logo.slug}`} className="logo-marquee__item">
          <img
            src={logo.src}
            alt={ariaHidden ? "" : logo.name}
            className="logo-marquee__img"
            loading="lazy"
            decoding="async"
          />
        </li>
      ))}
    </ul>
  );
}

/**
 * Shared infinite logo strip used on the landing hero and the customers page.
 */
export function LogoMarquee({
  logos = LANDING_MARQUEE_LOGOS,
  ariaLabel,
  className,
}: LogoMarqueeProps) {
  const t = useT();
  const label = ariaLabel ?? t("logos.aria", "Customers with published case studies");

  if (logos.length === 0) return null;

  return (
    <div
      className={["logo-marquee", className].filter(Boolean).join(" ")}
      role="region"
      aria-label={label}
    >
      <div className="logo-marquee__fade logo-marquee__fade--left" aria-hidden />
      <div className="logo-marquee__fade logo-marquee__fade--right" aria-hidden />
      <div className="logo-marquee__viewport">
        <LogoRow logos={logos} />
        <LogoRow logos={logos} ariaHidden />
      </div>
    </div>
  );
}
