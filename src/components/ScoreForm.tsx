import { useState } from 'react'
import { submitScore } from '../supabase'

interface Props {
  moves: number
  onSubmitted: () => void
}

export default function ScoreForm({ moves, onSubmitted }: Props) {
  const [name, setName] = useState('')
  const [status, setStatus] = useState<'idle' | 'saving' | 'done' | 'error'>('idle')

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!name.trim()) return
    setStatus('saving')
    try {
      await submitScore(name, moves)
      setStatus('done')
      onSubmitted()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') return <p className="saved">기록이 등록됐어요!</p>

  return (
    <form className="score-form" onSubmit={handleSubmit}>
      <input
        autoFocus
        type="text"
        value={name}
        maxLength={20}
        placeholder="이름 (최대 20자)"
        aria-label="이름"
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" disabled={status === 'saving' || !name.trim()}>
        {status === 'saving' ? '저장 중…' : '기록 등록'}
      </button>
      {status === 'error' && <p className="form-error">등록에 실패했어요. 다시 시도해 주세요.</p>}
    </form>
  )
}
