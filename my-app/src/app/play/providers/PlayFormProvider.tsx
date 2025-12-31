'use client'

import { useRouter, useParams } from 'next/navigation'
import { usePlay, useCalculateScore } from './PlayProvider'
import { getAnswer } from '@/lib/play/get-question'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { answerFormSchema, AnswerFormInput, AnswerFormOutput } from '../schemas/play-form'

export function PlayFormProvider({ children }: { children: React.ReactNode }) {
  // formの初期化（zodで型変換を行うため、変換前と変換後で型を定義）
  const methods = useForm<
    AnswerFormInput,
    any,
    AnswerFormOutput
  >({
    resolver: zodResolver(answerFormSchema),
    mode: 'onChange',
    defaultValues: {
      answer: '',
    },
  })

  // submit時に使用する状態
  const reset = methods.reset
  const { score, calculateScore } = useCalculateScore()
  const { questionId } = useParams<{ questionId: string }>()
  const { currentIndex, totalQuestions, next } = usePlay()
  const isLast = currentIndex === totalQuestions

  const router = useRouter()
  const onSubmit = (data: AnswerFormOutput) => {
    console.log('answer:', data.answer)
    console.log('questionId:', questionId)
    next()
    reset()
    calculateScore(data.answer, questionId)
    console.log('更新前score:', score)
    isLast ? router.replace('/result') : router.replace('/play')
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col min-h-screen">
        {children}
      </form>
    </FormProvider>
  )
}
