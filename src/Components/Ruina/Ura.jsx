export function Ura () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-4 sm:py-8 px-3 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-blue-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-indigo-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-purple-600 rounded-full blur-3xl'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12 px-2'>
        {/* Главный заголовок */}
        <div className='w-full text-center mb-8 sm:mb-12 relative z-10 px-2'>
          <div className='flex flex-col items-center justify-center mb-4 sm:mb-6'>
            <div className='relative group'>
              {/* Контейнер для изображения */}
            </div>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6'>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-500'>
                Юрій Хмельницький
              </span>
            </h1>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl text-indigo-300 font-bold mb-4 sm:mb-6'>
              Гетьман (1659-1663)
            </h2>
          </div>
          <div className='w-120 h-120 sm:w-120 sm:h-120 lg:w-120 lg:h-120 mx-auto mb-4 sm:mb-6 relative'>
            <img
              src='../../../assets/Ruina/Ura.png'
              alt='Портрет Юрія Хмельницького'
              className='w-full h-full object-cover rounded-2xl border-4 border-blue-500/50 shadow-2xl shadow-blue-500/20 transition-all duration-300 group-hover:scale-105 group-hover:border-blue-400/70 group-hover:shadow-blue-400/30'
            />
            {/* Декоративные элементы вокруг изображения */}
            <div className='absolute inset-0 rounded-2xl border-2 border-white/10 pointer-events-none'></div>
            <div className='absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300'></div>
          </div>

          {/* Подпись под изображением */}
          <div className='text-center mt-2'>
            <p className='text-sm text-gray-400 italic transition-colors duration-300 group-hover:text-gray-300'>
              Юрій Хмельницький
            </p>
          </div>
        </div>

        {/* Переяславские статьи */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-blue-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-blue-300 text-center'>
            📜 Переяславські статті 1659 р.
          </h2>

          <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
            <p className='text-xl sm:text-2xl leading-relaxed mb-4'>
              <span className='font-bold text-blue-300'>1659 р.</span> -
              Переяславські статті (з Москвою):
            </p>

            <div className='space-y-4'>
              <div className='p-3 bg-blue-900/30 rounded-lg'>
                <p className='text-lg sm:text-xl'>
                  <span className='font-bold text-blue-300'>1.</span> Московські
                  війська знаходяться в українських містах
                </p>
              </div>

              <div className='p-3 bg-blue-900/30 rounded-lg'>
                <p className='text-lg sm:text-xl'>
                  <span className='font-bold text-blue-300'>2.</span> Україна з
                  рівноправного партнера з Московією у конфедерації (як за
                  Березневими статтями) перетворювалась в автономну одиницю
                  Московії
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Слободищенский трактат */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-indigo-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-indigo-300 text-center'>
            ⚔️ Слободищенський трактат 1660 р.
          </h2>

          <div className='space-y-4 sm:space-y-6'>
            <div className='p-4 sm:p-6 bg-indigo-900/20 rounded-lg border-l-2 border-indigo-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Війна між Московією (+Україна) та Річчю Посполитою -{' '}
                <span className='font-bold text-red-400'>перемога РП</span>
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-indigo-900/20 rounded-lg border-l-2 border-indigo-400'>
              <p className='text-xl sm:text-2xl leading-relaxed mb-4'>
                <span className='font-bold text-indigo-300'>1660 р.</span> -
                Слободищенський трактат:
              </p>

              <div className='space-y-3'>
                <div className='p-3 bg-indigo-900/30 rounded-lg'>
                  <p className='text-lg sm:text-xl'>
                    <span className='font-bold text-indigo-300'>1.</span>{' '}
                    Повторював умови Гадяцького договору
                  </p>
                </div>

                <div className='p-3 bg-indigo-900/30 rounded-lg'>
                  <p className='text-lg sm:text-xl'>
                    <span className='font-bold text-indigo-300'>2.</span>{' '}
                    Вилучаєння статті про Велике князівство Руське (ВКР)
                  </p>
                </div>

                <div className='p-3 bg-indigo-900/30 rounded-lg'>
                  <p className='text-lg sm:text-xl'>
                    <span className='font-bold text-indigo-300'>3.</span>{' '}
                    Заборона зовнішньої політики
                  </p>
                </div>

                <div className='p-3 bg-indigo-900/30 rounded-lg'>
                  <p className='text-lg sm:text-xl'>
                    <span className='font-bold text-indigo-300'>4.</span>{' '}
                    Гетьманщина стає частиною Річі Посполитої
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Раздел Гетманщины */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-purple-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-purple-300 text-center'>
            🗺️ Поділ Гетьманщини
          </h2>

          <div className='p-4 sm:p-6 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
            <p className='text-xl sm:text-2xl leading-relaxed text-center font-bold text-purple-300'>
              З цього моменту Гетьманщина поділиться на 2 береги:
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6'>
              <div className='p-4 bg-purple-900/30 rounded-lg text-center'>
                <p className='text-xl sm:text-2xl font-bold text-purple-200 mb-2'>
                  🏛️ Правобережжя
                </p>
                <p className='text-lg sm:text-xl text-purple-300'>
                  Під владою Річі Посполитої
                </p>
              </div>

              <div className='p-4 bg-purple-900/30 rounded-lg text-center'>
                <p className='text-xl sm:text-2xl font-bold text-purple-200 mb-2'>
                  🏛️ Лівобережжя
                </p>
                <p className='text-lg sm:text-xl text-purple-300'>
                  Під владою Московської держави
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Хронология событий */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-purple-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-purple-300 text-center'>
            🗓️ Хронологія подій
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6'>
            <div className='p-4 sm:p-6 bg-purple-900/20 rounded-lg text-center'>
              <p className='text-xl sm:text-2xl font-bold text-purple-300 mb-3'>
                1659
              </p>
              <p className='text-lg sm:text-xl text-purple-200'>
                Переяславські статті
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-purple-900/20 rounded-lg text-center'>
              <p className='text-xl sm:text-2xl font-bold text-purple-300 mb-3'>
                1660
              </p>
              <p className='text-lg sm:text-xl text-purple-200'>
                Слободищенський трактат
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-purple-900/20 rounded-lg text-center'>
              <p className='text-xl sm:text-2xl font-bold text-purple-300 mb-3'>
                1663
              </p>
              <p className='text-lg sm:text-xl text-purple-200'>
                Кінець гетьманування
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Разделитель внизу */}
      <div className='relative mt-12 sm:mt-16 py-6 sm:py-8 px-3 sm:px-6 lg:px-8'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-full border-t-2 border-blue-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-xl sm:text-2xl font-semibold text-blue-200 rounded-full border-2 border-blue-600/50 shadow-lg text-center'>
            Розкол Гетьманщини
          </span>
        </div>
      </div>
    </div>
  )
}
