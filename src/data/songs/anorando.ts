import type { Song } from "../types";

export const anorando: Song = {
  id: "anorando",
  title: "Añorando",
  artist: "Mario Arnedo Gallo (Chacarera)",
  durationSec: 225, // 3:45 — misma duración por defecto que las demás, ajustar si se confirma otra
  stanzas: [
    {
      lines: [
        "Estoy en tierras lejanas",
        "Y una pena me domina",
        "Cuando recuerdo el pago",
        "El pago de Salavina.",
      ],
    },
    {
      lines: [
        "Mi ranchito rivereño",
        "Mi morterito añapero",
        "Mi linda majadita",
        "Y mi perrito ovejero.",
      ],
    },
    {
      lines: [
        "Mi guitarra compañera",
        "Con su fundita de lienzo",
        "Colgadita de un clavo",
        "Junto a mi catre de tientos.",
      ],
    },
    {
      isChorus: true,
      lines: [
        "Mañana de mañanita",
        "Y si mi zaino se anima",
        "De un galope tendido",
        "Me vuelvo pa´ Salavina.",
      ],
    },
    {
      lines: [
        "Temblor de algarrobales",
        "Sombritas de los aleros",
        "Si abre escuchao de fiestas",
        "A los viejos vidaleros.",
      ],
    },
    {
      lines: [
        "Arroyos de torcacitas",
        "vienen del monte vecino",
        "Y una canción que pasa veloz",
        "Las aguas del río.",
      ],
    },
    {
      lines: [
        "Parece patay la luna",
        "Tu cú tu cú las estrellas",
        "Plantitas de poleo",
        "Van aromando la senda.",
      ],
    },
    {
      isChorus: true,
      lines: [
        "Mañana de mañanita",
        "Y si mi zaino se anima",
        "De un galope tendido",
        "Me vuelvo pa´ Salavina.",
      ],
    },
  ],
};
