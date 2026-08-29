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
        {song.stanzas.map((stanza, i) => {
          return (
            <div
              className={stanza.isChorus ? "stanza stanza--chorus" : "stanza"}
              key={i}
            >
              <div className="stanza-number">
                {stanza.isChorus ? "Estribillo" : i + 1}
              </div>
              {stanza.lines.map((line, j) => (
                <p className="lyric-line" key={j}>
                  {line}
                </p>
              ))}
            </div>
          );
        })}
      </div>
    );
  },
);
