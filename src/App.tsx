import { useEffect, useRef, useState } from 'react'
import Board from './components/Board'
import Leaderboard from './components/Leaderboard'
import ScoreForm from './components/ScoreForm'
import { createDeck, isMatch, isWon } from './game'
import './App.css'

const MISMATCH_DELAY_MS = 800

export default function App() {
  const [deck, setDeck] = useState(createDeck)
  const [flippedIds, setFlippedIds] = useState<number[]>([])
  const [moves, setMoves] = useState(0)
  const [round, setRound] = useState(0)
  const [boardRefresh, setBoardRefresh] = useState(0)
  const timer = useRef<number | undefined>(undefined)
  const winPanel = useRef<HTMLDivElement>(null)

  const won = isWon(deck)
  const locked = flippedIds.length >= 2

  useEffect(() => () => window.clearTimeout(timer.current), [])

  // on a win, bring the name form into view so the player never has to hunt for it
  useEffect(() => {
    if (!won) return
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    winPanel.current?.scrollIntoView({ block: 'center', behavior: calm ? 'auto' : 'smooth' })
  }, [won])

  function handleFlip(id: number) {
    if (locked || won) return
    const next = [...flippedIds, id]
    setFlippedIds(next)
    if (next.length < 2) return

    setMoves((m) => m + 1)
    const [a, b] = next.map((i) => deck.find((c) => c.id === i)!)
    if (isMatch(a, b)) {
      setDeck((d) => d.map((c) => (next.includes(c.id) ? { ...c, matched: true } : c)))
      setFlippedIds([])
    } else {
      timer.current = window.setTimeout(() => setFlippedIds([]), MISMATCH_DELAY_MS)
    }
  }

  function restart() {
    window.clearTimeout(timer.current)
    setDeck(createDeck())
    setFlippedIds([])
    setMoves(0)
    setRound((r) => r + 1)
  }

  return (
    <>
      <main className="table">
        <div className="table-side">
          <h1 className="title">
            카드
            <br />
            짝 맞추기
          </h1>
          <p className="lede">
            같은 꽃이 그려진 카드 두 장을 찾아 8쌍을 모두 맞추세요. 적게 뒤집을수록 랭킹이 올라갑니다.
          </p>
          <p className="moves" aria-live="polite">
            <span className="moves-num">{moves}</span>
            <span className="moves-label">이동 횟수</span>
          </p>
          <button type="button" className="restart" onClick={restart}>
            다시 시작
          </button>
        </div>
        <div className="board-wrap">
          <Board
            key={round}
            deck={deck}
            flippedIds={flippedIds}
            locked={locked}
            won={won}
            onFlip={handleFlip}
          />
          {won && (
            <div className="win-panel" ref={winPanel} role="status">
              <p className="win-text">{moves}번 만에 성공!</p>
              <ScoreForm
                key={round}
                moves={moves}
                onSubmitted={() => setBoardRefresh((k) => k + 1)}
              />
            </div>
          )}
        </div>
      </main>
      <Leaderboard refreshKey={boardRefresh} />
    </>
  )
}
