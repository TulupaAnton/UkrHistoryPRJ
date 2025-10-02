export function KozakCamp () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-4 sm:py-8 px-3 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-green-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-blue-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-emerald-600 rounded-full blur-3xl'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12 px-2'>
        {/* Главный заголовок */}
        <div className='w-full text-center mb-8 sm:mb-12 relative z-10 px-2'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-emerald-400 to-green-500'>
              Козацькі походи проти Османської імперії
            </span>
          </h1>
          <div className='w-32 sm:w-48 h-1 bg-gradient-to-r from-green-400 to-emerald-600 mx-auto rounded-full'></div>
        </div>

        {/* Причины походов */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-green-400 backdrop-blur-sm'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-green-300 text-center'>
            Причини походів
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-6'>
            <div className='space-y-4'>
              <div className='p-4 sm:p-6 bg-green-900/20 rounded-lg border-l-2 border-green-400'>
                <ul className='space-y-4 text-xl sm:text-2xl'>
                  <li className='flex items-start'>
                    <div className='w-3 h-3 bg-green-400 rounded-full mr-4 mt-2'></div>
                    <span>
                      Попередження татарських набігів на українські землі
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-3 h-3 bg-green-400 rounded-full mr-4 mt-2'></div>
                    <span>Перенесення бойових дій на територію ворога</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className='space-y-4'>
              <div className='p-4 sm:p-6 bg-green-900/20 rounded-lg border-l-2 border-green-400'>
                <ul className='space-y-4 text-xl sm:text-2xl'>
                  <li className='flex items-start'>
                    <div className='w-3 h-3 bg-emerald-400 rounded-full mr-4 mt-2'></div>
                    <span>Отримання багатої здобичі</span>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-3 h-3 bg-emerald-400 rounded-full mr-4 mt-2'></div>
                    <span>Визволення християнських бранців</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Основные события */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-blue-400 backdrop-blur-sm'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-8 text-blue-300 text-center'>
            Основні події
          </h1>

          <div className='space-y-6 sm:space-y-8'>
            <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                <span className='font-bold text-blue-300 text-2xl sm:text-3xl'>
                  1600 р.
                </span>{' '}
                – Перший великий похід до турецьких володінь. Напали на порт
                Варна, здобули 10 тис. турецьких галер. Визволили полонених,
                взяли здобич 180 тис. золотих
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                <span className='font-bold text-blue-300 text-2xl sm:text-3xl'>
                  1606 р.
                </span>{' '}
                – Напад на три найміцніші турецькі фортеці – Акерман, Кілія,
                Варна. Султан наказав перетнути Дніпро залізним ланцюгом.
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                <span className='font-bold text-blue-300 text-2xl sm:text-3xl'>
                  1608 р.
                </span>{' '}
                – Запорожці здобули Перекоп
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                <span className='font-bold text-blue-300 text-2xl sm:text-3xl'>
                  1614 р.
                </span>{' '}
                – Флотиля козацьких чайок перетнула Чорне море, здобули
                Трапезунд та Синоп
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                <span className='font-bold text-blue-300 text-2xl sm:text-3xl'>
                  1615 р.
                </span>{' '}
                – 80 чайок вчинили напад на околиці Стамбула
              </p>
            </div>

            {/* Важное событие */}
            <div className='p-4 sm:p-6 bg-amber-900/30 rounded-lg border-l-4 border-amber-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                <span className='font-bold text-amber-300 text-2xl sm:text-3xl'>
                  Важливо:
                </span>{' '}
                <span className='font-bold text-amber-300 text-2xl sm:text-3xl'>
                  1616 р.
                </span>{' '}
                – Козаки під проводом П.Сагайдачного розбили турецький флот під
                Очоковим та здобули Кафу
              </p>
            </div>
          </div>
        </div>

        {/* Результаты походов */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-emerald-400 backdrop-blur-sm'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-8 text-emerald-300 text-center'>
            Результати походів
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
            <div className='space-y-6'>
              <div className='p-4 sm:p-6 bg-emerald-900/20 rounded-lg border-l-2 border-emerald-400'>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  За сприяння Речі Посполитої створено Дніпровську флотилію.
                </p>
              </div>

              <div className='p-4 sm:p-6 bg-emerald-900/20 rounded-lg border-l-2 border-emerald-400'>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  Європейські країни, Московія навіть антитурецькі сили
                  Кримського ханства запрошували козаків до спільних дій проти
                  Османської імперії.
                </p>
              </div>
            </div>

            <div className='space-y-6'>
              <div className='p-4 sm:p-6 bg-emerald-900/20 rounded-lg border-l-2 border-emerald-400'>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  Навколо козацтва утворився ореол захисників християн від
                  турецького поневолення, тому з&apos;являються вимоги визнати
                  козаків окремим станом прирівняти їх до шляхти як «лицарських
                  людей»
                </p>
              </div>

              <div className='p-4 sm:p-6 bg-emerald-900/20 rounded-lg border-l-2 border-emerald-400'>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  Загострилися взаємини між Польщею та Туреччиною, що призвело
                  до Хотинської війни.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Историческое значение */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-green-400 backdrop-blur-sm'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-8 text-green-300 text-center'>
            🎯 Історичне значення
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
            <div className='p-6 bg-green-900/20 rounded-lg'>
              <p className='text-2xl sm:text-3xl font-semibold text-green-300 mb-4 text-center'>
                🛡️ Військова могутність
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Козацькі походи продемонстрували могутність українського війська
                та здатність протистояти Османській імперії
              </p>
            </div>

            <div className='p-6 bg-green-900/20 rounded-lg'>
              <p className='text-2xl sm:text-3xl font-semibold text-green-300 mb-4 text-center'>
                🌍 Міжнародне визнання
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Козацтво отримало визнання як серйозна військова сила в Європі
                та Османській імперії
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
            Козацька слава
          </span>
        </div>
      </div>
    </div>
  )
}
