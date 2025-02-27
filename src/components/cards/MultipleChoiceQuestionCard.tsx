import { useState } from 'react'

import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { TMultipleChoiceQuestion } from '@/types/learningCard'

interface IMultipleChoiceQuestionProps {
  content: TMultipleChoiceQuestion
}

const indexToAnswer: { [key: string]: string } = {
  '0': 'A',
  '1': 'B',
  '2': 'C',
  '3': 'D',
}

function MultipleChoiceQuestionCard({ content }: IMultipleChoiceQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)

  const handleSelect = (value: string) => {
    setSelectedAnswer(value)
  }

  const getStyle = (curValue: string) => {
    if (!selectedAnswer) {
      return ''
    }

    const isSelectedCorrect = indexToAnswer[curValue] === content.answer
    const isSelected = curValue === selectedAnswer

    if (isSelected) {
      return isSelectedCorrect ? 'text-green-700' : 'text-red-700'
    }

    return ''
  }

  return (
    <Card>
      <CardContent>
        <div className="space-y-2 text-sm">
          <p>
            <strong>Q</strong>.&nbsp;
            <span>{content.question}</span>
          </p>

          <RadioGroup onValueChange={handleSelect}>
            {content.options.map((value, index) => (
              <div
                key={value}
                className={`flex items-center space-x-3 ${getStyle(`${index}`)}`}
              >
                <RadioGroupItem
                  id={`${content.question}-${value}-${index}`}
                  value={`${index}`}
                />
                <Label
                  className="leading-5"
                  htmlFor={`${content.question}-${value}-${index}`}
                >
                  {value}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  )
}

export default MultipleChoiceQuestionCard
