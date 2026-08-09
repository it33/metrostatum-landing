import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { Expand, Minimize2, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Assured Mission Partner Collaboration
 * Source: https://mattermost.com/video/assured-mission-partner-collaboration/
 * Media: Wistia l5j68nlim8
 */
const VIDEO_SRC =
  "https://embed-ssl.wistia.com/deliveries/71b422f8b87a096cdbe4c294f91ee9a1fefb8e6e.bin"; // 720p mp4
const VIDEO_SRC_HD =
  "https://embed-ssl.wistia.com/deliveries/fbd552c72b93bfee479003696ccd266b9d04173f.bin"; // 1080p
const POSTER_SRC =
  "https://embed-ssl.wistia.com/deliveries/657a70e2f23953d2eb50f9ffdf8cda2c.bin";
const SOURCE_PAGE =
  "https://mattermost.com/video/assured-mission-partner-collaboration/";

export function MissionVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [fsActive, setFsActive] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    let cancelled = false;
    const play = async () => {
      try {
        await v.play();
        if (!cancelled) setPlaying(true);
      } catch {
        if (!cancelled) setPlaying(false);
      }
    };
    const onCanPlay = () => { void play(); };
    v.addEventListener("canplay", onCanPlay);
    void play();
    // Fail over to Wistia embed if nothing is ready after a few seconds
    const t = window.setTimeout(() => {
      if (!cancelled && v.readyState < 2) setFailed(true);
    }, 5000);
    return () => {
      cancelled = true;
      v.removeEventListener("canplay", onCanPlay);
      window.clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    const onFs = () => {
      const fsEl =
        document.fullscreenElement ??
        (document as Document & { webkitFullscreenElement?: Element | null })
          .webkitFullscreenElement;
      const active = fsEl === frameRef.current;
      setFsActive(Boolean(active));
      if (!active) setExpanded(false);
      else setExpanded(true);
    };
    document.addEventListener("fullscreenchange", onFs);
    document.addEventListener("webkitfullscreenchange", onFs as EventListener);
    return () => {
      document.removeEventListener("fullscreenchange", onFs);
      document.removeEventListener("webkitfullscreenchange", onFs as EventListener);
    };
  }, []);

  const toggleMute = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    const next = !v.muted;
    v.muted = next;
    setMuted(next);
    if (!next) {
      void v
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
    }
  }, []);

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      void v
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    } else {
      v.pause();
      setPlaying(false);
    }
  }, []);

  const toggleExpand = useCallback(async () => {
    const el = frameRef.current;
    if (!el) return;
    try {
      const fsEl =
        document.fullscreenElement ??
        (document as Document & { webkitFullscreenElement?: Element | null })
          .webkitFullscreenElement;
      if (!fsEl) {
        if (el.requestFullscreen) {
          await el.requestFullscreen();
        } else {
          const anyEl = el as HTMLElement & { webkitRequestFullscreen?: () => Promise<void> | void };
          await anyEl.webkitRequestFullscreen?.();
        }
        setExpanded(true);
        setFsActive(true);
      } else {
        if (document.exitFullscreen) await document.exitFullscreen();
        setExpanded(false);
        setFsActive(false);
      }
    } catch {
      // CSS fallback expand when Fullscreen API is blocked
      setExpanded((e) => !e);
      setFsActive(false);
    }
  }, []);

  const onVideoClick = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.muted) {
      v.muted = false;
      setMuted(false);
      void v
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
    } else {
      togglePlay();
    }
  }, [togglePlay]);

  const cssExpanded = expanded && !fsActive;

  return (
    <section
      id="video"
      className="scroll-mt-24 border-t border-[var(--color-border)] bg-[var(--color-bg)] py-16 md:py-24"
      aria-labelledby="mission-video-heading"
    >
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-marigold)]">
            Mission partner collaboration
          </p>
          <h2
            id="mission-video-heading"
            className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl"
          >
            Assured Mission Partner Collaboration
          </h2>
          <p className="mt-4 text-[var(--color-fg-muted)]">
            See how Mattermost enables joint and allied operations with a secure, sovereign
            intelligent mission environment.
          </p>
        </div>

        {cssExpanded && (
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/75"
            aria-label="Close expanded video"
            onClick={() => setExpanded(false)}
          />
        )}

        <div
          ref={frameRef}
          className={cn(
            "group relative mx-auto mt-10 max-w-5xl overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-border-strong)] bg-[var(--color-black)] shadow-[var(--shadow-card)]",
            cssExpanded && "fixed inset-3 z-50 mt-0 max-w-none rounded-xl sm:inset-6",
            fsActive && "h-full w-full max-w-none rounded-none border-0",
          )}
        >
          <div className="pointer-events-none absolute inset-0 z-[2] rounded-[inherit] ring-1 ring-inset ring-white/10" />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-16 bg-gradient-to-b from-black/55 to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-24 bg-gradient-to-t from-black/70 to-transparent"
            aria-hidden
          />

          <div
            className={cn(
              "relative w-full bg-black",
              fsActive || cssExpanded ? "h-full min-h-[50vh]" : "aspect-video",
            )}
          >
            {!failed ? (
              <video
                ref={videoRef}
                className="h-full w-full cursor-pointer object-contain bg-black"
                poster={POSTER_SRC}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                controls={false}
                onClick={onVideoClick}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onError={() => setFailed(true)}
                onStalled={() => {
                  // If stream stalls cold, fall back to Wistia embed
                  const v = videoRef.current;
                  if (v && v.readyState < 2 && v.currentTime === 0) setFailed(true);
                }}
                aria-label="Assured Mission Partner Collaboration with Mattermost — click for sound"
              >
                <source src={VIDEO_SRC} type="video/mp4" />
                <source src={VIDEO_SRC_HD} type="video/mp4" />
              </video>
            ) : (
              <iframe
                title="Assured Mission Partner Collaboration with Mattermost"
                src="https://fast.wistia.net/embed/iframe/l5j68nlim8?autoPlay=true&muted=true&playsinline=true&seo=false&videoFoam=true&endVideoBehavior=loop&dnt=1"
                className="absolute inset-0 h-full w-full border-0"
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                allowFullScreen
                loading="eager"
              />
            )}

            {muted && !failed && (
              <button
                type="button"
                onClick={toggleMute}
                className="absolute left-1/2 top-1/2 z-[3] flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border border-white/20 bg-black/55 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-black/70"
              >
                <VolumeX className="size-4" />
                Click for sound
              </button>
            )}
          </div>

          <div className="absolute inset-x-0 bottom-0 z-[3] flex items-center justify-between gap-3 p-3 sm:p-4">
            <div className="flex items-center gap-2">
              <ControlButton label={playing ? "Pause" : "Play"} onClick={togglePlay}>
                {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
              </ControlButton>
              <ControlButton label={muted ? "Unmute" : "Mute"} onClick={toggleMute} highlight={muted}>
                {muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
                <span className="hidden text-xs font-medium sm:inline">
                  {muted ? "Sound off" : "Sound on"}
                </span>
              </ControlButton>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={SOURCE_PAGE}
                target="_blank"
                rel="noreferrer"
                className="hidden rounded-full border border-white/15 bg-black/45 px-3 py-2 text-xs text-white/80 backdrop-blur-sm transition hover:bg-black/60 hover:text-white sm:inline"
              >
                Watch on Mattermost
              </a>
              <ControlButton
                label={expanded ? "Exit expand" : "Expand"}
                onClick={() => void toggleExpand()}
              >
                {expanded ? <Minimize2 className="size-4" /> : <Expand className="size-4" />}
                <span className="hidden text-xs font-medium sm:inline">
                  {expanded ? "Exit" : "Expand"}
                </span>
              </ControlButton>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-4 max-w-3xl text-center text-xs text-[var(--color-fg-subtle)]">
          Autoplays muted. Click the video or “Click for sound” to enable audio. Use Expand for
          fullscreen.
        </p>
      </div>
    </section>
  );
}

function ControlButton({
  label,
  onClick,
  children,
  highlight,
}: {
  label: string;
  onClick: () => void;
  children: ReactNode;
  highlight?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-2 text-white backdrop-blur-sm transition",
        highlight
          ? "border-[var(--color-marigold)]/50 bg-[color-mix(in_oklab,var(--color-marigold)_18%,black)] hover:bg-[color-mix(in_oklab,var(--color-marigold)_28%,black)]"
          : "border-white/15 bg-black/45 hover:bg-black/65",
      )}
    >
      {children}
    </button>
  );
}
