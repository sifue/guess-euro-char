import { useEffect, useState } from 'react'
import { GameResult } from '../types'
import { formatTime } from '../utils/quizUtils'
import { saveGameResult, getGameHistory } from '../utils/storage'
import FlagIcon from '../components/FlagIcon'

interface ResultProps {
  result: GameResult
  onBackToMenu: () => void
  onRestartGame: () => void
}

const Result = ({ result, onBackToMenu, onRestartGame }: ResultProps) => {
  const [history, setHistory] = useState<GameResult[]>([])

  useEffect(() => {
    // 結果を保存（重複チェックはsaveGameResult内で行われる）
    saveGameResult(result)
    
    // 保存後の履歴を読み込み
    const gameHistory = getGameHistory()
    setHistory(gameHistory.results)
  }, [result.date]) // result.dateが変わった時のみ実行

  const percentage = Math.round((result.score / result.totalQuestions) * 100)
  
  const getScoreColor = (score: number, total: number) => {
    const percent = (score / total) * 100
    if (percent >= 80) return 'text-green-600'
    if (percent >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ja-JP', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-6 mb-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              結果発表
            </h1>
            <div className={`text-5xl font-bold mb-4 ${getScoreColor(result.score, result.totalQuestions)}`}>
              {result.score} / {result.totalQuestions}
            </div>
            <div className="text-xl text-gray-600 mb-2">
              正答率: {percentage}%
            </div>
            <div className="text-lg text-gray-600">
              経過時間: {formatTime(result.timeElapsed)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                今回の問題結果
              </h2>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {result.questions.map((question, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border-2 ${
                      question.isCorrect
                        ? 'bg-green-50 border-green-200'
                        : 'bg-red-50 border-red-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="euro-font text-base leading-tight">
                        {question.character}
                      </div>
                      <div className={`text-sm font-bold ${
                        question.isCorrect ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {question.isCorrect ? '正解' : '不正解'}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span>正解:</span>
                        <div className="flex items-center gap-1">
                          <FlagIcon language={question.correctAnswer} size="sm" />
                          <span>{question.correctAnswer}</span>
                        </div>
                      </div>
                      {!question.isCorrect && (
                        <div className="flex items-center gap-2 flex-wrap">
                          <span>あなたの回答:</span>
                          <div className="flex items-center gap-1">
                            <FlagIcon language={question.userAnswer} size="sm" />
                            <span>{question.userAnswer}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                過去の記録
              </h2>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {history.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">
                    まだ記録がありません
                  </p>
                ) : (
                  history.map((record, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border ${
                        index === 0 ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div className={`font-bold ${getScoreColor(record.score, record.totalQuestions)}`}>
                          {record.score}/{record.totalQuestions} ({Math.round((record.score / record.totalQuestions) * 100)}%)
                        </div>
                        <div className="text-sm text-gray-600">
                          {formatTime(record.timeElapsed)}
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {formatDate(record.date)}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-4 justify-center">
            <button
              onClick={onRestartGame}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
            >
              もう一度挑戦
            </button>
            <button
              onClick={onBackToMenu}
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
            >
              メニューに戻る
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Result