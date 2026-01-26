'use client'

import { TwitterShareButton, TwitterIcon } from 'next-share'
import { useMemo } from 'react'
import { useScore } from '@/app/ScoreProvider'
import { getResult } from '@/lib/result/get-result' 
import type { ScoreRankLabel } from '@/lib/result/get-result' 
import { ShareMessage } from '@/lib/result/share-message' 

export function ShareToXButton() {
  // 絶対パスでルートを取得し、シェアURLを生成
  const rootPath =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (typeof window !== "undefined" ? window.location.origin : "/"); // SSRのエラー回避対応
  const shareUrl = new URL('/', rootPath).toString()

  // スコアに基づいてシェアテキストを生成
  const { score } = useScore()
  const label: ScoreRankLabel = useMemo(() => getResult(score).label, [score])
  const shareText = useMemo(
    () => {
      return `私の絶対スケール感は「${label}」でした！\n${ShareMessage[label]}\nあなたのスケール感を調べてみよう！`
    }, [label])

  return (
    <TwitterShareButton
      className="flex items-center gap-2"
      url={shareUrl}
      title={shareText}
    >
      <div className="flex items-center justify-center gap-2 bg-black text-white rounded-md px-4 py-2">
        <TwitterIcon size={24} round />
        <p>シェア</p>
      </div>
    </TwitterShareButton>
  )
}
