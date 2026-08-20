const base = import.meta.env.BASE_URL;

const MODELS: { name: string; src: string }[] = [
  { name: "OpenAI", src: `${base}images/ai-models/openai.svg` },
  { name: "Anthropic", src: `${base}images/ai-models/anthropic.svg` },
  { name: "Cohere", src: `${base}images/ai-models/cohere.svg` },
  { name: "Mistral", src: `${base}images/ai-models/mistral.svg` },
  { name: "Llama 4", src: `${base}images/ai-models/meta-ai.svg` },
];

/** Compact model-agnostic strip for the hero use-case module */
export function AiModelLogos({ className = "" }: { className?: string }) {
  return (
    <div
      className={`mb-3 flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-3 ${className}`}
      aria-label="Supported AI models"
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/55">
        Bring your own model
      </p>
      <ul className="flex flex-wrap items-center gap-x-3 gap-y-1.5 sm:gap-x-4">
        {MODELS.map((m) => (
          <li key={m.name} className="flex items-center gap-1.5">
            <img
              src={m.src}
              alt=""
              className="h-4 w-4 shrink-0 object-contain opacity-90 brightness-0 invert"
              width={16}
              height={16}
            />
            <span className="text-[11px] font-semibold tracking-wide text-white/80">
              {m.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
