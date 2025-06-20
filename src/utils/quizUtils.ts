import { QuizQuestion } from '../types'
import { charactersData } from '../data/charactersData'

export const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export const getRandomItems = <T>(array: T[], count: number): T[] => {
  const shuffled = shuffleArray(array)
  return shuffled.slice(0, count)
}

// GeoGuessrで判別困難な文字（4択クイズに不適切）
const excludeFromQuiz = [
  'Ç / ç',    // 4カ国：ポルトガル、フランス、トルコ、アルバニア
  'Ä / ä',    // 4カ国：スウェーデン、フィンランド、エストニア、ドイツ
  'Ö / ö',    // 4カ国：スウェーデン、フィンランド、エストニア、ドイツ
  'Ü / ü',    // 3カ国：エストニア、ドイツ、トルコ
  'Š / š',    // 7カ国：多数のスラブ系言語
  'Ž / ž',    // 7カ国：多数のスラブ系言語
  'Č / č',    // 4カ国：リトアニア、ラトビア、チェコ、スロベニア
]

export const generateQuizQuestions = (count: number = 10): QuizQuestion[] => {
  // クイズに適した文字のみをフィルタリング
  const quizSuitableCharacters = charactersData.filter(
    char => !excludeFromQuiz.includes(char.character)
  )
  
  const selectedCharacters = getRandomItems(quizSuitableCharacters, count)
  
  return selectedCharacters.map(charData => {
    const correctAnswer = charData.languages[Math.floor(Math.random() * charData.languages.length)]
    
    const wrongOptions = getAllLanguages()
      .filter(lang => !charData.languages.includes(lang))
    
    const selectedWrongOptions = getRandomItems(wrongOptions, 3)
    const allOptions = shuffleArray([correctAnswer, ...selectedWrongOptions])
    
    return {
      character: charData.character,
      correctAnswer,
      options: allOptions,
      description: charData.description
    }
  })
}

const getAllLanguages = (): string[] => {
  const allLanguages = new Set<string>()
  charactersData.forEach(charData => {
    charData.languages.forEach(lang => allLanguages.add(lang))
  })
  return Array.from(allLanguages)
}

export const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}