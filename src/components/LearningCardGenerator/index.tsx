import { useMutation } from '@tanstack/react-query'

import { postLearningCard } from '@/apis/learningCard'
import LearningCard from '@/components/cards/LearningCard'
import MultipleChoiceQuestionCard from '@/components/cards/MultipleChoiceQuestionCard'
import OXQuestionCard from '@/components/cards/OXQuestionCard'
import SubjectiveQuestionCard from '@/components/cards/SubjectiveQuestionCard'
import TopicExplanationCard from '@/components/cards/TopicExplanationCard'
import TopicForm from '@/components/LearningCardGenerator/TopicForm'
import CardLayout from '@/layouts/CardLayout'

function LearningCardGenerator() {
  const {
    data: learningCardData,
    isError,
    isPending,
    mutate: learningCardMutation,
  } = useMutation({
    mutationFn: postLearningCard,
  })

  const handleLearningCard = (question: string) => {
    learningCardMutation(question)
  }

  return (
    <div className="mx-auto max-w-4xl p-4">
      <div className="mb-8">
        <TopicForm fn={handleLearningCard} />
      </div>
      <div>
        {isError && (
          <div className="animate-pulse text-center text-red-500">
            카드를 생성하는 중 오류가 발생했습니다.
          </div>
        )}

        {isPending && (
          <div className="animate-pulse text-center text-green-500">
            카드를 생성하는 중 입니다. 최대 20 ~ 40초의 시간이 소요됩니다.
          </div>
        )}

        {learningCardData && (
          <div className="space-y-8">
            <CardLayout category="개념요약">
              <TopicExplanationCard
                key="topic_explanation"
                topic={learningCardData.question}
                content={learningCardData.answer.topic_explanation}
              />
            </CardLayout>

            <CardLayout category="학습카드">
              {learningCardData.answer.learning_cards.map((el) => (
                <LearningCard
                  key={el.question}
                  content={el}
                />
              ))}
            </CardLayout>

            <CardLayout category="OX 퀴즈">
              {learningCardData.answer.quiz.ox_questions.map((el) => (
                <OXQuestionCard
                  key={el.question}
                  content={el}
                />
              ))}
            </CardLayout>

            <CardLayout category="객관식 퀴즈">
              {learningCardData.answer.quiz.multiple_choice_questions.map(
                (el) => (
                  <MultipleChoiceQuestionCard
                    key={el.question}
                    content={el}
                  />
                ),
              )}
            </CardLayout>

            <CardLayout category="주관식 퀴즈">
              {learningCardData.answer.quiz.subjective_questions.map((el) => (
                <SubjectiveQuestionCard
                  key={el.question}
                  content={el}
                />
              ))}
            </CardLayout>
          </div>
        )}
      </div>
    </div>
  )
}

export default LearningCardGenerator
