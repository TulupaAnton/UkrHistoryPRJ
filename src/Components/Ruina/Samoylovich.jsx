export function Samoylovich () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-indigo-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-violet-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-purple-600 rounded-full blur-3xl'></div>
      </div>

      <div className='max-w-6xl mx-auto relative z-10 space-y-12'>
        {/* Главный заголовок */}
        <div className='text-center mb-16'>
          <div className='flex flex-col items-center justify-center mb-6'>
            <div className='relative group mb-8'>
              <div className='w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mx-auto mb-4 relative'>
                <img
                  src='../../../assets/Samo.webp'
                  alt='Портрет Івана Самойловича'
                  className='w-full h-full object-cover rounded-2xl border-4 border-indigo-500/50 shadow-2xl shadow-indigo-500/20 transition-all duration-300 group-hover:scale-105 group-hover:border-indigo-400/70 group-hover:shadow-indigo-400/30'
                />
                <div className='absolute inset-0 rounded-2xl border-2 border-white/10 pointer-events-none'></div>
                <div className='absolute -inset-2 rounded-3xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300'></div>
              </div>
            </div>
            <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400'>
              Іван Самойлович
            </h1>
            <h2 className='text-2xl sm:text-3xl text-indigo-300 font-bold mb-4'>
              Гетьман <span className='text-white'>(1672-1687)</span>{' '}
              <span className='text-purple-400 ml-4'>
                (Лівобережний гетьман)
              </span>
            </h2>
            <div className='flex flex-wrap justify-center gap-3 mt-4'>
              <span className='px-4 py-2 bg-indigo-900/50 rounded-full text-indigo-300 text-lg font-medium'>
                Великий згін!
              </span>
              <span className='px-4 py-2 bg-purple-900/50 rounded-full text-purple-300 text-lg font-medium'>
                Орієнтація на москву
              </span>
            </div>
          </div>
        </div>

        {/* Основная информация */}
        <div className='space-y-8'>
          {/* Конотопські статті */}
          <div className='bg-gradient-to-r from-indigo-900/30 to-purple-800/20 rounded-2xl p-8 border-l-4 border-indigo-500 backdrop-blur-sm'>
            <h1 className='text-3xl sm:text-4xl font-bold mb-6 text-indigo-300'>
              Конотопські статті <span className='text-white'>(1672)</span>
            </h1>

            <div className='space-y-6'>
              <div className='p-6 bg-indigo-900/20 rounded-xl'>
                <p className='text-xl leading-relaxed'>
                  Заборона судити старшину
                </p>
              </div>

              <div className='p-6 bg-indigo-900/20 rounded-xl'>
                <p className='text-xl leading-relaxed'>
                  Заборона листувати з Дорошенком
                </p>
              </div>
            </div>
          </div>

          {/* Основные события */}
          <div className='bg-gradient-to-r from-purple-900/30 to-violet-800/20 rounded-2xl p-8 border-l-4 border-purple-500 backdrop-blur-sm'>
            <div className='space-y-6'>
              <div className='p-6 bg-purple-900/20 rounded-xl'>
                <p className='text-xl leading-relaxed'>
                  <span className='font-bold text-purple-300'>1676</span> Пішов
                  в похід на правий берег, Після зречення Дорошенка Самойловича
                  було проголошено{' '}
                  <span className='font-bold text-white'>
                    гетьманом обох берегів
                  </span>{' '}
                  .
                </p>
              </div>

              <div className='p-6 bg-purple-900/20 rounded-xl'>
                <p className='text-xl leading-relaxed'>
                  намагався створити{' '}
                  <span className='font-bold text-white'>
                    аристократичну державу
                  </span>{' '}
                  з міцною гетьманською владою
                </p>
              </div>

              <div className='p-6 bg-purple-900/20 rounded-xl'>
                <p className='text-xl leading-relaxed'>
                  Усі державні справи вирішував зі старшиною
                </p>
              </div>

              <div className='p-6 bg-purple-900/20 rounded-xl'>
                <p className='text-xl leading-relaxed'>
                  наймане військо{' '}
                  <span className='font-bold text-white'>(компанійці)</span>
                </p>
              </div>

              <div className='p-6 bg-purple-900/20 rounded-xl'>
                <p className='text-xl leading-relaxed'>
                  <span className='font-bold text-purple-300'>
                    1678-1679рр.
                  </span>{' '}
                  організував{' '}
                  <span className='font-bold text-white'>"Великий згін"</span>
                </p>
              </div>

              <div className='p-6 bg-purple-900/20 rounded-xl'>
                <p className='text-xl leading-relaxed'>
                  Брав участь в{' '}
                  <span className='font-bold text-white'>обороні Чигирина</span>{' '}
                  від турецько-татарської армії{' '}
                  <span className='font-bold text-purple-300'>(1677-1678)</span>
                </p>
              </div>

              <div className='p-6 bg-indigo-900/20 rounded-xl border-l-4 border-indigo-400'>
                <p className='text-xl leading-relaxed text-indigo-300'>
                  За його правліня (але без його участі ) Москва та РП підписали{' '}
                  <span className='font-bold text-white'>"Вічний мир"</span>
                </p>
              </div>
            </div>
          </div>

          {/* Хронология */}
          <div className='bg-gradient-to-r from-indigo-900/30 to-purple-800/20 rounded-2xl p-8 border-l-4 border-indigo-500 backdrop-blur-sm'>
            <h3 className='text-3xl font-bold mb-8 text-center text-indigo-300'>
              Хронологія подій
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
              {[
                {
                  year: '1672',
                  event: 'Початок гетьманування',
                  color: 'indigo',
                  bg: 'bg-indigo-900/20',
                  border: 'border-indigo-500'
                },
                {
                  year: '1672',
                  event: 'Конотопські статті',
                  color: 'purple',
                  bg: 'bg-purple-900/20',
                  border: 'border-purple-500'
                },
                {
                  year: '1676',
                  event: 'Гетьман обох берегів',
                  color: 'violet',
                  bg: 'bg-violet-900/20',
                  border: 'border-violet-500'
                },
                {
                  year: '1678-1679',
                  event: 'Великий згін',
                  color: 'indigo',
                  bg: 'bg-indigo-900/20',
                  border: 'border-indigo-500'
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
          <div className='w-full border-t-2 border-indigo-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-xl sm:text-2xl font-semibold text-indigo-200 rounded-full border-2 border-indigo-600/50 shadow-lg text-center'>
            Кінець періоду Руїни
          </span>
        </div>
      </div>
    </div>
  )
}
