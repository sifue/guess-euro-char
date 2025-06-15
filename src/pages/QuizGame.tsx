import { useState, useEffect } from 'react'
import { QuizQuestion, GameResult, QuestionResult } from '../types'
import { generateQuizQuestions, formatTime } from '../utils/quizUtils'

interface QuizGameProps {
  onGameComplete: (result: GameResult) => void
  onBackToMenu: () => void
}

const QuizGame = ({ onGameComplete, onBackToMenu }: QuizGameProps) => {
  const [questions] = useState<QuizQuestion[]>(() => generateQuizQuestions(10))
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [gameStarted, setGameStarted] = useState(false)
  const [questionResults, setQuestionResults] = useState<QuestionResult[]>([])

  const currentQuestion = questions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === questions.length - 1

  useEffect(() => {
    let interval: number | undefined
    if (gameStarted && !showResult) {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1)
      }, 1000)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [gameStarted, showResult])

  const startGame = () => {
    setGameStarted(true)
  }

  const handleAnswerSelect = (answer: string) => {
    if (selectedAnswer || showResult) return
    
    setSelectedAnswer(answer)
    const isCorrect = answer === currentQuestion.correctAnswer
    
    const questionResult: QuestionResult = {
      character: currentQuestion.character,
      correctAnswer: currentQuestion.correctAnswer,
      userAnswer: answer,
      isCorrect
    }
    
    setQuestionResults(prev => [...prev, questionResult])
    setShowResult(true)
  }

  const handleNext = () => {
    if (isLastQuestion) {
      const score = questionResults.filter(q => q.isCorrect).length
      const result: GameResult = {
        score,
        totalQuestions: questions.length,
        timeElapsed,
        questions: questionResults,
        date: new Date().toISOString()
      }
      onGameComplete(result)
    } else {
      setCurrentQuestionIndex(prev => prev + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    }
  }

  if (!gameStarted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            文字10問モード
          </h1>
          <p className="text-gray-600 mb-6">
            表示される文字がどの言語に使われるかを選択してください。
            <br />
            10問の制限時間はありません。
          </p>
          <button
            onClick={startGame}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 mb-4"
          >
            スタート
          </button>
          <button
            onClick={onBackToMenu}
            className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
          >
            メニューに戻る
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm text-gray-600">
              問題 {currentQuestionIndex + 1} / {questions.length}
            </div>
            <div className="text-sm text-gray-600">
              経過時間: {formatTime(timeElapsed)}
            </div>
          </div>
          
          <div className="text-center mb-8">
            <div className="euro-font text-5xl mb-4 text-blue-600 leading-tight">
              {currentQuestion.character}
            </div>
            <p className="text-lg text-gray-700">
              この文字はどの言語で使われますか？
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-3">
            {currentQuestion.options.map((option, index) => {
              let buttonClass = "w-full p-4 text-left border-2 rounded-xl font-medium transition-all duration-200 "
              
              if (selectedAnswer) {
                if (option === currentQuestion.correctAnswer) {
                  buttonClass += "bg-green-100 border-green-500 text-green-700"
                } else if (option === selectedAnswer) {
                  buttonClass += "bg-red-100 border-red-500 text-red-700"
                } else {
                  buttonClass += "bg-gray-100 border-gray-300 text-gray-500"
                }
              } else {
                buttonClass += "border-gray-300 hover:border-blue-500 hover:bg-blue-50 cursor-pointer"
              }
              
              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  className={buttonClass}
                  disabled={selectedAnswer !== null}
                >
                  {option}
                </button>
              )
            })}
          </div>
          
          {showResult && (
            <div className="mt-6 p-4 bg-gray-50 rounded-xl">
              <div className={`text-center font-bold text-lg mb-2 ${
                selectedAnswer === currentQuestion.correctAnswer ? 'text-green-600' : 'text-red-600'
              }`}>
                {selectedAnswer === currentQuestion.correctAnswer ? '正解！' : '不正解'}
              </div>
              <div className="text-sm text-gray-600 mb-4">
                {currentQuestion.description}
              </div>
              <button
                onClick={handleNext}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
              >
                {isLastQuestion ? '結果を見る' : '次の問題'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default QuizGame