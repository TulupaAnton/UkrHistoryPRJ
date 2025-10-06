export function Bilocharch () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-4 sm:py-8 px-3 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-purple-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-indigo-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-violet-600 rounded-full blur-3xl'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12 px-2'>
        {/* Главный заголовок */}
        <div className='w-full text-center mb-8 sm:mb-12 relative z-10 px-2'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-violet-400 to-indigo-500'>
              Білоцерківський мирний договір
            </span>
          </h1>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl text-violet-300 font-bold mb-4 sm:mb-6'>
            18 вересня 1651 року
          </h2>
          <div className='w-32 sm:w-48 h-1 bg-gradient-to-r from-purple-400 to-indigo-600 mx-auto rounded-full'></div>
        </div>

        {/* Основная информация о договоре */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-purple-400 backdrop-blur-sm'>
          <div className='text-center mb-6'>
            <span className='text-xl sm:text-2xl font-bold text-purple-300 bg-purple-900/40 px-4 py-2 rounded-full'>
              результат поразки під Берестечком
            </span>
          </div>

          <div className='space-y-4'>
            <div className='p-4 sm:p-6 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
              <ul className='space-y-3 text-xl sm:text-2xl'>
                <li className='flex items-start'>
                  <span className='w-2 h-2 bg-purple-400 rounded-full mt-3 mr-4'></span>
                  <span>
                    Територія гетьманського врядування обмежувалася{' '}
                    <span className='font-bold text-purple-300'>
                      Київським воєводством
                    </span>
                  </span>
                </li>
                <li className='flex items-start'>
                  <span className='w-2 h-2 bg-purple-400 rounded-full mt-3 mr-4'></span>
                  <span>
                    Козацький реєстр скорочувався до{' '}
                    <span className='font-bold text-purple-300'>20 тис.</span>
                  </span>
                </li>
                <li className='flex items-start'>
                  <span className='w-2 h-2 bg-purple-400 rounded-full mt-3 mr-4'></span>
                  <span>
                    <span className='font-bold text-purple-300'>
                      Магнати і шляхта
                    </span>{' '}
                    повертали колишні маєтки
                  </span>
                </li>
                <li className='flex items-start'>
                  <span className='w-2 h-2 bg-purple-400 rounded-full mt-3 mr-4'></span>
                  <span>
                    <span className='font-bold text-purple-300'>
                      Православна церква
                    </span>{' '}
                    зберігала свої права
                  </span>
                </li>
                <li className='flex items-start'>
                  <span className='w-2 h-2 bg-purple-400 rounded-full mt-3 mr-4'></span>
                  <span>
                    Гетьман підпорядковувався владі короля, зобов'язувався{' '}
                    <span className='font-bold text-purple-300'>
                      не проводити дипломатичних відносин з іноземними державами
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Помста */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-red-300 text-center'>
            ⚔️ Помста
          </h2>

          <div className='space-y-6'>
            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                У травні{' '}
                <span className='font-bold text-red-300 text-2xl sm:text-3xl'>
                  1652 р.
                </span>{' '}
                козаки оточили і розгромили польське військо біля гори{' '}
                <span className='font-bold text-red-300'>Батіг</span> на
                Поділлі.
                <span className='block mt-3 font-bold text-red-300 bg-red-900/40 px-3 py-2 rounded text-lg sm:text-xl'>
                  Призвела до відновлення території козацької держави, зміцнення
                  військового і політичного становища. Відновлення
                  україно-молдавського союзу
                </span>
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Восени{' '}
                <span className='font-bold text-red-300 text-2xl sm:text-3xl'>
                  1653 р.
                </span>{' '}
                козацьке військо оточило польську армію у м.{' '}
                <span className='font-bold text-red-300'>Жванець</span> на
                Поділлі
              </p>
            </div>
          </div>
        </div>

        {/* Важные моменты */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-orange-400 backdrop-blur-sm'>
          <div className='space-y-4'>
            <div className='p-4 sm:p-6 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-xl sm:text-2xl leading-relaxed font-bold text-orange-300'>
                🚨 Важливо: Кримський хан зрадив Б. Хмельницького - уклав з
                поляками Кам'янецький договір. Відновлюється Зборівський договір
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-xl sm:text-2xl leading-relaxed font-bold text-orange-300'>
                🤝 Б. Хмельницький вимушений був шукати собі нових союзників
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                <span className='font-bold text-orange-300'>
                  Наслідком цього договору була:
                </span>{' '}
                масова втеча селян із Правобережжя на землі Московської держави,
                Слобідську Україну, збереження Української козацької держави
                можливостей для подальшої боротьби за незалежність
              </p>
            </div>
          </div>
        </div>

        {/* Карта после 1651 года */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-indigo-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 text-indigo-300 text-center'>
            🗺️ Мапа після 1651 року
          </h2>
          <div className='flex justify-center'>
            <div className='p-4 sm:p-6 bg-indigo-900/20 rounded-lg border-l-2 border-indigo-400 w-full max-w-4xl'>
              <img
                src='../../../assets/NVV/12.png'
                alt='Мапа після 1651 року'
                className='w-full h-120 sm:h-80 lg:h-120 object-cover rounded-lg shadow-2xl'
              />
              <div className='p-4 sm:p-6 bg-indigo-900/30 rounded-lg mt-4'>
                <p className='text-xl sm:text-2xl leading-relaxed italic text-indigo-200 text-center'>
                  «Дозволяємо організовувати реєстрове військо..., яке мусить
                  перебувати тільки в маєтках, що містяться у воєводстві
                  Київському...»
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Историческое значение */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-purple-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-purple-300 text-center'>
            🎯 Історичне значення
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
            <div className='p-4 sm:p-6 bg-purple-900/20 rounded-lg'>
              <p className='text-xl sm:text-2xl font-semibold text-purple-300 mb-4 text-center'>
                📉 Обмеження прав
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Суворе обмеження території та прав козацької держави
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-purple-900/20 rounded-lg'>
              <p className='text-xl sm:text-2xl font-semibold text-purple-300 mb-4 text-center'>
                ⚔️ Поразка та відплата
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Призвів до поразки, але спровокував подальшу боротьбу
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-purple-900/20 rounded-lg'>
              <p className='text-xl sm:text-2xl font-semibold text-purple-300 mb-4 text-center'>
                🤝 Зміна союзників
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Змусив шукати нових союзників серед сусідніх держав
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-purple-900/20 rounded-lg'>
              <p className='text-xl sm:text-2xl font-semibold text-purple-300 mb-4 text-center'>
                🌍 Міграція населення
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Спричинив масову міграцію населення на Лівобережжя
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Разделитель внизу */}
      <div className='relative mt-12 sm:mt-16 py-6 sm:py-8 px-3 sm:px-6 lg:px-8'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-full border-t-2 border-purple-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-xl sm:text-2xl font-semibold text-purple-200 rounded-full border-2 border-purple-600/50 shadow-lg text-center'>
            Молдавські походи
          </span>
        </div>
      </div>
    </div>
  )
}
