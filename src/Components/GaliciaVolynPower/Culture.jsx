export function Culture () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-4 sm:py-8 px-3 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-amber-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-yellow-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-orange-600 rounded-full blur-3xl'></div>
      </div>

      {/* Заголовок страницы */}
      <div className='w-full max-w-6xl mx-auto text-center mb-8 sm:mb-12 relative z-10 px-2'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500'>
            Культура Галицько-Волинської держави
          </span>
        </h1>
        <div className='w-32 sm:w-48 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12 px-2'>
        {/* Вступление */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
          <div className='p-3 sm:p-4 bg-amber-900/30 rounded-lg'>
            <p className='text-base sm:text-lg leading-relaxed text-amber-200 text-center'>
              Розквіт культури, архітектури, іконопису та літописання в період
              Галицько-Волинського князівства
            </p>
          </div>
        </div>

        {/* Архитектура */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-2xl border-l-4 border-amber-400 backdrop-blur-sm shadow-xl'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-amber-300 text-center'>
            Архітектурні пам'ятки
          </h2>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8'>
            {/* Успенський собор */}
            <div className='bg-gradient-to-br from-amber-900 to-slate-800 rounded-2xl p-4 sm:p-6 border-2 border-amber-500/40 shadow-2xl'>
              <div className='flex flex-col items-center'>
                <div className='mb-4 sm:mb-6'>
                  <img
                    src='../../../assets/GaliciaVolynPower/sobor.jpg'
                    alt='Успенський собор у Володимирі. 1160 р'
                    className='w-full h-48 sm:h-64 lg:h-80 rounded-xl shadow-lg object-cover'
                  />
                </div>
                <div className='text-center'>
                  <h3 className='text-xl sm:text-2xl font-bold text-white mb-3'>
                    Успенський собор у Володимирі
                  </h3>
                  <p className='text-amber-200 text-base sm:text-lg mb-4'>
                    Побудований 1160 року. Один з найвизначніших храмів Волині,
                    центр духовного життя князівства.
                  </p>
                  <div className='flex flex-wrap gap-2 justify-center'>
                    <span className='bg-amber-800/60 text-amber-100 px-3 py-2 rounded-full text-sm font-medium'>
                      🗓️ 1160 рік
                    </span>
                    <span className='bg-amber-800/60 text-amber-100 px-3 py-2 rounded-full text-sm font-medium'>
                      🏛️ Володимир
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Церква Святого Пантелеймона */}
            <div className='bg-gradient-to-br from-amber-900 to-slate-800 rounded-2xl p-4 sm:p-6 border-2 border-amber-500/40 shadow-2xl'>
              <div className='flex flex-col items-center'>
                <div className='mb-4 sm:mb-6'>
                  <img
                    src='../../../assets/GaliciaVolynPower/pantelemon.jpg'
                    alt='Церква Святого Пантелеймона'
                    className='w-full h-48 sm:h-64 lg:h-80 rounded-xl shadow-lg object-cover'
                  />
                </div>
                <div className='text-center'>
                  <h3 className='text-xl sm:text-2xl font-bold text-white mb-3'>
                    Церква Святого Пантелеймона
                  </h3>
                  <p className='text-amber-200 text-base sm:text-lg mb-4'>
                    Унікальна пам'ятка архітектури XII століття, що поєднує
                    візантійські та романські елементи.
                  </p>
                  <div className='flex flex-wrap gap-2 justify-center'>
                    <span className='bg-amber-800/60 text-amber-100 px-3 py-2 rounded-full text-sm font-medium'>
                      🗓️ XII століття
                    </span>
                    <span className='bg-amber-800/60 text-amber-100 px-3 py-2 rounded-full text-sm font-medium'>
                      ⛪ Храмова архітектура
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Иконопись */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-2xl border-l-4 border-yellow-400 backdrop-blur-sm shadow-xl'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-yellow-300 text-center'>
            Іконопис та сакральне мистецтво
          </h2>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8'>
            {/* Дорогобузька Ікона Богородиці */}
            <div className='bg-gradient-to-br from-yellow-900 to-slate-800 rounded-2xl p-4 sm:p-6 border-2 border-yellow-500/40 shadow-2xl'>
              <div className='flex flex-col items-center'>
                <div className='mb-4 sm:mb-6'>
                  <img
                    src='../../../assets/GaliciaVolynPower/dorogobug.jpg'
                    alt='Дорогобузька Ікона Богородиці. Остання третина XIII ст.'
                    className='w-full h-48 sm:h-64 lg:h-80 rounded-xl shadow-lg object-cover'
                  />
                </div>
                <div className='text-center'>
                  <h3 className='text-xl sm:text-2xl font-bold text-white mb-3'>
                    Дорогобузька Ікона Богородиці
                  </h3>
                  <p className='text-yellow-200 text-base sm:text-lg mb-4'>
                    Остання третина XIII століття. Шедевр українського
                    іконопису, що відображає впливи візантійської та
                    західноєвропейської традицій.
                  </p>
                  <div className='flex flex-wrap gap-2 justify-center'>
                    <span className='bg-yellow-800/60 text-yellow-100 px-3 py-2 rounded-full text-sm font-medium'>
                      🗓️ XIII століття
                    </span>
                    <span className='bg-yellow-800/60 text-yellow-100 px-3 py-2 rounded-full text-sm font-medium'>
                      🎨 Іконопис
                    </span>{' '}
                    <span className='bg-yellow-800/60 text-yellow-100 px-3 py-2 rounded-full text-sm font-medium'>
                      Великі очі*
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Холмська ікона Богородиці */}
            <div className='bg-gradient-to-br from-yellow-900 to-slate-800 rounded-2xl p-4 sm:p-6 border-2 border-yellow-500/40 shadow-2xl'>
              <div className='flex flex-col items-center'>
                <div className='mb-4 sm:mb-6'>
                  <img
                    src='../../../assets/GaliciaVolynPower/Холмська.jpg'
                    alt='Холмська ікона Богородиці XII ст.'
                    className='w-full h-48 sm:h-64 lg:h-80 rounded-xl shadow-lg object-cover'
                  />
                </div>
                <div className='text-center'>
                  <h3 className='text-xl sm:text-2xl font-bold text-white mb-3'>
                    Холмська ікона Богородиці
                  </h3>
                  <p className='text-yellow-200 text-base sm:text-lg mb-4'>
                    XII століття. Одна з найшанованіших святинь
                    Галицько-Волинської держави, пов'язана з іменем князя Данила
                    Галицького.
                  </p>
                  <div className='flex flex-wrap gap-2 justify-center'>
                    <span className='bg-yellow-800/60 text-yellow-100 px-3 py-2 rounded-full text-sm font-medium'>
                      🗓️ XII століття
                    </span>
                    <span className='bg-yellow-800/60 text-yellow-100 px-3 py-2 rounded-full text-sm font-medium'>
                      🙏 Реліквія
                    </span>
                    <span className='bg-yellow-800/60 text-yellow-100 px-3 py-2 rounded-full text-sm font-medium'>
                      Єдина в такому поганому стані
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Дополнительные культурные достижения */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-orange-400 backdrop-blur-sm'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-orange-300 text-center'>
            Культурні досягнення
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
            <div className='p-3 sm:p-4 bg-orange-900/20 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed font-bold text-orange-300 mb-2'>
                Літописання
              </p>
              <p className='text-base sm:text-lg leading-relaxed'>
                Галицько-Волинський літопис - один з найважливіших джерел з
                історії України
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-orange-900/20 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed font-bold text-orange-300 mb-2'>
                Освіта
              </p>
              <p className='text-base sm:text-lg leading-relaxed'>
                При монастирях діяли школи, розвивалася писемність
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-orange-900/20 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed font-bold text-orange-300 mb-2'>
                Декоративно-ужиткове мистецтво
              </p>
              <p className='text-base sm:text-lg leading-relaxed'>
                Ювелірні вироби, різьблення по каменю, іконопис
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-orange-900/20 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed font-bold text-orange-300 mb-2'>
                Музична культура
              </p>
              <p className='text-base sm:text-lg leading-relaxed'>
                Церковне співоцтво, народні музичні традиції
              </p>
            </div>
          </div>
        </div>

        {/* Историческое значение */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-amber-300 text-center'>
            Значення культури Галицько-Волинської держави
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
            <div className='p-3 sm:p-4 bg-amber-900/30 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Збереження та розвиток культурних традицій Київської Русі
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-amber-900/30 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Поєднання візантійських та західноєвропейських впливів
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-amber-900/30 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Започаткування унікальної галицької школи архітектури та
                мистецтва
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-amber-900/30 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Стала основою для подальшого розвитку української культури
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Разделитель внизу */}
      <div className='relative mt-12 sm:mt-16 py-6 sm:py-8 px-3 sm:px-6 lg:px-8'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-full border-t-2 border-amber-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold text-amber-200 rounded-full border-2 border-amber-600/50 shadow-lg text-center'>
            Тести
          </span>
        </div>
      </div>
    </div>
  )
}
