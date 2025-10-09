export function Konotop () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-4 sm:py-8 px-3 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-red-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-orange-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-amber-600 rounded-full blur-3xl'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12 px-2'>
        {/* Главный заголовок */}
        <div className='w-full text-center mb-8 sm:mb-12 relative z-10 px-2'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-orange-400 to-amber-500'>
              Конотопська битва
            </span>
          </h1>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl text-orange-300 font-bold mb-4 sm:mb-6'>
            Московсько-українська війна 1658-1659
          </h2>
          <div className='w-32 sm:w-48 h-1 bg-gradient-to-r from-red-400 to-amber-600 mx-auto rounded-full'></div>
        </div>

        {/* Причины войны */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-red-300 text-center'>
            ⚔️ Причини війни
          </h2>

          <div className='space-y-4 sm:space-y-6'>
            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Московський цар{' '}
                <span className='font-bold text-red-300'>
                  Олексій Михайлович
                </span>{' '}
                оголосив{' '}
                <span className='font-bold text-red-300'>
                  І. Виговського зрадником
                </span>{' '}
                через те, що той уклав Гадяцький договір
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Навесні <span className='font-bold text-red-300'>1659 р.</span>{' '}
                на Гетьманщину вирушило{' '}
                <span className='font-bold text-red-300 text-2xl sm:text-3xl bg-red-900/40 px-3 py-2 rounded'>
                  100-тисячне московське військо
                </span>
                , очолюване князем{' '}
                <span className='font-bold text-red-300'>О. Трубецьким</span>
              </p>
            </div>
          </div>
        </div>

        {/* Конотопская битва */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-orange-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-orange-300 text-center'>
            🎯 Конотопська битва
          </h2>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8'>
            <div className='space-y-6'>
              <div className='p-4 sm:p-6 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
                <p className='text-xl sm:text-2xl leading-relaxed text-center font-bold text-orange-300'>
                  <span className='text-2xl sm:text-3xl'>
                    28 червня 1659 року
                  </span>
                </p>
                <p className='text-xl sm:text-2xl leading-relaxed text-center mt-3'>
                  Спільне козацько-татарське військо під командуванням{' '}
                  <span className='font-bold text-orange-300'>
                    І. Виговського
                  </span>
                </p>
              </div>

              <div className='p-4 sm:p-6 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
                <p className='text-xl sm:text-2xl leading-relaxed text-center font-bold text-green-400'>
                  ВЩЕНТ РОЗБИЛИ Московські війська
                </p>
                <p className='text-xl sm:text-2xl leading-relaxed text-center mt-3'>
                  <span className='font-bold text-orange-300 bg-orange-900/40 px-3 py-2 rounded'>
                    під Конотопом
                  </span>
                </p>
              </div>
            </div>

            <div className='p-4 sm:p-6 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <h3 className='text-xl sm:text-2xl font-bold text-orange-300 mb-4 text-center'>
                ⚔️ Сили сторін
              </h3>
              <div className='grid grid-cols-1 gap-4'>
                <div className='p-3 bg-orange-900/30 rounded-lg'>
                  <p className='text-lg sm:text-xl font-bold text-orange-200 text-center'>
                    Українсько-татарські сили
                  </p>
                  <p className='text-lg sm:text-xl text-orange-300 text-center'>
                    ~30-40 тисяч вояків
                  </p>
                </div>
                <div className='p-3 bg-red-900/30 rounded-lg'>
                  <p className='text-lg sm:text-xl font-bold text-red-200 text-center'>
                    Московські сили
                  </p>
                  <p className='text-lg sm:text-xl text-red-300 text-center'>
                    ~100 тисяч вояків
                  </p>
                </div>
              </div>
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
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-xl sm:text-2xl font-semibold text-red-200 rounded-full border-2 border-red-600/50 shadow-lg text-center'>
            Юрій Хмельницький
          </span>
        </div>
      </div>
    </div>
  )
}
