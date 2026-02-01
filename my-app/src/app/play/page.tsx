import { redirect } from 'next/navigation'

// Full Route Cacheを無効にして動的処理を強制する
export const dynamic = 'force-dynamic'

export default function PlayIndexPage() {
  const QUESTIONS_STOCKS = 10
  const randomId = Math.floor(Math.random() * QUESTIONS_STOCKS + 1)
  redirect(`/play/${randomId}`)
}
