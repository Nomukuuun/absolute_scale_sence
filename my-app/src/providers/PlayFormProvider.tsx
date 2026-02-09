'use client'

import { useRouter, useParams } from 'next/navigation'
import { usePlay } from './PlayProvider'
import { useScore } from './ScoreProvider'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { answerFormSchema, AnswerFormInput, AnswerFormOutput } from '@/schemas/play-form'

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
  const { questionId } = useParams<{ questionId: string }>()
  const { isLast, next } = usePlay()
  const { calculateScore } = useScore()
  const router = useRouter()

  const onSubmit = (data: AnswerFormOutput) => {
    // バリデーションを通過していることが確実であるため、answerの型からundefinedを無視する
    const answer = data.answer!
    console.log('あなたの回答:', data.answer)
    calculateScore(answer, questionId) // ユーザー回答と解答の乖離幅を算出
    next()          // 回答問題数をインクリメント
    methods.reset() // フォーム状態をリセット
    if (isLast) {
      router.replace('/result')
    } else {
      router.refresh() // Router Cacheをクリア
      router.replace('/play')
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col min-h-screen">
        {children}
      </form>
    </FormProvider>
  )
}
