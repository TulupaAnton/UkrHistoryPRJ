export function Rebellion () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-4 sm:py-8 px-3 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-green-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-blue-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-emerald-600 rounded-full blur-3xl'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12 px-2'>
        {/* Главный заголовок */}
        <div className='w-full text-center mb-8 sm:mb-12 relative z-10 px-2'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-emerald-400 to-green-500'>
              Підготовка до повстання та воєнні дії
            </span>
          </h1>
          <div className='w-32 sm:w-48 h-1 bg-gradient-to-r from-green-400 to-emerald-600 mx-auto rounded-full'></div>
        </div>

        {/* Подготовка к восстанию */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-green-400 backdrop-blur-sm'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-green-300 text-center'>
            Підготовка до повстання
          </h1>

          <div className='space-y-4 sm:space-y-6'>
            <div className='p-4 sm:p-6 bg-green-900/20 rounded-lg border-l-2 border-green-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                У{' '}
                <span className='font-bold text-green-300 text-2xl sm:text-3xl'>
                  січні 1648 р.
                </span>{' '}
                Б. Хмельницький прибув на Запорозьку Січ: його обрали гетьманом
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-green-900/20 rounded-lg border-l-2 border-green-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Незабаром у Бахчисараї козаки уклали угоду з кримським ханом{' '}
                <span className='font-bold text-green-300 text-2xl sm:text-3xl'>
                  Іслам ІІІ Гіреєм
                </span>{' '}
                про військову допомогу у війні
                <span className='block mt-3 font-bold text-green-300 bg-green-900/40 px-3 py-2 rounded text-lg sm:text-xl'>
                  За службу Б. Хмельницький платив татарам та дозволяв їм брати
                  ясир на українських землях
                </span>
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-green-900/20 rounded-lg border-l-2 border-green-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Розіслані універсали до українського народу із закликом
                піднятися на боротьбу проти свавілля магнатів і шляхти та
                вступати до козацького війська + реєстровці
                <span className='block mt-3 font-bold text-green-300 bg-green-900/40 px-3 py-2 rounded text-lg sm:text-xl'>
                  Покозачення — соціальний процес набуття козацьких прав
                  представниками інших соціальних груп і верств українського
                  населення
                </span>
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-green-900/20 rounded-lg border-l-2 border-green-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Налагодження виробництва пороху, купівлі зброї та набоїв
              </p>
            </div>
          </div>
        </div>

        {/* Карта восстания - увеличенная */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-blue-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 text-blue-300 text-center'>
            🗺️ Карта напрямку повстання
          </h2>
          <div className='flex justify-center'>
            <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-2 border-blue-400 w-full max-w-4xl'>
              <img
                src='../../../assets/NVV/14.jpg'
                alt='Карта напрямку повстання'
                className='w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-2xl'
              />
              <p className='text-xl sm:text-2xl text-blue-200 text-center mt-4 font-medium'>
                Карта напрямку повстання Богдана Хмельницького
              </p>
            </div>
          </div>
        </div>

        {/* Военные действия 1648 года */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-red-300 text-center'>
            ⚔️ Ключові битви 1648 року
          </h1>

          <div className='space-y-6 sm:space-y-8'>
            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                <span className='font-bold text-red-300 text-2xl sm:text-3xl bg-red-900/40 px-3 py-2 rounded block mb-3 text-center'>
                  🎯 Жовті Води (5-6 травня 1648 р.)
                </span>
                <span className='font-bold text-red-300 bg-red-900/40 px-2 py-1 rounded text-lg sm:text-xl'>
                  козацько-татарські війська
                </span>
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                <span className='font-bold text-red-300 text-2xl sm:text-3xl bg-red-900/40 px-3 py-2 rounded block mb-3 text-center'>
                  🎯 Корсунь (16 травня 1648 р.)
                </span>
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                <span className='font-bold text-red-300 text-2xl sm:text-3xl bg-red-900/40 px-3 py-2 rounded block mb-3 text-center'>
                  🎯 Пилявці (11-13 вересня 1648 р.)
                </span>
                <span className='block mt-3 font-bold text-red-300 bg-red-900/40 px-3 py-2 rounded text-lg sm:text-xl'>
                  Поразка польського війська під командуванням Заславського,
                  Остророга і Конецпольського («перини», «латини» і «дитини») за
                  висловом Б. Хмельницького
                </span>
                <span className='block mt-3 text-xl sm:text-2xl'>
                  Звільнення козацькими військами Поділля та Волині, створення
                  сприятливих умов для визволення західноукраїнських земель
                </span>
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                <span className='font-bold text-red-300 text-2xl sm:text-3xl bg-red-900/40 px-3 py-2 rounded block mb-3 text-center'>
                  🎯 Облога Львова, Замостя (жовтень-листопад 1648 р.)
                </span>
                <span className='block mt-2 font-bold text-red-300 bg-red-900/40 px-2 py-1 rounded text-lg sm:text-xl'>
                  В Польші обрано нового короля Яна Казимира
                </span>
                <span className='block mt-2 font-bold text-red-300 bg-red-900/40 px-2 py-1 rounded text-lg sm:text-xl'>
                  Переяславське перемир'я: припинено воєнні дії до весни;
                  визначено кордон розмежування між сторонами; козакам
                  повертають їхні вільності; учасники повстання амністовані
                </span>
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                <span className='font-bold text-red-300 text-2xl sm:text-3xl bg-red-900/40 px-3 py-2 rounded block mb-3 text-center'>
                  🎯 Урочистий в'їзд до Києва (23 грудня 1648 р.)
                </span>
                <span className='font-bold text-red-300 bg-red-900/40 px-3 py-2 rounded text-lg sm:text-xl block mt-3'>
                  Козацьке військо Б. Хмельницького урочисто вступило до Києва,
                  де гетьмана вітали як українського Мойсея, який виведе
                  українців з польського полону
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Цитаты */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-emerald-400 backdrop-blur-sm'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-emerald-300 text-center'>
            📜 Історичні цитати
          </h1>

          <div className='space-y-6'>
            <div className='p-4 sm:p-6 bg-emerald-900/20 rounded-lg border-l-4 border-emerald-400'>
              <p className='text-xl sm:text-2xl leading-relaxed italic text-emerald-200'>
                «Тих польських ратних людей біля Жовтих Вод самовільні козаки,
                з'єднавшись з татарами, всіх побили, а інших у полон побрали
                живими разом із сином коронного гетьмана Потоцького...»
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-emerald-900/20 rounded-lg border-l-4 border-emerald-400'>
              <p className='text-xl sm:text-2xl leading-relaxed italic text-emerald-200'>
                «Стали поляки обозом та вишикували своє військо на рівнині коло
                Корсуня. Того ж ранку вдарив Хмельницький зі своїм та ординським
                військом на поляків. Ті, недовго втримуючи свій стрій, з
                великими втратами відступили...»
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-emerald-900/20 rounded-lg border-l-4 border-emerald-400'>
              <p className='text-xl sm:text-2xl leading-relaxed italic text-emerald-200'>
                «...недалеко відійшовши від Корсуня, на цьому згаданому шляху
                військо було розгромлено, а їх милості пани гетьмани (Микола
                Потоцький, Мартин Калиновський) старшини взяті в татарський
                полон...»
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-emerald-900/20 rounded-lg border-l-4 border-emerald-400'>
              <p className='text-xl sm:text-2xl leading-relaxed italic text-emerald-200'>
                «... Увесь народ, вийшовши з Києва, вся чернь вітала його.
                Академія вітала його промовами як спасителя народу від рабства
                польського, як Мойсея, вбачаючи в імені Богдан добрий знак
                називаючи його Богом данний...»
              </p>
            </div>
          </div>
        </div>

        {/* Продовження повстання 1649 р. */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-yellow-400 backdrop-blur-sm'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-yellow-300 text-center'>
            ⚔️ Продовження повстання (1649 р.)
          </h1>

          <div className='space-y-6'>
            <div className='p-4 sm:p-6 bg-yellow-900/20 rounded-lg border-l-2 border-yellow-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                <span className='font-bold text-yellow-300 text-2xl sm:text-3xl bg-yellow-900/40 px-3 py-2 rounded block mb-3 text-center'>
                  🎯 Облога Збаража (липень-серпень 1649 р.)
                </span>
                Козацькі війська оточили частину польських військ на чолі з{' '}
                <span className='font-bold text-yellow-300'>
                  Я. Вишневецьким
                </span>
                <span className='block mt-3 font-bold text-yellow-300 bg-yellow-900/40 px-3 py-2 rounded text-lg sm:text-xl'>
                  У липні 1649 р. Б. Хмельницький був змушений відправити
                  козацьке військо на чолі з київським полковником М.
                  Кричевським до Білорусі, щоб зупинити наступ на українські
                  землі литовських військ на чолі з Я. Радзивіллом. Наступ
                  литовців був зупинений в битві під Лоєвим.
                </span>
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-yellow-900/20 rounded-lg border-l-2 border-yellow-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                <span className='font-bold text-yellow-300 text-2xl sm:text-3xl bg-yellow-900/40 px-3 py-2 rounded block mb-3 text-center'>
                  🎯 Зборівська битва (серпень 1649 р.)
                </span>
                <span className='font-bold text-yellow-300 bg-yellow-900/40 px-3 py-1 rounded text-lg sm:text-xl'>
                  Важливо!
                </span>{' '}
                Битва козаків з головними частинами польської армії на чолі з
                королем{' '}
                <span className='font-bold text-yellow-300'>
                  Яном Казимиром
                </span>
                <span className='block mt-3 font-bold text-yellow-300 bg-yellow-900/40 px-3 py-2 rounded text-lg sm:text-xl'>
                  Здобуття гетьмана Зборова. Кримський хан перейшов на бік
                  Польщі. Укладено Зборівський мир
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Хронология событий */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-amber-300 text-center'>
            🗓️ Хронологія ключових подій
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
            <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg'>
              <p className='text-2xl sm:text-3xl font-bold text-amber-300 mb-6 text-center'>
                1648 рік
              </p>
              <ul className='space-y-4 text-xl sm:text-2xl'>
                <li className='flex items-start bg-amber-900/30 p-3 rounded-lg'>
                  <span className='w-3 h-3 bg-amber-400 rounded-full mt-3 mr-4'></span>
                  <span>
                    <strong>Січень</strong> — Обраний гетьманом
                  </span>
                </li>
                <li className='flex items-start bg-amber-900/30 p-3 rounded-lg'>
                  <span className='w-3 h-3 bg-amber-400 rounded-full mt-3 mr-4'></span>
                  <span>
                    <strong>Травень</strong> — Жовті Води, Корсунь
                  </span>
                </li>
                <li className='flex items-start bg-amber-900/30 p-3 rounded-lg'>
                  <span className='w-3 h-3 bg-amber-400 rounded-full mt-3 mr-4'></span>
                  <span>
                    <strong>Вересень</strong> — Пилявці
                  </span>
                </li>
                <li className='flex items-start bg-amber-900/30 p-3 rounded-lg'>
                  <span className='w-3 h-3 bg-amber-400 rounded-full mt-3 mr-4'></span>
                  <span>
                    <strong>Грудень</strong> — Урочистий в'їзд до Києва
                  </span>
                </li>
              </ul>
            </div>

            <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg'>
              <p className='text-2xl sm:text-3xl font-bold text-amber-300 mb-6 text-center'>
                1649 рік
              </p>
              <ul className='space-y-4 text-xl sm:text-2xl'>
                <li className='flex items-start bg-amber-900/30 p-3 rounded-lg'>
                  <span className='w-3 h-3 bg-amber-400 rounded-full mt-3 mr-4'></span>
                  <span>
                    <strong>Липень-серпень</strong> — Облога Збаража
                  </span>
                </li>
                <li className='flex items-start bg-amber-900/30 p-3 rounded-lg'>
                  <span className='w-3 h-3 bg-amber-400 rounded-full mt-3 mr-4'></span>
                  <span>
                    <strong>Липень</strong> — Битва під Лоєвим
                  </span>
                </li>
                <li className='flex items-start bg-amber-900/30 p-3 rounded-lg'>
                  <span className='w-3 h-3 bg-amber-400 rounded-full mt-3 mr-4'></span>
                  <span>
                    <strong>Серпень</strong> — Зборівська битва
                  </span>
                </li>
                <li className='flex items-start bg-amber-900/30 p-3 rounded-lg'>
                  <span className='w-3 h-3 bg-amber-400 rounded-full mt-3 mr-4'></span>
                  <span>
                    <strong>Серпень</strong> — Зборівський мир
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Разделитель внизу */}
      <div className='relative mt-12 sm:mt-16 py-6 sm:py-8 px-3 sm:px-6 lg:px-8'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-full border-t-2 border-green-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-xl sm:text-2xl font-semibold text-green-200 rounded-full border-2 border-green-600/50 shadow-lg text-center'>
            Зборівський договір
          </span>
        </div>
      </div>
    </div>
  )
}
