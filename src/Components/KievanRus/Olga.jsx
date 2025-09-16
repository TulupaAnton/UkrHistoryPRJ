export function Olga () {
  return (
    <div className='min-h-screen bg-gradient-to-b mt-5 from-gray-900 via-purple-900 to-gray-900 text-gray-100 flex flex-col relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-10'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-purple-400 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-pink-500 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-indigo-400 rounded-full blur-3xl'></div>
      </div>

      {/* Header Section */}
      <div className='w-full py-12 px-4 sm:px-6 lg:px-8 text-center relative z-10'>
        <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent'></div>
        <div className='absolute inset-x-0 top-0 flex justify-center'>
          <div className='w-40 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent'></div>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-center gap-10 mb-8'>
          {/* Фотография Ольги */}
          <div className='relative'>
            <div className='w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-purple-500/60 shadow-2xl'>
              <img
                src='../../assets/Olga.jpg'
                alt='Княгиня Ольга'
                className='w-full h-full object-cover transform hover:scale-105 transition-transform duration-500'
              />
            </div>
            <div className='absolute -inset-6 bg-purple-500/20 rounded-full -z-10 blur-xl'></div>
            <div className='absolute -bottom-3 -right-3 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-7 w-7 text-purple-200'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                />
              </svg>
            </div>
          </div>

          <div className='text-center md:text-left mt-6 md:mt-0'>
            <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight'>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500'>
                Княгиня Ольга
              </span>
            </h1>
            <h2 className='text-4xl sm:text-5xl text-purple-300 font-bold mt-2'>
              Мудра
            </h2>

            <div className='w-32 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto md:mx-0 my-5 rounded-full'></div>

            <p className='text-3xl sm:text-4xl text-purple-200 font-bold leading-relaxed'>
              945-964 роки
            </p>
          </div>
        </div>

        <div className='absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent'></div>
      </div>

      {/* Content Section */}
      <div className='w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10'>
        <div className='flex flex-col lg:flex-row gap-12 items-start'>
          {/* Main Facts */}
          <div className='lg:w-2/5'>
            <div className='space-y-7'>
              <div className='p-6 bg-purple-900/30 rounded-xl border-l-4 border-purple-400 backdrop-blur-sm'>
                <p className='text-xl font-semibold'>
                  Дружина князя Ігоря, мати Святослава
                </p>
              </div>

              <div className='p-6 bg-gradient-to-r from-green-900/40 to-emerald-800/30 rounded-xl border-l-4 border-green-400 backdrop-blur-sm relative overflow-hidden'>
                <div className='absolute -top-4 -right-4 w-20 h-20 bg-green-500 rounded-full opacity-20 blur-lg'></div>
                <div className='absolute -bottom-4 -left-4 w-16 h-16 bg-emerald-400 rounded-full opacity-20 blur-lg'></div>
                <p className='text-xl font-semibold relative z-10'>
                  Провела податкову реформу, встановивши устави, оброки й уроки
                </p>
              </div>

              <div className='p-6 bg-purple-900/30 rounded-xl border-l-4 border-purple-400 backdrop-blur-sm'>
                <p className='text-xl font-semibold'>
                  Перша правителька Русі, що прийняла християнство
                </p>
              </div>

              <div className='p-6 bg-purple-900/30 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
                <p className='text-xl font-semibold'>
                  Жорстоко помстилася древлянам за смерть чоловіка
                </p>
              </div>

              <div className='p-6 bg-purple-900/30 rounded-xl border-l-4 border-purple-400 backdrop-blur-sm'>
                <p className='text-xl font-semibold'>
                  На могилі Аскольда збудувала церкву Св. Миколая
                </p>
              </div>

              <div className='p-6 bg-purple-900/30 rounded-xl border-l-4 border-blue-400 backdrop-blur-sm'>
                <p className='text-xl font-semibold'>
                  У{' '}
                  <span className='text-2xl text-blue-300 font-bold'>946</span>{' '}
                  році відвідала Константинополь та прийняла хрещення
                </p>
              </div>
            </div>
          </div>

          {/* Увеличенная карта */}
          <div className='lg:w-3/5'>
            {/* Религии */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
              <div className='bg-amber-900/30 p-5 rounded-2xl border border-amber-700 backdrop-blur-sm'>
                <h3 className='text-xl font-bold mb-3 text-amber-300'>
                  Язичництво
                </h3>
                <p className='text-lg'>
                  Релігійні вірування, відповідно до яких поклоняються силам
                  природи, рослинам і тваринам, а також визнають людиноподібні
                  істоти: русалок, берегинь
                </p>
              </div>

              <div className='bg-blue-900/30 p-5 rounded-2xl border border-blue-700 backdrop-blur-sm'>
                <h3 className='text-xl font-bold mb-3 text-blue-300'>
                  Християнство
                </h3>
                <p className='text-lg'>
                  Віра в триєдиного Бога – Бога Отця, його сина Ісуса Христа та
                  Святого Духа
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Податкова реформа */}
        <div className='mt-16 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 p-6 rounded-2xl border border-purple-700 backdrop-blur-sm'>
          <h2 className='text-2xl font-bold mb-4 text-purple-300'>
            Податкова реформа Ольги
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
            <div className='bg-purple-800/40 p-5 rounded-xl'>
              <h3 className='text-lg font-semibold mb-2 text-purple-300'>
                Устави
              </h3>
              <p>Порядок збору данини</p>
            </div>

            <div className='bg-purple-800/40 p-5 rounded-xl'>
              <h3 className='text-lg font-semibold mb-2 text-purple-300'>
                Оброки й уроки
              </h3>
              <p>Обсяги податків і повинностей</p>
            </div>

            <div className='bg-purple-800/40 p-5 rounded-xl'>
              <h3 className='text-lg font-semibold mb-2 text-purple-300'>
                Погости
              </h3>
              <p>Адміністративно-господарські осередки для збору данини</p>
            </div>
          </div>

          {/* Цитата про реформу */}
          <div className='relative p-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl'>
            <div className='bg-gray-900 rounded-2xl p-6'>
              <p className='text-lg italic text-green-100 leading-relaxed'>
                "Ішла Ольга до Новгорода. І встановила вона...погости і оброки.
                І ловища її є по всій землі, і знаки (її),...і сани її стоять у
                Пскові й до сьогодні..."
              </p>
              <div className='text-right mt-3 text-green-200'>
                — Літописне повідомлення
              </div>
            </div>
          </div>
        </div>

        {/* Помста древлянам */}
        <div className='mt-16 bg-red-900/30 p-6 rounded-2xl border border-red-700 backdrop-blur-sm'>
          <h2 className='text-2xl font-bold mb-4 text-red-300'>
            Помста древлянам
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
            <div className='bg-red-800/40 p-5 rounded-xl'>
              <h3 className='text-lg font-semibold mb-2 text-red-300'>
                Перша помста
              </h3>
              <p>Послів у човнах засипали землею</p>
            </div>

            <div className='bg-red-800/40 p-5 rounded-xl'>
              <h3 className='text-lg font-semibold mb-2 text-red-300'>
                Друга помста
              </h3>
              <p>Послів замкнули у лазні та підпалили</p>
            </div>

            <div className='bg-red-800/40 p-5 rounded-xl'>
              <h3 className='text-lg font-semibold mb-2 text-red-300'>
                Третя помста
              </h3>
              <p>Запустили в Іскоростень палаючих голубів</p>
            </div>
          </div>

          {/* Цитата про помсту */}
          <div className='relative mt-6 p-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl'>
            <div className='bg-gray-900 rounded-2xl p-6'>
              <p className='text-lg italic text-red-100 leading-relaxed'>
                "Київська княгиня Ольга звернулась із такими словами до племені:
                «Більше вже не хочу мститися - хочу тільки взяти з вас невелику
                данину. Дайте мені від кожного двору по три голуби і по три
                горобці...»"
              </p>
              <div className='text-right mt-3 text-red-200'>
                — Літописне повідомлення
              </div>
            </div>
          </div>
        </div>

        {/* Християнизация */}
        <div className='mt-16 bg-blue-900/30 p-6 rounded-2xl border border-blue-700 backdrop-blur-sm'>
          <h2 className='text-2xl font-bold mb-4 text-blue-300'>
            Хрещення Ольги
          </h2>

          <div className='flex flex-col md:flex-row gap-6 items-center'>
            <div className='md:w-1/2'>
              <p className='text-lg mb-4'>
                У <span className='text-blue-300 font-semibold'>946</span> році
                Ольга відвідала Константинополь, де прийняла хрещення. Вона
                стала першою правителькою Русі, що прийняла християнство.
              </p>
              <p className='text-lg'>
                На могилі Аскольда вона збудувала церкву Св. Миколая.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Красивое разделение между темами */}
      <div className='relative my-16 py-10 px-4 sm:px-6 lg:px-8'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-full border-t-2 border-purple-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-purple-900 to-indigo-900 px-6 py-3 text-lg font-semibold text-purple-200 rounded-full border-2 border-purple-600/50 shadow-lg flex items-center space-x-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 text-purple-300'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
            <span>Наступна тема: Правління князя Святослава</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 text-purple-300'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}
