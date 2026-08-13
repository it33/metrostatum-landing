import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function SnapCarousel({
  items,
  label,
  autoMs = 0,
  slideClassName,
}: {
  items: ReactNode[];
  label: string;
  autoMs?: number;
  slideClassName?: string;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const count = items.length;

  const go = useCallback(
    (next: number) => {
      const i = ((next % count) + count) % count;
      setIndex(i);
      const el = scrollerRef.current;
      const card = el?.children[i] as HTMLElement | undefined;
      card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    },
    [count],
  );

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const cards = Array.from(el.children) as HTMLElement[];
        const origin = el.scrollLeft + el.clientWidth * 0.35;
        let best = 0;
        let bestDist = Infinity;
        cards.forEach((c, i) => {
          const d = Math.abs(c.offsetLeft - origin);
          if (d < bestDist) {
            bestDist = d;
            best = i;
          }
        });
        setIndex(best);
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!autoMs || paused || count < 2) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => go(index + 1), autoMs);
    return () => window.clearInterval(id);
  }, [autoMs, paused, count, index, go]);

  return (
    <div
      className="snap-carousel"
      role="region"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setPaused(false);
      }}
    >
      <div ref={scrollerRef} className="snap-carousel__scroller">
        {items.map((item, i) => (
          <div key={i} className={cn("snap-carousel__slide", slideClassName)}>
            {item}
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-1 px-4">
        <button
          type="button"
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface)] text-[var(--color-denim)] hover:bg-[var(--color-bg-elevated)]"
          aria-label="Previous"
          onClick={() => go(index - 1)}
        >
          <ChevronLeft className="size-5" />
        </button>
        <div className="flex flex-wrap justify-center" role="tablist" aria-label={`${label} slides`}>
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-label={`Show item ${i + 1}`}
              aria-selected={i === index}
              className="inline-flex size-11 items-center justify-center"
              onClick={() => go(i)}
            >
              <span
                className={cn(
                  "rounded-full transition-all",
                  i === index
                    ? "h-2 w-8 bg-[var(--color-denim)]"
                    : "size-2 bg-[var(--color-border-strong)]",
                )}
              />
            </button>
          ))}
        </div>
        <button
          type="button"
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface)] text-[var(--color-denim)] hover:bg-[var(--color-bg-elevated)]"
          aria-label="Next"
          onClick={() => go(index + 1)}
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
