import type { CardData } from '../game'

interface Props {
  card: CardData
  flipped: boolean
  disabled: boolean
  onClick: (id: number) => void
}

export default function Card({ card, flipped, disabled, onClick }: Props) {
  const faceUp = flipped || card.matched
  return (
    <button
      type="button"
      className={`card${faceUp ? ' flipped' : ''}${card.matched ? ' matched' : ''}`}
      disabled={disabled || faceUp}
      aria-label={faceUp ? card.symbol : '뒤집힌 카드'}
      onClick={() => onClick(card.id)}
    >
      <span className="card-inner">
        <span className="card-face card-back">?</span>
        <span className="card-face card-front">{card.symbol}</span>
      </span>
    </button>
  )
}
