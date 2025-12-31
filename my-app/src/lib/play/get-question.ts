import questions from "@/../public/data/questions.json"

type Question = {
  id: string
  target: string
  scale: string
  unit: string
  supplement?: string
}

export function getQuestion(questionId: string): Question | undefined {
  const question = questions.find((q) => q.id === questionId)["question"]
  if (question) {
    return question
  } else {
    return undefined
  }
}

export function getAnswer(questionId: string): string | undefined {
  const answer = questions.find((q) => q.id === questionId)["answer"]
  if (answer) {
    return answer
  } else {
    return undefined
  }
}
