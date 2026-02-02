'use client'

import { usePlay } from '../providers/PlayProvider'

export function CurrentQuestionNumber() {
  const { currentIndex } = usePlay()
  return <h2 className="text-xl font-bold">問題 {currentIndex}</h2>
}
