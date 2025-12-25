'use client'

import { createContext, useContext, useState } from 'react'

type PlayContextType = {
  currentIndex: number
  total: number
  next: () => void
  reset: () => void
}

// 各問題ページで現在の問題数を管理するためのオブジェクト宣言
const PlayContext = createContext<PlayContextType | null>(null)

export function PlayProvider({ children }: { children: React.ReactNode }) {
  const total = 5
  const [currentIndex, setCurrentIndex] = useState(1)

  const next = () => setCurrentIndex((v) => v === total ? 1 : v + 1)
  const reset = () => setCurrentIndex(1)

  return (
    <PlayContext.Provider value={{ currentIndex, total, next, reset }}>
      {children}
    </PlayContext.Provider>
  )
}

export const usePlay = () => {
  const ctx = useContext(PlayContext)
  if (!ctx) throw new Error('usePlay must be used within PlayProvider')
  return ctx
}
