const base = import.meta.env.BASE_URL;

/** Official wordmarks only — not implied partnerships. */
const MODELS: { name: string; src: string }[] = [
  { name: "OpenAI", src: `${base}images/ai-models/openai.svg` },
  { name: "Anthropic", src: `${base}images/ai-models/anthropic.svg` },
  { name: "Cohere", src: `${base}images/ai-models/cohere.svg` },
  { name: "Mistral", src: `${base}images/ai-models/mistral.svg` },
  { name: "Llama", src: `${base}images/ai-models/meta-ai.svg` },
  { name: "Grok", src: `${base}images/ai-models/grok.svg` },
];

function ModelTrack({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul className="byom-marquee__track" aria-hidden={ariaHidden || undefined}>
      {MODELS.map((m) => (
        <li key={`${ariaHidden ? "b" : "a"}-${m.name}`} className="byom-marquee__item">
          <img
            src={m.src}
            alt=""
            className="byom-marquee__icon"
            width={18}
            height={18}
          />
          <span className="byom-marquee__name">{m.name}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Animated BYOM logo strip — placed under the Select Use Case video.
 * Infinite left-scrolling loop of supported model wordmarks.
 */
export function AiModelLogos({ className = "" }: { className?: string }) {
  return (
    <div
      className={`byom-marquee ${className}`.trim()}
      role="region"
      aria-label="Bring Your Own Model — supported models"
    >
      <p className="byom-marquee__label">Bring Your Own Model (BYOM)</p>
      <div className="byom-marquee__shell">
        <div className="byom-marquee__fade byom-marquee__fade--left" aria-hidden />
        <div className="byom-marquee__fade byom-marquee__fade--right" aria-hidden />
        <div className="byom-marquee__viewport">
          <ModelTrack />
          <ModelTrack ariaHidden />
        </div>
      </div>
    </div>
  );
}
