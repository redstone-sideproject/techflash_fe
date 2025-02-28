import { useState } from 'react'

import { postLearningCard } from '@/apis/learningCard'
import LearningCard from '@/components/cards/LearningCard'
import MultipleChoiceQuestionCard from '@/components/cards/MultipleChoiceQuestionCard'
import OXQuestionCard from '@/components/cards/OXQuestionCard'
import SubjectiveQuestionCard from '@/components/cards/SubjectiveQuestionCard'
import TopicExplanationCard from '@/components/cards/TopicExplanationCard'
import TopicForm from '@/components/LearningCardGenerator/TopicForm'
import CardLayout from '@/layouts/CardLayout'

function LearningCardGenerator() {
  const [cards, setCards] = useState<JSX.Element[]>([])

  const handleLearningCard = () => {
    const newCards: JSX.Element[] = []

    const learningCards = postLearningCard()
    console.log(learningCards)
    newCards.push(
      <CardLayout category="개념요약">
        <TopicExplanationCard
          key="topic_explanation"
          topic={learningCards.question}
          content={learningCards.answer.topic_explanation}
        />
      </CardLayout>,
    )

    newCards.push(
      <CardLayout category="학습카드">
        {learningCards.answer.learning_cards.map((el) => (
          <LearningCard
            key={el.question}
            content={el}
          />
        ))}
      </CardLayout>,
    )

    newCards.push(
      <CardLayout category="OX 퀴즈">
        {learningCards.answer.quiz.ox_questions.map((el) => (
          <OXQuestionCard
            key={el.question}
            content={el}
          />
        ))}
      </CardLayout>,
    )

    newCards.push(
      <CardLayout category="객관식 퀴즈">
        {learningCards.answer.quiz.multiple_choice_questions.map((el) => (
          <MultipleChoiceQuestionCard
            key={el.question}
            content={el}
          />
        ))}
      </CardLayout>,
    )

    newCards.push(
      <CardLayout category="주관식 퀴즈">
        {learningCards.answer.quiz.subjective_questions.map((el) => (
          <SubjectiveQuestionCard
            key={el.question}
            content={el}
          />
        ))}
      </CardLayout>,
    )

    setCards(newCards)
  }

  return (
    <div>
      <div className="mb-8">
        <TopicForm fn={handleLearningCard} />
      </div>
      <div className="space-y-8">{cards}</div>
    </div>
  )
}

export default LearningCardGenerator
