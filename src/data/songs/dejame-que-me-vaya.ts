import type { Song } from "../types";

// TODO: pegar los versos de cada estrofa tal como los tenés.
// Estructura detectada: estrofas 1-3, estribillo (se repite igual más abajo),
// una interjección corta de una línea antes de la estrofa 4, estrofas 4-6,
// estribillo de nuevo.
export const dejameQueMeVaya: Song = {
  id: "dejame-que-me-vaya",
  title: "Déjame que me Vaya",
  artist: "Música: Roberto Ternán / Letra: Cuti Carabajal",
  durationSec: 225, // 3:45 — duración por defecto, ajustar si se confirma otra
  stanzas: [
    { lines: [] }, // estrofa 1
    { lines: [] }, // estrofa 2
    { lines: [] }, // estrofa 3
    { isChorus: true, lines: [] }, // estribillo
    { lines: [] }, // interjección corta (una línea, tipo grito/exclamación)
    { lines: [] }, // estrofa 4
    { lines: [] }, // estrofa 5
    { lines: [] }, // estrofa 6
    { isChorus: true, lines: [] }, // estribillo (misma letra que arriba)
  ],
};
