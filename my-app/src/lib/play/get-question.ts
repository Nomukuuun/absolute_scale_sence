import questions from "@/../public/data/questions.json"

type Question = {
  pixabay_id: string
  target: string
  scale: string
  unit: string
  supplement?: string
}

export function getQuestion(questionId: string): Question | undefined {
  const question = questions.find((q) => q.id === questionId)
  if (question) {
    return question["question"]
  } else {
    return undefined
  }
}

export function getAnswer(questionId: string): string | undefined {
  const question = questions.find((q) => q.id === questionId)
  if (question) {
    return question["answer"]
  } else {
    return undefined
  }
}
