export default async function QuestionPage({ params }: { params: { questionId: string } }) {
  const { questionId } = params
  // TODO: ここに画像を取得する処理を記述

  return (
    <div className="flex flex-col space-y-6">
      <h2 className="text-xl font-bold">問題 {questionId}</h2>
      <div className="border-2 rounded h-[300px] w-4/5 mx-auto">ここに画像を出す</div>
      <div className="flex justify-between">
        <div>この〇〇の長さは？</div>
        <div className="border-2 w-10 rounded"></div>
      </div>
    </div>
  )
}
