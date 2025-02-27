import { RadioGroup, RadioGroupItem } from '@radix-ui/react-radio-group'
import { useState } from 'react'

import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { TOXQuestion } from '@/types/learningCard'

interface IOXQuestionProps {
  content: TOXQuestion
}

function OXQuestionCard({ content }: IOXQuestionProps) {
  const [isAnswer, setIsAnswer] = useState<boolean | null>(null)

  const handleSelect = (value: string) => {
    setIsAnswer(value === content.answer)
  }

  const getAnswerStyle = (isSelectedCorrect: boolean) => {
    if (isAnswer === null) {
      return ''
    }

    if (isAnswer)
      return isSelectedCorrect
        ? 'border-green-500 bg-green-100 text-green-700'
        : ''
    return isSelectedCorrect ? '' : 'border-red-500 bg-red-100 text-red-700'
  }

  return (
    <Card>
      <CardContent>
        <div className="space-y-2 text-sm">
          <p>
            <strong>Q</strong>.&nbsp;
            <span>{content.question}</span>
          </p>
          <RadioGroup
            className="space-y-3"
            onValueChange={handleSelect}
          >
            {['O', 'X'].map((value) => (
              <div key={value}>
                <Label
                  className={`flex cursor-pointer items-center space-x-2 rounded-md border-2 p-3 transition-all duration-300 ${getAnswerStyle(value === content.answer)}`}
                  htmlFor={`${content.question}-${value}`}
                >
                  <RadioGroupItem
                    className='sr-only"'
                    value={value}
                    id={`${content.question}-${value}`}
                  />
                  <span>{value}</span>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  )
}

export default OXQuestionCard
