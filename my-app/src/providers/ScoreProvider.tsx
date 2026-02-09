'use client'

import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { getAnswer } from '@/lib/play/get-question'

type ScoreContextType = {
  score: number
  calculateScore: (answer: number, questionId: string) => void
  resetScore: () => void
}

// 累積得点を管理するためのオブジェクト宣言
const ScoreContext = createContext<ScoreContextType | null>(null)

export function ScoreProvider({ children }: { children: React.ReactNode }) {
  const [score, setScore] = useState<number>(0)
  const calculateScore = useCallback((answer: number, questionId: string) => {
    // ユーザー入力は「10.」のように小数点を混じらせた回答ができてしまうため小数点以下を排除
    const userAns = Math.trunc(answer)
    const correctAns = Number(getAnswer(questionId) || "0")
    console.log("実際の解答：", correctAns)
    // 解答との乖離を絶対値で算出（最終スコア値が大きいほど、評価が低くなる）
    setScore((v) => v + Math.abs(correctAns - userAns))
  }, [])
  const resetScore = useCallback(() => setScore(0), [])

  return (
    <ScoreContext.Provider value={{ score, calculateScore, resetScore }}>
      {children}
    </ScoreContext.Provider>
  )
}

// ScoreContextを利用するためのカスタムフック
export const useScore = () => {
  const sctx = useContext(ScoreContext)
  if (!sctx) throw new Error('useScoreはScoreProvider配下で使う必要があります')
  return sctx
}
