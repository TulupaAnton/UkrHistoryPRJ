export function Volodimir () {
  return (
    <div className='min-h-screen bg-gradient-to-b mt-5 from-purple-900 via-purple-800 to-purple-900 text-gray-100 flex flex-col relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-10'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-blue-400 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-indigo-500 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-purple-400 rounded-full blur-3xl'></div>
      </div>

      {/* Header Section */}
      <div className='w-full py-12 px-4 sm:px-6 lg:px-8 text-center relative z-10'>
        <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent'></div>
        <div className='absolute inset-x-0 top-0 flex justify-center'>
          <div className='w-40 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent'></div>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-center gap-10 mb-8'>
          {/* Фотография Володимира */}
          <div className='relative'>
            <div className='w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500/60 shadow-2xl'>
              <img
                src='../../../assets/vova.jpg'
                alt='Володимир Великий'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='absolute -inset-6 bg-blue-500/20 rounded-full -z-10 blur-xl'></div>
            <div className='absolute -bottom-3 -right-3 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-7 w-7 text-blue-200'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                />
              </svg>
            </div>
          </div>

          <div className='text-center md:text-left mt-6 md:mt-0'>
            <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight'>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500'>
                Володимир Великий
              </span>
            </h1>
            <h2 className='text-4xl sm:text-5xl text-blue-300 font-bold mt-2'>
              (950-1015)
            </h2>

            <div className='w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto md:mx-0 my-5 rounded-full'></div>

            <p className='text-2xl sm:text-3xl text-blue-200 font-bold leading-relaxed'>
              Великий хреститель, Святий, Красне Сонечко
            </p>
          </div>
        </div>

        <div className='absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent'></div>
      </div>

      {/* Content Section */}
      <div className='w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10'>
        {/* Важные даты - новая секция */}
        <div className='mb-12'>
          <h2 className='text-3xl font-bold text-center mb-8 text-blue-300'>
            <span className='border-b-2 border-blue-500 pb-2'>
              Ключові дати
            </span>
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-blue-900/40 p-5 rounded-xl border-l-4 border-yellow-400 backdrop-blur-sm text-center'>
              <div className='text-4xl font-bold text-yellow-300 mb-2'>980</div>
              <p className='text-lg'>Початок правління</p>
            </div>
            <div className='bg-blue-900/40 p-5 rounded-xl border-l-4 border-green-400 backdrop-blur-sm text-center'>
              <div className='text-4xl font-bold text-green-300 mb-2'>985</div>
              <p className='text-lg'>Похід на Волзьку Булгарію</p>
            </div>
            <div className='bg-blue-900/40 p-5 rounded-xl border-l-4 border-red-400 backdrop-blur-sm text-center'>
              <div className='text-4xl font-bold text-red-300 mb-2'>988</div>
              <p className='text-lg'>Хрещення Русі</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-12 items-start'>
          {/* Main Facts */}
          <div className='lg:w-2/5'>
            <div className='space-y-7'>
              <div className='p-6 bg-blue-900/30 rounded-xl border-l-4 border-blue-400 backdrop-blur-sm'>
                <h3 className='text-xl font-semibold mb-2 text-blue-300'>
                  Формування території держави:
                </h3>
                <ul className='mt-4 text-lg space-y-3 ml-5'>
                  <li className='flex items-start'>
                    <span className='text-blue-400 mr-3 text-xl'>•</span>
                    Об'єднав усі землі східних слов'ян в одній державі
                  </li>
                  <li className='flex items-start'>
                    <span className='text-blue-400 mr-3 text-xl'>•</span>
                    Приєднав Закарпаття та Придністров'я
                  </li>
                  <li className='flex items-start'>
                    <span className='text-blue-400 mr-3 text-xl'>•</span>
                    Остаточно підкорив тиверців, уличів, в'ятичів, радимичів
                  </li>
                  <li className='flex items-start'>
                    <span className='text-blue-400 mr-3 text-xl'>•</span>
                    <span className='font-bold text-blue-300'>985р.</span> Вів
                    військові дії проти Волзької Булгарії
                  </li>
                </ul>
              </div>

              <div className='p-6 bg-blue-900/30 rounded-xl border-l-4 border-green-400 backdrop-blur-sm'>
                <h3 className='text-xl font-semibold mb-2 text-green-300'>
                  Адміністративна реформа:
                </h3>
                <p className='text-lg'>
                  Усунув від влади місцевих князів, розсадивши на їх місця своїх
                  синів.
                </p>
                <p className='text-lg mt-2'>
                  Знищив систему "Племених князівств"
                </p>
              </div>

              <div className='p-6 bg-blue-900/30 rounded-xl border-l-4 border-blue-400 backdrop-blur-sm'>
                <h3 className='text-xl font-semibold mb-2 text-blue-300'>
                  Військова реформа
                </h3>
                <p className='text-lg'>
                  Основу війська складали слов'яни а не варяги
                </p>
                <p className='text-lg mt-2'>
                  Для захисту кордонів побудував систему укріплень -{' '}
                  <span className='text-blue-300 font-bold'>"Змієві вали"</span>
                </p>
                <p className='text-lg mt-2'>
                  Поновив торгівельний шлях із варяги у греки
                </p>
              </div>

              <div className='p-6 bg-gradient-to-r from-purple-900/40 to-indigo-800/30 rounded-xl border-l-4 border-blue-400 backdrop-blur-sm relative overflow-hidden'>
                <div className='absolute -top-4 -right-4 w-20 h-20 bg-purple-500 rounded-full opacity-20 blur-lg'></div>
                <div className='absolute -bottom-4 -left-4 w-16 h-16 bg-indigo-400 rounded-full opacity-20 blur-lg'></div>

                <h3 className='text-xl font-semibold mb-2 text-blue-300 relative z-10'>
                  Християнізація Русі
                </h3>
                <p className='text-lg relative z-10'>
                  <span className='text-2xl text-purple-300 font-bold'>
                    988р.
                  </span>{' '}
                  Запровадив Християнство як державну релігію
                </p>
                <p className='text-lg mt-2 relative z-10'>
                  Похід на Херсонес та укладання шлюбної дипломатії
                </p>
                <div className='mt-3 p-3 bg-purple-800/40 rounded-lg relative z-10'>
                  <p className='text-sm italic'>
                    Шлюбна дипломатія: це політика укладання династичних шлюбів
                    між представниками правлячих родів різних держав з метою
                    зміцнення міжнародних зв'язків
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Карта и фото */}
          <div className='lg:w-3/5'>
            <div className='rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-[1.02] border-2 border-blue-500/40 mb-8'>
              <div className='w-full h-200 bg-gradient-to-br from-blue-800  to-purple-900 flex items-center justify-center text-xl'>
                <img
                  src='../../../assets/vovaKarta.jpg'
                  alt='Карта за часів Володимира Великого'
                  className='w-full h-full object-cover'
                />
              </div>
            </div>

            {/* Культурні та економічні зміни - теперь в два столбца с фото */}
            <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='p-6 bg-blue-900/30 rounded-xl border-l-4 border-green-400 backdrop-blur-sm'>
                <h3 className='text-xl font-semibold mb-3 text-green-300'>
                  Культурні та економічні зміни
                </h3>
                <ul className='space-y-3'>
                  <li className='flex items-start'>
                    <span className='text-blue-400 mr-3 text-xl'>•</span>
                    Запровадив шкільне навчання
                  </li>
                  <li className='flex items-start'>
                    <span className='text-blue-400 mr-3 text-xl'>•</span>
                    Ініціював будівництво Десятиної церкви
                  </li>
                  <li className='flex items-start'>
                    <span className='text-blue-400 mr-3 text-xl'>•</span>
                    Карбував перші гроші (златники/срібляники)
                  </li>
                  <li className='flex items-start'>
                    <span className='text-blue-400 mr-3 text-xl'>•</span>
                    Збудував в центрі фортецю – місто Володимир
                  </li>
                </ul>
              </div>

              {/* Фото Десятинної церкви */}
              <div className='rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-[1.02] border-2 border-blue-500/40'>
                <div className='w-full h-100 bg-gradient-to-br from-green-800 to-purple-900 flex items-center justify-center text-xl'>
                  <img
                    src='../../../assets/desata.jpg'
                    alt='Десятинна церква'
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>

              {/* Фото монеток */}
              <div className='rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-[1.02] border-2 border-blue-500/40 md:col-span-2'>
                <div className='w-full h-96 bg-gradient-to-br from-yellow-800 to-purple-900 flex items-center justify-center text-xl'>
                  <img
                    src='../../../assets/MonetaVova.jpg'
                    alt='Монети часів Володимира'
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Религиозные реформы - уже в два столбца, но расширим на полный grid без пустот */}
        <div className='mt-12'>
          <h2 className='text-3xl font-bold text-center mb-8 text-purple-300'>
            <span className='border-b-2 border-purple-500 pb-2'>
              Релігійні реформи
            </span>
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='p-6 bg-blue-900/30 rounded-xl border-l-4 border-purple-400 backdrop-blur-sm'>
              <h3 className='text-xl font-semibold mb-3 text-purple-300'>
                Релігійні реформи Володимира
              </h3>
              <h4 className='text-lg font-medium mb-2 text-blue-300'>
                Причини:
              </h4>
              <ul className='ml-5 space-y-2'>
                <li className='flex items-start'>
                  <span className='text-blue-400 mr-2 text-sm'>•</span>
                  Потреба об'єднати державу навколо Києва
                </li>
                <li className='flex items-start'>
                  <span className='text-blue-400 mr-2 text-sm'>•</span>
                  Прагнення зміцнити князівську владу і міжнародний статус
                  держави
                </li>
              </ul>
            </div>

            <div className='p-6 bg-blue-900/30 rounded-xl border-l-4 border-blue-400 backdrop-blur-sm'>
              <h4 className='text-lg font-medium mb-2 text-blue-300'>
                Реформа язичництва
              </h4>
              <ul className='ml-5 space-y-2'>
                <li className='flex items-start'>
                  <span className='text-blue-400 mr-2 text-sm'>•</span>
                  Близько <span className='font-bold'>980р.</span> головними
                  богами призначено Перуна, Хорса, Дажбога, Симарагла, Стрибога,
                  Макошь
                </li>
                <li className='flex items-start'>
                  <span className='text-blue-400 mr-2 text-sm'>•</span>
                  Багатобожжя не могло забезпечити єдність держави і міцність
                  князівської влади
                </li>
              </ul>
            </div>

            <div className='p-6 bg-blue-900/30 rounded-xl border-l-4 border-green-400 backdrop-blur-sm'>
              <h4 className='text-lg font-medium mb-2 text-green-300'>
                Причини обрання православного християнства
              </h4>
              <ul className='ml-5 space-y-2'>
                <li className='flex items-start'>
                  <span className='text-blue-400 mr-2 text-sm'>•</span>
                  Тісні історичні й культурні зв'язки Русі і Візантії
                </li>
                <li className='flex items-start'>
                  <span className='text-blue-400 mr-2 text-sm'>•</span>
                  Аскольд і Ольга за легендою були охрещені саме у Візантії
                </li>
                <li className='flex items-start'>
                  <span className='text-blue-400 mr-2 text-sm'>•</span>
                  Світська влада у православ'ї вища за церковну, що мало
                  підтримати авторитет князя
                </li>
              </ul>
            </div>

            <div className='p-6 bg-blue-900/30 rounded-xl border-l-4 border-purple-400 backdrop-blur-sm'>
              <h4 className='text-lg font-medium mb-2 text-purple-300'>
                Значення прийняття християнства
              </h4>
              <ul className='ml-5 space-y-2'>
                <li className='flex items-start'>
                  <span className='text-blue-400 mr-2 text-sm'>•</span>
                  Дало поштовх розвитку ремесел, архітектури
                </li>
                <li className='flex items-start'>
                  <span className='text-blue-400 mr-2 text-sm'>•</span>
                  Запроваджено слов'янську писемність (кирилицю)
                </li>
                <li className='flex items-start'>
                  <span className='text-blue-400 mr-2 text-sm'>•</span>
                  Зміцнилося міжнародне становище Київської Русі
                </li>
                <li className='flex items-start'>
                  <span className='text-blue-400 mr-2 text-sm'>•</span>
                  Укріпилася князівська влада
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Цитаты */}
        <div className='relative mt-16 p-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl'>
          <div className='bg-gray-900 rounded-2xl p-8'>
            <div className='flex items-start'>
              <div className='hidden md:flex mr-6'>
                <div className='w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center shadow-lg'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-10 w-10 text-blue-200'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
                    />
                  </svg>
                </div>
              </div>

              <div className='flex-1'>
                <div className='flex items-center mb-4'>
                  <div className='w-4 h-1 bg-blue-400 rounded-full mr-2'></div>
                  <div className='w-8 h-1 bg-blue-400 rounded-full mr-2'></div>
                  <div className='w-4 h-1 bg-blue-400 rounded-full'></div>
                </div>

                <h3 className='text-2xl font-semibold mb-4 text-blue-300'>
                  Цитати, які треба пам'ятати та знати
                </h3>

                <div className='space-y-4 max-h-96 overflow-y-auto pr-4'>
                  <p className='text-lg text-blue-100 italic leading-relaxed'>
                    "І сказав Володимир: «Хреститься сьогодні і дружина моя, і
                    діти мої, і люди мої, щоб не мати мені противників»."
                  </p>

                  <p className='text-lg text-blue-100 italic leading-relaxed'>
                    "Не годиться християнам віддавати [заміж] за язичників. Якщо
                    охрестишся, то і це одержиш, і царство небесне приймеш, і з
                    нами однієї віри будеш. Коли ж не хочеш цього робити, то не
                    можемо віддати сестри своєї за тебе»."
                  </p>

                  <p className='text-lg text-blue-100 italic leading-relaxed'>
                    "І повелив він поскидати кумири — тих порубати, а других
                    вогню віддати. Перуна ж повелів він прив'язати до коня до
                    хвоста і волочити з Гори по Боричеву узвозу на ручай..."
                  </p>

                  <p className='text-lg text-blue-100 italic leading-relaxed'>
                    "Повелів він робити церкви і ставити їх на місцях, де от
                    стояли кумири. І поставив він церкву Святого
                    Василія(Великого) на пагорбі, де стояли кумири Перун та інші
                    і де жертви приносили князь і люди..."
                  </p>
                  <p className='text-lg text-blue-100 italic leading-relaxed'>
                    «...побачив, що церкву завершено, він помолився Богу,
                    говорячи: «Осе даю церкві сій, святій Богородиці, од
                    маєтності своєї десяту частину. Якщо се одмінить хто - хай
                    буде проклят...».
                  </p>
                  <p className='text-lg text-blue-100 italic leading-relaxed'>
                    « Для захисту південних земель відвойовничих печенігів
                    наказав збудувати цілу систему укріплень уздовж рік Трубіж ,
                    Сула , Стугна...»
                  </p>
                </div>

                <div className='flex items-center mt-6'>
                  <div className='flex-1 h-0.5 bg-gradient-to-r from-blue-700/50 to-transparent'></div>
                  <span className='mx-4 text-blue-400 text-lg font-medium'>
                    Повість временних літ
                  </span>
                  <div className='flex-1 h-0.5 bg-gradient-to-l from-blue-700/50 to-transparent'></div>
                </div>
              </div>
            </div>
          </div>

          {/* Декоративные элементы */}
          <div className='absolute -top-3 -left-3 w-6 h-6 bg-blue-400 rounded-full opacity-70'></div>
          <div className='absolute -bottom-3 -right-3 w-6 h-6 bg-purple-400 rounded-full opacity-70'></div>
        </div>
      </div>

      {/* Красивое разделение между темами */}
      <div className='relative my-16 py-10 px-4 sm:px-6 lg:px-8'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-full border-t-2 border-blue-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-blue-900 to-purple-900 px-6 py-3 text-lg font-semibold text-blue-200 rounded-full border-2 border-blue-600/50 shadow-lg flex items-center space-x-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 text-blue-300'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
            <span>Наступна тема: Правління Ярослава Мудрого</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 text-blue-300'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}
