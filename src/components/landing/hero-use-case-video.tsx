import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import {
  Captions,
  CaptionsOff,
  Expand,
  Minimize2,
  Volume2,
  VolumeX,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useCaptionCues, VideoCaptionBar } from "./use-caption-cues";

const base = import.meta.env.BASE_URL;

/** Start playback this many seconds into each video */
const START_OFFSET_SEC = 15;
/** Auto-rotate dwell window (ms) — random between min and max */
const ROTATE_MIN_MS = 20_000;
const ROTATE_MAX_MS = 30_000;
/** Fade-to-white duration (ms) */
const FADE_MS = 700;

type UseCaseId = "mission" | "cyber";

type UseCase = {
  id: UseCaseId;
  label: string;
  src: string;
  srcHd: string;
  poster: string;
  captionsLocal: string;
  captionsRemote: string;
  aria: string;
};

const USE_CASES: UseCase[] = [
  {
    id: "mission",
    label: "Mission Operations",
    src: "https://embed-ssl.wistia.com/deliveries/71b422f8b87a096cdbe4c294f91ee9a1fefb8e6e.bin",
    srcHd: "https://embed-ssl.wistia.com/deliveries/fbd552c72b93bfee479003696ccd266b9d04173f.bin",
    poster: "https://embed-ssl.wistia.com/deliveries/657a70e2f23953d2eb50f9ffdf8cda2c.bin",
    captionsLocal: `${base}captions/assured-mission-partner-collaboration.en.vtt`,
    captionsRemote: "https://fast.wistia.net/embed/captions/l5j68nlim8.vtt",
    aria: "Assured Mission Partner Collaboration demo",
  },
  {
    id: "cyber",
    label: "Cyber Defense",
    src: "https://embed-ssl.wistia.com/deliveries/7e124a8ba71237119c53447a22ba88adb6d8b8d4.bin",
    srcHd: "https://embed-ssl.wistia.com/deliveries/4f6419499684b287c0e2781784d2d3ee42ef1e42.bin",
    poster: "https://embed-ssl.wistia.com/deliveries/1ecae4e4b350bc5c702b4e9dbaaf679f.bin",
    captionsLocal: `${base}captions/transforming-cyber-defense-operations.en.vtt`,
    captionsRemote: "https://fast.wistia.net/embed/captions/7h53nd7mmb.vtt",
    aria: "Transforming Cyber Defense Operations demo",
  },
];

function randomDwellMs() {
  return ROTATE_MIN_MS + Math.floor(Math.random() * (ROTATE_MAX_MS - ROTATE_MIN_MS + 1));
}

