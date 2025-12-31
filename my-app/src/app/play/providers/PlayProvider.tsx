'use client'

import { createContext, useContext, useState } from 'react'
import { getAnswer } from '@/lib/play/get-question'

type PlayContextType = {
  currentIndex: number
  totalQuestions: number
  next: () => void
}

// 各問題ページで現在の問題数を管理するためのオブジェクト宣言
const PlayContext = createContext<PlayContextType | null>(null)

export function PlayProvider({ children }: { children: React.ReactNode }) {
  const [currentIndex, setCurrentIndex] = useState<number>(1)
  const totalQuestions = 5
  const next = () => setCurrentIndex((v) => Math.min(v + 1, totalQuestions))

  return (
    <PlayContext.Provider value={{ currentIndex, totalQuestions, next }}>
      {children}
    </PlayContext.Provider>
  )
}

// スコア算出用のカスタムフック（フォームのsubmitアクションで実行）
export function useCalculateScore() {
  const [score, setScore] = useState<number>(0)

  const calculateScore = (answer: string, questionId: string) => {
    console.log('更新前score:', score)
    // ユーザー入力は「10.」のように小数点を混じらせた回答ができてしまうため小数点以下を排除
    const user_ans = Math.trunc(Number(answer))
    const correct_ans = Number(getAnswer(questionId))
    // 解答との乖離を絶対値で算出（最終スコア値が大きいほど、評価が低くなる）
    setScore((v) => v + Math.abs(correct_ans - user_ans))
  }

  return { score, calculateScore }
}

// PlayContextを利用するためのカスタムフック
export const usePlay = () => {
  const ctx = useContext(PlayContext)
  if (!ctx) throw new Error('usePlay must be used within PlayProvider')
  return ctx
}
