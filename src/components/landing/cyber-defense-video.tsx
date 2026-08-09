import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import {
  Captions,
  CaptionsOff,
  Expand,
  Minimize2,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";
import { cn } from "@/lib/utils";

const base = import.meta.env.BASE_URL;

/**
 * Transforming Cyber Defense Operations
 * Source: https://mattermost.com/video/transforming-cyber-defense-operations/
 * YouTube: https://youtu.be/QEYArydYd-A
 * Media: Wistia 7h53nd7mmb
 */
const VIDEO_SRC =
  "https://embed-ssl.wistia.com/deliveries/7e124a8ba71237119c53447a22ba88adb6d8b8d4.bin"; // 720p mp4
const VIDEO_SRC_HD =
  "https://embed-ssl.wistia.com/deliveries/4f6419499684b287c0e2781784d2d3ee42ef1e42.bin"; // 1080p
const POSTER_SRC =
  "https://embed-ssl.wistia.com/deliveries/1ecae4e4b350bc5c702b4e9dbaaf679f.bin";
const SOURCE_PAGE =
  "https://mattermost.com/video/transforming-cyber-defense-operations/";
/** English closed captions (Wistia + local mirror) */
const CAPTIONS_SRC = `${base}captions/transforming-cyber-defense-operations.en.vtt`;
const CAPTIONS_SRC_REMOTE =
  "https://fast.wistia.net/embed/captions/7h53nd7mmb.vtt";

export function CyberDefenseVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [fsActive, setFsActive] = useState(false);
  const [failed, setFailed] = useState(false);
  /** Closed captions on by default */
  const [captionsOn, setCaptionsOn] = useState(true);

  const applyCaptionsMode = useCallback((on: boolean) => {
    const v = videoRef.current;
    if (!v) return;
    const tracks = v.textTracks;
    // Prefer the first English captions track only (avoid double captions)
    let primary: TextTrack | null = null;
    for (let i = 0; i < tracks.length; i++) {
      const track = tracks[i]!;
      if (track.kind === "captions" || track.kind === "subtitles") {
        if (!primary) primary = track;
        else track.mode = "disabled";
      }
    }
    if (primary) primary.mode = on ? "showing" : "hidden";
  }, []);

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
    const onCanPlay = () => {
      void play();
      applyCaptionsMode(captionsOn);
    };
    const onLoadedData = () => applyCaptionsMode(captionsOn);
    v.addEventListener("canplay", onCanPlay);
    v.addEventListener("loadeddata", onLoadedData);
    const onTrackAdd = () => applyCaptionsMode(captionsOn);
    v.textTracks.addEventListener("addtrack", onTrackAdd);
    void play();
    applyCaptionsMode(captionsOn);
    const t = window.setTimeout(() => {
      if (!cancelled && v.readyState < 2) setFailed(true);
    }, 5000);
    return () => {
      cancelled = true;
      v.removeEventListener("canplay", onCanPlay);
      v.removeEventListener("loadeddata", onLoadedData);
      v.textTracks.removeEventListener("addtrack", onTrackAdd);
      window.clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only re-bind on mount; captions toggled separately
  }, [applyCaptionsMode]);

  useEffect(() => {
    applyCaptionsMode(captionsOn);
  }, [captionsOn, applyCaptionsMode]);

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

  const toggleCaptions = useCallback(() => {
    setCaptionsOn((on) => !on);
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
          const anyEl = el as HTMLElement & {
            webkitRequestFullscreen?: () => Promise<void> | void;
          };
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
      id="cyber-defense-video"
      className="scroll-mt-24 border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] py-16 md:py-24"
      aria-labelledby="cyber-defense-video-heading"
    >
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-marigold)]">
            Cyber defense operations
          </p>
          <h2
            id="cyber-defense-video-heading"
            className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl"
          >
            Transforming Cyber Defense Operations
          </h2>
          <p className="mt-4 text-[var(--color-fg-muted)]">
            See how Mattermost keeps security teams operational out-of-band—accelerating incident
            response, playbooks, and secure collaboration when other tools go dark.
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
            "mission-video group relative mx-auto mt-10 max-w-5xl overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-border-strong)] bg-[var(--color-black)] shadow-[var(--shadow-card)]",
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
                crossOrigin="anonymous"
                onClick={onVideoClick}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onError={() => setFailed(true)}
                onStalled={() => {
                  const v = videoRef.current;
                  if (v && v.readyState < 2 && v.currentTime === 0) setFailed(true);
                }}
                aria-label="Transforming Cyber Defense Operations with Mattermost — click for sound"
              >
                <source src={VIDEO_SRC} type="video/mp4" />
                <source src={VIDEO_SRC_HD} type="video/mp4" />
                <track
                  kind="captions"
                  src={CAPTIONS_SRC}
                  srcLang="en"
                  label="English"
                  default
                />
                <track
                  kind="captions"
                  src={CAPTIONS_SRC_REMOTE}
                  srcLang="en"
                  label="English"
                />
              </video>
            ) : (
              <iframe
                title="Transforming Cyber Defense Operations with Mattermost"
                src="https://fast.wistia.net/embed/iframe/7h53nd7mmb?autoPlay=true&muted=true&playsinline=true&seo=false&videoFoam=true&endVideoBehavior=loop&dnt=1&plugin%5Bcaptions-v1%5D%5Bon%5D=true"
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
              {!failed && (
                <ControlButton
                  label={captionsOn ? "Turn off captions" : "Turn on captions"}
                  onClick={toggleCaptions}
                  highlight={captionsOn}
                >
                  {captionsOn ? <Captions className="size-4" /> : <CaptionsOff className="size-4" />}
                  <span className="hidden text-xs font-medium sm:inline">
                    {captionsOn ? "CC on" : "CC off"}
                  </span>
                </ControlButton>
              )}
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
          Autoplays muted with closed captions on. Click for sound, toggle CC, or expand for
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
