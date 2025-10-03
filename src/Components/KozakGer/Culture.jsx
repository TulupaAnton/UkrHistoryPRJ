export function Culture () {
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
              Культурне життя України XVII століття
            </span>
          </h1>
          <div className='w-32 sm:w-48 h-1 bg-gradient-to-r from-amber-400 to-orange-600 mx-auto rounded-full'></div>
        </div>

        {/* Освіта */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-amber-300 text-center'>
            📚 Освіта
          </h2>

          <div className='space-y-4 sm:space-y-6'>
            <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Школи при церквах і монастирях
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Братські школи (Львівського Успенського братства)
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                У <span className='font-bold text-amber-300'>1615 р.</span> -
                утворена київська братська школа
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                У <span className='font-bold text-amber-300'>1631 році</span>{' '}
                Лаврська школа за ініціативою П. Могили
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                <span className='font-bold text-amber-300'>1632 р.</span> -
                школи об'єднались у{' '}
                <span className='font-bold text-amber-300'>
                  Київську колегію
                </span>{' '}
                (пізніше - Києво-Могилянська академія)
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Тут викладали -{' '}
                <span className='font-bold text-amber-300'>
                  Інокентій Гізель, Лазар Баранович
                </span>{' '}
                (пізніше ректор). Курс тривав{' '}
                <span className='font-bold text-amber-300'>12 років</span>.
                Вчились{' '}
                <span className='font-bold text-amber-300'>8 класів</span>.
                Вивчали більше{' '}
                <span className='font-bold text-amber-300'>30 предметів</span>
              </p>
            </div>
          </div>
        </div>

        {/* Література */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-yellow-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-yellow-300 text-center'>
            📖 Література
          </h2>

          <div className='space-y-4 sm:space-y-6'>
            <div className='p-4 sm:p-6 bg-yellow-900/20 rounded-lg border-l-2 border-yellow-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Релігійні твори полемічна література
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-yellow-900/20 rounded-lg border-l-2 border-yellow-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Автори:{' '}
                <span className='font-bold text-yellow-300'>
                  І. Борецький, М. Смотрицький «Плач»
                </span>
                .{' '}
                <span className='font-bold text-yellow-300'>І. Вишенський</span>{' '}
                надсилав на Україну послання з Греції
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-yellow-900/20 rounded-lg border-l-2 border-yellow-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Віршовані, драматичні твори
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-yellow-900/20 rounded-lg border-l-2 border-yellow-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Усна народна творчість перш за все -{' '}
                <span className='font-bold text-yellow-300'>
                  думи («Самійло Кішка», «Маруся Богуславка»)
                </span>
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-yellow-900/20 rounded-lg border-l-2 border-yellow-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Літописи - розповідь від історії слов'ян до 16 ст
              </p>
            </div>
          </div>
        </div>

        {/* Книговидання */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-orange-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-orange-300 text-center'>
            🖨️ Книговидання
          </h2>

          <div className='space-y-4 sm:space-y-6'>
            <div className='p-4 sm:p-6 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Діяли приватні друкарні у{' '}
                <span className='font-bold text-orange-300'>Львові, Києві</span>
                . Центр книговидання в Україні стала{' '}
                <span className='font-bold text-orange-300'>
                  друкарня Києво-Печерської лаври
                </span>
                . Заснував її{' '}
                <span className='font-bold text-orange-300'>1615 р.</span>{' '}
                архімандрит лаври{' '}
                <span className='font-bold text-orange-300'>
                  Єлисей Плетенецький
                </span>
                . Лаврська друкарня видала першу книжку{' '}
                <span className='font-bold text-orange-300'>
                  1616 р. «Часослов»
                </span>
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Найвизначнішою мовознавчою працею була{' '}
                <span className='font-bold text-orange-300'>
                  «Граматика» Мелетія Смотрицького
                </span>
                , що вийшла друком{' '}
                <span className='font-bold text-orange-300'>1619 р.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Театр */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-red-300 text-center'>
            🎭 Театр
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6'>
            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg text-center'>
              <p className='text-xl sm:text-2xl font-bold text-red-300'>
                Шкільна драма
              </p>
            </div>
            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg text-center'>
              <p className='text-xl sm:text-2xl font-bold text-red-300'>
                Інтермедії
              </p>
            </div>
            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg text-center'>
              <p className='text-xl sm:text-2xl font-bold text-red-300'>
                Мандрівний ляльковий театр - вертеп
              </p>
            </div>
          </div>
        </div>

        {/* Архітектура та мистецтво */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-purple-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-purple-300 text-center'>
            🏛️ Архітектура та мистецтво
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
            <div className='space-y-4'>
              <div className='p-4 sm:p-6 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  Перші споруди в стилі{' '}
                  <span className='font-bold text-purple-300'>барокко</span>
                </p>
              </div>

              <div className='p-4 sm:p-6 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  Бастіонні укріплення
                </p>
              </div>

              <div className='p-4 sm:p-6 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  Монастирі подекуди набували вигляд справжніх фортець
                </p>
              </div>
            </div>

            <div className='space-y-4'>
              <div className='p-4 sm:p-6 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  Іконостаси, Іконописці- видатні Львівські художники{' '}
                  <span className='font-bold text-purple-300'>
                    Ф. Сенькович та М. Петрахнович
                  </span>
                </p>
              </div>

              <div className='p-4 sm:p-6 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  Портретний живопис
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Релігійне життя */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-blue-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-blue-300 text-center'>
            ⛪ Релігійне життя
          </h2>

          <div className='space-y-4 sm:space-y-6'>
            <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Католицька церква мала всі права, тисне на уніатів і
                православних
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Греко-католицька потрапила у важке становище: рівності з
                католиками не мала
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Православну вважали «зрадницею»
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Становище зміцнили митрополити{' '}
                <span className='font-bold text-blue-300'>
                  І. Потій і Й. Рутський
                </span>
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                <span className='font-bold text-blue-300'>Иосиф Рутський</span>{' '}
                третій унійний митрополит Київський, Галицький і всієї Руси,
                зрівняв уніатські школи з єзуїтськими
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Вірними православ'ю залишились єпископи{' '}
                <span className='font-bold text-blue-300'>
                  Гедеон Балабан, Михайло Копистецький
                </span>
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Православна шляхта обмежувалася в правах, православні міщан не
                допускалися до роботи
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Православ'ю дорікають відсутністю керівництва (вищої
                православної ієрархії)
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                У <span className='font-bold text-blue-300'>1615 р.</span>{' '}
                засноване{' '}
                <span className='font-bold text-blue-300'>
                  Київське Богоявленське братство
                </span>{' '}
                за сприяння{' '}
                <span className='font-bold text-blue-300'>І. Борецького</span>{' '}
                (ректором Львівської, згодом Київської братської школи)
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                <span className='font-bold text-blue-300'>1620 р.</span> під час
                перебування в Києві єрусалимського патріарха{' '}
                <span className='font-bold text-blue-300'>Феофана</span> І.
                Борецький був висвячений на Київського митрополита
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                <span className='font-bold text-blue-300'>1632 р.</span>{' '}
                польський уряд видав{' '}
                <span className='font-bold text-blue-300'>
                  «Пункти для заспокоєння руського народу»
                </span>
                , які офіційно визнавали існування православної церкви і
                надавали широкі права православним
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
              <p className='text-xl sm:text-2xl leading-relaxed italic'>
                <span className='font-semibold text-blue-300'>
                  «1. Усім уніатам і неуніатам надається право вільного
                  відправлення свого богослужіння, ремонтувати свої церкви й
                  будувати нові... 2. церква Св. Софії київська з підданими, що
                  мешкають навколо неї, повинна залишатися за неуніатами й
                  митрополитом, що має посвяту патріарха константинопольського:
                  ВІН, митрополит, за давніми правами і звичаями, від патріарха
                  повинен обиратися з-поміж руської шляхти духовними й
                  світськими обивателями Корони [Польської] Великого князівства
                  Литовського релігії грецької, що не перебувають в унії і мають
                  привілеї з боку короля..... 3. Те ж саме треба розуміти й щодо
                  Львівського, Луцького, Перемишльського й Мстиславського владик
                  и архімандритів Печерського й Унівського...»
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Петро Могила */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-green-400 backdrop-blur-sm'>
          <div className='flex flex-col lg:flex-row gap-6 sm:gap-8 items-center'>
            <div className='lg:w-1/3 flex justify-center'>
              <img
                src='../../../assets/KozakGer/Petro_Mohyla.jpg'
                alt='Петро Могила'
                className='w-full max-w-xs sm:max-w-sm rounded-lg shadow-2xl'
              />
            </div>
            <div className='lg:w-2/3'>
              <h2 className='text-3xl sm:text-4xl font-bold mb-6 text-green-300 text-center lg:text-left'>
                Петро Могила
              </h2>
              <div className='space-y-4'>
                <div className='p-4 sm:p-6 bg-green-900/20 rounded-lg border-l-2 border-green-400'>
                  <p className='text-xl sm:text-2xl leading-relaxed'>
                    Петро Могила - церковний та культурний діяч. Архімандрит
                    Києво-Печерського монастиря, з{' '}
                    <span className='font-bold text-green-300'>1632 р.</span> -
                    митрополит Київський, Галицький та всієї Руси. У тому ж{' '}
                    <span className='font-bold text-green-300'>1632 р.</span>{' '}
                    домігся від влади Речі Посполитої визнання вищої
                    православної ієрархії та заснував{' '}
                    <span className='font-bold text-green-300'>
                      Києво-Могилянський колегіум
                    </span>
                    . Автор{' '}
                    <span className='font-bold text-green-300'>
                      «Требника» (1646 р.)
                    </span>
                  </p>
                </div>

                <div className='p-4 sm:p-6 bg-green-900/20 rounded-lg border-l-2 border-green-400'>
                  <p className='text-xl sm:text-2xl leading-relaxed italic'>
                    <span className='font-semibold text-green-300'>
                      «Політичний, церковний, освітній діяч Речі Посполитої. З
                      1627 р. архімандрит Києво-Печерського монастиря. У 1632 р.
                      домігся від королівської влади визнання вищої православної
                      церковної ієрархії. Для підвищення культурно-освітнього
                      рівня православних священиків заснував Лаврську школу...»
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Галерея архитектуры */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-amber-300 text-center'>
            🏛️ Архітектурні пам'ятки
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg text-center'>
              <img
                src='../../../assets/KozakGer/kapl.jpg'
                alt='Каплиця Трьох Святителів'
                className='w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg mb-4 shadow-lg'
              />
              <p className='text-xl sm:text-2xl text-amber-200 font-medium'>
                Каплиця Трьох Святителів
              </p>
            </div>
            <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg text-center'>
              <img
                src='../../../assets/KozakGer/ansam.jpg'
                alt='Ансамбль Успенської церкви у м. Львів'
                className='w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg mb-4 shadow-lg'
              />
              <p className='text-xl sm:text-2xl text-amber-200 font-medium'>
                Ансамбль Успенської церкви у м. Львів
              </p>
            </div>
            <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg text-center'>
              <img
                src='../../../assets/KozakGer/kaplica.jpg'
                alt='Каплиця Боїмів'
                className='w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg mb-4 shadow-lg'
              />
              <p className='text-xl sm:text-2xl text-amber-200 font-medium'>
                Каплиця Боїмів
              </p>
            </div>
            <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg text-center'>
              <img
                src='../../../assets/KozakGer/palac.jpg'
                alt='Палац у Підгірцях'
                className='w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg mb-4 shadow-lg'
              />
              <p className='text-xl sm:text-2xl text-amber-200 font-medium'>
                Палац у Підгірцях
              </p>
            </div>
            <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg text-center'>
              <img
                src='../../../assets/KozakGer/410.jpg'
                alt='Іллінська церква та дзвіниця'
                className='w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg mb-4 shadow-lg'
              />
              <p className='text-xl sm:text-2xl text-amber-200 font-medium'>
                Іллінська церква та дзвіниця
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Разделитель внизу */}
    </div>
  )
}
