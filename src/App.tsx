import { useState } from 'react'
import { GameMode } from './types'
import GameModeSelect from './pages/GameModeSelect'
import QuizGame from './pages/QuizGame'
import Result from './pages/Result'
import Memorize from './pages/Memorize'
import { GameResult } from './types'

type AppState = 'menu' | 'quiz' | 'memorize' | 'result'

function App() {
  const [appState, setAppState] = useState<AppState>('menu')
  const [gameMode, setGameMode] = useState<GameMode>('quiz')
  const [gameResult, setGameResult] = useState<GameResult | null>(null)

  const startGame = (mode: GameMode) => {
    setGameMode(mode)
    if (mode === 'quiz') {
      setAppState('quiz')
    } else {
      setAppState('memorize')
    }
  }

  const goToMenu = () => {
    setAppState('menu')
    setGameResult(null)
  }

  const showResult = (result: GameResult) => {
    setGameResult(result)
    setAppState('result')
  }

  const restartGame = () => {
    if (gameMode === 'quiz') {
      setAppState('quiz')
    } else {
      setAppState('memorize')
    }
    setGameResult(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {appState === 'menu' && (
        <GameModeSelect onSelectMode={startGame} />
      )}
      {appState === 'quiz' && (
        <QuizGame onGameComplete={showResult} onBackToMenu={goToMenu} />
      )}
      {appState === 'memorize' && (
        <Memorize onBackToMenu={goToMenu} />
      )}
      {appState === 'result' && gameResult && (
        <Result 
          result={gameResult} 
          onBackToMenu={goToMenu}
          onRestartGame={restartGame}
        />
      )}
    </div>
  )
}

export default App