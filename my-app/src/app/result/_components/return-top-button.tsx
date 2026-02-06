'use client'

import { useRouter } from 'next/navigation'
import { useScore } from '@/providers/ScoreProvider'
import { Button } from '@/components/ui/button'

export function ReturnTopButton() {
  const router = useRouter()
  const { resetScore } = useScore()
  const initialize = () => {
    router.replace('/')
    resetScore()
  }

  return (
    <div className="w-full pb-8 md:pb-12">
      <Button onClick={initialize} className="w-full">
        トップへ戻る
      </Button>
    </div>
  )
}
