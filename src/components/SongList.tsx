import type { Song } from "../data/types";

interface SongListProps {
  songs: Song[];
  onSelect: (id: string) => void;
}

export function SongList({ songs, onSelect }: SongListProps) {
  return (
    <div className="song-list-screen">
      <h1 className="app-title">Repertorio</h1>
      <ul className="song-list">
        {songs.map((song) => (
          <li key={song.id}>
            <button className="song-list-item" onClick={() => onSelect(song.id)}>
              <span className="song-title">{song.title}</span>
              {song.artist && <span className="song-artist">{song.artist}</span>}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
