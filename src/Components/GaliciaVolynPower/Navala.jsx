export function Navala () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-4 sm:py-8 px-3 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-red-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-orange-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-amber-600 rounded-full blur-3xl'></div>
      </div>

      {/* Заголовок страницы */}
      <div className='w-full max-w-6xl mx-auto text-center mb-8 sm:mb-12 relative z-10 px-2'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-red-400 to-red-500'>
            Монгольська навала на землі Південно-Західної Русі
          </span>
        </h1>
        <h2 className='text-xl sm:text-2xl lg:text-3xl text-orange-300 font-bold mb-4 sm:mb-6'>
          (Золота Орда)
        </h2>
        <div className='w-32 sm:w-48 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto rounded-full'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12 px-2'>
        {/* Первая битва на Калке */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-2xl border-l-4 border-red-400 backdrop-blur-sm shadow-xl'>
          <div className='flex flex-col xl:flex-row gap-6 lg:gap-8'>
            {/* Текстовая часть - слева */}
            <div className='flex-1'>
              <div className='mb-6'>
                <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3'>
                  <span className='text-red-300'>1223 рік</span> - Битва на
                  Калці
                </h2>
                <p className='text-lg sm:text-xl text-red-200 leading-relaxed'>
                  Розгром об'єднаного русько-половецького війська на{' '}
                  <span className='font-bold text-red-300'>річці Калка</span>
                </p>
              </div>

              <div className='space-y-4 sm:space-y-5'>
                <div className='p-4 bg-gradient-to-r from-red-900/40 to-red-800/20 rounded-xl border border-red-500/30'>
                  <p className='text-lg sm:text-xl font-semibold text-red-200 flex items-center gap-2'>
                    <span className='w-3 h-3 bg-red-400 rounded-full'></span>
                    Перша зустріч русичів з монголами
                  </p>
                </div>

                <div className='p-4 bg-gradient-to-r from-red-900/40 to-red-800/20 rounded-xl border border-red-500/30'>
                  <p className='text-lg sm:text-xl font-semibold text-red-200 flex items-center gap-2'>
                    <span className='w-3 h-3 bg-red-400 rounded-full'></span>
                    Жорстока страта полонених князів
                  </p>
                </div>

                <div className='p-4 bg-gradient-to-r from-red-900/40 to-red-800/20 rounded-xl border border-red-500/30'>
                  <p className='text-lg sm:text-xl text-red-200 flex items-center gap-2'>
                    <span className='w-3 h-3 bg-red-400 rounded-full'></span>
                    Після перемоги монгольські війська не рушили на руські
                    землі, а повернули на Схід
                  </p>
                </div>
              </div>

              {/* Дополнительная информация */}
              <div className='mt-6 p-4 bg-slate-900/50 rounded-lg'>
                <p className='text-sm sm:text-base text-slate-300 italic'>
                  💡 Ця битва продемонструвала роз'єднаність руських князівств
                  та необхідність об'єднання перед загрозою з Сходу
                </p>
              </div>
            </div>

            {/* Изображение - справа */}
            <div className='flex-1 min-w-0'>
              <div className='bg-gradient-to-br from-red-900 to-slate-800 rounded-2xl p-4 sm:p-6 border-2 border-red-500/40 shadow-2xl h-full'>
                <div className='flex flex-col items-center h-full'>
                  <div className='mb-4 sm:mb-6'>
                    <img
                      src='../../../assets/GaliciaVolynPower/kalka.jpg'
                      alt='Битва на річці Калка'
                      className='w-full max-w-2xl h-48 sm:h-64 lg:h-80 xl:h-96 rounded-xl shadow-lg object-cover'
                    />
                  </div>

                  <div className='text-center flex-1 flex flex-col justify-center'>
                    <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3'>
                      Битва на річці Калка
                    </h3>
                    <p className='text-red-200 text-base sm:text-lg mb-4 leading-relaxed'>
                      Перша зустріч русичів з монголами 1223 року, що позначила
                      початок монгольської експансії на руські землі.
                    </p>

                    <div className='flex flex-wrap gap-2 justify-center'>
                      <span className='bg-red-800/60 text-red-100 px-3 py-2 rounded-full text-sm font-medium'>
                        🗓️ 1223 рік
                      </span>
                      <span className='bg-red-800/60 text-red-100 px-3 py-2 rounded-full text-sm font-medium'>
                        ⚔️ Русь vs Монголи
                      </span>
                      <span className='bg-red-800/60 text-red-100 px-3 py-2 rounded-full text-sm font-medium'>
                        📜 Історична битва
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Хронология нашествия */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-orange-400 backdrop-blur-sm'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-orange-300'>
            Хронологія монгольської навали
          </h2>

          <div className='space-y-4'>
            <div className='p-3 sm:p-4 bg-orange-900/20 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-orange-300 text-lg sm:text-xl'>
                  1237 рік
                </span>{' '}
                – хан Батий розгромив Рязанське та Володимиро-Суздальське
                князівства
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-orange-900/20 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-orange-300 text-lg sm:text-xl'>
                  1238 рік
                </span>{' '}
                – війська Батия вторглися у Південно-Західну Русь (територію
                сучасної України)
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-orange-900/20 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-orange-300 text-lg sm:text-xl'>
                  1239 рік
                </span>{' '}
                – захоплення Переяславського та Чернігівського князівств
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-orange-900/20 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-orange-300 text-lg sm:text-xl'>
                  1241–1242 роки
                </span>{' '}
                – монголи рушили спочатку на Волинь і Галичину
              </p>
            </div>
          </div>
        </div>

        {/* Захват Киева */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <div className='flex flex-col lg:flex-row gap-6 sm:gap-8'>
            <div className='flex-1'>
              <p className='text-base sm:text-lg leading-relaxed mb-4'>
                <span className='font-bold text-red-300 text-xl sm:text-2xl'>
                  Важлива дата: 1240 рік
                </span>{' '}
                – захоплення Києва монголами
              </p>

              <div className='p-3 sm:p-4 bg-red-900/30 rounded-lg'>
                <p className='text-base sm:text-lg leading-relaxed'>
                  Монгольські війська взяли й розграбували Київ. Обороною Києва
                  керував воєвода Дмитро. З 50 тисяч мешканців Києва в живих
                  залишилось не більше 1 тисячі.
                </p>
              </div>
            </div>

            <div className='flex justify-center lg:justify-end'>
              <div className='bg-gradient-to-br from-red-900 to-slate-800 rounded-xl p-3 sm:p-4 border-2 border-red-500/30 shadow-lg w-full max-w-md'>
                <p className='text-center text-red-200 mt-2 sm:mt-3 text-sm sm:text-base italic'>
                  «І поставив Батий пороки під город коло воріт Лядських, — бо
                  тут підступили були дебрі, — і пороки безперестану били день і
                  ніч. Вибили вони стіни, і вийшли городяни на розбиті стіни, і
                  було тут видіти, як ламалися списи і розколювалися щити,
                  стріли затьмарили світ переможеним, і Дмитро поранений був.
                  Вийшли татари на стіни і сиділи того дня і ночі, а городяни
                  зробили ще друге укріплення навколо [церкви] святої Богородиці
                  [Десятинної]».
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Причины поразки */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
          <h1 className='text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-amber-300'>
            Причини поразки руських князівств
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
            <div className='p-3 sm:p-4 bg-amber-900/20 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Роздробленість, не подолана навіть перед обличчям військової
                загрози
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-amber-900/20 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Концентровані удари монголів по окремих князівствах
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-amber-900/20 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Великий досвід монголів щодо штурму міст і фортець, здобутий у
                Китаї, Середній Азії
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-amber-900/20 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Відсутність єдиного командування та координації між руськими
                князями
              </p>
            </div>
          </div>
        </div>

        {/* Наслідки панування */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <h1 className='text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-red-300'>
            Наслідки монгольського панування
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
            <div className='p-3 sm:p-4 bg-red-900/20 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Великі людські та матеріальні втрати
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-red-900/20 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Утрачено державну незалежність Русі
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-red-900/20 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Занепали ремесла, втрачені цілі ремісничі спеціальності
                (виробництво емалі, черні, різьблення по каменю)
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-red-900/20 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Поширилася система підданства в стосунках між князем і знаттю
              </p>
            </div>
          </div>
        </div>

        {/* Золотоординське яро */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-orange-400 backdrop-blur-sm'>
          <h1 className='text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-orange-300 text-center'>
            ЗОЛОТООРДИНСЬКЕ ЯРМО
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6'>
            <div className='p-3 sm:p-4 bg-orange-900/20 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed font-bold text-orange-300 mb-2'>
                Ярлик
              </p>
              <p className='text-base sm:text-lg leading-relaxed'>
                Грамота-дозвіл на володіння землями в обмін на визнання
                зверхності Золотої Орди та зобов'язання надавати військо й
                сплачувати данину
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-orange-900/20 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed font-bold text-orange-300 mb-2'>
                Баскак
              </p>
              <p className='text-base sm:text-lg leading-relaxed'>
                Найвищий урядовець Золотої Орди на підкорених землях (данина), у
                розпорядженні якого знаходилися військові загони
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-orange-900/20 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed font-bold text-orange-300 mb-2'>
                Золота Орда
              </p>
              <p className='text-base sm:text-lg leading-relaxed'>
                Імперія монголів, столиця м. Сарай
              </p>
            </div>
          </div>
        </div>

        {/* Цитаты */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
          <h1 className='text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-amber-300 text-center'>
            Цитати про монгольську навалу
          </h1>

          <div className='space-y-4 sm:space-y-6'>
            <div className='p-3 sm:p-4 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-base sm:text-lg leading-relaxed italic'>
                «І говорили (половці) руським князям: "Якщо ви не поможете нам,
                (то) ми нині порубані були, а ви завтра порубані будете..." І
                вирішили князі: "Лучче б нам зустріти їх на чужий землі, аніж на
                своїй"»
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-base sm:text-lg leading-relaxed italic'>
                «У рік 6731 прийшла нечувана рать: безбожні моавитяни, прозвані
                татарами, прийшли на землю Половецьку, і половці стали супроти
                них. Юрій Кончакович, що був найбільший між усіх половців, не
                зміг вистояти перед ними, і побіг він до ріки Дніпра, а татари
                вернулися у вежі свої...»
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-base sm:text-lg leading-relaxed italic'>
                «Мстислав Мстиславович... повелів Данилові попереду перейти з
                полками річку Калку й іншим полкам [піти] за ним, а сам після
                нього перейшов... Мстислав же [Романович] і другий Мстислав
                [Святославович] сиділи в стані, не знавши [цього], тому що
                Мстислав [Мстиславович] їм обом [нічого] не сказав – через
                заздрість, бо велика незгода була між ними...»
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-base sm:text-lg leading-relaxed italic'>
                «Була рада всіх князів у місті Києві, і вирішили на раді так:
                "Краще нам зустріти їх на чужій землі, ніж на своїй". На раді
                були Мстислав Романович київський, Мстислав ковельський і
                чернігівський і Мстислав Мстиславич галицький – вони були
                старійшими князями Руської землі...»
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-base sm:text-lg leading-relaxed italic'>
                «Мстислав же Романович і другий Мстислав, Святославич, сиділи в
                [укріпленому таборі], не знаючи [цього], тому що Мстислав
                Удатний їм обом [нічого] не сказав – через зависть, бо велика
                незгода була межи ними... І сталася перемога татар над усіма
                князями руськими, якої ото не бувало ніколи. Татари ж перемогли
                руських князів за гріхи християн...»
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-base sm:text-lg leading-relaxed italic'>
                «...Того літа татари взяли Переяславль і єпископа вбили, і людей
                перебили, а місто спалили і, захопивши багато людей і майна,
                пішли... Того ж літа взяли татари Чернігів... і місто
                спалили...»
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-base sm:text-lg leading-relaxed italic'>
                «І взяли татари місто Київ, місяця грудня в 6 день: а Дмитра
                воєводу привели пораненого до Батия, і не велів Батий убивати
                його ради його мужності...»
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-base sm:text-lg leading-relaxed italic'>
                «І поставив Батий пороки під город коло воріт Лядських, — бо тут
                підступили були дебрі, — і пороки безперестану били день і ніч.
                Вибили вони стіни, і вийшли городяни на розбиті стіни, і було
                тут видіти, як ламалися списи і розколювалися щити, стріли
                затьмарили світ переможеним, і Дмитро поранений був. Вийшли
                татари на стіни і сиділи того дня і ночі, а городяни зробили ще
                друге укріплення навколо [церкви] святої Богородиці
                [Десятинної]».
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-base sm:text-lg leading-relaxed italic'>
                «...[князь] Михайло [Чернігівський] відправився на уклін до
                Батия, вони заставили його пройти між двома огнями, після вони
                сказали, щоб він поклонився... Той [князь] відповів, що з охотою
                поклониться Батию, але не поклониться ідолу, бо християнину це
                не подобає... Краще вмерти, ніж зробити те, що не подобає...»
              </p>
            </div>
          </div>
        </div>

        {/* Историческое значение */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-red-300 text-center'>
            Історичне значення монгольської навали
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
            <div className='p-3 sm:p-4 bg-red-900/30 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Завершення періоду Київської Русі як єдиної держави
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-red-900/30 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Початок нового етапу історичного розвитку українських земель
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-red-900/30 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Формування нових центрів української державності на заході
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-red-900/30 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Зміна геополітичної ситуації в Східній Європі
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
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold text-red-200 rounded-full border-2 border-red-600/50 shadow-lg text-center'>
            Продовження: Галицько-Волинська держава після монгольської навали
          </span>
        </div>
      </div>
    </div>
  )
}
