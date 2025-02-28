import { Card, CardContent } from '@/components/ui/card'
import { TLearningCard } from '@/types/learningCard'

function LearningCard({ content }: { content: TLearningCard }) {
  return (
    <Card>
      <CardContent className="py-3 text-sm">
        <div className="mb-2">
          <p>
            <strong>Q</strong>.&nbsp;<span>{content.question}</span>
          </p>
        </div>
        <div>
          <p>
            <strong>A</strong>.&nbsp;<span>{content.answer}</span>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default LearningCard
