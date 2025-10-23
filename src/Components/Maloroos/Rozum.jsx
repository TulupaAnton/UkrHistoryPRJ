export function Rozum () {
  return (
    <article className='relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/80 to-purple-900/90 text-white overflow-hidden'>
      {/* Background elements */}
      <div className='fixed top-0 left-0 w-full h-full opacity-5 pointer-events-none'>
        <div className='absolute top-20 left-10 w-80 h-80 bg-cyan-400 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-violet-500 rounded-full blur-3xl'></div>
        <div className='absolute top-1/2 left-1/3 w-72 h-72 bg-indigo-400 rounded-full blur-3xl'></div>
      </div>

      {/* Decorative top border */}
      <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent'></div>

      {/* Header Section */}
      <header className='relative z-10 pt-16 pb-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto text-center'>
          {/* Decorative elements */}
          <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full'></div>

          <h1 className='text-5xl sm:text-6xl lg:text-7xl font-black mb-6 tracking-tight'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400'>
              Кирило Розумовський
            </span>
          </h1>

          <div className='inline-flex items-center justify-center space-x-4 mb-6'>
            <div className='w-16 h-0.5 bg-gradient-to-r from-transparent to-cyan-400'></div>
            <span className='text-cyan-200 text-xl font-semibold tracking-wider'>
              1750 - 1764
            </span>
            <div className='w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent'></div>
          </div>

          <p className='text-2xl sm:text-3xl text-cyan-100 font-light max-w-3xl mx-auto leading-tight'>
            Останній гетьман Війська Запорізького
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20'>
        {/* Hero Section with Image and Key Facts */}
        <section className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16'>
          {/* Image Column */}
          <div className='lg:col-span-1'>
            <figure className='group relative'>
              <div className='relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-cyan-500/20'>
                <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 mix-blend-overlay'></div>
                <img
                  src='../../../assets/Rozum.png'
                  alt='Портрет гетьмана Кирила Розумовського'
                  className='w-full h-auto object-cover'
                />
              </div>
              <div className='absolute inset-0 rounded-2xl border-2 border-cyan-400/30 pointer-events-none'></div>
              <figcaption className='text-center text-cyan-200/80 mt-4 text-sm font-light'>
                Гетьман Кирило Розумовський
              </figcaption>
            </figure>
          </div>

          {/* Key Facts Column */}
          <div className='lg:col-span-2'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300'>
                <h3 className='text-cyan-300 font-bold text-lg mb-3'>
                  📜 Статус
                </h3>
                <p className='text-white/90'>
                  Останній гетьман Війська Запорізького, граф Російської імперії
                </p>
              </div>

              <div className='bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300'>
                <h3 className='text-blue-300 font-bold text-lg mb-3'>
                  ⚔️ Звання
                </h3>
                <p className='text-white/90'>
                  Генерал-фельдмаршал Російської імперії
                </p>
              </div>

              <div className='bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300'>
                <h3 className='text-purple-300 font-bold text-lg mb-3'>
                  🎯 Мета
                </h3>
                <p className='text-white/90'>
                  Перебудова Гетьманщини на європейський лад
                </p>
              </div>

              <div className='bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-red-500/20 hover:border-red-400/40 transition-all duration-300'>
                <h3 className='text-red-300 font-bold text-lg mb-3'>
                  ⏰ Завершення
                </h3>
                <p className='text-white/90'>
                  <time className='font-bold'>1764 р.</time> - зрікся
                  гетьманства
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Historical Context */}
        <section className='space-y-8'>
          {/* Передумови */}
          <article className='bg-gradient-to-r from-slate-800/50 to-blue-900/30 rounded-2xl p-8 border border-cyan-500/30 backdrop-blur-sm'>
            <h2 className='text-3xl font-bold text-cyan-300 mb-6 flex items-center'>
              <span className='w-3 h-3 bg-cyan-400 rounded-full mr-3'></span>
              Історичний контекст
            </h2>
            <div className='space-y-4 text-lg leading-relaxed'>
              <p>
                У <time className='text-cyan-300 font-semibold'>1741 р.</time>{' '}
                до влади прийшла імператриця{' '}
                <strong className='text-yellow-300'>Єлизавета Петрівна</strong>.
                Її чоловіком був українець{' '}
                <strong className='text-yellow-300'>
                  Олексій Розумовський
                </strong>
                , що сприяло поширенню української культури при дворі.
              </p>
            </div>
          </article>

          {/* Причини відновлення гетьманства */}
          <article className='bg-gradient-to-r from-slate-800/50 to-purple-900/30 rounded-2xl p-8 border border-purple-500/30 backdrop-blur-sm'>
            <h2 className='text-3xl font-bold text-purple-300 mb-6 flex items-center'>
              <span className='w-3 h-3 bg-purple-400 rounded-full mr-3'></span>
              Причини відновлення гетьманства
            </h2>
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-4 text-lg'>
              <li className='flex items-start space-x-3'>
                <div
                  className='w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0'
                  aria-hidden='true'
                ></div>
                <span>
                  Позиція козацької старшини щодо відновлення гетьманства
                </span>
              </li>
              <li className='flex items-start space-x-3'>
                <div
                  className='w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0'
                  aria-hidden='true'
                ></div>
                <span>Економічне невдоволення українського населення</span>
              </li>
              <li className='flex items-start space-x-3'>
                <div
                  className='w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0'
                  aria-hidden='true'
                ></div>
                <span>
                  Загроза війни з Пруссією та потреба у військовому потенціалі
                </span>
              </li>
              <li className='flex items-start space-x-3'>
                <div
                  className='w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0'
                  aria-hidden='true'
                ></div>
                <span>Стратегічні інтереси у війнах проти Туреччини</span>
              </li>
            </ul>
          </article>

          {/* Реформи та досягнення */}
          <article className='bg-gradient-to-r from-slate-800/50 to-blue-900/30 rounded-2xl p-8 border border-blue-500/30 backdrop-blur-sm'>
            <h2 className='text-3xl font-bold text-blue-300 mb-6 flex items-center'>
              <span className='w-3 h-3 bg-blue-400 rounded-full mr-3'></span>
              Реформи та політика
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='space-y-4'>
                <h3 className='text-xl font-semibold text-cyan-200 mb-3'>
                  🏛️ Адміністративні зміни
                </h3>
                <ul className='space-y-2'>
                  <li className='flex items-center space-x-2'>
                    <span className='text-cyan-400'>•</span>
                    <span>
                      Повернення резиденції до{' '}
                      <mark className='bg-cyan-500/30 text-cyan-200 px-1 rounded'>
                        Батурина
                      </mark>
                    </span>
                  </li>
                  <li className='flex items-center space-x-2'>
                    <span className='text-cyan-400'>•</span>
                    <span>
                      Підпорядкування{' '}
                      <mark className='bg-cyan-500/30 text-cyan-200 px-1 rounded'>
                        Запорізької Січі
                      </mark>
                    </span>
                  </li>
                  <li className='flex items-center space-x-2'>
                    <span className='text-cyan-400'>•</span>
                    <span>
                      Контроль над{' '}
                      <mark className='bg-cyan-500/30 text-cyan-200 px-1 rounded'>
                        Києвом
                      </mark>
                    </span>
                  </li>
                </ul>
              </div>
              <div className='space-y-4'>
                <h3 className='text-xl font-semibold text-green-200 mb-3'>
                  📚 Освіта та судочинство
                </h3>
                <ul className='space-y-2'>
                  <li className='flex items-center space-x-2'>
                    <span className='text-green-400'>•</span>
                    <span>Створення шляхетських судів</span>
                  </li>
                  <li className='flex items-center space-x-2'>
                    <span className='text-green-400'>•</span>
                    <span>Обов'язкове навчання козацьких дітей</span>
                  </li>
                  <li className='flex items-center space-x-2'>
                    <span className='text-green-400'>•</span>
                    <span>Проєкт спадкового гетьманства</span>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          {/* Важливі події */}
          <article className='bg-gradient-to-r from-slate-800/50 to-red-900/30 rounded-2xl p-8 border border-red-500/30 backdrop-blur-sm'>
            <h2 className='text-3xl font-bold text-red-300 mb-6 flex items-center'>
              <span className='w-3 h-3 bg-red-400 rounded-full mr-3'></span>
              Ключові події
            </h2>
            <div className='space-y-4'>
              <div className='flex items-start space-x-4 p-4 bg-red-900/20 rounded-lg'>
                <div className='flex-shrink-0 w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center'>
                  <span className='text-red-300 font-bold'>1754</span>
                </div>
                <div>
                  <h3 className='text-red-200 font-semibold text-lg'>
                    Глухівська петиція
                  </h3>
                  <p className='text-white/80'>
                    Обмеження гетьманської влади царськими указами
                  </p>
                </div>
              </div>
              <div className='flex items-start space-x-4 p-4 bg-red-900/20 rounded-lg'>
                <div className='flex-shrink-0 w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center'>
                  <span className='text-red-300 font-bold'>1764</span>
                </div>
                <div>
                  <h3 className='text-red-200 font-semibold text-lg'>
                    Ліквідація гетьманства
                  </h3>
                  <p className='text-white/80'>
                    Указ Катерини II про скасування гетьманської влади
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Цитати */}
          <aside className='bg-gradient-to-br from-amber-900/20 to-orange-900/20 rounded-2xl p-8 border border-amber-500/30 backdrop-blur-sm'>
            <h2 className='text-3xl font-bold text-amber-300 mb-6 text-center'>
              💬 Історичні цитати
            </h2>
            <div className='space-y-6'>
              <blockquote className='relative'>
                <div className='absolute -left-2 top-0 text-amber-400 text-2xl'>
                  "
                </div>
                <p className='text-lg italic text-amber-100 pl-6 leading-relaxed'>
                  <mark className='bg-amber-500/30 text-amber-200 px-1 rounded'>
                    Після всемилостивішого від нас звільнення графа
                    Розумовського з чину гетьманського наказую нашому Сенатові
                    для належного управління в Малій Росії створити там
                    Малоросійську колегію...
                  </mark>
                </p>
                <footer className='text-right mt-2 text-amber-200/80'>
                  — Указ Катерини II
                </footer>
              </blockquote>
            </div>
          </aside>
        </section>
      </main>

      {/* Next Topic Footer */}
      <footer className='relative z-10 border-t border-cyan-500/20 mt-20 pt-12 pb-8'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='inline-flex items-center space-x-4 bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-500/30'>
            <svg
              className='w-5 h-5 text-cyan-400'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z'
                clipRule='evenodd'
              />
            </svg>
            <span className='text-cyan-200 font-semibold'>
              Наступна тема: Ліквідація Гетьманщини
            </span>
            <svg
              className='w-5 h-5 text-cyan-400'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        </div>
      </footer>
    </article>
  )
}
