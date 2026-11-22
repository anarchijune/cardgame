export interface CardData {
  id: number
  symbol: string
  matched: boolean
}

export const FLOWERS = ['pine', 'plum', 'cherry', 'peony', 'mum', 'maple', 'iris', 'paulownia'] as const

export const FLOWER_NAMES: Record<string, string> = {
  pine: '소나무',
  plum: '매화',
  cherry: '벚꽃',
  peony: '모란',
  mum: '국화',
  maple: '단풍',
  iris: '난초',
  paulownia: '오동',
}

export function shuffle<T>(items: readonly T[]): T[] {
  const arr = [...items]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export function createDeck(): CardData[] {
  return shuffle([...FLOWERS, ...FLOWERS]).map((symbol, id) => ({
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
