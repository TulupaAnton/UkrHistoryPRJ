export function Mstislav () {
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
            Мстислав Великий
          </span>
        </h1>
        <h2 className='text-3xl sm:text-4xl text-amber-200 mb-2'>
          <span className='bg-amber-900/70 px-4 py-2 rounded-lg'>
            1125-1132 рр.
          </span>
        </h2>
        <p className='text-2xl text-amber-300 mb-4'>Син Володимира Мономаха</p>

        <div className='w-64 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto my-8 rounded-full'></div>
        <div className='absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-6xl mx-auto relative z-10'>
        {/* Основная информация о Мстиславе */}
        <div className='p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm mb-10'>
          <h3 className='text-4xl font-semibold mb-6 text-amber-300'>
            Правління Мстислава Великого
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='p-6 bg-slate-900/60 rounded-lg'>
              <h4 className='text-2xl font-bold text-amber-300 mb-3'>
                Досягнення
              </h4>
              <ul className='space-y-3 text-xl'>
                <li className='flex items-start'>
                  <span className='text-amber-400 mr-3 text-2xl'>•</span>
                  <span>Останній одноосібний правитель Русі-України</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-amber-400 mr-3 text-2xl'>•</span>
                  <span>Продовжував зберігати єдність Київської Русі</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-amber-400 mr-3 text-2xl'>•</span>
                  <span>Успішно протистояв половцям</span>
                </li>
              </ul>
            </div>

            <div className='p-6 bg-slate-900/60 rounded-lg'>
              <h4 className='text-2xl font-bold text-amber-300 mb-3'>
                Історичне значення
              </h4>
              <p className='text-xl'>
                Після смерті Мстислава держава остаточно роздробилася на окремі
                самостійні удільні князівства, що поклало початок періоду
                феодальної роздробленості.
              </p>
            </div>
          </div>
        </div>

        {/* Важные даты */}
        <div className='mb-14'>
          <div className='text-center mb-10'>
            <h2 className='text-4xl sm:text-5xl font-bold text-amber-300 mb-6'>
              Важливі дати
            </h2>
            <div className='w-80 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full'></div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='p-6 bg-amber-900/30 rounded-xl border-2 border-amber-500/50 backdrop-blur-sm'>
              <h3 className='text-2xl font-semibold mb-4 text-amber-300 text-center'>
                1125-1132
              </h3>
              <p className='text-xl text-center'>
                Правління Мстислава Великого
              </p>
            </div>

            <div className='p-6 bg-amber-900/30 rounded-xl border-2 border-amber-500/50 backdrop-blur-sm'>
              <h3 className='text-2xl font-semibold mb-4 text-amber-300 text-center'>
                1132
              </h3>
              <p className='text-xl text-center'>
                Початок феодальної роздробленості Русі
              </p>
            </div>
          </div>
        </div>

        {/* Феодальная раздробленность */}
        <div className='mb-14'>
          <div className='text-center mb-10'>
            <h2 className='text-4xl sm:text-5xl font-bold text-rose-300 mb-6'>
              Феодальна роздробленість
            </h2>
            <div className='w-80 h-1.5 bg-gradient-to-r from-rose-400 to-rose-600 mx-auto rounded-full'></div>
          </div>

          <div className='p-8 bg-slate-800/40 rounded-xl border-l-4 border-rose-400 backdrop-blur-sm mb-10'>
            <p className='text-2xl mb-6'>
              Роздробленість — період, коли Русь-Україна перетворилася з єдиної
              централізованої монархії на федеративну монархію, тобто Київська
              держава роздробилася на багато окремих самостійних удільних
              князівств
            </p>
          </div>

          {/* Причины раздробленности */}
          <div className='mb-10'>
            <h3 className='text-4xl font-semibold mb-6 text-rose-300 text-center'>
              Причини роздробленості
            </h3>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='p-6 bg-slate-800/40 rounded-xl border-l-4 border-rose-400 backdrop-blur-sm'>
                <h4 className='text-2xl font-bold text-rose-300 mb-3'>
                  Політичні
                </h4>
                <ul className='space-y-3 text-xl'>
                  <li className='flex items-start'>
                    <span className='text-rose-400 mr-3 text-2xl'>•</span>
                    <span>
                      Відсутність чіткого механізму спадкоємності князівського
                      престолу
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-rose-400 mr-3 text-2xl'>•</span>
                    <span>Зміцніла вотчинна форма землеволодіння</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-rose-400 mr-3 text-2xl'>•</span>
                    <span>
                      Посилився вплив боярства (великих землевласників)
                    </span>
                  </li>
                </ul>
              </div>

              <div className='p-6 bg-slate-800/40 rounded-xl border-l-4 border-rose-400 backdrop-blur-sm'>
                <h4 className='text-2xl font-bold text-rose-300 mb-3'>
                  Економічні та соціальні
                </h4>
                <ul className='space-y-3 text-xl'>
                  <li className='flex items-start'>
                    <span className='text-rose-400 mr-3 text-2xl'>•</span>
                    <span>Занепад торгового шляху "із варягів у греки"</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-rose-400 mr-3 text-2xl'>•</span>
                    <span>Панування натурального господарства</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-rose-400 mr-3 text-2xl'>•</span>
                    <span>Постійні напади половців</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-rose-400 mr-3 text-2xl'>•</span>
                    <span>Різний етнічний склад величезної країни</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Последствия раздробленности */}
          <div>
            <h3 className='text-4xl font-semibold mb-6 text-rose-300 text-center'>
              Наслідки роздробленості
            </h3>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='p-6 bg-slate-800/40 rounded-xl border-l-4 border-rose-400 backdrop-blur-sm'>
                <h4 className='text-2xl font-bold text-rose-300 mb-3'>
                  Позитивні
                </h4>
                <ul className='space-y-3 text-xl'>
                  <li className='flex items-start'>
                    <span className='text-rose-400 mr-3 text-2xl'>•</span>
                    <span>
                      Економічне та культурне піднесення руських князівств
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-rose-400 mr-3 text-2xl'>•</span>
                    <span>Розвиток міст та ремесел</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-rose-400 mr-3 text-2xl'>•</span>
                    <span>Розвиток демократії через відродження віч</span>
                  </li>
                </ul>
              </div>

              <div className='p-6 bg-slate-800/40 rounded-xl border-l-4 border-rose-400 backdrop-blur-sm'>
                <h4 className='text-2xl font-bold text-rose-300 mb-3'>
                  Негативні
                </h4>
                <ul className='space-y-3 text-xl'>
                  <li className='flex items-start'>
                    <span className='text-rose-400 mr-3 text-2xl'>•</span>
                    <span>Втрата єдності та могутності Київської Русі</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-rose-400 mr-3 text-2xl'>•</span>
                    <span>Міжусобні війни між князівствами</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-rose-400 mr-3 text-2xl'>•</span>
                    <span>
                      Послаблення обороноздатності перед зовнішніми ворогами
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Удельные княжества */}
        <div className='mb-14'>
          <div className='text-center mb-10'>
            <h2 className='text-4xl sm:text-5xl font-bold text-emerald-300 mb-6'>
              Удільні князівства
            </h2>
            <div className='w-80 h-1.5 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto rounded-full'></div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='p-8 bg-slate-800/40 rounded-xl border-l-4 border-emerald-400 backdrop-blur-sm'>
              <h3 className='text-3xl font-semibold mb-4 text-emerald-300'>
                Київське князівство
              </h3>
              <p className='text-xl mb-4'>
                Головне місто - Київ. У 1146-1246 роках київський стіл 46 разів
                переходив з рук в руки.
              </p>
              <div className='bg-slate-900/60 p-4 rounded-lg'>
                <h4 className='text-xl font-bold text-emerald-300 mb-2'>
                  Важливі події:
                </h4>
                <ul className='space-y-2 text-lg'>
                  <li className='flex items-start'>
                    <span className='text-emerald-400 mr-2 text-xl'>•</span>
                    <span>
                      <span className='font-bold text-emerald-300'>1169</span> -
                      погром та пограбування Києва Андрієм Боголюбським
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-emerald-400 mr-2 text-xl'>•</span>
                    <span>
                      <span className='font-bold text-emerald-300'>1223</span> -
                      битва на річці Калка з монголами
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className='p-8 bg-slate-800/40 rounded-xl border-l-4 border-emerald-400 backdrop-blur-sm'>
              <h3 className='text-3xl font-semibold mb-4 text-emerald-300'>
                Чернігово-Сіверське князівство
              </h3>
              <p className='text-xl mb-4'>
                Міста: Чернігів, Новгород-Сіверський, Путивль, Брянськ, Курськ,
                Стародуб. Правила династія князів Ольговичів.
              </p>
              <div className='bg-slate-900/60 p-4 rounded-lg'>
                <h4 className='text-xl font-bold text-emerald-300 mb-2'>
                  Важливі події:
                </h4>
                <ul className='space-y-2 text-lg'>
                  <li className='flex items-start'>
                    <span className='text-emerald-400 mr-2 text-xl'>•</span>
                    <span>
                      <span className='font-bold text-emerald-300'>1185</span> -
                      похід князя Ігоря Святославовича на половців
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className='p-8 bg-slate-800/40 rounded-xl border-l-4 border-emerald-400 backdrop-blur-sm'>
              <h3 className='text-3xl font-semibold mb-4 text-emerald-300'>
                Переяславське князівство
              </h3>
              <p className='text-xl mb-4'>
                Головне місто - Переяслав. Політична залежність від Києва. Землі
                князівства часто піддавалися набігам половців.
              </p>
              <div className='bg-slate-900/60 p-4 rounded-lg'>
                <h4 className='text-xl font-bold text-emerald-300 mb-2'>
                  Важливі події:
                </h4>
                <ul className='space-y-2 text-lg'>
                  <li className='flex items-start'>
                    <span className='text-emerald-400 mr-2 text-xl'>•</span>
                    <span>
                      <span className='font-bold text-emerald-300'>
                        1169-1187
                      </span>{' '}
                      - правління Володимира Глібовича
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className='p-8 bg-slate-800/40 rounded-xl border-l-4 border-emerald-400 backdrop-blur-sm'>
              <h3 className='text-3xl font-semibold mb-4 text-emerald-300'>
                Галицьке князівство
              </h3>
              <p className='text-xl mb-4'>
                Засновник - Ростислав Володимирович. У 1141 році відбулося
                об'єднання Галицької землі в одне князівство з центром у Галичі.
              </p>
              <div className='bg-slate-900/60 p-4 rounded-lg'>
                <h4 className='text-xl font-bold text-emerald-300 mb-2'>
                  Особливості:
                </h4>
                <ul className='space-y-2 text-lg'>
                  <li className='flex items-start'>
                    <span className='text-emerald-400 mr-2 text-xl'>•</span>
                    <span>
                      Найбільша могутність при князю Ярославі Осмомислі
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-emerald-400 mr-2 text-xl'>•</span>
                    <span>Надзвичайно впливове боярство</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-emerald-400 mr-2 text-xl'>•</span>
                    <span>Велика роль міст</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Цитаты */}
        <div className='mb-14'>
          <div className='text-center mb-10'>
            <h2 className='text-4xl sm:text-5xl font-bold text-amber-300 mb-6'>
              Важливі цитати
            </h2>
            <div className='w-80 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full'></div>
          </div>

          <div className='grid grid-cols-1 gap-8'>
            <div className='p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
              <h3 className='text-3xl font-semibold mb-4 text-amber-300'>
                З "Слова о полку Ігоревім"
              </h3>
              <blockquote className='text-2xl italic border-l-4 border-amber-500 pl-6 py-4 bg-slate-900/40 rounded-r-lg'>
                "І сказав йому буй-тур Всеволод: «Один брат, один світ світлий
                ти, Ігорю! Обидва ми Святославичі!» ...«Хочу-бо, — сказав Ігор,
                — списа переломити кінець поля половецького; з вами, русичі,
                хочу голову свою положити або напитися шоломом з Дону!..»"
              </blockquote>
              <p className='mt-4 text-xl'>
                Головна ідея твору — заклик до єдності князів у боротьбі з
                іноземними ворогами.
              </p>
            </div>

            <div className='p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
              <h3 className='text-3xl font-semibold mb-4 text-amber-300'>
                Перша згадка назви "Україна"
              </h3>
              <blockquote className='text-2xl italic border-l-4 border-amber-500 pl-6 py-4 bg-slate-900/40 rounded-r-lg'>
                "У тім же поході розболівся Володимир Глібович недугою тяжкою...
                І принесли його в город його Переяславль...і тут преставився він
                ...і плакали по ньому всі переяславці. ...був же він князь
                доблесний у бою, і мужністю відзначався... За ним же Україна
                багато потужила"
              </blockquote>
              <p className='mt-4 text-xl'>
                Важливо! Починаючи з кінця ХІІ ст. (1187 р.) разом з назвою
                «Русь» для позначення південних земель Київської держави
                вживається назва «Україна».
              </p>
            </div>
          </div>
        </div>

        {/* Политическое устройство */}
        <div className='mb-14'>
          <div className='text-center mb-10'>
            <h2 className='text-4xl sm:text-5xl font-bold text-rose-300 mb-6'>
              Політичний устрій Київської держави
            </h2>
            <div className='w-80 h-1.5 bg-gradient-to-r from-rose-400 to-rose-600 mx-auto rounded-full'></div>
          </div>

          <div className='p-8 bg-slate-800/40 rounded-xl border-l-4 border-rose-400 backdrop-blur-sm'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <h3 className='text-2xl font-semibold mb-4 text-rose-300'>
                  Основні риси
                </h3>
                <ul className='space-y-3 text-xl'>
                  <li className='flex items-start'>
                    <span className='text-rose-400 mr-3 text-2xl'>•</span>
                    <span>Форма правління: монархія</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-rose-400 mr-3 text-2xl'>•</span>
                    <span>
                      На чолі держави: великий князь із династії Рюриковичів
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-rose-400 mr-3 text-2xl'>•</span>
                    <span>Система васалітету</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-rose-400 mr-3 text-2xl'>•</span>
                    <span>
                      У кінці ХІ ст. перетворюється на федеративну монархію
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className='text-2xl font-semibold mb-4 text-rose-300'>
                  Інститути влади
                </h3>
                <ul className='space-y-3 text-xl'>
                  <li className='flex items-start'>
                    <span className='text-rose-400 mr-3 text-2xl'>•</span>
                    <span>
                      <span className='font-bold'>Дружина</span> - постійне,
                      професійне військо князя
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-rose-400 mr-3 text-2xl'>•</span>
                    <span>
                      <span className='font-bold'>Боярська рада</span> -
                      дорадчий орган
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-rose-400 mr-3 text-2xl'>•</span>
                    <span>
                      <span className='font-bold'>Віче</span> - міські народні
                      збори вільних громадян
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className='mt-8 p-6 bg-slate-900/60 rounded-lg'>
              <p className='text-xl text-center'>
                Наслідком феодальної роздробленості стала втрата єдності і
                могутності Київської Русі.
              </p>
            </div>
          </div>
        </div>

        {/* Социальная структура */}
        <div className='mb-14'>
          <div className='text-center mb-10'>
            <h2 className='text-4xl sm:text-5xl font-bold text-emerald-300 mb-6'>
              Соціальна структура суспільства
            </h2>
            <div className='w-80 h-1.5 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto rounded-full'></div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <div className='p-6 bg-slate-800/40 rounded-xl border-l-4 border-emerald-400 backdrop-blur-sm'>
              <h3 className='text-2xl font-semibold mb-4 text-emerald-300'>
                Привілейовані верстви
              </h3>
              <ul className='space-y-2 text-xl'>
                <li className='flex items-start'>
                  <span className='text-emerald-400 mr-2 text-2xl'>•</span>
                  <span>Князі</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-emerald-400 mr-2 text-2xl'>•</span>
                  <span>Бояри</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-emerald-400 mr-2 text-2xl'>•</span>
                  <span>Посадники</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-emerald-400 mr-2 text-2xl'>•</span>
                  <span>Воєводи</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-emerald-400 mr-2 text-2xl'>•</span>
                  <span>Духівництво</span>
                </li>
              </ul>
            </div>

            <div className='p-6 bg-slate-800/40 rounded-xl border-l-4 border-emerald-400 backdrop-blur-sm'>
              <h3 className='text-2xl font-semibold mb-4 text-emerald-300'>
                Вільне населення
              </h3>
              <ul className='space-y-2 text-xl'>
                <li className='flex items-start'>
                  <span className='text-emerald-400 mr-2 text-2xl'>•</span>
                  <span>"Лучші люди"</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-emerald-400 mr-2 text-2xl'>•</span>
                  <span>"Молодші люди"</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-emerald-400 mr-2 text-2xl'>•</span>
                  <span>Чернь</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-emerald-400 mr-2 text-2xl'>•</span>
                  <span>Смерди</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-emerald-400 mr-2 text-2xl'>•</span>
                  <span>Закупи</span>
                </li>
              </ul>
            </div>

            <div className='p-6 bg-slate-800/40 rounded-xl border-l-4 border-emerald-400 backdrop-blur-sm'>
              <h3 className='text-2xl font-semibold mb-4 text-emerald-300'>
                Напівзалежні
              </h3>
              <ul className='space-y-2 text-xl'>
                <li className='flex items-start'>
                  <span className='text-emerald-400 mr-2 text-2xl'>•</span>
                  <span>Рядовичі</span>
                </li>
              </ul>
            </div>

            <div className='p-6 bg-slate-800/40 rounded-xl border-l-4 border-emerald-400 backdrop-blur-sm'>
              <h3 className='text-2xl font-semibold mb-4 text-emerald-300'>
                Залежні та поза суспільством
              </h3>
              <ul className='space-y-2 text-xl'>
                <li className='flex items-start'>
                  <span className='text-emerald-400 mr-2 text-2xl'>•</span>
                  <span>Челядь</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-emerald-400 mr-2 text-2xl'>•</span>
                  <span>Холопи</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-emerald-400 mr-2 text-2xl'>•</span>
                  <span>Ізгої</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
