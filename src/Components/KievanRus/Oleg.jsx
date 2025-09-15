export function Oleg () {
  return (
    <div className='min-h-screen bg-gradient-to-b mt-5 from-gray-900 via-gray-800 to-gray-900 text-gray-100 flex flex-col relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-10'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-amber-400 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-orange-500 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-red-400 rounded-full blur-3xl'></div>
      </div>

      {/* Header Section */}
      <div className='w-full py-12 px-4 sm:px-6 lg:px-8 text-center relative z-10'>
        <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent'></div>
        <div className='absolute inset-x-0 top-0 flex justify-center'>
          <div className='w-40 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent'></div>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-center gap-10 mb-8'>
          {/* Фотография Олега */}
          <div className='relative'>
            <div className='w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-amber-500/60 shadow-2xl'>
              <img
                src='../../assets/Oleg.png'
                alt='Князь Олег Віщий'
                className='w-full h-full object-cover transform hover:scale-105 transition-transform duration-500'
              />
            </div>
            <div className='absolute -inset-6 bg-amber-500/20 rounded-full -z-10 blur-xl'></div>
            <div className='absolute -bottom-3 -right-3 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center shadow-lg'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-7 w-7 text-amber-200'
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
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500'>
                Князь Олег
              </span>
            </h1>
            <h2 className='text-4xl sm:text-5xl text-amber-300 font-bold mt-2'>
              Віщий
            </h2>

            <div className='w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto md:mx-0 my-5 rounded-full'></div>

            <p className='text-3xl sm:text-4xl text-amber-200 font-bold leading-relaxed'>
              882-912 роки
            </p>
          </div>
        </div>

        <div className='absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent'></div>
      </div>

      {/* Content Section */}
      <div className='w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10'>
        <div className='flex flex-col lg:flex-row gap-12 items-start'>
          {/* Main Facts */}
          <div className='lg:w-2/5'>
            <div className='space-y-7'>
              <div className='p-6 bg-amber-900/30 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
                <p className='text-xl font-semibold'>
                  Завоював Київ -{' '}
                  <span className='text-2xl text-amber-300 font-bold'>
                    "Київ мати міст руських"
                  </span>
                </p>
              </div>

              <div className='p-6 bg-amber-900/30 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
                <p className='text-xl font-semibold'>
                  Розширив кордони Русі, сприяв її централізації
                </p>
                <ul className='mt-4 text-lg space-y-3 ml-5'>
                  <li className='flex items-start'>
                    <span className='text-amber-400 mr-3 text-xl'>•</span>
                    Підпорядкував Києву сіверян, радимичів, деревлян
                  </li>
                  <li className='flex items-start'>
                    <span className='text-amber-400 mr-3 text-xl'>•</span>
                    Підкорив неслов'янські племена меря, чудь і весь
                  </li>
                  <li className='flex items-start'>
                    <span className='text-amber-400 mr-3 text-xl'>•</span>
                    Об'єднав Північну і Південну Русь
                  </li>
                </ul>
              </div>

              <div className='p-6 bg-amber-900/30 rounded-xl border-l-4 border-green-400 backdrop-blur-sm'>
                <p className='text-xl font-semibold'>
                  Звільнив підкорені племена від сплати данини Хазарському
                  каганату
                </p>
              </div>

              <div className='p-6 bg-amber-900/30 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
                <p className='text-xl font-semibold'>
                  Отримав прізвисько{' '}
                  <span className='text-2xl text-amber-300 font-bold'>
                    'Віщий'
                  </span>
                </p>
              </div>

              <div className='p-6 bg-amber-900/30 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
                <p className='text-xl font-semibold'>
                  Помер від укусу гадюки{' '}
                  <span className='text-2xl text-red-300 font-bold'>
                    912 року
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Увеличенная карта - только карта, без дополнительных элементов */}
          <div className='lg:w-3/5'>
            <div className='rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-[1.02] border-2 border-amber-500/40'>
              <img
                src='../../../assets/KartaOleg.png'
                alt='Карта правління князя Олега'
                className='w-full h-auto object-cover'
              />
            </div>
          </div>
        </div>

        {/* Новая стилизованная цитата */}
        <div className='relative mt-16 p-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl'>
          <div className='bg-gray-900 rounded-2xl p-8'>
            <div className='flex items-start'>
              <div className='hidden md:flex mr-6'>
                <div className='w-20 h-20 bg-amber-700 rounded-full flex items-center justify-center shadow-lg'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-10 w-10 text-amber-200'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
                    />
                  </svg>
                </div>
              </div>

              <div className='flex-1'>
                <div className='flex items-center mb-4'>
                  <div className='w-4 h-1 bg-amber-400 rounded-full mr-2'></div>
                  <div className='w-8 h-1 bg-amber-400 rounded-full mr-2'></div>
                  <div className='w-4 h-1 bg-amber-400 rounded-full'></div>
                </div>

                <p className='text-xl md:text-2xl text-amber-100 italic leading-relaxed'>
                  "І сказали греки: «Чого хочете – (того) ми й дамо тобі Олег. І
                  зажадав він дати воям на дві тисячі кораблів по дванадцять
                  гривень... а потім давати укладати на руські городи – спершу
                  на Київ, а тоді й на Чернігів, і на Переяславль, і на Полоцьк,
                  і на Ростов, і на Любеч»."
                </p>

                <div className='flex items-center mt-6'>
                  <div className='flex-1 h-0.5 bg-gradient-to-r from-amber-700/50 to-transparent'></div>
                  <span className='mx-4 text-amber-400 text-lg font-medium'>
                    Повість временних літ
                  </span>
                  <div className='flex-1 h-0.5 bg-gradient-to-l from-amber-700/50 to-transparent'></div>
                </div>
              </div>
            </div>
          </div>

          {/* Декоративные элементы */}
          <div className='absolute -top-3 -left-3 w-6 h-6 bg-amber-400 rounded-full opacity-70'></div>
          <div className='absolute -bottom-3 -right-3 w-6 h-6 bg-orange-400 rounded-full opacity-70'></div>
        </div>
      </div>

      {/* Красивое разделение между темами */}
      <div className='relative my-16 py-10 px-4 sm:px-6 lg:px-8'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-full border-t-2 border-amber-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-amber-900 to-orange-900 px-6 py-3 text-lg font-semibold text-amber-200 rounded-full border-2 border-amber-600/50 shadow-lg flex items-center space-x-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 text-amber-300'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
            <span>Наступна тема: Правління князя Ігоря</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 text-amber-300'
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
