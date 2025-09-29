export function Kozak () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-4 sm:py-8 px-3 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-red-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-amber-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-orange-600 rounded-full blur-3xl'></div>
      </div>

      {/* Заголовок страницы */}
      <div className='w-full max-w-6xl mx-auto text-center mb-8 sm:mb-12 relative z-10 px-2'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-red-400 to-red-500'>
            Козак-вільна озброєна людина
          </span>
        </h1>
        <h2 className='text-xl sm:text-2xl lg:text-3xl text-red-300 font-bold mb-4 sm:mb-6'>
          <span className='text-2xl sm:text-3xl lg:text-4xl font-bold text-red-400'>
            1489 р.
          </span>{' '}
          - перші писемні згадки про козаків
        </h2>
        <div className='w-32 sm:w-48 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto rounded-full'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12 px-2'>
        {/* Дике Поле */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
          <h1 className='text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-amber-300 text-center'>
            Дике Поле
          </h1>
          <p className='text-base sm:text-lg leading-relaxed text-center'>
            південноукраїнські степи, незаселений чи малозаселений простір, що
            пролягав між пониззям Дністра, Дніпра і сягав Дону
          </p>
        </div>

        {/* Причины возникновения казачества */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <h1 className='text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-red-300'>
            Причини виникнення козацтва
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
            <div className='p-3 sm:p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-red-300'>Економічні</span> -
                нестача власної орної землі призводила до народної колонізації
                земель Дикого поля
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-red-300'>Соціальні</span> -
                експлуатація населення, кріпацтво
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-red-300'>Політичні</span> -
                цілеспрямована політика литовців і поляків поставити козаків на
                службу для захисту кордонів від татар
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-red-300'>Стратегічні</span> -
                постійна небезпека з боку Кримського ханства
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400 md:col-span-2'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-red-300'>
                  Національно-релігійні
                </span>{' '}
                - політика полонізації українців та покатоличення православних
              </p>
            </div>
          </div>
        </div>

        {/* Социально-экономическая жизнь */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-orange-400 backdrop-blur-sm'>
          <h1 className='text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-orange-300'>
            Соціально-економічне життя
          </h1>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            {/* Привилегированное состояние */}
            <div className='space-y-4'>
              <div className='p-3 bg-green-900/20 rounded-lg border-l-4 border-green-400'>
                <h3 className='text-lg font-semibold text-green-300 mb-2'>
                  Привілейований стан
                </h3>
                <p className='text-sm leading-relaxed'>
                  Користувався всіма правами та привілеями й не платив податків
                </p>
              </div>
              <div className='p-3 bg-green-900/10 rounded-lg'>
                <p className='text-sm'>
                  Шляхта. Князі, пани, магнати, зем'яни, бояри
                </p>
              </div>
              <div className='p-3 bg-green-900/10 rounded-lg'>
                <p className='text-sm'>Вище духовенство</p>
              </div>
            </div>

            {/* Полупривилегированное состояние */}
            <div className='space-y-4'>
              <div className='p-3 bg-amber-900/20 rounded-lg border-l-4 border-amber-400'>
                <h3 className='text-lg font-semibold text-amber-300 mb-2'>
                  Напівпривілейований стан
                </h3>
                <p className='text-sm leading-relaxed'>
                  Не мали доступу до управління державою, платили податки
                </p>
              </div>
              <div className='p-3 bg-amber-900/10 rounded-lg'>
                <p className='text-sm'>Міщани. Патриціат, бюргерство, плебс</p>
              </div>
              <div className='p-3 bg-amber-900/10 rounded-lg'>
                <p className='text-sm'>Духовенство</p>
              </div>
            </div>

            {/* Непривилегированное состояние */}
            <div className='space-y-4'>
              <div className='p-3 bg-red-900/20 rounded-lg border-l-4 border-red-400'>
                <h3 className='text-lg font-semibold text-red-300 mb-2'>
                  Непривілейований стан
                </h3>
                <p className='text-sm leading-relaxed'>
                  Виконували різні повинності
                </p>
              </div>
              <div className='p-3 bg-red-900/10 rounded-lg'>
                <p className='text-sm'>
                  Селянство (похожі селяни, непохожі селяни)
                </p>
                <p className='text-xs mt-1 text-red-200'>
                  Сплачували ренту – плата за користування землею (натуральну,
                  грошову, відробіткову (панщина))
                </p>
              </div>
            </div>
          </div>

          {/* Термины */}
          <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='p-3 bg-slate-700/40 rounded-lg border-l-2 border-blue-400'>
              <p className='text-sm'>
                <span className='font-bold text-blue-300'>Шляхта(ич)</span> -
                привілейований соціальний стан, аристократія в Польщі, Литві, та
                Русі в ІV – ХІІІ ст
              </p>
            </div>
            <div className='p-3 bg-slate-700/40 rounded-lg border-l-2 border-blue-400'>
              <p className='text-sm'>
                <span className='font-bold text-blue-300'>
                  Магдебурзьке право
                </span>{' '}
                - право міст на самоврядування
              </p>
            </div>
            <div className='p-3 bg-slate-700/40 rounded-lg border-l-2 border-blue-400'>
              <p className='text-sm'>
                <span className='font-bold text-blue-300'>Магістрат</span> -
                орган місцевого самоврядування
              </p>
            </div>
            <div className='p-3 bg-slate-700/40 rounded-lg border-l-2 border-blue-400'>
              <p className='text-sm'>
                <span className='font-bold text-blue-300'>Цех</span> -
                самоврядна громада вільних ремісників однієї чи кількох
                спеціальностей на чолі з виборним старшиною
              </p>
            </div>
          </div>
        </div>

        {/* Положение украинских городов */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
          <h1 className='text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-amber-300'>
            Становище українських міст
          </h1>

          <div className='space-y-6'>
            <div className='p-4 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <h3 className='text-lg font-semibold text-amber-300 mb-3'>
                Причини надання українським містам Магдебурзького права:
              </h3>
              <ul className='space-y-2 text-base sm:text-lg leading-relaxed'>
                <li>• повільний розвиток міст через постійні напади татар</li>
                <li>
                  • держава, польські королі, литовські князі, церква були
                  зацікавлені в розвитку міст
                </li>
                <li>• з міст у державну скарбницю надходили податки</li>
                <li>• міські фортеці захищали від зовнішніх ворогів</li>
                <li>
                  • прагнення міського населення самостійно керувати життям
                  свого міста
                </li>
              </ul>
            </div>

            <div className='p-4 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <h3 className='text-lg font-semibold text-amber-300 mb-2'>
                Мета:
              </h3>
              <p className='text-base sm:text-lg leading-relaxed'>
                захист населення міст від самочинства королівських намісників і
                великих землевласників
              </p>
            </div>

            <div className='p-4 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <blockquote className='text-base sm:text-lg leading-relaxed italic'>
                «Рада також має запобігати сваркам у місті, боронити від кривд
                сиріт і вдів... кожен раз, коли виникатиме потреба... радитись
                про добробут громади...і запобігати шкодам, залагоджувати і
                розсуджувати всілякі спори... пильнувати обману в мірах і вагах
                під час продажу товару.»
              </blockquote>
            </div>

            <div className='p-3 bg-amber-800/30 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-amber-300'>Рада</span> - орган
                самоврядування на чолі з бурмистром у містах, що користувалися
                магдебурзьким правом
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
            Культура
          </span>
        </div>
      </div>
    </div>
  )
}
