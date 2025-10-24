export function ZPsich () {
  return (
    <article className='relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/80 to-purple-900/90 text-white overflow-hidden'>
      {/* Background elements */}
      <div className='fixed top-0 left-0 w-full h-full opacity-5 pointer-events-none'>
        <div className='absolute top-20 left-10 w-80 h-80 bg-cyan-400 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-violet-500 rounded-full blur-3xl'></div>
        <div className='absolute top-1/2 left-1/3 w-72 h-72 bg-indigo-400 rounded-full blur-3xl'></div>
      </div>

      {/* Decorative top border */}
      <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent'></div>

      {/* Header Section */}
      <header className='relative z-10 pt-16 pb-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto text-center'>
          {/* Decorative elements */}
          <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full'></div>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400'>
              Запорозька Січ
            </span>
          </h1>

          <div className='inline-flex items-center justify-center space-x-4 mb-6'>
            <div className='w-16 h-0.5 bg-gradient-to-r from-transparent to-cyan-400'></div>
            <span className='text-cyan-200 text-2xl sm:text-3xl font-semibold tracking-wider'>
              Ліквідація 1775 року
            </span>
            <div className='w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent'></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20'>
        {/* Ліквідація Січі */}
        <section className='space-y-8'>
          {/* Основна подія */}
          <article className='bg-gradient-to-r from-slate-800/50 to-red-900/30 rounded-2xl p-6 sm:p-8 border border-red-500/30 backdrop-blur-sm'>
            <div className='flex items-start space-x-4 mb-6'>
              <div className='flex-shrink-0 w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center'>
                <span className='text-red-300 font-bold text-2xl'>1775</span>
              </div>
              <div>
                <h2 className='text-3xl sm:text-4xl font-bold text-red-300 mb-2'>
                  Ліквідація Запорозької Січі
                </h2>
                <p className='text-xl sm:text-2xl text-white/90'>
                  <span className='bg-red-500/30 text-red-200 px-3 py-1 rounded-lg font-bold'>
                    червня 1775 р.
                  </span>{' '}
                  <span className='bg-cyan-500/30 text-cyan-200 px-2 py-1 rounded'>
                    генерал П. Текелій
                  </span>{' '}
                  з великими збройними силами оточив Січ й оголосив про її
                  ліквідацію
                </p>
              </div>
            </div>
          </article>

          {/* Причини ліквідації */}
          <article className='bg-gradient-to-r from-slate-800/50 to-purple-900/30 rounded-2xl p-6 sm:p-8 border border-purple-500/30 backdrop-blur-sm'>
            <h2 className='text-3xl sm:text-4xl font-bold text-purple-300 mb-6 flex items-center'>
              <span className='w-4 h-4 bg-purple-400 rounded-full mr-4'></span>
              Причини ліквідації
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 text-xl sm:text-2xl'>
              <div className='space-y-4'>
                <p className='flex items-start space-x-3'>
                  <span className='text-purple-400 mt-2'>•</span>
                  <span>
                    Несумісність республіканського устрою Січі з імперськими
                    порядками
                  </span>
                </p>
                <p className='flex items-start space-x-3'>
                  <span className='text-purple-400 mt-2'>•</span>
                  <span>
                    Побоювання можливого союзу Січі з Кримським ханством для
                    спільної боротьби з імперією
                  </span>
                </p>
              </div>
              <div className='space-y-4'>
                <p className='flex items-start space-x-3'>
                  <span className='text-purple-400 mt-2'>•</span>
                  <span>
                    Недоцільність існування в межах імперії державного утворення
                    зі своєю митною системою, що перешкоджало вільного доступу
                    до Чорного моря
                  </span>
                </p>
                <p className='flex items-start space-x-3'>
                  <span className='text-purple-400 mt-2'>•</span>
                  <span>
                    Прагнення російських землевласників приєднати до своїх
                    володінь землі Запорожжя
                  </span>
                </p>
              </div>
            </div>
          </article>

          {/* Останній кошовий отаман */}
          <article className='bg-gradient-to-r from-slate-800/50 to-blue-900/30 rounded-2xl p-6 sm:p-8 border border-blue-500/30 backdrop-blur-sm'>
            <h2 className='text-3xl sm:text-4xl font-bold text-blue-300 mb-6 flex items-center'>
              <span className='w-4 h-4 bg-blue-400 rounded-full mr-4'></span>
              Останній кошовий отаман
            </h2>
            <div className='space-y-6 text-xl sm:text-2xl leading-relaxed'>
              <p>
                Останній кошовий отаман Запорозької Січі{' '}
                <span className='bg-blue-500/30 text-blue-200 px-3 py-1 rounded-lg font-bold text-2xl'>
                  Петро Калнишевський
                </span>
              </p>
              <p className='bg-red-500/20 rounded-xl p-4 border-l-4 border-red-400'>
                <span className='text-red-200'>
                  Заарештовано і довічно заслано до Соловецького монастиря
                </span>
              </p>
              <p>
                Частина козаків пішла за р. Дунай, де у{' '}
                <span className='bg-amber-500/30 text-amber-200 px-2 py-1 rounded'>
                  1775 р.
                </span>{' '}
                вони на території Османської імперії організували нову
                Задунайську Січ. Згодом із частини козаків російський уряд у{' '}
                <span className='bg-amber-500/30 text-amber-200 px-2 py-1 rounded'>
                  1787 р.
                </span>{' '}
                створив Чорноморське козацьке військо, яке згодом переселили на
                Кубань.
              </p>
            </div>
          </article>

          {/* Важливі терміни */}
          <article className='bg-gradient-to-r from-slate-800/50 to-green-900/30 rounded-2xl p-6 sm:p-8 border border-green-500/30 backdrop-blur-sm'>
            <h2 className='text-3xl sm:text-4xl font-bold text-green-300 mb-6 flex items-center'>
              <span className='w-4 h-4 bg-green-400 rounded-full mr-4'></span>
              Важливі терміни
            </h2>

            {/* Нова Січ */}
            <div className='mb-8'>
              <h3 className='text-2xl sm:text-3xl font-bold text-green-200 mb-3'>
                Нова (Підпільненська) Січ
              </h3>
              <p className='text-xl sm:text-2xl text-white/90 mb-2'>
                Адміністративний і військовий центр запорозького козацтва в{' '}
                <span className='bg-green-500/30 text-green-200 px-2 py-1 rounded'>
                  1734-1739
                </span>
                . Остання Запорозька Січ
              </p>
            </div>

            {/* Паланка */}
            <div className='mb-8'>
              <h3 className='text-2xl sm:text-3xl font-bold text-green-200 mb-3'>
                Паланка
              </h3>
              <p className='text-xl sm:text-2xl text-white/90'>
                Фортеця, а також місто навколо неї - центр самостійної округи
                Війська Запорозького
              </p>
            </div>

            {/* Зимівник */}
            <div className='mb-8'>
              <h3 className='text-2xl sm:text-3xl font-bold text-green-200 mb-3'>
                Зимівник
              </h3>
              <p className='text-xl sm:text-2xl text-white/90 mb-4'>
                Велике господарство, в якому розвивалося не тільки рільництво, а
                й скотарство, рибальство, бджільництво, тисливство, гончарство
                тощо
              </p>
              <div className='bg-green-500/20 rounded-xl p-4 border-l-4 border-green-400'>
                <p className='text-green-200 italic text-lg'>
                  «Запорозькі козаки, мають деякі поселення, де тримають худобу,
                  коней й овець, мають пасіки, розводять сади й городи, роблять
                  запаси сіна та худоби й засівають поля різним хлібом, ловлять
                  звіра, а в річках рибу»
                </p>
              </div>
            </div>

            {/* Задунайська Січ */}
            <div>
              <h3 className='text-2xl sm:text-3xl font-bold text-green-200 mb-3'>
                Задунайська Січ
              </h3>
              <p className='text-xl sm:text-2xl text-white/90 mb-4'>
                Державний та військовий осередок запорозьких козаків на півдні
                України та у дельті Дунаю після ліквідації Запорозької Січі
              </p>
              <div className='bg-green-500/20 rounded-xl p-4 border-l-4 border-green-400'>
                <p className='text-green-200 italic text-lg'>
                  «Кошового вибирають безпосередньо із самих козаків. У мирний
                  час турецький уряд видає жалування на курінь по 200 левів... а
                  коли бувають у поході, тоді на кожну людину видають жалування
                  по 6 левів на місяць. Січ і курені є в управлінні кошового та
                  курінних отаманів, і турецький уряд не втручається не тільки
                  до запорожців, а й до поселень, що їм належать, у яких живуть
                  із сім'ями запорожці... Але якщо трапиться кому відлучитися в
                  міста та села турецькі на заробітки, то нерідко тії козаки
                  зазнають від турків утисків...»
                </p>
              </div>
            </div>
          </article>

          {/* Історичне значення */}
          <article className='bg-gradient-to-r from-slate-800/50 to-amber-900/30 rounded-2xl p-6 sm:p-8 border border-amber-500/30 backdrop-blur-sm'>
            <h2 className='text-3xl sm:text-4xl font-bold text-amber-300 mb-6 flex items-center'>
              <span className='w-4 h-4 bg-amber-400 rounded-full mr-4'></span>
              Історичне значення Запорозької Січі
            </h2>
            <div className='space-y-4 text-xl sm:text-2xl leading-relaxed'>
              <p>
                Із ліквідацією Запорізької Січі, що проіснувала{' '}
                <span className='bg-amber-500/30 text-amber-200 px-2 py-1 rounded font-bold'>
                  219 років
                </span>
                , завершилася козацька доба в історії України.
              </p>
              <p>
                Запорозькі козаки уславили себе героїчною боротьбою проти
                чужоземних загарбників і захистом південних рубежів України.
              </p>
              <p>
                Запорозьке козацтво виявило надзвичайну стійкість і оригінальні
                творчі здібності в організації військової справи, відстоюванні
                нових форм соціального, політичного та економічного буття, у
                створенні своєрідної культури.
              </p>
              <p>
                Запорозький козак в уявленні українців був виразником
                національного духу. Український народ зберігає історичну пам'ять
                про Запорізьку Січ, яка надихала його на боротьбу за визволення.
              </p>
            </div>
          </article>

          {/* Цитати */}
          <article className='bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-2xl p-6 sm:p-8 border border-cyan-500/30 backdrop-blur-sm'>
            <h2 className='text-3xl sm:text-4xl font-bold text-cyan-300 mb-6 text-center'>
              Історичні цитати
            </h2>
            <div className='space-y-6'>
              <blockquote className='relative bg-cyan-900/20 rounded-2xl p-6 border-l-4 border-cyan-400'>
                <p className='italic text-cyan-100 pl-6 leading-relaxed text-xl'>
                  «...нашому генерал-поручику Текелію з довіреними нашими
                  військами... без будь-якого опору з боку козаків, тому що були
                  оточені з усіх боків...у цілковитому порядку... найспокійнішим
                  чином виконати доручену йому справу, уникаючи, наскільки це
                  можливо, кровопролиття»
                </p>
              </blockquote>
              <blockquote className='relative bg-cyan-900/20 rounded-2xl p-6 border-l-4 border-cyan-400'>
                <p className='italic text-cyan-100 pl-6 leading-relaxed text-xl'>
                  «Ми захотіли... оголосити всім вірнопідданим, що Запорозька
                  Січ остаточно зруйнована, з викоріненням на майбутнє назви
                  запорозьких козаків за образу імператорської величності...»
                </p>
              </blockquote>
            </div>
          </article>
        </section>
      </main>

      {/* Next Topic Footer */}
      <footer className='relative z-10 border-t border-cyan-500/20 mt-20 pt-12 pb-8'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='inline-flex items-center space-x-4 bg-slate-800/50 backdrop-blur-sm px-6 py-4 rounded-full border border-cyan-500/30'>
            <span className='text-cyan-200 font-semibold text-lg'>
              Наступна тема: Російсько-турецькі війни
            </span>
          </div>
        </div>
      </footer>
    </article>
  )
}
