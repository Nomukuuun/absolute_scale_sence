import { Result } from "./_components/result"
import { ReturnTopButton } from "./_components/return-top-button"
import { ShareToXButton } from "./_components/share-to-x-button"

export default function ResultPage() {
  return (
    <div className="relative w-screen ml-[50%] -translate-x-[50%] min-h-screen pt-10 md:pt-16">
      <div className="absolute left-0 right-0 bottom-0 top-[70%] pointer-events-none -z-10 bg-[url('/result-bg.png')] bg-no-repeat opacity-50 bg-left-bottom bg-[length:auto_100%] md:inset-0 md:bg-contain md:bg-left" />
      <div className="relative mx-auto w-full max-w-md px-4 mx-4 bg-red-100/90 rounded-lg md:absolute md:right-[10%] md:mx-0 md:max-w-xl">
        <div className="flex flex-col space-y-6">
          <Result />
          <ShareToXButton />
          <ReturnTopButton />
        </div>
      </div>
    </div>
  )
}
