'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  const router = useRouter()
  const reload = () => {
    router.refresh()
    router.replace('/play')
  }

  return (
    <div className="flex flex-col space-y-6 p-10 text-center">
      <h2 className="text-2xl text-red-500 font-bold">エラーが発生しました。</h2>
      <Button type="button" onClick={reload}>
        再読み込み
      </Button>
    </div>
  )
}
