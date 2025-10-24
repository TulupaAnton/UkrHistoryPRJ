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
        <div className='max-w-6xl mx-auto text-center'>
          {/* Decorative elements */}
          <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full'></div>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400'>
              Українські землі в другій половині ХVІІІ ст
            </span>
          </h1>

          <div className='inline-flex items-center justify-center space-x-4 mb-6'>
            <div className='w-16 h-0.5 bg-gradient-to-r from-transparent to-cyan-400'></div>
            <span className='text-cyan-200 text-2xl sm:text-3xl font-semibold tracking-wider'>
              Гетьманування Кирила Розумовського (1750-1764)
            </span>
            <div className='w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent'></div>
          </div>
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
                  alt='Гетьман Кирило Розумовський'
                  className='w-full h-auto object-cover'
                />
              </div>
              <div className='absolute inset-0 rounded-2xl border-2 border-cyan-400/30 pointer-events-none'></div>
              <figcaption className='text-center text-cyan-200/80 mt-4 text-lg font-light'>
                Гетьман Кирило Розумовський
              </figcaption>
            </figure>
          </div>

          {/* Key Facts Column */}
          <div className='lg:col-span-2'>
            <div className='bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-cyan-500/20'>
              <p className='text-xl sm:text-2xl leading-relaxed text-white/90 mb-6'>
                Український військовий, політичний і державний діяч: останній
                гетьман Війська Запорізького: представник козацького роду
                Розумовських: граф Російської імперії,{' '}
                <span className='bg-yellow-500/20 text-yellow-200 px-2 py-1 rounded-lg font-semibold'>
                  генерал-фельдмаршал: намагався перебудувати Гетьманщину на
                  європейський лад
                </span>
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed text-white/90'>
                <span className='bg-red-500/20 text-red-200 px-3 py-1 rounded-lg font-bold text-2xl'>
                  1764 рік
                </span>{' '}
                - Катерина II примусила К. Розумовського зректися гетьманства,
                за що йому зберегли становище високого достойника Російської
                імперії, забезпечили велику пенсію й надали у власність колишні
                гетьманські столиці, зокрема Батурин
              </p>
            </div>

            <div className='mt-6 text-center'>
              <span className='inline-block bg-green-500/20 text-green-200 text-2xl sm:text-3xl font-bold px-6 py-3 rounded-2xl border border-green-400/30'>
                Зміцнення автономії
              </span>
            </div>
          </div>
        </section>

        {/* Historical Context */}
        <section className='space-y-8'>
          {/* Передумови */}
          <article className='bg-gradient-to-r from-slate-800/50 to-blue-900/30 rounded-2xl p-6 sm:p-8 border border-cyan-500/30 backdrop-blur-sm'>
            <h2 className='text-3xl sm:text-4xl font-bold text-cyan-300 mb-6 flex items-center'>
              <span className='w-4 h-4 bg-cyan-400 rounded-full mr-4'></span>
              Передумови
            </h2>
            <div className='space-y-6 text-xl sm:text-2xl leading-relaxed'>
              <p>
                1741 р. до влади прийшла імператриця Єлизавета, дочка Петра І її
                чоловіком був українець Олексій Розумовський, а при дворі
                поширилася мода на українську культуру
              </p>
              <p>
                1744 р. козацька старшина за сприяння О. Розумовського
                звернулася до Єлизавети з проханням відновити гетьманство.
                Кандидатурою на посаду гетьмана став молодший брат чоловіка
                Єлизавети Кирило Розумовський
              </p>
            </div>
          </article>

          {/* Причини */}
          <article className='bg-gradient-to-r from-slate-800/50 to-purple-900/30 rounded-2xl p-6 sm:p-8 border border-purple-500/30 backdrop-blur-sm'>
            <h2 className='text-3xl sm:text-4xl font-bold text-purple-300 mb-6 flex items-center'>
              <span className='w-4 h-4 bg-purple-400 rounded-full mr-4'></span>
              Причини
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 text-xl sm:text-2xl'>
              <div className='space-y-4'>
                <p className='flex items-start space-x-3'>
                  <span className='text-purple-400 mt-2'>•</span>
                  <span>
                    Позиція старшини, яка домагалася відновлення гетьманства
                  </span>
                </p>
                <p className='flex items-start space-x-3'>
                  <span className='text-purple-400 mt-2'>•</span>
                  <span>
                    Наростання невдоволення українців економічним становищем
                  </span>
                </p>
              </div>
              <div className='space-y-4'>
                <p className='flex items-start space-x-3'>
                  <span className='text-purple-400 mt-2'>•</span>
                  <span>
                    Загроза війни проти Пруссії та ймовірним використанням
                    військового потенціалу Гетьманщини
                  </span>
                </p>
                <p className='flex items-start space-x-3'>
                  <span className='text-purple-400 mt-2'>•</span>
                  <span>
                    Потреба відновити стратегічний потенціал України з метою
                    використання його у війнах проти Туреччини
                  </span>
                </p>
              </div>
            </div>
          </article>

          {/* Політика */}
          <article className='bg-gradient-to-r from-slate-800/50 to-blue-900/30 rounded-2xl p-6 sm:p-8 border border-blue-500/30 backdrop-blur-sm'>
            <h2 className='text-3xl sm:text-4xl font-bold text-blue-300 mb-6 flex items-center'>
              <span className='w-4 h-4 bg-blue-400 rounded-full mr-4'></span>
              Політика
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 text-xl sm:text-2xl'>
              <div className='space-y-4'>
                <p>Не укладав жодних статей із царською адміністрацією</p>
                <p>Українські справи розглядалися Колегією закордонних справ</p>
                <p>
                  Повернув резиденцію з{' '}
                  <span className='bg-cyan-500/30 text-cyan-200 px-2 py-1 rounded'>
                    Глухова
                  </span>{' '}
                  до{' '}
                  <span className='bg-cyan-500/30 text-cyan-200 px-2 py-1 rounded'>
                    Батурина
                  </span>
                </p>
                <p>
                  Підпорядкував своїй адміністрації{' '}
                  <span className='bg-purple-500/30 text-purple-200 px-2 py-1 rounded'>
                    Запорізьку Січ
                  </span>{' '}
                  і{' '}
                  <span className='bg-purple-500/30 text-purple-200 px-2 py-1 rounded'>
                    Київ
                  </span>
                </p>
              </div>
              <div className='space-y-4'>
                <p>
                  Судова реформа, реформа війська{' '}
                  <span className='bg-amber-500/30 text-amber-200 px-2 py-1 rounded'>
                    створено станові шляхетські суди
                  </span>
                </p>
                <p>Запровадив обов'язкове навчання козацьких дітей</p>
                <p>Виступив з проєктом спадкового гетьманства в Україні</p>
              </div>
            </div>
          </article>

          {/* Глухівська петиція */}
          <article className='bg-gradient-to-r from-slate-800/50 to-red-900/30 rounded-2xl p-6 sm:p-8 border border-red-500/30 backdrop-blur-sm'>
            <h2 className='text-3xl sm:text-4xl font-bold text-red-300 mb-6 flex items-center'>
              <span className='w-4 h-4 bg-red-400 rounded-full mr-4'></span>
              <span className='bg-red-500/20 text-red-200 px-4 py-2 rounded-xl'>
                Глухівська петиція
              </span>
            </h2>
            <div className='space-y-6 text-xl sm:text-2xl'>
              <p className='font-semibold text-red-200'>
                1754 р. Укази, що обмежували гетьманську владу:
              </p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='space-y-4'>
                  <p className='flex items-start space-x-3'>
                    <span className='text-red-400 mt-2'>•</span>
                    <span>Розумовському заборонили призначати полковників</span>
                  </p>
                  <p className='flex items-start space-x-3'>
                    <span className='text-red-400 mt-2'>•</span>
                    <span>
                      Відхилено клопотання про відновлення самостійної
                      зовнішньої політики Лівобережної Гетьманщини
                    </span>
                  </p>
                </div>
                <div className='space-y-4'>
                  <p className='flex items-start space-x-3'>
                    <span className='text-red-400 mt-2'>•</span>
                    <span>
                      Контролю підлягали фінансові справи. Рефортування
                      судочинства
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Важлива дата */}
          <article className='bg-gradient-to-r from-slate-800/50 to-orange-900/30 rounded-2xl p-6 sm:p-8 border border-orange-500/30 backdrop-blur-sm text-center'>
            <div className='space-y-4'>
              <span className='bg-orange-500/20 text-orange-200 text-2xl sm:text-3xl font-bold px-6 py-3 rounded-xl inline-block'>
                Важлива дата!
              </span>
              <p className='text-2xl sm:text-3xl font-bold text-orange-200'>
                1764 рік - указ імператриці Катерини II про ліквідацію
                гетьманської влади в Україні
              </p>
            </div>
          </article>

          {/* Цитати */}
          <article className='bg-gradient-to-br from-amber-900/20 to-orange-900/20 rounded-2xl p-6 sm:p-8 border border-amber-500/30 backdrop-blur-sm'>
            <h2 className='text-3xl sm:text-4xl font-bold text-amber-300 mb-6 text-center'>
              Цитати які треба знати
            </h2>
            <div className='space-y-6 text-xl sm:text-2xl'>
              <blockquote className='relative bg-amber-900/20 rounded-2xl p-6 border-l-4 border-amber-400'>
                <div className='absolute -left-2 top-0 text-amber-400 text-3xl'>
                  "
                </div>
                <p className='italic text-amber-100 pl-6 leading-relaxed'>
                  <span className='bg-amber-500/30 text-amber-200 px-2 py-1 rounded'>
                    Після всемилостивішого від нас звільнення графа
                    Розумовського з чину гетьманського наказую нашому Сенатові
                    для належного управління в Малій Росії створити там
                    Малоросійську колегію, в якій бути головним нашому генералу
                    графу Рум'янцеву...»
                  </span>
                </p>
              </blockquote>
              <blockquote className='relative bg-amber-900/20 rounded-2xl p-6 border-l-4 border-amber-400'>
                <div className='absolute -left-2 top-0 text-amber-400 text-3xl'>
                  "
                </div>
                <p className='italic text-amber-100 pl-6 leading-relaxed'>
                  <span className='bg-green-500/30 text-green-200 px-2 py-1 rounded'>
                    «треба найлегшим способом привести до того, щоб вони...
                    перестали дивитися, як вовки на ліс. Коли в Малоросії не
                    буде гетьмана, то треба намагатися щоб час і назва гетьманів
                    зникли...
                  </span>
                </p>
              </blockquote>
            </div>
          </article>
        </section>
      </main>

      {/* Next Topic Footer */}
      <footer className='relative z-10 border-t border-cyan-500/20 mt-20 pt-12 pb-8'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='inline-flex items-center space-x-4 bg-slate-800/50 backdrop-blur-sm px-6 py-4 rounded-full border border-cyan-500/30'>
            <span className='text-cyan-200 font-semibold text-lg'>
              Наступна тема: Друга Малоросійська колегія
            </span>
          </div>
        </div>
      </footer>
    </article>
  )
}
