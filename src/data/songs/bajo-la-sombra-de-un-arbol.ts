import type { Song } from "../types";

// TODO: pegar los versos de cada estrofa tal como los tenés.
// Estructura ya detectada (patrón chacarera 3-1-3-1): estrofas 1-3, estribillo
// (estrofa 4, se repite igual en la 8), estrofas 5-7, estribillo de nuevo.
export const bajoLaSombraDeUnArbol: Song = {
  id: "bajo-la-sombra-de-un-arbol",
  title: "Bajo la Sombra de un Árbol",
  artist: "Peteco Carabajal",
  durationSec: 225, // 3:45 — duración por defecto, ajustar si se confirma otra
  stanzas: [
    { lines: [] }, // estrofa 1
    { lines: [] }, // estrofa 2
    { lines: [] }, // estrofa 3
    { isChorus: true, lines: [] }, // estribillo
    { lines: [] }, // estrofa 5
    { lines: [] }, // estrofa 6
    { lines: [] }, // estrofa 7
    { isChorus: true, lines: [] }, // estribillo (misma letra que arriba)
  ],
};
