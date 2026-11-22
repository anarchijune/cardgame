import type { CSSProperties } from 'react'
import { FLOWER_NAMES, type CardData } from '../game'
import Motif from './Motif'

interface Props {
  card: CardData
  index: number
  flipped: boolean
  disabled: boolean
  onClick: (id: number) => void
}

const COLUMNS = 4

export default function Card({ card, index, flipped, disabled, onClick }: Props) {
  const faceUp = flipped || card.matched
  const col = index % COLUMNS
  const row = Math.floor(index / COLUMNS)
  // where this card travels when the table is swept together after a win
  const style = {
    '--i': index,
    '--sx': 1.5 - col,
    '--sy': 1.5 - row,
    '--sr': `${((index * 37) % 13) - 6}deg`,
  } as CSSProperties

  return (
    <button
      type="button"
      className={`card${faceUp ? ' flipped' : ''}${card.matched ? ' matched' : ''}`}
      style={style}
      data-flower={card.symbol}
      disabled={disabled || faceUp}
      aria-label={faceUp ? FLOWER_NAMES[card.symbol] : '뒤집힌 카드'}
      onClick={() => onClick(card.id)}
    >
      <span className="card-inner">
        <span className="card-face card-back">
          <span className="card-back-mark" />
        </span>
        <span className="card-face card-front">
          <Motif id={card.symbol} />
        </span>
      </span>
    </button>
  )
}
