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

export const generateQuizQuestions = (count: number = 10): QuizQuestion[] => {
  const selectedCharacters = getRandomItems(charactersData, count)
  
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