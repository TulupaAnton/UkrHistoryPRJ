export function Askold () {
  return (
    <div>
      {' '}
      <div className='absolute top-0 left-0 w-full h-full opacity-10'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-blue-400 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-purple-500 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-indigo-400 rounded-full blur-3xl'></div>
      </div>
      {/* Header Section */}
      <div className='w-full py-12 px-4 sm:px-6 lg:px-8 text-center relative z-10'>
        <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent'></div>
        <div className='absolute inset-x-0 top-0 flex justify-center'>
          <div className='w-40 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent'></div>
        </div>

        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 mt-4 tracking-tight'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500'>
            Правління Аскольда в Києві
          </span>
          <span className='text-blue-200 opacity-90 block text-2xl mt-2'>
            (та можливо діра)
          </span>
        </h1>

        <div className='w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 rounded-full'></div>

        <p className='text-3xl sm:text-4xl text-blue-200 font-bold max-w-3xl mx-auto leading-relaxed'>
          860-882 роки
        </p>

        <div className='absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent'></div>
      </div>
      {/* Content Section */}
      <div className='w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10'>
        <div className='flex flex-col md:flex-row gap-10 items-start'>
          {/* Image */}
          <div className='md:w-2/5'>
            <div className='rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-105 border-2 border-blue-500/30'>
              <img
                src='../../../assets/Askold.png'
                alt='Князь Аскольд'
                className='w-full h-auto object-cover'
              />
            </div>
          </div>

          {/* Main Facts */}
          <div className='md:w-3/5'>
            <div className='space-y-7'>
              <div className='p-5 bg-blue-900/30 rounded-xl border-l-4 border-blue-400 backdrop-blur-sm'>
                <p className='text-xl font-semibold'>
                  Сприяв зростанню авторитету Києва
                </p>
              </div>

              <div className='p-5 bg-blue-900/30 rounded-xl border-l-4 border-blue-400 backdrop-blur-sm'>
                <p className='text-xl font-semibold'>
                  Здійснював похід на Візантію -{' '}
                  <span className='text-2xl text-blue-300 font-bold'>
                    860 р.
                  </span>
                </p>
              </div>

              <div className='p-5 bg-blue-900/30 rounded-xl border-l-4 border-blue-400 backdrop-blur-sm'>
                <p className='text-xl font-semibold'>
                  Першим з руських князів приняв{' '}
                  <span className='text-2xl text-blue-300 font-bold underline decoration-yellow-400'>
                    християнство
                  </span>
                </p>
              </div>

              <div className='p-5 bg-blue-900/30 rounded-xl border-l-4 border-blue-400 backdrop-blur-sm'>
                <p className='text-xl font-semibold'>
                  Уклад перший відомий договір Русі з Візантією
                </p>
              </div>

              <div className='p-5 bg-blue-900/30 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
                <p className='text-xl font-semibold'>
                  <span className='text-2xl text-red-300 font-bold'>
                    866 р.
                  </span>{' '}
                  - Невдалий похід проти Візантії
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className='mt-14 space-y-8'>
          <div className='bg-gray-800/40 p-7 rounded-2xl border border-gray-700 backdrop-blur-sm'>
            <p className='text-xl leading-9'>
              У <span className='text-blue-300 font-semibold'>IX ст.</span> у
              Новгороді правили варяги на чолі з{' '}
              <span className='text-yellow-300 font-medium'>Рюриком</span>.
              Згодом Рюрик помер, а оскільки його син{' '}
              <span className='text-yellow-300 font-medium'>Ігор</span> був
              малолітнім, тому правити почав воєвода{' '}
              <span className='text-yellow-300 font-medium'>Олег</span>.
            </p>
          </div>

          <div className='bg-blue-900/30 p-7 rounded-2xl border border-blue-700 backdrop-blur-sm'>
            <p className='text-xl font-semibold leading-9'>
              У <span className='text-2xl text-red-300 font-bold'>882 р.</span>{' '}
              новгородський князь{' '}
              <span className='text-yellow-300 font-bold'>Олег</span> вбив
              Аскольда і приєднав Новгородську і Київську землі, утворюючи{' '}
              <span className='text-blue-300 font-bold underline decoration-blue-500'>
                Київську державу
              </span>
              .
            </p>
          </div>

          {/* Цитата */}
          <div className='relative bg-gradient-to-r from-amber-900/30 to-amber-800/20 p-8 rounded-2xl border-l-4 border-amber-500 backdrop-blur-sm mt-10'>
            <div className='absolute -top-3 -left-3 text-5xl text-amber-400 opacity-50'>
              "
            </div>
            <div className='absolute -bottom-3 -right-3 text-5xl text-amber-400 opacity-50 transform rotate-180'>
              "
            </div>

            <p className='text-xl italic text-amber-100 text-center leading-relaxed z-10 relative'>
              «Ви оба не є ні князі, ні роду княжого. — А се — син Рюриків». І
              вбили вони Аскольда й Діра, і віднесли на гору, і погребли на
              горі, яка нині зветься Угорська».
            </p>

            <div className='text-right mt-4 text-amber-200 text-lg'>
              — Літописне повідомлення
            </div>
          </div>
        </div>
      </div>
      {/* Красивое разделение между темами */}
      <div className='relative my-16 py-10 px-4 sm:px-6 lg:px-8'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-full border-t-2 border-blue-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-blue-900 to-indigo-900 px-6 py-3 text-lg font-semibold text-blue-200 rounded-full border-2 border-blue-600/50 shadow-lg flex items-center space-x-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 text-blue-300'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
            <span>Наступна тема: Правління князя Олега</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 text-blue-300'
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
