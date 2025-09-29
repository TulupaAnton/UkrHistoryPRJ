export function Vitovt () {
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
            Правління Вітовта
          </span>
        </h1>
        <div className='inline-block bg-red-800/40 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-red-600/50 mb-4 sm:mb-6'>
          <span className='text-red-200 font-medium text-base sm:text-xl'>
            Литовсько-руські князі та бояри обрали Вітовта своїм лідером.
            Виступав проти умов Кревської унії, боровся за політичну
            незалежність Литви від Польщі
          </span>
        </div>
        <div className='w-32 sm:w-48 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto rounded-full'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12 px-2'>
        {/* Основные достижения */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
            <div className='p-3 sm:p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Довічний правитель Литовського князівства -{' '}
                <span className='font-bold text-red-300'>
                  ОСТРІВСЬКА УГОДА 1392 Р.
                </span>
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-red-300'>
                  Ліквідував найбільші удільні князівства —{' '}
                </span>
                Київське, Новгород-Сіверське, Подільське, Волинське — з метою
                посилення своєї влади
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Розширив володіння Великого князівства Литовського до узбережжя
                Чорного моря
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-red-300'>1399 р</span>. зазнав
                поразки від татар на{' '}
                <span className='font-bold text-red-300'>р. Ворскла</span>
              </p>
            </div>
          </div>

          <div className='mt-6 p-4 bg-amber-900/30 rounded-lg border-l-4 border-amber-400'>
            <h3 className='text-lg sm:text-xl font-semibold mb-3 text-amber-300'>
              Гродельська унія 1413 р.
            </h3>
            <div className='space-y-2'>
              <p className='text-base sm:text-lg leading-relaxed'>
                1. Заперечувала положення Кревської унії, визнаючи Велике
                князівство Литовське незалежним
              </p>
              <p className='text-base sm:text-lg leading-relaxed'>
                2. Посилила дискримінацію православного населення, натомість
                польська католицька та литовська католицька шляхта зрівнювалися
                в правах
              </p>
            </div>
          </div>
        </div>

        {/* Период после смерти Витовта */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-orange-400 backdrop-blur-sm'>
          <h2 className='text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-orange-300'>
            Період після смерті Вітовта
          </h2>

          <div className='space-y-4'>
            <div className='p-3 sm:p-4 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Після смерті Вітовта протягом 1430–1432 рр. Великим князем
                Литовським був{' '}
                <span className='font-bold text-orange-300'>Свидригайло,</span>{' '}
                який спирався на українських і білоруських князів і виступав
                проти унії та зближення з Польщею.
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-orange-300'>У 1432 р.</span> у
                результаті змови проти Свидригайла, Великим князем Литовським
                було оголошено Сигізмунда, який виступав за союз із Польщею.
                Внаслідок громадянської війни у Литві виникло Велике князівство
                Руське під керівництвом Свидригайла (існувало з 1432 р. по 1435
                р.)
              </p>
              <div className='mt-2 p-2 bg-orange-800/30 rounded'>
                <span className='font-bold text-orange-300'>
                  До складу Великого князівства Руського ввійшли:
                </span>{' '}
                Київщина, Чернігівщина, Сіверщина, Поділля, Волинь, Смоленщина,
                Вітебська і Полоцька землі
              </div>
            </div>

            <div className='p-3 sm:p-4 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                У 1435 р. у битві під Вількомиром Свидригайло зазнав поразки від
                Сигізмунда. Одноосібним правителем Литви став Сигізмунд -
                проводив політику зближення з Польщею. Частина українських
                князів створили проти нього змову і стратили.
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Після смерті Сигізмунда новим великим князем обрано{' '}
                <span className='font-bold text-orange-300'>
                  Казимира Ягайловича (1440)
                </span>
                , який визнав Свидригайла князем удільного Волинського
                князівства та відновив Київське князівство - правили князі
                Олелько Володимирович та Семен Олелькович
              </p>
            </div>
          </div>
        </div>

        {/* Мнемоническое правило */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
          <div className='p-4 bg-amber-900/20 rounded-lg border-2 border-amber-400'>
            <h3 className='text-lg sm:text-xl font-semibold mb-3 text-amber-300 text-center'>
              Мнемонічне правило
            </h3>
            <p className='text-base sm:text-lg leading-relaxed text-center italic'>
              «Головний охоронець варти світить силует»
            </p>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-3 mt-4'>
              <div className='text-center p-2 bg-amber-800/30 rounded'>
                <span className='font-bold text-amber-300'>Г</span> – Гедимін
              </div>
              <div className='text-center p-2 bg-amber-800/30 rounded'>
                <span className='font-bold text-amber-300'>О</span> – Ольгерд
              </div>
              <div className='text-center p-2 bg-amber-800/30 rounded'>
                <span className='font-bold text-amber-300'>В</span> – Вітовт
              </div>
              <div className='text-center p-2 bg-amber-800/30 rounded'>
                <span className='font-bold text-amber-300'>Св</span> –
                Свидригайло
              </div>
              <div className='text-center p-2 bg-amber-800/30 rounded md:col-span-2 lg:col-span-1'>
                <span className='font-bold text-amber-300'>Си</span> – Сигізмунд
              </div>
            </div>
          </div>
        </div>

        {/* Ликвидация удельных княжеств */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <h1 className='text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-red-300'>
            Ліквідація удільних князівств
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='p-3 sm:p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-red-300'>1452 р</span> -
                Волинське князівство ліквідоване по смерті Свидригайла
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-red-300'>1471 р.</span> -
                Київське князівство було остаточно ліквідоване після смерті
                Семена Олельковича, Київщина перетворилася на провінцію
              </p>
            </div>
          </div>

          <div className='mt-6 space-y-4'>
            <div className='p-3 sm:p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                «Змова руських князів»{' '}
                <span className='font-bold text-red-300'>1481 р</span> - Михайла
                Олельковича, Івана Ольшанського, Федора Бельського з метою
                скинути литовське панування на українських землях і приєднати їх
                до Московської держави (план не здійснився)
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-red-300'>1508 р.</span> –
                повстання Михайла Глинського - збройний виступ української
                шляхти проти Великого князівства Литовського (невдало)
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Унаслідок ліквідації удільних князівств у Литві поширилася
                практика «від'їздів» до Москви окремих князів, тобто
                добровільного переходу під владу Московського князівства
              </p>
            </div>
          </div>
        </div>

        {/* Важные события */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
          <div className='space-y-4'>
            <div className='p-3 sm:p-4 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-amber-300'>1503 р.</span> Литва
                визнала втрату Чернігово-Стародубського і Новгород-Сіверського
                князівств
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <div className='p-3 bg-amber-800/30 rounded mb-2'>
                <span className='font-bold text-amber-300 text-lg'>
                  Важливо
                </span>
              </div>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-amber-300'>1514 р.</span> під
                Оршею литовська армія під командуванням великого гетьмана
                Костянтина Острозького (головнокомандувач збройних силам,
                захисник православ'я) розбила московські війська, проте на
                результат війни це не вплинуло: повернути свої території ВКЛ не
                змогло
              </p>
            </div>
          </div>
        </div>

        {/* Цитаты */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-orange-400 backdrop-blur-sm'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-orange-300 text-center'>
            Цитати:
          </h2>

          <div className='space-y-4 sm:space-y-6'>
            <div className='p-3 sm:p-4 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-base sm:text-lg leading-relaxed italic'>
                «Упокоївся Семен Олелькович, князь київський. Після його смерті
                Казимир, король польський, бажаючи припинити існування
                Київського князівства, не посадив уже там сина Семена, а посадив
                воєводу з Литви Мартина Гаштовта, ляха, якого не хотіли кияни
                прийняти, не тільки тому, що не був князь, а більше тому, що він
                був ляхом; одначе, будучи примушені, погодилися»
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-base sm:text-lg leading-relaxed italic'>
                «... Була битва велика між Литвою та Москвою на річці Ведроши,
                де Москва побила Литву та багато панів у полон взяла... У той же
                рік московський цар побрав війною усю ЧерніговоСіверщину, з
                головними містами...»
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-base sm:text-lg leading-relaxed italic'>
                «Великославному господарю королю Жигимонту Казимировичу буде
                честь і слава вовіки, що переміг недруга свого - великого князя
                Василія московського! А гетьману його вдатному, князю Костянтину
                Івановичу Острозькому, дай Боже здоров,я і щастя надалі
                ліпшеє!..»
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-base sm:text-lg leading-relaxed italic'>
                «У битві під білоруською Оршею волинський полководець переміг
                завдяки продуманій тактиці. Керувати союзницьким військом, що
                складалося із литовських, польських, білоруських, українських
                загонів кавалерії, артилерії, піхотинців, а також інших родів
                військ, було непросто... За гетьманом йшло його військо, а за
                ними дріботіли закуті у ланцюги московські вельможі та князі.
                Так жителі столиці Великого князівства Литовського святкували
                перемогу під Оршею...»
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
            Наступна тема: Українські землі у складі Польщі
          </span>
        </div>
      </div>
    </div>
  )
}
