import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent } from '@/components/ui/card'
import { TSubjectiveQuestion } from '@/types/learningCard'

interface ISubjectiveQuestionCardProps {
  content: TSubjectiveQuestion
}

function SubjectiveQuestionCard({ content }: ISubjectiveQuestionCardProps) {
  return (
    <Card>
      <CardContent>
        <Accordion type="multiple">
          <AccordionItem value={content.question}>
            <AccordionTrigger>
              <p>
                <strong>Q. </strong>
                {content.question}
              </p>
            </AccordionTrigger>
            <textarea
              className="w-full resize-none border px-2 py-4 text-sm"
              placeholder="답변을 작성하세요."
            ></textarea>
            <AccordionContent>{content.answer_example}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}

export default SubjectiveQuestionCard
