'use client'

import { useScore } from '@/app/ScoreProvider'
import { useRouter } from 'next/navigation'
import { usePlay } from '../providers/PlayProvider'
import { useFormContext } from 'react-hook-form'
import { AnswerFormInput } from '@/app/play/schemas/play-form'
import { Button } from '@/components/ui/button'

export default function ControlButtons() {
  const { formState: { isDirty, isValid } } = useFormContext<AnswerFormInput>()

  const { isLast } = usePlay()

  const router = useRouter()
  const { resetScore } = useScore()
  const redirectToTop = () => { 
    router.replace('/')
    resetScore()
  }

  return (
    <div className="flex items-center justify-center space-x-5 px-4 py-8">
      <Button type="button" onClick={redirectToTop} className="basis-1/2">
        トップへ戻る
      </Button>

      <Button type="submit" disabled={!isDirty || !isValid} className="basis-1/2">
        { isLast ? "結果を見る" : "次の問題へ" }
      </Button>
    </div>
  )
}
