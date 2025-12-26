'use client'

import { useRouter } from 'next/navigation'
import { usePlay } from './PlayProvider'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { answerFormSchema, AnswerFormInput, AnswerFormOutput } from './schemas/play-form'

export  function PlayFormProvider({ children }: { children: React.ReactNode }) {
  // formの状態設定（初期化）
  const methods = useForm<AnswerFormInput>({
    resolver: zodResolver(answerFormSchema),
    mode: 'onChange',
    defaultValues: {
      answer: '',
    },
  })

  const { currentIndex, totalQuestions } = usePlay()
  const isLast = currentIndex === totalQuestions

  const router = useRouter()
  const onSubmit = (data: AnswerFormOutput) => {
    console.log('answer:', data.answer)
    // TODO: ここで回答から点数を算出する処理を記述(useStateによるレイアウト内で管理か？)
    isLast ? router.replace('/result') : router.replace('/play')
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col space-y-10 min-h-screen p-10">
        {children}
      </form>
    </FormProvider>
  )
}
