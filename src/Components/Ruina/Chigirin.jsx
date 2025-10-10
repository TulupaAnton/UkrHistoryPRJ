export function Chigirin () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-amber-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-orange-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-red-600 rounded-full blur-3xl'></div>
      </div>

      <div className='max-w-6xl mx-auto relative z-10 space-y-12'>
        {/* Главный заголовок */}
        <div className='text-center mb-16'>
          <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-400 to-red-400'>
            Чигиринські походи 1677-1678 рр.
          </h1>
        </div>

        {/* Основная информация */}
        <div className='space-y-8'>
          {/* Первый блок */}
          <div className='bg-gradient-to-r from-amber-900/30 to-orange-800/20 rounded-2xl p-8 border-l-4 border-amber-500 backdrop-blur-sm'>
            <div className='space-y-6'>
              <div className='p-6 bg-amber-900/20 rounded-xl'>
                <p className='text-xl leading-relaxed'>
                  Військові походи{' '}
                  <span className='font-bold text-amber-300'>
                    Осм. імперії + Юрія Хмельницького
                  </span>{' '}
                  на українські землі
                </p>
              </div>

              <div className='p-6 bg-amber-900/20 rounded-xl'>
                <p className='text-xl leading-relaxed'>
                  В результаті{' '}
                  <span className='font-bold text-red-400'>знищено</span>{' '}
                  столицю <span className='font-bold text-white'>Чигирин</span>
                </p>
              </div>
            </div>
          </div>

          {/* Карта чигиринских походов */}
          <div className='bg-gradient-to-r from-orange-900/30 to-amber-800/20 rounded-2xl p-8 border-l-4 border-orange-500 backdrop-blur-sm'>
            <h3 className='text-2xl sm:text-3xl font-bold mb-6 text-center text-orange-300'>
              🗺️ Карта Чигиринських походів
            </h3>
            <div className='relative group'>
              <img
                src='../../../assets/Ruina/mapaP.webp'
                alt='Карта чигирін походів'
                className='w-full h-220 object-cover rounded-2xl border-4 border-orange-500/30 shadow-2xl shadow-orange-500/20 transition-all duration-300 group-hover:scale-105 group-hover:border-orange-400/50'
              />
              <div className='absolute inset-0 bg-orange-900/20 rounded-2xl pointer-events-none'></div>
              <div className='absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-sm rounded-xl p-4'>
                <p className='text-lg text-center text-gray-300'>
                  Карта Чигиринських походів 1677-1678 років
                </p>
              </div>
            </div>
          </div>

          {/* Великий згін */}
          <div className='bg-gradient-to-r from-red-900/30 to-orange-800/20 rounded-2xl p-8 border-l-4 border-red-500 backdrop-blur-sm'>
            <div className='space-y-6'>
              <div className='p-6 bg-red-900/20 rounded-xl'>
                <p className='text-xl leading-relaxed'>
                  Самойлович не міг утримувати Правобережжя та віддав наказ
                  силоміць перегнати населення на лівий берег. -{' '}
                  <span className='font-bold text-white'>Великий згін</span>
                </p>
              </div>

              <div className='p-6 bg-red-900/20 rounded-xl'>
                <p className='text-xl leading-relaxed'>
                  Середня та Південна Київщина (правобережжя) було спустошено
                </p>
              </div>
            </div>
          </div>

          {/* Бахчисарайский договор */}
          <div className='bg-gradient-to-r from-amber-900/30 to-red-800/20 rounded-2xl p-8 border-l-4 border-amber-500 backdrop-blur-sm'>
            <div className='space-y-6'>
              <div className='p-6 bg-amber-900/20 rounded-xl'>
                <p className='text-xl leading-relaxed'>
                  Осм. імп та москва підписують{' '}
                  <span className='font-bold text-white'>
                    Бахчисарайський мирний договір 1681 р.
                  </span>
                  , за яким встановлюють кордон по Дніпру.
                </p>
              </div>

              {/* Карта Бахчисарайского договора */}
              <div className='relative group mt-6'>
                <img
                  src='../../../assets/Ruina/mapaB.webp'
                  alt='Мапа за бахчисарайським договором'
                  className='w-full h-220 object-cover rounded-2xl border-4 border-red-500/30 shadow-2xl shadow-red-500/20 transition-all duration-300 group-hover:scale-105 group-hover:border-red-400/50'
                />
                <div className='absolute inset-0 bg-red-900/20 rounded-2xl pointer-events-none'></div>
                <div className='absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-sm rounded-xl p-4'>
                  <p className='text-lg text-center text-gray-300'>
                    Мапа територій за Бахчисарайським договором 1681 року
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Разделитель внизу - на всю ширину экрана */}
      <div className='w-screen relative mt-12 sm:mt-16 py-6 sm:py-8 px-3 sm:px-6 lg:px-8 -mx-4 sm:-mx-6 lg:-mx-8'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-full border-t-2 border-amber-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-xl sm:text-2xl font-semibold text-amber-200 rounded-full border-2 border-amber-600/50 shadow-lg text-center'>
            Вічний мир
          </span>
        </div>
      </div>
    </div>
  )
}
