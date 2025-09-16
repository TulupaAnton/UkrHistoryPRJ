export function Igor () {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden'>
      {/* Фоновые элементы */}
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
            Правління Ігоря
          </span>
          <span className='text-blue-200 opacity-90 block text-2xl mt-2'>
            (912-945 роки)
          </span>
        </h1>

        <div className='w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 rounded-full'></div>
      </div>

      {/* Content Section */}
      <div className='w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10'>
        <div className='flex flex-col lg:flex-row gap-10 items-start'>
          {/* Image and Quick Facts */}
          <div className='lg:w-2/5'>
            <div className='rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-105 border-2 border-blue-500/30 mb-8'>
              <img
                src='../../../assets/Igor.jpg'
                alt='Князь Ігор'
                className='w-full h-auto object-cover'
              />
            </div>

            {/* Quick Facts */}
            <div className='space-y-5'>
              <div className='p-5 bg-blue-900/30 rounded-xl border-l-4 border-blue-400 backdrop-blur-sm'>
                <p className='text-xl font-semibold'>
                  Син Рюрика, продовжувач династії Рюриковичів
                </p>
              </div>

              <div className='p-5 bg-blue-900/30 rounded-xl border-l-4 border-blue-400 backdrop-blur-sm'>
                <p className='text-xl font-semibold'>
                  Розширив територію Київської Русі
                </p>
              </div>

              <div className='p-5 bg-red-900/30 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
                <p className='text-xl font-semibold'>
                  Загинув від рук древлян у 945 році
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className='lg:w-3/5 space-y-8'>
            {/* Походи на Візантію */}
            <div className='bg-blue-900/30 p-6 rounded-2xl border border-blue-700 backdrop-blur-sm'>
              <h2 className='text-2xl font-bold mb-4 text-blue-300'>
                Походи на Візантію
              </h2>
              <p className='text-lg mb-4'>
                У <span className='text-blue-300 font-semibold'>941</span> та{' '}
                <span className='text-blue-300 font-semibold'>944</span> роках
                здійснив невдалі походи на Візантію.
              </p>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                <div className='bg-blue-800/40 p-4 rounded-xl'>
                  <p className='text-lg'>
                    Під час першого походу кораблі Ігоря були спалені "грецьким
                    вогнем"
                  </p>
                </div>
                <div className='bg-blue-800/40 p-4 rounded-xl'>
                  <p className='text-lg'>
                    Після другого походу уклав угоду, невигідну для Русі (руські
                    купці сплачували мита за товари)
                  </p>
                </div>
              </div>

              <div className='mt-6 rounded-xl overflow-hidden shadow-lg'>
                <img
                  src='../../../assets/KartaPohod.png'
                  alt='Шляхи походів Олега та Ігоря'
                  className='w-full h-auto'
                />
              </div>

              {/* Цитата про греческий огонь */}
              <div className='relative bg-gradient-to-r from-amber-900/30 to-amber-800/20 p-6 rounded-2xl border-l-4 border-amber-500 backdrop-blur-sm mt-6'>
                <div className='absolute -top-3 -left-3 text-5xl text-amber-400 opacity-50'>
                  "
                </div>
                <div className='absolute -bottom-3 -right-3 text-5xl text-amber-400 opacity-50 transform rotate-180'>
                  "
                </div>

                <p className='text-lg italic text-amber-100 leading-relaxed z-10 relative'>
                  «Пішов... на греків... І порадилися руси, і вийшли,
                  оружившись, проти греків, і битва межи ними обома була люта, і
                  заледве одоліли греки... Феофан, сановник Романа, зустрів їх у
                  човнах з вогнем і став пускати вогонь трубами на човни руські.
                  І було видно страшне диво...»
                </p>

                <div className='text-right mt-3 text-amber-200'>
                  — Літописне повідомлення
                </div>
              </div>
            </div>

            {/* Расширение территории */}
            <div className='bg-purple-900/30 p-6 rounded-2xl border border-purple-700 backdrop-blur-sm'>
              <h2 className='text-2xl font-bold mb-4 text-purple-300'>
                Розширення території
              </h2>
              <p className='text-lg mb-4'>
                Підкорив древлян, словен, сіверян, кривичів та радимичів й
                розширив територію Русі.
              </p>

              <div className='mt-4 rounded-xl overflow-hidden shadow-lg'>
                <img
                  src='../../../assets/IgorKartaRUs.jpg'
                  alt='Карта Київської Русі за часів правління Ігоря'
                  className='w-full h-auto'
                />
              </div>
            </div>

            {/* Внешняя политика */}
            <div className='bg-indigo-900/30 p-6 rounded-2xl border border-indigo-700 backdrop-blur-sm'>
              <h2 className='text-2xl font-bold mb-4 text-indigo-300'>
                Зовнішня політика
              </h2>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='bg-indigo-800/40 p-4 rounded-xl'>
                  <p className='text-lg font-semibold mb-2'>
                    Відносини з печенігами
                  </p>
                  <p>Дав відсіч кочовим племенам печенігів.</p>
                </div>

                <div className='bg-indigo-800/40 p-4 rounded-xl'>
                  <p className='text-lg font-semibold mb-2'>
                    Тмутараканське князівство
                  </p>
                  <p>Підкорив Тмутараканське князівство.</p>
                </div>
              </div>
            </div>

            {/* Смерть Игоря */}
            <div className='bg-red-900/30 p-6 rounded-2xl border border-red-700 backdrop-blur-sm'>
              <h2 className='text-2xl font-bold mb-4 text-red-300'>
                Загибель Ігоря
              </h2>
              <p className='text-lg mb-4'>
                У <span className='text-red-300 font-semibold'>945</span> році
                під час полюддя відбулося повстання древлян, які стратили Ігоря.
              </p>

              <div className='mt-4 rounded-xl overflow-hidden shadow-lg mb-4'>
                <img
                  src='../../../assets/KartaIgor.jpg'
                  alt='Шляхи полюддя перших князів'
                  className='w-full h-auto'
                />
              </div>

              {/* Цитата о смерти Игоря */}
              <div className='relative bg-gradient-to-r from-red-900/30 to-red-800/20 p-6 rounded-2xl border-l-4 border-red-500 backdrop-blur-sm'>
                <div className='absolute -top-3 -left-3 text-5xl text-red-400 opacity-50'>
                  "
                </div>
                <div className='absolute -bottom-3 -right-3 text-5xl text-red-400 opacity-50 transform rotate-180'>
                  "
                </div>

                <p className='text-lg italic text-red-100 leading-relaxed z-10 relative'>
                  «На шляху додому Ігор прийняв несподіване рішення:
                  "Поміркувавши, сказав своїй дружині: 'Ідіть з даниною додому,
                  а я повернусь і походжу іще'. І відпустив він дружину свою
                  додому, а сам з невеликою дружиною повернувся, бажаючи
                  більшого багатства. Древляни ж, почувши, що йде знову,
                  порадилися з князем своїм Малом і сказали: "Якщо внадиться
                  вовк до овець, то виносить по одній все стадо, якщо не уб'ють
                  його так і цей: якщо не вб'ємо його, то всіх нас погубить"
                  [...] і древляни, вийшовши з міста Іскоростеня, вбили Ігоря і
                  дружинників його, так як було їх мало. І похований був Ігор, і
                  єсть могила його коло Іскоростеня в Деревської землі і до
                  цього часу»
                </p>

                <div className='text-right mt-3 text-red-200'>
                  — Літописне повідомлення
                </div>
              </div>
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
            <span>Наступна тема: Правління княгині Ольги</span>
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
