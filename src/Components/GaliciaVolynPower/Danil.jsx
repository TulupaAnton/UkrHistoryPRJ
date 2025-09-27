export function Danil () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-4 sm:py-8 px-3 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-blue-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-purple-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-indigo-600 rounded-full blur-3xl'></div>
      </div>

      {/* Заголовок страницы */}
      <div className='w-full max-w-6xl mx-auto text-center mb-8 sm:mb-12 relative z-10 px-2'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500'>
            Данило Романович Галицький
          </span>
        </h1>
        <h2 className='text-xl sm:text-2xl lg:text-3xl text-blue-300 font-bold mb-4 sm:mb-6'>
          (1238–1264 роки)
        </h2>
        <div className='inline-block bg-blue-800/40 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-blue-600/50 mb-4 sm:mb-6'>
          <span className='text-blue-200 font-medium text-base sm:text-xl'>
            Правив спільно з братом Васильком
          </span>
        </div>
        <div className='w-32 sm:w-48 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12 px-2'>
        {/* Вступление */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-blue-400 backdrop-blur-sm'>
          <div className='p-3 sm:p-4 bg-blue-900/30 rounded-lg mb-4'>
            <p className='text-base sm:text-lg leading-relaxed italic text-blue-200'>
              «Був князем добрим, хоробрим, мудрим, який спорудив городи многі,
              і церкви поставив, і оздобив їх різноманітними прикрасами, та
              братолюбством він світився був із братом своїм Васильком...»
            </p>
          </div>
          <p className='text-base sm:text-lg leading-relaxed'>
            <span className='font-bold text-blue-300 text-lg sm:text-xl'>
              Відновив єдність Галицько-Волинського князівства
            </span>{' '}
            в умовах боротьби з боярством та зовнішніми ворогами
          </p>
        </div>

        {/* Основные события */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-purple-400 backdrop-blur-sm'>
          <h1 className='text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-purple-300'>
            Діяльність Данила Галицького
          </h1>

          <div className='space-y-6'>
            <div className='p-3 sm:p-4 bg-purple-900/20 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-purple-300 text-lg sm:text-xl'>
                  1229 рік
                </span>{' '}
                - Данило, син Романа Мстиславовича, опанував Волинь
              </p>
              <div className='p-2 sm:p-3 bg-purple-900/30 rounded mt-2'>
                <p className='text-base sm:text-lg leading-relaxed italic'>
                  Спирався на міщан у боротьбі проти боярського свавілля
                </p>
              </div>
            </div>

            <div className='p-3 sm:p-4 bg-purple-900/20 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-purple-300 text-lg sm:text-xl'>
                  1238 рік
                </span>{' '}
                – оволодів Галичиною - прийняв стіл батька
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-purple-900/20 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-purple-300 text-lg sm:text-xl'>
                  1239 рік
                </span>{' '}
                – підкорив Київ, де посадив воєводу Дмитра, який за рік
                захищатиме місто від нападу монголів
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-purple-900/20 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-purple-300 text-lg sm:text-xl'>
                  1238 рік
                </span>{' '}
                – князь розгромив у битві під Дорогочином тевтонських
                лицарів-хрестоносців
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-purple-900/20 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-purple-300 text-lg sm:text-xl'>
                  1245 рік
                </span>{' '}
                – переміг у битві біля м. Ярослава угорсько-польські війська та
                війська непокірних галицьких бояр - зламав опір, остаточно
                утвердився при владі
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-purple-900/20 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-purple-300 text-lg sm:text-xl'>
                  1245 рік
                </span>{' '}
                – поїхав у Золоту Орду за ярликом й визнав свою залежність
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-purple-900/20 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Намагався організувати антимонгольську коаліцію у складі
                європейських християнських держав + залучити Папу Римського
                Інокентія IV
              </p>
              <div className='p-2 sm:p-3 bg-purple-900/30 rounded mt-2'>
                <p className='text-base sm:text-lg leading-relaxed italic'>
                  ідея не знайшла підтримки
                </p>
              </div>
            </div>

            <div className='p-3 sm:p-4 bg-purple-900/20 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-purple-300 text-lg sm:text-xl'>
                  1253 рік
                </span>{' '}
                – у м. Дорогочин прийняв від Папи Інокентія IV королівську
                корону (сподіваючись на те, що Папа Римський організує хрестовий
                похід європейських лицарів проти монголів)
              </p>
              <div className='p-2 sm:p-3 bg-purple-900/30 rounded mt-2'>
                <p className='text-base sm:text-lg leading-relaxed font-bold text-purple-300'>
                  Галицько-Волинська держава стає Королівством Руським
                </p>
              </div>
              <div className='p-2 sm:p-3 bg-blue-900/30 rounded mt-2'>
                <p className='text-base sm:text-lg leading-relaxed italic text-blue-200'>
                  «У той же час прислав Папа послів достойних, що принесли
                  Данилові вінець, іскіпетр, і корону, які означають
                  королівський сан, кажучи: "Сину! Прийми од нас вінець
                  королівства... Ти матимеш поміч од Папи"...»
                </p>
              </div>
            </div>

            <div className='p-3 sm:p-4 bg-purple-900/20 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-purple-300 text-lg sm:text-xl'>
                  1254–1255 роки
                </span>{' '}
                – самотужки відбивав набіги монгольського воєводи Куремси
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-purple-900/20 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-purple-300 text-lg sm:text-xl'>
                  1259 рік
                </span>{' '}
                – знову змушений визнати владу Орди й зруйнувати укріплення
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-purple-900/20 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Проводив політику економічного й культурного розвитку своєї
                держави (побудував міста: Львів, Холм, Крем'янець, Данилів)
              </p>
              <div className='p-2 sm:p-3 bg-purple-900/30 rounded mt-2'>
                <p className='text-base sm:text-lg leading-relaxed'>
                  <span className='font-bold text-purple-300'>Львів</span>{' '}
                  засновано у{' '}
                  <span className='font-bold text-purple-300'>1256 році</span>{' '}
                  на честь старшого сина Лева;
                  <span className='font-bold text-purple-300'> м. Холм</span> -
                  столиця
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Цитаты */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-indigo-400 backdrop-blur-sm'>
          <h1 className='text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-indigo-300 text-center'>
            Цитати про Данила Галицького
          </h1>

          <div className='space-y-4 sm:space-y-6'>
            <div className='p-3 sm:p-4 bg-indigo-900/20 rounded-lg border-l-2 border-indigo-400'>
              <p className='text-base sm:text-lg leading-relaxed italic'>
                «… Данило поранений був у груди. Але через молодість і одвагу
                він не чув ран, що були на тілі його, – був бо він віком
                вісімнадцяти літ, був бо він сильний…» - р. Калка
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-indigo-900/20 rounded-lg border-l-2 border-indigo-400'>
              <p className='text-base sm:text-lg leading-relaxed italic'>
                «О, лихіша лиха честь татарськая! Данило Романович, що був
                князем великим, володів із братом своїм Руською землею, Києвом,
                і Володимиром, і Галичем, і іншими краями, нині сидить на
                колінах і холопом себе називає!...»
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-indigo-900/20 rounded-lg border-l-2 border-indigo-400'>
              <p className='text-base sm:text-lg leading-relaxed italic'>
                «Данило вийшов з військом із Холма та на третій день став у
                Галичі... увійшов у свій город... та прийняв стіл батька, та
                проголосив перемогу, заткнувши свою хоругву на Німецьких
                воротах...»
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-indigo-900/20 rounded-lg border-l-2 border-indigo-400'>
              <p className='text-base sm:text-lg leading-relaxed italic'>
                «..Данило сказав: "Не гожим є держати отчину нашу
                крижевникам-тамплієрам| рицарям-хрестоносцям|".І пішли вони на
                них з великою силою, узяли город |Дорогичин| місяця березня, і
                старійшину |магістра| їхнього Брауна схопили, і воїнів захопили,
                і вернулися обидва у Володимир...»
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-indigo-900/20 rounded-lg border-l-2 border-indigo-400'>
              <p className='text-base sm:text-lg leading-relaxed italic'>
                «Данило тим часом поїхав на | Ростислава Мстиславича|, і схопив
                його, і зоставив у нім | Києві, тисяцького| Дмитра.І оддав він
                Київ у руки Дмитрові, | щоб| удержати |город| проти іноплемінних
                народів, безбожних татар...»
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-indigo-900/20 rounded-lg border-l-2 border-indigo-400'>
              <p className='text-base sm:text-lg leading-relaxed italic'>
                «І коли побачив Данило, що ляхи кріпко йдуть на Василька.., то
                рушив на [них]... і розтрощив військо [ляхів], і хоругов [їхніх]
                роздер навпіл. Побачивши ж це, Ростислав побіг, і повернули угри
                навтікача...»
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-indigo-900/20 rounded-lg border-l-2 border-indigo-400'>
              <p className='text-base sm:text-lg leading-relaxed italic'>
                «У той же час поїхав був Данило в Угри до короля (Бели), бо він
                іще не чув про прихід татар на Київ. А коли Батий узяв Київ і
                почув він про Данила, що той в Уграх є, то рушив сам до (города)
                Володимира...»
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-indigo-900/20 rounded-lg border-l-2 border-indigo-400'>
              <p className='text-base sm:text-lg leading-relaxed italic'>
                «Данило і Василько, його брат, влаштували нам великий банкет і
                затримали нас проти волі нашої днів на вісім. Тим часом вони
                радилися між собою, з єпископами та іншими шанованими людьми про
                те, що ми їм говорили, коли їхали до татар, і одностайно
                твердили, що бажають бачити папу своїм паном і отцем, а святую
                Римську церкву владичицею і вчителькою, причому підтвердили все
                те, про що раніше повідомляли через свого єпископа, і послали з
                нами до папи свою грамоту і послів».
              </p>
            </div>
          </div>
        </div>

        {/* Историческое значение */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-blue-400 backdrop-blur-sm'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-blue-300 text-center'>
            Історичне значення правління Данила Галицького
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
            <div className='p-3 sm:p-4 bg-blue-900/30 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Останній великий князь Київської Русі, який зумів об'єднати
                значні території
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-blue-900/30 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Перший король Русі - започаткував королівську традицію
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-blue-900/30 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Збудував міста, що стали центрами української державності
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-blue-900/30 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Зберіг державність українських земель під час монгольської
                навали
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
            Продовження: Наступники Данила Галицького
          </span>
        </div>
      </div>
    </div>
  )
}
