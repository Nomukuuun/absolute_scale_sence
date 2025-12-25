'use client'

import { usePlay } from '../PlayProvider'
import { Progress } from '@/components/ui/progress'

export default function ProgressBar() {
  const { total, currentIndex } = usePlay()
  const progress = currentIndex / total * 100
  console.log(`progress: ${progress}`)

  return (
  <div className="w-full flex items-center justify-center space-x-5">
    <Progress value={ progress } className="w-3/5" />
    <span className="text-sm font-medium tabular-nums">
      { currentIndex } / { total }
    </span>
  </div>
  )
}
