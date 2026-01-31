import { redirect } from 'next/navigation'

export default function PlayIndexPage() {
  const QUESTIONS_STOCKS = 10
  const randomId = Math.floor(Math.random() * QUESTIONS_STOCKS + 1)
  redirect(`/play/${randomId}`)
}
