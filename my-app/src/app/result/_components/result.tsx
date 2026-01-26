'use client'

import { useMemo } from 'react'
import { useScore } from '@/app/ScoreProvider'
import { getResult } from '@/lib/result/get-result'

export function Result() {
  const { score } = useScore()
  const result = useMemo(() => getResult(score), [score])

  return (
  <div className="flex flex-col items-center justify-center space-y-6">
    <div>結果発表～～～～～～！！！！</div>
    <div>あなたはスケール感覚は…</div>

    {/* 評価を大きく表示 */}
    <div className="text-2xl font-bold">{result.label}</div>

    {/* メッセージを改行区切りで表示 */}
    <div className="whitespace-pre-line">{result.message}</div>
  </div>
  )
}
