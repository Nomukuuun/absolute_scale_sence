'use client'

import { useRouter } from 'next/navigation'
import { usePlay } from '../PlayProvider'
import { useFormContext } from 'react-hook-form'
import { AnswerForm } from '@/app/play/schemas/play-form'
import { Button } from '@/components/ui/button'

export default function ControlButtons() {
  const { formState: { isDirty, isVaild } } = useFormContext<AnswerForm>()

  const { totalQuestions, currentIndex, next } = usePlay()
  const isLast = currentIndex === totalQuestions

  const router = useRouter()
  const redirectToTop = () => { router.replace('/') }

  return (
    <div className="flex items-center justify-center space-x-5 p-5">
      <Button onClick={redirectToTop} className="basis-1/2">
        トップへ戻る
      </Button>

      <Button type="submit" disabled={!isDirty || !isVaild} onClick={next} className="basis-1/2">
        { isLast ? "結果を見る" : "次の問題へ" }
      </Button>
    </div>
  )
}
