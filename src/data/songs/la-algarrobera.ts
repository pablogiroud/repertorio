import type { Song } from "../types";

export const laAlgarrobera: Song = {
  id: "la-algarrobera",
  title: "La Algarrobera",
  artist: "Letra: Morenito Suárez / Música: J. Geréz (Chacarera)",
  durationSec: 225, // 3:45 — duración por defecto, ajustar si se confirma otra
  stanzas: [
    {
      lines: [
        "Por el monte de Santiago",
        "En medio 'e los algarrobales",
        "Yo encontré esta chacarera",
        "Pa'l tiempo en los carnavales",
      ],
    },
    {
      lines: [
        "Le llaman: \"La Algarrobera\"",
        "Vaya a saber las razones",
        "Yo digo que es por la aloja",
        "Que alegra los corazones",
      ],
    },
    {
      lines: [
        "Se acostumbra allá en mi pago",
        "En medio de los carnavales",
        "Vidalear hasta que aclare",
        "Pucha, qué lindos cantares",
      ],
    },
    {
      isChorus: true,
      lines: [
        "En las fiestas santiagueñas",
        "Se baila esta chacarera",
        "Con fuelle, guitarra y bombo",
        "Le llaman: \"La Algarrobera\"",
      ],
    },
    {
      lines: [
        "Bailando esta chacarera",
        "Comentaba una viejita",
        "Me estoy machando, comadre",
        "Con esta aloja fresquita",
      ],
    },
    {
      lines: [
        "Otro viejo en Upianita",
        "Bailando mal baraja'o",
        "Renegaba despacito",
        "Qué fiero, qué zapatea'o",
      ],
    },
    {
      lines: [
        "Algarroba blanca y negra",
        "Llena de miel y dulzura",
        "La voz que en los rezaibales",
        "Es buena pa' la compostura",
      ],
    },
    {
      isChorus: true,
      lines: [
        "En las fiestas santiagueñas",
        "Se baila esta chacarera",
        "Con fuelle, guitarra y bombo",
        "Le llaman: \"La Algarrobera\"",
      ],
    },
  ],
};
