export function Pivnichna () {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-6 sm:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Фоновые декоративные элементы как у предыдущего компонента */}
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
                Україна в подіях Північної війни
              </span>
            </h1>
            <div className='text-2xl sm:text-3xl lg:text-4xl text-green-300 font-bold'>
              1700 – 1721
            </div>
          </div>
        </header>

        {/* Основная информация */}
        <section className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-green-400 backdrop-blur-sm'>
          <div className='p-4 sm:p-6 bg-green-900/20 rounded-xl border-l-4 border-green-400 transform hover:scale-[1.02] transition-transform duration-300'>
            <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
              <span className='font-bold text-green-300'>Північна війна</span> -
              війна коаліції Речі Посполитої, Саксонії, Данії, Московського
              царства (Росії) проти Швеції в 1700-1721 pp.
            </p>
          </div>
        </section>

        {/* Мета Росії */}
        <section className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-emerald-400 backdrop-blur-sm'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-300 mb-6 text-center'>
            🎯 Мета Росії
          </h2>
          <div className='p-4 sm:p-6 bg-emerald-900/20 rounded-xl border-l-4 border-emerald-400 transform hover:scale-[1.02] transition-transform duration-300'>
            <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
              Відвоювати вихід до Балтійського моря та приєднати прибалтійські
              території
            </p>
          </div>
        </section>

        {/* Участь України */}
        <section className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-teal-400 backdrop-blur-sm'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-300 mb-6 text-center'>
            ⚔️ Участь України
          </h2>
          <div className='space-y-4'>
            <div className='p-4 bg-teal-900/20 rounded-lg border-l-2 border-teal-400 transform hover:scale-[1.01] transition-transform duration-300'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed'>
                Козацькі полки змушені воювати під командуванням російських
                генералів
              </p>
            </div>
            <div className='p-4 bg-teal-900/20 rounded-lg border-l-2 border-teal-400 transform hover:scale-[1.01] transition-transform duration-300'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed'>
                Використання козаків як дешевої робочої сили під час будівництва
                каналів, доріг, фортець та інших укріплень
              </p>
            </div>
            <div className='p-4 bg-teal-900/20 rounded-lg border-l-2 border-teal-400 transform hover:scale-[1.01] transition-transform duration-300'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed'>
                Утримання Гетьманщиною в деяких містах московської армії й
                воєнних гарнізонів: обмеження царським урядом станових прав
                козаків
              </p>
            </div>
            <div className='p-4 bg-teal-900/20 rounded-lg border-l-2 border-teal-400 transform hover:scale-[1.01] transition-transform duration-300'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed'>
                Занепад господарства й торгівлі: вивезення з України
                продовольства
              </p>
            </div>
          </div>
        </section>

        {/* Наслідки */}
        <section className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-green-400 backdrop-blur-sm'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-green-300 mb-6 text-center'>
            📊 Наслідки
          </h2>
          <div className='space-y-4'>
            <div className='p-4 bg-green-900/20 rounded-lg border-l-2 border-green-400 transform hover:scale-[1.01] transition-transform duration-300'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed'>
                Масове незадоволення українців
              </p>
            </div>
            <div className='p-4 bg-green-900/20 rounded-lg border-l-2 border-green-400 transform hover:scale-[1.01] transition-transform duration-300'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed'>
                Початок переговорів І. Мазепи зі шведським королем Карлом ХІІ та
                Річчю Посполитою{' '}
                <span className='font-bold text-red-300'>
                  Рішення гетьмана не отримало широкої підтримки
                </span>
              </p>
            </div>
            <div className='p-4 bg-green-900/20 rounded-lg border-l-2 border-green-400 transform hover:scale-[1.01] transition-transform duration-300'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed'>
                1708 р. І. Мазепа разом із кошовим отаманом Запорозької Січі
              </p>
            </div>
            <div className='p-4 bg-green-900/20 rounded-lg border-l-2 border-green-400 transform hover:scale-[1.01] transition-transform duration-300'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed'>
                К. Гордієнко переходить на бік шведського короля Карла ХІІ, з
                яким укладає договір{' '}
                <span className='font-bold text-yellow-300'>
                  (ключова думка - Україна має бути незалежною)
                </span>{' '}
                <span className='font-bold text-red-300'>
                  Мазепі проголосили анафему
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Царський терор */}
        <section className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-red-400 backdrop-blur-sm'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-red-300 mb-6 text-center'>
            🔥 Царський терор
          </h2>
          <div className='space-y-4'>
            <div className='p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400 transform hover:scale-[1.01] transition-transform duration-300'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed'>
                Петро І звелів Меншикову зруйнувати гетьманську резиденцію -
                Батурин (листопад 1708 p.)
              </p>
            </div>
            <div className='p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400 transform hover:scale-[1.01] transition-transform duration-300'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed'>
                1708 р. в Глухові відбулася Старшинська рада. Гетьманом було
                обрано{' '}
                <span className='font-bold text-white'>
                  Івана Скоропадського
                </span>
              </p>
            </div>
            <div className='p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400 transform hover:scale-[1.01] transition-transform duration-300'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed'>
                Наказом царя було зруйновано{' '}
                <span className='font-bold text-white'>Чортомлицьку Січ</span>{' '}
                (14 травня 1709 р.)
              </p>
            </div>
          </div>
        </section>

        {/* Хронология */}
        <section className='p-6 sm:p-8 lg:p-10 bg-slate-800/50 rounded-2xl border-l-4 border-emerald-400 backdrop-blur-sm'>
          <h3 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-emerald-300 text-center'>
            🗓️ Хронологія ключових подій
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
            {[
              {
                year: '1700',
                event: 'Початок Північної війни',
                color: 'green'
              },
              {
                year: '1708',
                event: 'Перехід Мазепи до шведів',
                color: 'emerald'
              },
              {
                year: '1708',
                event: 'Руйнація Батурина',
                color: 'red'
              },
              {
                year: '1709',
                event: 'Зруйнування Січі',
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
          <div className='w-full border-t-2 border-green-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-xl sm:text-2xl font-bold text-green-200 rounded-xl border-2 border-green-600/50 shadow-lg text-center backdrop-blur-sm'>
            Полтавська битва
          </span>
        </div>
      </footer>
    </div>
  )
}
