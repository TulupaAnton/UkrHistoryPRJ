export function Sagaydachniy () {
  return (
    <div className='min-h-screen bg-gradient-to-b mt-15 from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-4 sm:py-8 px-3 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-amber-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-orange-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-yellow-600 rounded-full blur-3xl'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12 px-2'>
        {/* Главный заголовок */}
        <div className='w-full text-center mb-8 sm:mb-12 relative z-10 px-2'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500'>
              Перша половина ХVІІ ст. – доба героїчних морських походів козаків
              на Туреччину та Кримське ханство
            </span>
          </h1>
          <div className='text-6xl sm:text-7xl mt-15 text-amber-300 font-bold mb-6'>
            Петро Конашевич-Сагайдачний
          </div>

          <div className='w-32 sm:w-48 h-1 bg-gradient-to-r from-amber-400 to-orange-600 mx-auto rounded-full'></div>
        </div>

        {/* Основная информация */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8'>
          {/* Изображение */}
          <div className='lg:col-span-1 flex justify-center'>
            <div className='p-4 sm:p-6 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
              <img
                src='../../../assets/KozakGer/Petro.jpg'
                alt='Петро Конашевич-Сагайдачний'
                className='w-full max-w-xs sm:max-w-sm rounded-lg shadow-2xl'
              />
            </div>
          </div>

          {/* Описание */}
          <div className='lg:col-span-2 space-y-6'>
            <div className='p-4 sm:p-6 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
              <h2 className='text-3xl sm:text-4xl font-bold text-amber-300 mb-6 text-center'>
                Український полководець
              </h2>
              <div className='space-y-6'>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  Кошовий отаман Запорозької Січі, гетьман реєстрового козацтва.
                </p>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  Відомий своїми походами на Крим, Османську імперію, Москву та
                  перемогою у Хотинській битві. Сприяв відновленню вищої
                  української православної ієрархії.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Образование и ранние годы */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-yellow-400 backdrop-blur-sm'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-8 text-yellow-300 text-center'>
            Освіта та початок діяльності
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
            <div className='p-6 bg-yellow-900/20 rounded-lg border-l-2 border-yellow-400'>
              <h3 className='text-2xl font-semibold text-yellow-300 mb-4'>
                Освіта:
              </h3>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Освіту здобув у школі Львівського братства та Острозькій
                академії.
              </p>
            </div>

            <div className='p-6 bg-yellow-900/20 rounded-lg border-l-2 border-yellow-400'>
              <h3 className='text-2xl font-semibold text-yellow-300 mb-4'>
                Початок гетьманування:
              </h3>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                В <span className='font-bold text-yellow-300'>1606 р.</span> був
                уперше обраний на гетьманування.
              </p>
            </div>
          </div>
        </div>

        {/* Важные даты и события */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-orange-400 backdrop-blur-sm'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-8 text-orange-300 text-center'>
            Важливі події та досягнення
          </h1>

          <div className='space-y-6 sm:space-y-8'>
            <div className='p-6 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                <span className='font-bold text-orange-300'>1618 р.</span> –
                похід козаків під проводом П. Конашевича-Сагайдачного на Москву.
                Внаслідок – укладено перемир'я, Польща отримала Смоленщину та
                Чернігово-Сіверщину.
              </p>
            </div>

            <div className='p-6 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Разом з усім козацьким військом записався до Київського
                Богоявленського братства
              </p>
            </div>

            <div className='p-6 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                По-новому організував козацьку армію
              </p>
            </div>

            <div className='p-6 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Добився зміцнення дисципліни та боєздатності козацького війська,
                розширення козацького реєстру та відновлення прав та привілеїв
                козаків.
              </p>
            </div>

            <div className='p-6 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                У <span className='font-bold text-orange-300'>1621 р.</span>{' '}
                козацьке військо П. Конашевича-Сагайдачного зупинило турецький
                наступ на Річ Посполиту в Хотинській битві.
              </p>
            </div>
          </div>
        </div>

        {/* Цитаты */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-8 text-amber-300 text-center'>
            📜 Історичні цитати
          </h1>

          <div className='space-y-6'>
            <div className='p-6 bg-amber-900/20 rounded-lg border-l-4 border-amber-400'>
              <p className='text-xl sm:text-2xl leading-relaxed italic text-amber-200'>
                «...Він дивився на козаків не лише під кутом зору їхніх
                особливих станових інтересів, а й як на потенційних рушіїв
                українського суспільства в цілому. Сам він об'єднав військову
                силу козацтва з політично слабкою церковною та культурною
                верхівкою України...»
              </p>
            </div>

            <div className='p-6 bg-amber-900/20 rounded-lg border-l-4 border-amber-400'>
              <p className='text-xl sm:text-2xl leading-relaxed italic text-amber-200'>
                «Був це чоловік великого духу, що сам шукав небезпеки,
                легковажив життям, у битві був проворний, дяльний, у таборі
                сторожкий, мало спав не пиячив... на нарадах був обережний в
                усяких розмовах Неговіркий»
              </p>
            </div>

            <div className='p-6 bg-amber-900/20 rounded-lg border-l-4 border-amber-400'>
              <p className='text-xl sm:text-2xl leading-relaxed italic text-amber-200'>
                «Прибув... до Києва святійший патріарх єрусалимський Феофан… був
                прийнятий з великою честю духовними та світськими людьми. Того ж
                року... висвятив на митрополію Київську чоловіка гідного й
                чесного. Іменем Йов Борецький… з ним єпископів на різні
                місця...»
              </p>
            </div>
          </div>
        </div>

        {/* Изображение "Здобуття Кафи" */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-orange-400 backdrop-blur-sm'>
          <div className='flex flex-col lg:flex-row gap-6 sm:gap-8 items-center'>
            <div className='flex-1'>
              <div className='bg-gradient-to-br from-orange-900 to-slate-800 rounded-2xl p-4 sm:p-6 border-2 border-orange-500/40 shadow-2xl'>
                <img
                  src='../../../assets/KozakGer/10.png'
                  alt='Здобуття Кафи запорожцями'
                  className='w-full h-auto rounded-xl shadow-lg'
                />
              </div>
            </div>
            <div className='flex-1 text-center lg:text-left'>
              <h3 className='text-2xl sm:text-3xl font-bold text-orange-300 mb-4'>
                Здобуття Кафи запорожцями
              </h3>
              <p className='text-xl sm:text-2xl text-amber-200 leading-relaxed'>
                Морські походи запорозьких козаків під проводом Сагайдачного на
                турецькі фортеці та кримські міста були легендарними військовими
                операціями свого часу.
              </p>
            </div>
          </div>
        </div>

        {/* Смерть и наследие */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-8 text-red-300 text-center'>
            Смерть та спадщина
          </h1>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8'>
            <div className='p-6 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Помер П. Конашевич-Сагайдачний{' '}
                <span className='font-bold text-red-300'>
                  10 квітня 1622 р.
                </span>{' '}
                від рани, яку дістав у Хотинській битві.
              </p>
            </div>
            <div className='p-6 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Його діяльність заклала основи для подальшого розвитку козацької
                державності та національно-визвольної боротьби українського
                народу.
              </p>
            </div>
          </div>
        </div>

        {/* Историческое значение */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-8 text-amber-300 text-center'>
            🎯 Історичне значення
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='p-6 bg-amber-900/20 rounded-lg'>
              <p className='text-xl sm:text-2xl font-semibold text-amber-300 mb-4 text-center'>
                🛡️ Військові реформи
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Корінна реорганізація козацького війська, впровадження нової
                тактики
              </p>
            </div>

            <div className='p-6 bg-amber-900/20 rounded-lg'>
              <p className='text-xl sm:text-2xl font-semibold text-amber-300 mb-4 text-center'>
                ⛪ Церковне відродження
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Сприяв відновленню православної ієрархії та розвитку освіти
              </p>
            </div>

            <div className='p-6 bg-amber-900/20 rounded-lg'>
              <p className='text-xl sm:text-2xl font-semibold text-amber-300 mb-4 text-center'>
                🌍 Міжнародне визнання
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Підвищення авторитету козацтва на міжнародній арені
              </p>
            </div>

            <div className='p-6 bg-amber-900/20 rounded-lg'>
              <p className='text-xl sm:text-2xl font-semibold text-amber-300 mb-4 text-center'>
                📜 Національна ідея
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Зміцнення національної свідомості та державницьких традицій
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
            Козацькі походи
          </span>
        </div>
      </div>
    </div>
  )
}
