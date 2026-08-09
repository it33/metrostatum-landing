import { createFileRoute, Link } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  return (
    <main className="grid min-h-screen place-items-center bg-[var(--color-bg)] px-6 py-16 text-[var(--color-fg)]">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <Link to="/" className="inline-flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface-2)]">
              <svg width="18" height="18" viewBox="0 0 32 32" fill="none" aria-hidden>
                <path
                  d="M8 22V10l5.5 7.5L19 10v12"
                  stroke="var(--color-primary)"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M22 10v12" stroke="var(--color-accent)" strokeWidth="2.6" strokeLinecap="round" />
              </svg>
            </span>
            <span className="text-sm font-semibold">Metrostatum</span>
          </Link>
          <h1 className="mt-6 text-2xl font-semibold tracking-tight">Sign in</h1>
          <p className="mt-2 text-sm text-[var(--color-fg-muted)]">
            Access your mission workspace.
          </p>
        </div>

        <div className="space-y-3 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
          {authEnabled ? (
            GROK_PROVIDERS.map((p) => (
              <Button
                key={p.providerId}
                type="button"
                variant="secondary"
                className="w-full"
                onClick={() => signIn(p.providerId, { callbackURL: "/" })}
              >
                Continue with {p.label}
              </Button>
            ))
          ) : (
            <p className="text-sm text-[var(--color-fg-muted)]">Sign-in is disabled.</p>
          )}
        </div>

        <p className="text-center text-sm text-[var(--color-fg-subtle)]">
          <Link to="/" className="text-[var(--color-primary)] hover:underline">
            Back to home
          </Link>
        </p>
      </div>
    </main>
  );
}
