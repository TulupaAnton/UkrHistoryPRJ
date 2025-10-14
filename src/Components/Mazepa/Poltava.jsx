export function Poltava () {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-6 sm:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Фоновые декоративные элементы */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-1/4 left-1/4 w-80 h-80 bg-red-500 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse delay-1000'></div>
        <div className='absolute top-1/2 left-1/2 w-72 h-72 bg-amber-500 rounded-full blur-3xl animate-pulse delay-500'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-7xl mx-auto relative z-10 space-y-10 sm:space-y-16'>
        {/* Заголовок */}
        <header className='text-center space-y-6 sm:space-y-8'>
          <div className='space-y-4'>
            <h1 className='text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight'>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-amber-400'>
                Полтавська битва
              </span>
            </h1>
            <div className='text-2xl sm:text-3xl lg:text-4xl text-red-300 font-bold'>
              1709 рік
            </div>
          </div>
        </header>

        {/* Основная информация с изображением справа */}
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12'>
          {/* Текст слева */}
          <div className='space-y-6 sm:space-y-8'>
            <div className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-red-400 backdrop-blur-sm'>
              <div className='p-4 sm:p-6 bg-red-900/20 rounded-xl border-l-4 border-red-400'>
                <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                  <span className='font-bold text-red-300'>
                    27 червня 1709 р.
                  </span>{' '}
                  битва між російською армією Петра І та шведською армією Карла
                  ХІІ
                </p>
              </div>
            </div>

            {/* Мета */}
            <div className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-orange-400 backdrop-blur-sm'>
              <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-300 mb-6 text-center'>
                🎯 Мета
              </h2>
              <div className='space-y-4'>
                <div className='p-4 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
                  <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed'>
                    Захопити порох, провізію, одяг
                  </p>
                </div>
                <div className='p-4 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
                  <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed'>
                    Витягти в Україну московські війська для генеральної битви
                  </p>
                </div>
              </div>
            </div>

            {/* Результат битв */}
            <div className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-amber-400 backdrop-blur-sm'>
              <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-300 mb-6 text-center'>
                ⚔️ Результат битв
              </h2>
              <div className='p-4 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
                <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed'>
                  Під час облоги{' '}
                  <span className='font-bold text-white'>Полтави</span>, до
                  міста підійшла армія Петра І.{' '}
                  <span className='font-bold text-amber-300'>
                    Битва тривала кілька годин
                  </span>{' '}
                  і вже до полудня{' '}
                  <span className='font-bold text-red-300'>
                    шведські війска пали.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Изображение справа - увеличенное и отцентрированное */}
          <div className='flex items-center justify-center'>
            <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm w-full max-w-2xl'>
              <div className='bg-gradient-to-br from-amber-900 to-slate-800 rounded-xl p-4 sm:p-6 border-2 border-amber-500/30 shadow-lg'>
                <img
                  src='../../../assets/Mazepa/poltava.webp'
                  alt='Полтавська битва 1709 року'
                  className='w-full h-auto rounded-lg shadow-md mx-auto'
                />
                <p className='text-center text-amber-200 mt-4 text-base sm:text-lg lg:text-xl italic'>
                  Полтавська битва - вирішальна битва Північної війни
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Причини поразки */}
        <section className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-red-400 backdrop-blur-sm'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-red-300 mb-6 text-center'>
            📉 Причини поразки
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
            <div className='p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400 transform hover:scale-[1.02] transition-transform duration-300'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                Кількісна перевага москви
              </p>
            </div>
            <div className='p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400 transform hover:scale-[1.02] transition-transform duration-300'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                Карл ХІІ не міг командувати{' '}
                <span className='font-bold text-white'>через поранення</span>, а
                між генералами панувала незгода
              </p>
            </div>
            <div className='p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400 transform hover:scale-[1.02] transition-transform duration-300'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                Відсутність єдиного плану битви
              </p>
            </div>
          </div>
        </section>

        {/* Наслідки */}
        <section className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-orange-400 backdrop-blur-sm'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-300 mb-6 text-center'>
            📊 Наслідки
          </h2>
          <div className='space-y-4'>
            <div className='p-4 bg-orange-900/20 rounded-lg border-l-2 border-orange-400 transform hover:scale-[1.01] transition-transform duration-300'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed'>
                <span className='font-bold text-white'>Мазепа та Карл ХІІ</span>{' '}
                тікають у турецькі володіння
              </p>
            </div>
            <div className='p-4 bg-orange-900/20 rounded-lg border-l-2 border-orange-400 transform hover:scale-[1.01] transition-transform duration-300'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed'>
                Козаки які воювали на боці шведів{' '}
                <span className='font-bold text-red-300'>
                  було покарано, закатовано та виставлено на показ.
                </span>
              </p>
            </div>
            <div className='p-4 bg-orange-900/20 rounded-lg border-l-2 border-orange-400 transform hover:scale-[1.01] transition-transform duration-300'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed'>
                Україна зазнала великих людських та матеріальних втрат
              </p>
            </div>
            <div className='p-4 bg-orange-900/20 rounded-lg border-l-2 border-orange-400 transform hover:scale-[1.01] transition-transform duration-300'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed'>
                <span className='font-bold text-red-300'>
                  Почалася Ліквідація Гетьманщини царським урядом
                </span>
              </p>
            </div>
            <div className='p-4 bg-orange-900/20 rounded-lg border-l-2 border-orange-400 transform hover:scale-[1.01] transition-transform duration-300'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed'>
                Мазепа помер у жовтні 1709 р. у м. Бендери
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Футер */}
      <footer className='relative mt-12 sm:mt-16 py-6 sm:py-8'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-full border-t-2 border-red-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-xl sm:text-2xl font-bold text-red-200 rounded-xl border-2 border-red-600/50 shadow-lg text-center backdrop-blur-sm'>
            Переломний момент в історії України
          </span>
        </div>
      </footer>
    </div>
  )
}
