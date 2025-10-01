export function Kozak1 () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 mt-15 via-slate-800 to-slate-900 text-gray-100 py-4 sm:py-8 px-3 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-red-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-amber-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-orange-600 rounded-full blur-3xl'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12 px-2'>
        {/* Главный заголовок */}
        <div className='w-full text-center mb-8 sm:mb-12 relative z-10 px-2'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-red-400 to-red-500'>
              Українські землі у складі Речі Посполитої в другій половині XVI ст
            </span>
          </h1>
          <div className='w-32 sm:w-48 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto rounded-full'></div>
        </div>

        {/* Козацтво - основное определение */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <h1 className='text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-red-300 text-center'>
            Козак - вільна озброєна людина
            <span className='text-xl sm:text-2xl text-amber-300 block mt-2'>
              Перша згадка(1489 р.)
            </span>
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8'>
            {/* Хто становив козацтво */}
            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <h1 className='text-xl sm:text-2xl font-semibold mb-4 text-red-300'>
                Хто?
              </h1>
              <ul className='space-y-3 text-base sm:text-lg'>
                <li className='flex items-center'>
                  <div className='w-2 h-2 bg-red-400 rounded-full mr-3'></div>
                  Селяни втікачі
                </li>
                <li className='flex items-center'>
                  <div className='w-2 h-2 bg-red-400 rounded-full mr-3'></div>
                  Збідніла шляхта
                </li>
                <li className='flex items-center'>
                  <div className='w-2 h-2 bg-red-400 rounded-full mr-3'></div>
                  Уходники
                </li>
                <li className='flex items-center'>
                  <div className='w-2 h-2 bg-red-400 rounded-full mr-3'></div>
                  Різні категорії служилих людей
                </li>
              </ul>
            </div>

            {/* Причины формирования */}
            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <h1 className='text-xl sm:text-2xl font-semibold mb-4 text-red-300'>
                Причини формування:
              </h1>
              <ul className='space-y-3 text-base sm:text-lg'>
                <li className='flex items-center'>
                  <div className='w-2 h-2 bg-amber-400 rounded-full mr-3'></div>
                  Економічні
                </li>
                <li className='flex items-center'>
                  <div className='w-2 h-2 bg-amber-400 rounded-full mr-3'></div>
                  Соціальні
                </li>
                <li className='flex items-center'>
                  <div className='w-2 h-2 bg-amber-400 rounded-full mr-3'></div>
                  Національно-релігійні
                </li>
              </ul>
            </div>
          </div>

          {/* Определение козацтва */}
          <div className='mt-6 p-4 bg-slate-700/40 rounded-lg border-l-4 border-amber-400'>
            <p className='text-lg sm:text-xl text-center'>
              <span className='font-bold text-amber-300'>Козацтво</span> -
              соціальний стан воїнів-землеробів
            </p>
          </div>
        </div>

        {/* Первая Запорожская Сечь */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
          <h1 className='text-2xl sm:text-3xl font-bold mb-6 text-amber-300 text-center'>
            Перша Запорозька Січ
          </h1>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start'>
            <div className='space-y-4'>
              <div className='p-4 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
                <p className='text-base sm:text-lg leading-relaxed'>
                  Перша Запорозька Січ заснована{' '}
                  <span className='font-bold text-amber-300'>
                    Дмитром Вишневецьким(Байда)
                  </span>{' '}
                  на острові Мала Хортиця (Запоріжжя) у{' '}
                  <span className='font-bold text-amber-300'>1556 р.</span>
                </p>
              </div>

              {/* Запорожская Сечь определение */}
              <div className='p-4 bg-slate-700/40 rounded-lg border-l-2 border-blue-400'>
                <p className='text-base sm:text-lg leading-relaxed'>
                  <span className='font-bold text-blue-300'>
                    Запорозька Січ
                  </span>{' '}
                  - назва територій степової України, де формувався особливий
                  козацький військовоадміністративний устрій; назва
                  містафортеці, військової бази, столиці; назва козацької
                  держави{' '}
                  <span className='font-bold text-blue-300'>
                    Землі/Вольності Війська Запорозького (Низового)
                  </span>
                </p>
              </div>
            </div>

            {/* Изображение */}
            <div className='p-4 bg-slate-700/30 rounded-lg border-2 border-amber-400/30 flex flex-col items-center justify-center min-h-[200px]'>
              <p className='text-amber-300 text-center text-xl'>
                Дмитро (Байда) Вишневецький
              </p>
              <p className='text-gray-400 text-xs text-center mt-2'>
                <img src='../../../assets/RP/bayda.jpg' alt='' />
              </p>
            </div>
          </div>
        </div>

        {/* Термины и определения */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-orange-400 backdrop-blur-sm'>
          <h1 className='text-2xl sm:text-3xl font-bold mb-6 text-orange-300 text-center'>
            Козацькі терміни та визначення
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
            <div className='p-4 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-base sm:text-lg'>
                <span className='font-bold text-orange-300'>
                  Кошовий Отаман
                </span>{' '}
                - представник виборної козацької старшини, який зосереджував у
                своїх руках найвищу військову, адміністративну і судову владу,
                очолював Кіш Запорозької Січі
              </p>
            </div>

            <div className='p-4 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-base sm:text-lg'>
                <span className='font-bold text-orange-300'>Старшина</span> -
                привілейована частина укр. козацтва, його керівний склад.
              </p>
            </div>

            <div className='p-4 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-base sm:text-lg'>
                <span className='font-bold text-orange-300'>Гетьман</span> -
                посада заснована після Люблінської унії в РП для управління
                регіонами (королівські намісники). Від Б.Хмельницького - титул
                глави української козацької держави
              </p>
            </div>

            <div className='p-4 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-base sm:text-lg'>
                <span className='font-bold text-orange-300'>Клейноди</span> -
                символи-відзнаки козацтва (корогва, бунчук, булава та печатка з
                гербом тощо)
              </p>
            </div>
          </div>
        </div>

        {/* Реестровое казачество */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <h1 className='text-2xl sm:text-3xl font-bold mb-6 text-red-300 text-center'>
            Реєстрове козацтво
          </h1>

          <div className='space-y-6'>
            <div className='p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-base sm:text-lg'>
                <span className='font-bold text-red-300'>
                  Реєстрове козацтво
                </span>{' '}
                - привілейована частина українських козаків, що їх польський
                уряд взяв на військову службу і записав до спеціального Реєстру.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='p-4 bg-slate-700/40 rounded-lg border-l-2 border-amber-400'>
                <p className='text-base sm:text-lg'>
                  <span className='font-bold text-amber-300'>1572 р.</span>{' '}
                  польський король Сигізмунд ІІ Август видав універсал, за яким
                  на службу було взято{' '}
                  <span className='font-bold text-amber-300'>300 козаків</span>
                </p>
              </div>

              <div className='p-4 bg-slate-700/40 rounded-lg border-l-2 border-amber-400'>
                <p className='text-base sm:text-lg'>
                  <span className='font-bold text-amber-300'>1578 р.</span>{' '}
                  універсал польського короля Стефана Баторія, за яким
                  <span className='font-bold text-amber-300'> 600 козаків</span>
                  , найнятих на службу, внесли до спеціального списку - реєстру
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Типы казачества */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-blue-400 backdrop-blur-sm'>
          <h1 className='text-2xl sm:text-3xl font-bold mb-6 text-blue-300 text-center'>
            Типи козацтва
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='p-4 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
              <p className='text-base sm:text-lg'>
                <span className='font-bold text-blue-300'>Низове козацтво</span>{' '}
                - нереєстрове, що освоїло територію низинних берегів Дніпра
                нижче порогів
              </p>
            </div>

            <div className='p-4 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
              <p className='text-base sm:text-lg'>
                <span className='font-bold text-blue-300'>
                  Городове козацтво
                </span>{' '}
                - найчисельніша група козаків Гетьманщини з 1657р., які
                проживали переважно у містах та селах.
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
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold text-red-200 rounded-full border-2 border-red-600/50 shadow-lg text-center'>
            Люблінська унія
          </span>
        </div>
      </div>
    </div>
  )
}
