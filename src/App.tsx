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
  const [boardRefresh, setBoardRefresh] = useState(0)
  const timer = useRef<number | undefined>(undefined)

  const won = isWon(deck)
  const locked = flippedIds.length >= 2

  useEffect(() => () => window.clearTimeout(timer.current), [])

  function handleFlip(id: number) {
    if (locked) return
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
  }

  return (
    <main className="app">
      <h1>카드 짝 맞추기</h1>
      <p className="status">
        이동 횟수: <strong>{moves}</strong>
      </p>
      <Board deck={deck} flippedIds={flippedIds} locked={locked} onFlip={handleFlip} />
      {won && (
        <>
          <p className="win">🎉 {moves}번 만에 성공!</p>
          <ScoreForm
            key={deck.map((c) => c.id).join()}
            moves={moves}
            onSubmitted={() => setBoardRefresh((k) => k + 1)}
          />
        </>
      )}
      <button type="button" className="restart" onClick={restart}>
        다시 시작
      </button>
      <Leaderboard refreshKey={boardRefresh} />
    </main>
  )
}
