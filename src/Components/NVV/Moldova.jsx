export function Moldova () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-4 sm:py-8 px-3 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-green-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-emerald-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-teal-600 rounded-full blur-3xl'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12 px-2'>
        {/* Главный заголовок */}
        <div className='w-full text-center mb-8 sm:mb-12 relative z-10 px-2'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-emerald-400 to-teal-500'>
              Молдавські походи козаків
            </span>
          </h1>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl text-emerald-300 font-bold mb-4 sm:mb-6'>
            1650–1653 роки
          </h2>
          <div className='w-32 sm:w-48 h-1 bg-gradient-to-r from-green-400 to-teal-600 mx-auto rounded-full'></div>
        </div>

        {/* Походы */}
        <div className='space-y-6 sm:space-y-8'>
          {/* I похід */}
          <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-green-400 backdrop-blur-sm'>
            <div className='flex items-center gap-4 mb-4'>
              <span className='text-2xl sm:text-3xl font-bold bg-green-900/60 text-green-200 px-4 py-2 rounded-full'>
                I похід
              </span>
              <span className='text-xl sm:text-2xl text-green-300 font-semibold'>
                серпень-вересень 1650 р.
              </span>
            </div>
            <div className='p-4 sm:p-6 bg-green-900/20 rounded-lg border-l-2 border-green-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Українська армія під командуванням{' '}
                <span className='font-bold text-green-300'>
                  Б. Хмельницького
                </span>{' '}
                й загони кримських татар захопили столицю Молдови{' '}
                <span className='font-bold text-green-300'>Ясси</span>. Князь{' '}
                <span className='font-bold text-green-300'>В. Лупул</span>{' '}
                відмовився від союзу з Польщею, уклав союз із Б. Хмельницьким і
                зобов'язався видати свою дочку{' '}
                <span className='font-bold text-green-300'>Розанду</span> за{' '}
                <span className='font-bold text-green-300'>
                  Тимоша Хмельницького
                </span>
                . Після битви під Берестечком (1651 р.) Лупул відмовився від
                своїх зобов'язань. Проте перемога під Батогом змінила відносини
                між державами.
              </p>
            </div>
          </div>

          {/* II похід */}
          <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-emerald-400 backdrop-blur-sm'>
            <div className='flex items-center gap-4 mb-4'>
              <span className='text-2xl sm:text-3xl font-bold bg-emerald-900/60 text-emerald-200 px-4 py-2 rounded-full'>
                II похід
              </span>
              <span className='text-xl sm:text-2xl text-emerald-300 font-semibold'>
                липень-серпень 1652 р.
              </span>
            </div>
            <div className='p-4 sm:p-6 bg-emerald-900/20 rounded-lg border-l-2 border-emerald-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Українсько-молдовський союз поновлено, відбулося весілля{' '}
                <span className='font-bold text-emerald-300'>
                  Розанди і Тимоша Хмельницького
                </span>
                .
              </p>
            </div>
          </div>

          {/* III похід */}
          <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-teal-400 backdrop-blur-sm'>
            <div className='flex items-center gap-4 mb-4'>
              <span className='text-2xl sm:text-3xl font-bold bg-teal-900/60 text-teal-200 px-4 py-2 rounded-full'>
                III похід
              </span>
              <span className='text-xl sm:text-2xl text-teal-300 font-semibold'>
                квітень-травень 1653 р.
              </span>
            </div>
            <div className='p-4 sm:p-6 bg-teal-900/20 rounded-lg border-l-2 border-teal-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Козацьке військо під командуванням{' '}
                <span className='font-bold text-teal-300'>
                  Т. Хмельницького
                </span>{' '}
                повернуло владу{' '}
                <span className='font-bold text-teal-300'>В. Лупулові</span>.
                Але козаки, бажаючи закріпити успіх, розгорнули наступ на
                Валахію, який завершився поразкою.
              </p>
            </div>
          </div>

          {/* IV похід */}
          <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-cyan-400 backdrop-blur-sm'>
            <div className='flex items-center gap-4 mb-4'>
              <span className='text-2xl sm:text-3xl font-bold bg-cyan-900/60 text-cyan-200 px-4 py-2 rounded-full'>
                IV похід
              </span>
              <span className='text-xl sm:text-2xl text-cyan-300 font-semibold'>
                серпень-вересень 1653 р.
              </span>
            </div>
            <div className='p-4 sm:p-6 bg-cyan-900/20 rounded-lg border-l-2 border-cyan-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Останній похід{' '}
                <span className='font-bold text-cyan-300'>
                  Т. Хмельницького
                </span>{' '}
                на Молдову. Під{' '}
                <span className='font-bold text-cyan-300'>Сучавою</span> козаки
                потрапили в оточення,{' '}
                <span className='font-bold text-cyan-300'>
                  Тиміш Хмельницький
                </span>{' '}
                був смертельно поранений і помер за декілька днів.
              </p>
            </div>
          </div>
        </div>

        {/* Итоги */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 text-red-300 text-center'>
            📊 Підсумки молдавської політики
          </h2>
          <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
            <p className='text-xl sm:text-2xl leading-relaxed font-bold text-red-300'>
              Молдовська політика Б. Хмельницького не дала бажаних результатів:
              Молдова не стала надійним союзником; утворилася антиукраїнська
              коаліція; Б. Хмельницький утратив сина - ймовірного наступника
            </p>
          </div>
        </div>

        {/* Цитаты */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-amber-300 text-center'>
            💬 Історичні цитати
          </h2>

          <div className='space-y-6'>
            <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg border-l-4 border-amber-400'>
              <p className='text-xl sm:text-2xl leading-relaxed italic text-amber-200'>
                «Через рік після перемоги під Берестечком повністю загинуло
                польське військо... Того ж року господарю Василю довелося
                влаштувати весілля своєї доньки Розанди з Тимошем, сином
                козацького гетьмана Хмеля...»
                <span className='block mt-3 font-bold text-amber-300 text-lg sm:text-xl'>
                  1652 рік
                </span>
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg border-l-4 border-amber-400'>
              <p className='text-xl sm:text-2xl leading-relaxed italic text-amber-200'>
                «Вельможний і милостивий молдавський господарю... Ті добрі
                відносини, що між нами були, і тепер трохи зіпсовано, треба ще
                більше зміцнити... Що наш син загинув... то цього не можна
                повернути... Як і раніше, віритимемо один одному»
                <span className='block mt-3 font-bold text-amber-300 text-lg sm:text-xl'>
                  Богдан Хмельницький, гетьман Війська Запорозького, 1653 рік
                </span>
              </p>
            </div>
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
            Відносини між Державою Війська Запорозького та Московським царством
          </span>
        </div>
      </div>
    </div>
  )
}
