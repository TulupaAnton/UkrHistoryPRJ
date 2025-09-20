import React, { useState } from 'react'
import questionsData from '../../../data/questions_clean_fixed.json' // Імпорт JSON файлу

const Test = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)

  const currentQuestion = questionsData[currentQuestionIndex]

  // Визначення, чи питання вимагає множинного вибору (вибрати кілька правильних відповідей)
  const isMultipleChoice =
    currentQuestion.answers.filter(ans => ans.correct).length > 1 ||
    currentQuestion.answers.some(ans => ans.text.includes(' ')) // Для відповідей типу "3 5"

  const handleAnswerSelect = answerText => {
    if (isMultipleChoice) {
      setSelectedAnswers(prev => {
        const currentSelections = prev[currentQuestion.id] || []
        if (currentSelections.includes(answerText)) {
          return {
            ...prev,
            [currentQuestion.id]: currentSelections.filter(
              text => text !== answerText
            )
          }
        } else {
          return {
            ...prev,
            [currentQuestion.id]: [...currentSelections, answerText]
          }
        }
      })
    } else {
      setSelectedAnswers(prev => ({
        ...prev,
        [currentQuestion.id]: [answerText]
      }))
    }
  }

  const handleSubmit = () => {
    const selected = selectedAnswers[currentQuestion.id] || []
    const correctAnswers = currentQuestion.answers
      .filter(ans => ans.correct)
      .map(ans => ans.text)

    let isCorrect = false
    if (isMultipleChoice) {
      isCorrect =
        selected.length === correctAnswers.length &&
        selected.sort().every((val, idx) => val === correctAnswers.sort()[idx])
    } else {
      isCorrect = selected[0] === correctAnswers[0]
    }

    if (isCorrect) {
      setScore(prev => prev + 1)
    }

    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
    } else {
      setShowResults(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswers({})
    setScore(0)
    setShowResults(false)
  }

  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-4'>
      <div className='max-w-2xl w-full bg-white shadow-lg rounded-lg p-6'>
        {showResults ? (
          <div className='text-center'>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>
              Результати тесту
            </h2>
            <p className='text-lg text-gray-600 mb-4'>
              Ви набрали {score} з {questionsData.length} балів
            </p>
            <button
              onClick={handleRestart}
              className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'
            >
              Пройти тест ще раз
            </button>
          </div>
        ) : (
          <div>
            <h2 className='text-xl font-semibold text-gray-800 mb-4'>
              Питання {currentQuestionIndex + 1} з {questionsData.length}
            </h2>
            <p className='text-lg text-gray-700 mb-4'>
              {currentQuestion.question}
            </p>
            {currentQuestion.images &&
              currentQuestion.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img.src}
                  alt={img.alt}
                  className='max-w-full h-auto mb-4 rounded'
                />
              ))}
            {currentQuestion.quotes &&
              currentQuestion.quotes.map((quote, idx) => (
                <blockquote
                  key={idx}
                  className='border-l-4 border-blue-500 pl-4 italic text-gray-600 mb-4'
                >
                  {quote.text}
                </blockquote>
              ))}
            <div className='space-y-2'>
              {currentQuestion.answers.map((ans, idx) => {
                const isSelected = (
                  selectedAnswers[currentQuestion.id] || []
                ).includes(ans.text)
                return (
                  <label key={idx} className='flex items-center space-x-2'>
                    <input
                      type={isMultipleChoice ? 'checkbox' : 'radio'}
                      name={`question-${currentQuestion.id}`}
                      checked={isSelected}
                      onChange={() => handleAnswerSelect(ans.text)}
                      className='h-5 w-5 text-blue-500'
                    />
                    <span className='text-gray-700'>{ans.text}</span>
                    {ans.images &&
                      ans.images.map((img, imgIdx) => (
                        <img
                          key={imgIdx}
                          src={img.src}
                          alt={img.alt}
                          className='max-w-xs h-auto ml-2'
                        />
                      ))}
                  </label>
                )
              })}
            </div>
            <button
              onClick={handleSubmit}
              disabled={!selectedAnswers[currentQuestion.id]}
              className='mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed'
            >
              {currentQuestionIndex < questionsData.length - 1
                ? 'Наступне питання'
                : 'Завершити тест'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Test
