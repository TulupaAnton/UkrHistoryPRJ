export function Skoropadskiy () {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-6 sm:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Фоновые декоративные элементы */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-1/4 left-1/4 w-80 h-80 bg-amber-500 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse delay-1000'></div>
        <div className='absolute top-1/2 left-1/2 w-72 h-72 bg-red-500 rounded-full blur-3xl animate-pulse delay-500'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-7xl mx-auto relative z-10 space-y-10 sm:space-y-16'>
        {/* Заголовок */}
        <header className='text-center space-y-6 sm:space-y-8'>
          <div className='space-y-4'>
            <h1 className='text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight'>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-400 to-red-500'>
                Гетьманування Івана Скоропадського
              </span>
            </h1>
            <div className='text-2xl sm:text-3xl lg:text-4xl text-amber-300 font-bold'>
              1708 – 1722
            </div>
            <p className='text-xl sm:text-2xl lg:text-3xl text-red-300 font-bold text-center'>
              контроль Московії над Гетьманщиною підсилився
            </p>
          </div>
        </header>

        {/* Основная информация с портретом */}
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12'>
          {/* Текст слева */}
          <div className='space-y-6 sm:space-y-8'>
            <div className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-amber-400 backdrop-blur-sm'>
              <div className='p-4 sm:p-6 bg-amber-900/20 rounded-xl border-l-4 border-amber-400'>
                <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                  Обраний гетьманом{' '}
                  <span className='font-bold text-amber-300'>
                    17 листопада 1708 р.
                  </span>{' '}
                  після поразки І. Мазепи за прямою вказівкою Петра І, проте
                  намагався полегшити становище мазепинців та їхніх родин
                </p>
              </div>
            </div>

            {/* Решетилівські статті */}
            <div className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-orange-400 backdrop-blur-sm'>
              <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-300 mb-6 text-center'>
                📜 Решетилівські статті 1709 р.
              </h2>
              <div className='p-4 sm:p-6 bg-orange-900/20 rounded-xl border-l-4 border-orange-400'>
                <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                  Загально підтверджували «права та Вольності», але називали
                  землі Війська Запорозького{' '}
                  <span className='font-bold text-red-300'>
                    "Малоросійським краєм"
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Портрет Івана Скоропадського справа */}
          <div className='flex items-center justify-center'>
            <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm w-full max-w-lg'>
              <div className='bg-gradient-to-br from-red-900 to-slate-800 rounded-xl p-4 sm:p-6 border-2 border-red-500/30 shadow-lg'>
                <img
                  src='../../../assets/Mazepa/ivan.webp'
                  alt='Іван Скоропадський - гетьман України'
                  className='w-full h-auto rounded-lg shadow-md mx-auto'
                />
                <p className='text-center text-red-200 mt-4 text-base sm:text-lg lg:text-xl italic'>
                  Іван Скоропадський - гетьман України (1708-1722)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Основные изменения */}
        <section className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-red-400 backdrop-blur-sm'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-red-300 mb-6 text-center'>
            ⚡ Основні зміни за гетьманування
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
            <div className='p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400 transform hover:scale-[1.02] transition-transform duration-300'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                Гетьманська столиця була перенесена з Батурина в Глухів
              </p>
            </div>
            <div className='p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400 transform hover:scale-[1.02] transition-transform duration-300'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                Заборона торгувати з європейськими країнами
              </p>
            </div>
            <div className='p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400 transform hover:scale-[1.02] transition-transform duration-300'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                Збільшення повинностей для селян
              </p>
            </div>
          </div>
        </section>

        {/* Исторический контекст */}
        <section className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-amber-400 backdrop-blur-sm'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-300 mb-6 text-center'>
            📅 Історичний контекст
          </h2>
          <div className='space-y-4'>
            <div className='p-4 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                Обраний після поразки Мазепи під Полтавою
              </p>
            </div>
            <div className='p-4 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                Правління за прямою вказівкою московського царя
              </p>
            </div>
            <div className='p-4 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                Спроба пом'якшити репресії проти прихильників Мазепи
              </p>
            </div>
          </div>
        </section>

        {/* Последствия */}
        <section className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-orange-400 backdrop-blur-sm'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-300 mb-6 text-center'>
            📊 Наслідки правління
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
            <div className='p-4 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                Посилення московського контролю над Гетьманщиною
              </p>
            </div>
            <div className='p-4 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                Обмеження економічної автономії України
              </p>
            </div>
            <div className='p-4 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                Погіршення становища селянства
              </p>
            </div>
            <div className='p-4 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                Втрата політичної незалежності
              </p>
            </div>
          </div>
        </section>

        {/* Хронология */}
        <section className='p-6 sm:p-8 lg:p-10 bg-slate-800/50 rounded-2xl border-l-4 border-red-400 backdrop-blur-sm'>
          <h3 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-red-300 text-center'>
            🗓️ Ключові події
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
            {[
              {
                year: '1708',
                event: 'Обраний гетьманом',
                color: 'amber'
              },
              {
                year: '1709',
                event: 'Решетилівські статті',
                color: 'orange'
              },
              {
                year: '1709',
                event: 'Перенос столиці',
                color: 'red'
              },
              {
                year: '1722',
                event: 'Кінець гетьманування',
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

      {/* Футер */}
      <footer className='relative mt-12 sm:mt-16 py-6 sm:py-8'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-full border-t-2 border-amber-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-xl sm:text-2xl font-bold text-amber-200 rounded-xl border-2 border-amber-600/50 shadow-lg text-center backdrop-blur-sm'>
            Посилення московського впливу в Україні
          </span>
        </div>
      </footer>
    </div>
  )
}
