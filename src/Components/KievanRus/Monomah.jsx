export function Monomah () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-blue-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-purple-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-indigo-600 rounded-full blur-3xl'></div>
      </div>

      {/* Заголовок */}
      <div className='w-full max-w-4xl mx-auto text-center mb-10 relative z-10'>
        <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent'></div>

        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 mt-4'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500'>
            Правління Володимира Мономаха
          </span>
        </h1>
        <h2 className='text-2xl sm:text-3xl text-blue-300 font-bold mb-2'>
          (1113–1125)
        </h2>

        <div className='flex justify-center mb-6'>
          <img
            src='../../../assets/Monomah.jpg' // путь к картинке
            alt='Володимир Мономах'
            className='w-48 h-48 object-cover rounded-full border-4 border-blue-500 shadow-lg'
          />
        </div>

        <div className='inline-block bg-blue-800/40 px-4 py-2 rounded-full border border-blue-600/50 mb-6'>
          <span className='text-blue-200 font-medium'>
            Переяславський князь
          </span>
        </div>

        <div className='w-48 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto my-6 rounded-full'></div>

        <div className='absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-6xl mx-auto relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
          {/* Приход к власти */}
          <div className='p-6 bg-slate-800/40 rounded-xl border-l-4 border-blue-400 backdrop-blur-sm'>
            <h3 className='text-2xl font-semibold mb-4 text-blue-300'>
              Прихід до влади
            </h3>
            <p className='text-lg mb-4'>
              У <span className='font-bold text-blue-300'>1113 р.</span> кияни
              підняли повстання і запросили його правити у Київському князівстві
            </p>

            <div className='p-4 bg-slate-700/40 rounded-lg mt-4'>
              <blockquote className='italic border-l-2 border-blue-400 pl-4'>
                «Володимир Мономах сів у Києві. Зустріли ж його митрополит
                Никифор з єпископами й усіма киянами з честю великою.., сів він
                на столі отця свого й предків своїх, і всі люди раді були, а
                заколот улігся...»
              </blockquote>
            </div>
          </div>

          {/* Внутренняя политика */}
          <div className='p-6 bg-slate-800/40 rounded-xl border-l-4 border-purple-400 backdrop-blur-sm'>
            <h3 className='text-2xl font-semibold mb-4 text-purple-300'>
              Внутрішня політика
            </h3>
            <p className='text-lg'>Припинив князівські чвари на Русі</p>
            <div className='mt-4 p-4 bg-slate-700/40 rounded-lg'>
              <p className='text-lg'>
                <span className='font-bold text-purple-300'>
                  Об'єднав під своєю владою
                </span>{' '}
                більшу частину території Київської держави
              </p>
            </div>

            <div className='mt-6'>
              <p className='text-lg'>
                Додав до{' '}
                <span className='font-bold text-purple-300'>
                  "Руської правди"
                </span>{' '}
                новий розділ –{' '}
                <span className='font-bold text-purple-300'>
                  "Устав Мономаха"
                </span>
              </p>
            </div>

            <div className='mt-6'>
              <p className='text-lg'>
                <span className='font-bold text-purple-300'>
                  Відновив міжнародний авторитет
                </span>{' '}
                Київської держави
              </p>
            </div>
          </div>
        </div>

        {/* Борьба с половцами */}
        <div className='p-6 bg-slate-800/40 rounded-xl border-l-4 border-indigo-400 backdrop-blur-sm mb-12'>
          <h3 className='text-2xl font-semibold mb-4 text-indigo-300'>
            Боротьба з половцями
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <p className='text-lg'>
                Активно боровся з половцями,{' '}
                <span className='font-bold text-indigo-300'>
                  не програв їм жодної битви
                </span>
              </p>
              <p className='text-lg mt-4'>
                Організував{' '}
                <span className='font-bold text-indigo-300'>
                  "Хрестовий похід" 1111 р.
                </span>{' '}
                проти половців
              </p>
            </div>

            <div className='flex items-center justify-center'>
              <div className='w-full max-w-6xl bg-gradient-to-br from-indigo-900 to-slate-800 rounded-xl p-3 sm:p-4 border-2 border-indigo-500/30 shadow-lg'>
                <div className='flex items-center justify-center overflow-hidden rounded-lg'>
                  <img
                    src='../../../assets/MohomahKarta.jpg'
                    alt='Карта за часів Мономаха'
                    className='w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-md transition-transform duration-300 hover:scale-105'
                  />
                </div>
                <p className='text-center text-indigo-200 mt-3 text-sm sm:text-base md:text-lg italic'>
                  Карта князівств за правління Володимира Мономаха
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Поучение детям */}
        <div className='mb-12'>
          <div className='text-center mb-8'>
            <h2 className='text-3xl sm:text-4xl font-bold text-blue-300 mb-4'>
              "Повчання дітям"
            </h2>
            <div className='w-64 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full'></div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='p-6 bg-slate-800/40 rounded-xl border-l-4 border-blue-400 backdrop-blur-sm'>
              <h3 className='text-2xl font-semibold mb-4 text-blue-300'>
                Про любов до рідної землі
              </h3>
              <p className='text-lg'>
                Володимир Мономах написав "Повчання дітям" -
                філософсько-моралістичний твір
              </p>
              <div className='mt-4 p-4 bg-slate-700/40 rounded-lg'>
                <p className='text-lg'>
                  У ньому він закликав до{' '}
                  <span className='font-bold text-blue-300'>
                    любові до рідної землі, батьків, ближніх
                  </span>
                </p>
              </div>
            </div>

            <div className='p-6 bg-slate-800/40 rounded-xl border-l-4 border-purple-400 backdrop-blur-sm'>
              <h3 className='text-2xl font-semibold mb-4 text-purple-300'>
                Цитата з "Повчання"
              </h3>
              <blockquote className='text-lg italic leading-relaxed p-4 bg-slate-700/40 rounded-lg border-l-2 border-purple-400'>
                «А найголовніше - убогих не забувайте, а скільки можете, по
                змозі годуйте і подайте милостиню сироті, і вдовицю оправдуйте
                самі, не давайте сильним погубити людину...»
              </blockquote>
            </div>
          </div>
        </div>

        {/* Достижения */}
        <div className='mb-12'>
          <div className='text-center mb-8'>
            <h2 className='text-3xl sm:text-4xl font-bold text-indigo-300 mb-4'>
              Основні досягнення
            </h2>
            <div className='w-64 h-1 bg-gradient-to-r from-indigo-400 to-indigo-600 mx-auto rounded-full'></div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <div className='p-6 bg-slate-800/40 rounded-xl border-l-4 border-blue-400 backdrop-blur-sm text-center'>
              <div className='w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 text-blue-300'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold mb-2 text-blue-300'>
                Припинив чвари
              </h3>
              <p className='text-sm'>Об'єднав Русь під своєю владою</p>
            </div>

            <div className='p-6 bg-slate-800/40 rounded-xl border-l-4 border-purple-400 backdrop-blur-sm text-center'>
              <div className='w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 text-purple-300'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M13 10V3L4 14h7v7l9-11h-7z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold mb-2 text-purple-300'>
                Перемоги над половцями
              </h3>
              <p className='text-sm'>Не програв жодної битви</p>
            </div>

            <div className='p-6 bg-slate-800/40 rounded-xl border-l-4 border-indigo-400 backdrop-blur-sm text-center'>
              <div className='w-12 h-12 bg-indigo-700 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 text-indigo-300'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold mb-2 text-indigo-300'>
                "Повчання дітям"
              </h3>
              <p className='text-sm'>Філософсько-моралістичний твір</p>
            </div>

            <div className='p-6 bg-slate-800/40 rounded-xl border-l-4 border-blue-400 backdrop-blur-sm text-center'>
              <div className='w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 text-blue-300'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold mb-2 text-blue-300'>
                Міжнародний авторитет
              </h3>
              <p className='text-sm'>Відновив авторитет Київської держави</p>
            </div>
          </div>
        </div>

        {/* Историческое значение */}
        <div className='relative p-1 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl mb-12'>
          <div className='bg-slate-900 rounded-2xl p-6'>
            <div className='flex items-start'>
              <div className='hidden md:flex mr-6'>
                <div className='w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center shadow-lg'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-8 w-8 text-blue-200'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </div>
              </div>

              <div className='flex-1'>
                <h3 className='text-xl md:text-2xl font-semibold mb-4 text-blue-300'>
                  Історичне значення правління
                </h3>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <p className='text-lg mb-4'>
                      Володимир Мономах вважається одним з найвидатніших князів
                      Київської Русі.
                    </p>
                    <p className='text-lg'>
                      Його правління стало періодом{' '}
                      <span className='font-bold text-blue-300'>
                        відродження могутності
                      </span>{' '}
                      держави.
                    </p>
                  </div>

                  <div>
                    <p className='text-lg mb-4'>
                      "Устав Мономаха" значно покращив соціальне законодавство.
                    </p>
                    <p className='text-lg'>
                      "Повчання дітям" стало важливим пам'ятником давньоруської
                      літератури.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Разделитель */}
      <div className='relative my-12 py-8 px-4 sm:px-6 lg:px-8'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-full border-t-2 border-blue-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-3 text-lg font-semibold text-blue-200 rounded-full border-2 border-blue-600/50 shadow-lg flex items-center space-x-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 text-blue-300'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
            <span>Наступна тема: Роздробленість Русі</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 text-blue-300'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}
