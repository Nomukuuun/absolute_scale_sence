import { redirect } from 'next/navigation'

export default function PlayIndexPage() {
  // TODO: 今後問題数をランダムで取得するように拡張
  // const MAX_QUESTION_NUMBER = 5
  // const randomId = Math.floor(Math.random() * MAX_QUESTION_NUMBER) + 1

  const randomId = 1
  redirect(`/play/${randomId}`)
}
