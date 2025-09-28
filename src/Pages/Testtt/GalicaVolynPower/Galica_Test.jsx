import { useState, useEffect } from 'react'
import questions from '../../../data/questions_for_galicia.json'

export function Galica_Test () {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answersRecord, setAnswersRecord] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [testStarted, setTestStarted] = useState(false)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [timerActive, setTimerActive] = useState(false)
  const [sequenceOrder, setSequenceOrder] = useState([])
  const [matchingAnswers, setMatchingAnswers] = useState({})

  // Таймер
  useEffect(() => {
    let interval = null
    if (timerActive) {
      interval = setInterval(() => {
        setTimeElapsed(time => time + 1)
      }, 1000)
    } else if (!timerActive && timeElapsed !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [timerActive, timeElapsed])

  const formatTime = seconds => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`
  }

  const startTest = () => {
    setTestStarted(true)
    setTimerActive(true)
    setTimeElapsed(0)
    setSequenceOrder([])
    setMatchingAnswers({})
  }

  // Проверка на наличие вопросов
  if (!questions || questions.length === 0) {
    return (
      <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-8 px-4 flex items-center justify-center'>
        <p className='text-xl'>Вопросы не найдены</p>
      </div>
    )
  }

  const currentQuestion = questions[currentIndex]

  // Проверка на существование текущего вопроса
  if (!currentQuestion) {
    return (
      <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-8 px-4 flex items-center justify-center'>
        <p className='text-xl'>Вопрос не найден</p>
      </div>
    )
  }

  // Функция для выделения ключевых частей в тексте вопроса
  const formatQuestionText = text => {
    if (!text) return ''

    let formattedText = text.replace(
      /(\d{3,4})\s*р(ік|оку)?/gi,
      '<span class="text-yellow-300 font-bold">$1 р.</span>'
    )
    formattedText = formattedText.replace(
      /([А-ЯІЇЄҐ][а-яіїєґ']+\s[А-ЯІЇЄҐ][а-яіїєґ']+)/g,
      '<span class="text-blue-300 font-semibold">$1</span>'
    )

    const importantTerms = [
      'Галицько-Волинськ(а|ої|е)|Королівств(о|а)|княз(ь|я)|Данил(о|а)|Лев|Юрій|монгол(и|ьск)|Орд(а|и)|ярлик|митрополія'
    ]
    importantTerms.forEach(term => {
      const regex = new RegExp(term, 'gi')
      formattedText = formattedText.replace(
        regex,
        '<span class="text-green-300 font-semibold">$&</span>'
      )
    })

    formattedText = formattedText.replace(
      /(м\.\s*)?(Львів|Володимир|Галич|Київ|Холм|Дорогочин)/gi,
      '<span class="text-purple-300 font-semibold">$&</span>'
    )

    return formattedText
  }

  // Функция для проверки sequence ответов
  const handleSequenceAnswer = () => {
    if (!currentQuestion) return

    const isCorrect =
      sequenceOrder.length === currentQuestion.answer.length &&
      sequenceOrder.every(
        (value, index) =>
          value.trim().toUpperCase() ===
          currentQuestion.answer[index].trim().toUpperCase()
      )

    setAnswersRecord([
      ...answersRecord,
      {
        question: currentQuestion.question,
        quets: currentQuestion.quets,
        selected: sequenceOrder.join(' → '),
        correct: isCorrect,
        answers: currentQuestion.answers,
        correctSequence: currentQuestion.answer,
        type: 'sequence',
        userSequence: [...sequenceOrder]
      }
    ])

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setSequenceOrder([])
    } else {
      setTimerActive(false)
      setShowResults(true)
    }
  }

  // Функция для проверки matching ответов
  const handleMatchingAnswer = () => {
    if (!currentQuestion) return

    // Проверяем, все ли соответствия установлены
    const allMatched = currentQuestion.leftColumn.every(
      item => matchingAnswers[item.label]
    )

    if (!allMatched) {
      alert('Будь ласка, встановіть всі відповідності')
      return
    }

    // Проверяем правильность ответов
    const isCorrect = Object.entries(matchingAnswers).every(
      ([leftLabel, rightLabel]) =>
        currentQuestion.answer[leftLabel] === rightLabel
    )

    setAnswersRecord([
      ...answersRecord,
      {
        question: currentQuestion.question,
        quets: currentQuestion.quets,
        selected: Object.entries(matchingAnswers)
          .map(([left, right]) => `${left} → ${right}`)
          .join('; '),
        correct: isCorrect,
        answers: {
          leftColumn: currentQuestion.leftColumn,
          rightColumn: currentQuestion.rightColumn
        },
        correctMatches: currentQuestion.answer,
        type: 'matching',
        userMatches: { ...matchingAnswers }
      }
    ])

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setMatchingAnswers({})
    } else {
      setTimerActive(false)
      setShowResults(true)
    }
  }

  const handleAnswer = selectedAnswer => {
    if (!currentQuestion) return

    setAnswersRecord([
      ...answersRecord,
      {
        question: currentQuestion.question,
        quets: currentQuestion.quets,
        selected: selectedAnswer.text,
        correct: selectedAnswer.correct,
        answers: currentQuestion.answers,
        type: 'standard'
      }
    ])

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setSequenceOrder([])
      setMatchingAnswers({})
    } else {
      setTimerActive(false)
      setShowResults(true)
    }
  }

  // Функции для управления sequence вопросами
  const moveSequenceItem = (index, direction) => {
    const newOrder = [...sequenceOrder]
    if (direction === 'up' && index > 0) {
      ;[newOrder[index], newOrder[index - 1]] = [
        newOrder[index - 1],
        newOrder[index]
      ]
    } else if (direction === 'down' && index < newOrder.length - 1) {
      ;[newOrder[index], newOrder[index + 1]] = [
        newOrder[index + 1],
        newOrder[index]
      ]
    }
    setSequenceOrder(newOrder)
  }

  const addToSequence = label => {
    if (!sequenceOrder.includes(label)) {
      setSequenceOrder([...sequenceOrder, label])
    }
  }

  const removeFromSequence = index => {
    const newOrder = sequenceOrder.filter((_, i) => i !== index)
    setSequenceOrder(newOrder)
  }

  // Функции для управления matching вопросами
  const handleMatchingSelect = (leftLabel, rightLabel) => {
    setMatchingAnswers(prev => ({
      ...prev,
      [leftLabel]: rightLabel
    }))
  }

  const clearMatchingAnswer = leftLabel => {
    setMatchingAnswers(prev => {
      const newAnswers = { ...prev }
      delete newAnswers[leftLabel]
      return newAnswers
    })
  }

  const resetTest = () => {
    setCurrentIndex(0)
    setAnswersRecord([])
    setShowResults(false)
    setTestStarted(false)
    setTimeElapsed(0)
    setTimerActive(false)
    setSequenceOrder([])
    setMatchingAnswers({})
  }

  // Финальные результаты
  if (showResults) {
    const correctCount = answersRecord.filter(a => a.correct).length
    const incorrectCount = answersRecord.length - correctCount
    const percentage = Math.round((correctCount / answersRecord.length) * 100)

    return (
      <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-full opacity-5'>
          <div className='absolute top-10% left-5% w-72 h-72 bg-green-600 rounded-full blur-3xl'></div>
          <div className='absolute bottom-10% right-5% w-96 h-96 bg-emerald-600 rounded-full blur-3xl'></div>
        </div>

        <div className='max-w-4xl mx-auto relative z-10'>
          <div className='text-center mb-8'>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4'>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-green-400 to-green-500'>
                Результати тесту
              </span>
            </h1>
            <div className='w-32 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full'></div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
            <div className='bg-gradient-to-br from-green-900 to-slate-800 rounded-2xl p-6 border-2 border-green-500/40 text-center'>
              <div className='text-4xl font-bold text-green-300 mb-2'>
                {correctCount}
              </div>
              <div className='text-green-200 text-lg'>
                Правильних відповідей
              </div>
            </div>

            <div className='bg-gradient-to-br from-yellow-900 to-slate-800 rounded-2xl p-6 border-2 border-yellow-500/40 text-center'>
              <div className='text-4xl font-bold text-yellow-300 mb-2'>
                {percentage}%
              </div>
              <div className='text-yellow-200 text-lg'>Успішність</div>
            </div>

            <div className='bg-gradient-to-br from-blue-900 to-slate-800 rounded-2xl p-6 border-2 border-blue-500/40 text-center'>
              <div className='text-4xl font-bold text-blue-300 mb-2'>
                {formatTime(timeElapsed)}
              </div>
              <div className='text-blue-200 text-lg'>Час проходження</div>
            </div>
          </div>

          <div className='bg-slate-800/40 rounded-2xl p-6 border-l-4 border-emerald-400 backdrop-blur-sm'>
            <h2 className='text-2xl font-bold text-emerald-300 mb-6 text-center'>
              Детальні результати
            </h2>

            <div className='space-y-6'>
              {answersRecord.map((a, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border-l-4 ${
                    a.correct
                      ? 'bg-green-900/20 border-green-400'
                      : 'bg-red-900/20 border-red-400'
                  }`}
                >
                  <div className='flex items-start gap-4'>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        a.correct ? 'bg-green-500' : 'bg-red-500'
                      }`}
                    >
                      {a.correct ? '✓' : '✗'}
                    </div>
                    <div className='flex-1'>
                      <h3 className='text-lg font-semibold text-white mb-2'>
                        Питання {index + 1}:
                        <span
                          className='ml-2'
                          dangerouslySetInnerHTML={{
                            __html: formatQuestionText(a.question)
                          }}
                        />
                      </h3>
                      {a.quets && (
                        <div className='bg-slate-900/50 rounded-lg p-4 my-3 border-l-4 border-amber-400'>
                          <p
                            className='text-amber-200 italic text-base leading-relaxed text-center'
                            dangerouslySetInnerHTML={{
                              __html: formatQuestionText(a.quets)
                            }}
                          />
                        </div>
                      )}

                      {a.type === 'sequence' ? (
                        <div className='space-y-3'>
                          <div>
                            <p
                              className={`text-sm ${
                                a.correct ? 'text-green-300' : 'text-red-300'
                              }`}
                            >
                              <span className='font-semibold'>
                                Ваша послідовність:
                              </span>{' '}
                              {a.selected}
                            </p>
                            {!a.correct && (
                              <p className='text-sm text-green-300 mt-2'>
                                <span className='font-semibold'>
                                  Правильна послідовність:
                                </span>{' '}
                                {a.correctSequence.join(' → ')}
                              </p>
                            )}
                          </div>
                        </div>
                      ) : a.type === 'matching' ? (
                        <div className='space-y-3'>
                          <div>
                            <p
                              className={`text-sm ${
                                a.correct ? 'text-green-300' : 'text-red-300'
                              }`}
                            >
                              <span className='font-semibold'>
                                Ваші відповіді:
                              </span>{' '}
                              {a.selected}
                            </p>
                            {!a.correct && (
                              <div className='text-sm text-green-300 mt-2'>
                                <span className='font-semibold'>
                                  Правильні відповіді:
                                </span>
                                <div className='mt-1'>
                                  {Object.entries(a.correctMatches).map(
                                    ([left, right]) => (
                                      <div key={left}>
                                        {left} → {right}
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div className='space-y-2'>
                          <p
                            className={`text-sm ${
                              a.correct ? 'text-green-300' : 'text-red-300'
                            }`}
                          >
                            <span className='font-semibold'>
                              Ваша відповідь:
                            </span>{' '}
                            {a.selected}
                          </p>
                          {!a.correct && a.answers && (
                            <p className='text-sm text-green-300'>
                              <span className='font-semibold'>
                                Правильна відповідь:
                              </span>{' '}
                              {a.answers.find(ans => ans.correct)?.text ||
                                'Не найдено'}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='text-center mt-8'>
            <button
              onClick={resetTest}
              className='bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg'
            >
              Пройти тест ще раз
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (!testStarted) {
    return (
      <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-full opacity-5'>
          <div className='absolute top-10% left-5% w-72 h-72 bg-purple-600 rounded-full blur-3xl'></div>
          <div className='absolute bottom-10% right-5% w-96 h-96 bg-indigo-600 rounded-full blur-3xl'></div>
        </div>

        <div className='max-w-2xl mx-auto text-center relative z-10'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500'>
              Тест з історії
            </span>
          </h1>
          <h2 className='text-2xl sm:text-3xl text-purple-300 font-bold mb-8'>
            Галицько-Волинська держава
          </h2>

          <div className='bg-slate-800/40 rounded-2xl p-8 border-2 border-purple-500/30 backdrop-blur-sm mb-8'>
            <div className='space-y-4 text-lg'>
              <p className='text-purple-200'>
                Кількість питань:{' '}
                <span className='font-bold text-white'>{questions.length}</span>
              </p>
            </div>
          </div>

          <button
            onClick={startTest}
            className='bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-4 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl'
          >
            Почати тест
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-blue-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-cyan-600 rounded-full blur-3xl'></div>
      </div>

      <div className='max-w-4xl mx-auto relative z-10'>
        <div className='flex justify-between items-center mb-8'>
          <div className='flex-1 mr-4'>
            <div className='bg-slate-700/50 rounded-full h-3'>
              <div
                className='bg-gradient-to-r from-blue-400 to-cyan-400 h-3 rounded-full transition-all duration-300'
                style={{
                  width: `${((currentIndex + 1) / questions.length) * 100}%`
                }}
              ></div>
            </div>
            <div className='text-sm text-slate-400 mt-2'>
              Питання {currentIndex + 1} з {questions.length}
            </div>
          </div>
          <div className='bg-slate-800/60 rounded-full px-4 py-2 border border-cyan-500/30'>
            <span className='text-cyan-300 font-mono text-lg'>
              {formatTime(timeElapsed)}
            </span>
          </div>
        </div>

        <div className='bg-slate-800/40 rounded-2xl p-6 sm:p-8 border-l-4 border-blue-400 backdrop-blur-sm mb-8'>
          <h2 className='text-2xl sm:text-3xl font-bold text-white mb-6 text-center leading-relaxed'>
            <span
              dangerouslySetInnerHTML={{
                __html: formatQuestionText(currentQuestion.question)
              }}
            />
          </h2>

          {currentQuestion.quets && (
            <div className='bg-slate-900/50 rounded-xl p-6 mb-6 border-l-4 border-amber-400'>
              <p
                className='text-amber-200 italic text-lg sm:text-xl leading-relaxed text-center'
                style={{
                  textAlign: 'left',
                  direction: 'ltr',
                  wordWrap: 'break-word'
                }}
                dangerouslySetInnerHTML={{
                  __html: formatQuestionText(currentQuestion.quets)
                }}
              />
            </div>
          )}

          {currentQuestion.images && currentQuestion.images.length > 0 && (
            <div className='flex justify-center gap-4 mb-6 flex-wrap'>
              {currentQuestion.images.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt={img.alt}
                  className='max-w-full sm:max-w-xs rounded-xl shadow-lg border-2 border-blue-500/30'
                />
              ))}
            </div>
          )}

          {currentQuestion.type === 'sequence' ? (
            <div className='space-y-6'>
              <div className='bg-slate-900/30 rounded-xl p-4'>
                <h3 className='text-lg font-semibold text-white mb-3'>
                  Доступні елементи:
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                  {currentQuestion.answers.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => addToSequence(item.label)}
                      disabled={sequenceOrder.includes(item.label)}
                      className={`p-3 rounded-lg border-2 text-left transition-all ${
                        sequenceOrder.includes(item.label)
                          ? 'border-green-500/50 bg-green-500/20 cursor-not-allowed'
                          : 'border-blue-500/30 bg-blue-500/10 hover:border-blue-400/50 hover:bg-blue-500/20'
                      }`}
                    >
                      <div className='flex items-start gap-3'>
                        <span className='bg-blue-500 text-white px-2 py-1 rounded text-sm font-mono shrink-0'>
                          {item.label}
                        </span>
                        <span className='text-white text-sm'>{item.text}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className='bg-slate-900/30 rounded-xl p-4'>
                <h3 className='text-lg font-semibold text-white mb-3'>
                  Ваша послідовність:
                </h3>
                {sequenceOrder.length === 0 ? (
                  <p className='text-slate-400 italic text-center py-4'>
                    Додайте елементи, натиснувши на них вище
                  </p>
                ) : (
                  <div className='space-y-2'>
                    {sequenceOrder.map((label, index) => {
                      const item = currentQuestion.answers.find(
                        a => a.label === label
                      )
                      return (
                        <div
                          key={index}
                          className='flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg'
                        >
                          <div className='flex items-center gap-2'>
                            <span className='bg-amber-500 text-white px-2 py-1 rounded text-sm font-mono'>
                              {index + 1}
                            </span>
                            <span className='bg-blue-500 text-white px-2 py-1 rounded text-sm font-mono'>
                              {label}
                            </span>
                          </div>
                          <span className='text-white text-sm flex-1'>
                            {item?.text || 'Элемент не найден'}
                          </span>
                          <div className='flex gap-1'>
                            <button
                              onClick={() => moveSequenceItem(index, 'up')}
                              disabled={index === 0}
                              className='p-1 rounded hover:bg-slate-700 disabled:opacity-30'
                            >
                              ↑
                            </button>
                            <button
                              onClick={() => moveSequenceItem(index, 'down')}
                              disabled={index === sequenceOrder.length - 1}
                              className='p-1 rounded hover:bg-slate-700 disabled:opacity-30'
                            >
                              ↓
                            </button>
                            <button
                              onClick={() => removeFromSequence(index)}
                              className='p-1 rounded hover:bg-red-500/20 text-red-400'
                            >
                              ×
                            </button>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>

              <div className='text-center'>
                <button
                  onClick={handleSequenceAnswer}
                  disabled={
                    sequenceOrder.length !== currentQuestion.answers.length
                  }
                  className='bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-slate-600 disabled:to-slate-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed'
                >
                  {sequenceOrder.length === currentQuestion.answers.length
                    ? 'Підтвердити послідовність'
                    : `Додайте ще ${
                        currentQuestion.answers.length - sequenceOrder.length
                      } елемент(ів)`}
                </button>
              </div>
            </div>
          ) : currentQuestion.type === 'matching' ? (
            <div className='space-y-6'>
              <div className='bg-slate-900/30 rounded-xl p-4'>
                <h3 className='text-lg font-semibold text-white mb-4 text-center'>
                  Встановіть відповідності:
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  {/* Левый столбец - города */}
                  <div className='space-y-3'>
                    <h4 className='text-blue-300 font-semibold text-center mb-3'>
                      Міста
                    </h4>
                    {currentQuestion.leftColumn.map((item, index) => (
                      <div
                        key={index}
                        className='flex items-center gap-3 p-3 bg-blue-900/20 rounded-lg border border-blue-500/30'
                      >
                        <span className='bg-blue-500 text-white px-3 py-1 rounded font-mono font-bold'>
                          {item.label}
                        </span>
                        <span className='text-white text-sm flex-1'>
                          {item.text}
                        </span>
                        <div className='flex items-center gap-2'>
                          {matchingAnswers[item.label] && (
                            <span className='bg-green-500 text-white px-2 py-1 rounded text-sm'>
                              {matchingAnswers[item.label]}
                            </span>
                          )}
                          <button
                            onClick={() => clearMatchingAnswer(item.label)}
                            className='p-1 rounded hover:bg-red-500/20 text-red-400'
                            disabled={!matchingAnswers[item.label]}
                          >
                            ×
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Правый столбец - события */}
                  <div className='space-y-3'>
                    <h4 className='text-green-300 font-semibold text-center mb-3'>
                      Події
                    </h4>
                    {currentQuestion.rightColumn.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          // Находим первый несопоставленный элемент из левого столбца
                          const unmatchedLeft = currentQuestion.leftColumn.find(
                            leftItem => !matchingAnswers[leftItem.label]
                          )
                          if (unmatchedLeft) {
                            handleMatchingSelect(
                              unmatchedLeft.label,
                              item.label
                            )
                          }
                        }}
                        disabled={Object.values(matchingAnswers).includes(
                          item.label
                        )}
                        className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
                          Object.values(matchingAnswers).includes(item.label)
                            ? 'border-green-500/50 bg-green-500/20 cursor-not-allowed'
                            : 'border-green-500/30 bg-green-500/10 hover:border-green-400/50 hover:bg-green-500/20'
                        }`}
                      >
                        <div className='flex items-start gap-3'>
                          <span className='bg-green-500 text-white px-2 py-1 rounded text-sm font-mono shrink-0'>
                            {item.label}
                          </span>
                          <span className='text-white text-sm'>
                            {item.text}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className='text-center'>
                <button
                  onClick={handleMatchingAnswer}
                  disabled={
                    Object.keys(matchingAnswers).length !==
                    currentQuestion.leftColumn.length
                  }
                  className='bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:from-slate-600 disabled:to-slate-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed'
                >
                  {Object.keys(matchingAnswers).length ===
                  currentQuestion.leftColumn.length
                    ? 'Підтвердити відповіді'
                    : `Встановіть всі відповідності (${
                        Object.keys(matchingAnswers).length
                      }/${currentQuestion.leftColumn.length})`}
                </button>
              </div>
            </div>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {currentQuestion.answers &&
                currentQuestion.answers.map((a, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(a)}
                    className='bg-gradient-to-r from-blue-900/50 to-slate-800/50 hover:from-blue-800/60 hover:to-slate-700/60 border-2 border-blue-500/30 hover:border-blue-400/50 text-white text-lg font-medium p-4 rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm text-left'
                  >
                    {a.text}
                  </button>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
