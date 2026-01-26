import { Result } from "./_components/result"
import { ReturnTopButton } from "./_components/return-top-button"
import { ShareToXButton } from "./_components/share-to-x-button"

export default function ResultPage() {
  return (
    <div className="flex flex-col space-y-6 py-10">
      <Result />
      <ShareToXButton />
      <ReturnTopButton />
    </div>
  )
}
