import uniqueIcons from "@/data/marketplace-unique-icons.json";

const ICONS = uniqueIcons as { name: string; icon: string; slug: string }[];

function Track({
  hrefFor,
  ariaHidden,
}: {
  hrefFor: (slug: string) => string;
  ariaHidden?: boolean;
}) {
  return (
    <ul className="intg-marquee__track" aria-hidden={ariaHidden || undefined}>
      {ICONS.map((item) => (
        <li key={`${ariaHidden ? "b" : "a"}-${item.slug}`} className="intg-marquee__item">
          <a
            href={hrefFor(item.slug)}
            className="intg-marquee__link"
            title={item.name}
            tabIndex={ariaHidden ? -1 : undefined}
          >
            <img
              src={item.icon}
              alt={ariaHidden ? "" : item.name}
              className="intg-marquee__img"
              loading="lazy"
              onError={(e) => {
                const li = e.currentTarget.closest("li");
                if (li) li.style.display = "none";
              }}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Infinite logo carousel of unique marketplace integration icons. */
export function IntegrationLogoMarquee({ hrefFor }: { hrefFor: (slug: string) => string }) {
  const duration = Math.max(90, ICONS.length * 1.2);
  return (
    <div className="intg-marquee" role="region" aria-label="Integration logos">
      <div className="intg-marquee__fade intg-marquee__fade--left" aria-hidden />
      <div className="intg-marquee__fade intg-marquee__fade--right" aria-hidden />
      <div className="intg-marquee__viewport" style={{ ["--intg-duration" as string]: `${duration}s` }}>
        <Track hrefFor={hrefFor} />
        <Track hrefFor={hrefFor} ariaHidden />
      </div>
    </div>
  );
}
