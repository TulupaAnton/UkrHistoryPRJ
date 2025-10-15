export function Pilip () {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-6 sm:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Фоновые декоративные элементы */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl animate-pulse delay-1000'></div>
        <div className='absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse delay-500'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-7xl mx-auto relative z-10 space-y-10 sm:space-y-16'>
        {/* Заголовок */}
        <header className='text-center space-y-6 sm:space-y-8'>
          <div className='space-y-4'>
            <h1 className='text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight'>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500'>
                Гетьманування Пилипа Орлика
              </span>
            </h1>
            <div className='text-2xl sm:text-3xl lg:text-4xl text-blue-300 font-bold'>
              1710 рік
            </div>
          </div>
        </header>

        {/* Основная информация с портретом */}
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12'>
          {/* Текст слева */}
          <div className='space-y-6 sm:space-y-8'>
            <div className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-blue-400 backdrop-blur-sm'>
              <div className='p-4 sm:p-6 bg-blue-900/20 rounded-xl border-l-4 border-blue-400'>
                <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                  <span className='font-bold text-blue-300'>1710 р.</span>{' '}
                  українська еміграція обрала гетьманом Пилипа Орлика, який
                  увійшов в історію як автор першої Конституції України{' '}
                  <span className='font-bold text-indigo-300'>
                    («Пакти й конституції законів і вольностей Війська
                    Запорозького»)
                  </span>
                </p>
              </div>
            </div>

            {/* Основные положения Конституции */}
            <div className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-indigo-400 backdrop-blur-sm'>
              <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-300 mb-6 text-center'>
                📜 Основні положення Конституції
              </h2>
              <div className='grid grid-cols-1 gap-4 sm:gap-6'>
                <div className='p-4 bg-indigo-900/20 rounded-lg border-l-2 border-indigo-400 transform hover:scale-[1.02] transition-transform duration-300'>
                  <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                    Обмежувалися права гетьмана
                  </p>
                </div>
                <div className='p-4 bg-indigo-900/20 rounded-lg border-l-2 border-indigo-400 transform hover:scale-[1.02] transition-transform duration-300'>
                  <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                    Створювалася Генеральна рада (поділ влади)
                  </p>
                </div>
                <div className='p-4 bg-indigo-900/20 rounded-lg border-l-2 border-indigo-400 transform hover:scale-[1.02] transition-transform duration-300'>
                  <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                    Найвища виконавча влада належала гетьманові та генеральній
                    старшині
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Портрет Пилипа Орлика справа */}
          <div className='flex items-center justify-center'>
            <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-purple-400 backdrop-blur-sm w-full max-w-lg'>
              <div className='bg-gradient-to-br from-purple-900 to-slate-800 rounded-xl p-4 sm:p-6 border-2 border-purple-500/30 shadow-lg'>
                <img
                  src='../../../assets/Mazepa/orlik.webp'
                  alt='Пилип Орлик - гетьман України в вигнанні'
                  className='w-full h-auto rounded-lg shadow-md mx-auto'
                />
                <p className='text-center text-purple-200 mt-4 text-base sm:text-lg lg:text-xl italic'>
                  Пилип Орлик - автор першої Конституції України
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Исторический контекст и события */}
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12'>
          {/* Исторический контекст */}
          <div className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-purple-400 backdrop-blur-sm'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-300 mb-6 text-center'>
              📅 Історичний контекст
            </h2>
            <div className='space-y-4'>
              <div className='p-4 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
                <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                  1711 р. здійснив похід на Правобережжя
                </p>
              </div>
              <div className='p-4 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
                <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                  1711 р. Москва уклала Прутський мир з Османами.{' '}
                  <span className='font-bold text-red-300'>
                    П. Орлик залишився гетьманом у вигнанні
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Определение Конституции */}
          <div className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-blue-400 backdrop-blur-sm'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-300 mb-6 text-center'>
              ⚖️ Що таке Конституція?
            </h2>
            <div className='p-4 sm:p-6 bg-blue-900/20 rounded-xl border-l-4 border-blue-400'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                <span className='font-bold text-blue-300'>Конституція</span> -
                основний державний документ (закон), який визначає державний
                устрій, порядок і принципи функціонування представницьких,
                виконавчих та судових органів влади, виборчу систему, права й
                обов'язки держави, суспільства та громадян
              </p>
            </div>
          </div>
        </section>

        {/* Цитаты из Конституции */}
        <section className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-indigo-400 backdrop-blur-sm'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-300 mb-6 text-center'>
            📖 Цитати з Конституції Пилипа Орлика
          </h2>
          <div className='space-y-6'>
            <blockquote className='p-4 sm:p-6 bg-indigo-900/20 rounded-xl border-l-4 border-indigo-400'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed italic text-indigo-200'>
                «...Отож. Ми, генеральна старшина, кошовий отаман і все Військо
                Запорозьке домовилися і постановили з ясновельможним
                гетьманом...щоб із тими всіма генеральними особами мають
                радитися гетьман і його наступники про ... всілякі справи,
                нічого без їхнього дозволу й поради не починати... У
                гетьманській резиденції{' '}
                <span className='font-bold text-white'>тричі на рік</span> має
                збиратися{' '}
                <span className='font-bold text-white'>генеральна Рада</span>:
                на Різдво, Великдень, Покрову. Між Радами Україною правитиме
                гетьман з генеральною старшиною...»
              </p>
            </blockquote>

            <blockquote className='p-4 sm:p-6 bg-purple-900/20 rounded-xl border-l-4 border-purple-400'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed italic text-purple-200'>
                «...Ми, генеральна старшина, кошовий отаман Все Військо
                Запорозьке... постановили 3 ...гетьманом таке право... B
                Запорозькому Війську: щоб у Вітчизні нашій першими радниками
                була генеральна старшина, ...за ними городові полковники... І з
                тими генеральними особами мають радитися гетьман та його
                наступники про цілісність Вітчизни, її загальне добро... нічого
                без їхнього дозволу... не зачинаючи приватною владою... і до
                завершення не доводячи...»
              </p>
            </blockquote>
            <blockquote className='p-4 sm:p-6 bg-purple-900/20 rounded-xl border-l-4 border-purple-400'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed italic text-purple-200'>
                «... Гетьман Орлик пішов за королем у Швецію, де мав привілеї
                «шефа союзної армії» і де знайшов разом зі своєю родиною
                підтримку навіть після смерті короля...»
              </p>
            </blockquote>
          </div>
        </section>

        {/* Историческое значение */}
        <section className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-purple-400 backdrop-blur-sm'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-300 mb-6 text-center'>
            🌍 Історичне значення
          </h2>
          <div className='p-4 sm:p-6 bg-purple-900/20 rounded-xl border-l-4 border-purple-400'>
            <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
              Конституція П. Орлика вперше в Європі запропонувала реальну модель
              вільної незалежної держави, заснованої на природному праві народу
              на свободу і самовизначення
            </p>
          </div>
        </section>

        {/* Хронология */}
        <section className='p-6 sm:p-8 lg:p-10 bg-slate-800/50 rounded-2xl border-l-4 border-blue-400 backdrop-blur-sm'>
          <h3 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-blue-300 text-center'>
            🗓️ Ключові події
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
            {[
              {
                year: '1710',
                event: 'Обраний гетьманом',
                color: 'blue'
              },
              {
                year: '1710',
                event: 'Конституція Орлика',
                color: 'indigo'
              },
              {
                year: '1711',
                event: 'Похід на Правобережжя',
                color: 'purple'
              },
              {
                year: '1711',
                event: 'Прутський мир',
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
          <div className='w-full border-t-2 border-blue-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-xl sm:text-2xl font-bold text-blue-200 rounded-xl border-2 border-blue-600/50 shadow-lg text-center backdrop-blur-sm'>
            Перша Конституція України
          </span>
        </div>
      </footer>
    </div>
  )
}
