export function Nvv () {
  return (
    <div className='min-h-screen bg-gradient-to-b mt-15 from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-4 sm:py-8 px-3 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-red-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-blue-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-yellow-600 rounded-full blur-3xl'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12 px-2'>
        {/* Главный заголовок */}
        <div className='w-full text-center mb-8 sm:mb-12 relative z-10 px-2'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-yellow-400 to-red-500'>
              НАЦІОНАЛЬНО-ВИЗВОЛЬНА ВІЙНА УКРАЇНСЬКОГО НАРОДУ СЕРЕДИНИ XVII СТ.
            </span>
          </h1>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl text-yellow-300 font-bold mb-4 sm:mb-6'>
            (Козацька революція)
          </h2>
          <div className='w-32 sm:w-48 h-1 bg-gradient-to-r from-red-400 to-yellow-600 mx-auto rounded-full'></div>
        </div>

        {/* Основная информация о войне */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-red-300 text-center'>
            Національно-визвольна війна (1648-1657 pp)
          </h1>

          <div className='space-y-6'>
            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Національно-визвольна війна — найбільше козацьке повстання{' '}
                <span className='font-bold text-red-300'>1648-1657 pp.</span>{' '}
                під проводом{' '}
                <span className='font-bold text-red-300'>
                  Богдана Хмельницького
                </span>{' '}
                за всю свою історію існування. Воно охопило всі українські
                землі, у цю війну були залучені усі верстви українського
                населення. У ході цього повстання було створено козацьку державу{' '}
                <span className='font-bold text-red-300'>
                  Військо Запорозьке
                </span>
                . Її кордони змінювалися в залежності від успіхів козаків на
                полі бою, втім, упродовж майже усього повстання, територія
                Козацької України займала Київське, Брацлавське та Чернігівське
                воєводство.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6'>
              <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
                <h3 className='text-xl sm:text-2xl font-bold text-red-300 mb-3 text-center'>
                  Характер
                </h3>
                <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                  національно-визвольний та антифеодальний
                </p>
              </div>

              <div className='p-4 sm:p-6 bg-yellow-900/20 rounded-lg border-l-2 border-yellow-400'>
                <h3 className='text-xl sm:text-2xl font-bold text-yellow-300 mb-3 text-center'>
                  Рушійні сили
                </h3>
                <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                  козаки, селяни, міщани, частина українського православного
                  духовенства, дрібна та середня православна українська шляхта
                </p>
              </div>

              <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
                <h3 className='text-xl sm:text-2xl font-bold text-blue-300 mb-3 text-center'>
                  Мета
                </h3>
                <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                  звільнити Україну з-під влади РП, сформувати власну українську
                  державу
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Причины войны */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-yellow-400 backdrop-blur-sm'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-yellow-300 text-center'>
            Причини війни
          </h1>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8'>
            <div className='space-y-6'>
              <div className='p-4 sm:p-6 bg-yellow-900/20 rounded-lg border-l-2 border-yellow-400'>
                <h3 className='text-xl sm:text-2xl font-bold text-yellow-300 mb-3'>
                  Політичні:
                </h3>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  Відсутність власної держави. Слабкість королівської влади, яка
                  не могла стримати свавілля польських магнатів і шляхтичів
                </p>
              </div>

              <div className='p-4 sm:p-6 bg-yellow-900/20 rounded-lg border-l-2 border-yellow-400'>
                <h3 className='text-xl sm:text-2xl font-bold text-yellow-300 mb-3'>
                  Соціально-економічні:
                </h3>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  Погіршення становища селян в умовах засилля
                  фільварково-панщинної системи. Швидке покріпачення селян.
                  Незадоволення міщан утисками з боку власників міст
                </p>
              </div>
            </div>

            <div className='space-y-6'>
              <div className='p-4 sm:p-6 bg-yellow-900/20 rounded-lg border-l-2 border-yellow-400'>
                <h3 className='text-xl sm:text-2xl font-bold text-yellow-300 mb-3'>
                  Національно-релігійні:
                </h3>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  Релігійні утиски православного населення. Примусова
                  полонізація. Пряма загроза знищення українського народу
                </p>
              </div>

              <div className='p-4 sm:p-6 bg-yellow-900/20 rounded-lg border-l-2 border-yellow-400'>
                <h3 className='text-xl sm:text-2xl font-bold text-yellow-300 mb-3'>
                  Військово-козацькі:
                </h3>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  Обмежувалися права запорозького козацтва. Війська «Ординація
                  Запорозького»
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Цитаты */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-blue-400 backdrop-blur-sm'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-blue-300 text-center'>
            📜 Історичні цитати
          </h1>

          <div className='space-y-6'>
            <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-4 border-blue-400'>
              <p className='text-xl sm:text-2xl leading-relaxed italic text-blue-200'>
                «Пани державці та старости на втіху собі нестерпно кривдять нас,
                тяжко ображають, позбавляючи не тільки вбогого майна, а й
                свободи, посягаючи на наші хутори, луки, сіножаті, ниви, ставки,
                млини. І що тільки комусь із них у нас, козаків, сподобається,
                силою відбирають, а нас самих... обдирають, б'ють, мордують, до
                в'язниць кидають, на смерть за наші маєтки вбивають...»
                <span className='block mt-3 font-bold text-blue-300'>
                  3 листа Б. Хмельницького до польського короля (початок 1648
                  р.)
                </span>
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-4 border-blue-400'>
              <p className='text-xl sm:text-2xl leading-relaxed italic text-blue-200'>
                «Одне слово, селяни змушені віддавати своїм панам усе, що тим
                заманеться вимагати. Не дивно, що цим злидарям у тяжких умовах
                нічого не залишається для себе. Але це ще не все: пани мають
                безмежну владу не тільки над селянським майном, а й над їхнім
                життям: такою великою необмежена свобода польської шляхти (яка
                живе, наче в раю, а селяни наче в чистилищі), що коли селяни
                потрапляють в ярмо до такого пана, то опиняються у гіршому
                становищі, ніж каторжники на галері»
                <span className='block mt-3 font-bold text-blue-300'>
                  Гійом де Боплан про Україну
                </span>
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-4 border-blue-400'>
              <p className='text-xl sm:text-2xl leading-relaxed italic text-blue-200'>
                «Православ'я в Речі Посполитій зазна таких утисків, яких не
                терплять греки в турецькій неволі: забрано у православних
                церкви, монастирі й кафедри, заборонено вільне провадження
                відправ, бідні православні вмирають без причастя, не можуть
                прилюдно відправляти похорон: у Любліні, Сокалі, Белзі та інших
                містах через відібрання церков православні мусять потай ховати
                своїх померлих у підвалах домів...»
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-4 border-blue-400'>
              <p className='text-xl sm:text-2xl leading-relaxed italic text-blue-200'>
                «У католицькому християнському королівстві та вільній Речі
                Посполитій [народ] зазнає такого насильства, якого в поганській
                неволі християни-греки не зазнають. Захоплено церкви, монастир
                та собори, заборонено вільне виконання обрядів....»
              </p>
            </div>
          </div>
        </div>

        {/* Историческое значение */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-red-300 text-center'>
            🎯 Історичне значення
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg'>
              <p className='text-xl sm:text-2xl font-semibold text-red-300 mb-4 text-center'>
                ⚔️ Найбільше повстання
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Найбільше козацьке повстання в історії України
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg'>
              <p className='text-xl sm:text-2xl font-semibold text-red-300 mb-4 text-center'>
                🏛️ Створення держави
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Утворення козацької держави Військо Запорозьке
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg'>
              <p className='text-xl sm:text-2xl font-semibold text-red-300 mb-4 text-center'>
                🌍 Всенародний характер
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Охопила всі верстви українського народу
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg'>
              <p className='text-xl sm:text-2xl font-semibold text-red-300 mb-4 text-center'>
                📜 Поворотний момент
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Ключовий момент в історії української державності
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Разделитель внизу */}
      <div className='relative mt-12 sm:mt-16 py-6 sm:py-8 px-3 sm:px-6 lg:px-8'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-full border-t-2 border-red-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-xl sm:text-2xl font-semibold text-red-200 rounded-full border-2 border-red-600/50 shadow-lg text-center'>
            Боротьба за українську державність
          </span>
        </div>
      </div>
    </div>
  )
}
