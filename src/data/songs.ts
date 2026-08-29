import type { Song } from "./types";
import { zambaDeUnPromesante } from "./songs/zamba-de-un-promesante";
import { anorando } from "./songs/anorando";
import { lunaCautiva } from "./songs/luna-cautiva";
import { laAlgarrobera } from "./songs/la-algarrobera";
import { zambitaDelMusiquero } from "./songs/zambita-del-musiquero";

export const songs: Song[] = [
  zambaDeUnPromesante,
  anorando,
  lunaCautiva,
  laAlgarrobera,
  zambitaDelMusiquero,
];

export function getSongById(id: string): Song | undefined {
  return songs.find((s) => s.id === id);
}
