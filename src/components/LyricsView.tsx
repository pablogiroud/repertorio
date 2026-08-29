import { forwardRef } from "react";
import type { Song } from "../data/types";

interface LyricsViewProps {
  song: Song;
  fontSizeRem: number;
}

export const LyricsView = forwardRef<HTMLDivElement, LyricsViewProps>(
  function LyricsView({ song, fontSizeRem }, ref) {
    return (
      <div
        ref={ref}
        className="lyrics-container"
        style={{ fontSize: `${fontSizeRem}rem` }}
      >
        {song.stanzas.map((stanza, i) => (
          <div className="stanza" key={i}>
            <div className="stanza-number">{i + 1}</div>
            {stanza.map((line, j) => (
              <p className="lyric-line" key={j}>
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>
    );
  },
);
