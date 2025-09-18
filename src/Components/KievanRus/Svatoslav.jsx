export function Svatoslav () {
  return (
    <div className='min-h-screen bg-gradient-to-b mt-5 from-gray-900 via-amber-900 to-gray-900 text-gray-100 flex flex-col relative overflow-hidden'>
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
          {/* Фотография Святослава */}

          <div className='text-center md:text-left mt-6 md:mt-0'>
            <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight'>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500'>
                Князь Святослав
              </span>
            </h1>
            <h2 className='text-4xl sm:text-5xl text-amber-300 font-bold mt-2'>
              Хоробрий
            </h2>

            <div className='w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto md:mx-0 my-5 rounded-full'></div>

            <p className='text-3xl sm:text-4xl text-amber-200 font-bold leading-relaxed'>
              964-972 роки
            </p>
          </div>
        </div>

        <div className='absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent'></div>
      </div>

      {/* Content Section */}
      <div className='w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10'>
        {/* Описание внешности */}
        <div className='bg-amber-900/30 p-6 rounded-2xl border border-amber-700 backdrop-blur-sm mb-12'>
          <div className='flex flex-col md:flex-row gap-8 items-center'>
            <div className='md:w-1/3'>
              <div className='rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-105 border-2 border-amber-500/30'>
                <img
                  src='../../../assets/Svatoslav.png'
                  alt='Князь Святослав'
                  className='w-full h-auto object-cover'
                />
              </div>
            </div>
            <div className='md:w-2/3'>
              <p className='text-xl leading-relaxed italic text-amber-100'>
                «На вигляд він був такий: середнього зросту, не дуже високий, не
                дуже низький, з густими бровами, з блакитними очима, з голеною
                бородою і з густим довгим волоссям на верхній губі. Голова в
                нього була зовсім гола, а тільки з одного боку її висів локон
                волосся, що означає знатність роду...Одяг на ньому був білий,
                нічим, крім чистоти, від інших не відмінний».
              </p>
            </div>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-12 items-start'>
          {/* Main Facts */}
          <div className='lg:w-2/5'>
            <div className='space-y-7'>
              <div className='p-6 bg-amber-900/30 rounded-xl border-l-4 border-green-400 backdrop-blur-sm'>
                <p className='text-xl font-semibold'>
                  <span className='text-2xl text-green-300 font-bold'>
                    964-966рр.
                  </span>{' '}
                  Східний похід
                </p>
                <p className='mt-2'>Знищив Хазарський каганат</p>
              </div>

              <div className='p-6 bg-amber-900/30 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
                <p className='text-xl font-semibold'>
                  <span className='text-2xl text-amber-300 font-bold'>
                    968-969
                  </span>{' '}
                  Війна з Дунайською Болгарією
                </p>
                <p className='mt-2'>Вдало воював із Дунайською Болгарією</p>
              </div>

              <div className='p-6 bg-amber-900/30 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
                <p className='text-xl font-semibold'>
                  <span className='text-2xl text-red-300 font-bold'>971</span>{' '}
                  Поразка від візантійців
                </p>
                <p className='mt-2'>Поразка в битві під Доростолом</p>
              </div>

              <div className='p-6 bg-amber-900/30 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
                <p className='text-xl font-semibold'>
                  <span className='text-2xl text-red-300 font-bold'>972</span>{' '}
                  Загибель від печенігів
                </p>
                <p className='mt-2'>Святослав був убитий печенігами</p>
              </div>

              <div className='p-6 bg-amber-900/30 rounded-xl border-l-4 border-blue-400 backdrop-blur-sm'>
                <p className='text-xl font-semibold'>Приєднання територій</p>
                <p className='mt-2'>Приєднав в'ятичів</p>
              </div>

              <div className='p-6 bg-amber-900/30 rounded-xl border-l-4 border-purple-400 backdrop-blur-sm'>
                <p className='text-xl font-semibold'>Розподіл влади</p>
                <p className='mt-2'>
                  Зосередив всю повноту влади в руках єдиної династії
                </p>
              </div>
            </div>
          </div>

          {/* Основной контент */}
          <div className='lg:w-3/5 space-y-8'>
            {/* Східний похід */}
            <div className='bg-green-900/30 p-6 rounded-2xl border border-green-700 backdrop-blur-sm'>
              <h2 className='text-2xl font-bold mb-4 text-green-300'>
                Східний похід (964-966рр.)
              </h2>
              <p className='text-lg flex flex-col mb-4'>
                Святослав здійснив "Східний похід":
                <span className=''>1. Знищив Хазарський каганат</span>
                <span>
                  2. Відкриття шляху на Русь кочовим ордам Сходу, насамперед
                  печенігам.
                </span>
              </p>

              <div className='mt-6 rounded-xl overflow-hidden shadow-lg'>
                <img
                  src='../../../assets/SvatKarta.jpg'
                  alt='Східний похід Святослава'
                  className='w-full h-auto'
                />
              </div>

              {/* Цитата про хозар */}
              <div className='relative bg-gradient-to-r from-amber-900/30 to-amber-800/20 p-6 rounded-2xl border-l-4 border-amber-500 backdrop-blur-sm mt-6'>
                <div className='absolute -top-3 -left-3 text-5xl text-amber-400 opacity-50'>
                  "
                </div>
                <div className='absolute -bottom-3 -right-3 text-5xl text-amber-400 opacity-50 transform rotate-180'>
                  "
                </div>

                <p className='text-lg italic text-amber-100 leading-relaxed z-10 relative'>
                  Хозари вийшли супроти нього з каганом, князем своїм. І
                  зступилися війська битися, і сталася битва межи ними, і одолів
                  він хозар і город їхній столицю Ітіль, і город Білу Вежу
                  взяв...»
                </p>

                <div className='text-right mt-3 text-amber-200'>
                  — Літописне повідомлення
                </div>
              </div>
            </div>

            {/* Війна з Візантією */}
            <div className='bg-blue-900/30 p-6 rounded-2xl border border-blue-700 backdrop-blur-sm'>
              <h2 className='text-2xl font-bold mb-4 text-blue-300'>
                Війна з Візантією
              </h2>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                <div className='bg-blue-800/40 p-5 rounded-xl'>
                  <h3 className='text-lg font-semibold mb-2 text-blue-300'>
                    968-969
                  </h3>
                  <p>Вдало воював із Дунайською Болгарією</p>
                </div>

                <div className='bg-red-800/40 p-5 rounded-xl'>
                  <h3 className='text-lg font-semibold mb-2 text-red-300'>
                    971
                  </h3>
                  <p>Поразка від візантійців в битві під Доростолом</p>
                </div>
              </div>

              {/* Цитата про Візантію */}
              <div className='relative bg-gradient-to-r from-blue-900/30 to-blue-800/20 p-6 rounded-2xl border-l-4 border-blue-500 backdrop-blur-sm'>
                <div className='absolute -top-3 -left-3 text-5xl text-blue-400 opacity-50'>
                  "
                </div>
                <div className='absolute -bottom-3 -right-3 text-5xl text-blue-400 opacity-50 transform rotate-180'>
                  "
                </div>

                <p className='text-lg italic text-blue-100 leading-relaxed z-10 relative'>
                  Прийшов [князь] у Переяславець. І послав до греків послів,
                  говорячи: «Хочу йти на вас»...І пішов до Царграда, розоряючи
                  міста. І дали йому данину...! повернувся він в
                  Переяславець...»
                </p>

                <div className='text-right mt-3 text-blue-200'>
                  — Літописне повідомлення
                </div>
              </div>
            </div>

            {/* Політична діяльність */}
            <div className='bg-purple-900/30 p-6 rounded-2xl border border-purple-700 backdrop-blur-sm'>
              <h2 className='text-2xl font-bold mb-4 text-purple-300'>
                Політична діяльність
              </h2>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                <div className='bg-purple-800/40 p-5 rounded-xl'>
                  <h3 className='text-lg font-semibold mb-2 text-purple-300'>
                    Приєднання земель
                  </h3>
                  <p>Приєднав в'ятичів</p>
                </div>

                <div className='bg-purple-800/40 p-5 rounded-xl'>
                  <h3 className='text-lg font-semibold mb-2 text-purple-300'>
                    Розподіл влади
                  </h3>
                  <p>
                    Зосередив всю повноту влади в руках єдиної династії
                    (Розділив князівства між своїми синами: намісником у Києві
                    став старший син Ярополк)
                  </p>
                </div>
              </div>

              <p className='text-lg'>
                977–980 рр. у Руській державі тривають міжусобні війни за владу
                між синами Святослава. Перемогу здобув молодший син Володимир
              </p>
            </div>

            {/* Цитата від імператора */}
            <div className='relative p-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl'>
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
                      "Із антийський імператор Іоанн Цимісхій із таким посланням
                      звертався до князя: «Вважаю, що ти не забув про порозку
                      батька твого..., який, порушивши клятвений договір,
                      приплив до столиці нашої з величезним військом на 10
                      тисячях кораблів, а повернувся лише з десятком човнів, сам
                      став передвісником своєї біди. Не згадую я вже про його
                      подальшу жалюгідну долю..."
                    </p>

                    <div className='flex items-center mt-6'>
                      <div className='flex-1 h-0.5 bg-gradient-to-r from-amber-700/50 to-transparent'></div>
                      <span className='mx-4 text-amber-400 text-lg font-medium'>
                        Літописне повідомлення
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
            <span>Наступна тема: Правління Володимира Великого</span>
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
