export function Tripilla () {
  return (
    <div className='bg-gray-800/50 rounded-2xl mt-5 p-8 shadow-2xl border border-amber-700/30 relative overflow-hidden'>
      <div className='absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full -translate-y-16 translate-x-16'></div>
      <div className='absolute bottom-0 left-0 w-40 h-40 bg-amber-400/5 rounded-full translate-y-20 -translate-x-20'></div>

      <div className='flex items-center text-center justify-center mb-8'>
        <h1 className='font-bold text-5xl md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 relative inline-block'>
          <span className='absolute -inset-4 bg-amber-400 blur-xl opacity-20 rounded-full'></span>
          Трипільська культура
        </h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
        {/* Хронологічні межі */}
        <div className='flex items-start p-5 rounded-xl bg-gradient-to-r from-gray-700/40 to-gray-800/40 border border-gray-700/50'>
          <div className='w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0'>
            <i className='fas fa-clock text-gray-900 text-sm'></i>
          </div>
          <div>
            <p className='text-lg font-semibold text-amber-300 mb-2'>
              Хронологічні межі
            </p>
            <p className='text-xl text-amber-400'>IV-III тис. до н.е.</p>
          </div>
        </div>

        {/* Територія */}
        <div className='flex items-start p-5 rounded-xl bg-gradient-to-r from-gray-700/40 to-gray-800/40 border border-gray-700/50'>
          <div className='w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0'>
            <i className='fas fa-map-marker-alt text-gray-900 text-sm'></i>
          </div>
          <div>
            <p className='text-lg font-semibold text-amber-300 mb-2'>
              Територія
            </p>
            <p className='text-lg text-gray-300'>
              Правобережжя України, Середнє Подніпров'я
            </p>
          </div>
        </div>
      </div>

      {/* Господарство */}
      <div className='bg-gradient-to-r from-gray-700/40 to-gray-800/40 rounded-xl p-6 border border-gray-700/50'>
        <div className='flex items-center mb-6'>
          <div className='w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center mr-4'>
            <i className='fas fa-industry text-gray-900 text-sm'></i>
          </div>
          <h2 className='text-2xl font-semibold text-amber-400'>
            Господарство
          </h2>
        </div>

        <div className='space-y-4'>
          <div className='flex items-start'>
            <span className='w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center text-gray-900 font-bold mr-3 mt-1 text-sm'>
              1
            </span>
            <p className='text-lg text-gray-300'>
              З'явилася перша мідна металургія, проте переважали кам'яні
              знаряддя праці.
            </p>
          </div>

          <div className='flex items-start'>
            <span className='w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center text-gray-900 font-bold mr-3 mt-1 text-sm'>
              2
            </span>
            <p className='text-lg text-gray-300'>
              Виготовляли досконалий глиняний посуд (трипільска кераміка), який
              прикрашали орнаментами.
            </p>
          </div>

          <div className='bg-amber-900/30 p-4 rounded-lg border-l-4 border-amber-500 mt-6'>
            <p className='text-lg text-amber-300 mb-2'>
              <span className='font-bold'>Екстенсивний спосіб життя</span> -
              невміння відновлювати родючисть грунту - переселяються кожні 50
              років
            </p>
          </div>

          <div className='flex items-start mt-6'>
            <span className='w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center text-gray-900 font-bold mr-3 mt-1 text-sm'>
              3
            </span>
            <p className='text-lg text-gray-300'>
              <span className='font-semibold text-amber-300'>Протоміста!</span>{' '}
              переважно двоповерхові житла
            </p>
          </div>
        </div>
      </div>

      {/* Место для изображений */}
      <div className='grid grid-cols-1 md:grid-cols-2  gap-6 mt-8'>
        <div className='bg-gray-700/50 rounded-xl p-4 text-center'>
          <img src='./assets/vase.jpg' alt='Трипільська кераміка' />
          <p className='text-gray-400 text-sm'>Трипільська кераміка</p>
        </div>

        <div className='bg-gray-700/50 rounded-xl p-4 text-center'>
          <img src='./assets/protomisto.avif' alt='Трипільські протоміста' />
          <p className='text-gray-400 text-sm'>Трипільські протоміста</p>
        </div>
        <div className='bg-gray-700/50 w-full rounded-xl p-4 text-center'>
          <img src='./assets/kartaTrip.jpg' alt='Карта' />
          <p className='text-gray-400 text-sm'>Карта розселення трипільців</p>
        </div>

        <div className='bg-gray-700/50 w-full rounded-xl p-4 text-center'>
          <img
            src='./assets/domik.jpg'
            alt='   Глиняна моделька трипільського храму/будиночка'
          />
          <p className='text-gray-400 text-sm'>
            Глиняна моделька трипільського храму/будиночка
          </p>
        </div>
      </div>
    </div>
  )
}
