import type { Song } from "../types";

export const suenoDeAmor: Song = {
  id: "sueno-de-amor",
  title: "Sueño de Amor",
  durationSec: 225, // 3:45 — duración por defecto, ajustar si se confirma otra
  stanzas: [
    {
      lines: [
        "Dos corazones que se están mirando",
        "Que se están mirando, que se estan mirando"
      ]
    }, // estrofa 1
    {
      lines: [
        "Dos ilusiones se van enredando",
        "Se van enredando, se van enredando"
      ]
    }, // estrofa 2
    {
      lines: [
        "Andan cantando como una esperanza",
        "Como una esperanza, como una esperanza",
      ]
    }, // estrofa 3
    {
      isChorus: true,
      lines: [
        "Para comenzar a caminar",
        "Para madurar un sueño de amor",
        "Azul el cielo brilla en tu mirada",
        "Brilla en tu mirada"
      ]
    }, // estribillo
    {
      lines: [
        "Luz de mil cielos",
        "calor que me abraza, Calor que me abraza"
      ]
    }, // estrofa 5 — esta se repite 3 veces en tu texto, revisar
    {
      lines: [
        "Vos desde adentro",
        "que me va diciendo, Que me va diciendo"
      ]
    }, // estrofa 6
    {
      lines: [
        "Azul el cielo",
        "brilla en tu mirada, Brilla en tu mirada"
      ]
    }, // estrofa 7
    {
      isChorus: true, lines: [
        "Para comenzar a caminar",
        "Para madurar un sueño de amor",
        "Azul el cielo brilla en tu mirada",
        "Brilla en tu mirada"
      ]
    }, // estribillo (misma letra que arriba)
  ],
};
