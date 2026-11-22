# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Casual players who open a shared link on phone or desktop for a few minutes of play and then check the ranking. No account, no setup. (Confirmed with the user.)

## Product Purpose
A short memory game: flip cards two at a time to find all eight pairs in as few moves as possible, then enter a name to appear on a public TOP 10. Success is a finished round and a submitted score.

## Positioning
[Undecided: no mechanism beyond the standard memory-match rules has been confirmed. Do not invent one.]

## Operating Context
Played in a browser, one round at a time. Rank is by fewest moves (ties: earlier entry first). A round is 16 cards (8 pairs); a mismatch turns back after about 0.8 seconds.

## Capabilities and Constraints
- Stack: React 19 + Vite + TypeScript, deployed on Vercel. Keep it.
- Leaderboard in Supabase table `scores` (name 1-20 chars, moves 8-999); anonymous read and insert only. Keys come from `VITE_` env vars; the browser uses a publishable key only.
- UI language is Korean. Keep the existing copy unless the user asks otherwise.
- Must keep: TOP 10 display and score submission after a win.
- Fruit emoji card faces exist today; whether to keep them was not confirmed. [Open decision.]

## Brand Commitments
None confirmed beyond Korean UI copy. Title today: "카드 짝 맞추기".

## Evidence on Hand
No logo, photographs, or brand assets. No players, reviews, or usage statistics: none may be invented.

## Product Principles
1. A round must be understandable and playable within seconds, with no instructions.
2. The cards are the interface: they stay large, tappable, and legible on a phone.
3. Winning and the ranking are the payoff; submitting a score is one short step.
4. Fair play to read: faces stay hidden until flipped, state is always visible.

## Accessibility & Inclusion
Cards are real buttons with accessible labels and keyboard focus today; keep that. Respect reduced motion. No product-specific standard was stated.
