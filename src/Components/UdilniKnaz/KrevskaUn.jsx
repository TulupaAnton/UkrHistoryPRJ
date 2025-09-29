export function KrevskaUn () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-4 sm:py-8 px-3 sm:px-6 lg:px-8 relative overflow-hidden font-six'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-red-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-amber-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-orange-600 rounded-full blur-3xl'></div>
      </div>

      {/* Заголовок страницы */}
      <div className='w-full max-w-6xl mx-auto text-center mb-8 sm:mb-12 relative z-10 px-2'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 font-six'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-red-400 to-red-500'>
            Кревська унія
          </span>
        </h1>
        <h2 className='text-xl sm:text-2xl lg:text-3xl text-red-300 font-bold mb-4 sm:mb-6 font-six'>
          <span className='text-2xl sm:text-3xl lg:text-4xl font-bold text-red-400'>
            1385
          </span>
        </h2>
        <div className='inline-block bg-red-800/40 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-red-600/50 mb-4 sm:mb-6'>
          <span className='text-red-200 font-medium text-base sm:text-xl font-six'>
            Спроба союзу проти Тевтонського ордену
          </span>
        </div>
        <div className='w-32 sm:w-48 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto rounded-full'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12 px-2'>
        {/* Основная информация */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <p className='text-base sm:text-lg leading-relaxed mb-4 font-six'>
            Після смерті Ольгерда князем Литовської держави стає князь{' '}
            <span className='font-bold text-red-300 text-lg sm:text-xl'>
              Ягайло
            </span>
            , який проголошує курс на укладення Кревської унії з Польщі
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
            <div className='p-3 sm:p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-base sm:text-lg leading-relaxed font-six'>
                <span className='font-bold text-red-300'>1.</span> Польща +
                Литва
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-base sm:text-lg leading-relaxed font-six'>
                <span className='font-bold text-red-300'>2.</span> Ягайло
                одружився з польською королевою{' '}
                <span className='font-bold text-red-300'>Ядвігою</span>
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-base sm:text-lg leading-relaxed font-six'>
                <span className='font-bold text-red-300'>3.</span> Ягайло ставав
                польським королем (залишаючись при цьому литовським князем){' '}
                <span className='font-bold text-red-300'>
                  Взяв ім'я Владислав ІІ
                </span>
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-base sm:text-lg leading-relaxed font-six'>
                <span className='font-bold text-red-300'>4.</span> У Литві та на
                українських землях посилився вплив польської шляхти
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400 md:col-span-2'>
              <p className='text-base sm:text-lg leading-relaxed font-six'>
                <span className='font-bold text-red-300'>5.</span> Католицька
                віра проголошувалася єдиною релігією
              </p>
            </div>
          </div>

          <div className='mt-6 p-4 bg-red-800/30 rounded-lg border-l-4 border-red-500'>
            <p className='text-base sm:text-lg leading-relaxed font-six'>
              <span className='font-bold text-red-300'>Як результат:</span>{' '}
              Викликала опір частини литовської, української та білоруської
              шляхти, яку очолив став князь{' '}
              <span className='font-bold text-red-300'>Вітовт Кейстутович</span>
            </p>
          </div>

          <div className='mt-4 p-3 bg-amber-900/30 rounded-lg'>
            <p className='text-base sm:text-lg leading-relaxed text-amber-200 font-six'>
              <span className='font-bold text-amber-300'>Унія</span> —
              об'єднання держав, міжнародний союз
            </p>
          </div>
        </div>

        {/* Плюсы и минусы */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
          <h1 className='text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-amber-300 font-six'>
            Плюси та мінуси
          </h1>

          <div className='space-y-6'>
            <div className='p-4 bg-green-900/20 rounded-lg border-l-4 border-green-400'>
              <div className='flex items-center mb-2'>
                <span className='text-2xl sm:text-3xl font-bold text-green-400 mr-3 font-six'>
                  +
                </span>
                <h3 className='text-lg sm:text-xl font-semibold text-green-300 font-six'>
                  Переваги
                </h3>
              </div>
              <p className='text-base sm:text-lg leading-relaxed font-six'>
                Розгром Тевтонського ордену{' '}
                <span className='font-bold text-green-300'>
                  у Грюнвальдській битві 1410 р
                </span>{' '}
                .( об'єднані литовсько-польськорусько-чеськоугорсько-татарські
                війська)
              </p>
            </div>

            <div className='p-4 bg-red-900/20 rounded-lg border-l-4 border-red-400'>
              <div className='flex items-center mb-2'>
                <span className='text-2xl sm:text-3xl font-bold text-red-400 mr-3 font-six'>
                  -
                </span>
                <h3 className='text-lg sm:text-xl font-semibold text-red-300 font-six'>
                  Недоліки
                </h3>
              </div>
              <p className='text-base sm:text-lg leading-relaxed font-six'>
                Посилювався вплив поляків в Україні, почалося насильницьке
                насадження католицтва
              </p>
            </div>

            <div className='p-4 bg-orange-900/20 rounded-lg border-l-4 border-orange-400'>
              <div className='flex items-center mb-2'>
                <span className='text-2xl sm:text-3xl font-bold text-orange-400 mr-3 font-six'>
                  !
                </span>
                <h3 className='text-lg sm:text-xl font-semibold text-orange-300 font-six'>
                  Важливо!
                </h3>
              </div>
              <p className='text-base sm:text-lg leading-relaxed font-six'>
                Протягом 1380–1390-х рр. відбувається ліквідація удільних
                князівств на українських землях. Замість них створюються
                литовські намісництва.
              </p>
            </div>
          </div>
        </div>

        {/* Цитаты */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-orange-400 backdrop-blur-sm'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-orange-300 text-center font-six'>
            Цитати:
          </h2>

          <div className='space-y-4 sm:space-y-6'>
            <div className='p-3 sm:p-4 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-base sm:text-lg leading-relaxed italic font-six'>
                «Почали ляхи слати з Кракова... аби прийняв хрещення старого
                Риму (вихрестився католиком), й узяв за дружину в них королівну
                Ядвігу, і став би в них королем у Кракові й на всій Лядській
                землі»
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-base sm:text-lg leading-relaxed italic font-six'>
                «...государ Ягайло, великий князь, з усіма своїми ще нехрещеними
                братами, ближніми, ...що проживають на його землях, жагуче бажає
                й просить прийняти їх у католицьку віру святої римської
                церкви... Нарешті, князь Ягайло обіцяє свої литовські й руські
                землі навік приєднати до королівства Польського»
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-base sm:text-lg leading-relaxed italic font-six'>
                «Магнати і шляхта змусили юну королеву [Ядвігу] в державних
                інтересах Польщі відмовитися від нареченого з австрійського дому
                і вийти заміж за литовського князя Ягайла...»
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Разделитель внизу */}
      <div className='relative mt-12 sm:mt-16 py-6 sm:py-8 px-3 sm:px-6 lg:px-8'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-full border-t-2 border-red-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold text-red-200 rounded-full border-2 border-red-600/50 shadow-lg text-center font-six'>
            Наступна тема: Правління Вітовта
          </span>
        </div>
      </div>
    </div>
  )
}
