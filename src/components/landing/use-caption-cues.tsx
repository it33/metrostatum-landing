import { useEffect, useState, type RefObject } from "react";

function cueText(cue: TextTrackCue): string {
  if (!("text" in cue)) return "";
  return String((cue as VTTCue).text)
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Native ::cue overlays sit on the video and cover product chrome.
 * Keep the track in "hidden" so cuechange still fires, and render text
 * in a dedicated bar below the picture.
 */
export function useCaptionCues(
  videoRef: RefObject<HTMLVideoElement | null>,
  captionsOn: boolean,
  sourceKey?: string,
) {
  const [text, setText] = useState("");

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      setText("");
      return;
    }

    let primary: TextTrack | null = null;

    const readCues = () => {
      if (!captionsOn || !primary) {
        setText("");
        return;
      }
      const cues = primary.activeCues;
      if (!cues || cues.length === 0) {
        setText("");
        return;
      }
      const parts: string[] = [];
      for (let i = 0; i < cues.length; i++) {
        const c = cues[i];
        if (c) parts.push(cueText(c));
      }
      setText(parts.filter(Boolean).join(" "));
    };

    const bind = () => {
      if (primary) primary.removeEventListener("cuechange", readCues);
      primary = null;
      const tracks = video.textTracks;
      for (let i = 0; i < tracks.length; i++) {
        const track = tracks[i]!;
        if (track.kind === "captions" || track.kind === "subtitles") {
          if (!primary) primary = track;
          else track.mode = "disabled";
        }
      }
      if (!primary) {
        setText("");
        return;
      }
      primary.mode = captionsOn ? "hidden" : "disabled";
      primary.addEventListener("cuechange", readCues);
      readCues();
    };

    bind();
    video.addEventListener("loadedmetadata", bind);
    video.addEventListener("loadeddata", bind);
    return () => {
      video.removeEventListener("loadedmetadata", bind);
      video.removeEventListener("loadeddata", bind);
      if (primary) primary.removeEventListener("cuechange", readCues);
    };
  }, [videoRef, captionsOn, sourceKey]);

  return captionsOn ? text : "";
}

export function VideoCaptionBar({
  text,
  visible,
  dark = true,
}: {
  text: string;
  visible: boolean;
  dark?: boolean;
}) {
  if (!visible) return null;
  return (
    <div
      className={
        dark
          ? "min-h-[2.75rem] shrink-0 border-t border-white/10 bg-black px-3 py-2.5 text-center text-sm leading-snug text-white"
          : "min-h-[2.75rem] shrink-0 border-t border-[var(--color-border)] bg-[var(--color-denim)] px-3 py-2.5 text-center text-sm leading-snug text-white"
      }
      aria-live="polite"
    >
      {text || <span className="text-white/35">&nbsp;</span>}
    </div>
  );
}
