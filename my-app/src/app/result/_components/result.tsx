'use client'

import { useScore } from '@/app/ScoreProvider'
import { getResult } from '@/lib/result/get-result'

export function Result() {
  const { score } = useScore()
  const result = getResult(score)

  return (
  <div className="flex flex-col items-center justify-center space-y-6">
    <div>結果発表～～～～～～！！！！</div>
    <div className="flex items-center">
      <div>あなたはスケール感覚は </div>
      <div className="text-2xl font-bold">{result.label}</div>
    </div>
    <div className="whitespace-pre-line">{result.message}</div>
  </div>
  )
}
