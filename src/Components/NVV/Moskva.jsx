export function Moskva () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-4 sm:py-8 px-3 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-blue-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-indigo-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-purple-600 rounded-full blur-3xl'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12 px-2'>
        {/* Главный заголовок */}
        <div className='w-full text-center mb-8 sm:mb-12 relative z-10 px-2'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-500'>
              Відносини з Московським царством
            </span>
          </h1>
          <div className='w-32 sm:w-48 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full'></div>
        </div>

        {/* Переяславская рада */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-blue-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 text-blue-300 text-center'>
            📜 Переяславська рада
          </h2>

          <div className='space-y-6'>
            <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                <span className='font-bold text-blue-300 text-2xl sm:text-3xl'>
                  1 жовтня 1653 р.
                </span>{' '}
                московський Земський собор вирішив прийняти Військо Запорозьке
                під зверхність московського царя, тобто встановити{' '}
                <span className='font-bold text-blue-300 bg-blue-900/40 px-2 py-1 rounded'>
                  протекторат
                </span>{' '}
                над Гетьманщиною.
                <span className='block mt-2 font-bold text-blue-300 bg-blue-900/40 px-2 py-1 rounded'>
                  погроза піти до Туреччини
                </span>
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                <span className='font-bold text-blue-300 bg-blue-900/40 px-3 py-1 rounded'>
                  Важлива дата:
                </span>{' '}
                <span className='font-bold text-blue-300 text-2xl sm:text-3xl'>
                  8 січня 1654 р.
                </span>{' '}
                у м. Переяслав відбулася{' '}
                <span className='font-bold text-blue-300 bg-blue-900/40 px-2 py-1 rounded'>
                  Переяславська рада
                </span>
                , на якій більшість козаків присягнули на вірність московському
                царю.
                <span className='block mt-2 font-bold text-blue-300'>
                  Не присягнули Іван Богун, Іван Сірко... - розкол
                </span>
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Умови договору між Московським царством та Гетьманщиною отримали
                назву{' '}
                <span className='font-bold text-blue-300 bg-blue-900/40 px-2 py-1 rounded'>
                  «Березневі статті»
                </span>
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                <span className='font-bold text-blue-300'>Протекторат</span> -
                форма залежності, за якою одна держава (протектор) перебирає
                здійснення зовнішніх відносин іншої держави (протегованої),
                захист її території та нерідко ставить під свій контроль її
                внутрішні справи
              </p>
            </div>
          </div>
        </div>

        {/* Березневі статті */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-indigo-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 text-indigo-300 text-center'>
            📄 Березневі статті (14 березня 1654 р.)
          </h2>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8'>
            {/* Суверенитет */}
            <div className='space-y-4'>
              <h3 className='text-2xl sm:text-3xl font-bold text-green-400 text-center mb-4'>
                ✅ Визнання суверенітету
              </h3>
              <div className='p-4 sm:p-6 bg-green-900/20 rounded-lg border-l-2 border-green-400'>
                <ul className='space-y-3 text-lg sm:text-xl'>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-green-400 rounded-full mt-2 mr-3'></span>
                    <span>
                      Влада гетьмана по життєва. Гетьман і старшина обирається
                      на раді
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-green-400 rounded-full mt-2 mr-3'></span>
                    <span>
                      Кількість козацького війська{' '}
                      <span className='font-bold text-green-300'>60 тис.</span>
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-green-400 rounded-full mt-2 mr-3'></span>
                    <span>Власна судова система</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-green-400 rounded-full mt-2 mr-3'></span>
                    <span>Власний адміністративний поділ</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-green-400 rounded-full mt-2 mr-3'></span>
                    <span>
                      Збереження власної соціально-економічної системи
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Обмеження */}
            <div className='space-y-4'>
              <h3 className='text-2xl sm:text-3xl font-bold text-red-400 text-center mb-4'>
                ❌ Обмеження суверенітету
              </h3>
              <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
                <ul className='space-y-3 text-lg sm:text-xl'>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-red-400 rounded-full mt-2 mr-3'></span>
                    <span>Збір податків під контролем Московських воєвод</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-red-400 rounded-full mt-2 mr-3'></span>
                    <span>Виплата данини московському царю</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-red-400 rounded-full mt-2 mr-3'></span>
                    <span className='font-bold text-red-300'>
                      Заборона самостійних дипломатичних відносин з Річчю
                      Посполитою та Туреччиною
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='p-4 sm:p-6 bg-yellow-900/20 rounded-lg border-l-2 border-yellow-400 mt-6'>
            <p className='text-xl sm:text-2xl leading-relaxed text-center font-bold text-yellow-300'>
              Україна сприймала статті як тимчасове явище. Москва як перший крок
              до повного об'єднання
            </p>
          </div>
        </div>

        {/* Наслідки */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-purple-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 text-purple-300 text-center'>
            📊 Наслідки
          </h2>
          <div className='p-4 sm:p-6 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
            <p className='text-xl sm:text-2xl leading-relaxed text-center'>
              Дозволив Україні зберегти державність, забезпечив союзника,
              звільнив від релігійних утисків, міжнародне визнання Гетьманщини
            </p>
          </div>
        </div>

        {/* Военные действия */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-blue-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 text-blue-300 text-center'>
            ⚔️ Московсько-козацька війна проти Речі Посполитої
          </h2>

          <div className='space-y-6'>
            <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                <span className='font-bold text-blue-300'>У 1654-1655 рр.</span>{' '}
                козацько-московські війська спільно вели воєнні дії проти Речі
                Посполитої та Кримського ханства
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                <span className='font-bold text-blue-300'>У 1655 р.</span> у
                битвах під Охматовим на Черкащині та Городком на Львівщині, Річ
                Посполита перемога, опинилася у дуже скрутному становищі
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                <span className='font-bold text-blue-300'>1655 р.</span> -
                визволена значна частина Західної України. українсько-московська
                армія нанесла поразку татарам. Кримське ханство знову перейшло
                на бік Б. Хмельницького
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                <span className='font-bold text-blue-300 bg-blue-900/40 px-3 py-1 rounded'>
                  Важлива дата:
                </span>{' '}
                <span className='font-bold text-blue-300 text-2xl sm:text-3xl'>
                  24 жовтня 1656 р.
                </span>{' '}
                московський цар, не бажаючи посилення Швеції, уклав з Річчю
                Посполитою Віленське перемир'я і розпочав війну проти Швеції{' '}
                <span className='font-bold text-blue-300 bg-blue-900/40 px-2 py-1 rounded'>
                  війну проти Польщі розпочала Швеція
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Новые союзы */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-indigo-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 text-indigo-300 text-center'>
            🤝 Пошук нових союзників
          </h2>

          <div className='space-y-6'>
            <div className='p-4 sm:p-6 bg-indigo-900/20 rounded-lg border-l-2 border-indigo-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Через це → погіршення відносин між Б. Хмельницьким та
                московським урядом
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed mt-3 font-bold text-indigo-300'>
                Далі: Б. Хмельницький розпочав пошук нових союзників
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-indigo-900/20 rounded-lg border-l-2 border-indigo-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Протягом{' '}
                <span className='font-bold text-indigo-300'>1656-1657 рр.</span>{' '}
                складається військовий союз Гетьманщини зі{' '}
                <span className='font-bold text-indigo-300'>Швецією</span> і{' '}
                <span className='font-bold text-indigo-300'>
                  Трансильванією
                </span>{' '}
                (Семиграддя)
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-indigo-900/20 rounded-lg border-l-2 border-indigo-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                <span className='font-bold text-indigo-300'>
                  У грудні 1656 - липні 1657 рр.
                </span>{' '}
                козацькі війська під командуванням Антона Ждановича взяли участь
                у спільному поході проти Речі Посполитої. Але антипольська
                коаліція викликала незадоволення Московського царства.
              </p>
            </div>
          </div>
        </div>

        {/* Финальные наслідки */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 text-red-300 text-center'>
            ⚡ Фінальні наслідки
          </h2>
          <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
            <ul className='space-y-3 text-xl sm:text-2xl'>
              <li className='flex items-start'>
                <span className='w-3 h-3 bg-red-400 rounded-full mt-2 mr-4'></span>
                <span>Перемогу над Польщею не здобуто</span>
              </li>
              <li className='flex items-start'>
                <span className='w-3 h-3 bg-red-400 rounded-full mt-2 mr-4'></span>
                <span>Розпався союз держав проти Речі Посполитої</span>
              </li>
              <li className='flex items-start'>
                <span className='w-3 h-3 bg-red-400 rounded-full mt-2 mr-4'></span>
                <span>
                  Самовільне повернення козацького війська обурило Б.
                  Хмельницького, який помер 27 липня 1657 р., не залишивши
                  гідного спадкоємця
                </span>
              </li>
            </ul>
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
                «У чорнобильців, тож небагатьох валтом взяли присягу: тамтешні
                міщани нерадо прийнявши Московітів, роз'їхалися по різних містах
                і містечках, не присягали присягати не хочуть. Вони заявили, що
                швидше помруть, ніж будуть присягати московському цареві і
                твердо стоять на цьому....»
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg border-l-4 border-amber-400'>
              <p className='text-xl sm:text-2xl leading-relaxed italic text-amber-200'>
                «Бачу зле, бо віддав Хмельницький усіх нас у неволю Московському
                цареві... Сам із військом козацьким присягнув і місто Київ силою
                під каранням мечем до того привів, що присягали всі...»
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg border-l-4 border-amber-400'>
              <p className='text-xl sm:text-2xl leading-relaxed italic text-amber-200'>
                «Я прийняв підданство не для того, щоб робити те що скажеш... Я
                з польським королем перуд тим бився, щоб вернути свободу собі й
                козакам» ...Царська величність наді мною учинив немилосердя
                помирившись з поляками...»
                <span className='block mt-3 font-bold text-amber-300'>
                  Віленське перемир'є
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
