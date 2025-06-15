import { GameMode } from '../types'

interface GameModeSelectProps {
  onSelectMode: (mode: GameMode) => void
}

const GameModeSelect = ({ onSelectMode }: GameModeSelectProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            ヨーロッパ文字クイズ
          </h1>
          <p className="text-gray-600">
            GeoGuessr向けの文字判定練習
          </p>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={() => onSelectMode('quiz')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <div className="text-left">
              <div className="text-lg font-bold">文字10問モード</div>
              <div className="text-sm opacity-90">
                文字から言語を当てるクイズ
              </div>
            </div>
          </button>
          
          <button
            onClick={() => onSelectMode('memorize')}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            <div className="text-left">
              <div className="text-lg font-bold">暗記モード</div>
              <div className="text-sm opacity-90">
                文字と言語の対応を確認
              </div>
            </div>
          </button>
        </div>
        
        <div className="mt-8 text-center">
          <div className="euro-font text-xl text-gray-700 mb-2 leading-relaxed">
            Ñ Ç Ã Ø Å Ä Ö Ü Ł
          </div>
          <p className="text-xs text-gray-500 mb-6">
            ヨーロッパの特徴的な文字たち
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">参考動画</h3>
            <div className="space-y-2 text-xs text-gray-600">
              <div>
                <a 
                  href="https://www.youtube.com/watch?v=_EEJI0il6mY&t=977s" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  【GeoGueesr解説】絶対に知っておきたい攻略手法10選！｜初級編
                </a>
              </div>
              <div>
                <a 
                  href="https://www.youtube.com/watch?v=vAyrDesxYlo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  【GeoGuessr攻略】ヨーロッパの言語を見分けよう！
                </a>
              </div>
            </div>
          </div>

          <div className="text-center text-xs text-gray-500">
            <p>
              Developed by{' '}
              <a 
                href="https://github.com/sifue/guess-euro-char" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                @sifue (Soichiro Yoshimura)
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameModeSelect