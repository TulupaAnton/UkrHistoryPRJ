export function Bohdan () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-4 sm:py-8 px-3 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-yellow-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-blue-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-red-600 rounded-full blur-3xl'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12 px-2'>
        {/* Главный заголовок */}
        <div className='w-full text-center mb-8 sm:mb-12 relative z-10 px-2'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500'>
              Богдан Хмельницький
            </span>
          </h1>
          <div className='w-32 sm:w-48 h-1 bg-gradient-to-r from-yellow-400 to-amber-600 mx-auto rounded-full'></div>
        </div>

        {/* Основная информация */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8'>
          {/* Портрет */}
          <div className='lg:col-span-1 flex justify-center'>
            <div className='p-4 sm:p-6 bg-slate-800/40 rounded-xl border-l-4 border-yellow-400 backdrop-blur-sm'>
              <img
                src='../../../assets/NVV/Bohdan.jpg'
                alt='Портрет Богдана Хмельницького'
                className='w-full max-w-xs sm:max-w-sm rounded-lg shadow-2xl'
              />
            </div>
          </div>

          {/* Описание */}
          <div className='lg:col-span-2 space-y-6'>
            <div className='p-4 sm:p-6 bg-slate-800/40 rounded-xl border-l-4 border-yellow-400 backdrop-blur-sm'>
              <p className='text-xl sm:text-2xl leading-relaxed text-center font-bold text-yellow-300'>
                Гетьман Війська Запорозького, провідник Національно-визвольної
                війни 1648-1657 рр. Творець Української козацької держави та її
                перший очільник
              </p>
            </div>
          </div>
        </div>

        {/* Биография */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-amber-300 text-center'>
            Біографія
          </h2>

          <div className='space-y-4 sm:space-y-6'>
            <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Походив з українського шляхетського роду
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Здобув освіту у{' '}
                <span className='font-bold text-amber-300'>
                  Львівському єзуїтському колегіумі
                </span>
                , разом із батьком служив у козачому війську
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                У битві під{' '}
                <span className='font-bold text-amber-300'>
                  Цецорою 1620 р.
                </span>{' '}
                Богдан потрапив у полон, звідки його викупили за два роки
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Повернувшись додому, він служив у польського короля, одружився з
                козачкою{' '}
                <span className='font-bold text-amber-300'>Ганною Сомко</span> і
                вів господарство на хуторі{' '}
                <span className='font-bold text-amber-300'>Суботів</span>
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Хмельницький, користуючись доброю репутацією в королівської
                адміністрації, став{' '}
                <span className='font-bold text-amber-300'>
                  писарем Запорізького Війська
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Трагедия и начало войны */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-red-300 text-center'>
            Трагедія та початок боротьби
          </h2>

          <div className='space-y-6'>
            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Але <span className='font-bold text-red-300'>1646 р.</span>{' '}
                сталася трагедія: за відсутності Хмельницького на хутір{' '}
                <span className='font-bold text-red-300 bg-red-900/40 px-2 py-1 rounded'>
                  напав польський шляхтич Д. Чаплинський
                </span>
                , розграбував маєток, забив до смерті десятирічного сина й увіз
                наречену. Добитися правосуддя Хмельницькому не вдалося навіть{' '}
                <span className='font-bold text-red-300 bg-red-900/40 px-2 py-1 rounded'>
                  у короля
                </span>
                . У тому він утік на Запоріжжя, де закликав козаків до помсти.
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Помер{' '}
                <span className='font-bold text-red-300'>
                  Б. Хмельницький 27 липня 1657 р.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Привід до війни */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-blue-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-blue-300 text-center'>
            Привід до Національно-визвольної війни
          </h2>

          <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-4 border-blue-400'>
            <p className='text-xl sm:text-2xl leading-relaxed italic text-blue-200'>
              «...Уся війна почалася через Чаплинського, який, незважаючи на те,
              що я мав привілеї короля, відібрав у мене хутір та ще й мені
              погрожував смертю, і увесь цей вогонь спалахнув через нього...»
            </p>
          </div>
        </div>

        {/* Свидетельства современников */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-yellow-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-yellow-300 text-center'>
            Свідчення сучасників
          </h2>

          <div className='space-y-6'>
            <div className='p-4 sm:p-6 bg-yellow-900/20 rounded-lg border-l-4 border-yellow-400'>
              <p className='text-xl sm:text-2xl leading-relaxed italic text-yellow-200'>
                «Зросту він скоріше високого, ніж середнього, широкої кості й
                міцної будови. Його мова й спосіб правління показують, що він
                наділений зрілим судженням проникливим розумом... У поводженні
                м'який простий, чим викликає до себе любов вояків, але, з іншого
                боку, підтримує серед них дисципліну суворими стягненнями...»
                <span className='block mt-3 font-bold text-yellow-300'>
                  А. Вімін, венеціанський дипломат
                </span>
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-yellow-900/20 rounded-lg border-l-4 border-yellow-400'>
              <h3 className='text-xl sm:text-2xl font-bold text-yellow-300 mb-4'>
                Про Хмельницького
              </h3>
              <p className='text-xl sm:text-2xl leading-relaxed italic text-yellow-200'>
                «Рідко коли окремі особи так визначали хід епохальних подій, як
                це зробив стосовно Великого Українського повстання Богдан
                Хмельницький»
                <span className='block mt-3 font-bold text-yellow-300'>
                  О. Субтельний
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Место захоронения и икона */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-amber-300 text-center'>
            Місце поховання та ікона
          </h2>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8'>
            <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg text-center'>
              <img
                src='../../../assets/NVV/charch.jpg'
                alt='Іллінська церква та дзвіниця'
                className='w-full h-120 sm:h-120 object-cover rounded-lg mb-4 shadow-lg'
              />
              <p className='text-xl sm:text-2xl text-amber-200 font-medium'>
                Іллінська церква та дзвіниця
                <span className='block text-lg sm:text-xl text-amber-300 mt-2'>
                  Кажуть, що Богдан захоронений саме тут
                </span>
              </p>
            </div>
            <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg text-center'>
              <img
                src='../../../assets/NVV/Pokrova.jpg'
                alt='Ікона Покров Богородиці з портретом гетьмана Богдана Хмельницького'
                className='w-full h-120 sm:h-120 object-cover rounded-lg mb-4 shadow-lg'
              />
              <p className='text-xl sm:text-2xl text-amber-200 font-medium'>
                Ікона «Покров Богородиці»
                <span className='block text-lg sm:text-xl text-amber-300 mt-2'>
                  З портретом гетьмана Богдана Хмельницького
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Историческое значение */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-red-300 text-center'>
            🎯 Історичне значення
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg'>
              <p className='text-xl sm:text-2xl font-semibold text-red-300 mb-4 text-center'>
                ⚔️ Провідник повстання
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Керівник Національно-визвольної війни 1648-1657 рр.
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg'>
              <p className='text-xl sm:text-2xl font-semibold text-red-300 mb-4 text-center'>
                🏛️ Творець держави
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Засновник Української козацької держави
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg'>
              <p className='text-xl sm:text-2xl font-semibold text-red-300 mb-4 text-center'>
                📜 Перший гетьман
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Перший очільник козацької держави
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg'>
              <p className='text-xl sm:text-2xl font-semibold text-red-300 mb-4 text-center'>
                🌍 Національний герой
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Символ української боротьби за свободу
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Разделитель внизу */}
      <div className='relative mt-12 sm:mt-16 py-6 sm:py-8 px-3 sm:px-6 lg:px-8'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-full border-t-2 border-yellow-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-xl sm:text-2xl font-semibold text-yellow-200 rounded-full border-2 border-yellow-600/50 shadow-lg text-center'>
            Великий гетьман України
          </span>
        </div>
      </div>
    </div>
  )
}
