import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import type { Leader } from "./leadership-types";

function linkedInUrl(vanity: string) {
  return `https://www.linkedin.com/in/${vanity}`;
}

let linkedInScriptPromise: Promise<void> | null = null;
function ensureLinkedInBadgeScript() {
  if (typeof window === "undefined") return Promise.resolve();
  const w = window as unknown as { LIRenderAll?: () => void };
  if (w.LIRenderAll) return Promise.resolve();
  if (!linkedInScriptPromise) {
    linkedInScriptPromise = new Promise((resolve) => {
      const existing = document.querySelector("script[data-linkedin-badge]");
      if (existing) {
        existing.addEventListener("load", () => resolve());
        if (w.LIRenderAll) resolve();
        return;
      }
      const s = document.createElement("script");
      s.src = "https://platform.linkedin.com/badges/js/profile.js";
      s.async = true;
      s.defer = true;
      s.dataset.linkedinBadge = "1";
      s.onload = () => resolve();
      s.onerror = () => resolve();
      document.body.appendChild(s);
    });
  }
  return linkedInScriptPromise;
}

function LeaderAvatar({ leader }: { leader: Leader }) {
  const [failed, setFailed] = useState(false);
  const useBadge = Boolean(leader.vanity) && !leader.photo;
  const showDirect = Boolean(leader.photo) && !failed;

  useEffect(() => {
    if (!useBadge) return;
    let cancelled = false;
    void ensureLinkedInBadgeScript().then(() => {
      if (cancelled) return;
      const w = window as unknown as { LIRenderAll?: () => void };
      setTimeout(() => w.LIRenderAll?.(), 100);
      setTimeout(() => w.LIRenderAll?.(), 600);
    });
    return () => {
      cancelled = true;
    };
  }, [useBadge, leader.vanity]);

  if (showDirect && leader.photo) {
    const img = (
      <img
        src={leader.photo}
        alt=""
        className="size-14 shrink-0 rounded-full object-cover ring-2 ring-[var(--color-denim)]/15"
        loading="lazy"
        onError={() => setFailed(true)}
      />
    );
    return leader.vanity ? (
      <a
        href={linkedInUrl(leader.vanity)}
        target="_blank"
        rel="noreferrer"
        className="shrink-0 transition-opacity hover:opacity-90"
        title={`View ${leader.name} on LinkedIn`}
      >
        {img}
      </a>
    ) : (
      img
    );
  }

  if (useBadge && leader.vanity) {
    return (
      <div
        className="linkedin-badge-wrap relative size-14 shrink-0 overflow-hidden rounded-full ring-2 ring-[var(--color-denim)]/15 bg-[var(--color-denim)]"
        title={`View ${leader.name} on LinkedIn`}
      >
        <div
          className="badge-base LI-profile-badge absolute left-1/2 top-0 -translate-x-1/2 scale-[0.42] origin-top"
          data-locale="en_US"
          data-size="medium"
          data-theme="light"
          data-type="VERTICAL"
          data-vanity={leader.vanity}
          data-version="v1"
        >
          <a
            className="badge-base__link LI-simple-link"
            href={`${linkedInUrl(leader.vanity)}?trk=profile-badge`}
          >
            {leader.name}
          </a>
        </div>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-sm font-bold tracking-wide text-white/80">
          {leader.initials}
        </div>
      </div>
    );
  }

  const initials = (
    <div
      className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[var(--color-denim)] text-sm font-bold tracking-wide text-white"
      aria-hidden
    >
      {leader.initials}
    </div>
  );
  if (leader.vanity) {
    return (
      <a
        href={linkedInUrl(leader.vanity)}
        target="_blank"
        rel="noreferrer"
        className="shrink-0 transition-opacity hover:opacity-90"
        title={`View ${leader.name} on LinkedIn`}
      >
        {initials}
      </a>
    );
  }
  return initials;
}

export function LeaderCard({ leader }: { leader: Leader }) {
  return (
    <article className="flex min-w-0 flex-col rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 md:p-5">
      <div className="flex items-start gap-3">
        <LeaderAvatar leader={leader} />
        <div className="min-w-0">
          <h3 className="text-sm font-semibold leading-snug text-[var(--color-fg)] md:text-base">{leader.name}</h3>
          <p className="mt-0.5 text-xs font-medium leading-snug text-[var(--color-denim)] md:text-sm">{leader.title}</p>
        </div>
      </div>
      <p className="mt-3 flex-1 text-xs leading-relaxed text-[var(--color-fg-muted)] md:text-sm">{leader.bio}</p>
      {leader.vanity ? (
        <a
          href={linkedInUrl(leader.vanity)}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-denim)] transition-colors hover:text-[var(--color-marigold)] md:text-sm"
        >
          LinkedIn
          <ArrowRight className="size-3.5" />
        </a>
      ) : null}
    </article>
  );
}
