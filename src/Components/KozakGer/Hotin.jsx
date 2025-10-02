export function Hotin () {
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
              Хотинська війна (1620-1621 р.)
            </span>
          </h1>
          <div className='w-32 sm:w-48 h-1 bg-gradient-to-r from-red-400 to-amber-600 mx-auto rounded-full'></div>
        </div>

        {/* Причины войны */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-red-300 text-center'>
            Причини війни
          </h2>

          <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
            <p className='text-xl sm:text-2xl leading-relaxed'>
              Туреччина продовжувала боротьбу за розширення своїх кордонів за
              рахунок території Речі Посполитої
            </p>
          </div>
        </div>

        {/* Основные события */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-orange-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-orange-300 text-center'>
            Основні події
          </h2>

          <div className='space-y-6 sm:space-y-8'>
            <div className='p-4 sm:p-6 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                У{' '}
                <span className='font-bold text-orange-300 text-2xl sm:text-3xl'>
                  1620 р.
                </span>{' '}
                польські війська зазнають поразки від турків та татар в битві
                під Цецорою. Поляки звертаються{' '}
                <span className='font-bold text-orange-300 bg-orange-900/40 px-2 py-1 rounded'>
                  за допомогою до П. Конашевича-Сагайдачного
                </span>
                , обіцяючи збільшити козацький реєстр та заплатити
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-xl sm:text-2xl leading-relaxed italic'>
                <span className='font-semibold text-amber-300'>
                  «Після раптового вторгнення запорожців у табір Османа турками
                  оволоділа паніка: сам Осман, який ще недавно думав, що немає
                  нікого у світі могутнішого за нього, тепер на власні очі
                  побачив усю хиткість свого становища...»
                </span>
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                <span className='font-bold text-red-300 text-2xl sm:text-3xl'>
                  Сили сторін:
                </span>{' '}
                <span className='font-bold text-red-300 bg-red-900/40 px-2 py-1 rounded'>
                  Туреччина: 250-тисячна армія. Польща: 35-тисячна армія
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Результаты войны */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-amber-300 text-center'>
            Результат війни
          </h2>

          <div className='space-y-6 sm:space-y-8'>
            <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Розвіяно міф{' '}
                <span className='font-bold text-amber-300 bg-amber-900/40 px-2 py-1 rounded'>
                  про непереможність турецької армії;
                </span>{' '}
                зупинено просування турецької експансії в Європу; спалах
                визвольної боротьби проти турецького поневолення; українські
                козаки здобули визнання
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
              <div className='p-4 sm:p-6 bg-green-900/20 rounded-lg border-l-2 border-green-400'>
                <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                  🛡️{' '}
                  <span className='font-bold text-green-300'>
                    Зупинено турецьку експансію
                  </span>{' '}
                  в Європу
                </p>
              </div>

              <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
                <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                  ⚔️{' '}
                  <span className='font-bold text-blue-300'>
                    Козаки здобули міжнародне визнання
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Историческое значение */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-red-300 text-center'>
            Історичне значення
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg'>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                🎯{' '}
                <span className='font-bold text-red-300'>
                  Переломний момент
                </span>{' '}
                в боротьбі з Османською імперією
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-orange-900/20 rounded-lg'>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                📜{' '}
                <span className='font-bold text-orange-300'>
                  Зростання авторитету
                </span>{' '}
                козацтва на міжнародній арені
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
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-xl sm:text-2xl font-semibold text-red-200 rounded-full border-2 border-red-600/50 shadow-lg text-center'>
            Козацькі повстання
          </span>
        </div>
      </div>
    </div>
  )
}
