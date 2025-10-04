export function Dershava () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-4 sm:py-8 px-3 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-amber-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-yellow-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-orange-600 rounded-full blur-3xl'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12 px-2'>
        {/* Главный заголовок */}
        <div className='w-full text-center mb-8 sm:mb-12 relative z-10 px-2'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500'>
              Українська козацька держава
            </span>
          </h1>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl text-yellow-300 font-bold mb-4 sm:mb-6'>
            1649-1764 роки
          </h2>
          <div className='w-32 sm:w-48 h-1 bg-gradient-to-r from-amber-400 to-orange-600 mx-auto rounded-full'></div>
        </div>

        {/* Основная информация о государстве */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-amber-300 text-center'>
            🏛️ Основні відомості про державу
          </h1>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8'>
            <div className='space-y-6'>
              {/* Назва держави */}
              <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
                <h3 className='text-xl sm:text-2xl font-bold text-amber-300 mb-3'>
                  📝 Назва держави
                </h3>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  Держава Війська Запорозького
                  <span className='block mt-2 font-bold text-amber-300 bg-amber-900/40 px-3 py-2 rounded text-lg sm:text-xl'>
                    ГЕТЬМАНЩИНА — напівофіційна назва
                  </span>
                </p>
              </div>

              {/* Столиця */}
              <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
                <h3 className='text-xl sm:text-2xl font-bold text-amber-300 mb-3'>
                  🏰 Столиця
                </h3>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  <span className='font-bold text-amber-300 text-2xl sm:text-3xl'>
                    м. Чигирин
                  </span>
                </p>
              </div>
            </div>

            <div className='space-y-6'>
              {/* Територія */}
              <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
                <h3 className='text-xl sm:text-2xl font-bold text-amber-300 mb-3'>
                  🗺️ Територія
                </h3>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  <span className='font-bold text-amber-300'>
                    Київщина, Брацлавщина, Чернігівщина
                  </span>
                </p>
              </div>

              {/* Форма правління */}
              <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
                <h3 className='text-xl sm:text-2xl font-bold text-amber-300 mb-3'>
                  ⚖️ Форма державного правління
                </h3>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  Держава Війська Запорозького була{' '}
                  <span className='font-bold text-amber-300'>
                    різновидом республіки
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Административно-территориальное устройство */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-yellow-400 backdrop-blur-sm'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-yellow-300 text-center'>
            🗂️ Адміністративно-територіальний устрій
          </h1>

          <div className='p-4 sm:p-6 bg-yellow-900/20 rounded-lg border-l-2 border-yellow-400'>
            <p className='text-xl sm:text-2xl leading-relaxed'>
              Територія держави поділялася на{' '}
              <span className='font-bold text-yellow-300 text-2xl sm:text-3xl bg-yellow-900/40 px-3 py-2 rounded'>
                16 полків
              </span>{' '}
              на чолі з полковниками. Полки ділилися на{' '}
              <span className='font-bold text-yellow-300 text-2xl sm:text-3xl bg-yellow-900/40 px-3 py-2 rounded'>
                сотні
              </span>
              . У межах полків чи сотень вся адміністративна, військова та
              судова влада належала полковникам та сотникам
            </p>
          </div>

          {/* Схема устройства */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-6'>
            <div className='p-4 sm:p-6 bg-yellow-900/20 rounded-lg text-center'>
              <p className='text-2xl sm:text-3xl font-bold text-yellow-300 mb-3'>
                🎯 Держава
              </p>
              <p className='text-xl sm:text-2xl'>Військо Запорозьке</p>
            </div>
            <div className='p-4 sm:p-6 bg-yellow-900/20 rounded-lg text-center'>
              <p className='text-2xl sm:text-3xl font-bold text-yellow-300 mb-3'>
                ⚔️ Полки
              </p>
              <p className='text-xl sm:text-2xl'>16 полків</p>
            </div>
            <div className='p-4 sm:p-6 bg-yellow-900/20 rounded-lg text-center'>
              <p className='text-2xl sm:text-3xl font-bold text-yellow-300 mb-3'>
                👥 Сотні
              </p>
              <p className='text-xl sm:text-2xl'>Сотенні устрої</p>
            </div>
          </div>
        </div>

        {/* Историческое значение */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-amber-300 text-center'>
            🎯 Історичне значення
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
            <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg'>
              <p className='text-xl sm:text-2xl font-semibold text-amber-300 mb-4 text-center'>
                🏛️ Перша українська держава
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Перша українська держава після Київської Русі
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg'>
              <p className='text-xl sm:text-2xl font-semibold text-amber-300 mb-4 text-center'>
                ⚔️ Військова організація
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Унікальна військово-адміністративна система
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg'>
              <p className='text-xl sm:text-2xl font-semibold text-amber-300 mb-4 text-center'>
                📜 Республіканські традиції
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Започаткування республіканських традицій
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg'>
              <p className='text-xl sm:text-2xl font-semibold text-amber-300 mb-4 text-center'>
                🌍 Міжнародне визнання
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Визнання на міжнародній арені
              </p>
            </div>
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
            Білоцерківський договір
          </span>
        </div>
      </div>
    </div>
  )
}
