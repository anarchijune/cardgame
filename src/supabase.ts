import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const publishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

if (!url || !publishableKey) {
  throw new Error('Supabase 환경변수가 없습니다. .env.example 을 .env.local 로 복사해 값을 채우세요.')
}

// service_role(secret) 키는 RLS 를 우회하므로 브라우저 코드에 쓰면 안 됩니다.
if (/service_role|sb_secret_/.test(publishableKey)) {
  throw new Error('브라우저에는 publishable 키만 사용할 수 있습니다.')
}

export const supabase = createClient(url, publishableKey)

export interface ScoreRow {
  id: number
  player_name: string
  moves: number
  created_at: string
}

export async function fetchTopScores(limit = 10): Promise<ScoreRow[]> {
  const { data, error } = await supabase
    .from('scores')
    .select('id, player_name, moves, created_at')
    .order('moves', { ascending: true })
    .order('created_at', { ascending: true })
    .limit(limit)
  if (error) throw error
  return data
}

export async function submitScore(playerName: string, moves: number): Promise<void> {
  const { error } = await supabase
    .from('scores')
    .insert({ player_name: playerName.trim(), moves })
  if (error) throw error
}
