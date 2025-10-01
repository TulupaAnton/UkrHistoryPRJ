export function Lublinska2 () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-4 sm:py-8 px-3 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-blue-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-purple-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-indigo-600 rounded-full blur-3xl'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12 px-2'>
        {/* Главный заголовок */}
        <div className='w-full text-center mb-8 sm:mb-12 relative z-10 px-2'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500'>
              Люблінська унія
            </span>
          </h1>
          <div className='text-xl sm:text-2xl lg:text-3xl text-blue-300 font-bold mb-4'>
            <span className='text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400'>
              1569р.
            </span>
          </div>
          <div className='w-32 sm:w-48 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full'></div>
        </div>

        {/* Объединение государств */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-blue-400 backdrop-blur-sm'>
          <div className='text-center mb-6'>
            <h2 className='text-2xl sm:text-3xl font-bold text-blue-300 mb-4'>
              ВКЛ + Польске королівство = Річ Посполита
            </h2>
            <p className='text-lg sm:text-xl text-red-300 italic'>
              (*Майже всі українські землі, за винятком Берестейщини, відходили
              під владу Польщі)
            </p>
          </div>
        </div>

        {/* Причины унии */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-purple-400 backdrop-blur-sm'>
          <h1 className='text-2xl sm:text-3xl font-bold mb-6 text-purple-300 text-center'>
            Причини:
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6'>
            <div className='p-4 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
              <h3 className='text-lg font-semibold text-purple-300 mb-3'>
                ВКЛ:
              </h3>
              <ul className='space-y-2 text-base sm:text-lg'>
                <li className='flex items-start'>
                  <div className='w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2'></div>
                  Лівонська війна, пошук союзника проти Московії
                </li>
              </ul>
            </div>

            <div className='p-4 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
              <h3 className='text-lg font-semibold text-purple-300 mb-3'>
                Польща:
              </h3>
              <ul className='space-y-2 text-base sm:text-lg'>
                <li className='flex items-start'>
                  <div className='w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2'></div>
                  Розширення своїх володінь
                </li>
                <li className='flex items-start'>
                  <div className='w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2'></div>
                  Вільні землі
                </li>
              </ul>
            </div>

            <div className='p-4 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
              <h3 className='text-lg font-semibold text-purple-300 mb-3'>
                Укр. шляхта:
              </h3>
              <ul className='space-y-2 text-base sm:text-lg'>
                <li className='flex items-start'>
                  <div className='w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2'></div>
                  Станові привілеї для шляхти
                </li>
                <li className='flex items-start'>
                  <div className='w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2'></div>
                  Ефективна оборона проти татар
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Содержание унии */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-indigo-400 backdrop-blur-sm'>
          <h1 className='text-2xl sm:text-3xl font-bold mb-6 text-indigo-300 text-center'>
            Зміст унії:
          </h1>

          <div className='space-y-4 sm:space-y-6'>
            <div className='p-4 bg-indigo-900/20 rounded-lg border-l-2 border-indigo-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Польща та ВКЛ об'єдналися в єдину федеративну державу - Річ
                Посполиту, очолювану королем, який залежав від рішень парламенту{' '}
                <span className='font-bold text-indigo-300'>сейм</span>, де
                обговорювалися найважливіші державні питання.
              </p>
            </div>

            <div className='p-4 bg-indigo-900/20 rounded-lg border-l-2 border-indigo-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Шляхта мала право не підпорядковуватися владі короля і навіть
                чинити збройний опір -{' '}
                <span className='font-bold text-indigo-300'>рокош</span>
              </p>
            </div>

            <div className='p-4 bg-indigo-900/20 rounded-lg border-l-2 border-indigo-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Запроваджена єдина грошова одиниця
              </p>
            </div>

            <div className='p-4 bg-indigo-900/20 rounded-lg border-l-2 border-indigo-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Польська шляхта отримала право на землеволодіння в Литві, а
                литовці у Польщі
              </p>
            </div>

            <div className='p-4 bg-indigo-900/20 rounded-lg border-l-2 border-indigo-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Ліквідовано митні кордони
              </p>
            </div>

            <div className='p-4 bg-indigo-900/20 rounded-lg border-l-2 border-indigo-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                ВКЛ зберегла певну автономію: власні закони, судову систему,
                військову, уряд то адміністрацію, офіційну руську мову.
              </p>
            </div>
          </div>
        </div>

        {/* Последствия для украинских земель */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <h1 className='text-2xl sm:text-3xl font-bold mb-6 text-red-300 text-center'>
            Наслідки для українських земель:
          </h1>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8'>
            <div className='space-y-4'>
              <div className='p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
                <p className='text-base sm:text-lg leading-relaxed'>
                  Більшість українських земель об'єднано в межах однієї держави
                  (6 воєводств)
                </p>
              </div>

              <div className='p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
                <p className='text-base sm:text-lg leading-relaxed'>
                  Міграційні процеси, зростання кількості населення
                </p>
              </div>

              <div className='p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
                <p className='text-base sm:text-lg leading-relaxed'>
                  Виникнення великих маєтків польської шляхти, закріпачення,
                  зростання гноблення
                </p>
              </div>
            </div>

            <div className='space-y-4'>
              <div className='p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
                <p className='text-base sm:text-lg leading-relaxed'>
                  Початок полонізації — денаціоналізації верхівки, втрата
                  українським суспільством політичної еліти
                </p>
              </div>

              <div className='p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
                <p className='text-base sm:text-lg leading-relaxed'>
                  Національні та релігійні утиски
                </p>
              </div>

              <div className='p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
                <p className='text-base sm:text-lg leading-relaxed'>
                  Західноєвропейський культурний вплив, розвиток освіти
                </p>
              </div>
            </div>
          </div>

          {/* Изображение воєводств */}
          <div className='mt-6 p-4 bg-slate-700/30 rounded-lg border-2 border-blue-400/30 flex flex-col items-center justify-center min-h-[200px]'>
            <p className='text-blue-300 text-center text-xl'>
              6 воєводств українських земель
            </p>
            <p className='text-gray-400 text-xs text-center mt-2'>
              <img src='../../../assets/RP/6.png' alt='' />
            </p>
          </div>
        </div>
      </div>

      {/* Разделитель внизу */}
      <div className='relative mt-12 sm:mt-16 py-6 sm:py-8 px-3 sm:px-6 lg:px-8'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-full border-t-2 border-blue-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold text-blue-200 rounded-full border-2 border-blue-600/50 shadow-lg text-center'>
            Берестейская унія
          </span>
        </div>
      </div>
    </div>
  )
}
