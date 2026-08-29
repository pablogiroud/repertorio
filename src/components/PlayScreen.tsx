import { useRef, useState } from "react";
import type { Song } from "../data/types";
import { LyricsView } from "./LyricsView";
import { useAutoScroll } from "../hooks/useAutoScroll";

const MIN_FONT_REM = 1.5;
const MAX_FONT_REM = 5;
const FONT_STEP_REM = 0.25;

interface PlayScreenProps {
  song: Song;
  onBack: () => void;
}

export function PlayScreen({ song, onBack }: PlayScreenProps) {
  const [fontSizeRem, setFontSizeRem] = useState(2.5);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { isPlaying, toggle } = useAutoScroll(scrollRef, song.durationSec, fontSizeRem);

  const changeFontSize = (delta: number) => {
    setFontSizeRem((prev) =>
      Math.min(MAX_FONT_REM, Math.max(MIN_FONT_REM, prev + delta)),
    );
  };

  return (
    <div className="play-screen">
      <header className="play-header">
        <button className="back-button" onClick={onBack}>
          ← Volver
        </button>
        <span className="play-header-title">{song.title}</span>
      </header>

      <LyricsView ref={scrollRef} song={song} fontSizeRem={fontSizeRem} />

      <div className="controls-bar">
        <div className="font-controls">
          <button onClick={() => changeFontSize(-FONT_STEP_REM)} aria-label="Achicar letra">
            A−
          </button>
          <button onClick={() => changeFontSize(FONT_STEP_REM)} aria-label="Agrandar letra">
            A+
          </button>
        </div>
        <button className="play-pause-button" onClick={toggle}>
          {isPlaying ? "Pausar" : "Play"}
        </button>
      </div>
    </div>
  );
}
