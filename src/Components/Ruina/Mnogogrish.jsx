export function Mnogogrish () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-green-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-emerald-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-teal-600 rounded-full blur-3xl'></div>
      </div>

      <div className='max-w-6xl mx-auto relative z-10 space-y-12'>
        {/* Главный заголовок */}
        <div className='text-center mb-16'>
          <div className='flex flex-col items-center justify-center mb-6'>
            <div className='relative group mb-8'>
              <div className='w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mx-auto mb-4 relative'>
                <img
                  src='../../../assets/Ruina/mnogogrish.webp'
                  alt='Портрет Демьяна Многогрішного'
                  className='w-full h-full object-cover rounded-2xl border-4 border-green-500/50 shadow-2xl shadow-green-500/20 transition-all duration-300 group-hover:scale-105 group-hover:border-green-400/70 group-hover:shadow-green-400/30'
                />
                <div className='absolute inset-0 rounded-2xl border-2 border-white/10 pointer-events-none'></div>
                <div className='absolute -inset-2 rounded-3xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300'></div>
              </div>
            </div>
            <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400'>
              Дем'ян Многогрішний
            </h1>
            <h2 className='text-2xl sm:text-3xl text-green-300 font-bold mb-4'>
              Гетьман (1669-1672){' '}
              <span className='text-emerald-400 ml-4'>
                Лівобережний гетьман
              </span>
            </h2>
          </div>
        </div>

        {/* Основная информация */}
        <div className='space-y-8'>
          {/* Глухівські статті */}
          <div className='bg-gradient-to-r from-green-900/30 to-emerald-800/20 rounded-2xl p-8 border-l-4 border-green-500 backdrop-blur-sm'>
            <h1 className='text-3xl sm:text-4xl font-bold mb-6 text-green-300'>
              📜 Глухівські статті 1669 р.
            </h1>

            <div className='space-y-6'>
              <div className='p-6 bg-green-900/20 rounded-xl'>
                <p className='text-xl leading-relaxed'>
                  Московські воєводи лише в 5 містах
                </p>
              </div>

              <div className='p-6 bg-green-900/20 rounded-xl'>
                <p className='text-xl leading-relaxed'>
                  <span className='font-bold text-green-300'>
                    1000 компанійців
                  </span>{' '}
                  <span className='text-gray-400'>
                    (особисте наймане військо)
                  </span>{' '}
                  + 30 тис реєстр
                </p>
              </div>

              <div className='p-6 bg-green-900/20 rounded-xl'>
                <p className='text-xl leading-relaxed'>
                  Податки збирає козацтво
                </p>
              </div>

              <div className='p-6 bg-emerald-900/20 rounded-xl border-l-4 border-emerald-400'>
                <p className='text-xl leading-relaxed text-emerald-300'>
                  Створив військо компанійців!
                </p>
              </div>
            </div>
          </div>

          {/* Дополнительная информация */}
          <div className='bg-gradient-to-r from-emerald-900/30 to-teal-800/20 rounded-2xl p-8 border-l-4 border-emerald-500 backdrop-blur-sm'>
            <h3 className='text-2xl sm:text-3xl font-bold mb-6 text-emerald-300'>
              🎯 Основні досягнення
            </h3>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='p-6 bg-emerald-900/20 rounded-xl'>
                <p className='text-xl font-semibold text-emerald-300 mb-3'>
                  Військова реформа
                </p>
                <p className='text-lg text-gray-200'>
                  Створення професійного війська компанійців - особистої гвардії
                  гетьмана
                </p>
              </div>

              <div className='p-6 bg-emerald-900/20 rounded-xl'>
                <p className='text-xl font-semibold text-emerald-300 mb-3'>
                  Фінансова автономія
                </p>
                <p className='text-lg text-gray-200'>
                  Козацтво самостійно збирало податки, обмеження московських
                  воєвод
                </p>
              </div>

              <div className='p-6 bg-emerald-900/20 rounded-xl'>
                <p className='text-xl font-semibold text-emerald-300 mb-3'>
                  Обмеження впливу Москви
                </p>
                <p className='text-lg text-gray-200'>
                  Московські воєводи лише в 5 містах замість поширеного контролю
                </p>
              </div>

              <div className='p-6 bg-emerald-900/20 rounded-xl'>
                <p className='text-xl font-semibold text-emerald-300 mb-3'>
                  Збройні сили
                </p>
                <p className='text-lg text-gray-200'>
                  30,000 реєстрових козаків + 1,000 елітних компанійців
                </p>
              </div>
            </div>
          </div>

          {/* Трагический конец */}
          <div className='bg-gradient-to-r from-red-900/30 to-orange-800/20 rounded-2xl p-8 border-l-4 border-red-500 backdrop-blur-sm'>
            <h3 className='text-2xl sm:text-3xl font-bold mb-6 text-red-300'>
              ⚰️ Трагічна доля
            </h3>

            <div className='space-y-6'>
              <div className='p-6 bg-red-900/20 rounded-xl'>
                <p className='text-xl leading-relaxed text-red-200'>
                  Звинувачений московською владою у зраді та сепаратизмі
                </p>
              </div>

              <div className='p-6 bg-red-900/20 rounded-xl'>
                <p className='text-xl leading-relaxed text-red-200'>
                  Позбавлений гетьманства у 1672 році
                </p>
              </div>

              <div className='p-6 bg-red-900/30 rounded-xl border-l-4 border-red-400'>
                <p className='text-2xl font-semibold text-red-300 text-center'>
                  Відправили в Сибір
                </p>
              </div>
            </div>
          </div>

          {/* Исторический контекст */}
          <div className='bg-gradient-to-r from-slate-800/40 to-slate-700/30 rounded-2xl p-8 border-l-4 border-gray-500 backdrop-blur-sm'>
            <h3 className='text-2xl sm:text-3xl font-bold mb-6 text-gray-300'>
              📖 Історичний контекст
            </h3>

            <div className='space-y-4 text-xl text-gray-300'>
              <p>• Гетьманував у складний період Руїни на Лівобережжі</p>
              <p>
                • Намагався зберегти автономію України в умовах московського
                тиску
              </p>
              <p>• Його політика спрямована на посилення влади гетьмана</p>
              <p>
                • Конфліктував з московськими воєводами через втручання у
                внутрішні справи
              </p>
              <p>• Став жертвою московських інтриг та боротьби за владу</p>
            </div>
          </div>

          {/* Хронология */}
          <div className='bg-gradient-to-r from-green-900/30 to-emerald-800/20 rounded-2xl p-8 border-l-4 border-green-500 backdrop-blur-sm'>
            <h3 className='text-3xl font-bold mb-8 text-center text-green-300'>
              🗓️ Хронологія подій
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {[
                {
                  year: '1669',
                  event: 'Початок гетьманування',
                  color: 'green',
                  bg: 'bg-green-900/20',
                  border: 'border-green-500'
                },
                {
                  year: '1669',
                  event: 'Глухівські статті',
                  color: 'emerald',
                  bg: 'bg-emerald-900/20',
                  border: 'border-emerald-500'
                },
                {
                  year: '1672',
                  event: 'Завершення гетьманування',
                  color: 'red',
                  bg: 'bg-red-900/20',
                  border: 'border-red-500'
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

        {/* Разделитель внизу */}
        <div className='relative mt-12 sm:mt-16 py-6 sm:py-8 px-3 sm:px-6 lg:px-8'>
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='w-full border-t-2 border-green-700/30 border-dashed'></div>
          </div>
          <div className='relative flex justify-center'>
            <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-xl sm:text-2xl font-semibold text-green-200 rounded-full border-2 border-green-600/50 shadow-lg text-center'>
              Іван Самойлович
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
