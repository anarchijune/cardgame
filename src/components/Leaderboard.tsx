import { useEffect, useState } from 'react'
import { fetchTopScores, type ScoreRow } from '../supabase'

interface Props {
  refreshKey: number
}

const SLOTS = 10

export default function Leaderboard({ refreshKey }: Props) {
  const [scores, setScores] = useState<ScoreRow[]>([])
  const [state, setState] = useState<'loading' | 'ready' | 'error'>('loading')

  useEffect(() => {
    let cancelled = false
    fetchTopScores(SLOTS)
      .then((rows) => {
        if (cancelled) return
        setScores(rows)
        setState('ready')
      })
      .catch(() => {
        if (!cancelled) setState('error')
      })
    return () => {
      cancelled = true
    }
  }, [refreshKey])

  const emptySlots = Math.max(0, SLOTS - scores.length)

  return (
    <section className="leaderboard">
      <h2>랭킹 상위 10명</h2>
      {state === 'loading' && <p>불러오는 중…</p>}
      {state === 'error' && <p>랭킹을 불러오지 못했어요.</p>}
      {state === 'ready' && (
        <div>
          {scores.length === 0 && <p className="lb-note">아직 기록이 없어요. 첫 기록을 남겨보세요!</p>}
          <ol>
            {scores.map((s) => (
              <li key={s.id}>
                <span className="lb-name">{s.player_name}</span>
                <span className="lb-moves">{s.moves}번</span>
              </li>
            ))}
            {Array.from({ length: emptySlots }, (_, i) => (
              <li key={`empty-${i}`} className="lb-empty" aria-hidden="true">
                <span className="lb-name">비어 있음</span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </section>
  )
}
