export function Culture () {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-6 sm:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Фоновые декоративные элементы */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-1/4 left-1/4 w-80 h-80 bg-rose-500 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse delay-1000'></div>
        <div className='absolute top-1/2 left-1/2 w-72 h-72 bg-fuchsia-500 rounded-full blur-3xl animate-pulse delay-500'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-7xl mx-auto relative z-10 space-y-10 sm:space-y-16'>
        {/* Заголовок */}
        <header className='text-center space-y-6 sm:space-y-8'>
          <div className='space-y-4'>
            <h1 className='text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight'>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-500'>
                Розвиток культури та освіти
              </span>
            </h1>
            <div className='text-2xl sm:text-3xl lg:text-4xl text-rose-300 font-bold'>
              XVII - XVIII століття
            </div>
          </div>
        </header>

        {/* Феофан Прокопович */}
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12'>
          {/* Текст слева */}
          <div className='space-y-6 sm:space-y-8'>
            <div className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-rose-400 backdrop-blur-sm'>
              <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-rose-300 mb-6 text-center'>
                🎓 Феофан Прокопович
              </h2>
              <div className='p-4 sm:p-6 bg-rose-900/20 rounded-xl border-l-4 border-rose-400'>
                <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                  Ректор Києво-Могилянської академії, математик, фізик, один з
                  перших в Російській імперії застосовував мікроскоп та телескоп
                </p>
              </div>
            </div>

            {/* Образовательные учреждения */}
            <div className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-pink-400 backdrop-blur-sm'>
              <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-pink-300 mb-6 text-center'>
                🏫 Освітні заклади
              </h2>
              <div className='space-y-4'>
                <div className='p-4 bg-pink-900/20 rounded-lg border-l-2 border-pink-400'>
                  <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                    Чернігівський (1700 р.), Харківський (1726 р.),
                    Переяславський колегіуми (1738 р.)
                  </p>
                </div>
                <div className='p-4 bg-pink-900/20 rounded-lg border-l-2 border-pink-400'>
                  <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                    1737 р. відкрито спеціалізоване музичне училище у Глухові
                  </p>
                </div>
                <div className='p-4 bg-pink-900/20 rounded-lg border-l-2 border-pink-400'>
                  <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                    Києво-Могилянська академія розвивалася за часів архієпископа
                    Київського (1731 р.), згодом митрополита Рафаїла
                    Заборовського
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Портрет Феофана Прокоповича справа */}
          <div className='flex items-center justify-center'>
            <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-fuchsia-400 backdrop-blur-sm w-full max-w-lg'>
              <div className='bg-gradient-to-br from-fuchsia-900 to-slate-800 rounded-xl p-4 sm:p-6 border-2 border-fuchsia-500/30 shadow-lg'>
                <img
                  src='../../../assets/Mazepa/Feofan.webp'
                  alt='Феофан Прокопович - ректор Києво-Могилянської академії'
                  className='w-full h-auto rounded-lg shadow-md mx-auto'
                />
                <p className='text-center text-fuchsia-200 mt-4 text-base sm:text-lg lg:text-xl italic'>
                  Феофан Прокопович - видатний український вчений та освітянин
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Козацькі літописи */}
        <section className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-rose-400 backdrop-blur-sm'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-rose-300 mb-6 text-center'>
            📜 Козацькі літописи
          </h2>
          <div className='p-4 sm:p-6 bg-rose-900/20 rounded-xl border-l-4 border-rose-400'>
            <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center mb-6'>
              Історико-літературні твори другої половини XVII - середини XVIII
              століття, присвячені козацьким війнам. Описують події з середини
              XVII ст. по початок XVIII ст.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              <div className='p-4 bg-rose-800/30 rounded-lg text-center'>
                <p className='text-lg sm:text-xl font-bold text-rose-200'>
                  «Літопис Самовидця»
                </p>
              </div>
              <div className='p-4 bg-rose-800/30 rounded-lg text-center'>
                <p className='text-lg sm:text-xl font-bold text-rose-200'>
                  Г. Граб'янки
                </p>
              </div>
              <div className='p-4 bg-rose-800/30 rounded-lg text-center'>
                <p className='text-lg sm:text-xl font-bold text-rose-200'>
                  С. Величка (1720 р.)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Литература и искусство */}
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12'>
          {/* Литература */}
          <div className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-pink-400 backdrop-blur-sm'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-pink-300 mb-6 text-center'>
              📚 Література
            </h2>
            <div className='space-y-4'>
              <div className='p-4 bg-pink-900/20 rounded-lg border-l-2 border-pink-400'>
                <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                  Л. Баранович («Нова міра старої віри»)
                </p>
              </div>
              <div className='p-4 bg-pink-900/20 rounded-lg border-l-2 border-pink-400'>
                <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                  С. Величко («Сказание о войне казацкой с поляками»)
                </p>
              </div>
              <div className='p-4 bg-pink-900/20 rounded-lg border-l-2 border-pink-400'>
                <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                  І. Гізель («Правдива віра»)
                </p>
              </div>
            </div>
          </div>

          {/* Козацьке бароко */}
          <div className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-fuchsia-400 backdrop-blur-sm'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-fuchsia-300 mb-6 text-center'>
              🎨 Козацьке бароко
            </h2>
            <div className='p-4 sm:p-6 bg-fuchsia-900/20 rounded-xl border-l-4 border-fuchsia-400'>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
                Мистецький стиль, що був поширений на українських землях Війська
                Запорозького у XVII-XVIII століттях. Виник унаслідок поєднання
                місцевих архітектурних традицій та європейського бароко.
              </p>
              <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center mt-4 text-rose-300'>
                Також називають{' '}
                <span className='font-bold'>'мазепенське бароко'</span>
              </p>
            </div>
          </div>
        </section>

        {/* Мистецтво */}
        <section className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-rose-400 backdrop-blur-sm'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-rose-300 mb-6 text-center'>
            🎭 Видатні митці
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
            {[
              {
                name: 'Леонтій Щирський',
                description:
                  'Гравер на міді доби бароко. Освіту здобув у Чернігівському колегіумі. Автор ілюстрацій до книг Д. Туптала, С. Яворського, П. Орлика'
              },
              {
                name: 'Олександр Тарасевич',
                description:
                  'Гравер, автор гравюр «Києво-Печерського патерика». Вважається засновником української школи граверів'
              },
              {
                name: 'І. Руткович',
                description:
                  'Галицький іконописець кінця XVII - початку XVIII ст.'
              },
              {
                name: 'Й. Кондзелевич',
                description: 'Іконописець XVII-XVIII ст.'
              },
              {
                name: 'Й. Пінзель',
                description: 'Скульптор XVIII ст.'
              }
            ].map((artist, index) => (
              <div
                key={index}
                className='p-4 bg-rose-900/20 rounded-lg border-l-2 border-rose-400 transform hover:scale-[1.02] transition-transform duration-300'
              >
                <h3 className='text-lg sm:text-xl font-bold text-rose-300 mb-2 text-center'>
                  {artist.name}
                </h3>
                <p className='text-base sm:text-lg text-gray-200 text-center'>
                  {artist.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Синопсис */}
        <section className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-pink-400 backdrop-blur-sm'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-pink-300 mb-6 text-center'>
            📖 Синопсис 1674 р.
          </h2>
          <div className='p-4 sm:p-6 bg-pink-900/20 rounded-xl border-l-4 border-pink-400'>
            <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-center'>
              У друкарні Києво-Печерської Лаври був виданий «Синопсис» - нарис
              вітчизняної історії (з російської точки зору), перший
              систематизований підручник з історії
            </p>
          </div>
        </section>

        {/* Галерея архитектуры */}
        <section className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-fuchsia-400 backdrop-blur-sm'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-fuchsia-300 mb-6 text-center'>
            🏛️ Архітектура козацького бароко
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
            {[
              {
                src: '../../../assets/Mazepa/monostir.webp',
                alt: 'Троїцький собор Троїцько-Іллінського монастиря в Чернігові. 1679-1689 р.',
                title: 'Троїцький собор в Чернігові'
              },
              {
                src: '../../../assets/Mazepa/vidubickogo.webp',
                alt: 'Георгіївська церква Видубицького монастиря в Києві. 1696-1701 роки',
                title: 'Георгіївська церква в Києві'
              },
              {
                src: '../../../assets/Mazepa/shovkva.webp',
                alt: 'Оборонна синагога в Жовкві. 1692-1698 роки',
                title: 'Синагога в Жовкві'
              },
              {
                src: '../../../assets/Mazepa/pokrov.webp',
                alt: 'Покровський собор у Харкові. 1689 р.',
                title: 'Покровський собор в Харкові'
              }
            ].map((image, index) => (
              <div
                key={index}
                className='p-4 bg-fuchsia-900/20 rounded-xl border-l-2 border-fuchsia-400'
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className='w-full h-64 sm:h-80 lg:h-220 object-cover rounded-lg shadow-md mb-3'
                />
                <p className='text-base sm:text-lg text-fuchsia-200 text-center italic'>
                  {image.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Галерея икон - шире */}
        {/* Галерея икон - максимально широко */}
        <section className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-rose-400 backdrop-blur-sm'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-rose-300 mb-6 text-center'>
            🖼️ Ікони та портрети
          </h2>
          <div className='grid grid-cols-1 gap-4 sm:gap-6'>
            {[
              {
                src: '../../../assets/Mazepa/voz.webp',
                alt: 'Ікона «Вознесіння Христове» з іконопису церкви Воздвиження Чесного Хреста. Скит Манявський. Й. Кондзелевич.',
                title: 'Ікона «Вознесіння Христове»'
              },
              {
                src: '../../../assets/Mazepa/pokr.webp',
                alt: 'Ікона «Покров Богородиці» (3 портретом гетьмана Богдана Хмельницького). Перша половина XVIII ст.',
                title: 'Ікона «Покров Богородиці»'
              },
              {
                src: '../../../assets/Mazepa/bohdan.webp',
                alt: 'Портрет Б. Хмельницького (за гравюрою В. Гондіуса)',
                title: 'Портрет Богдана Хмельницького'
              }
            ].map((image, index) => (
              <div
                key={index}
                className='p-4 bg-rose-900/20 rounded-xl border-l-2 border-rose-400'
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className='w-full h-120 sm:h-320 lg:h-320 object-cover rounded-lg shadow-md mb-3'
                />
                <p className='text-base sm:text-lg text-rose-200 text-center italic'>
                  {image.title}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* Работа Пинзеля */}
        <section className='p-6 sm:p-8 bg-slate-800/50 rounded-2xl border-l-4 border-pink-400 backdrop-blur-sm'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-pink-300 mb-6 text-center'>
            🗿 Робота Й. Пінзеля
          </h2>
          <div className='flex justify-center'>
            <div className='p-4 bg-pink-900/20 rounded-xl border-l-2 border-pink-400 max-w-2xl'>
              <img
                src='../../../assets/Mazepa/pinzel.webp'
                alt='Скульптура Й. Пінзеля'
                className='w-full h-auto rounded-lg shadow-md mb-3'
              />
              <p className='text-base sm:text-lg text-pink-200 text-center italic'>
                Скульптурна робота Йоганна Пінзеля - видатного українського
                скульптора
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Футер */}
      <footer className='relative mt-12 sm:mt-16 py-6 sm:py-8'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-full border-t-2 border-rose-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-xl sm:text-2xl font-bold text-rose-200 rounded-xl border-2 border-rose-600/50 shadow-lg text-center backdrop-blur-sm'>
            Золотий вік української культури
          </span>
        </div>
      </footer>
    </div>
  )
}
