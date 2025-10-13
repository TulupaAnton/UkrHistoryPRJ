export function Mazepaa () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 flex flex-col relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-amber-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-orange-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-red-600 rounded-full blur-3xl'></div>
      </div>

      {/* Header Section */}
      <div className='w-full py-8 md:py-12 px-4 sm:px-6 lg:px-8 text-center relative z-10'>
        <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent'></div>
        <div className='absolute inset-x-0 top-0 flex justify-center'>
          <div className='w-40 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent'></div>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-6 md:mb-8'>
          {/* Фотография Мазепы */}
          <div className='relative'>
            <div className='w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-amber-500/60 shadow-2xl'>
              <img
                src='../../../assets/Mazepa/Mazepa.webp'
                alt='Іван Мазепа'
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
                Іван Мазепа
              </span>
            </h1>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl text-amber-300 font-bold mt-1 md:mt-2'>
              (1687–1709)
            </h2>

            <div className='w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto md:mx-0 my-4 md:my-5 rounded-full'></div>

            <p className='text-xl sm:text-2xl lg:text-3xl text-amber-200 font-bold leading-relaxed'>
              Гетьман України, Меценат, Політичний стратег
            </p>
            <p className='text-sm md:text-base text-amber-400 italic mt-2'>
              справжня зовнішність невідома
            </p>
          </div>
        </div>

        <div className='absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent'></div>
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
                1687
              </div>
              <p className='text-base md:text-lg'>Початок гетьманування</p>
            </div>
            <div className='bg-slate-800/60 p-3 md:p-5 rounded-xl border-l-4 border-emerald-400 backdrop-blur-sm text-center'>
              <div className='text-2xl md:text-3xl lg:text-4xl font-bold text-emerald-300 mb-1 md:mb-2'>
                1701
              </div>
              <p className='text-base md:text-lg'>Статус академії</p>
            </div>
            <div className='bg-slate-800/60 p-3 md:p-5 rounded-xl border-l-4 border-rose-400 backdrop-blur-sm text-center'>
              <div className='text-2xl md:text-3xl lg:text-4xl font-bold text-rose-300 mb-1 md:mb-2'>
                1708
              </div>
              <p className='text-base md:text-lg'>Союз зі Швецією</p>
            </div>
            <div className='bg-slate-800/60 p-3 md:p-5 rounded-xl border-l-4 border-violet-400 backdrop-blur-sm text-center'>
              <div className='text-2xl md:text-3xl lg:text-4xl font-bold text-violet-300 mb-1 md:mb-2'>
                1709
              </div>
              <p className='text-base md:text-lg'>Кінець гетьманування</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-8 md:gap-12 items-start'>
          {/* Main Facts */}
          <div className='lg:w-2/5'>
            <div className='space-y-5 md:space-y-7'>
              <div className='p-4 md:p-6 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
                <h3 className='text-lg md:text-xl font-semibold mb-2 text-amber-300'>
                  Освіта та кар'єра:
                </h3>
                <p className='text-base md:text-lg'>
                  Навчався в{' '}
                  <span className='font-bold text-amber-300'>
                    Києво-Могилянській колегії
                  </span>{' '}
                  та єзуїтській колегії у Варшаві
                </p>
                <p className='text-base md:text-lg mt-2 md:mt-3'>
                  Служив у польського короля, гетьманів{' '}
                  <span className='font-bold text-white'>П. Дорошенка</span> та{' '}
                  <span className='font-bold text-white'>І. Самойловича</span>,
                  де здобув славу дипломата
                </p>
                <blockquote className='mt-3 md:mt-4 p-2 md:p-3 bg-slate-700/40 rounded-lg'>
                  <p className='text-sm md:text-base italic'>
                    «Його вважали одним з найбільших і найбагатших феодалів
                    Європи»
                  </p>
                </blockquote>
              </div>

              <div className='p-4 md:p-6 bg-slate-800/40 rounded-xl border-l-4 border-emerald-400 backdrop-blur-sm'>
                <h3 className='text-lg md:text-xl font-semibold mb-2 text-emerald-300'>
                  Прихід до влади:
                </h3>
                <p className='text-base md:text-lg'>
                  За підтримки князя{' '}
                  <span className='font-bold text-white'>Василя Голіцина</span>,
                  фаворита правительки Московського царства{' '}
                  <span className='font-bold text-white'>Софії</span>, у{' '}
                  <span className='font-bold text-amber-300'>1687 році</span>{' '}
                  стає гетьманом Лівобережної України
                </p>
                <blockquote className='mt-3 md:mt-4 p-2 md:p-3 bg-slate-700/40 rounded-lg'>
                  <p className='text-sm md:text-base italic'>
                    «Звинувачення у провалі Першого Кримського походу Івана
                    Самойловича і заслання його до Сибіру»
                  </p>
                </blockquote>
              </div>

              <div className='p-4 md:p-6 bg-gradient-to-r from-slate-800/40 to-slate-700/30 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm relative overflow-hidden'>
                <div className='absolute -top-4 -right-4 w-20 h-20 bg-orange-600 rounded-full opacity-20 blur-lg'></div>
                <div className='absolute -bottom-4 -left-4 w-16 h-16 bg-red-500 rounded-full opacity-20 blur-lg'></div>

                <h3 className='text-lg md:text-xl font-semibold mb-2 text-amber-300 relative z-10'>
                  Резиденція та нагороди
                </h3>
                <p className='text-base md:text-lg relative z-10'>
                  Резиденція - т.{' '}
                  <span className='font-bold text-white'>Батурин</span>
                </p>
                <p className='text-base md:text-lg mt-2 relative z-10'>
                  Заслуги Мазепи були відзначені вищою московською нагородою -
                  орденом Андрія Первозванного з написом{' '}
                  <span className='font-bold text-white'>
                    «За віру і вірність»
                  </span>
                </p>
                <div className='mt-2 md:mt-3 p-2 md:p-3 bg-slate-700/40 rounded-lg relative z-10'>
                  <blockquote className='text-sm md:text-base italic text-red-300'>
                    Помер у м.{' '}
                    <span className='font-bold text-white'>
                      Бендери (Туреччина)
                    </span>
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
                  src='../../../assets/Mazepa/karta.webp'
                  alt='Карта Гетьманщини за часів Мазепи'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='p-4 bg-slate-800/70 text-center'>
                <p className='text-amber-200 font-medium'>
                  Карта Гетьманщини за часів правління Івана Мазепи
                </p>
              </div>
            </div>

            {/* Культурні та політичні зміни */}
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
                      Домігся для{' '}
                      <span className='font-bold text-emerald-300'>
                        Києво-Могилянського колегіуму статусу академії - 1701 р.
                      </span>
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-amber-400 mr-2 md:mr-3 text-lg md:text-xl'>
                      •
                    </span>
                    <span className='text-base md:text-lg'>
                      Сприяв заснуванню академічної бібліотеки
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-amber-400 mr-2 md:mr-3 text-lg md:text-xl'>
                      •
                    </span>
                    <span className='text-base md:text-lg'>
                      Заснував{' '}
                      <span className='font-bold text-white'>
                        Чернігівський колегіум
                      </span>
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-amber-400 mr-2 md:mr-3 text-lg md:text-xl'>
                      •
                    </span>
                    <span className='text-base md:text-lg'>
                      Відбудова в Києві{' '}
                      <span className='font-bold text-white'>
                        Софійського та Михайлівського Золотоверхого соборів
                      </span>
                    </span>
                  </li>
                </ul>
              </div>

              {/* Фото гравюры */}
              <div className='rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-[1.02] border-2 border-amber-500/40'>
                <div className='w-full h-64 md:h-84 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-xl'>
                  <img
                    src='../../../assets/Mazepa/image.webp'
                    alt='Гравюра «Іван Мазепа серед своїх добрих справ»'
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='p-3 bg-slate-800/70 text-center'>
                  <p className='text-amber-200 text-sm'>
                    Гравюра «Іван Мазепа серед своїх добрих справ». 1706 р.
                  </p>
                </div>
              </div>

              {/* Колотацькі статті */}
              <div className='p-4 md:p-6 bg-slate-800/40 rounded-xl border-l-4 border-violet-400 backdrop-blur-sm md:col-span-2'>
                <h3 className='text-lg md:text-xl font-semibold mb-2 md:mb-3 text-violet-300'>
                  Колотацькі статті <span className='text-white'>(1687)</span>
                </h3>
                <ul className='space-y-2 md:space-y-3'>
                  <li className='flex items-start'>
                    <span className='text-amber-400 mr-2 md:mr-3 text-lg md:text-xl'>
                      •
                    </span>
                    <span className='text-base md:text-lg'>
                      Гетьман не мав права без царського указу позбавляти
                      старшину керівних посад
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-amber-400 mr-2 md:mr-3 text-lg md:text-xl'>
                      •
                    </span>
                    <span className='text-base md:text-lg'>
                      Обмежувалося право гетьмана розпоряджатися військовими
                      землями
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-amber-400 mr-2 md:mr-3 text-lg md:text-xl'>
                      •
                    </span>
                    <span className='text-base md:text-lg'>
                      Зберігалося{' '}
                      <span className='font-bold text-amber-300'>
                        30 тис. реєстрове козацьке військо
                      </span>{' '}
                      та компанійські полки
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-amber-400 mr-2 md:mr-3 text-lg md:text-xl'>
                      •
                    </span>
                    <span className='text-base md:text-lg'>
                      <span className='font-bold text-red-300'>
                        відмовився від претензій на Правобережжя
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Внутрішня та зовнішня політика */}
        <div className='mt-8 md:mt-12'>
          <h2 className='text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-violet-300'>
            <span className='border-b-2 border-violet-500 pb-2'>
              Політика Мазепи
            </span>
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
            <div className='p-4 md:p-6 bg-slate-800/40 rounded-xl border-l-4 border-violet-400 backdrop-blur-sm'>
              <h3 className='text-lg md:text-xl font-semibold mb-2 md:mb-3 text-violet-300'>
                Внутрішня політика
              </h3>
              <p className='text-base md:text-lg'>
                Зміцнював владу гетьмана, спираючись на козацьку верхівку
                (освічена шляхта){' '}
                <span className='font-bold text-white'>
                  «бунчукові товариші»
                </span>
              </p>
              <p className='text-base md:text-lg mt-2 md:mt-3'>
                Бачив Україну становою державою західноєвропейського зразка із
                збереженням козацького устрою
              </p>
              <p className='text-base md:text-lg mt-2 md:mt-3'>
                Узаконив універсалом{' '}
                <span className='font-bold text-amber-300'>1701р.</span> 2-денну
                панщину{' '}
                <span className='font-bold text-white'>«вітчим України»</span>{' '}
                <span className='font-bold text-amber-300'>
                  початок повернення до закріпачення
                </span>
              </p>
            </div>

            <div className='p-4 md:p-6 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
              <h3 className='text-lg md:text-xl font-semibold mb-2 md:mb-3 text-amber-300'>
                Зовнішня політика
              </h3>
              <p className='text-base md:text-lg'>
                Підтримував дипломатичні зносини з багатьма державами{' '}
                <span className='font-bold text-white'>
                  мріяв про об'єднання Лівобережної та Правобережної України
                </span>
              </p>
              <p className='text-base md:text-lg mt-2 md:mt-3'>
                Участь козаків в{' '}
                <span className='font-bold text-white'>
                  Азовських походах 1695-1696 pp.
                </span>
              </p>
              <blockquote className='mt-2 md:mt-3 p-2 md:p-3 bg-slate-700/40 rounded-lg'>
                <p className='text-sm md:text-base italic text-red-300'>
                  <span className='font-bold text-white'>1708 p.</span> уклав
                  таємний українсько-шведський союз проти Росії, який у{' '}
                  <span className='font-bold text-white'>1709 р.</span>{' '}
                  трансформувався в договір про створення незалежної Української
                  держави в союзі зі Швецією
                </p>
              </blockquote>
            </div>

            <div className='p-4 md:p-6 bg-slate-800/40 rounded-xl border-l-4 border-emerald-400 backdrop-blur-sm md:col-span-2'>
              <h3 className='text-lg md:text-xl font-semibold mb-2 md:mb-3 text-emerald-300'>
                Міжнародне визнання
              </h3>
              <p className='text-base md:text-lg'>
                За часів Мазепи Гетьманщина досягла піку культурного розквіту.
                Мазепа підтримував дипломатичні відносини з Річчю Посполитою,
                Османською імперією, Швецією, намагаючись зберегти автономію
                України в складних міжнародних умовах.
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
                    «Гетьман мав удаватися до особливих заходів, аби "...усіма
                    силами з'єднувати в міцну й нерозривну згоду обидва руські
                    народи", щоб "...Малоросію не називали Гетьманською, лише
                    визнавали землею, яка знаходиться B царській самодержавній
                    владі"» - (
                    <span className='font-bold text-amber-300'>
                      Колотацькі статті
                    </span>
                    )
                  </p>

                  <p className='text-base md:text-lg lg:text-xl text-amber-100 italic leading-relaxed'>
                    «...Великий славний муж, що залишився на старі літа без
                    нащадків майном, жертвував усім, щоб вибороти своїй 3
                    величезним волю Батьківщині. Він не завагався зректися
                    всього... за визволення рідного краю...» (
                    <span className='font-bold text-amber-300'>
                      Про патріотизм Мазепи
                    </span>
                    )
                  </p>

                  <p className='text-base md:text-lg lg:text-xl text-amber-100 italic leading-relaxed'>
                    «З початком Північної війни між Росією і Швецією (1700 р.)
                    гетьман шукає нових зовнішньополітичних орієнтирів. 1708 p.
                    уклав таємний українсько-шведський союз проти Росії...» (
                    <span className='font-bold text-amber-300'>
                      Зовнішня політика
                    </span>
                    )
                  </p>

                  <p className='text-base md:text-lg lg:text-xl text-amber-100 italic leading-relaxed'>
                    «Домігся для Києво-Могилянського колегіуму статусу академії
                    - 1701 р. Сприяв заснуванню академічної бібліотеки. Заснував
                    Чернігівський колегіум...» (
                    <span className='font-bold text-amber-300'>
                      Культурна діяльність
                    </span>
                    )
                  </p>

                  <p className='text-base md:text-lg lg:text-xl text-amber-100 italic leading-relaxed'>
                    «Його коштом споруджено і відновлено багато церков і
                    монастирів (12+20) Відбудова в Києві Софійського та
                    Михайлівського Золотоверхого соборів. Направляв на навчання
                    дітей козацької старшини за кордон...» (
                    <span className='font-bold text-amber-300'>
                      Меценатство
                    </span>
                    )
                  </p>
                </div>

                <div className='flex items-center mt-4 md:mt-6'>
                  <div className='flex-1 h-0.5 bg-gradient-to-r from-amber-700/50 to-transparent'></div>
                  <span className='mx-2 md:mx-4 text-amber-400 text-base md:text-lg font-medium'>
                    Історичні джерела
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
            <span>Паліївщина</span>
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
