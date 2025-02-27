import testJson from './testJson.json'

import { TLearningCardResponse } from '@/types/learningCard'

const postLearningCard = (): TLearningCardResponse => {
  const result = testJson
  return result
}

export { postLearningCard }
