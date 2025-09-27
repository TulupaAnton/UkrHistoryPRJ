export function Posterity_of_Danil () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-4 sm:py-8 px-3 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-blue-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-indigo-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-purple-600 rounded-full blur-3xl'></div>
      </div>

      {/* Заголовок страницы */}
      <div className='w-full max-w-6xl mx-auto text-center mb-8 sm:mb-12 relative z-10 px-2'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500'>
            Держава за нащадків Данила. Занепад держави
          </span>
        </h1>
        <div className='w-32 sm:w-48 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12 px-2'>
        {/* Лев І Данилович */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-2xl border-l-4 border-blue-400 backdrop-blur-sm shadow-xl'>
          <div className='flex flex-col xl:flex-row gap-6 lg:gap-8'>
            {/* Текстовая часть - слева */}
            <div className='flex-1'>
              <div className='mb-6'>
                <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3'>
                  <span className='text-blue-300'>Лев І Данилович</span>{' '}
                  (1264–1301)
                </h2>
                <p className='text-lg sm:text-xl text-blue-200 leading-relaxed'>
                  <span className='font-bold text-red-300'>
                    Держава починає занепадати
                  </span>
                </p>
              </div>

              <div className='space-y-4 sm:space-y-5'>
                <div className='p-4 bg-gradient-to-r from-blue-900/40 to-blue-800/20 rounded-xl border border-blue-500/30'>
                  <p className='text-lg sm:text-xl font-semibold text-blue-200 flex items-center gap-2'>
                    <span className='w-3 h-3 bg-blue-400 rounded-full'></span>
                    Переніс столицю у місто Львів
                  </p>
                </div>

                <div className='p-4 bg-gradient-to-r from-blue-900/40 to-blue-800/20 rounded-xl border border-blue-500/30'>
                  <p className='text-lg sm:text-xl font-semibold text-blue-200 flex items-center gap-2'>
                    <span className='w-3 h-3 bg-blue-400 rounded-full'></span>
                    Вів переважно наступальні війни - приєднав частину
                    Закарпатської Русі і Люблінську землю
                  </p>
                </div>

                <div className='p-4 bg-gradient-to-r from-blue-900/40 to-blue-800/20 rounded-xl border border-blue-500/30'>
                  <p className='text-lg sm:text-xl font-semibold text-blue-200 flex items-center gap-2'>
                    <span className='w-3 h-3 bg-blue-400 rounded-full'></span>
                    Підтримував дипломатичні відносини з Німецьким орденом,
                    Угорщиною, Чехією, Польщею, Литвою
                  </p>
                </div>

                <div className='p-4 bg-gradient-to-r from-blue-900/40 to-blue-800/20 rounded-xl border border-blue-500/30'>
                  <p className='text-lg sm:text-xl text-blue-200 flex items-center gap-2'>
                    <span className='w-3 h-3 bg-blue-400 rounded-full'></span>
                    Визнав зверхність Золотої Орди
                  </p>
                </div>

                <div className='p-4 bg-gradient-to-r from-blue-900/40 to-blue-800/20 rounded-xl border border-blue-500/30'>
                  <p className='text-lg sm:text-xl text-blue-200 flex items-center gap-2'>
                    <span className='w-3 h-3 bg-blue-400 rounded-full'></span>
                    На Волині правив від імені князя син Василька Володимир
                    Василькович. Літописець називає його книжником і філософом.
                  </p>
                </div>
              </div>

              {/* Цитата */}
              <div className='mt-6 p-4 bg-blue-900/30 rounded-lg border-l-4 border-blue-400'>
                <p className='text-sm sm:text-base text-blue-200 italic'>
                  «...Переніс свою столицю у місто Львів, що сам будував ще за
                  батька. Він жив у злагоді з татарами, з ханами їх Ногаєм та
                  Тулабугою ходив на Польщу, ...здобув для сина свого Юрія город
                  Люблін. З цими ж таки ханами ходив він і на Литву та на
                  Угорщину...Усіляко старався втримати в Галичині батьківські
                  порядки...»
                </p>
              </div>
            </div>

            {/* Изображение - справа */}
            <div className='flex-1 min-w-0'>
              <div className='bg-gradient-to-br from-blue-900 to-slate-800 rounded-2xl p-4 sm:p-6 border-2 border-blue-500/40 shadow-2xl h-full'>
                <div className='flex flex-col items-center h-full'>
                  <div className='mb-4 sm:mb-6'>
                    <img
                      src='../../../assets/GaliciaVolynPower/Lev1.jpg'
                      alt='Лев І Данилович'
                      className='w-full max-w-2xl h-48 sm:h-64 lg:h-80 xl:h-96 rounded-xl shadow-lg object-cover'
                    />
                  </div>

                  <div className='text-center flex-1 flex flex-col justify-center'>
                    <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3'>
                      Лев І Данилович
                    </h3>
                    <p className='text-blue-200 text-base sm:text-lg mb-4 leading-relaxed'>
                      Князь Галицько-Волинський (1264-1301), засновник міста
                      Львів, продовжив політику батька Данила Романовича.
                    </p>

                    <div className='flex flex-wrap gap-2 justify-center'>
                      <span className='bg-blue-800/60 text-blue-100 px-3 py-2 rounded-full text-sm font-medium'>
                        🗓️ 1264-1301
                      </span>
                      <span className='bg-blue-800/60 text-blue-100 px-3 py-2 rounded-full text-sm font-medium'>
                        🏛️ Столиця: Львів
                      </span>
                      <span className='bg-blue-800/60 text-blue-100 px-3 py-2 rounded-full text-sm font-medium'>
                        ⚔️ Воєнні походи
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Юрій І Львович */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-2xl border-l-4 border-purple-400 backdrop-blur-sm shadow-xl'>
          <div className='flex flex-col xl:flex-row gap-6 lg:gap-8'>
            {/* Текстовая часть - слева */}
            <div className='flex-1'>
              <div className='mb-6'>
                <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3'>
                  <span className='text-purple-300'>Юрій І Львович</span>{' '}
                  (1301-1308/15 рр.)
                </h2>
                <p className='text-lg sm:text-xl text-purple-200 leading-relaxed'>
                  <span className='font-bold text-green-300'>
                    Повернув єдність і могутність Галицько-Волинській державі
                  </span>
                </p>
              </div>

              <div className='space-y-4 sm:space-y-5'>
                <div className='p-4 bg-gradient-to-r from-purple-900/40 to-purple-800/20 rounded-xl border border-purple-500/30'>
                  <p className='text-lg sm:text-xl font-semibold text-purple-200 flex items-center gap-2'>
                    <span className='w-3 h-3 bg-purple-400 rounded-full'></span>
                    Мав титул короля
                  </p>
                </div>

                <div className='p-4 bg-gradient-to-r from-purple-900/40 to-purple-800/20 rounded-xl border border-purple-500/30'>
                  <p className='text-lg sm:text-xl font-semibold text-purple-200 flex items-center gap-2'>
                    <span className='w-3 h-3 bg-purple-400 rounded-full'></span>
                    Перенесення столиці до Володимира
                  </p>
                </div>

                <div className='p-4 bg-gradient-to-r from-purple-900/40 to-purple-800/20 rounded-xl border border-purple-500/30'>
                  <p className='text-lg sm:text-xl font-semibold text-purple-200 flex items-center gap-2'>
                    <span className='w-3 h-3 bg-purple-400 rounded-full'></span>
                    Люблінські землі захопила Польща, частину Закарпаття –
                    Угорщина
                  </p>
                </div>

                <div className='p-4 bg-gradient-to-r from-purple-900/40 to-purple-800/20 rounded-xl border border-purple-500/30'>
                  <p className='text-lg sm:text-xl text-purple-200 flex items-center gap-2'>
                    <span className='w-3 h-3 bg-purple-400 rounded-full'></span>
                    <span className='font-bold'>1303 р.</span> (зустрічається
                    також 1302 р.) - заснування Галицької православної
                    митрополії
                  </p>
                </div>
              </div>
            </div>

            {/* Изображение - справа */}
            <div className='flex-1 min-w-0'>
              <div className='bg-gradient-to-br from-purple-900 to-slate-800 rounded-2xl p-4 sm:p-6 border-2 border-purple-500/40 shadow-2xl h-full'>
                <div className='flex flex-col items-center h-full'>
                  <div className='mb-4 sm:mb-6'>
                    <img
                      src='../../../assets/GaliciaVolynPower/Ura1.jpg'
                      alt='Юрій І Львович'
                      className='w-full max-w-2xl h-48 sm:h-64 lg:h-80 xl:h-96 rounded-xl shadow-lg object-cover'
                    />
                  </div>

                  <div className='text-center flex-1 flex flex-col justify-center'>
                    <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3'>
                      Юрій І Львович
                    </h3>
                    <p className='text-purple-200 text-base sm:text-lg mb-4 leading-relaxed'>
                      Король Русі, останній представник династії Романовичів,
                      який правив самостійно.
                    </p>

                    <div className='flex flex-wrap gap-2 justify-center'>
                      <span className='bg-purple-800/60 text-purple-100 px-3 py-2 rounded-full text-sm font-medium'>
                        🗓️ 1301-1308/15
                      </span>
                      <span className='bg-purple-800/60 text-purple-100 px-3 py-2 rounded-full text-sm font-medium'>
                        👑 Король Русі
                      </span>
                      <span className='bg-purple-800/60 text-purple-100 px-3 py-2 rounded-full text-sm font-medium'>
                        ⛪ Митрополія 1303
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Лев ІІ + Андрій І */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-2xl border-l-4 border-red-400 backdrop-blur-sm shadow-xl'>
          <div className='flex flex-col xl:flex-row gap-6 lg:gap-8'>
            {/* Текстовая часть - слева */}
            <div className='flex-1'>
              <div className='mb-6'>
                <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3'>
                  <span className='text-red-300'>Лев ІІ + Андрій І</span>{' '}
                  (1308/1315–1323)
                </h2>
                <p className='text-lg sm:text-xl text-red-200 leading-relaxed'>
                  <span className='font-bold text-red-300'>
                    Одночасно загинули в битві з монголами
                  </span>
                </p>
              </div>

              <div className='space-y-4 sm:space-y-5'>
                <div className='p-4 bg-gradient-to-r from-red-900/40 to-red-800/20 rounded-xl border border-red-500/30'>
                  <p className='text-lg sm:text-xl font-semibold text-red-200 flex items-center gap-2'>
                    <span className='w-3 h-3 bg-red-400 rounded-full'></span>
                    Сини правили спільно в Галичині й на Волині
                  </p>
                </div>

                <div className='p-4 bg-gradient-to-r from-red-900/40 to-red-800/20 rounded-xl border border-red-500/30'>
                  <p className='text-lg sm:text-xl font-semibold text-red-200 flex items-center gap-2'>
                    <span className='w-3 h-3 bg-red-400 rounded-full'></span>
                    Антиординський союз
                  </p>
                </div>

                <div className='p-4 bg-gradient-to-r from-red-900/40 to-red-800/20 rounded-xl border border-red-500/30'>
                  <p className='text-lg sm:text-xl text-red-200 flex items-center gap-2'>
                    <span className='w-3 h-3 bg-red-400 rounded-full'></span>
                    <span className='font-bold text-red-300'>
                      Закінчується пряма династія по чоловічій лінії Романовичів
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Изображение - справа */}
            <div className='flex-1 min-w-0'>
              <div className='bg-gradient-to-br from-red-900 to-slate-800 rounded-2xl p-4 sm:p-6 border-2 border-red-500/40 shadow-2xl h-full'>
                <div className='flex flex-col items-center h-full'>
                  <div className='mb-4 sm:mb-6'>
                    <img
                      src='../../../assets/GaliciaVolynPower/Ura2.jpg'
                      alt='Лев ІІ та Андрій І'
                      className='w-full max-w-2xl h-48 sm:h-64 lg:h-80 xl:h-96 rounded-xl shadow-lg object-cover'
                    />
                  </div>

                  <div className='text-center flex-1 flex flex-col justify-center'>
                    <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3'>
                      Лев ІІ та Андрій І
                    </h3>
                    <p className='text-red-200 text-base sm:text-lg mb-4 leading-relaxed'>
                      Останні представники династії Романовичів, які загинули
                      разом у битві з монголами.
                    </p>

                    <div className='flex flex-wrap gap-2 justify-center'>
                      <span className='bg-red-800/60 text-red-100 px-3 py-2 rounded-full text-sm font-medium'>
                        🗓️ 1308/15-1323
                      </span>
                      <span className='bg-red-800/60 text-red-100 px-3 py-2 rounded-full text-sm font-medium'>
                        ⚔️ Загибель у битві
                      </span>
                      <span className='bg-red-800/60 text-red-100 px-3 py-2 rounded-full text-sm font-medium'>
                        👑 Кінець династії
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Юрій ІІ Болеслав */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-2xl border-l-4 border-orange-400 backdrop-blur-sm shadow-xl'>
          <div className='flex flex-col xl:flex-row gap-6 lg:gap-8'>
            {/* Текстовая часть - слева */}
            <div className='flex-1'>
              <div className='mb-6'>
                <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3'>
                  <span className='text-orange-300'>Юрій ІІ Болеслав</span>{' '}
                  (1325–1340)
                </h2>
                <p className='text-lg sm:text-xl text-orange-200 leading-relaxed italic'>
                  «Останній правитель Галицько-Волинської держави 1325–1340 рр.
                  Був отруєний галицькими боярами. Після його смерті українські
                  землі потрапляють під владу іноземних держав.»
                </p>
              </div>

              <div className='space-y-4 sm:space-y-5'>
                <div className='p-4 bg-gradient-to-r from-orange-900/40 to-orange-800/20 rounded-xl border border-orange-500/30'>
                  <p className='text-lg sm:text-xl font-semibold text-orange-200 flex items-center gap-2'>
                    <span className='w-3 h-3 bg-orange-400 rounded-full'></span>
                    Рада бояр обрала галицьким князем поляка (католика) - син
                    Марії, дочки Юрія І; зійшовши на престол, взяв ім'я Юрія ІІ
                  </p>
                </div>

                <div className='p-4 bg-gradient-to-r from-orange-900/40 to-orange-800/20 rounded-xl border border-orange-500/30'>
                  <p className='text-lg sm:text-xl font-semibold text-orange-200 flex items-center gap-2'>
                    <span className='w-3 h-3 bg-orange-400 rounded-full'></span>
                    Збільшилося число іноземців при дворі
                  </p>
                </div>

                <div className='p-4 bg-gradient-to-r from-orange-900/40 to-orange-800/20 rounded-xl border border-orange-500/30'>
                  <p className='text-lg sm:text-xl font-semibold text-orange-200 flex items-center gap-2'>
                    <span className='w-3 h-3 bg-orange-400 rounded-full'></span>
                    Галицькі бояри отруїли
                  </p>
                </div>

                <div className='p-4 bg-gradient-to-r from-orange-900/40 to-orange-800/20 rounded-xl border border-orange-500/30'>
                  <p className='text-lg sm:text-xl text-orange-200 flex items-center gap-2'>
                    <span className='w-3 h-3 bg-orange-400 rounded-full'></span>
                    <span className='font-bold'>
                      Останній князь Галицько-Волинської держави
                    </span>
                  </p>
                </div>

                <div className='p-4 bg-gradient-to-r from-orange-900/40 to-orange-800/20 rounded-xl border border-orange-500/30'>
                  <p className='text-lg sm:text-xl text-orange-200 flex items-center gap-2'>
                    <span className='w-3 h-3 bg-orange-400 rounded-full'></span>
                    Допомагав іноземним колоністам опановувати руські землі
                  </p>
                </div>

                <div className='p-4 bg-gradient-to-r from-orange-900/40 to-orange-800/20 rounded-xl border border-orange-500/30'>
                  <p className='text-lg sm:text-xl text-orange-200 flex items-center gap-2'>
                    <span className='w-3 h-3 bg-orange-400 rounded-full'></span>
                    Сприяв поширенню католицизму
                  </p>
                </div>

                <div className='p-4 bg-gradient-to-r from-red-900/40 to-red-800/20 rounded-xl border border-red-500/30'>
                  <p className='text-lg sm:text-xl font-bold text-red-300 flex items-center gap-2'>
                    <span className='w-3 h-3 bg-red-400 rounded-full'></span>
                    <span className='font-bold'>1340 р.</span> - кінець
                    незалежності Галицько-Волинської держави
                  </p>
                </div>
              </div>
            </div>

            {/* Изображение - справа */}
            <div className='flex-1 min-w-0'>
              <div className='bg-gradient-to-br from-orange-900 to-slate-800 rounded-2xl p-4 sm:p-6 border-2 border-orange-500/40 shadow-2xl h-full'>
                <div className='flex flex-col items-center h-full'>
                  <div className='mb-4 sm:mb-6'>
                    <img
                      src='../../../assets/GaliciaVolynPower/Yuri_II_Boleslav.jpg'
                      alt='Юрій ІІ Болеслав'
                      className='w-full max-w-2xl h-48 sm:h-64 lg:h-80 xl:h-96 rounded-xl shadow-lg object-cover'
                    />
                  </div>

                  <div className='text-center flex-1 flex flex-col justify-center'>
                    <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3'>
                      Юрій ІІ Болеслав
                    </h3>
                    <p className='text-orange-200 text-base sm:text-lg mb-4 leading-relaxed'>
                      Останній правитель Галицько-Волинської держави, отруєний
                      боярами. Його смерть призвела до розпаду держави.
                    </p>

                    <div className='flex flex-wrap gap-2 justify-center'>
                      <span className='bg-orange-800/60 text-orange-100 px-3 py-2 rounded-full text-sm font-medium'>
                        🗓️ 1325-1340
                      </span>
                      <span className='bg-orange-800/60 text-orange-100 px-3 py-2 rounded-full text-sm font-medium'>
                        ⚰️ Отруєний
                      </span>
                      <span className='bg-orange-800/60 text-orange-100 px-3 py-2 rounded-full text-sm font-medium'>
                        👑 Останній князь
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Цитаты */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-indigo-400 backdrop-blur-sm'>
          <h1 className='text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-indigo-300 text-center'>
            Цитати про нащадків Данила
          </h1>

          <div className='space-y-4 sm:space-y-6'>
            <div className='p-3 sm:p-4 bg-indigo-900/20 rounded-lg border-l-2 border-indigo-400'>
              <p className='text-base sm:text-lg leading-relaxed italic'>
                «Онук Данила Романовича, правитель Галицько-Волинської держави
                1301–1308 рр. Носив титул короля Русі. Заснував у 1303 р.
                Галицьку церковну митрополію.»
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-indigo-900/20 rounded-lg border-l-2 border-indigo-400'>
              <p className='text-base sm:text-lg leading-relaxed italic'>
                «Володар Галицько-Волинського князівства зі столицею у м.
                Володимир. Титулував себе "королем Русі, князем Лодомерії". Його
                правління було періодом розквіту держави...»
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-indigo-900/20 rounded-lg border-l-2 border-indigo-400'>
              <p className='text-base sm:text-lg leading-relaxed italic'>
                «Божою милістю був князем і дідичем королівства Русі, ...став
                розмножати число латинників і їх віру, ...принаджував з різних
                країв католицьких священиків і богословів, бажаючи защепити їхню
                віру в русинів...»
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-indigo-900/20 rounded-lg border-l-2 border-indigo-400'>
              <p className='text-base sm:text-lg leading-relaxed italic'>
                «З поданого до нас прохання цього короля ми недавно довідалися,
                що коли... народ русинів за допомогою отрути вбив Болеслава,
                князя Русі.., тоді король, вражений цим злочином і прагнучи
                помститися за кривду християнської віри, напав на Руську землю,
                щоб завоювати цей народ, який і йому самому завдав багато
                шкоди...»
              </p>
            </div>
          </div>
        </div>

        {/* Завершение существования государства */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-red-300 text-center'>
            Завершення існування Галицько-Волинської держави
          </h2>

          <div className='p-4 bg-red-900/30 rounded-lg mb-6'>
            <p className='text-lg sm:text-xl leading-relaxed text-red-200'>
              Напад польського короля Казимира ІІІ, який пограбував Львів та
              інші міста. Королівство розпалося: Волинь запросила на стіл
              Любарта Гедиміновича, а в Галичині «управителем» став боярин
              Дмитро Дедько.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
            <div className='p-3 sm:p-4 bg-red-900/20 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed font-bold text-red-300 mb-2'>
                Волинь
              </p>
              <p className='text-base sm:text-lg leading-relaxed'>
                Запросила на стіл Любарта Гедиміновича
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-red-900/20 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed font-bold text-red-300 mb-2'>
                Галичина
              </p>
              <p className='text-base sm:text-lg leading-relaxed'>
                «Управителем» став боярин Дмитро Дедько
              </p>
            </div>
          </div>
        </div>

        {/* Историческое значение */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-green-400 backdrop-blur-sm'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-green-300 text-center'>
            Історичне значення Галицько-Волинської держави
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
            <div className='p-3 sm:p-4 bg-green-900/30 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Захистила від завоювання та асиміляції південну та західну гілки
                східних слов'ян
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-green-900/30 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Після занепаду Києва стала центром економічного і політичного
                життя
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-green-900/30 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Упродовж століття після монгольської навали забезпечувала
                безперервність розвитку традицій самостійного державного життя
                на українських землях
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-green-900/30 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Своєю орієнтацією на Захід сприяла збільшенню можливостей
                поширення західноєвропейських культурних впливів
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Разделитель внизу */}
      <div className='relative mt-12 sm:mt-16 py-6 sm:py-8 px-3 sm:px-6 lg:px-8'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-full border-t-2 border-blue-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold text-blue-200 rounded-full border-2 border-blue-600/50 shadow-lg text-center'>
            Культура Галицько-Волинської держави
          </span>
        </div>
      </div>
    </div>
  )
}
