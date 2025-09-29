export function Krim () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-4 sm:py-8 px-3 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-red-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-amber-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-orange-600 rounded-full blur-3xl'></div>
      </div>

      {/* Заголовок страницы */}
      <div className='w-full max-w-6xl mx-auto text-center mb-8 sm:mb-12 relative z-10 px-2'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-red-400 to-red-500'>
            Українські землі у складі Кримського ханства
          </span>
        </h1>
        <div className='w-32 sm:w-48 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto rounded-full'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12 px-2'>
        {/* Основная информация */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <div className='space-y-4 sm:space-y-6'>
            <div className='p-3 sm:p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-red-300'>40-і роки XV ст.</span>{' '}
                на півдні України й у Криму з'являється нова держава – Кримське
                ханство, що відділилася від Золотої Орди
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Засновник правитель{' '}
                <span className='font-bold text-red-300'>Хаджі-Гірей</span>
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-red-300'>1478 р.</span> Кримське
                ханство стає васалом Османської імперії
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-red-300'>1482 р.</span>{' '}
                кримський хан{' '}
                <span className='font-bold text-red-300'>Менглі-Гірей</span>{' '}
                здійснює грабіжницький похід на Київ
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-amber-300'>Ясир</span> - бранці,
                полонені, яких захоплювали турки й татари під час нападів на
                українські землі
              </p>
            </div>
          </div>
        </div>

        {/* Карта */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
          <div className='bg-gradient-to-br from-amber-900 to-slate-800 rounded-xl p-3 sm:p-4 border-2 border-amber-500/30 shadow-lg'>
            <img
              src='../../../assets/UdilnaKnaz/krim.jpg'
              alt='Карта Кримського ханства'
              className='w-full h-auto max-w-[80%] sm:max-w-[70%] lg:max-w-[60%] rounded-lg shadow-md mx-auto'
            />
            <p className='text-center text-amber-200 mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg italic'>
              Карта Кримського ханства та його володінь (Кримське ханство
              позначено заштрихованою областю)
            </p>
          </div>
        </div>
      </div>

      {/* Разделитель внизу */}
      <div className='relative mt-12 sm:mt-16 py-6 sm:py-8 px-3 sm:px-6 lg:px-8'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-full border-t-2 border-red-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold text-red-200 rounded-full border-2 border-red-600/50 shadow-lg text-center'>
            Кримське ханство
          </span>
        </div>
      </div>
    </div>
  )
}
