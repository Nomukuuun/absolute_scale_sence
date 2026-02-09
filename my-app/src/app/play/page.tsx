'use client'

import { usePlay } from '@/providers/PlayProvider'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function PlayIndexPage() {
  const router = useRouter()
  const { displayQuestionIds, displayQuestionNum } = usePlay()
  const questionId = displayQuestionNum

  useEffect(() => console.log("現在の表示済み問題一覧：", displayQuestionIds), [displayQuestionIds]);
  router.replace(`/play/${questionId}`)
}
