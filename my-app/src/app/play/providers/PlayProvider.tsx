'use client'

import { createContext, useContext, useState, useCallback } from 'react'
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
  const next = useCallback(() => setCurrentIndex((v) => Math.min(v + 1, totalQuestions)), [])

  return (
    <PlayContext.Provider value={{ currentIndex, totalQuestions, next }}>
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
