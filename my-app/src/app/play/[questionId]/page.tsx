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
      <div className="relative rounded h-[300px] w-auto bg-white">
        <Suspense fallback={<ImageSkeleton />}>
          <Image
            src={hit.largeImageURL}
            alt={hit.tags}
            fill={true}
          />
        </Suspense>
      </div>
      { question?.supplement && <div className="text-gray-400">{`※ ${question.supplement}`}</div> }
      <div className="flex justify-between space-x-5 py-5">
        <div className="py-2">{question.target}の{question.scale}は？</div>
        <AnswerField unit={question.unit} />
      </div>
    </div>
  )
}
