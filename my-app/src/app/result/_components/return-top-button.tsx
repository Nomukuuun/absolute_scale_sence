'use client'

import { useRouter } from 'next/navigation'
import { useScore } from '@/app/ScoreProvider'
import { Button } from '@/components/ui/button'

export function ReturnTopButton() {
  const router = useRouter()
  const { resetScore } = useScore()
  const initialize = () => {
    resetScore()
    router.replace('/')
  }

  return (
    <Button onClick={initialize}>
      トップへ戻る
    </Button>
  )
}
