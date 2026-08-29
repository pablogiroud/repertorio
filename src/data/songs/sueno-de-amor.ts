import type { Song } from "../types";

// TODO: pegar los versos de cada estrofa tal como los tenés.
// Estructura no encaja en el patrón fijo de zamba/chacarera (género sin
// confirmar) — respeté el orden de bloques tal cual los pasaste:
// 3 estrofas cortas, estribillo (se repite igual más abajo), 3 estrofas más
// (una de ellas — la marcada abajo — se repite 3 veces en total en tu texto,
// revisala vos y marcala como estribillo también si corresponde), estribillo,
// y la estrofa repetida una vez más al final.
export const suenoDeAmor: Song = {
  id: "sueno-de-amor",
  title: "Sueño de Amor",
  durationSec: 225, // 3:45 — duración por defecto, ajustar si se confirma otra
  stanzas: [
    { lines: [] }, // estrofa 1
    { lines: [] }, // estrofa 2
    { lines: [] }, // estrofa 3
    { isChorus: true, lines: [] }, // estribillo
    { lines: [] }, // estrofa 5 — esta se repite 3 veces en tu texto, revisar
    { lines: [] }, // estrofa 6
    { lines: [] }, // estrofa 7
    { lines: [] }, // repetición de la estrofa 5
    { isChorus: true, lines: [] }, // estribillo (misma letra que arriba)
    { lines: [] }, // repetición de la estrofa 5, otra vez
  ],
};
