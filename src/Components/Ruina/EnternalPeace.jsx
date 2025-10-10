export function EnternalPeace () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-blue-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-indigo-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-purple-600 rounded-full blur-3xl'></div>
      </div>

      <div className='max-w-6xl mx-auto relative z-10 space-y-12'>
        {/* Главный заголовок */}
        <div className='text-center mb-16'>
          <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400'>
            Вічний мир 1686 р.
          </h1>
        </div>

        {/* Основная информация */}
        <div className='space-y-8'>
          {/* Изображение Вечного мира */}
          <div className='bg-gradient-to-r from-blue-900/30 to-indigo-800/20 rounded-2xl p-8 border-l-4 border-blue-500 backdrop-blur-sm'>
            <div className='relative group'>
              <img
                src='../../../assets/Ruina/v.webp'
                alt='Вічний мир 1686 року'
                className='w-full h-80 object-cover rounded-2xl border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20 transition-all duration-300 group-hover:scale-105 group-hover:border-blue-400/50'
              />
              <div className='absolute inset-0 bg-blue-900/20 rounded-2xl pointer-events-none'></div>
              <div className='absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-sm rounded-xl p-4'>
                <p className='text-lg text-center text-gray-300'>
                  Вічний мир між Московією та Річчю Посполитою 1686 року
                </p>
              </div>
            </div>
          </div>

          {/* Условия договора */}
          <div className='bg-gradient-to-r from-indigo-900/30 to-purple-800/20 rounded-2xl p-8 border-l-4 border-indigo-500 backdrop-blur-sm'>
            <h3 className='text-2xl sm:text-3xl font-bold mb-6 text-indigo-300'>
              📜 Умови Вічного миру
            </h3>

            <div className='space-y-6'>
              <div className='p-6 bg-indigo-900/20 rounded-xl'>
                <p className='text-xl leading-relaxed'>
                  Не передбачав обмежень у час
                </p>
              </div>

              <div className='p-6 bg-indigo-900/20 rounded-xl'>
                <p className='text-xl leading-relaxed'>
                  До <span className='font-bold text-blue-300'>московії</span>{' '}
                  відходило{' '}
                  <span className='font-bold text-white'>
                    Лівобережжя та Київ + Запоріжжя
                  </span>
                </p>
              </div>

              <div className='p-6 bg-indigo-900/20 rounded-xl'>
                <p className='text-xl leading-relaxed'>
                  До <span className='font-bold text-purple-300'>Польщі</span> -{' '}
                  <span className='font-bold text-white'>
                    Пд. Київщина, Волинь та Галичина
                  </span>
                </p>
              </div>

              <div className='p-6 bg-indigo-900/20 rounded-xl'>
                <p className='text-xl leading-relaxed'>
                  <span className='font-bold text-white'>Брацлавщина</span> -
                  нейтральна незаселена зона
                </p>
              </div>

              <div className='p-6 bg-blue-900/20 rounded-xl border-l-4 border-blue-400'>
                <p className='text-xl leading-relaxed text-blue-300'>
                  *<span className='font-bold text-white'>Польща</span>{' '}
                  відвоювала землі в Осм. імперії, повернула більшу частину
                  Правобережжя
                </p>
              </div>
            </div>
          </div>

          {/* Иван Сирко */}
          <div className='bg-gradient-to-r from-purple-900/30 to-blue-800/20 rounded-2xl p-8 border-l-4 border-purple-500 backdrop-blur-sm'>
            <div className='flex flex-col lg:flex-row gap-8 items-center'>
              {/* Фотография Сирко */}
              <div className='lg:w-1/3'>
                <div className='relative group'>
                  <div className='w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mx-auto relative'>
                    <img
                      src='../../../assets/Ruina/Sirko.webp'
                      alt='Портрет Івана Сірка'
                      className='w-full h-full object-cover rounded-2xl border-4 border-purple-500/50 shadow-2xl shadow-purple-500/20 transition-all duration-300 group-hover:scale-105 group-hover:border-purple-400/70 group-hover:shadow-purple-400/30'
                    />
                    <div className='absolute inset-0 rounded-2xl border-2 border-white/10 pointer-events-none'></div>
                    <div className='absolute -inset-2 rounded-3xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300'></div>
                  </div>
                </div>
              </div>

              {/* Информация о Сирко */}
              <div className='lg:w-2/3'>
                <h1 className='text-3xl sm:text-4xl font-bold mb-4 text-purple-300'>
                  Іван Сірко{' '}
                  <span className='text-white text-xl sm:text-2xl'>
                    найвідоміший кошовий отаман Запорозької Січі
                  </span>
                </h1>

                <div className='p-6 bg-purple-900/20 rounded-xl mt-4'>
                  <p className='text-xl leading-relaxed'>
                    В період Руїни{' '}
                    <span className='font-bold text-white'>Запорозька січ</span>{' '}
                    виступала{' '}
                    <span className='font-bold text-purple-300'>
                      самостійною військово-політичною силою
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Хронология */}
          <div className='bg-gradient-to-r from-blue-900/30 to-indigo-800/20 rounded-2xl p-8 border-l-4 border-blue-500 backdrop-blur-sm'>
            <h3 className='text-3xl font-bold mb-8 text-center text-blue-300'>
              🗓️ Ключові події
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {[
                {
                  year: '1686',
                  event: 'Вічний мир',
                  color: 'blue',
                  bg: 'bg-blue-900/20',
                  border: 'border-blue-500'
                },
                {
                  year: '1681',
                  event: 'Бахчисарайський договір',
                  color: 'indigo',
                  bg: 'bg-indigo-900/20',
                  border: 'border-indigo-500'
                },
                {
                  year: 'XVII ст.',
                  event: 'Діяльність Івана Сірка',
                  color: 'purple',
                  bg: 'bg-purple-900/20',
                  border: 'border-purple-500'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl text-center border-l-4 ${item.bg} ${item.border}`}
                >
                  <div
                    className={`text-2xl font-bold text-${item.color}-300 mb-3`}
                  >
                    {item.year}
                  </div>
                  <div className='text-xl text-gray-200'>{item.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Разделитель внизу - на всю ширину экрана */}
      <div className='w-screen relative mt-12 sm:mt-16 py-6 sm:py-8 px-3 sm:px-6 lg:px-8 -mx-4 sm:-mx-6 lg:-mx-8'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-full border-t-2 border-blue-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-xl sm:text-2xl font-semibold text-blue-200 rounded-full border-2 border-blue-600/50 shadow-lg text-center'></span>
        </div>
      </div>
    </div>
  )
}
