import { ArrowRight } from "lucide-react";
import type { Leader } from "./leadership-types";
import { PRINCIPLES } from "./leadership-data";
import { LeaderCard } from "./leader-card";

function PrincipleCard({
  title,
  body,
  variant,
  ariaHidden,
}: {
  title: string;
  body: string;
  variant: (typeof PRINCIPLES)[number]["variant"];
  ariaHidden?: boolean;
}) {
  return (
    <article
      className={`principles-marquee__card principles-marquee__card--${variant}`}
      aria-hidden={ariaHidden || undefined}
    >
      <span className="principles-marquee__index" aria-hidden>
        {String(PRINCIPLES.findIndex((p) => p.title === title) + 1).padStart(2, "0")}
      </span>
      <h3 className="principles-marquee__title">{title}</h3>
      <p className="principles-marquee__body">{body}</p>
    </article>
  );
}

export function PrinciplesMarquee() {
  return (
    <div className="principles-marquee" role="region" aria-label="Leadership principles">
      <div className="principles-marquee__fade principles-marquee__fade--left" aria-hidden />
      <div className="principles-marquee__fade principles-marquee__fade--right" aria-hidden />
      <div className="principles-marquee__viewport">
        <div className="principles-marquee__track">
          {PRINCIPLES.map((p) => (
            <PrincipleCard key={`a-${p.title}`} title={p.title} body={p.body} variant={p.variant} />
          ))}
        </div>
        <div className="principles-marquee__track" aria-hidden>
          {PRINCIPLES.map((p) => (
            <PrincipleCard
              key={`b-${p.title}`}
              title={p.title}
              body={p.body}
              variant={p.variant}
              ariaHidden
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Desktop column layout by headcount:
 * 1–3 → single row of N
 * 4 → one row of 4
 * 5 → two rows (3 then 2) via 3-col grid — five-across is too tight with LinkedIn badges
 * 6+ → 3-col grid (wraps naturally)
 */
export function LeaderGroup({ title, leaders }: { title: string; leaders: Leader[] }) {
  const n = leaders.length;
  // Tailwind needs full class names at build time — map known sizes
  const colsClass =
    n <= 1
      ? "grid-cols-1"
      : n === 2
        ? "md:grid-cols-2"
        : n === 3
          ? "md:grid-cols-3"
          : n === 4
            ? "md:grid-cols-4"
            : "md:grid-cols-3"; // 5+ → 3-col so five becomes 3+2, six becomes 3+3

  return (
    <div className="mt-12">
      <h3 className="text-lg font-semibold tracking-tight text-[var(--color-fg)]">{title}</h3>
      <div className={`mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 ${colsClass}`}>
        {leaders.map((l) => (
          <LeaderCard key={l.name} leader={l} />
        ))}
      </div>
    </div>
  );
}
