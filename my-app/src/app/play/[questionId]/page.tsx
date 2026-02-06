import { getQuestion } from "@/lib/play/get-question"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { AnswerField } from "./_components/answer-field"
import { ImageSkeleton } from "./_components/image-skeleton"
import { PixabayImage } from "./_components/pixabay-image"

export default async function QuestionPage({ params }: { params: Promise<{ questionId: string }> }) {
  const { questionId } = await params
  const question = await getQuestion(questionId)
  if (!question) {
    console.log(`問題No.${questionId}の取得に失敗しました`)
    notFound()
  }

  return (
    <>
      <Suspense fallback={<ImageSkeleton />}>
        <PixabayImage pixabayId={question.pixabay_id} />
      </Suspense>
      <div className="flex items-center space-x-6 py-6">
        <div className="basis-2/3 py-2">{question.target}の{question.scale}は？</div>
        <AnswerField unit={question.unit} />
      </div>
      { question?.supplement && <div className="text-gray-400">{`※ ${question.supplement}`}</div> }
    </>
  )
}
