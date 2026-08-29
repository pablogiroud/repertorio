export interface Stanza {
  lines: string[];
  /** Estribillo/coro: no se numera como estrofa y se resalta distinto al mostrarse. */
  isChorus?: boolean;
}

export interface Song {
  id: string;
  title: string;
  artist?: string;
  /** Duración total de la canción en segundos — define el ritmo del auto-scroll. */
  durationSec: number;
  /** Cada estrofa preserva el formato y los versos originales. */
  stanzas: Stanza[];
}
