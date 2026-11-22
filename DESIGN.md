---
name: 카드 짝 맞추기
description: A hwatu matching game played on a red holiday blanket; the page is the table, the cards are real cards.
colors:
  blanket: "#8a1c1c"
  blanket-deep: "#6c1414"
  ink: "#161312"
  ink-soft: "#2a2321"
  text: "#fff5f0"
  gold: "#f2b632"
  gold-hover: "#ffc94d"
  pine: "#2f6b3a"
  plum: "#a52a5f"
  cherry: "#ec7fa4"
  peony: "#d62f2f"
  chrysanthemum: "#e3a91c"
  maple: "#e8731a"
  iris: "#2b4fa8"
  paulownia: "#6a3fa3"
typography:
  display:
    fontFamily: "'Black Han Sans', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif"
    fontSize: "clamp(2.6rem, 7vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Black Han Sans', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1
  title:
    fontFamily: "'Black Han Sans', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.1
  body:
    fontFamily: "'Apple SD Gothic Neo', 'Malgun Gothic', 'Noto Sans CJK KR', system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "'Apple SD Gothic Neo', 'Malgun Gothic', 'Noto Sans CJK KR', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
rounded:
  base: "4px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.base}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.gold-hover}"
  card-back:
    backgroundColor: "{colors.ink}"
    rounded: "{rounded.base}"
  card-front:
    backgroundColor: "{colors.pine}"
    rounded: "{rounded.base}"
  board:
    backgroundColor: "{colors.blanket-deep}"
    rounded: "{rounded.base}"
  rank-row:
    backgroundColor: "{colors.ink-soft}"
    textColor: "{colors.text}"
    rounded: "{rounded.base}"
    padding: "12px 18px"
  text-field:
    backgroundColor: "{colors.text}"
    textColor: "{colors.ink}"
    rounded: "{rounded.base}"
    padding: "12px 14px"
  win-panel:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.gold}"
    rounded: "{rounded.base}"
    padding: "24px"
---

# Design System: 카드 짝 맞추기

## Overview

**Creative North Star: "The Holiday Blanket"**

The page is a hwatu table: a blanket-red ground woven with a faint flat twill, a deeper red board set into it, and real-proportion (5:7) cards lying on top. Everything that is not a card is flat. Tone steps do the work gradients would do, and the only shadows in the system belong to the cards, because cards are the only physical objects on the table.

The mood is festive, tactile and unhurried. Display type is one heavy Korean face, text is the platform's Korean sans, and every corner is the same small 4px radius. Cards carry the colour: eight saturated month faces, each with a drawn white-and-black flower. The ranking sits below on a black field, a change of room rather than a change of language.

**Key Characteristics:**
- One red ground, one deeper board red, near-black ink, one gold accent.
- Flat fills; no gradients. Cards are the only elevated things.
- 4px ink border on card faces, 4px radius on every surface.
- All art is drawn SVG; no raster images, no emoji.
- Motion is physical: deal, flip, press flat, sweep.

## Colors

A saturated blanket red with near-black and one gold, over which eight month colours appear only on card faces.

### Primary
- **Blanket Red** (`colors.blanket`): the page ground, the twill base, and the disc on card backs.
- **Deep Blanket** (`colors.blanket-deep`): the board the cards sit in. Reads as a recessed tray against the blanket.
- **Hwatu Gold** (`colors.gold`): the single accent. Buttons, move count, rank numerals, win panel border and text, matched-card rim, focus ring, selection.

### Secondary (month faces, cards only)
- **Pine** (`colors.pine`), **Plum** (`colors.plum`), **Cherry** (`colors.cherry`), **Peony** (`colors.peony`), **Chrysanthemum** (`colors.chrysanthemum`), **Maple** (`colors.maple`), **Iris** (`colors.iris`), **Paulownia** (`colors.paulownia`): one flat colour per pair, set as `--face` through `data-flower`.

