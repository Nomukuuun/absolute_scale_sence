'use client'

import { TwitterShareButton, TwitterIcon } from 'next-share'
import { useMemo } from 'react'
import { useScore } from '@/app/ScoreProvider'
import { getResult } from '@/lib/result/get-result' 
import { ShareMessage } from '@/lib/result/share-message' 
import { usePathname } from "next/navigation"


export function ShareToXButton() {
  const { score } = useScore()
  const result = useMemo(() => getResult(score), [score])
  const shareText = useMemo(() => `私の絶対スケール感は「${result.label}」でした！\n${ShareMessage[result.label]}`, [result])
  const pathname = usePathname();

  return (
    <TwitterShareButton
      className="flex items-center gap-2"
      url={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
        shareText
      )}&url=${encodeURIComponent(pathname)}`}
      title={'あなたのスケール感を調べてみよう！'}
    >
      <div className="flex items-center justify-center gap-2 bg-black text-white rounded-md px-4 py-2">
        <TwitterIcon size={24} round />
        <p>シェア</p>
      </div>
    </TwitterShareButton>
  )
}
