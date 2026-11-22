export interface CardData {
  id: number
  symbol: string
  matched: boolean
}

const SYMBOLS = ['🍎', '🍌', '🍇', '🍓', '🍉', '🍒', '🥝', '🍑']

export function shuffle<T>(items: readonly T[]): T[] {
  const arr = [...items]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export function createDeck(): CardData[] {
  return shuffle([...SYMBOLS, ...SYMBOLS]).map((symbol, id) => ({
    id,
    symbol,
    matched: false,
  }))
}

export function isMatch(a: CardData, b: CardData): boolean {
  return a.id !== b.id && a.symbol === b.symbol
}

export function isWon(deck: readonly CardData[]): boolean {
  return deck.every((c) => c.matched)
}
