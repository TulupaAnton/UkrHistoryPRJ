export function Paliy () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-4 sm:py-8 px-3 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-green-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-emerald-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-teal-600 rounded-full blur-3xl'></div>
      </div>

      <div className='max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12'>
        {/* Главный заголовок */}
        <div className='text-center mb-8 sm:mb-16'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400'>
            Паліївщина
          </h1>
        </div>

        {/* Основная информация */}
        <div className='space-y-6 sm:space-y-8'>
          {/* Мета */}
          <div className='bg-gradient-to-r from-green-900/30 to-emerald-800/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border-l-4 border-green-500 backdrop-blur-sm'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-green-300'>
              🎯 Мета
            </h2>
            <div className='p-4 sm:p-6 bg-green-900/20 rounded-lg sm:rounded-xl'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed'>
                Звільнити Правобережжя від польського панування та об'єднатися з
                Лівобережною Україною
              </p>
            </div>
          </div>

          {/* Територія */}
          <div className='bg-gradient-to-r from-emerald-900/30 to-teal-800/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border-l-4 border-emerald-500 backdrop-blur-sm'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-emerald-300'>
              🗺️ Територія
            </h2>
            <div className='p-4 sm:p-6 bg-emerald-900/20 rounded-lg sm:rounded-xl'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed'>
                <span className='font-bold text-white'>
                  Поділля, Брацлавщина, Київщина, Східна Волинь
                </span>
              </p>
            </div>
          </div>

          {/* Події */}
          <div className='bg-gradient-to-r from-teal-900/30 to-green-800/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border-l-4 border-teal-500 backdrop-blur-sm'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-teal-300'>
              ⚔️ Події
            </h2>
            <div className='p-4 sm:p-6 bg-teal-900/20 rounded-lg sm:rounded-xl'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed'>
                <span className='font-bold text-green-300'>1702 р.</span> козаки
                під проводом{' '}
                <span className='font-bold text-white'>С. Палія</span>{' '}
                <span className='font-bold text-emerald-300'>
                  полковник Фастівського козацького полку
                </span>{' '}
                розпочали повстання, підтримане селянами. Повстанці звернулися
                по допомогу до запорожців,{' '}
                <span className='font-bold text-white'>І. Мазепи</span> та
                Москви.{' '}
                <span className='font-bold text-green-300'>1704 р.</span>{' '}
                московсько-козацьке військо зайняло Київщину і Волинь
              </p>
            </div>
          </div>

          {/* Результат */}
          <div className='bg-gradient-to-r from-green-900/30 to-emerald-800/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border-l-4 border-green-500 backdrop-blur-sm'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-green-300'>
              📊 Результат
            </h2>
            <div className='p-4 sm:p-6 bg-green-900/20 rounded-lg sm:rounded-xl'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed'>
                Придушення повстання: арешт{' '}
                <span className='font-bold text-white'>С. Палія</span> як
                можливого претендента на гетьманську булаву: заслання його до
                Сибіру: Правобережна і Лівобережна Україна об'єдналися під
                гетьмануванням{' '}
                <span className='font-bold text-white'>І. Мазепи</span> до{' '}
                <span className='font-bold text-green-300'>1709 р.</span>
              </p>
            </div>
          </div>

          {/* Карта */}
          <div className='bg-gradient-to-r from-emerald-900/30 to-teal-800/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border-l-4 border-emerald-500 backdrop-blur-sm'>
            <div className='relative group'>
              <img
                src='../../../assets/Mazepa/karta.webp'
                alt='Карта Паліївщини'
                className='w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-120 object-cover rounded-lg sm:rounded-2xl border-4 border-emerald-500/30 shadow-2xl shadow-emerald-500/20 transition-all duration-300 group-hover:scale-105 group-hover:border-emerald-400/50'
              />
              <div className='absolute inset-0 bg-emerald-900/20 rounded-lg sm:rounded-2xl pointer-events-none'></div>
              <div className='absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-black/60 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4'>
                <p className='text-sm sm:text-lg text-center text-gray-300'>
                  Карта території Паліївщини та повстанського руху
                </p>
              </div>
            </div>
          </div>

          {/* Дополнительная информация */}
          <div className='bg-gradient-to-r from-teal-900/30 to-green-800/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border-l-4 border-teal-500 backdrop-blur-sm'>
            <div className='p-4 sm:p-6 bg-teal-900/20 rounded-lg sm:rounded-xl'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed'>
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
          </div>

          {/* Исторический контекст */}
          <div className='bg-gradient-to-r from-slate-800/40 to-slate-700/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border-l-4 border-gray-500 backdrop-blur-sm'>
            <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-gray-300'>
              📖 Історичне значення
            </h3>
            <div className='space-y-3 sm:space-y-4 text-base sm:text-xl text-gray-300'>
              <p>
                • Паліївщина стала останнім масштабним козацьким повстанням на
                Правобережжі
              </p>
              <p>
                • Показала прагнення українського народу до об'єднання всіх
                земель
              </p>
              <p>
                • Продемонструвала слабкість польського контролю над регіоном
              </p>
              <p>
                • Стала важливою сторінкою в боротьбі за українську державність
              </p>
              <p>
                • Ліквідація козацтва в 1713 році завершила епоху козацького
                самоврядування на Правобережжі
              </p>
            </div>
          </div>

          {/* Хронология */}
          <div className='bg-gradient-to-r from-green-900/30 to-emerald-800/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border-l-4 border-green-500 backdrop-blur-sm'>
            <h3 className='text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-green-300'>
              🗓️ Хронологія подій
            </h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
              {[
                {
                  year: '1702',
                  event: 'Початок повстання',
                  color: 'green',
                  bg: 'bg-green-900/20',
                  border: 'border-green-500'
                },
                {
                  year: '1704',
                  event: 'Окупація територій',
                  color: 'emerald',
                  bg: 'bg-emerald-900/20',
                  border: 'border-emerald-500'
                },
                {
                  year: '1709',
                  event: "Кінець об'єднання",
                  color: 'teal',
                  bg: 'bg-teal-900/20',
                  border: 'border-teal-500'
                },
                {
                  year: '1713',
                  event: 'Ліквідація козацтва',
                  color: 'red',
                  bg: 'bg-red-900/20',
                  border: 'border-red-500'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`p-4 sm:p-6 rounded-lg sm:rounded-xl text-center border-l-4 ${item.bg} ${item.border}`}
                >
                  <div
                    className={`text-xl sm:text-2xl font-bold text-${item.color}-300 mb-2 sm:mb-3`}
                  >
                    {item.year}
                  </div>
                  <div className='text-base sm:text-xl text-gray-200'>
                    {item.event}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Разделитель внизу - на всю ширину экрана */}
      <div className='w-screen relative mt-8 sm:mt-12 lg:mt-16 py-4 sm:py-6 lg:py-8 px-3 sm:px-6 lg:px-8 -mx-3 sm:-mx-6 lg:-mx-8'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-full border-t-2 border-green-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-lg sm:text-xl lg:text-2xl font-semibold text-green-200 rounded-full border-2 border-green-600/50 shadow-lg text-center'>
            Завершення козацької доби на Правобережжі
          </span>
        </div>
      </div>
    </div>
  )
}
