export function Apostol () {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-6 sm:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Фоновые декоративные элементы */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-500 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl animate-pulse delay-1000'></div>
        <div className='absolute top-1/2 left-1/2 w-72 h-72 bg-emerald-500 rounded-full blur-3xl animate-pulse delay-500'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-7xl mx-auto relative z-10 space-y-10 sm:space-y-16'>
        {/* Заголовок */}
        <header className='text-center space-y-6 sm:space-y-8'>
          <div className='space-y-4'>
            <h1 className='text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight'>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-500'>
                Гетьманування Данила Апостола
              </span>
            </h1>
            <div className='text-2xl sm:text-3xl lg:text-4xl text-cyan-300 font-bold'>
              1727 – 1734
            </div>
            <div className='text-xl sm:text-2xl lg:text-3xl text-teal-300 font-bold text-center'>
              «Одноокий» - тимчасово стримано ліквідацію автономії Гетьманщини
            </div>
          </div>
        </header>

        {/* Основная информация с портретом */}
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12'>
          {/* Текст слева */}
          <div className='space-y-6 sm:space-y-8'>
            <div className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-cyan-400 backdrop-blur-sm'>
              <div className='p-4 sm:p-6 bg-cyan-900/20 rounded-xl border-l-4 border-cyan-400'>
                <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                  Петро І ліквідував Малоросійську колегію і дозволив обирати
                  гетьмана, якому було видано царський указ{' '}
                  <span className='font-bold text-cyan-300'>
                    «Рішительні пункти» 1728 р.
                  </span>
                </p>
              </div>
            </div>

            {/* Возвращение запорожцев */}
            <div className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-teal-400 backdrop-blur-sm'>
              <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-300 mb-6 text-center'>
                🔄 Повернення запорожців
              </h2>
              <div className='p-4 sm:p-6 bg-teal-900/20 rounded-xl border-l-4 border-teal-400'>
                <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                  <span className='font-bold text-teal-300'>У 1734 р.</span>{' '}
                  домігся повернення під гетьманську булаву запорозьких козаків
                  з-під турецького підданства, які заснували{' '}
                  <span className='font-bold text-white'>Нову Січ</span> на р.
                  Підпільній
                </p>
                <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center mt-4 text-red-300'>
                  Дозволили, щоб використати козаків у новій російсько-турецькій
                  війні
                </p>
              </div>
            </div>
          </div>

          {/* Портрет Данила Апостола справа */}
          <div className='flex items-center justify-center'>
            <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-emerald-400 backdrop-blur-sm w-full max-w-lg'>
              <div className='bg-gradient-to-br from-emerald-900 to-slate-800 rounded-xl p-4 sm:p-6 border-2 border-emerald-500/30 shadow-lg'>
                <img
                  src='../../../assets/Mazepa/Apostol.webp'
                  alt='Данило Апостол - гетьман України'
                  className='w-full h-auto rounded-lg shadow-md mx-auto'
                />
                <p className='text-center text-emerald-200 mt-4 text-base sm:text-lg lg:text-xl italic'>
                  Данило Апостол «Одноокий» - гетьман України (1727-1734)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Достижения и реформы */}
        <section className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-cyan-400 backdrop-blur-sm'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-300 mb-6 text-center'>
            🏛️ Достигнення та реформи
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
            <div className='p-4 bg-cyan-900/20 rounded-lg border-l-2 border-cyan-400 transform hover:scale-[1.02] transition-transform duration-300'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                Початок укладання зводу законів{' '}
                <span className='font-bold text-white'>
                  «Права, за якими судиться малоросійський народ»
                </span>
              </p>
            </div>
            <div className='p-4 bg-cyan-900/20 rounded-lg border-l-2 border-cyan-400 transform hover:scale-[1.02] transition-transform duration-300'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                Відроджено українську економіку
              </p>
            </div>
            <div className='p-4 bg-cyan-900/20 rounded-lg border-l-2 border-cyan-400 transform hover:scale-[1.02] transition-transform duration-300'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                Поліпшено життя козацтва і селянства
              </p>
            </div>
            <div className='p-4 bg-cyan-900/20 rounded-lg border-l-2 border-cyan-400 transform hover:scale-[1.02] transition-transform duration-300'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                Обмежено свавілля російських урядовців в Україні
              </p>
            </div>
          </div>
        </section>

        {/* Термины */}
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12'>
          {/* Паланка */}
          <div className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-teal-400 backdrop-blur-sm'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-300 mb-6 text-center'>
              📋 Паланка
            </h2>
            <div className='p-4 sm:p-6 bg-teal-900/20 rounded-xl border-l-4 border-teal-400'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                Адміністративно-територіальна одиниця на Запорізькій Січі
              </p>
            </div>
          </div>

          {/* Цитата */}
          <div className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-emerald-400 backdrop-blur-sm'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-300 mb-6 text-center'>
              📜 Історична цитата
            </h2>
            <div className='p-4 sm:p-6 bg-emerald-900/20 rounded-xl border-l-4 border-emerald-400'>
              <blockquote className='text-lg sm:text-xl lg:text-2xl leading-relaxed italic text-emerald-200 text-center'>
                «...Жити запорожцям у місцях, де розорено в 1709 році їхнє
                житло. Користуватися їм промислами... Зберігати їм вірність
                престолу російському... Бути їм в залежності від
                головнокомандуючого генерала в Малій Русі визначеного...»
              </blockquote>
            </div>
          </div>
        </section>

        {/* Историческое значение */}
        <section className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-cyan-400 backdrop-blur-sm'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-300 mb-6 text-center'>
            🌟 Історичне значення
          </h2>
          <div className='p-4 sm:p-6 bg-cyan-900/20 rounded-xl border-l-4 border-cyan-400'>
            <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
              Гетьманування Данила Апостола стало періодом тимчасового
              відродження автономії Гетьманщини, поліпшення економічного
              становища та обмеження російського впливу в Україні
            </p>
          </div>
        </section>

        {/* Хронология */}
        <section className='p-6 sm:p-8 lg:p-10 bg-slate-800/50 rounded-2xl border-l-4 border-teal-400 backdrop-blur-sm'>
          <h3 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-teal-300 text-center'>
            🗓️ Ключові події
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
            {[
              {
                year: '1727',
                event: 'Обраний гетьманом',
                color: 'cyan'
              },
              {
                year: '1728',
                event: 'Рішительні пункти',
                color: 'teal'
              },
              {
                year: '1734',
                event: 'Повернення запорожців',
                color: 'emerald'
              },
              {
                year: '1734',
                event: 'Нова Січ',
                color: 'emerald'
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
          <div className='w-full border-t-2 border-cyan-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-xl sm:text-2xl font-bold text-cyan-200 rounded-xl border-2 border-cyan-600/50 shadow-lg text-center backdrop-blur-sm'>
            Культура
          </span>
        </div>
      </footer>
    </div>
  )
}
