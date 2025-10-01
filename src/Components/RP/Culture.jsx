export function Culture () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-4 sm:py-8 px-3 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-emerald-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-amber-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-yellow-600 rounded-full blur-3xl'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12 px-2'>
        {/* Главный заголовок */}
        <div className='w-full text-center mb-8 sm:mb-12 relative z-10 px-2'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-500'>
              Полемічна література
            </span>
          </h1>
          <div className='w-32 sm:w-48 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto rounded-full'></div>
        </div>

        {/* Определение полемической литературы */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-emerald-400 backdrop-blur-sm'>
          <p className='text-lg sm:text-xl leading-relaxed text-center'>
            Твори, у яких відображається релігійна дискусія між представниками
            православної та католицької церкви. Набула поширення на теренах
            України у 16 ст. у зв'язку з обговоренням унії двох церков
          </p>
        </div>

        {/* Герасим Смотрицький - горизонтальная компоновка */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
          <h1 className='text-2xl sm:text-3xl font-bold mb-6 text-amber-300 text-center'>
            Герасим Смотрицький
          </h1>

          <div className='flex flex-col lg:flex-row gap-4 sm:gap-6'>
            <div className='flex-1 p-4 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-amber-300'>
                  "Ключ до царства небесного..."
                </span>{' '}
                - перша друкована пам'ятка укр. полемічної літератури
              </p>
            </div>

            <div className='flex-1 p-4 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Готував до друку{' '}
                <span className='font-bold text-amber-300'>
                  Острозька Біблія (1581)
                </span>
              </p>
            </div>

            <div className='flex-1 p-4 bg-amber-900/20 rounded-lg border-l-2 border-amber-400 flex items-center justify-center'>
              <p className='text-base sm:text-lg leading-relaxed text-center'>
                Перший ректор{' '}
                <span className='font-bold text-amber-300'>
                  Острозької академії
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Мелетий Смотрицький - горизонтальная компоновка */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-yellow-400 backdrop-blur-sm'>
          <h1 className='text-2xl sm:text-3xl font-bold mb-6 text-yellow-300 text-center'>
            Мелетій Смотрицький
          </h1>

          <div className='flex flex-col lg:flex-row gap-4 sm:gap-6'>
            <div className='flex-1 p-4 bg-yellow-900/20 rounded-lg border-l-2 border-yellow-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-yellow-300'>
                  "Граматика словенська"
                </span>{' '}
                - фундаментальний твір, підручник церковнослов'янської мови
              </p>
            </div>

            <div className='flex-1 p-4 bg-yellow-900/20 rounded-lg border-l-2 border-yellow-400 flex items-center justify-center'>
              <p className='text-base sm:text-lg leading-relaxed text-center'>
                Ректор{' '}
                <span className='font-bold text-yellow-300'>
                  Київської Братської школи (1619)
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Иван Федоров - горизонтальная компоновка */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <h1 className='text-2xl sm:text-3xl font-bold mb-4 text-red-300 text-center'>
            Іван Федоров
          </h1>
          <div className='text-center mb-6'>
            <span className='text-lg font-bold text-red-400 bg-red-900/30 px-3 py-1 rounded-full'>
              Важлива постать
            </span>
          </div>

          <div className='flex flex-col lg:flex-row gap-4 sm:gap-6 mb-6'>
            <div className='flex-1 p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Першодрукар та книговидавець (Львів)
              </p>
            </div>

            <div className='flex-1 p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-red-300'>"Буквар"</span> -
                перший український друкований підручник
              </p>
            </div>

            <div className='flex-1 p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-red-300'>Острозька Біблія</span>{' '}
                - перше повне друковане видання Біблії церковнослов'янською
                мовою
              </p>
            </div>
          </div>

          {/* Апостол с большим изображением */}
          <div className='p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
            <p className='text-base sm:text-lg leading-relaxed mb-4 text-center'>
              <span className='font-bold text-red-300'>"Апостол"</span> – перша
              друкована книга в Україні{' '}
              <span className='font-bold text-red-300'>(1574)</span>
            </p>
            <div className='p-4 bg-slate-700/30 rounded-lg border border-red-400/30'>
              <p className='text-lg text-red-300 mb-4 text-center'>
                Євангеліст Лука: гравюра з львівського "Апостола" 1574
              </p>
              <div className='w-full max-w-2xl mx-auto'>
                <img
                  src='../../../assets/RP/Apostol.jpg'
                  alt='Євангеліст Лука з "Апостола" 1574'
                  className='w-full h-auto max-h-96 object-contain rounded-lg border-2 border-red-400/50 shadow-lg'
                />
              </div>
            </div>
          </div>
        </div>

        {/* Пересопницкое Евангелие - горизонтальная компоновка */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-purple-400 backdrop-blur-sm'>
          <h1 className='text-2xl sm:text-3xl font-bold mb-4 text-purple-300 text-center'>
            Пересопницьке Євангеліє
          </h1>
          <div className='text-center mb-6'>
            <span className='text-xl font-bold text-purple-400 bg-purple-900/30 px-4 py-2 rounded-full'>
              1556-1561 рр.
            </span>
          </div>

          <div className='flex flex-col lg:flex-row gap-6 sm:gap-8 items-start'>
            <div className='flex-1 space-y-4'>
              <div className='p-4 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
                <p className='text-base sm:text-lg leading-relaxed'>
                  Перший переклад Святого Письма староукраїнською літературною
                  мовою. Рукописна пам'ятка
                </p>
              </div>

              <div className='p-4 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
                <p className='text-base sm:text-lg leading-relaxed'>
                  На цій книзі президенти присягають на інавгурації
                </p>
              </div>
            </div>

            {/* Большое изображение Евангелия */}
            <div className='flex-1'>
              <div className='p-4 bg-slate-700/30 rounded-lg border-2 border-purple-400/30'>
                <p className='text-purple-300 text-center text-lg mb-4'>
                  Мініатюра Пересопницького Євангелія - Євангеліст Лука
                </p>
                <div className='w-full'>
                  <img
                    src='../../../assets/RP/Risunok.jpg'
                    alt='Мініатюра Пересопницького Євангелія - Євангеліст Лука'
                    className='w-full h-auto max-h-80 object-contain rounded-lg border-2 border-purple-400/50 shadow-lg'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Разделитель внизу */}
    </div>
  )
}
