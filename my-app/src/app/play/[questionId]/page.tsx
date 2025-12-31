import { getQuestion } from "@/lib/play/get-question"

import Image from "next/image"
import { CurrentQuestionNumber } from "./_components/current-question-number"
import AnswerField from "./_components/answer-field"

export default async function QuestionPage({ params }: { params: Promise<{ questionId: string }> }) {
  const { questionId } = await params
  const question = await getQuestion(questionId)

  return (
    <div className="flex flex-col">
      <CurrentQuestionNumber />
      <div className="relative rounded h-[300px] w-auto bg-white">
        <Image src={`/questions_img/${questionId}.png`} alt="question_image" fill={true} />
      </div>
      { question?.supplement && <div className="text-gray-400">{`※ ${question.supplement}`}</div> }
      <div className="flex justify-between space-x-5 py-5">
        <div className="py-2">{question.target}の{question.scale}は？</div>
        <AnswerField unit={question.unit}/>
      </div>
    </div>
  )
}
