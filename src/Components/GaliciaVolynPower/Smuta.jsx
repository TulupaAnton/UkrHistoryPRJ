export function Smuta () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-4 sm:py-8 px-3 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-gray-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-yellow-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-stone-600 rounded-full blur-3xl'></div>
      </div>

      {/* Заголовок страницы */}
      <div className='w-full max-w-6xl mx-auto text-center mb-8 sm:mb-12 relative z-10 px-2'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500'>
            Боярська смута
          </span>
        </h1>
        <h2 className='text-xl sm:text-2xl lg:text-3xl text-yellow-300 font-bold mb-4 sm:mb-6'>
          (1205-1238 роки)
        </h2>
        <div className='inline-block bg-gray-800/40 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-600/50 mb-4 sm:mb-6'>
          <span className='text-yellow-200 font-medium text-base sm:text-xl'>
            Період усобиць у Галицько-Волинській державі
          </span>
        </div>
        <div className='w-32 sm:w-48 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12 px-2'>
        {/* Первый блок - Начало смуты */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-gray-400 backdrop-blur-sm'>
          <h1 className='text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-300'>
            Початок боярської смути
          </h1>
          <p className='text-base sm:text-lg leading-relaxed mb-4'>
            Після смерті Романа Мстиславовича галицькі бояри прогнали за межі
            князівства його дружину й малолітніх синів Данила та Василька.
          </p>
          <p className='text-base sm:text-lg leading-relaxed mb-4'>
            Починається період усобиць у Галицько-Волинській державі. У цей час
            у внутрішні справи Галичини та Волині втрутилися Польща та Угорщина,
            представник бояр за підтримки поляків Владислав Кормильчич на деякий
            час захопив владу і оголосив себе Галицьким князем.
          </p>
          <div className='p-3 sm:p-4 bg-gray-900/30 rounded-lg border-l-2 border-yellow-400 mt-4'>
            <p className='text-base sm:text-lg leading-relaxed italic text-yellow-200'>
              "Після смерті могутнього князя Романа настали важкі часи для
              Галицько-Волинської держави. Бояри, яких князь тримав у суворих
              руках, тепер вирішили взяти владу в свої руки..."
            </p>
          </div>
        </div>

        {/* Блок о вмешательстве соседей */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-yellow-400 backdrop-blur-sm'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-yellow-300'>
            Втручання сусідніх держав
          </h2>
          <p className='text-base sm:text-lg leading-relaxed mb-4'>
            Польський князь Лешко Білий та угорський король Андрій II активно
            втручалися у внутрішні справи Галицько-Волинської держави,
            намагаючись посадити на престол своїх ставлеників.
          </p>
          <p className='text-base sm:text-lg leading-relaxed mb-4'>
            Владислав Кормильчич, який оголосив себе князем, був маріонеткою в
            руках польських феодалів і не мав реальної підтримки серед народу.
          </p>
          <div className='p-3 sm:p-4 bg-yellow-900/30 rounded-lg border-l-2 border-yellow-400'>
            <p className='text-base sm:text-lg leading-relaxed italic text-yellow-200'>
              "Король угорський Андрій і князь польський Лешко, як стерв'ятники,
              кружляли над ослабленою державою, намагаючись відірвати собі
              шматки галицько-волинських земель..."
            </p>
          </div>
        </div>

        {/* Блок о борьбе Данила */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-stone-400 backdrop-blur-sm'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-stone-300'>
            Боротьба Данила Романовича за спадщину
          </h2>
          <p className='text-base sm:text-lg leading-relaxed mb-4'>
            Молодий Данило Романович, син Романа Мстиславовича, з дитинства був
            змушений боротися за свою спадщину. Разом з братом Васильком вони
            пройшли важкий шлях від вигнання до повернення влади.
          </p>
          <p className='text-base sm:text-lg leading-relaxed mb-4'>
            Протягом багатьох років Данило вів запеклу боротьбу з боярською
            опозицією та іноземними інтервентами, поступово відвойовуючи землі
            свого батька.
          </p>
          <div className='p-3 sm:p-4 bg-stone-900/30 rounded-lg border-l-2 border-stone-400'>
            <p className='text-base sm:text-lg leading-relaxed italic text-stone-200'>
              "Данило Романович, хоч і був юний, але мав характер свого батька.
              Він не змирився з втратою престолу і всіма силами боровся за
              повернення законної влади..."
            </p>
          </div>
        </div>

        {/* Завершение смуты */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-green-400 backdrop-blur-sm'>
          <h1 className='text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-green-300'>
            Завершення смути:
          </h1>
          <p className='text-base sm:text-lg leading-relaxed mb-4'>
            У{' '}
            <span className='font-bold text-green-300 text-lg sm:text-xl'>
              1238 році
            </span>{' '}
            у битві під Дорогочином Данило Романович розгромив Добжинський орден
            хрестоносців, оволодів Перемишлем, Галичем і відновив єдність
            держави.
          </p>
          <p className='text-base sm:text-lg leading-relaxed mb-4'>
            Ця перемога стала поворотним моментом у боротьбі за об'єднання
            галицько-волинських земель і остаточно закріпила владу Данила
            Романовича.
          </p>
          <div className='p-3 sm:p-4 bg-green-900/30 rounded-lg border-l-2 border-green-400'>
            <p className='text-base sm:text-lg leading-relaxed italic text-green-200'>
              "Битва під Дорогочином стала вирішальною у довготривалій боротьбі
              Данила за спадщину батька. Розгром хрестоносців показав силу
              молодого князя і остаточно переломив хід боярської смути..."
            </p>
          </div>
        </div>

        {/* Историческое значение */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-gray-400 backdrop-blur-sm'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-300 text-center'>
            Історичне значення боярської смути
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
            <div className='p-3 sm:p-4 bg-gray-900/30 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Показала слабкість держави під час міжкнязівських усобиць
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-gray-900/30 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Продемонструвала небезпеку втручання сусідніх держав у внутрішні
                справи
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-gray-900/30 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Закалила характер Данила Романовича, який зміг відновити єдність
                держави
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-gray-900/30 rounded-lg'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Показала важливість сильної централізованої влади для збереження
                державності
              </p>
            </div>
          </div>
        </div>

        {/* Хронология событий */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-yellow-400 backdrop-blur-sm'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-yellow-300 text-center'>
            Хронологія боярської смути
          </h2>

          <div className='space-y-4'>
            <div className='flex items-start p-3 sm:p-4 bg-yellow-900/20 rounded-lg'>
              <span className='font-bold text-yellow-300 text-lg mr-3'>
                1205
              </span>
              <p className='text-base sm:text-lg leading-relaxed'>
                Загибель Романа Мстиславовича. Початок смути. Вигнання вдови
                князя та малолітніх синів
              </p>
            </div>

            <div className='flex items-start p-3 sm:p-4 bg-yellow-900/20 rounded-lg'>
              <span className='font-bold text-yellow-300 text-lg mr-3'>
                1206-1210
              </span>
              <p className='text-base sm:text-lg leading-relaxed'>
                Активне втручання Польщі та Угорщини. Боротьба за галицький
                престол
              </p>
            </div>

            <div className='flex items-start p-3 sm:p-4 bg-yellow-900/20 rounded-lg'>
              <span className='font-bold text-yellow-300 text-lg mr-3'>
                1211
              </span>
              <p className='text-base sm:text-lg leading-relaxed'>
                Владислав Кормильчич оголошує себе галицьким князем за підтримки
                поляків
              </p>
            </div>

            <div className='flex items-start p-3 sm:p-4 bg-yellow-900/20 rounded-lg'>
              <span className='font-bold text-yellow-300 text-lg mr-3'>
                1214-1238
              </span>
              <p className='text-base sm:text-lg leading-relaxed'>
                Поступове повернення Данила Романовича. Боротьба з боярами та
                інтервентами
              </p>
            </div>

            <div className='flex items-start p-3 sm:p-4 bg-green-900/20 rounded-lg'>
              <span className='font-bold text-green-300 text-lg mr-3'>
                1238
              </span>
              <p className='text-base sm:text-lg leading-relaxed'>
                Перемога під Дорогочином. Повне відновлення єдності
                Галицько-Волинської держави
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Разделитель внизу */}
      <div className='relative mt-12 sm:mt-16 py-6 sm:py-8 px-3 sm:px-6 lg:px-8'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-full border-t-2 border-yellow-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold text-yellow-200 rounded-full border-2 border-yellow-600/50 shadow-lg text-center'>
            Продовження: Данило Галицький
          </span>
        </div>
      </div>
    </div>
  )
}
