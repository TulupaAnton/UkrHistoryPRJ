export function Mazepaa () {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-6 sm:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Фоновые декоративные элементы */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-1/4 left-1/4 w-80 h-80 bg-amber-500 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse delay-1000'></div>
        <div className='absolute top-1/2 left-1/2 w-72 h-72 bg-red-500 rounded-full blur-3xl animate-pulse delay-500'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-7xl mx-auto relative z-10 space-y-10 sm:space-y-16'>
        {/* Заголовок */}
        <header className='text-center space-y-6 sm:space-y-8'>
          <div className='space-y-4'>
            <h1 className='text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight'>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500'>
                Іван Мазепа
              </span>
            </h1>
            <div className='text-3xl sm:text-4xl lg:text-5xl text-amber-300 font-bold'>
              1687 – 1709
            </div>
          </div>

          <div className='space-y-4'>
            <p className='text-2xl sm:text-3xl lg:text-4xl text-amber-200 font-semibold leading-tight'>
              Гетьман України • Меценат • Політичний стратег
            </p>
            <div className='w-40 sm:w-56 h-2 bg-gradient-to-r from-amber-400 to-orange-600 mx-auto rounded-full shadow-lg'></div>
          </div>
        </header>

        {/* Основная секция с фото и образованием */}
        <section className='grid grid-cols-1 xl:grid-cols-3 gap-8 sm:gap-12'>
          {/* Фото */}
          <div className='xl:col-span-1 flex justify-center'>
            <div className='relative group'>
              <div className='absolute -inset-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity'></div>
              <div className='relative p-6 bg-slate-800/60 rounded-xl border-2 border-amber-400/30 backdrop-blur-sm'>
                <img
                  src='../../../assets/Mazepa/Mazepa.webp'
                  alt='Іван Мазепа'
                  className='w-full max-w-sm rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-300'
                />
                <p className='text-base sm:text-lg text-amber-400 italic mt-4 text-center'>
                  Справжня зовнішність невідома
                </p>
              </div>
            </div>
          </div>

          {/* Образование и карьера */}
          <div className='xl:col-span-2 space-y-8'>
            <div className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-amber-400 backdrop-blur-sm'>
              <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-300 mb-8 text-center'>
                🎓 Освіта та кар'єра
              </h2>

              <div className='space-y-6 text-lg sm:text-xl lg:text-2xl leading-relaxed'>
                <p>
                  Навчався в{' '}
                  <span className='font-bold text-amber-300 bg-amber-900/30 px-2 py-1 rounded'>
                    Києво-Могилянській колегії
                  </span>{' '}
                  та єзуїтській колегії у Варшаві
                </p>

                <p>
                  Служив у польського короля, гетьманів{' '}
                  <span className='font-bold text-white bg-slate-700/50 px-2 py-1 rounded'>
                    П. Дорошенка
                  </span>{' '}
                  та{' '}
                  <span className='font-bold text-white bg-slate-700/50 px-2 py-1 rounded'>
                    І. Самойловича
                  </span>
                  , де здобув славу дипломата
                </p>

                <div className='p-6 bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-xl border-l-4 border-amber-400 mt-6'>
                  <p className='text-xl sm:text-2xl italic text-amber-200 text-center'>
                    «Його вважали одним з найбільших і найбагатших феодалів
                    Європи»
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ключевые даты */}
        <section className='p-6 sm:p-8 lg:p-10 bg-slate-800/50 rounded-2xl border-l-4 border-emerald-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 text-emerald-300 text-center'>
            📅 Ключові дати
          </h2>

          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
            {[
              { year: '1687', text: 'Початок гетьманування', color: 'amber' },
              { year: '1701', text: 'Статус академії', color: 'emerald' },
              { year: '1708', text: 'Союз зі Швецією', color: 'rose' },
              { year: '1709', text: 'Кінець гетьманування', color: 'violet' }
            ].map((item, index) => (
              <div
                key={index}
                className={`p-4 sm:p-6 bg-slate-800/60 rounded-xl border-l-4 border-${item.color}-400 backdrop-blur-sm text-center transform hover:scale-105 transition-transform duration-300`}
              >
                <div
                  className={`text-2xl sm:text-3xl lg:text-4xl font-black text-${item.color}-300 mb-3`}
                >
                  {item.year}
                </div>
                <p className='text-lg sm:text-xl lg:text-2xl font-medium'>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Культурные достижения */}
        <section className='p-6 sm:p-8 lg:p-10 bg-slate-800/50 rounded-2xl border-l-4 border-emerald-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 text-emerald-300 text-center'>
            🏛️ Культурні досягнення
          </h2>

          <div className='space-y-6 sm:space-y-8'>
            {[
              'Домігся для Києво-Могилянського колегіуму статусу академії - 1701 р.',
              'Сприяв заснуванню академічної бібліотеки та заснував Чернігівський колегіум',
              'Відбудова в Києві Софійського та Михайлівського Золотоверхого соборів'
            ].map((achievement, index) => (
              <div
                key={index}
                className='p-6 bg-emerald-900/20 rounded-xl border-l-4 border-emerald-400 transform hover:scale-[1.02] transition-transform duration-300'
              >
                <p className='text-xl sm:text-2xl lg:text-3xl leading-relaxed text-center'>
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Гравюра */}
        <section className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
          <div className='bg-gradient-to-br from-amber-900 to-slate-800 rounded-xl p-3 sm:p-4 border-2 border-amber-500/30 shadow-lg'>
            <img
              src='../../../assets/Mazepa/image.webp'
              alt='Гравюра «Іван Мазепа серед своїх добрих справ»'
              className='w-full h-auto max-w-[80%] sm:max-w-[70%] lg:max-w-[60%] rounded-lg shadow-md mx-auto'
            />
            <p className='text-center text-amber-200 mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg italic'>
              Гравюра «Іван Мазепа серед своїх добрих справ». 1706 р.
            </p>
          </div>
        </section>
        {/* Политика */}
        <section className='p-6 sm:p-8 lg:p-10 bg-slate-800/50 rounded-2xl border-l-4 border-violet-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 text-violet-300 text-center'>
            ⚖️ Політика Мазепи
          </h2>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8'>
            <div className='p-6 sm:p-8 bg-violet-900/20 rounded-xl border-l-4 border-violet-400 transform hover:scale-[1.02] transition-transform duration-300'>
              <h3 className='text-2xl sm:text-3xl font-bold text-violet-300 mb-6 text-center'>
                🏠 Внутрішня політика
              </h3>
              <div className='space-y-4 text-lg sm:text-xl lg:text-2xl leading-relaxed'>
                <p>
                  Зміцнював владу гетьмана, спираючись на козацьку верхівку{' '}
                  <span className='font-bold text-white'>
                    «бунчукові товариші»
                  </span>
                </p>
                <p>
                  Бачив Україну становою державою західноєвропейського зразка
                </p>
              </div>
            </div>

            <div className='p-6 sm:p-8 bg-violet-900/20 rounded-xl border-l-4 border-violet-400 transform hover:scale-[1.02] transition-transform duration-300'>
              <h3 className='text-2xl sm:text-3xl font-bold text-violet-300 mb-6 text-center'>
                🌍 Зовнішня політика
              </h3>
              <div className='space-y-4 text-lg sm:text-xl lg:text-2xl leading-relaxed'>
                <p>Підтримував дипломатичні зносини з багатьма державами</p>
                <p>
                  Участь козаків в{' '}
                  <span className='font-bold text-white'>
                    Азовських походах 1695-1696 pp.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Колотацькі статті */}
        <section className='p-6 sm:p-8 lg:p-10 bg-slate-800/50 rounded-2xl border-l-4 border-orange-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 text-orange-300 text-center'>
            📜 Колотацькі статті (1687)
          </h2>

          <div className='space-y-6 sm:space-y-8'>
            {[
              'Гетьман не мав права без царського указу позбавляти старшину керівних посад',
              'Обмежувалося право гетьмана розпоряджатися військовими землями',
              'Зберігалося 30 тис. реєстрове козацьке військо та компанійські полки',
              'Відмовився від претензій на Правобережжя'
            ].map((article, index) => (
              <div
                key={index}
                className='p-6 bg-orange-900/20 rounded-xl border-l-4 border-orange-400 transform hover:scale-[1.02] transition-transform duration-300'
              >
                <p className='text-xl sm:text-2xl lg:text-3xl leading-relaxed text-center'>
                  {article}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Цитаты */}
        <section className='p-6 sm:p-8 lg:p-10 bg-slate-800/50 rounded-2xl border-l-4 border-amber-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 text-amber-300 text-center'>
            📖 Історичні цитати
          </h2>

          <div className='space-y-6 sm:space-y-8'>
            {[
              {
                text: '«Гетьман мав удаватися до особливих заходів, аби "...усіма силами з\'єднувати в міцну й нерозривну згоду обидва руські народи", щоб "...Малоросію не називали Гетьманською, лише визнавали землею, яка знаходиться B царській самодержавній владі»',
                author: 'Колотацькі статті'
              },
              {
                text: '«...Великий славний муж, що залишився на старі літа без нащадків майном, жертвував усім, щоб вибороти своїй 3 величезним волю Батьківщині. Він не завагався зректися всього... за визволення рідного краю...»',
                author: 'Про патріотизм Мазепи'
              },
              {
                text: '«З початком Північної війни між Росією і Швецією (1700 р.) гетьман шукає нових зовнішньополітичних орієнтирів. 1708 p. уклав таємний українсько-шведський союз проти Росії...»',
                author: 'Зовнішня політика'
              }
            ].map((quote, index) => (
              <div
                key={index}
                className='p-6 sm:p-8 bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-xl border-l-4 border-amber-400 transform hover:scale-[1.02] transition-transform duration-300'
              >
                <p className='text-xl sm:text-2xl lg:text-3xl leading-relaxed italic text-amber-200 mb-4'>
                  {quote.text}
                </p>
                <p className='text-lg sm:text-xl text-amber-400 font-semibold text-right'>
                  — {quote.author}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Историческое значение */}
        <section className='p-6 sm:p-8 lg:p-10 bg-slate-800/50 rounded-2xl border-l-4 border-red-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 text-red-300 text-center'>
            🎯 Історичне значення
          </h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {[
              {
                icon: '🏛️',
                title: 'Культурне відродження',
                desc: 'Розквіт освіти та архітектури в Україні'
              },
              {
                icon: '⚔️',
                title: 'Політична стратегія',
                desc: 'Спробу створити незалежну Українську державу'
              },
              {
                icon: '🌍',
                title: 'Міжнародні союзи',
                desc: 'Українсько-шведський союз проти Росії'
              },
              {
                icon: '📚',
                title: 'Меценатство',
                desc: 'Підтримка освіти та будівництво храмів'
              }
            ].map((item, index) => (
              <div
                key={index}
                className='p-6 bg-red-900/20 rounded-xl transform hover:scale-105 transition-transform duration-300 group'
              >
                <div className='text-3xl sm:text-4xl mb-4 text-center group-hover:scale-110 transition-transform duration-300'>
                  {item.icon}
                </div>
                <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold text-red-300 mb-4 text-center'>
                  {item.title}
                </h3>
                <p className='text-lg sm:text-xl lg:text-2xl text-center leading-relaxed'>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Футер */}
      <footer className='relative mt-16 sm:mt-20 py-8 sm:py-12'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-full border-t-2 border-amber-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-8 sm:px-12 py-4 sm:py-6 text-2xl sm:text-3xl font-bold text-amber-200 rounded-2xl border-2 border-amber-600/50 shadow-2xl text-center backdrop-blur-sm'>
            Паліївщина
          </span>
        </div>
      </footer>
    </div>
  )
}
