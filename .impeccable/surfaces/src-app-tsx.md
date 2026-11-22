---
version: 1
slug: "src-app-tsx"
primary_target: "src/App.tsx"
related_targets: []
---

# Surface brief: 카드 짝 맞추기 (single-screen game)

Mode: Experience (the game itself leads). Audience: casual players on phone or desktop. Action: finish a round, submit a name. Must keep: Korean copy, TOP 10, score submission, 4x4 and 8 pairs. Open: card faces are no longer emoji; they are drawn flower cards.

## Direction contract

THESIS: A hwatu game laid out on a holiday blanket; the page is the blanket, the cards are real hwatu proportions, and a win feels like sweeping the pot. Refuses the pastel rounded-card grid on a grey page.

OWN-WORLD: Blanket red field (#8a1c1c-ish) as the whole ground, near-black card backs, each face a flat saturated month colour (pine green, plum pink, cherry, peony, chrysanthemum gold, maple orange, iris violet-blue, paulownia) with a white and black drawn flower. Heavy black card border. Black Han Sans display, system Korean sans for text. No gradients, no emoji, no thin rules.

STORY: The visitor sees a table ready to play, flips cards without instructions, takes pairs off the table, wins, enters a name, and sees where they stand.

FIRST VIEWPORT: Desktop: full-bleed red blanket, left column the title in two lines of large display type with the move count huge beneath it and the restart button; right the 4x4 board of tall 5:7 cards filling about 84 percent of the height. Mobile: title and moves on top, board below at full width. Ranking is the next section on a black field.

FORM: hwatu table, position 1 on my ordered list (assigned roll was the transit map, the user picked this card). seed:ece1e7af6c4fc10d

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved
- Signature interaction: matched pairs are taken off the table (sink and dim); a win sweeps the cards together.
