export function Rozkol () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-red-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-blue-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-purple-600 rounded-full blur-3xl'></div>
      </div>

      <div className='max-w-6xl mx-auto relative z-10 space-y-12'>
        {/* Главный заголовок */}
        <div className='text-center mb-16'>
          <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-purple-400 to-blue-400'>
            Поділ Гетьманщини
          </h1>
          <div className='inline-flex items-center gap-4 px-8 py-4 bg-slate-800/50 rounded-full border border-purple-500/30 backdrop-blur-sm'>
            <span className='text-2xl sm:text-3xl text-purple-300 font-semibold'>
              1663р.
            </span>
            <span className='w-3 h-3 bg-purple-400 rounded-full'></span>
            <span className='text-xl sm:text-2xl text-gray-300'>
              Чорна рада (фактичне розділення)
            </span>
          </div>
        </div>

        {/* Основной контент в один столбец */}
        <div className='space-y-12'>
          {/* Левобережье */}
          <div className='bg-gradient-to-r from-red-900/30 to-red-800/20 rounded-2xl p-8 border-l-4 border-red-500 backdrop-blur-sm'>
            <h1 className='text-3xl sm:text-4xl font-bold mb-4'>
              Лівобережжя <span className='text-red-400'>(Московія)</span>
            </h1>
            <div className='inline-flex items-center px-4 py-2 bg-red-900/50 rounded-full mb-6'>
              <span className='w-3 h-3 bg-red-400 rounded-full mr-3'></span>
              <span className='text-lg font-medium text-red-300'>
                промосковський
              </span>
            </div>

            {/* Иван Брюховецкий */}
            <div className='bg-slate-800/40 rounded-2xl p-8 border border-red-500/20 mt-6'>
              {/* Заголовок с фотографией */}
              <div className='w-full text-center mb-8 relative z-10'>
                <div className='flex flex-col items-center justify-center mb-6'>
                  <div className='relative group mb-6'>
                    <div className='w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mx-auto mb-4 relative'>
                      <img
                        src='../../../assets/Ruina/Ivan_1.jpg'
                        alt='Портрет Івана Брюховецького'
                        className='w-full h-full object-cover rounded-2xl border-4 border-red-500/50 shadow-2xl shadow-red-500/20 transition-all duration-300 group-hover:scale-105 group-hover:border-red-400/70 group-hover:shadow-red-400/30'
                      />
                      {/* Декоративные элементы вокруг изображения */}
                      <div className='absolute inset-0 rounded-2xl border-2 border-white/10 pointer-events-none'></div>
                      <div className='absolute -inset-2 rounded-3xl bg-gradient-to-r from-red-500/20 to-orange-500/20 blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300'></div>
                    </div>
                  </div>
                  <h2 className='text-3xl sm:text-4xl font-bold text-red-300'>
                    Іван Брюховецький{' '}
                    <span className='text-gray-400 text-xl'>(1663-1668)</span>
                  </h2>
                  {/* Подпись под изображением */}
                  <div className='text-center mt-2'>
                    <p className='text-sm text-gray-400 italic transition-colors duration-300 group-hover:text-gray-300'>
                      Іван Брюховецький - гетьман Лівобережної України
                    </p>
                  </div>
                </div>
              </div>

              <div className='space-y-6'>
                <div className='p-6 bg-red-900/20 rounded-xl'>
                  <p className='text-xl leading-relaxed'>
                    Обраний гетьманом на Чорній раді в Ніжині
                  </p>
                </div>

                <div className='p-6 bg-red-900/20 rounded-xl'>
                  <p className='text-xl leading-relaxed'>
                    Перший укр. гетьман, який особисто поїхав до москви,
                    одружився та отримав боярство
                  </p>
                </div>
              </div>

              {/* Московские статьи */}
              <div className='mt-8 p-6 bg-red-900/30 rounded-xl border-l-4 border-red-400'>
                <p className='text-2xl font-semibold mb-6 text-red-300'>
                  Підписав{' '}
                  <span className='text-white'>Московські статті (1665)</span>
                </p>

                <div className='space-y-4'>
                  {[
                    'Укр землі переходять під безпосередню владу московського царя.',
                    'Вибори гетьмана відбуваються лише з дозволу царя й у присутності його представників.',
                    'Збільшено кількість московських військ в Україні. Вони утримували за рахунок укр. населення',
                    'Укр містам повернуто грамоти на магдебурзьке право але гетьман утрачав право надавати містам самоврядування.',
                    'Заборонена завнішня політика.',
                    'Київський митрополит підпорядковувався московському.',
                    'Заборона продажу тютюну і вина у москву',
                    'Збирали податки московські воєводи'
                  ].map((item, index) => (
                    <div
                      key={index}
                      className='flex items-start gap-4 p-4 bg-red-900/10 rounded-lg'
                    >
                      <span className='text-red-400 font-bold text-xl mt-1'>
                        {index + 1}.
                      </span>
                      <p className='text-xl text-gray-200 flex-1'>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Андрусовское перемирие */}
          <div className='bg-gradient-to-r from-purple-900/30 to-purple-800/20 rounded-2xl p-8 border-l-4 border-purple-500 backdrop-blur-sm'>
            <h1 className='text-2xl sm:text-3xl font-bold mb-4 text-purple-300'>
              Андрусівське перемир'я{' '}
              <span className='text-white'>(1667р.)</span>
            </h1>
            <p className='text-2xl text-purple-200 mb-6'>
              Юридичне оформлення поділу на лівий та правий берег
            </p>

            <div className='space-y-6'>
              <div className='p-6 bg-purple-900/20 rounded-xl'>
                <p className='text-xl'>
                  <span className='font-semibold text-purple-300'>Між:</span> РП
                  та Московією
                </p>
              </div>

              <div className='p-6 bg-purple-900/20 rounded-xl'>
                <p className='text-xl'>
                  <span className='font-semibold text-purple-300'>
                    Перемир'я на:
                  </span>{' '}
                  13.5 років
                </p>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='p-6 bg-purple-900/30 rounded-xl'>
                  <p className='font-semibold text-2xl text-purple-300 mb-4'>
                    До московії:
                  </p>
                  <ul className='space-y-3 text-xl text-gray-200'>
                    <li>• Лівобережжя</li>
                    <li>• Київ по 2 роки</li>
                  </ul>
                </div>

                <div className='p-6 bg-purple-900/30 rounded-xl'>
                  <p className='font-semibold text-2xl text-purple-300 mb-4'>
                    До Польщі:
                  </p>
                  <ul className='space-y-3 text-xl text-gray-200'>
                    <li>• Правобережжя</li>
                  </ul>
                </div>
              </div>

              <div className='p-6 bg-purple-900/20 rounded-xl'>
                <p className='text-xl text-center'>
                  <span className='font-semibold text-purple-300'>
                    Запоріжжя:
                  </span>{' '}
                  під спільним управлінням
                </p>
              </div>

              {/* Карта */}
              <div className='relative group mt-8'>
                <img
                  src='../../../assets/Ruina/karta.webp'
                  alt='мапа поділу Гетьманщини'
                  className='w-full h-220 object-cover rounded-2xl border-4 border-purple-500/30 shadow-2xl shadow-purple-500/20 transition-all duration-300 group-hover:scale-105 group-hover:border-purple-400/50'
                />
                <div className='absolute inset-0 bg-purple-900/20 rounded-2xl pointer-events-none'></div>
                <div className='absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-sm rounded-xl p-4'>
                  <p className='text-lg text-center text-gray-300'>
                    Мапа поділу Гетьманщини згідно з Андрусівським перемир'ям
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Правобережье */}
          <div className='bg-gradient-to-r from-blue-900/30 to-blue-800/20 rounded-2xl p-8 border-l-4 border-blue-500 backdrop-blur-sm'>
            <h1 className='text-3xl sm:text-4xl font-bold text-blue-300 mb-6'>
              Правобережжя <span className='text-gray-300'>(Польща)</span>
            </h1>

            {/* Павел Тетеря */}
            <div className='bg-slate-800/40 rounded-2xl p-8 border border-blue-500/20'>
              {/* Заголовок с фотографией */}
              <div className='w-full text-center mb-8 relative z-10'>
                <div className='flex flex-col items-center justify-center mb-6'>
                  <div className='relative group mb-6'>
                    <div className='w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mx-auto mb-4 relative'>
                      <img
                        src='../../../assets/Ruina/tetera.webp'
                        alt='Портрет Павла Тетері'
                        className='w-full h-full object-cover rounded-2xl border-4 border-blue-500/50 shadow-2xl shadow-blue-500/20 transition-all duration-300 group-hover:scale-105 group-hover:border-blue-400/70 group-hover:shadow-blue-400/30'
                      />
                      {/* Декоративные элементы вокруг изображения */}
                      <div className='absolute inset-0 rounded-2xl border-2 border-white/10 pointer-events-none'></div>
                      <div className='absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300'></div>
                    </div>
                  </div>
                  <h2 className='text-3xl sm:text-4xl font-bold text-blue-300'>
                    Павло Тетеря{' '}
                    <span className='text-gray-400 text-xl'>(1663-1665)</span>
                  </h2>
                  {/* Подпись под изображением */}
                  <div className='text-center mt-2'>
                    <p className='text-sm text-gray-400 italic transition-colors duration-300 group-hover:text-gray-300'>
                      Павло Тетеря - гетьман Правобережної України
                    </p>
                  </div>
                </div>
              </div>

              <div className='space-y-6'>
                <div className='p-6 bg-blue-900/20 rounded-xl'>
                  <p className='text-xl leading-relaxed'>
                    Орієнтувався на Польщу, продовжуючи політику І. Виговського
                  </p>
                </div>

                <div className='p-6 bg-blue-900/20 rounded-xl'>
                  <p className='text-xl leading-relaxed'>
                    Спробував об'єднати Право- та Лівобережжя з допомогою
                    поляків та крим. татарів але невдало
                  </p>
                </div>

                <div className='p-6 bg-blue-900/20 rounded-xl'>
                  <p className='text-xl leading-relaxed'>
                    Змушений постійно приборкувати антигетьманські виступи
                    полковників, не мав широкої підтримки серед укр. населення
                  </p>
                </div>

                <div className='p-6 bg-blue-900/20 rounded-xl'>
                  <p className='text-xl leading-relaxed'>
                    1665р. призначив наказним гетьманом М. Ханенка проте до
                    смерті так і не зрікся гетьманства
                  </p>
                </div>

                <div className='p-6 bg-red-900/20 rounded-xl border-l-4 border-red-400'>
                  <p className='text-xl leading-relaxed text-red-300'>
                    Доля Тетері після гетьманства достеменно не відома але
                    ймовірно був отруєний поляками
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Дополнительная информация */}
          <div className='bg-slate-800/40 rounded-2xl p-8 border border-blue-500/20'>
            <h3 className='text-2xl font-semibold mb-6 text-blue-300'>
              Історичний контекст
            </h3>
            <div className='space-y-4 text-xl text-gray-300'>
              <p>
                • Поділ Гетьманщини призвів до послаблення української
                державності
              </p>
              <p>• Розпочався період Руїни - громадянської війни в Україні</p>
              <p>
                • Українські землі стали ареною боротьби між сусідніми державами
              </p>
              <p>
                • Послабило здатність України протистояти зовнішнім загрозам
              </p>
              <p>
                • Призвело до культурного та політичного розмежування регіонів
              </p>
            </div>
          </div>

          {/* Хронология */}
          <div className='bg-slate-800/40 rounded-2xl p-8 border border-purple-500/20'>
            <h3 className='text-3xl font-bold mb-8 text-center text-purple-300'>
              Хронологія подій
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
              {[
                {
                  year: '1663',
                  event: 'Чорна рада',
                  color: 'purple',
                  bg: 'bg-purple-900/20',
                  border: 'border-purple-500'
                },
                {
                  year: '1663-1665',
                  event: 'Правобережжя: Тетеря',
                  color: 'blue',
                  bg: 'bg-blue-900/20',
                  border: 'border-blue-500'
                },
                {
                  year: '1663-1668',
                  event: 'Лівобережжя: Брюховецький',
                  color: 'red',
                  bg: 'bg-red-900/20',
                  border: 'border-red-500'
                },
                {
                  year: '1667',
                  event: "Андрусівське перемир'я",
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

        <div className='relative mt-12 sm:mt-16 py-6 sm:py-8 px-3 sm:px-6 lg:px-8'>
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='w-full border-t-2 border-red-700/30 border-dashed'></div>
          </div>
          <div className='relative flex justify-center'>
            <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-xl sm:text-2xl font-semibold text-red-200 rounded-full border-2 border-red-600/50 shadow-lg text-center'>
              Петро Дорошенко
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
