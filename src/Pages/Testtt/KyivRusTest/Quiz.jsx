import React, { useState, useEffect } from 'react'
import questions from '../../../data/questions_clean_fixed.json'

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState([])
  const [results, setResults] = useState([])
  const [showResult, setShowResult] = useState(false)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [isTimerRunning, setIsTimerRunning] = useState(true)

  // Запуск таймера
  useEffect(() => {
    let timer
    if (isTimerRunning) {
      timer = setInterval(() => {
        setTimeElapsed(prev => prev + 1)
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [isTimerRunning])

  const formatTime = seconds => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`
  }

  const question = questions[currentQuestion]

  const correctAnswers = question.answers
    .map((a, i) => (a.correct ? i : null))
    .filter(a => a !== null)

  const isMulti = correctAnswers.length > 1

  const handleSelect = index => {
    if (isMulti) {
      if (selectedAnswers.includes(index)) {
        setSelectedAnswers(selectedAnswers.filter(i => i !== index))
      } else {
        setSelectedAnswers([...selectedAnswers, index])
      }
    } else {
      setSelectedAnswers([index])
    }
  }

  const handleSubmit = () => {
    const isCorrect =
      selectedAnswers.sort().join(',') === correctAnswers.sort().join(',')

    setResults([
      ...results,
      { questionId: question.id, isCorrect, selectedAnswers, correctAnswers }
    ])

    setSelectedAnswers([])

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setIsTimerRunning(false)
      setShowResult(true)
    }
  }

  if (showResult) {
    const correctCount = results.filter(r => r.isCorrect).length
    const percent = Math.round((correctCount / questions.length) * 100)

    return (
      <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
        {/* Декоративные элементы фона */}
        <div className='absolute top-0 left-0 w-full h-full opacity-5'>
          <div className='absolute top-10% left-5% w-72 h-72 bg-amber-600 rounded-full blur-3xl'></div>
        </div>

        <div className='w-full max-w-4xl mx-auto relative z-10'>
          <div className='text-center mb-10'>
            <h1 className='text-4xl sm:text-5xl font-bold mb-6'>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500'>
                Результати тесту
              </span>
            </h1>
            <div className='w-48 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto my-6 rounded-full'></div>

            <div className='p-6 bg-slate-800/40 rounded-xl border-l-4 border-emerald-400 backdrop-blur-sm mb-8'>
              <h2 className='text-3xl font-bold mb-4 text-emerald-300'>
                {correctCount} з {questions.length} правильних відповідей
              </h2>
              <div className='text-2xl mb-4 text-amber-200'>{percent}%</div>
              <div className='text-lg text-amber-200'>
                Час: {formatTime(timeElapsed)}
              </div>
              <div className='w-64 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto my-4 rounded-full'></div>
              <p className='text-xl text-amber-200'>
                {percent === 100
                  ? 'Відмінно! Ідеальний результат!'
                  : percent >= 70
                  ? 'Добре! Але є що повторити'
                  : 'Потрібно повторити матеріал ще раз'}
              </p>
            </div>
          </div>

          <div className='p-6 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
            <h3 className='text-2xl font-semibold mb-6 text-amber-300 text-center'>
              Розбір питань:
            </h3>
            <div className='space-y-6'>
              {results.map((res, idx) => {
                const q = questions.find(qq => qq.id === res.questionId)
                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-lg ${
                      res.isCorrect
                        ? 'bg-emerald-900/30 border-l-4 border-emerald-400'
                        : 'bg-rose-900/30 border-l-4 border-rose-400'
                    } backdrop-blur-sm`}
                  >
                    <p className='font-medium text-lg mb-3 text-amber-200'>
                      <span
                        className={`inline-flex items-center justify-center w-8 h-8 rounded-full mr-2 ${
                          res.isCorrect ? 'bg-emerald-500' : 'bg-rose-500'
                        }`}
                      >
                        {idx + 1}
                      </span>
                      {q.question}
                    </p>

                    {/* Картинки в разборе */}
                    {q.images &&
                      q.images.map((img, i) => (
                        <img
                          key={i}
                          src={img.src}
                          alt={img.alt || 'question image'}
                          className='max-w-full mb-3 rounded-lg border-2 border-amber-600/30 shadow-lg'
                        />
                      ))}

                    <ul className='ml-2 space-y-2'>
                      {q.answers.map((a, i) => (
                        <li
                          key={i}
                          className={`p-2 rounded-md ${
                            res.correctAnswers.includes(i)
                              ? 'bg-emerald-700/40 text-green-300 font-semibold'
                              : res.selectedAnswers.includes(i) &&
                                !res.correctAnswers.includes(i)
                              ? 'bg-rose-700/40 text-red-300'
                              : 'bg-slate-700/40 text-gray-300'
                          }`}
                        >
                          {a.text}
                          {res.correctAnswers.includes(i) && (
                            <span className='ml-2 text-emerald-300'>
                              ✓ Правильна відповідь
                            </span>
                          )}
                          {res.selectedAnswers.includes(i) &&
                            !res.correctAnswers.includes(i) && (
                              <span className='ml-2 text-rose-300'>
                                ✗ Ваша відповідь
                              </span>
                            )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>

          <div className='text-center mt-8'>
            <button
              onClick={() => {
                setCurrentQuestion(0)
                setSelectedAnswers([])
                setResults([])
                setShowResult(false)
                setTimeElapsed(0)
                setIsTimerRunning(true)
              }}
              className='px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-semibold text-lg hover:from-amber-600 hover:to-amber-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-amber-700/50'
            >
              Спробувати ще раз
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-amber-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-rose-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-emerald-600 rounded-full blur-3xl'></div>
      </div>

      <div className='w-full max-w-4xl mx-auto relative z-10'>
        {/* Заголовок теста */}
        <div className='text-center mb-6'>
          <h1 className='text-4xl sm:text-5xl font-bold mb-4'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500'>
              Тестування знань
            </span>
          </h1>
          <div className='w-48 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto my-4 rounded-full'></div>
        </div>

        {/* Прогресс и таймер */}
        <div className='flex justify-between items-center mb-6 p-4 bg-slate-800/40 rounded-xl backdrop-blur-sm'>
          <div className='text-amber-300 font-semibold'>
            Питання:{' '}
            <span className='text-amber-200'>{currentQuestion + 1}</span> /{' '}
            <span className='text-amber-200'>{questions.length}</span>
          </div>
          <div className='flex items-center text-amber-300 font-semibold'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 mr-2 text-amber-400'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
                clipRule='evenodd'
              />
            </svg>
            Час: {formatTime(timeElapsed)}
          </div>
        </div>

        {/* Прогресс-бар */}
        <div className='w-full bg-slate-700/40 rounded-full h-2 mb-6'>
          <div
            className='bg-gradient-to-r from-amber-500 to-amber-600 h-full rounded-full transition-all duration-500'
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`
            }}
          ></div>
        </div>

        {/* Вопрос */}
        <div className='p-6 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm mb-6'>
          <h2 className='text-xl font-semibold mb-4 text-amber-300'>
            {question.question}
          </h2>

          {/* Цитаты */}
          {question.quotes &&
            question.quotes.map((q, i) => (
              <blockquote
                key={i}
                className='p-4 mb-4 border-l-4 border-blue-400 bg-slate-700/40 italic text-blue-200 rounded-r-lg'
              >
                {q.text}
              </blockquote>
            ))}

          {/* Картинки */}
          {question.images &&
            question.images.map((img, i) => (
              <div key={i} className='mb-4 flex justify-center'>
                <img
                  src={img.src}
                  alt={img.alt || 'question image'}
                  className='max-w-full rounded-lg border-2 border-amber-600/30 shadow-lg'
                />
              </div>
            ))}
        </div>

        {/* Ответы */}
        <div className='p-6 bg-slate-800/40 rounded-xl border-l-4 border-emerald-400 backdrop-blur-sm mb-6'>
          <div className='space-y-3'>
            {question.answers.map((answer, index) => (
              <div
                key={index}
                className={`flex items-start p-4 rounded-lg cursor-pointer transition-all ${
                  selectedAnswers.includes(index)
                    ? 'bg-amber-700/30 border-2 border-amber-500/50'
                    : 'bg-slate-700/40 hover:bg-slate-700/60'
                }`}
                onClick={() => handleSelect(index)}
              >
                {/* Кастомный чекбокс/радиокнопка */}
                <div className='flex items-center h-5 mt-1 mr-3 relative'>
                  <div
                    className={`w-6 h-6 flex items-center justify-center rounded-md border-2 
                    ${isMulti ? 'rounded' : 'rounded-full'} 
                    ${
                      selectedAnswers.includes(index)
                        ? 'border-amber-500 bg-amber-500'
                        : 'border-amber-500/70 bg-slate-800'
                    }`}
                  >
                    {selectedAnswers.includes(index) && (
                      <svg
                        className={`w-4 h-4 text-white ${
                          isMulti ? '' : 'hidden'
                        }`}
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='3'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                    )}
                    {selectedAnswers.includes(index) && !isMulti && (
                      <div className='w-2 h-2 bg-white rounded-full'></div>
                    )}
                  </div>
                </div>
                <span className='text-lg text-gray-200'>{answer.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Кнопка ответа */}
        <div className='text-center'>
          <button
            onClick={handleSubmit}
            disabled={selectedAnswers.length === 0}
            className={`px-8 py-3 rounded-lg font-semibold text-lg transition-all transform ${
              selectedAnswers.length === 0
                ? 'bg-slate-700/40 text-slate-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 hover:scale-105 shadow-lg hover:shadow-amber-700/50'
            }`}
          >
            Відповісти
          </button>
        </div>
      </div>

      <style jsx>{`
        /* Скрываем стандартные чекбоксы */
        input[type='checkbox'],
        input[type='radio'] {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }
      `}</style>
    </div>
  )
}

export default Quiz
