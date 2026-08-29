import { useState } from "react";
import { songs, getSongById } from "./data/songs";
import { SongList } from "./components/SongList";
import { PlayScreen } from "./components/PlayScreen";

export default function App() {
  const [selectedSongId, setSelectedSongId] = useState<string | null>(null);
  const song = selectedSongId ? getSongById(selectedSongId) : undefined;

  return song ? (
    <PlayScreen song={song} onBack={() => setSelectedSongId(null)} />
  ) : (
    <SongList songs={songs} onSelect={setSelectedSongId} />
  );
}
