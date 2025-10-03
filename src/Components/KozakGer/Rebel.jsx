export function Rebel () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-4 sm:py-8 px-3 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-purple-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-indigo-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-violet-600 rounded-full blur-3xl'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12 px-2'>
        {/* Главный заголовок */}
        <div className='w-full text-center mb-8 sm:mb-12 relative z-10 px-2'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-violet-400 to-indigo-500'>
              Козацькі повстання 1620-х – 1630-х рр.
            </span>
          </h1>
          <div className='w-32 sm:w-48 h-1 bg-gradient-to-r from-purple-400 to-indigo-600 mx-auto rounded-full'></div>
        </div>

        {/* Причины повстання */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-purple-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-purple-300 text-center'>
            Причини повстань
          </h2>

          <div className='space-y-4 sm:space-y-6'>
            <div className='p-4 sm:p-6 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Поширення фільваркової системи
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Обмеження прав привілеїв запорозьких козаків, перетворення їх на
                кріпаків
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Ігнорування польським урядом вимог щодо збільшення реєстру
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Поширення уніатської та переслідування православної церкви
                (заборона будувати православні церкви й монастирі та закриття
                тих, що вже існували, передання їх у власність уніатській
                церкві, ліквідація парафіяльних шкіл)
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Захоплення польськими феодалами південноукраїнських земель, де
                феодали зіткнулися з інтересами козаків
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                <span className='font-bold text-purple-300'>Панщина</span> —
                господарська повинність селян, яку вони повинні відпрацювати на
                безоплатній основі.
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                <span className='font-bold text-purple-300'>Кріпак</span> —
                людина, яка залежить від свого феодала. Фактично, за таких
                відносин, людина стає власністю пана.
              </p>
            </div>
          </div>
        </div>

        {/* Повстання 1625 р. */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <div className='flex items-center gap-4 mb-6'>
            <span className='text-2xl sm:text-3xl font-bold bg-red-900/60 text-red-200 px-4 py-2 rounded-full'>
              1625 р.
            </span>
            <h2 className='text-2xl sm:text-3xl font-bold text-red-300'>
              Керівник:{' '}
              <span className='font-bold text-red-200'>Марко Жмайло</span>
            </h2>
          </div>

          <div className='space-y-6'>
            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <h3 className='text-xl sm:text-2xl font-bold text-red-300 mb-4'>
                Привід та події:
              </h3>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Заборона Польщею морських походів.
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed mt-4'>
                У відповідь на незгоду козаків виконати вимоги уряду, Польща
                відправила каральний загін.
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed mt-4'>
                Після бойових дій на Куруковому озері польська сторона пішла на
                переговори
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed mt-4'>
                Помірковані козаки переобрали гетьмана - ним став Михайло
                Дорошенко, який підписав угоду.
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <h3 className='text-xl sm:text-2xl font-bold text-amber-300 mb-4'>
                Результат:
              </h3>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                <span className='font-bold text-amber-300 bg-amber-900/40 px-2 py-1 rounded'>
                  Куруківська угода (1625)
                </span>
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed mt-4'>
                <span className='font-bold text-amber-300'>
                  Реєстр: 6 тисяч осіб.
                </span>{' '}
                Збільшено плату за службу. Шість полків. Козаків зобов'язували
                не втручатися в релігійні справи, відмовитись від морських
                походів, не підтримувати зносин з іншими державами.
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-xl sm:text-2xl leading-relaxed italic'>
                <span className='font-semibold text-red-300'>
                  «Надалі козаки повинні будуть коритися собі виключно старшому,
                  якого самі оберуть... Козаки мусять скласти правильні реєстри,
                  які не перевищують в тисяч... 3 [цього] числа 1000 або більше
                  козаків, на розсуд коронного гетьмана і з відома їхнього
                  старшого... мусять перебувати на Низу за порогами і там
                  виконувати свою службу»
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Повстання 1630 р. */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-orange-400 backdrop-blur-sm'>
          <div className='flex items-center gap-4 mb-6'>
            <span className='text-2xl sm:text-3xl font-bold bg-orange-900/60 text-orange-200 px-4 py-2 rounded-full'>
              1630 р.
            </span>
            <h2 className='text-2xl sm:text-3xl font-bold text-orange-300'>
              Керівник:{' '}
              <span className='font-bold text-orange-200'>
                Тарас Федорович (Трясило)
              </span>
            </h2>
          </div>

          <div className='space-y-6'>
            <div className='p-4 sm:p-6 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Похід на Черкаси та Корсунь. Влаштували{' '}
                <span className='font-bold text-orange-300 bg-orange-900/40 px-2 py-1 rounded'>
                  "Тарасову ніч"
                </span>
                , Вирізавши "Золоту роту" з добірних польських вояків неподалік
                Переяслава
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <h3 className='text-xl sm:text-2xl font-bold text-orange-300 mb-4'>
                Наслідки:
              </h3>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Переяславська угода підтверджувала умови Куруківської (
                <span className='font-bold text-orange-300'>
                  реєстр збільшили до 8 тис.
                </span>
                )
              </p>
            </div>
          </div>
        </div>

        {/* Повстання 1635 р. */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-green-400 backdrop-blur-sm'>
          <div className='flex items-center gap-4 mb-6'>
            <span className='text-2xl sm:text-3xl font-bold bg-green-900/60 text-green-200 px-4 py-2 rounded-full'>
              1635 р.
            </span>
            <h2 className='text-2xl sm:text-3xl font-bold text-green-300'>
              Керівник:{' '}
              <span className='font-bold text-green-200'>Іван Сулима</span>
            </h2>
          </div>

          <div className='space-y-6'>
            <div className='p-4 sm:p-6 bg-green-900/20 rounded-lg border-l-2 border-green-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Будівництво фортеці{' '}
                <span className='font-bold text-green-300 bg-green-900/40 px-2 py-1 rounded'>
                  Кодак
                </span>
                . Запорожці на чолі з І. Сулимою захопили та частково зруйнували
                фортецю
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-green-900/20 rounded-lg border-l-2 border-green-400'>
              <h3 className='text-xl sm:text-2xl font-bold text-green-300 mb-4'>
                Результат:
              </h3>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Сулиму страчено у Варшаві
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed mt-2'>
                Кодацьку фортецю було відбудовано
              </p>
            </div>
          </div>
        </div>

        {/* Повстання 1637-1638 рр. */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-blue-400 backdrop-blur-sm'>
          <div className='flex items-center gap-4 mb-6'>
            <span className='text-2xl sm:text-3xl font-bold bg-blue-900/60 text-blue-200 px-4 py-2 rounded-full'>
              1637-1638 рр.
            </span>
            <h2 className='text-2xl sm:text-3xl font-bold text-blue-300'>
              Керівники:{' '}
              <span className='font-bold text-blue-200'>
                Павло Павлюк (Бут), Яків Острянин, Дмитро Гуня
              </span>
            </h2>
          </div>

          <div className='space-y-6'>
            <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Польський уряд вирішив переглянути реєстр і вилучити з нього
                всіх неблагонадійних. Це стало приводом до нового повстання, яке
                очолив реєстровий полковник Павло Павлюк (Бут). У битві під
                Кумейками повстанці зазнали поразки. 1638 р. - нова хвиля
                повстання під керівництвом Я. Острянина, Д. Гуні. Поразка під
                Говтвою.
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
              <h3 className='text-xl sm:text-2xl font-bold text-blue-300 mb-4'>
                Наслідки:
              </h3>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Сейм ухвалив{' '}
                <span className='font-bold text-blue-300 bg-blue-900/40 px-2 py-1 rounded'>
                  «Ординацію Війська Запорозького реєстрового»:
                </span>{' '}
                скасовано виборність старшин і козацький суд,{' '}
                <span className='font-bold text-blue-300'>
                  реєстр - 6 тисяч
                </span>
                , з польської шляхти призначався комісар і полковники, селитися
                тільки в трьох прикордонних староствах
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
              <p className='text-xl sm:text-2xl leading-relaxed italic'>
                <span className='font-semibold text-blue-300'>
                  «Ординація Війська Запорозького реєстрового, що перебуває на
                  службі Речі Посполитої (1638 р.) обмежувала права та привілеї
                  козаків»
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Золотий спокій */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
          <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
            <h1 className='text-2xl sm:text-3xl font-bold text-amber-300 text-center'>
              З 1638 по 1648 рр. у Речі Посполитій тривав період{' '}
              <span className='font-bold text-amber-200'>
                «Золотого спокою»
              </span>
              , під час якого не було великих козацько-селянських повстань
            </h1>
          </div>
        </div>

        {/* Причины поразок */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-red-300 text-center'>
            Причини поразок
          </h1>

          <div className='space-y-4 sm:space-y-6'>
            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Як правило, вони починалися стихійно, без ретельного планування
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Головна мета - помста кривдникам, а не реалізація певної
                програми
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Селяни-повстанці не йшли далі своєї місцевості
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Старшина та реєстровці схилялися до переговорів, а не до рішучих
                воєнних дій
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Козацька армія поступалася польській у стратегії, озброєнні,
                було краще вимуштроване
              </p>
            </div>
          </div>
        </div>

        {/* Наслідки */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-purple-400 backdrop-blur-sm'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-purple-300 text-center'>
            Наслідки
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
            <div className='space-y-4'>
              <div className='p-4 sm:p-6 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  Реєстрове козацтво позбавлено самоврядування: полковниками
                  могли бути тільки поляки, очолював військо не гетьман, а
                  спеціальний королівський комісар
                </p>
              </div>

              <div className='p-4 sm:p-6 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  Козаки передавали полякам артилерію та військові відзнаки
                </p>
              </div>

              <div className='p-4 sm:p-6 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  Обмежено територію розселення козаків
                </p>
              </div>

              <div className='p-4 sm:p-6 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  На Дніпрі відбудовано Кодацьку фортецю
                </p>
              </div>
            </div>

            <div className='space-y-4'>
              <div className='p-4 sm:p-6 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  На території України постійно перебувало польське військо
                </p>
              </div>

              <div className='p-4 sm:p-6 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  Нереєстрові козаки перетворені на кріпаків, посилився
                  феодальний гніт (збільшились панщина, податки з міст)
                </p>
              </div>

              <div className='p-4 sm:p-6 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  Масові втечі населення від польської розправи на територію
                  Росії – на Дон і Слобожанщину
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Разделитель внизу */}
      <div className='relative mt-12 sm:mt-16 py-6 sm:py-8 px-3 sm:px-6 lg:px-8'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-full border-t-2 border-purple-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-xl sm:text-2xl font-semibold text-purple-200 rounded-full border-2 border-purple-600/50 shadow-lg text-center'>
            Культура
          </span>
        </div>
      </div>
    </div>
  )
}
