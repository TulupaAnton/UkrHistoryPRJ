export function Ruina_start () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 mt-15 via-slate-800 to-slate-900 text-gray-100 py-4 sm:py-8 px-3 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-gray-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-slate-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-zinc-600 rounded-full blur-3xl'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12 px-2'>
        {/* Главный заголовок */}
        <div className='w-full text-center mb-8 sm:mb-12 relative z-10 px-2'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-slate-400 to-zinc-500'>
              Руїна
            </span>
          </h1>
          <h2 className='text-xl sm:text-2xl lg:text-3xl text-slate-300 font-bold mb-4 sm:mb-6 italic'>
            «Від Богдана до Івана не було у нас Гетьмана»
          </h2>
          <div className='w-32 sm:w-48 h-1 bg-gradient-to-r from-gray-400 to-slate-600 mx-auto rounded-full'></div>
        </div>

        {/* Основная информация */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-gray-400 backdrop-blur-sm'>
          <div className='p-4 sm:p-6 bg-gray-900/20 rounded-lg border-l-2 border-gray-400'>
            <p className='text-xl sm:text-2xl leading-relaxed text-center'>
              <span className='font-bold text-gray-300'>Руїна</span> - період в
              історії України від смерті{' '}
              <span className='font-bold text-gray-300'>
                Богдана Хмельницького (1657)
              </span>{' '}
              і до початку гетьманування{' '}
              <span className='font-bold text-gray-300'>
                Івана Мазепи (1687)
              </span>
            </p>
          </div>
        </div>

        {/* Характеристики периода */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-slate-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-slate-300 text-center'>
            ⚡ Характерні риси періоду
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
            <div className='space-y-4'>
              <div className='p-4 sm:p-6 bg-slate-900/20 rounded-lg border-l-2 border-slate-400'>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  <span className='font-bold text-slate-300'>
                    Громадянські війни,
                  </span>{' '}
                  боротьба за владу
                </p>
              </div>

              <div className='p-4 sm:p-6 bg-slate-900/20 rounded-lg border-l-2 border-slate-400'>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  <span className='font-bold text-slate-300'>
                    Вторгнення іноземців,
                  </span>{' '}
                  інтервенція
                </p>
              </div>
            </div>

            <div className='space-y-4'>
              <div className='p-4 sm:p-6 bg-slate-900/20 rounded-lg border-l-2 border-slate-400'>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  <span className='font-bold text-slate-300'>Поділ</span> між
                  Москвою, РП та Османською імперією
                </p>
              </div>

              <div className='p-4 sm:p-6 bg-slate-900/20 rounded-lg border-l-2 border-slate-400'>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  <span className='font-bold text-slate-300'>
                    Розкол, спустошення
                  </span>{' '}
                  (Правобережжя)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Хронология */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-zinc-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-zinc-300 text-center'>
            🗓️ Хронологічні рамки
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
            <div className='p-4 sm:p-6 bg-zinc-900/20 rounded-lg text-center'>
              <p className='text-2xl sm:text-3xl font-bold text-zinc-300 mb-3'>
                📅 Початок
              </p>
              <p className='text-2xl sm:text-3xl text-zinc-200'>1657 рік</p>
              <p className='text-xl sm:text-2xl text-zinc-400 mt-2'>
                Смерть Богдана Хмельницького
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-zinc-900/20 rounded-lg text-center'>
              <p className='text-2xl sm:text-3xl font-bold text-zinc-300 mb-3'>
                📅 Завершення
              </p>
              <p className='text-2xl sm:text-3xl text-zinc-200'>1687 рік</p>
              <p className='text-xl sm:text-2xl text-zinc-400 mt-2'>
                Початок гетьманування Івана Мазепи
              </p>
            </div>
          </div>

          <div className='p-4 sm:p-6 bg-zinc-900/20 rounded-lg text-center mt-6'>
            <p className='text-xl sm:text-2xl font-bold text-zinc-300'>
              ⏳ Тривалість:{' '}
              <span className='text-2xl sm:text-3xl'>30 років</span>
            </p>
          </div>
        </div>

        {/* Историческое значение */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-gray-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-gray-300 text-center'>
            🎯 Історичне значення
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
            <div className='p-4 sm:p-6 bg-gray-900/20 rounded-lg'>
              <p className='text-xl sm:text-2xl font-semibold text-gray-300 mb-4 text-center'>
                ⚔️ Криза державності
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Глибока криза української державності
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-gray-900/20 rounded-lg'>
              <p className='text-xl sm:text-2xl font-semibold text-gray-300 mb-4 text-center'>
                🏛️ Втрата незалежності
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Поступова втрата незалежності
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-gray-900/20 rounded-lg'>
              <p className='text-xl sm:text-2xl font-semibold text-gray-300 mb-4 text-center'>
                🌍 Геополітичний розпад
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Розподіл українських земель
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-gray-900/20 rounded-lg'>
              <p className='text-xl sm:text-2xl font-semibold text-gray-300 mb-4 text-center'>
                📉 Економічний занепад
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Економічне та соціальне спустошення
              </p>
            </div>
          </div>
        </div>

        {/* Карта разделения */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-slate-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 text-slate-300 text-center'>
            🗺️ Поділ українських земель
          </h2>
          <div className='flex justify-center'>
            <div className='p-4 sm:p-6 bg-slate-900/20 rounded-lg border-l-2 border-slate-400 w-full max-w-4xl'>
              <img
                src=''
                alt='Поділ українських земель під час Руїни'
                className='w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-2xl bg-slate-700'
              />
              <p className='text-xl sm:text-2xl text-slate-200 text-center mt-4 font-medium'>
                Поділ українських земель між Річчю Посполитою, Московією та
                Османською імперією
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Разделитель внизу */}
      <div className='relative mt-12 sm:mt-16 py-6 sm:py-8 px-3 sm:px-6 lg:px-8'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-full border-t-2 border-gray-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-xl sm:text-2xl font-semibold text-gray-200 rounded-full border-2 border-gray-600/50 shadow-lg text-center'>
            Іван Виговський
          </span>
        </div>
      </div>
    </div>
  )
}