export function HeroUseCaseVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const rotateTimerRef = useRef<number | null>(null);
  const [activeId, setActiveId] = useState<UseCaseId>("mission");
  const [muted, setMuted] = useState(true);
  const [captionsOn, setCaptionsOn] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [fsActive, setFsActive] = useState(false);
  const [fading, setFading] = useState(false);
  const [userPausedRotate, setUserPausedRotate] = useState(false);

  const active = USE_CASES.find((u) => u.id === activeId)!;
  const cueText = useCaptionCues(videoRef, captionsOn, active.id);

  const applyCaptionsMode = useCallback((on: boolean) => {
    const v = videoRef.current;
    if (!v) return;
    const tracks = v.textTracks;
    let primary: TextTrack | null = null;
    for (let i = 0; i < tracks.length; i++) {
      const track = tracks[i]!;
      if (track.kind === "captions" || track.kind === "subtitles") {
        if (!primary) primary = track;
        else track.mode = "disabled";
      }
    }
    if (primary) primary.mode = on ? "hidden" : "disabled";
  }, []);

  const seekAndPlay = useCallback(async () => {
    const v = videoRef.current;
    if (!v) return;
    try {
      const startAt = () => {
        if (v.duration && Number.isFinite(v.duration)) {
          v.currentTime = Math.min(START_OFFSET_SEC, Math.max(0, v.duration - 1));
        } else {
          v.currentTime = START_OFFSET_SEC;
        }
      };
      if (v.readyState >= 1) startAt();
      else {
        await new Promise<void>((resolve) => {
          const onMeta = () => {
            v.removeEventListener("loadedmetadata", onMeta);
            startAt();
            resolve();
          };
          v.addEventListener("loadedmetadata", onMeta);
        });
      }
      v.muted = muted;
      await v.play();
    } catch {
      // Autoplay may be blocked until interaction
    }
  }, [muted]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.load();
    void seekAndPlay();
    applyCaptionsMode(captionsOn);
  }, [activeId, seekAndPlay, applyCaptionsMode, captionsOn]);

  useEffect(() => {
    applyCaptionsMode(captionsOn);
  }, [captionsOn, applyCaptionsMode]);

  useEffect(() => {
    const v = videoRef.current;
    if (v) v.muted = muted;
  }, [muted]);

  useEffect(() => {
    if (userPausedRotate || expanded || fsActive) {
      if (rotateTimerRef.current) {
        window.clearTimeout(rotateTimerRef.current);
        rotateTimerRef.current = null;
      }
      return;
    }

    const schedule = () => {
      if (rotateTimerRef.current) window.clearTimeout(rotateTimerRef.current);
      rotateTimerRef.current = window.setTimeout(() => {
        setFading(true);
        window.setTimeout(() => {
          setActiveId((id) => (id === "mission" ? "cyber" : "mission"));
          window.setTimeout(() => setFading(false), 80);
          schedule();
        }, FADE_MS);
      }, randomDwellMs());
    };
    schedule();
    return () => {
      if (rotateTimerRef.current) window.clearTimeout(rotateTimerRef.current);
    };
  }, [userPausedRotate, expanded, fsActive, activeId]);

  useEffect(() => {
    const onFs = () => {
      const fsEl =
        document.fullscreenElement ??
        (document as Document & { webkitFullscreenElement?: Element | null })
          .webkitFullscreenElement;
      const activeFs = fsEl === frameRef.current;
      setFsActive(Boolean(activeFs));
      if (!activeFs) setExpanded(false);
      else setExpanded(true);
    };
    document.addEventListener("fullscreenchange", onFs);
    document.addEventListener("webkitfullscreenchange", onFs as EventListener);
    return () => {
      document.removeEventListener("fullscreenchange", onFs);
      document.removeEventListener("webkitfullscreenchange", onFs as EventListener);
    };
  }, []);

  const selectUseCase = useCallback((id: UseCaseId) => {
    setUserPausedRotate(true);
    setFading(true);
    window.setTimeout(() => {
      setActiveId(id);
      window.setTimeout(() => setFading(false), 80);
    }, FADE_MS);
  }, []);

  const toggleMute = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    const next = !v.muted;
    v.muted = next;
    setMuted(next);
    if (!next) void v.play().catch(() => {});
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
        if (el.requestFullscreen) await el.requestFullscreen();
        else {
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

  const cssExpanded = expanded && !fsActive;

  return (
    <div className="hero-use-case w-full max-w-xl lg:max-w-none">
      <div
        className="mb-3 flex flex-wrap items-center gap-2"
        role="tablist"
        aria-label="Use case"
      >
        <span className="mr-1 text-xs font-semibold tracking-wide text-white/80">
          Select Use Case:
        </span>
        {USE_CASES.map((u) => {
          const selected = u.id === activeId;
          return (
            <button
              key={u.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => selectUseCase(u.id)}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide transition",
                selected
                  ? "bg-[var(--color-marigold)] text-[var(--color-denim)] shadow-sm"
                  : "border border-white/25 bg-white/10 text-white/90 hover:bg-white/18",
              )}
            >
              {u.label}
            </button>
          );
        })}
        {userPausedRotate && (
          <button
            type="button"
            onClick={() => setUserPausedRotate(false)}
            className="ml-1 text-[11px] font-medium text-white/60 underline-offset-2 hover:text-white hover:underline"
          >
            Resume auto-switch
          </button>
        )}
      </div>

      {cssExpanded && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/80"
          aria-label="Close expanded video"
          onClick={() => setExpanded(false)}
        />
      )}

      <div
        ref={frameRef}
        className={cn(
          "hero-use-case__frame mission-video group relative flex flex-col overflow-hidden rounded-[var(--radius-xl)] border border-white/15 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.35)]",
          cssExpanded && "fixed inset-3 z-50 max-w-none rounded-xl sm:inset-6",
          fsActive && "h-full w-full max-w-none rounded-none border-0",
        )}
      >
        <div className="pointer-events-none absolute inset-0 z-[2] rounded-[inherit] ring-1 ring-inset ring-white/10" />
        <div
          className={cn(
            "relative w-full bg-black",
            fsActive || cssExpanded ? "min-h-0 flex-1" : "aspect-video",
          )}
        >
          <video
            key={active.id}
            ref={videoRef}
            className="h-full w-full object-cover bg-black"
            poster={active.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            controls={false}
            crossOrigin="anonymous"
            aria-label={active.aria}
            onLoadedData={() => {
              applyCaptionsMode(captionsOn);
              void seekAndPlay();
            }}
          >
            <source src={active.src} type="video/mp4" />
            <source src={active.srcHd} type="video/mp4" />
            <track
              kind="captions"
              src={active.captionsLocal}
              srcLang="en"
              label="English"
              default
            />
            <track
              kind="captions"
              src={active.captionsRemote}
              srcLang="en"
              label="English"
            />
          </video>

          <div
            className={cn(
              "pointer-events-none absolute inset-0 z-[4] bg-white transition-opacity ease-in-out",
              fading ? "opacity-100" : "opacity-0",
            )}
            style={{ transitionDuration: `${FADE_MS}ms` }}
            aria-hidden
          />
        </div>
        <VideoCaptionBar text={cueText} visible={captionsOn} />
        <div className="flex flex-wrap items-center justify-center gap-2 border-t border-white/10 bg-black px-3 py-2.5 sm:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <ControlButton
              label={muted ? "Click for sound" : "Sound on"}
              onClick={toggleMute}
              highlight={muted}
            >
              {muted ? <VolumeX className="size-3.5" /> : <Volume2 className="size-3.5" />}
            </ControlButton>
            <ControlButton
              label={captionsOn ? "Captions on" : "Captions off"}
              onClick={toggleCaptions}
              highlight={captionsOn}
            >
              {captionsOn ? <Captions className="size-3.5" /> : <CaptionsOff className="size-3.5" />}
            </ControlButton>
          </div>
          <ControlButton
            label={expanded ? "Exit full screen" : "Full screen"}
            onClick={() => void toggleExpand()}
          >
            {expanded ? <Minimize2 className="size-3.5" /> : <Expand className="size-3.5" />}
          </ControlButton>
        </div>
      </div>
    </div>
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
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-3.5 text-xs font-semibold tracking-wide text-white backdrop-blur-sm transition",
        highlight
          ? "border-[var(--color-marigold)]/50 bg-[color-mix(in_oklab,var(--color-marigold)_18%,black)] hover:bg-[color-mix(in_oklab,var(--color-marigold)_28%,black)]"
          : "border-white/15 bg-black/45 hover:bg-black/65",
      )}
    >
      {children}
      <span>{label}</span>
    </button>
  );
}
