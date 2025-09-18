export function Triumvirat () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-amber-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-rose-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-emerald-600 rounded-full blur-3xl'></div>
      </div>

      {/* Заголовок */}
      <div className='w-full max-w-4xl mx-auto text-center mb-10 relative z-10'>
        <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent'></div>

        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 mt-4'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500'>
            Князювання тріумвірату Ярославичів
          </span>
        </h1>
        <h2 className='text-2xl sm:text-3xl text-amber-300 font-bold'>
          (1054-1113 рр.)
        </h2>

        <div className='w-48 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto my-6 rounded-full'></div>

        <p className='text-xl sm:text-2xl text-amber-200 font-medium leading-relaxed'>
          Тріумвірат - це мирне співправління трьох князів однією країною
          <br />
          <span className='text-lg'>
            (3 брати: <span className='font-bold text-amber-300'>Ізяслав</span>,{' '}
            <span className='font-bold text-amber-300'>Святослав</span> та{' '}
            <span className='font-bold text-amber-300'>Всеволод</span>)
          </span>
        </p>

        <div className='absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-6xl mx-auto relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
          {/* Правление триумвирата */}
          <div className='p-6 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
            <h3 className='text-2xl font-semibold mb-4 text-amber-300'>
              Спільне правління
            </h3>
            <p className='text-lg mb-4'>
              Деякий час вони мирно правили разом, але потім пересварилися
            </p>

            <div className='p-4 bg-slate-700/40 rounded-lg mt-4'>
              <p className='text-lg'>
                За часів їх князювання на південь Київської Русі переселилися
                половці, які у{' '}
                <span className='font-bold text-amber-300'>1068 р.</span> у
                битві на{' '}
                <span className='font-bold text-amber-300'>р. Альта</span>{' '}
                розгромили Ярославичів. Це призвело до повстання киян, які
                скинули Ізяслава, але потім він зумів відновити владу,
                звернувшись по допомогу до{' '}
                <span className='font-bold text-amber-300'>Польщі</span>.
              </p>
              <blockquote className='mt-4 p-4 bg-slate-600/40 rounded-lg italic border-l-2 border-amber-400'>
                «Прийшли іноплемінники на Руську землю, половці многі. А
                Ізяслав, і Святослав, і Всеволод вийшли супроти них на р. Альту.
                І коли настала ніч, рушили вони одні проти одних. ...і побігли
                руські князі, і перемогли половці...»
              </blockquote>
            </div>
          </div>

          {/* Правда Ярославичів */}
          <div className='p-6 bg-slate-800/40 rounded-xl border-l-4 border-emerald-400 backdrop-blur-sm'>
            <h3 className='text-2xl font-semibold mb-4 text-emerald-300'>
              Правда Ярославичів
            </h3>
            <p className='text-lg'>
              У <span className='font-bold text-emerald-300'>1072 р.</span>{' '}
              прийняли{' '}
              <span className='font-bold text-emerald-300'>
                "Правду Ярославичів"
              </span>{' '}
              - розділ, який доповнив{' '}
              <span className='font-bold text-emerald-300'>Руську правду</span>.
            </p>
          </div>
        </div>

        {/* Міжусобні війни - отдельная карточка */}
        <div className='p-6 bg-slate-800/40 rounded-xl border-l-4 border-rose-400 backdrop-blur-sm mb-12'>
          <h3 className='text-2xl font-semibold mb-4 text-rose-300'>
            Міжусобні війни <span className='text-lg'>(1073-1078 рр.)</span>
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <p className='text-lg mb-4'>
                З{' '}
                <span className='font-bold text-rose-300'>
                  1073 по 1078 рр.
                </span>{' '}
                тривали міжусобні війни між братами Ярославичами.
              </p>
              <p className='text-lg'>
                Головна причина чвар -{' '}
                <span className='font-bold text-rose-300'>
                  відсутність єдиної системи престолонаслідування
                </span>
                : князівський престол передавався від старшого брата до
                молодшого, або від батька до старшого сина.
              </p>
            </div>

            <div className='p-4 bg-slate-700/40 rounded-lg'>
              <blockquote className='italic border-l-2 border-rose-400 pl-4'>
                «...почав міжусобну війну{' '}
                <span className='font-bold text-rose-300'>Всеслав</span>, син{' '}
                <span className='font-bold text-rose-300'>Брячеслава</span>,
                полоцький і зайняв
                <span className='font-bold text-rose-300'> Новгород</span>. Троє
                Ярославичів –
                <span className='font-bold text-rose-300'> Ізяслав</span>,{' '}
                <span className='font-bold text-rose-300'>Святослав</span> і{' '}
                <span className='font-bold text-rose-300'>Всеволод</span>, –
                об'єднавши військо, пішли на Всеслава лютої зими...»
              </blockquote>
            </div>
          </div>
        </div>

        {/* Система престолонаследия */}
        <div className='p-6 bg-slate-800/40 rounded-xl border-l-4 border-violet-400 backdrop-blur-sm mb-12'>
          <h3 className='text-2xl font-semibold mb-4 text-violet-300'>
            Система престолонаслідування
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <p className='text-lg'>
                <span className='font-bold text-violet-300'>
                  Князівський престол
                </span>{' '}
                передавався від старшого брата до молодшого, або від батька до
                старшого сина.
              </p>
            </div>

            <div>
              <p className='text-lg'>
                Завдяки цій системі престолонаслідування на{' '}
                <span className='font-bold text-violet-300'>
                  Київському престолі
                </span>
                побували всі 3 сини Ярослава Мудрого.
              </p>
              <p className='text-lg mt-3'>
                Після смерті кожного з них правив син Ізяслава{' '}
                <span className='font-bold text-violet-300'>Святополк</span>,
                який князював з{' '}
                <span className='font-bold text-violet-300'>
                  1093 по 1113 рр
                </span>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Любецкий съезд */}
        <div className='mb-12'>
          <div className='text-center mb-8'>
            <h2 className='text-3xl sm:text-4xl font-bold text-amber-300 mb-4'>
              Любецький зʼїзд князів,{' '}
              <span className='text-emerald-300'>1097 р</span>
            </h2>
            <div className='w-64 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full'></div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='p-6 bg-slate-800/40 rounded-xl border-l-4 border-cyan-400 backdrop-blur-sm'>
              <h3 className='text-2xl font-semibold mb-4 text-cyan-300'>
                Чому його провели?
              </h3>
              <ul className='space-y-4'>
                <li className='flex items-start'>
                  <span className='text-cyan-400 mr-3 text-xl'>•</span>
                  <span className='text-lg'>
                    Потрібно було{' '}
                    <span className='font-bold text-cyan-300'>
                      припинити міжусобиці
                    </span>{' '}
                    між князями і{' '}
                    <span className='font-bold text-cyan-300'>об'єднатися</span>{' '}
                    у боротьбі з половцями
                  </span>
                </li>
                <li className='flex items-start'>
                  <span className='text-cyan-400 mr-3 text-xl'>•</span>
                  <span className='text-lg'>
                    Хотіли затвердити{' '}
                    <span className='font-bold text-cyan-300'>
                      поділ Київської держави
                    </span>{' '}
                    на окремі{' '}
                    <span className='font-bold text-cyan-300'>уділи</span>{' '}
                    (удільні князівства)
                  </span>
                </li>
              </ul>
            </div>

            <div className='p-6 bg-slate-800/40 rounded-xl border-l-4 border-emerald-400 backdrop-blur-sm'>
              <h3 className='text-2xl font-semibold mb-4 text-emerald-300'>
                Поняття <span className='text-amber-300'>вотчини</span>
              </h3>
              <p className='text-lg'>
                <span className='font-bold text-emerald-300'>Вотчина</span> - це
                спадкове землеволодіння, тобто коли земля передається від батька
                до сина і стає його приватною власністю.
              </p>
              <div className='mt-4 p-4 bg-slate-700/40 rounded-lg'>
                <p className='text-lg'>
                  Після з'їзду в Любечі, у випадку цілого князівства – воно
                  передавалося від князя до найстаршого сина. Наприклад,{' '}
                  <span className='font-bold text-emerald-300'>
                    чернігівський князь
                  </span>{' '}
                  не може претендувати, як раніше, на{' '}
                  <span className='font-bold text-emerald-300'>
                    Київський престол
                  </span>
                  , тепер його місто лише{' '}
                  <span className='font-bold text-emerald-300'>Чернігів</span>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Последствия */}
        <div className='mb-12'>
          <div className='text-center mb-8'>
            <h2 className='text-3xl sm:text-4xl font-bold text-emerald-300 mb-4'>
              Наслідки Любецького з'їзду
            </h2>
            <div className='w-64 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto rounded-full'></div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='p-6 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
              <h3 className='text-2xl font-semibold mb-4 text-amber-300'>
                Федеративна монархія
              </h3>
              <p className='text-lg'>
                Київська держава перетворилася на{' '}
                <span className='font-bold text-amber-300'>
                  федеративну монархію
                </span>{' '}
                – це коли в одній державі є багато окремих невеличких державних
                утворень.
              </p>
            </div>

            <div className='p-6 bg-slate-800/40 rounded-xl border-l-4 border-violet-400 backdrop-blur-sm'>
              <h3 className='text-2xl font-semibold mb-4 text-violet-300'>
                Адміністративний поділ
              </h3>
              <p className='text-lg'>
                Утвердився новий{' '}
                <span className='font-bold text-violet-300'>
                  адміністративно-територіальний поділ
                </span>{' '}
                Київської Русі на удільні князівства, кожне з яких було
                самостійним.
              </p>
              <div className='mt-4 p-4 bg-slate-700/40 rounded-lg'>
                <p className='text-sm italic'>
                  <span className='font-bold text-violet-300'>
                    Адміністративно-територіальний поділ
                  </span>{' '}
                  – це поділ країни на багато адміністративно-територіальних
                  одиниць.
                </p>
              </div>
            </div>

            <div className='p-6 bg-slate-800/40 rounded-xl border-l-4 border-cyan-400 backdrop-blur-sm'>
              <h3 className='text-2xl font-semibold mb-4 text-cyan-300'>
                Землеволодіння
              </h3>
              <p className='text-lg'>
                На заміну{' '}
                <span className='font-bold text-cyan-300'>
                  умовного землеволодіння
                </span>{' '}
                прийшло{' '}
                <span className='font-bold text-cyan-300'>вотчинне</span>.
              </p>
              <div className='mt-4 p-4 bg-slate-700/40 rounded-lg'>
                <p className='text-sm italic'>
                  <span className='font-bold text-cyan-300'>
                    Умовне землеволодіння
                  </span>{' '}
                  – це володіння землею за умови служінню князю (якщо ти служиш
                  – маєш землю, а якщо ні, то не маєш)
                </p>
              </div>
            </div>

            <div className='p-6 bg-slate-800/40 rounded-xl border-l-4 border-emerald-400 backdrop-blur-sm'>
              <h3 className='text-2xl font-semibold mb-4 text-emerald-300'>
                Об'єднання проти половців
              </h3>
              <p className='text-lg'>
                На деякий час, завдяки{' '}
                <span className='font-bold text-emerald-300'>
                  Володимиру Мономаху
                </span>
                , вдалося об'єднати усіх князів у боротьбі з{' '}
                <span className='font-bold text-emerald-300'>
                  половецькою загрозою
                </span>
                .
              </p>
              <p className='text-lg mt-4'>
                Започаткували традицію проведення{' '}
                <span className='font-bold text-emerald-300'>
                  з'їздів руських князів
                </span>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Цитата о съезде */}
        <div className='relative p-1 bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl mb-12'>
          <div className='bg-slate-900 rounded-2xl p-6'>
            <div className='flex items-start'>
              <div className='hidden md:flex mr-6'>
                <div className='w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center shadow-lg'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-8 w-8 text-amber-200'
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
                <h3 className='text-xl md:text-2xl font-semibold mb-4 text-amber-300'>
                  Цитата про Любецький з'їзд
                </h3>

                <blockquote className='text-lg md:text-xl text-amber-100 italic leading-relaxed p-4 bg-slate-800/40 rounded-lg'>
                  «Прибули{' '}
                  <span className='font-bold'>Святополк [Ізяславич]</span>, і{' '}
                  <span className='font-bold'>Володимир [Всеволодович]</span>, і{' '}
                  <span className='font-bold'>Давид Ігоревич</span>, і{' '}
                  <span className='font-bold'>Василько Ростиславич</span>, і{' '}
                  <span className='font-bold'>Давид Святославич</span>, і брат
                  його <span className='font-bold'>Олег</span> і зібралися [в
                  городі] <span className='font-bold'>Любечі</span>, щоб
                  уладнати мир. І говорили вони один одному, кажучи: "Пощо ми
                  губимо Руську землю, самі проти себе зваду маючи? А половці
                  землю нашу розносять і раді є, що межи нами війна донині.
                  Відтепер з'єднаймося в одне серце й обережімо Руську землю.
                  Кожен хай держить отчину свою... І на цім вони цілували
                  хреста. А якщо відтепер хто на кого встане, то проти того
                  будем ми всі і чесний хрест...".»
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Разделитель */}
      <div className='relative my-12 py-8 px-4 sm:px-6 lg:px-8'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-full border-t-2 border-amber-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-3 text-lg font-semibold text-amber-200 rounded-full border-2 border-amber-600/50 shadow-lg flex items-center space-x-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 text-amber-300'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
            <span>Наступна тема: Володимир Мономах</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 text-amber-300'
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
