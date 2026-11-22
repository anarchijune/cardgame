import { useEffect, useState } from 'react'
import { fetchTopScores, type ScoreRow } from '../supabase'

interface Props {
  refreshKey: number
}

export default function Leaderboard({ refreshKey }: Props) {
  const [scores, setScores] = useState<ScoreRow[]>([])
  const [state, setState] = useState<'loading' | 'ready' | 'error'>('loading')

  useEffect(() => {
    let cancelled = false
    fetchTopScores()
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

  return (
    <section className="leaderboard">
      <h2>🏆 랭킹 TOP 10</h2>
      {state === 'loading' && <p>불러오는 중…</p>}
      {state === 'error' && <p>랭킹을 불러오지 못했어요.</p>}
      {state === 'ready' && scores.length === 0 && <p>아직 기록이 없어요. 첫 기록을 남겨보세요!</p>}
      {state === 'ready' && scores.length > 0 && (
        <ol>
          {scores.map((s) => (
            <li key={s.id}>
              <span className="lb-name">{s.player_name}</span>
              <span className="lb-moves">{s.moves}번</span>
            </li>
          ))}
        </ol>
      )}
    </section>
  )
}