### Neutral
- **Card Ink** (`colors.ink`): card backs and borders, win panel, leaderboard field, text on gold.
- **Soft Ink** (`colors.ink-soft`): ranking rows on the black field.
- **Blanket Cream** (`colors.text`): all text on red or ink, and the name field fill.
- Empty-rank rows use a few one-off dim browns (#1f1a18, #8d7f78, #a39690, #6b5f57 placeholder); they are local to those states, not system tokens.

### Named Rules
**The Gold Is The Only Accent Rule.** Gold marks what the player acts on or has earned. Month colours never leave the card faces.

**The No-Gradient Rule.** Surfaces are flat fills; the twill is a two-tone pattern, not a gradient.

## Typography

**Display Font:** Black Han Sans (self-hosted via @fontsource, imported in main.tsx; fallback Apple SD Gothic Neo, Malgun Gothic)
**Body Font:** Apple SD Gothic Neo (with Malgun Gothic, Noto Sans CJK KR, system-ui)

**Character:** A heavy, poster-like Korean display face against a plain native sans. Text uses `word-break: keep-all` so Korean wraps at word boundaries.

### Hierarchy
- **Display** (400, clamp(2.6rem, 7vw, 6rem) wide / clamp(2rem, 9vw, 2.6rem) phone, 0.98): the title; the move count scales larger still (up to 7rem, gold, tabular figures).
- **Headline** (400, clamp(2rem, 5vw, 3.5rem), 1): the ranking heading.
- **Title** (400, 1.5rem to 2.2rem, 1.1): win message, rank numerals and move values.
- **Body** (400 to 500, 1.125rem to 1.25rem, 1.55): lede (max 30ch), ranking copy, form input.
- **Label** (700, 1rem to 1.125rem): buttons, move label, player names.

### Named Rules
**The One Heavy Face Rule.** Black Han Sans is for the title, numbers and win text only; sentences are always in the body sans.

## Layout

Single screen on the blanket. Phone: title and move count share the top row, restart under the count, and the 4x4 board fills the width at 5:7. At 900px and up: a text column on the left (title, lede, move count pushed to the bottom, restart) and the board on the right, sized to the viewport height (`100svh` minus padding, max 1000px). Page padding is `clamp(16px, 3vw, 40px)`; board gap `clamp(6px, 1.2vw, 14px)`; board padding `clamp(8px, 1.4vw, 16px)`. The ranking is a second full-width section on ink, heading left and list right on wide screens, list capped at 720px. Spacing is a loose 8/10/12/16/24 rhythm, not a strict scale.

## Elevation & Depth

Flat everywhere except cards. Depth is physical: a card at rest casts a soft low shadow, lifts 5px with a larger shadow on hover, and a matched card is pressed flat (3px down, 0.94 scale, tight shadow). The board reads as a tray by tone alone.

### Shadow Vocabulary
- **Card at rest** (`box-shadow: 0 6px 10px -2px rgb(0 0 0 / 0.5)`): every card.
- **Card lifted** (`box-shadow: 0 12px 16px -4px rgb(0 0 0 / 0.55)`): hover on an unflipped, enabled card.
- **Card pressed** (`box-shadow: 0 1px 2px rgb(0 0 0 / 0.5)`): matched pairs.

### Named Rules
**The Only Cards Cast Rule.** Shadows belong to cards. Buttons, panels, rows and the board stay flat.

## Shapes

One radius: 4px, on cards, board, buttons, fields, rows and the win panel. Cards have a heavy 4px ink border on both faces; the win panel has a 4px gold border. Card backs carry a single circular blanket-red disc (34% wide). Flower motifs are drawn SVG: white ellipse petals with 2.5px ink strokes and ink centres, round line joins.

## Components

### Buttons
- **Shape:** 4px radius, no border.
- **Primary:** gold fill, ink text, bold; phone 8px 16px, wide 14px 28px. Form submit is 12px 22px.
- **Hover / Focus:** hover lifts 2px and lightens to gold-hover; active presses 1px down. Focus is a 4px gold outline with 3px offset on everything. Disabled drops to 55% opacity.

### Cards / Containers
- **Playing card:** 5:7 tall, ink border 4px, 4px radius. Back is ink with a blanket disc; front is a flat month colour with a drawn flower (padding 8% 10%). Flip is a 0.45s rotateY.
- **Matched:** pressed flat, face dimmed (saturate 0.5, brightness 0.8), border turns gold.
- **Board:** 4x4 grid on blanket-deep.

### Inputs / Fields
- **Style:** cream fill, ink text, no border, 4px radius, 12px 14px padding. Placeholder is a muted brown. No distinct focus style beyond the global gold outline.

### Ranking
Ink field; each row is a soft-ink 4px-radius bar with a gold display numeral from a CSS counter, name (ellipsised) and move count in display face. Empty slots use dimmer fills and muted text.

### Win Panel
Ink panel with 4px gold border at the lower board, gold display text, containing the name form; it appears after the cards are swept to the centre.

### Motion
Cards deal in on load (0.55s, staggered 45ms, from 28px above with a 4 degree tilt). Flip 0.45s. Hover lift 0.25s. Win: cards sweep to the board centre (0.8s, staggered 25ms) then the panel pops in at 1.3s. Easing is `cubic-bezier(0.16, 1, 0.3, 1)`. Under `prefers-reduced-motion` all card, button and panel animations and transitions are disabled.

## Do's and Don'ts

### Do:
- **Do** keep the ground blanket red and let gold be the single accent.
- **Do** use 4px radius everywhere and a 4px ink border on card faces.
- **Do** draw art as flat SVG in white and ink on a flat month colour.
- **Do** give new interactive elements the global 4px gold focus outline.
- **Do** disable motion under `prefers-reduced-motion`.

### Don't:
- **Don't** use gradients, glows or pastel tints for surfaces.
- **Don't** add shadows to anything that is not a physical card.
- **Don't** use emoji or icon glyphs as art; draw it.
- **Don't** let month colours appear outside card faces.
- **Don't** set sentences in Black Han Sans.
