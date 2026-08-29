---
name: add-song
description: Add a new song to the repertorio app — structures pasted lyrics into verses + estribillo following the genre convention, verifies title/author/genre against public sources, and generates the data file. Use when the user pastes song lyrics and asks to add/agregar a song to the repertoire.
---

# Add a song to Repertorio

Turns lyrics the user pastes into a `src/data/songs/<slug>.ts` file matching the
`Song` / `Stanza` types in `src/data/types.ts`, registered in `src/data/songs.ts`.

## Inputs

From the user's message, collect:

- **Lyrics** (required) — the raw pasted text.
- **Title** (required) — ask if not given or not obvious from the text.
- **Author/composer** (optional) — if given, use it to verify facts (see below).
- **Genre** (zamba, chacarera, or other) — infer from what the user says, or ask.
  This decides the stanza pattern (see below). If the user names a genre this
  skill doesn't have a pattern for, ask them for the verse/estribillo pattern
  instead of guessing.
- **Duration** — if not given, default to `225` (3:45) with a comment
  `// 3:45 — duración por defecto, ajustar si se confirma otra`, matching the
  convention already used across the existing songs.

## Step 1 — Verify facts, not lyrics

If an author was given, run a `WebSearch` for `"<title>" letra <author>` (or
similar) to sanity-check: correct title, correct composer/author name, and
genre. **Do not** try to fetch or reproduce the lyrics themselves from the web
— `WebFetch` will refuse to reproduce full copyrighted lyric text, and even
short excerpts should not be pasted into the file or into chat. The only
source of truth for the actual lyric text is what the user pasted. Use the
search purely to confirm metadata (title/author/genre) and to sanity-check
song structure (e.g. "does this song have an estribillo").

If the user rejects or skips the search (as has happened before), don't
retry it — just proceed with what they told you directly.

## Step 2 — Split into lines if needed

If the pasted lyrics have no line breaks (they arrive as one run-on block),
reconstruct line breaks by inferring sentence/clause boundaries and
capitalization, the way you'd read verse. **Tell the user explicitly that you
reconstructed line breaks yourself** and that they should double check it in
the app — this step is error-prone and has produced mistakes before.

## Step 3 — Identify the estribillo

Look for a block of lines that repeats verbatim elsewhere in the pasted
text — that's the estribillo. Copy that exact block (verbatim, via the same
substring both times — never retype it a second time by hand) into every
position it belongs, so the two occurrences are guaranteed byte-identical.
Retyping it a second time is exactly how a previous song ended up with a
stray punctuation mismatch between its two chorus repeats — avoid that.

If a stanza is only a marker word (e.g. a lone "Estribillo" with no actual
sung text), don't invent lyrics for it. Ask the user for the real chorus
text instead of leaving it as a placeholder or guessing.

## Step 4 — Apply the genre pattern

Arrange stanzas into this order (verse = V, estribillo = E):

- **Zamba**: `V V E V V E` — two verses, estribillo, two verses, estribillo.
- **Chacarera**: `V V V E V V V E` — three verses, estribillo, three verses,
  estribillo.
- **Other/unknown genre**: ask the user for the pattern.

If the number of verses the user pasted doesn't fit the pattern exactly
(e.g. an extra verse left over, or one short), **stop and ask** how to
handle the mismatch — don't drop or reposition content on your own guess.
This has come up before (a leftover verse with nowhere obvious to go).

## Step 5 — Generate the file

Write `src/data/songs/<slug>.ts` (slug = kebab-case of the title) following
the existing `Song` shape from `src/data/types.ts`:

```ts
import type { Song } from "../types";

export const <camelCaseName>: Song = {
  id: "<slug>",
  title: "<Title>",
  artist: "<Author>", // omit the field entirely if none was given
  durationSec: <n>,
  stanzas: [
    { lines: [/* verse lines, verbatim from the user's paste */] },
    { lines: [/* ... */] },
    { isChorus: true, lines: [/* estribillo, verbatim */] },
    // ...continue per the genre pattern
  ],
};
```

Look at `src/data/songs/zamba-de-un-promesante.ts` (zamba) and
`src/data/songs/la-algarrobera.ts` (chacarera) as reference examples of the
target shape — both are already structured per this convention.

## Step 6 — Register and verify

1. Add the import and array entry in `src/data/songs.ts`.
2. Run `npm run build` to type-check; fix anything it flags.
3. Report back to the user without quoting the lyrics in chat — describe
   structure/changes only (e.g. "estrofas 1,2,3, Estribillo, 4,5,6,
   Estribillo"), same as for every other song already in the app.
