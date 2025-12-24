'use client'

import Link from 'next/link'
import { usePlay } from '../PlayProvider'
import { Button } from '@/components/ui/button'

export default function ControlButtons() {
  const { total, currentIndex, next, reset } = usePlay()
  const isLast = currentIndex === total

  return (
    <div className="flex items-center justify-center space-x-5 p-5">
      <Link href="/" className="basis-1/2">
        <Button onClick={reset} className="w-full">
          トップへ戻る
        </Button>
      </Link>

      <Link href={ isLast ? "/result" : "/play" } className="basis-1/2">
        <Button onClick={next} className="w-full">
          { isLast ? "結果を見る" : "次の問題へ" }
        </Button>
      </Link>
    </div>
  )
}
