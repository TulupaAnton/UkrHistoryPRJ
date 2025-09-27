export function Roman () {
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
            Роман Мстиславович
          </span>
        </h1>
        <h2 className='text-xl sm:text-2xl lg:text-3xl text-red-300 font-bold mb-4 sm:mb-6'>
          (1199-1205 роки)
        </h2>
        <div className='inline-block bg-red-800/40 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-red-600/50 mb-4 sm:mb-6'>
          <span className='text-red-200 font-medium text-base sm:text-xl'>
            «самодержець усієї Русі»
          </span>
        </div>
        <div className='w-32 sm:w-48 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto rounded-full'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12 px-2'>
        {/* Первый блок - Основная информация */}
        <div className='flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8'>
          <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm order-2 lg:order-1'>
            <div className='flex justify-center mb-4 sm:mb-6'>
              <img
                src='../../../assets/GaliciaVolynPower/roman.jpeg'
                alt='Роман Мстиславович'
                className='w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-cover rounded-full border-4 border-red-500 shadow-lg'
              />
            </div>

            <p className='text-base sm:text-lg leading-relaxed'>
              <span className='font-bold text-red-300 text-lg sm:text-xl'>
                Роман Мстиславич
              </span>{' '}
              приєднав Галичину до Волині у{' '}
              <span className='font-bold text-red-300 text-lg sm:text-xl'>
                1199 році
              </span>{' '}
              після смерті останнього галицького князя з роду Ростиславичів
            </p>
          </div>

          <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm order-1 lg:order-2'>
            <h3 className='text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-amber-300'>
              Карта держави
            </h3>
            <div className='bg-gradient-to-br from-amber-900 to-slate-800 rounded-xl p-3 sm:p-4 border-2 border-amber-500/30 shadow-lg'>
              <img
                src='../../../assets/GaliciaVolynPower/8.png'
                alt='Карта держави Романа Мстиславовича'
                className='w-full h-auto max-w-full rounded-lg shadow-md'
              />
              <p className='text-center text-amber-200 mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg italic'>
                Карта Галицько-Волинської держави за правління Романа
                Мстиславовича
              </p>
            </div>
          </div>
        </div>

        {/* Борьба с боярами */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-orange-400 backdrop-blur-sm'>
          <h3 className='text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-orange-300'>
            Боротьба з боярською опозицією
          </h3>
          <p className='text-base sm:text-lg leading-relaxed mb-3 sm:mb-4'>
            Жорстоко придушив боярську опозицію, що чинила опір його спробам
            централізувати управління
          </p>
          <div className='p-3 sm:p-4 bg-orange-900/30 rounded-lg border-l-2 border-orange-400'>
            <blockquote className='text-lg sm:text-xl italic leading-relaxed text-orange-200 font-semibold'>
              «Не вбивши бджіл, не поласуєш медом»
            </blockquote>
          </div>
        </div>

        {/* Достижения */}
        <div className='flex flex-col md:grid md:grid-cols-2 gap-6 sm:gap-8'>
          <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
            <h3 className='text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-red-300'>
              Створення держави
            </h3>
            <p className='text-base sm:text-lg leading-relaxed'>
              Створив сильну державу із центром у{' '}
              <span className='font-bold text-red-300 text-lg sm:text-xl'>
                м. Володимир
              </span>
            </p>
          </div>

          <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
            <h3 className='text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-amber-300'>
              Київський період
            </h3>
            <p className='text-base sm:text-lg leading-relaxed'>
              Втрутився у боротьбу за{' '}
              <span className='font-bold text-amber-300 text-lg sm:text-xl'>
                Київ
              </span>
              . У{' '}
              <span className='font-bold text-amber-300 text-lg sm:text-xl'>
                1202/1203/1204 роках
              </span>{' '}
              здобув Київ і прийняв титул Великого князя Київського (контролював
              Переяславське князівство)
            </p>
          </div>
        </div>

        {/* Военные походы и гибель */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <div className='flex flex-col md:grid md:grid-cols-2 gap-6 sm:gap-8'>
            <div>
              <h3 className='text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-red-300'>
                Успішні походи
              </h3>
              <p className='text-base sm:text-lg leading-relaxed mb-4 sm:mb-6'>
                Успішні походи проти половців
              </p>

              <div className='p-3 sm:p-4 bg-red-900/30 rounded-lg'>
                <p className='text-base sm:text-lg leading-relaxed'>
                  <span className='font-bold text-red-300 text-lg sm:text-xl'>
                    1205 рік
                  </span>{' '}
                  - князь загинув у битві поблизу
                  <span className='font-bold text-red-300'>
                    {' '}
                    м. Завихвоста
                  </span>{' '}
                  під час сутички з
                  <span className='font-bold text-red-300'> поляками</span>
                </p>
              </div>

              <p className='text-base sm:text-lg leading-relaxed mt-3 sm:mt-4'>
                Тимчасова втрата державної єдності земель
              </p>
            </div>
          </div>
        </div>

        {/* Цитаты */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-amber-300 text-center'>
            Цитати які треба знати:
          </h2>

          <div className='space-y-4 sm:space-y-6'>
            <div className='p-3 sm:p-4 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-base sm:text-lg leading-relaxed italic'>
                «...Одолів усі поганські народи, мудрістю ума додержуючи
                заповідей божих. Хоробрий був, як той тур, бо він ревно
                наслідував предка свого Мономаха...»
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-base sm:text-lg leading-relaxed italic'>
                «Він бокинувся на поганих, як той лев... і губив їх, як той
                крокодил, а хоробрий був, як той тур, бо він ревно наслідував
                предка свого Мономаха, що погубив багато половців.»
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-base sm:text-lg leading-relaxed italic'>
                «Ти й у Галичі високім кріпко на престолі сів. Ти грізний,
                відважний воїн, пострах був для ворогів.»
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-base sm:text-lg leading-relaxed italic'>
                «Коли йшов на поляків, то сказав: «Або поляків подолаю і
                підкорю, або сам не вернуся!» І збулося останнє.»
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                «Останньою війною Романа Мстиславича була війна із польським
                князем Лешком Білим, який відмовився від попередніх
                домовленостей щодо прикордонних земель. Руське військо взяло в
                облогу Люблін, потім перейшло Віслу й стало табором біля міста
                Завихвост...»
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                «Волинський князь, який у{' '}
                <span className='font-bold text-amber-300'>1199 р.</span>{' '}
                об'єднав Галицьке та Волинське князівства й приєднав до нього
                Київське у
                <span className='font-bold text-amber-300'> 1202 р.</span> Був
                убитий у
                <span className='font-bold text-amber-300'> 1205 р.</span> у
                битві з поляками під Завихвостом.»
              </p>
            </div>
          </div>
        </div>

        {/* Историческое значение */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <h3 className='text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-red-300 text-center'>
            Історичне значення правління Романа Мстиславовича
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
            <div className='p-3 sm:p-4 bg-red-900/30 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Створив могутню державу, яка стала спадкоємицею Київської Русі
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-red-900/30 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Зміцнив централізовану владу та обмежив вплив боярства
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-red-900/30 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Відновив контроль над Києвом та об'єднав руські землі
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-red-900/30 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Започаткував традицію сильного єдиновладдя на українських землях
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
            Продовження: Боярська Смута
          </span>
        </div>
      </div>
    </div>
  )
}
