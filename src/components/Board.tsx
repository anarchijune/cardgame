import type { CardData } from '../game'
import Card from './Card'

interface Props {
  deck: CardData[]
  flippedIds: number[]
  locked: boolean
  won: boolean
  onFlip: (id: number) => void
}

export default function Board({ deck, flippedIds, locked, won, onFlip }: Props) {
  return (
    <div className={`board${won ? ' won' : ''}`}>
      {deck.map((card, index) => (
        <Card
          key={card.id}
          card={card}
          index={index}
          flipped={flippedIds.includes(card.id)}
          disabled={locked || won}
          onClick={onFlip}
        />
      ))}
    </div>
  )
}
