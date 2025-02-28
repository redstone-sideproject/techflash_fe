import { instance } from '@/apis/axios'
import { TLearningCardResponse } from '@/types/learningCard'

const postLearningCard = async (
  question: string,
): Promise<TLearningCardResponse> => {
  const result = await instance.post(`/study-card`, { question })
  return result.data
}

export { postLearningCard }
