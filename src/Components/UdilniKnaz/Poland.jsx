export function Poland () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-4 sm:py-8 px-3 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-red-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-amber-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-orange-600 rounded-full blur-3xl'></div>
      </div>

      {/* Заголовок страницы */}
      <div className='w-full max-w-6xl mx-auto text-center mb-8 sm:mb-12 relative z-10 px-2'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-red-400 to-red-500'>
            Українські землі у складі Польщі
          </span>
        </h1>
        <div className='w-32 sm:w-48 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto rounded-full'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12 px-2'>
        {/* Административное деление */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <p className='text-base sm:text-lg leading-relaxed mb-4'>
            Після приєднання у{' '}
            <span className='font-bold text-red-300'>1434 р.</span> до складу
            Польщі Західного Поділля відбувається поділ українських земель на
            воєводства:
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
            <div className='p-3 sm:p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-red-300'>
                  Руське воєводства (Галичина)
                </span>{' '}
                – із центром у м. Львів
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-red-300'>
                  Подільське воєводство (Західне Поділля)
                </span>{' '}
                – із центром у м. Кам'янець
              </p>
            </div>
          </div>

          <div className='mt-4 p-3 bg-red-800/30 rounded-lg'>
            <p className='text-base sm:text-lg leading-relaxed'>
              <span className='font-bold text-red-300'>1387 р.</span> - Галичина
              остаточно була приєднана до Польського королівства
            </p>
          </div>
        </div>

        {/* Особенности политики */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
          <h1 className='text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-amber-300'>
            Особливості політики
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6'>
            <div className='p-3 sm:p-4 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-base sm:text-lg leading-relaxed text-center'>
                Вводилося польське судочинство
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-base sm:text-lg leading-relaxed text-center'>
                Усунення українців від керівних ролей в державі
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-base sm:text-lg leading-relaxed text-center'>
                Покатоличення і полонізація української еліти
              </p>
            </div>
          </div>
        </div>

        {/* Закарпаття */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-orange-400 backdrop-blur-sm'>
          <h1 className='text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-orange-300'>
            Закарпаття
          </h1>

          <div className='space-y-4'>
            <div className='p-3 sm:p-4 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Землі поділялися на комітати, очолювані королівськими
                намісниками-жупанами
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Руське населення витіснялося в гірські райони, поступово
                позбавлялося політичних прав і свобод, відбувалося закріпачення
                селянства
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-orange-300'>
                  Федір Коріатович
                </span>{' '}
                — останній подільський князь, призначений угорським королем
                намісником Мукачівського володіння
              </p>
            </div>
          </div>
        </div>

        {/* Буковина */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <h1 className='text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-red-300'>
            Буковина
          </h1>

          <div className='space-y-4'>
            <div className='p-3 sm:p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-red-300'>1359 р.</span> Північна
                Буковина під назвою Шипинська земля ввійшла до новоствореного
                Молдовського князівства
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-red-300'>1485 р.</span> Молдавія
                визнала зверхність Османської імперії; згодом на землях Буковини
                була створена Хотинська райя{' '}
                <span className='font-bold text-red-300'>
                  створення Хотинської фортеці
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Разделитель внизу */}
      <div className='relative mt-12 sm:mt-16 py-6 sm:py-8 px-3 sm:px-6 lg:px-8'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-full border-t-2 border-red-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold text-red-200 rounded-full border-2 border-red-600/50 shadow-lg text-center'>
            Польський період українських земель
          </span>
        </div>
      </div>
    </div>
  )
}
