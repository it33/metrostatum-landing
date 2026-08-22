import { BADGES } from "./leadership-data";

const base = import.meta.env.BASE_URL;

function Track({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <ul className="awards-marquee__track" aria-hidden={ariaHidden || undefined}>
      {BADGES.map((b) => {
        const img = (
          <img
            src={`${base}${b.src}`}
            alt={ariaHidden ? "" : b.alt}
            className="awards-marquee__img"
          />
        );
        const body = (
          <>
            {"href" in b && b.href && !ariaHidden ? (
              <a
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                className="awards-marquee__link"
                title={b.alt}
              >
                {img}
              </a>
            ) : (
              img
            )}
            <span className="awards-marquee__label">{b.label}</span>
            <span className="awards-marquee__year">{b.year}</span>
          </>
        );
        return (
          <li
            key={`${ariaHidden ? "b" : "a"}-${b.src}-${b.year}`}
            className={`awards-marquee__item${"wide" in b && b.wide ? " awards-marquee__item--wide" : ""}`}
          >
            {body}
          </li>
        );
      })}
    </ul>
  );
}

export function AwardsMarquee() {
  const duration = Math.max(180, BADGES.length * 14);
  return (
    <section className="border-b border-[var(--color-border)] bg-white py-6" aria-label="Awards and recognition">
      <div className="awards-marquee">
        <div className="awards-marquee__fade awards-marquee__fade--left" aria-hidden />
        <div className="awards-marquee__fade awards-marquee__fade--right" aria-hidden />
        <div
          className="awards-marquee__viewport"
          style={{ ["--awards-duration" as string]: `${duration}s` }}
        >
          <Track />
          <Track ariaHidden />
        </div>
      </div>
    </section>
  );
}
