'use client'

import { usePlay } from '@/providers/PlayProvider'
import { Progress } from '@/components/ui/progress'

export default function ProgressBar() {
  const { totalQuestions, currentIndex } = usePlay()
  const progress = currentIndex / totalQuestions * 100
  console.log(currentIndex, totalQuestions, progress)

  return (
  <div className="w-full flex items-center justify-center space-x-6 py-8">
    <Progress value={ progress } className="w-3/5" />
    <span className="text-sm font-medium tabular-nums">
      { currentIndex } / { totalQuestions }
    </span>
  </div>
  )
}
