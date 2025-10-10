export function Doroshenko () {
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
          <div className='flex flex-col items-center justify-center mb-6'>
            <div className='relative group mb-8'>
              <div className='w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mx-auto mb-4 relative'>
                <img
                  src='../../../assets/Ruina/Doroshenko.jpg'
                  alt='Портрет Петра Дорошенка'
                  className='w-full h-full object-cover rounded-2xl border-4 border-amber-500/50 shadow-2xl shadow-amber-500/20 transition-all duration-300 group-hover:scale-105 group-hover:border-amber-400/70 group-hover:shadow-amber-400/30'
                />
                <div className='absolute inset-0 rounded-2xl border-2 border-white/10 pointer-events-none'></div>
                <div className='absolute -inset-2 rounded-3xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300'></div>
              </div>
            </div>
            <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-400 to-red-400'>
              Петро Дорошенко
            </h1>
            <h2 className='text-2xl sm:text-3xl text-amber-300 font-bold mb-4'>
              Гетьман (1665-1676){' '}
              <span className='text-red-400 ml-4'>Сонце Руїни</span>
            </h2>
          </div>
        </div>

        {/* Основная информация */}
        <div className='space-y-8'>
          {/* Первый блок */}
          <div className='bg-gradient-to-r from-amber-900/30 to-orange-800/20 rounded-2xl p-8 border-l-4 border-amber-500 backdrop-blur-sm'>
            <div className='space-y-6'>
              <div className='p-6 bg-amber-900/20 rounded-xl'>
                <p className='text-xl leading-relaxed'>
                  Прийшов до влади як гетьман Правобережжя (замість Тетері)
                </p>
              </div>

              <div className='p-6 bg-amber-900/20 rounded-xl'>
                <p className='text-xl leading-relaxed'>
                  Хотів об'єднати Україну, звільнити від поляків та москви
                </p>
              </div>

              <div className='p-6 bg-red-900/20 rounded-xl border-l-4 border-red-400'>
                <p className='text-xl leading-relaxed'>
                  <span className='font-bold text-red-300'>1668р.</span> похід
                  на Лівобережжя (прив'язав Брюховецького до гармати),
                  проголосив себе{' '}
                  <span className='font-bold text-amber-300'>
                    гетьманом обох берегів Дніпра
                  </span>
                </p>
              </div>

              <div className='p-6 bg-orange-900/20 rounded-xl'>
                <p className='text-xl leading-relaxed'>
                  РП та Московія хейтять Дорошенка
                </p>
              </div>

              <div className='p-6 bg-orange-900/20 rounded-xl'>
                <p className='text-xl leading-relaxed'>
                  Заключає союз з турками (Корсунська угода)
                </p>
              </div>
            </div>
          </div>

          {/* Корсунська угода */}
          <div className='bg-gradient-to-r from-orange-900/30 to-red-800/20 rounded-2xl p-8 border-l-4 border-orange-500 backdrop-blur-sm'>
            <h1 className='text-3xl sm:text-4xl font-bold mb-6 text-orange-300'>
              📜 Корсунська угода (1669){' '}
              <span className='text-white text-2xl'>З Туреччиною</span>
            </h1>

            <div className='space-y-4'>
              {[
                'Протекторат Туреччини',
                'Заборона брати ясир',
                'Гетьманство довічне і спадкове за родом Дорошенка',
                'На території України не можна будувати мечетей',
                '20.000 військо сердюків (найманці)'
              ].map((item, index) => (
                <div
                  key={index}
                  className='flex items-start gap-4 p-6 bg-orange-900/20 rounded-xl'
                >
                  <span className='text-orange-400 font-bold text-xl mt-1'>
                    {index + 1}.
                  </span>
                  <p className='text-xl text-gray-200 flex-1'>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Україно-турецько-польська війна */}
          <div className='bg-gradient-to-r from-red-900/30 to-orange-800/20 rounded-2xl p-8 border-l-4 border-red-500 backdrop-blur-sm'>
            <h1 className='text-3xl sm:text-4xl font-bold mb-6 text-red-300'>
              ⚔️ Україно-турецько-польська війна 1672р.
            </h1>

            <div className='space-y-6'>
              <div className='p-6 bg-red-900/20 rounded-xl'>
                <p className='text-xl leading-relaxed'>
                  У травні{' '}
                  <span className='font-bold text-red-300'>1672р.</span> укр-тур
                  армія розпочала війну проти РП
                </p>
              </div>

              <div className='p-6 bg-red-900/20 rounded-xl'>
                <p className='text-xl leading-relaxed'>
                  Укр війська на боці Османської імперії очолив П. Дорошенко, на
                  боці Польщі - М. Ханенко
                </p>
              </div>

              <div className='p-6 bg-red-900/20 rounded-xl'>
                <p className='text-xl leading-relaxed'>
                  Дорошенко із союзниками взяли Кам'янець-Подільський, рушили на
                  Галичину й обложили Львів
                </p>
              </div>

              <div className='p-6 bg-amber-900/20 rounded-xl border-l-4 border-amber-400'>
                <p className='text-xl leading-relaxed text-amber-300'>
                  Результатом війни став{' '}
                  <span className='font-bold text-white'>
                    Бучацький договір
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Бучацький договір */}
          <div className='bg-gradient-to-r from-amber-900/30 to-orange-800/20 rounded-2xl p-8 border-l-4 border-amber-500 backdrop-blur-sm'>
            <h1 className='text-3xl sm:text-4xl font-bold mb-6 text-amber-300'>
              📄 Бучацький договір
            </h1>

            <div className='space-y-6'>
              {[
                "Польща передала Осм. імп. Подільське воєводство з Кам'янцем",
                'П. Дорошенко гетьманував на Брацлавщині та Південній Київщині',
                'Польщі залишалися Галичина, Волинь і Північна Київщина',
                'Умови Бучацького договору втратили чинність 1699р. за рішенням Карловицького міжнародного конгресу, коли РП повернули Поділля'
              ].map((item, index) => (
                <div key={index} className='p-6 bg-amber-900/20 rounded-xl'>
                  <p className='text-xl text-gray-200'>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Карта */}
          <div className='bg-gradient-to-r from-slate-800/40 to-slate-700/30 rounded-2xl p-8 border-l-4 border-gray-500 backdrop-blur-sm'>
            <h3 className='text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-300'>
              🗺️ Карта територій за Бучацьким договором
            </h3>
            <div className='relative group'>
              <img
                src='../../../assets/Ruina/81480830.jpg'
                alt='Карта територій за Бучацьким договором'
                className='w-full h-220 object-cover rounded-2xl border-4 border-gray-500/30 shadow-2xl shadow-gray-500/20 transition-all duration-300 group-hover:scale-105 group-hover:border-gray-400/50'
              />
              <div className='absolute inset-0 bg-gray-900/20 rounded-2xl pointer-events-none'></div>
              <div className='absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-sm rounded-xl p-4'>
                <p className='text-lg text-center text-gray-300'>
                  Розподіл територій згідно з Бучацьким договором 1672 року
                </p>
              </div>
            </div>
          </div>

          {/* Хронология */}
          <div className='bg-gradient-to-r from-slate-800/40 to-slate-700/30 rounded-2xl p-8 border-l-4 border-amber-500 backdrop-blur-sm'>
            <h3 className='text-3xl font-bold mb-8 text-center text-amber-300'>
              🗓️ Хронологія подій
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
              {[
                {
                  year: '1665',
                  event: 'Початок гетьманування',
                  color: 'amber',
                  bg: 'bg-amber-900/20',
                  border: 'border-amber-500'
                },
                {
                  year: '1668',
                  event: 'Похід на Лівобережжя',
                  color: 'orange',
                  bg: 'bg-orange-900/20',
                  border: 'border-orange-500'
                },
                {
                  year: '1669',
                  event: 'Корсунська угода',
                  color: 'red',
                  bg: 'bg-red-900/20',
                  border: 'border-red-500'
                },
                {
                  year: '1672',
                  event: 'Бучацький договір',
                  color: 'amber',
                  bg: 'bg-amber-900/20',
                  border: 'border-amber-500'
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
            <div className='w-full border-t-2 border-amber-700/30 border-dashed'></div>
          </div>
          <div className='relative flex justify-center'>
            <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-xl sm:text-2xl font-semibold text-amber-200 rounded-full border-2 border-amber-600/50 shadow-lg text-center'>
              Кінець періоду Руїни
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
