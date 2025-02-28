type TLearningCard = {
  question: string
  answer: string
}

// 객관식 문제 모델
type TMultipleChoiceQuestion = {
  question: string
  options: string[]
  answer: string
}

// OX 문제 모델
type TOXQuestion = {
  question: string
  answer: string
}

// 주관식 문제 모델
type TSubjectiveQuestion = {
  question: string
  answer_example: string
}

// 퀴즈 응답 모델 (객관식 + OX + 주관식)
type TQuizResponse = {
  multiple_choice_questions: TMultipleChoiceQuestion[]
  ox_questions: TOXQuestion[]
  subjective_questions: TSubjectiveQuestion[]
}

// 최종 응답 모델
type TLearningCardResponse = {
  question: string
  answer: {
    topic_explanation: string
    learning_cards: TLearningCard[]
    quiz: TQuizResponse
  }
}

export type {
  TLearningCard,
  TMultipleChoiceQuestion,
  TOXQuestion,
  TSubjectiveQuestion,
  TLearningCardResponse,
}
