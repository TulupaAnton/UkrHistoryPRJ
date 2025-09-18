export function Yarik () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 flex flex-col relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-indigo-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-blue-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-cyan-600 rounded-full blur-3xl'></div>
      </div>

      {/* Header Section */}
      <div className='w-full py-8 md:py-12 px-4 sm:px-6 lg:px-8 text-center relative z-10'>
        <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-600 to-transparent'></div>
        <div className='absolute inset-x-0 top-0 flex justify-center'>
          <div className='w-40 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent'></div>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-6 md:mb-8'>
          {/* Фотография Ярослава */}
          <div className='relative'>
            <div className='w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-amber-500/60 shadow-2xl'>
              <img
                src='../../../assets/yara.jpg'
                alt='Ярослав Мудрий'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='absolute -inset-4 md:-inset-6 bg-amber-500/20 rounded-full -z-10 blur-xl'></div>
            <div className='absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 w-10 h-10 md:w-12 md:h-12 bg-amber-600 rounded-full flex items-center justify-center shadow-lg'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 md:h-7 md:w-7 text-amber-200'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
                />
              </svg>
            </div>
          </div>

          <div className='text-center md:text-left mt-4 md:mt-0'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight'>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500'>
                Ярослав Мудрий
              </span>
            </h1>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl text-amber-300 font-bold mt-1 md:mt-2'>
              (978-1054)
            </h2>

            <div className='w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto md:mx-0 my-4 md:my-5 rounded-full'></div>

            <p className='text-xl sm:text-2xl lg:text-3xl text-amber-200 font-bold leading-relaxed'>
              Золота доба Київської Русі, Тесть Європи
            </p>
          </div>
        </div>

        <div className='absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-600 to-transparent'></div>
      </div>

      {/* Content Section */}
      <div className='w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-10'>
        {/* Важные даты */}
        <div className='mb-8 md:mb-12'>
          <h2 className='text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-amber-300'>
            <span className='border-b-2 border-amber-500 pb-2'>
              Ключові дати
            </span>
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6'>
            <div className='bg-slate-800/60 p-3 md:p-5 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm text-center'>
              <div className='text-2xl md:text-3xl lg:text-4xl font-bold text-amber-300 mb-1 md:mb-2'>
                1019
              </div>
              <p className='text-base md:text-lg'>Початок правління</p>
            </div>
            <div className='bg-slate-800/60 p-3 md:p-5 rounded-xl border-l-4 border-emerald-400 backdrop-blur-sm text-center'>
              <div className='text-2xl md:text-3xl lg:text-4xl font-bold text-emerald-300 mb-1 md:mb-2'>
                1036
              </div>
              <p className='text-base md:text-lg'>Розгром печенігів</p>
            </div>
            <div className='bg-slate-800/60 p-3 md:p-5 rounded-xl border-l-4 border-rose-400 backdrop-blur-sm text-center'>
              <div className='text-2xl md:text-3xl lg:text-4xl font-bold text-rose-300 mb-1 md:mb-2'>
                1037
              </div>
              <p className='text-base md:text-lg'>Собор Святої Софії</p>
            </div>
            <div className='bg-slate-800/60 p-3 md:p-5 rounded-xl border-l-4 border-violet-400 backdrop-blur-sm text-center'>
              <div className='text-2xl md:text-3xl lg:text-4xl font-bold text-violet-300 mb-1 md:mb-2'>
                1051
              </div>
              <p className='text-base md:text-lg'>Митрополит Іларіон</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-8 md:gap-12 items-start'>
          {/* Main Facts */}
          <div className='lg:w-2/5'>
            <div className='space-y-5 md:space-y-7'>
              <div className='p-4 md:p-6 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
                <h3 className='text-lg md:text-xl font-semibold mb-2 text-amber-300'>
                  Прихід до влади:
                </h3>
                <p className='text-base md:text-lg'>
                  Після смерті Володимира почалася боротьба за владу, внаслідок
                  якої з 20 синів вижило 3 чи 4.
                </p>
                <p className='text-base md:text-lg mt-2 md:mt-3'>
                  Після остаточної перемоги над Святополком Окаянним (який вбив
                  Бориса і Гліба) в битві на р. Альта 1019 р. Ярослав Мудрий
                  став Великим київським князем.
                </p>
                <blockquote className='mt-3 md:mt-4 p-2 md:p-3 bg-slate-700/40 rounded-lg'>
                  <p className='text-sm md:text-base italic'>
                    «... І зійшлися супротивники (на р. Альті), і бій був
                    жорстокий, і не могли печеніги допомогти (Святополкові). І
                    одолів Ярослав Святополка і той утік...»
                  </p>
                </blockquote>
              </div>

              <div className='p-4 md:p-6 bg-slate-800/40 rounded-xl border-l-4 border-emerald-400 backdrop-blur-sm'>
                <h3 className='text-lg md:text-xl font-semibold mb-2 text-emerald-300'>
                  Дуумвірат з Мстиславом:
                </h3>
                <p className='text-base md:text-lg'>
                  Ярослав правив разом із братом Мстиславом (дуумвірат). У 1036
                  р. Мстислав помер і Ярослав став одноосібним правителем Русі.
                </p>
                <blockquote className='mt-3 md:mt-4 p-2 md:p-3 bg-slate-700/40 rounded-lg'>
                  <p className='text-sm md:text-base italic'>
                    «Зібрав він воїнів і прийшов до Києва, і вчинив мир із
                    братом своїм Мстиславом. І розділили вони по Дніпру Руську
                    землю: со бі узяв сю сторону, а Мстислав - ту...»
                  </p>
                </blockquote>
              </div>

              <div className='p-4 md:p-6 bg-gradient-to-r from-slate-800/40 to-slate-700/30 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm relative overflow-hidden'>
                <div className='absolute -top-4 -right-4 w-20 h-20 bg-indigo-600 rounded-full opacity-20 blur-lg'></div>
                <div className='absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-500 rounded-full opacity-20 blur-lg'></div>

                <h3 className='text-lg md:text-xl font-semibold mb-2 text-amber-300 relative z-10'>
                  Військові успіхи
                </h3>
                <p className='text-base md:text-lg relative z-10'>
                  Будував оборонні міста (м. Юр'єв)
                </p>
                <p className='text-base md:text-lg mt-2 relative z-10'>
                  У 1036 р. остаточно розгромив печенігів
                </p>
                <div className='mt-2 md:mt-3 p-2 md:p-3 bg-slate-700/40 rounded-lg relative z-10'>
                  <blockquote className='text-sm md:text-base italic'>
                    «А було ж печенігів без числа. Виступив тоді він із города,
                    приготував до бою дружину. Зійшлися вони на місці, де ото
                    нині Свята Софія стоїть, митрополія руська. І сталася січа
                    люта, і ледве одолів він печенігів під вечір».
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          {/* Карта и фото */}
          <div className='lg:w-3/5'>
            <div className='rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-[1.02] border-2 border-amber-500/40 mb-6 md:mb-8'>
              <div className='w-full h-220 md:h-80 lg:h-220 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-xl'>
                <img
                  src='../../../assets/kartaYara.jpg'
                  alt='Карта за часів Ярослава Мудрого'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='p-4 bg-slate-800/70 text-center'>
                <p className='text-amber-200 font-medium'>
                  Карта Київської Русі за часів правління Ярослава Мудрого
                </p>
              </div>
            </div>

            {/* Культурні та економічні зміни */}
            <div className='mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
              <div className='p-4 md:p-6 bg-slate-800/40 rounded-xl border-l-4 border-emerald-400 backdrop-blur-sm'>
                <h3 className='text-lg md:text-xl font-semibold mb-2 md:mb-3 text-emerald-300'>
                  Культурні досягнення
                </h3>
                <ul className='space-y-2 md:space-y-3'>
                  <li className='flex items-start'>
                    <span className='text-amber-400 mr-2 md:mr-3 text-lg md:text-xl'>
                      •
                    </span>
                    <span className='text-base md:text-lg'>
                      Побудував собор Святої Софії у Києві (1037)
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-amber-400 mr-2 md:mr-3 text-lg md:text-xl'>
                      •
                    </span>
                    <span className='text-base md:text-lg'>
                      Побудував Золоті Ворота в Києві
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-amber-400 mr-2 md:mr-3 text-lg md:text-xl'>
                      •
                    </span>
                    <span className='text-base md:text-lg'>
                      Відкрив першу бібліотеку при соборі Святої Софії
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-amber-400 mr-2 md:mr-3 text-lg md:text-xl'>
                      •
                    </span>
                    <span className='text-base md:text-lg'>
                      Заснував Києво-Печерський монастир (1051)
                    </span>
                  </li>
                </ul>
              </div>

              {/* Фото Софійського собору */}
              <div className='rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-[1.02] border-2 border-amber-500/40'>
                <div className='w-full h-64 md:h-84 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-xl'>
                  <img
                    src='../../../assets/sobor.jpg'
                    alt='Собор Святої Софії'
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='p-3 bg-slate-800/70 text-center'>
                  <p className='text-amber-200 text-sm'>
                    Собор Святої Софії у Києві
                  </p>
                </div>
              </div>

              {/* Фото Золотих воріт */}
              <div className='rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-[1.02] border-2 border-amber-500/40'>
                <div className='w-full h-48 md:h-64 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-xl'>
                  <img
                    src='../../../assets/vorota.jpg'
                    alt='Золоті Ворота'
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='p-3 bg-slate-800/70 text-center'>
                  <p className='text-amber-200 text-sm'>
                    Золоті Ворота у Києві
                  </p>
                </div>
              </div>

              <div className='p-4 md:p-6 bg-slate-800/40 rounded-xl border-l-4 border-violet-400 backdrop-blur-sm md:col-span-2'>
                <h3 className='text-lg md:text-xl font-semibold mb-2 md:mb-3 text-violet-300'>
                  Реформи та закони
                </h3>
                <ul className='space-y-2 md:space-y-3'>
                  <li className='flex items-start'>
                    <span className='text-amber-400 mr-2 md:mr-3 text-lg md:text-xl'>
                      •
                    </span>
                    <span className='text-base md:text-lg'>
                      У 1036 р. ініціював складення збірника законів «Руська
                      правда»
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-amber-400 mr-2 md:mr-3 text-lg md:text-xl'>
                      •
                    </span>
                    <span className='text-base md:text-lg'>
                      У 1037 р. заснував Київську церковну митрополію
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-amber-400 mr-2 md:mr-3 text-lg md:text-xl'>
                      •
                    </span>
                    <span className='text-base md:text-lg'>
                      <span className='font-bold text-amber-300'>1051 р.</span>{' '}
                      - призначення першого митрополита-русича Іларіона
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Династичні зв'язки */}
        <div className='mt-8 md:mt-12'>
          <h2 className='text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-violet-300'>
            <span className='border-b-2 border-violet-500 pb-2'>
              Династичні зв'язки
            </span>
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
            <div className='p-4 md:p-6 bg-slate-800/40 rounded-xl border-l-4 border-violet-400 backdrop-blur-sm'>
              <h3 className='text-lg md:text-xl font-semibold mb-2 md:mb-3 text-violet-300'>
                Шлюбна дипломатія
              </h3>
              <p className='text-base md:text-lg'>
                Вів шлюбну дипломатію: сприяв укладенню династичних шлюбів з
                європейськими монархічними родинами, за що отримав прізвисько
                <span className='font-bold text-amber-300'>
                  {' '}
                  "Тесть Європи"
                </span>
                .
              </p>
              <p className='text-base md:text-lg mt-2 md:mt-3'>
                Його донька Анна одружилася з королем Франції Генріхом I та у
                подальшому стала королевою Франції (ходять легенди, що вона
                вчила писати та читати короля Франції).
              </p>
            </div>

            <div className='p-4 md:p-6 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
              <h3 className='text-lg md:text-xl font-semibold mb-2 md:mb-3 text-amber-300'>
                Заповіт Ярослава
              </h3>
              <p className='text-base md:text-lg'>
                Перед смертю Ярослав склав заповіт, за яким поділив державу між
                синами:
              </p>
              <blockquote className='mt-2 md:mt-3 p-2 md:p-3 bg-slate-700/40 rounded-lg'>
                <p className='text-sm md:text-base italic'>
                  «Тепер же поручаю я, - замість себе - стіл свій, Київ,
                  найстаршому синові{' '}
                  <span className='font-bold text-amber-300'>Ізяславу</span>. А
                  <span className='font-bold text-amber-300'> Святославу</span>{' '}
                  даю я Чернігів, а{' '}
                  <span className='font-bold text-amber-300'>Всеволоду</span> -
                  Переяслав, а Ігорю - Володимир, а В'ячеславу - Смоленськ...»
                </p>
              </blockquote>
            </div>

            <div className='p-4 md:p-6 bg-slate-800/40 rounded-xl border-l-4 border-emerald-400 backdrop-blur-sm md:col-span-2'>
              <h3 className='text-lg md:text-xl font-semibold mb-2 md:mb-3 text-emerald-300'>
                Міжнародне визнання
              </h3>
              <p className='text-base md:text-lg'>
                За часів Ярослава Київська Русь досягла піку могутності та
                міжнародного визнання. Країна мала тісні дипломатичні зв'язки з
                Візантією, Німеччиною, Францією, Угорщиною, Скандинавськими
                країнами та іншими державами.
              </p>
            </div>
          </div>
        </div>

        {/* Цитаты */}
        <div className='relative mt-12 md:mt-16 p-1 bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl'>
          <div className='bg-slate-900 rounded-2xl p-4 md:p-6 lg:p-8'>
            <div className='flex items-start'>
              <div className='hidden md:flex mr-4 md:mr-6'>
                <div className='w-16 h-16 md:w-20 md:h-20 bg-amber-700 rounded-full flex items-center justify-center shadow-lg'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-8 w-8 md:h-10 md:w-10 text-amber-200'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
                    />
                  </svg>
                </div>
              </div>

              <div className='flex-1'>
                <div className='flex items-center mb-3 md:mb-4'>
                  <div className='w-4 h-1 bg-amber-400 rounded-full mr-2'></div>
                  <div className='w-8 h-1 bg-amber-400 rounded-full mr-2'></div>
                  <div className='w-4 h-1 bg-amber-400 rounded-full'></div>
                </div>

                <h3 className='text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-amber-300'>
                  Цитати, які треба пам'ятати та знати
                </h3>

                <div className='space-y-3 md:space-y-4 max-h-96 overflow-y-auto pr-2 md:pr-4'>
                  <p className='text-base md:text-lg lg:text-xl text-amber-100 italic leading-relaxed'>
                    «Якщо вдарити мечем і не на смерть, то потрібно заплатити 3
                    гривні за продаж і 1 гривню потерпілому за поранення, як
                    лікарську компенсацію. Коли ж уб'є на смерть, то потрібно
                    сплатити вірну компенсацію. Якщо ж убитий чоловік без дітей,
                    то його спадщина переходить до князя. А якщо це боярин або
                    дружина боярина, то спадщина не переходить до князя.» - (
                    <span className='font-bold text-amber-300'>
                      «Руська Правда»
                    </span>
                    )
                  </p>

                  <p className='text-base md:text-lg lg:text-xl text-amber-100 italic leading-relaxed'>
                    «...Відбувалися урочисті посадження на велико княжий
                    престол, церковні собори, прийоми послів, затвердження
                    політичних угод. Тут велося літописання й були створені
                    перші відомі на Русі бібліотека та школа...» (
                    <span className='font-bold text-amber-300'>
                      Про будову монастирів та бібліотек
                    </span>
                    )
                  </p>

                  <p className='text-base md:text-lg lg:text-xl text-amber-100 italic leading-relaxed'>
                    «Отець бо його... землю... хрещенням просвітив, а сей
                    великий князь... засіяв книжними словами серця віруючих
                    людей...» (
                    <span className='font-bold text-amber-300'>
                      про Ярослава Мудрого
                    </span>
                    )
                  </p>

                  <p className='text-base md:text-lg lg:text-xl text-amber-100 italic leading-relaxed'>
                    «...поставив ...русина Іларіона митрополитом Русі у Святій
                    Софії, зібравши єпископів...» (
                    <span className='font-bold text-amber-300'>
                      1051 про митрополита Іларіона
                    </span>
                    )
                  </p>

                  <p className='text-base md:text-lg lg:text-xl text-amber-100 italic leading-relaxed'>
                    «Коли Ярослав був у Новгороді, йому прийшла звістка, що
                    печеніги оточують Київ. Ярослав же, зібравши багато війська
                    з варягів та слов'ян, прийшов до Києва та вступив у свій
                    город...
                    <br />
                    <br />
                    ...І сталася жорстока січа, і ледве переміг Ярослав під
                    вечір. Розбіглися печеніги врозсіч і самі не знали, куди
                    вони бігли. А деякі, тікаючи, потонули в Сітомлі...» (
                    <span className='font-bold text-amber-300'>
                      1036 рік перемога над печенігами
                    </span>
                    )
                  </p>
                </div>

                <div className='flex items-center mt-4 md:mt-6'>
                  <div className='flex-1 h-0.5 bg-gradient-to-r from-amber-700/50 to-transparent'></div>
                  <span className='mx-2 md:mx-4 text-amber-400 text-base md:text-lg font-medium'>
                    Повість временних літ
                  </span>
                  <div className='flex-1 h-0.5 bg-gradient-to-l from-amber-700/50 to-transparent'></div>
                </div>
              </div>
            </div>
          </div>

          {/* Декоративные элементы */}
          <div className='absolute -top-2 -left-2 md:-top-3 md:-left-3 w-4 h-4 md:w-6 md:h-6 bg-amber-400 rounded-full opacity-70'></div>
          <div className='absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 w-4 h-4 md:w-6 md:h-6 bg-amber-500 rounded-full opacity-70'></div>
        </div>
      </div>

      {/* Красивое разделение между темами */}
      <div className='relative my-12 md:my-16 py-8 md:py-10 px-4 sm:px-6 lg:px-8'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-full border-t-2 border-amber-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-4 md:px-6 py-2 md:py-3 text-base md:text-lg font-semibold text-amber-200 rounded-full border-2 border-amber-600/50 shadow-lg flex items-center space-x-1 md:space-x-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4 md:h-5 md:w-5 text-amber-300'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
            <span>Наступна тема: Руська Правда та закони</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4 md:h-5 md:w-5 text-amber-300'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}
