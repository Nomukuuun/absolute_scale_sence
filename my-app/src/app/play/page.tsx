'use client'

import { usePlay } from '@/providers/PlayProvider'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function PlayIndexPage() {
  const router = useRouter()
  const { displayQuestionNum } = usePlay()

  // playの描画中にPlayProviderのStateを更新するため、副作用を抑制する
  useEffect(() => router.replace(`/play/${displayQuestionNum}`), [displayQuestionNum]);
}
