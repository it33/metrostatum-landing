const channels = [
  { name: "mission-ops", unread: 3, active: true },
  { name: "incident-bridge", unread: 0, active: false },
  { name: "devsecops", unread: 12, active: false },
  { name: "intel-watch", unread: 1, active: false },
];

const messages = [
  {
    user: "A. Chen",
    role: "SOC Lead",
    time: "14:02",
    body: "Playbook 7-A is live. Containment steps auto-assigned to night shift.",
  },
  {
    user: "Metro AI",
    role: "Agent",
    time: "14:03",
    body: "Summarized 41 related alerts. Priority: network lateral movement on segment B.",
    agent: true,
  },
  {
    user: "R. Okonkwo",
    role: "IR",
    time: "14:05",
    body: "Air-gapped bridge confirmed. No data egress outside sovereignty zone.",
  },
];

export function ProductPreview() {
  return (
    <div className="relative mx-auto w-full max-w-4xl">
      <div
        className="absolute -inset-4 rounded-[calc(var(--radius-2xl)+8px)] opacity-60 blur-2xl"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(43,124,255,0.28), transparent 65%)",
        }}
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] shadow-[var(--shadow-card)]">
        <div className="flex items-center gap-2 border-b border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
          <div className="ml-3 flex-1 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1.5 text-xs text-[var(--color-fg-subtle)] font-mono">
            ops.metrostatum.local / mission-ops
          </div>
          <span className="hidden sm:inline-flex items-center rounded-full border border-[var(--color-accent-dim)] bg-[color-mix(in_oklab,var(--color-accent)_12%,transparent)] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--color-accent)]">
            Classified · TS
          </span>
        </div>

        <div className="grid min-h-[320px] grid-cols-1 sm:grid-cols-[200px_1fr]">
          <aside className="hidden border-r border-[var(--color-border)] bg-[var(--color-surface)] p-3 sm:block">
            <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-fg-subtle)]">
              Channels
            </p>
            <ul className="space-y-0.5">
              {channels.map((ch) => (
                <li key={ch.name}>
                  <div
                    className={
                      ch.active
                        ? "flex items-center justify-between rounded-[var(--radius-sm)] bg-[color-mix(in_oklab,var(--color-primary)_18%,transparent)] px-2.5 py-2 text-sm text-[var(--color-fg)]"
                        : "flex items-center justify-between rounded-[var(--radius-sm)] px-2.5 py-2 text-sm text-[var(--color-fg-muted)]"
                    }
                  >
                    <span className="truncate font-mono text-xs">
                      <span className="text-[var(--color-fg-subtle)]">#</span> {ch.name}
                    </span>
                    {ch.unread > 0 && (
                      <span className="ml-2 rounded-full bg-[var(--color-primary)] px-1.5 py-0.5 text-[10px] font-semibold text-white">
                        {ch.unread}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <p className="mb-2 mt-5 px-2 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-fg-subtle)]">
              Playbooks
            </p>
            <div className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg)] px-2.5 py-2">
              <p className="text-xs font-medium text-[var(--color-fg)]">Incident 7-A</p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[var(--color-border)]">
                <div className="h-full w-2/3 rounded-full bg-[var(--color-accent)]" />
              </div>
              <p className="mt-1.5 text-[10px] text-[var(--color-fg-subtle)]">4 of 6 steps</p>
            </div>
          </aside>

          <div className="flex flex-col">
            <div className="border-b border-[var(--color-border)] px-4 py-3">
              <h3 className="text-sm font-semibold text-[var(--color-fg)]"># mission-ops</h3>
              <p className="text-xs text-[var(--color-fg-subtle)]">
                Zero-trust channel · 18 members · audit on
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-4 p-4">
              {messages.map((m) => (
                <div key={m.time + m.user} className="flex gap-3">
                  <div
                    className={
                      m.agent
                        ? "flex size-8 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-[color-mix(in_oklab,var(--color-accent)_20%,transparent)] text-[10px] font-bold text-[var(--color-accent)]"
                        : "flex size-8 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-surface-2)] text-[10px] font-bold text-[var(--color-fg-muted)]"
                    }
                  >
                    {m.user
                      .split(" ")
                      .map((p) => p[0])
                      .join("")}
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                      <span className="text-sm font-semibold text-[var(--color-fg)]">{m.user}</span>
                      <span className="text-[10px] uppercase tracking-wide text-[var(--color-fg-subtle)]">
                        {m.role}
                      </span>
                      <span className="font-mono text-[10px] text-[var(--color-fg-subtle)]">{m.time}</span>
                    </div>
                    <p className="mt-0.5 text-sm leading-relaxed text-[var(--color-fg-muted)]">{m.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-[var(--color-border)] p-3">
              <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2.5 text-sm text-[var(--color-fg-subtle)]">
                Message #mission-ops — or run a playbook
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
