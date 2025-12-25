import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ResultPage() {

  return (
    <div className="flex flex-col space-y-6 p-10">
      <div>結果発表～～～～～～！！！！</div>
      <Link href="/">
        <Button>トップに戻る</Button>
      </Link>
    </div>
  )
}
