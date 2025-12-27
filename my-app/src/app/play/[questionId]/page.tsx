import { CurrentQuestionNumber } from "./_components/current-question-number"
import AnswerField from "./_components/answer-field"

export default async function QuestionPage({ params }: { params: { questionId: string } }) {
  const { questionId } = params
  // TODO: ここに画像を取得する処理を記述
  return (
    <div className="flex flex-col space-y-6">
      <CurrentQuestionNumber />
      <div className="border-2 rounded h-[300px] w-4/5 mx-auto">ここに画像を出す</div>
      <div className="flex justify-between space-x-5 p-5">
        <div className="py-2">この〇〇の長さは？</div>
        <AnswerField />
      </div>
    </div>
  )
}
