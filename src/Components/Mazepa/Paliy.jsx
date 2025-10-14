export function Paliy () {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-6 sm:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Фоновые декоративные элементы */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-1/4 left-1/4 w-80 h-80 bg-green-500 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl animate-pulse delay-1000'></div>
        <div className='absolute top-1/2 left-1/2 w-72 h-72 bg-teal-500 rounded-full blur-3xl animate-pulse delay-500'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-7xl mx-auto relative z-10 space-y-10 sm:space-y-16'>
        {/* Заголовок */}
        <header className='text-center space-y-6 sm:space-y-8'>
          <div className='space-y-4'>
            <h1 className='text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight'>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400'>
                Паліївщина
              </span>
            </h1>
          </div>
        </header>

        {/* Основная информация */}
        <div className='space-y-8 sm:space-y-12'>
          {/* Мета */}
          <section className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-green-400 backdrop-blur-sm'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-green-300 mb-6 text-center'>
              🎯 Мета
            </h2>
            <div className='p-4 sm:p-6 bg-green-900/20 rounded-xl border-l-4 border-green-400 transform hover:scale-[1.02] transition-transform duration-300'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                Звільнити Правобережжя від польського панування та об'єднатися з
                Лівобережною Україною
              </p>
            </div>
          </section>

          {/* Територія */}
          <section className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-emerald-400 backdrop-blur-sm'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-300 mb-6 text-center'>
              🗺️ Територія
            </h2>
            <div className='p-4 sm:p-6 bg-emerald-900/20 rounded-xl border-l-4 border-emerald-400 transform hover:scale-[1.02] transition-transform duration-300'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                <span className='font-bold text-white'>
                  Поділля, Брацлавщина, Київщина, Східна Волинь
                </span>
              </p>
            </div>
          </section>

          {/* Події */}
          <section className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-teal-400 backdrop-blur-sm'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-300 mb-6 text-center'>
              ⚔️ Події
            </h2>
            <div className='p-4 sm:p-6 bg-teal-900/20 rounded-xl border-l-4 border-teal-400 transform hover:scale-[1.02] transition-transform duration-300'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                <span className='font-bold text-green-300'>1702 р.</span> козаки
                під проводом{' '}
                <span className='font-bold text-white'>С. Палія</span>{' '}
                <span className='font-bold text-emerald-300'>
                  (полковник Фастівського козацького полку)
                </span>{' '}
                розпочали повстання, підтримане селянами. Повстанці звернулися
                по допомогу до запорожців,{' '}
                <span className='font-bold text-white'>І. Мазепи</span> та
                Москви.{' '}
                <span className='font-bold text-green-300'>1704 р.</span>{' '}
                московсько-козацьке військо зайняло Київщину і Волинь
              </p>
            </div>
          </section>

          {/* Результат */}
          <section className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-green-400 backdrop-blur-sm'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-green-300 mb-6 text-center'>
              📊 Результат
            </h2>
            <div className='p-4 sm:p-6 bg-green-900/20 rounded-xl border-l-4 border-green-400 transform hover:scale-[1.02] transition-transform duration-300'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                Придушення повстання: арешт{' '}
                <span className='font-bold text-white'>С. Палія</span> як
                можливого претендента на гетьманську булаву: заслання його до
                Сибіру: Правобережна і Лівобережна Україна об'єдналися під
                гетьмануванням{' '}
                <span className='font-bold text-white'>І. Мазепи</span> до{' '}
                <span className='font-bold text-green-300'>1709 р.</span>
              </p>
            </div>
          </section>

          {/* Карта */}
          <section className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-emerald-400 backdrop-blur-sm'>
            <div className='bg-gradient-to-br from-emerald-900 to-slate-800 rounded-xl p-3 sm:p-4 border-2 border-emerald-500/30 shadow-lg'>
              <img
                src='../../../assets/Mazepa/karta.webp'
                alt='Карта Паліївщини'
                className='w-full h-auto max-w-[80%] sm:max-w-[70%] lg:max-w-[60%] rounded-lg shadow-md mx-auto'
              />
              <p className='text-center text-emerald-200 mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg italic'>
                Карта території Паліївщини та повстанського руху
              </p>
            </div>
          </section>

          {/* Дополнительная информация */}
          <section className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-teal-400 backdrop-blur-sm'>
            <div className='p-4 sm:p-6 bg-teal-900/20 rounded-xl border-l-4 border-teal-400 transform hover:scale-[1.02] transition-transform duration-300'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                Після смерті{' '}
                <span className='font-bold text-white'>І. Мазепи</span> та
                поразки <span className='font-bold text-white'>П. Орлика</span>{' '}
                система міжнародних договорів{' '}
                <span className='font-bold text-green-300'>1711-1724 pp.</span>{' '}
                остаточно визнала права Речі Посполитої на володіння
                Правобережжям.{' '}
                <span className='font-bold text-white'>
                  Важлива подія:{' '}
                  <span className='text-red-300'>
                    У <span className='font-bold text-white'>1713 р.</span> на
                    Правобережжі остаточно було ліквідовано козацтво
                  </span>
                </span>
              </p>
            </div>
          </section>

          {/* Хронология */}
          <section className='p-6 sm:p-8 lg:p-10 bg-slate-800/50 rounded-2xl border-l-4 border-green-400 backdrop-blur-sm'>
            <h3 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-green-300 text-center'>
              🗓️ Хронологія подій
            </h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
              {[
                {
                  year: '1702',
                  event: 'Початок повстання',
                  color: 'green'
                },
                {
                  year: '1704',
                  event: 'Окупація територій',
                  color: 'emerald'
                },
                {
                  year: '1709',
                  event: "Кінець об'єднання",
                  color: 'teal'
                },
                {
                  year: '1713',
                  event: 'Ліквідація козацтва',
                  color: 'red'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`p-4 sm:p-6 bg-${item.color}-900/20 rounded-xl border-l-4 border-${item.color}-400 text-center transform hover:scale-105 transition-transform duration-300`}
                >
                  <div
                    className={`text-xl sm:text-2xl lg:text-3xl font-black text-${item.color}-300 mb-2`}
                  >
                    {item.year}
                  </div>
                  <div className='text-base sm:text-lg lg:text-xl text-gray-200'>
                    {item.event}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Футер */}
      <footer className='relative mt-12 sm:mt-16 py-6 sm:py-8'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-full border-t-2 border-green-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-xl sm:text-2xl font-bold text-green-200 rounded-xl border-2 border-green-600/50 shadow-lg text-center backdrop-blur-sm'>
            Завершення козацької доби на Правобережжі
          </span>
        </div>
      </footer>
    </div>
  )
}
