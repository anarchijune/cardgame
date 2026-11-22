import type { CardData } from '../game'
import Card from './Card'

interface Props {
  deck: CardData[]
  flippedIds: number[]
  locked: boolean
  onFlip: (id: number) => void
}

export default function Board({ deck, flippedIds, locked, onFlip }: Props) {
  return (
    <div className="board">
      {deck.map((card) => (
        <Card
          key={card.id}
          card={card}
          flipped={flippedIds.includes(card.id)}
          disabled={locked}
          onClick={onFlip}
        />
      ))}
    </div>
  )
}
