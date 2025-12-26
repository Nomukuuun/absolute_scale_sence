'use client'

import { createContext, useContext, useState } from 'react'

type PlayContextType = {
  currentIndex: number
  totalQuestions: number
  next: () => void
  reset: () => void
}

// 各問題ページで現在の問題数を管理するためのオブジェクト宣言
const PlayContext = createContext<PlayContextType | null>(null)

export function PlayProvider({ children }: { children: React.ReactNode }) {
  const totalQuestions = 5
  const [currentIndex, setCurrentIndex] = useState(1)

  const next = () => setCurrentIndex((v) => v === totalQuestions || v + 1)

  return (
    <PlayContext.Provider value={{ currentIndex, totalQuestions, next }}>
      {children}
    </PlayContext.Provider>
  )
}

export const usePlay = () => {
  const ctx = useContext(PlayContext)
  if (!ctx) throw new Error('usePlay must be used within PlayProvider')
  return ctx
}
