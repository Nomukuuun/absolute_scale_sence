'use client'

import questions from "@/../public/data/questions.json"
import { createContext, useContext, useState, useCallback, useMemo } from 'react'

type PlayContextType = {
  currentIndex: number
  totalQuestions: number
  isLast: boolean
  next: () => void
  displayQuestionIds: number[] // NOTE: テスト用に追加
  displayQuestionNum: number
}

// 各問題ページで現在の問題数を管理するためのオブジェクト宣言
const PlayContext = createContext<PlayContextType | null>(null)

// 表示する問題番号の配列をランダム生成
function generateRandomQuestionIds(totalQuestions: number): number[] {
  // 1から問題数までの連番配列を生成
  const ids = [...Array(questions.length)].map((_, i) => i + 1)

  // idsをランダムに入れ替える（フィッシャー – イェーツのシャッフル）
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }

  // 必要な問題数の数だけ切り出して返す
  return ids.slice(0, totalQuestions);
}

// NOTE: コンポーネント
export function PlayProvider({ children }: { children: React.ReactNode }) {
  // 問題数に関するState
  const [currentIndex, setCurrentIndex] = useState<number>(1)
  const totalQuestions = 5
  const isLast = currentIndex === totalQuestions
  const next = useCallback(() => setCurrentIndex((v) => Math.min(v + 1, totalQuestions)), [])

  // 表示する問題に関するState（更新を要さず、ライフサイクル中は維持するため更新変数未定義）
  const [displayQuestionIds] = useState<number[]>(generateRandomQuestionIds(totalQuestions))
  const displayQuestionNum = useMemo(() => displayQuestionIds[currentIndex - 1], [currentIndex])

  return (
    <PlayContext.Provider value={{ currentIndex, totalQuestions, isLast, next, displayQuestionIds, displayQuestionNum }}>
      {children}
    </PlayContext.Provider>
  )
}

// PlayContextを利用するためのカスタムフック
export const usePlay = () => {
  const ctx = useContext(PlayContext)
  if (!ctx) throw new Error('usePlayはPlayProvider配下で使う必要があります')
  return ctx
}
