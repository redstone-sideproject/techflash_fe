import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
} from '@/components/ui/card'

function TopicExplanationCard({
  topic,
  content,
}: {
  topic: string
  content: string
}) {
  return (
    <Card>
      <CardHeader>
        <CardDescription>{topic}에 대한 개념요약입니다.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{content}</p>
      </CardContent>
    </Card>
  )
}

export default TopicExplanationCard
