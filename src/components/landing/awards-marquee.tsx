import { BADGES } from "./leadership-data";

const base = import.meta.env.BASE_URL;

function Track({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <ul className="awards-marquee__track" aria-hidden={ariaHidden || undefined}>
      {BADGES.map((b) => (
        <li
          key={`${ariaHidden ? "b" : "a"}-${b.src}-${b.year}`}
          className={`awards-marquee__item${"wide" in b && b.wide ? " awards-marquee__item--wide" : ""}`}
        >
          <img
            src={`${base}${b.src}`}
            alt={ariaHidden ? "" : b.alt}
            className="awards-marquee__img"
          />
          <span className="awards-marquee__label">{b.label}</span>
          <span className="awards-marquee__year">{b.year}</span>
        </li>
      ))}
    </ul>
  );
}

export function AwardsMarquee() {
  const duration = Math.max(180, BADGES.length * 14);
  return (
    <section className="border-b border-[var(--color-border)] bg-white py-8" aria-label="Awards and recognition">
      <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-marigold)]">
        Awards and recognition
      </p>
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
