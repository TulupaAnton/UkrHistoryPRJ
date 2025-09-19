export function Culture () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-amber-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-rose-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-emerald-600 rounded-full blur-3xl'></div>
      </div>

      {/* Заголовок */}
      <div className='w-full max-w-6xl mx-auto text-center mb-10 relative z-10'>
        <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent'></div>

        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 mt-4'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500'>
            Культура Київської держави
          </span>
        </h1>

        <div className='w-64 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto my-8 rounded-full'></div>
        <div className='absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-6xl mx-auto relative z-10'>
        {/* Общая информация */}
        <div className='p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm mb-10'>
          <h3 className='text-3xl font-semibold mb-6 text-amber-300'>
            Особеності культури
          </h3>
          <p className='text-xl mb-4'>
            Ґрунтується на{' '}
            <span className='font-bold text-amber-300 text-2xl'>
              візантійських традиціях
            </span>
          </p>
          <p className='text-xl'>
            У зв'язку з роздробленістю формуються{' '}
            <span className='font-bold text-amber-300 text-2xl'>
              різноманітні культурні центри
            </span>
          </p>
        </div>

        {/* Пам'ятки писемності */}
        <div className='mb-14'>
          <div className='text-center mb-10'>
            <h2 className='text-4xl sm:text-5xl font-bold text-amber-300 mb-6'>
              Пам'ятки писемності
            </h2>
            <div className='w-80 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full'></div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
              <h3 className='text-2xl font-semibold mb-6 text-amber-300'>
                Важливі твори
              </h3>
              <ul className='space-y-4 text-xl'>
                <li className='flex items-start'>
                  <span className='text-amber-400 mr-3 text-2xl'>•</span>
                  <span>
                    <span className='font-bold text-amber-300'>
                      "Слово про закон і благодать"
                    </span>{' '}
                    (<span className='font-bold text-amber-300'>≈ 1051 р.</span>
                    , Іларіон)
                  </span>
                </li>
                <li className='flex items-start'>
                  <span className='text-amber-400 mr-3 text-2xl'>•</span>
                  <span>
                    <span className='font-bold text-amber-300'>
                      "Повість минулих літ"
                    </span>{' '}
                    (<span className='font-bold text-amber-300'>1113 р.</span>,
                    Нестор)
                  </span>
                </li>
                <li className='flex items-start'>
                  <span className='text-amber-400 mr-3 text-2xl'>•</span>
                  <span>
                    <span className='font-bold text-amber-300'>
                      "Повчання дітям"
                    </span>{' '}
                    (<span className='font-bold text-amber-300'>1117 р.</span>,
                    Володимир Мономах)
                  </span>
                </li>
                <li className='flex items-start'>
                  <span className='text-amber-400 mr-3 text-2xl'>•</span>
                  <span>
                    <span className='font-bold text-amber-300'>
                      "Слово о полку Ігоревім"
                    </span>{' '}
                    (<span className='font-bold text-amber-300'>1187 р.</span>)
                  </span>
                </li>
                <li className='flex items-start'>
                  <span className='text-amber-400 mr-3 text-2xl'>•</span>
                  <span>
                    <span className='font-bold text-amber-300'>
                      Києво-Печерський патерик
                    </span>{' '}
                    (<span className='font-bold text-amber-300'>ХІІІ ст.</span>)
                  </span>
                </li>
              </ul>
            </div>

            <div className='p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
              <h3 className='text-2xl font-semibold mb-6 text-amber-300'>
                Рукописні книги
              </h3>
              <div className='mb-6'>
                <p className='text-xl mb-4'>
                  <span className='font-bold text-amber-300 text-2xl'>
                    Остромирове Євангеліе
                  </span>{' '}
                  (
                  <span className='font-bold text-amber-300'>
                    1056–1057 рр.
                  </span>
                  ) — найдавніша датована книжна пам'ятка
                </p>
                <div className='mt-6 flex justify-center'>
                  <div className='w-64 h-80 bg-gradient-to-br from-amber-900 to-slate-800 rounded-lg flex items-center justify-center text-center p-4 border-2 border-amber-500/30 overflow-hidden'>
                    <img
                      src='../../../assets/KyivRus/luka.jpg'
                      alt='Євангеліст Лука з Остромирового Євангелія'
                      className='w-full h-full object-cover opacity-80'
                    />
                    <div className='absolute inset-0  flex items-center justify-center'>
                      <span className='text-amber-200 text-lg font-medium bg-amber-900/70 px-4 py-2 rounded'>
                        Євангеліст Лука
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className='text-xl mb-4'>
                  <span className='font-bold text-amber-300 text-2xl'>
                    "Ізборники" Святослава
                  </span>{' '}
                  (
                  <span className='font-bold text-amber-300'>
                    друга половина ХІ ст.
                  </span>
                  )
                </p>
                <div className='mt-6 flex justify-center'>
                  <div className='w-64 h-80 bg-gradient-to-br from-amber-900 to-slate-800 rounded-lg flex items-center justify-center text-center p-4 border-2 border-amber-500/30 overflow-hidden'>
                    <img
                      src='../../../assets/KyivRus/izbornik.jpg'
                      alt='Родина князя Святослава Ярославича'
                      className='w-full h-full object-cover opacity-80'
                    />
                    <div className='absolute inset-0 flex items-end justify-center'>
                      <span className='text-amber-200 text-lg font-medium bg-amber-900/70 px-4 py-2 rounded'>
                        Родина Святослава
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Видатні особистості */}
        <div className='mb-14'>
          <div className='text-center mb-10'>
            <h2 className='text-4xl sm:text-5xl font-bold text-rose-300 mb-6'>
              Видатні особистості
            </h2>
            <div className='w-80 h-1.5 bg-gradient-to-r from-rose-400 to-rose-600 mx-auto rounded-full'></div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='p-8 bg-slate-800/40 rounded-xl border-l-4 border-rose-400 backdrop-blur-sm'>
              <h3 className='text-2xl font-semibold mb-4 text-rose-300'>
                Аліпій (<span className='font-bold'>1050-1114</span>)
              </h3>
              <p className='text-xl'>
                Перше відоме з літопису ім'я староруського художника іконопису,
                один з авторів Києво-Печерського патерика
              </p>
            </div>

            <div className='p-8 bg-slate-800/40 rounded-xl border-l-4 border-rose-400 backdrop-blur-sm'>
              <h3 className='text-2xl font-semibold mb-4 text-rose-300'>
                Агапіт
              </h3>
              <p className='text-xl'>
                Лікар, чернець Києво-Печерського монастиря
              </p>
            </div>
          </div>
        </div>

        {/* Терміни */}
        <div className='mb-14'>
          <div className='text-center mb-10'>
            <h2 className='text-4xl sm:text-5xl font-bold text-emerald-300 mb-6'>
              Важливі терміни
            </h2>
            <div className='w-80 h-1.5 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto rounded-full'></div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='p-6 bg-slate-800/40 rounded-xl border-l-4 border-emerald-400 backdrop-blur-sm'>
              <h3 className='text-2xl font-semibold mb-4 text-emerald-300'>
                Ікони
              </h3>
              <p className='text-lg'>
                Живописне зображення Ісуса Христа, діви Марії, ангелів, святих,
                яке є предметом релігійного поклоніння.
              </p>
            </div>

            <div className='p-6 bg-slate-800/40 rounded-xl border-l-4 border-emerald-400 backdrop-blur-sm'>
              <h3 className='text-2xl font-semibold mb-4 text-emerald-300'>
                Мозаїка
              </h3>
              <p className='text-lg'>
                Зображення, зроблене з окремих непрозорих різнокольорових
                шматочків скла (смальти), щільно припасованих один до одного.
              </p>
            </div>

            <div className='p-6 bg-slate-800/40 rounded-xl border-l-4 border-emerald-400 backdrop-blur-sm'>
              <h3 className='text-2xl font-semibold mb-4 text-emerald-300'>
                Фреска
              </h3>
              <p className='text-lg'>
                Картина, написана водяними фарбами на свіжій вогкій штукатурці.
              </p>
            </div>

            <div className='p-6 bg-slate-800/40 rounded-xl border-l-4 border-emerald-400 backdrop-blur-sm'>
              <h3 className='text-2xl font-semibold mb-4 text-emerald-300'>
                Книжкова мініатюра
              </h3>
              <p className='text-lg'>
                Невеличкий кольоровий малюнок у рукописній книзі.
              </p>
            </div>

            <div className='p-6 bg-slate-800/40 rounded-xl border-l-4 border-emerald-400 backdrop-blur-sm'>
              <h3 className='text-2xl font-semibold mb-4 text-emerald-300'>
                Билини
              </h3>
              <p className='text-lg'>
                Пам'ятки давньоруської усної творчості, у яких розповідалося про
                боротьбу русі з ворогами.
              </p>
            </div>

            <div className='p-6 bg-slate-800/40 rounded-xl border-l-4 border-emerald-400 backdrop-blur-sm'>
              <h3 className='text-2xl font-semibold mb-4 text-emerald-300'>
                Літопис
              </h3>
              <p className='text-lg'>
                Хронологічно послідовний запис історичних подій, зроблений їхнім
                сучасником.
              </p>
            </div>
          </div>
        </div>

        {/* Храми та церкви */}
        <div className='mb-14'>
          <div className='text-center mb-10'>
            <h2 className='text-4xl sm:text-5xl font-bold text-amber-300 mb-6'>
              Храми та церкви
            </h2>
            <div className='w-80 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full'></div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-slate-800/40 rounded-xl overflow-hidden border-2 border-amber-500/30 backdrop-blur-sm'>
              <div className='h-96 overflow-hidden'>
                {' '}
                {/* увеличил высоту */}
                <img
                  src='../../../assets/KyivRus/Spaso-Preobrazhenskiy.png'
                  alt='Спасо-Преображенський собор у Чернігові. 1036 р'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='p-5'>
                <h3 className='text-xl font-semibold text-amber-300 mb-2'>
                  Спасо-Преображенський собор
                </h3>
                <p className='text-lg font-bold text-amber-200'>
                  Чернігів, <span className='text-amber-300'>1036 р.</span>
                </p>
              </div>
            </div>

            <div className='bg-slate-800/40 rounded-xl overflow-hidden border-2 border-amber-500/30 backdrop-blur-sm'>
              <div className='h-96 overflow-hidden'>
                <img
                  src='../../../assets/KyivRus/sofia.jpg'
                  alt='Софійський собор у Києві (перша половина ХІ ст.)'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='p-5'>
                <h3 className='text-xl font-semibold text-amber-300 mb-2'>
                  Софійський собор
                </h3>
                <p className='text-lg font-bold text-amber-200'>
                  Київ,{' '}
                  <span className='text-amber-300'>перша половина ХІ ст.</span>
                </p>
              </div>
            </div>

            {/* остальные карточки тоже с h-96 */}
            <div className='bg-slate-800/40 rounded-xl overflow-hidden border-2 border-amber-500/30 backdrop-blur-sm'>
              <div className='h-96 overflow-hidden'>
                <img
                  src='../../../assets/KyivRus/patniza.jpg'
                  alt="П'ятницька церква в Чернігові. Кінець ХІІ – початок ХІІІ ст"
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='p-5'>
                <h3 className='text-xl font-semibold text-amber-300 mb-2'>
                  П'ятницька церква
                </h3>
                <p className='text-lg font-bold text-amber-200'>
                  Чернігів,{' '}
                  <span className='text-amber-300'>
                    кінець ХІІ – початок ХІІІ ст.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ікони та мініатюри */}
        <div className='mb-14 '>
          <div className='text-center mb-10'>
            <h2 className='text-4xl sm:text-5xl font-bold text-rose-300 mb-6'>
              Ікони та мініатюри
            </h2>
            <div className='w-80 h-1.5 bg-gradient-to-r from-rose-400 to-rose-600 mx-auto rounded-full'></div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-slate-800/40 rounded-xl overflow-hidden border-2 border-rose-500/30 backdrop-blur-sm'>
              <div className='h-120 overflow-hidden'>
                <img
                  src='../../../assets/KyivRus/Oranta-Kyiv.jpg'
                  alt='Мозаїка Богоматері Оранти'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='p-5'>
                <h3 className='text-xl font-semibold text-rose-300 mb-2'>
                  Богоматір Оранта
                </h3>
                <p className='text-lg font-bold text-rose-200'>
                  Мозаїка, Софійський собор
                </p>
              </div>
            </div>

            <div className='bg-slate-800/40 rounded-xl overflow-hidden border-2 border-rose-500/30 backdrop-blur-sm'>
              <div className='h-120 overflow-hidden'>
                <img
                  src='../../../assets/KyivRus/mozaika.jpg'
                  alt='Мозаїка Христа Вседержителя'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='p-5'>
                <h3 className='text-xl font-semibold text-rose-300 mb-2'>
                  Христос Вседержитель
                </h3>
                <p className='text-lg font-bold text-rose-200'>
                  Мозаїка, Софійський собор
                </p>
              </div>
            </div>

            <div className='bg-slate-800/40 rounded-xl overflow-hidden border-2 border-rose-500/30 backdrop-blur-sm'>
              <div className='h-120 overflow-hidden'>
                <img
                  src='../../../assets/KyivRus/materi.jpg'
                  alt='Вишгородська ікона Богородиці'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='p-5'>
                <h3 className='text-xl font-semibold text-rose-300 mb-2'>
                  Вишгородська ікона Богородиці
                </h3>
                <p className='text-lg font-bold text-rose-200'>
                  <span className='text-rose-300'>XII століття</span>
                </p>
              </div>
            </div>

            <div className='bg-slate-800/40 rounded-xl   overflow-hidden border-2 border-rose-500/30 backdrop-blur-sm'>
              <div className='h-120 overflow-hidden'>
                <img
                  src='../../../assets/KyivRus/ikona.jpg'
                  alt='Свенська ікона Богородиці з Антонієм і Феодосієм Печерським'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='p-5'>
                <h3 className='text-xl font-semibold text-rose-300 mb-2'>
                  Свенська ікона Богородиці
                </h3>
                <p className='text-lg font-bold text-rose-200'>
                  З Антонієм і Феодосієм Печерським
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
