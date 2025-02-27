import LearningCardGenerator from '@/components/LearningCardGenerator'
import ContentLayout from '@/layouts/ContentLayout'

function Home() {
  return (
    <div className="bg-gray-100">
      <ContentLayout>
        <h1 className="my-8 text-center text-4xl font-bold">
          AI 학습 카드 생성기
        </h1>
        <LearningCardGenerator />
      </ContentLayout>
    </div>
  )
}

export default Home
