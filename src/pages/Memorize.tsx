import { useState } from 'react'
import { charactersData } from '../data/charactersData'
import FlagIcon from '../components/FlagIcon'

interface MemorizeProps {
  onBackToMenu: () => void
}

const Memorize = ({ onBackToMenu }: MemorizeProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  
  const filteredData = charactersData.filter(
    char =>
      char.character.toLowerCase().includes(searchTerm.toLowerCase()) ||
      char.languages.some(lang => lang.includes(searchTerm)) ||
      char.description.includes(searchTerm)
  )
  
  const currentChar = filteredData[currentIndex]
  
  const handlePrevious = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : filteredData.length - 1))
  }
  
  const handleNext = () => {
    setCurrentIndex(prev => (prev < filteredData.length - 1 ? prev + 1 : 0))
  }
  
  const handleSearch = (term: string) => {
    setSearchTerm(term)
    setCurrentIndex(0)
  }

  if (filteredData.length === 0) {
    return (
      <div className="min-h-screen p-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800">暗記モード</h1>
              <button
                onClick={onBackToMenu}
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
              >
                メニューに戻る
              </button>
            </div>
            
            <div className="mb-6">
              <input
                type="text"
                placeholder="文字、言語、説明で検索..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="text-center py-8">
              <p className="text-gray-500">検索結果が見つかりませんでした。</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">暗記モード</h1>
            <button
              onClick={onBackToMenu}
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
            >
              メニューに戻る
            </button>
          </div>
          
          <div className="mb-6">
            <input
              type="text"
              placeholder="文字、言語、説明で検索..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="text-center mb-6">
            <div className="text-sm text-gray-600 mb-2">
              {currentIndex + 1} / {filteredData.length}
            </div>
            <div className="euro-font text-5xl mb-4 text-blue-600 leading-tight">
              {currentChar.character}
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">使用言語</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {currentChar.languages.map((language, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2"
                >
                  <FlagIcon language={language} size="sm" />
                  {language}
                </span>
              ))}
            </div>
            
            <h3 className="text-lg font-bold text-gray-800 mb-3">説明</h3>
            <p className="text-gray-700 leading-relaxed">
              {currentChar.description}
            </p>
          </div>
          
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevious}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
            >
              ← 前へ
            </button>
            
            <div className="flex space-x-2">
              {filteredData.slice(Math.max(0, currentIndex - 2), currentIndex + 3).map((_, index) => {
                const actualIndex = Math.max(0, currentIndex - 2) + index
                return (
                  <button
                    key={actualIndex}
                    onClick={() => setCurrentIndex(actualIndex)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      actualIndex === currentIndex
                        ? 'bg-blue-600'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                )
              })}
            </div>
            
            <button
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
            >
              次へ →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Memorize