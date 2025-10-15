export function Malorosia () {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-6 sm:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Фоновые декоративные элементы */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-1/4 left-1/4 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500 rounded-full blur-3xl animate-pulse delay-1000'></div>
        <div className='absolute top-1/2 left-1/2 w-72 h-72 bg-indigo-500 rounded-full blur-3xl animate-pulse delay-500'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-7xl mx-auto relative z-10 space-y-10 sm:space-y-16'>
        {/* Заголовок */}
        <header className='text-center space-y-6 sm:space-y-8'>
          <div className='space-y-4'>
            <h1 className='text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight'>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-500'>
                Важливі терміни
              </span>
            </h1>
          </div>
        </header>

        {/* Термины */}
        <section className='space-y-8 sm:space-y-12'>
          {/* Малоросія */}
          <div className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-purple-400 backdrop-blur-sm'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-300 mb-6 text-center'>
              Малоросія
            </h2>
            <div className='p-4 sm:p-6 bg-purple-900/20 rounded-xl border-l-4 border-purple-400'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                Офіційна назва переважно Правобережної та Лівобережної України
                (Гетьманщини) в законодавчих актах і розпорядженнях царського
                уряду
              </p>
            </div>
          </div>

          {/* Малоросійська колегія */}
          <div className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-violet-400 backdrop-blur-sm'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-violet-300 mb-6 text-center'>
              Малоросійська колегія
            </h2>
            <div className='p-4 sm:p-6 bg-violet-900/20 rounded-xl border-l-4 border-violet-400'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                Орган державної структури Російської імперії, заснований указом
                Петра І{' '}
                <span className='font-bold text-violet-300'>
                  16 травня 1722 р. для управління Гетьманщиною
                </span>
              </p>
            </div>
          </div>

          {/* Змосковщення, зросійщення */}
          <div className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-indigo-400 backdrop-blur-sm'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-300 mb-6 text-center'>
              Змосковщення, зросійщення
            </h2>
            <div className='p-4 sm:p-6 bg-indigo-900/20 rounded-xl border-l-4 border-indigo-400'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                Сукупність дій та умов, спрямованих на зміцнення російської
                національно-політичної переваги в країнах, що опинилися у складі
                Росії або перебувають у сфері її впливу, шляхом переходу чи
                переведення осіб неросійської національності на російську мову й
                російську культуру та їх подальшої асиміляції.
              </p>
            </div>
          </div>
        </section>

        {/* I Малоросійська Колегія */}
        <section className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-purple-400 backdrop-blur-sm'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-300 mb-6 text-center'>
            I Малоросійська Колегія (1722-1727)
          </h2>
          <p className='text-xl sm:text-2xl lg:text-3xl text-red-300 font-bold text-center mb-6'>
            перетворена на вищий контрольний орган Гетьманщини
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
            <div className='p-4 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                Створена напередодні смерті І. Скоропадського
              </p>
            </div>
            <div className='p-4 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                6 московських чиновників на чолі з С. Вельяміновим
              </p>
            </div>
            <div className='p-4 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                Контролювали розподіл земель
              </p>
            </div>
            <div className='p-4 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                Установлювали і стягували податки
              </p>
            </div>
            <div className='p-4 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                Розміщували російські війська
              </p>
            </div>
          </div>
        </section>

        {/* Павло Полуботок */}
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12'>
          {/* Текст слева */}
          <div className='space-y-6 sm:space-y-8'>
            <div className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-violet-400 backdrop-blur-sm'>
              <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-violet-300 mb-6 text-center'>
                Павло Полуботок (1722-1723)
              </h2>
              <p className='text-xl sm:text-2xl lg:text-3xl text-red-300 font-bold text-center mb-6'>
                опір діям Малоросійської колегії
              </p>

              <div className='p-4 sm:p-6 bg-violet-900/20 rounded-xl border-l-4 border-violet-400'>
                <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                  <span className='font-bold text-violet-300'>1723 р.</span> П.
                  Полуботком були складені{' '}
                  <span className='font-bold text-white'>
                    Коломацькі петиції (чолобитні)
                  </span>{' '}
                  - звернення до Петра І з вимогою відновлення давніх прав
                  України
                </p>
              </div>

              <div className='p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400 mt-4'>
                <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                  Викликано до Петербурга, звинувачено в державній зраді й
                  кинуто до Петропавловської фортеці, де і помер
                </p>
              </div>

              <div className='p-4 bg-orange-900/20 rounded-lg border-l-2 border-orange-400 mt-4'>
                <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center font-bold'>
                  Після смерті П. Полуботка Лівобережною Україною правила лише
                  Малоросійська колегія
                </p>
              </div>
            </div>
          </div>

          {/* Портрет Павла Полуботка справа */}
          <div className='flex items-center justify-center'>
            <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-indigo-400 backdrop-blur-sm w-full max-w-lg'>
              <div className='bg-gradient-to-br from-indigo-900 to-slate-800 rounded-xl p-4 sm:p-6 border-2 border-indigo-500/30 shadow-lg'>
                <img
                  src='../../../assets/Mazepa/pavlo.webp'
                  alt='Павло Полуботок - наказний гетьман України'
                  className='w-full h-auto rounded-lg shadow-md mx-auto'
                />
                <p className='text-center text-indigo-200 mt-4 text-base sm:text-lg lg:text-xl italic'>
                  Павло Полуботок - наказний гетьман України (1722-1723)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Хронология */}
        <section className='p-6 sm:p-8 lg:p-10 bg-slate-800/50 rounded-2xl border-l-4 border-purple-400 backdrop-blur-sm'>
          <h3 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-purple-300 text-center'>
            🗓️ Хронологія подій
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
            {[
              {
                year: '1722',
                event: 'Створення Малоросійської колегії',
                color: 'purple'
              },
              {
                year: '1722',
                event: 'Павло Полуботок - наказний гетьман',
                color: 'violet'
              },
              {
                year: '1723',
                event: 'Коломацькі петиції',
                color: 'indigo'
              },
              {
                year: '1723',
                event: 'Смерть Полуботка',
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
          <div className='w-full border-t-2 border-purple-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-xl sm:text-2xl font-bold text-purple-200 rounded-xl border-2 border-purple-600/50 shadow-lg text-center backdrop-blur-sm'>
            Початок російської колоніальної політики в Україні
          </span>
        </div>
      </footer>
    </div>
  )
}
