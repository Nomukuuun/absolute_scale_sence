import { getQuestion } from "@/lib/play/get-question"
import Image from "next/image"
import { notFound } from "next/navigation"
import { CurrentQuestionNumber } from "./_components/current-question-number"
import { AnswerField } from "./_components/answer-field"
import { Suspense } from "react"
import { ImageSkeleton } from "./_components/image-skeleton"
import { getPixabayImage } from "@/lib/play/get-pixabay-image"

export default async function QuestionPage({ params }: { params: Promise<{ questionId: string }> }) {
  const { questionId } = await params
  const question = await getQuestion(questionId)
  if (!question) {
    console.log(`問題No.${questionId}の取得に失敗しました`)
    notFound()
  }

  const hit = await getPixabayImage(question.pixabay_id)
  if (!hit) return notFound()

  return (
    <div className="flex flex-col">
      <CurrentQuestionNumber />
      <Suspense fallback={<ImageSkeleton />}>
        <div className="relative rounded h-[300px] md:h-[390px] w-auto bg-white">
          <Image
            src={hit.largeImageURL}
            alt={hit.tags}
            sizes="(max-width: 768px) 100vw"
            fill
          />
        </div>
      </Suspense>
      <div className="flex space-x-6 py-6">
        <div className="basis-2/3 py-2">{question.target}の{question.scale}は？</div>
        <AnswerField unit={question.unit} />
      </div>
      { question?.supplement && <div className="text-gray-400">{`※ ${question.supplement}`}</div> }
      <div className="text-gray-400">
        ※ 画像は
        <a href={hit.pageURL} target="_blank" rel="noreferrer" className="underline"> Pixabay </a>
        より取得しています。
      </div>
    </div>
  )
}
