import { GameResult, GameHistory } from '../types'

const STORAGE_KEY = 'euro-char-quiz-history'

export const saveGameResult = (result: GameResult): void => {
  try {
    const history = getGameHistory()
    
    // 同じ日時の結果が既に存在するかチェック（重複防止）
    const existingResult = history.results.find(r => r.date === result.date)
    if (existingResult) {
      return // 既に同じ結果が保存されている場合は何もしない
    }
    
    history.results.unshift(result)
    
    if (history.results.length > 10) {
      history.results = history.results.slice(0, 10)
    }
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history))
  } catch (error) {
    console.error('ゲーム結果の保存に失敗しました:', error)
  }
}

export const getGameHistory = (): GameHistory => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
  } catch (error) {
    console.error('ゲーム履歴の読み込みに失敗しました:', error)
  }
  
  return { results: [] }
}

export const clearGameHistory = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (error) {
    console.error('ゲーム履歴の削除に失敗しました:', error)
  }
}