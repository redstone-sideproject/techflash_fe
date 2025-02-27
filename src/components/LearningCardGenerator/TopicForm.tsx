import { useState } from 'react'
import toast from 'react-hot-toast'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

function TopicForm({ fn }: { fn: () => void }) {
  const [topic, setTopic] = useState<string>('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (topic.trim() === '') {
      toast.error('주제를 입력해주세요!', {
        duration: 1000,
      })
      return
    }
    fn()
  }

  return (
    <div className="max-w-4xl">
      <form onSubmit={handleSubmit}>
        <Input
          className="mb-4"
          type="text"
          placeholder="학습하고 싶은 주제를 입력하세요"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <Button
          className="w-full"
          type="submit"
        >
          학습 카드 생성
        </Button>
      </form>
    </div>
  )
}

export default TopicForm
