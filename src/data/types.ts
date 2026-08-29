export interface Song {
  id: string;
  title: string;
  artist?: string;
  /** Duración total de la canción en segundos — define el ritmo del auto-scroll. */
  durationSec: number;
  /** Cada estrofa es un array ordenado de líneas, preservando el formato original. */
  stanzas: string[][];
}
