import type { Song } from "./types";
import { zambaDeUnPromesante } from "./songs/zamba-de-un-promesante";
import { anorando } from "./songs/anorando";
import { lunaCautiva } from "./songs/luna-cautiva";
import { laAlgarrobera } from "./songs/la-algarrobera";
import { zambitaDelMusiquero } from "./songs/zambita-del-musiquero";
import { chacareraDelSufrido } from "./songs/chacarera-del-sufrido";
import { cuandoMeAbandoneElAlma } from "./songs/cuando-me-abandone-el-alma";
import { bajoLaSombraDeUnArbol } from "./songs/bajo-la-sombra-de-un-arbol";
import { dejameQueMeVaya } from "./songs/dejame-que-me-vaya";
import { suenoDeAmor } from "./songs/sueno-de-amor";
import { chacareraParaMiVuelta } from "./songs/chacarera-para-mi-vuelta";

export const songs: Song[] = [
  zambaDeUnPromesante,
  anorando,
  lunaCautiva,
  laAlgarrobera,
  zambitaDelMusiquero,
  chacareraDelSufrido,
  cuandoMeAbandoneElAlma,
  bajoLaSombraDeUnArbol,
  dejameQueMeVaya,
  suenoDeAmor,
  chacareraParaMiVuelta,
];

export function getSongById(id: string): Song | undefined {
  return songs.find((s) => s.id === id);
}
