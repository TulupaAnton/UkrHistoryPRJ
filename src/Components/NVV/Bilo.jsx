export function Bilo () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-4 sm:py-8 px-3 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-red-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-orange-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-amber-600 rounded-full blur-3xl'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12 px-2'>
        {/* Главный заголовок */}
        <div className='w-full text-center mb-8 sm:mb-12 relative z-10 px-2'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-orange-400 to-amber-500'>
              Битва під Берестечком
            </span>
          </h1>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl text-orange-300 font-bold mb-4 sm:mb-6'>
            Білоцерківський договір
          </h2>
          <div className='w-32 sm:w-48 h-1 bg-gradient-to-r from-red-400 to-amber-600 mx-auto rounded-full'></div>
        </div>

        {/* Основная информация о битве */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <div className='flex items-center gap-4 mb-6'>
            <span className='text-2xl sm:text-3xl font-bold bg-red-900/60 text-red-200 px-4 py-2 rounded-full'>
              Червень 1651 р.
            </span>
            <h2 className='text-2xl sm:text-3xl font-bold text-red-300'>
              Битва під Берестечком
            </h2>
          </div>

          <div className='space-y-6'>
            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <h3 className='text-xl sm:text-2xl font-bold text-red-300 mb-4'>
                Результат:
              </h3>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                <span className='font-bold text-red-300'>Зрада татар.</span>{' '}
                <span className='font-bold text-red-300'>
                  Полон Хмельницького.
                </span>{' '}
                <span className='font-bold text-red-300'>
                  Героїзм козаків під керівництвом І.Богуна.
                </span>{' '}
                <span className='font-bold text-red-300'>
                  Загинуло до 8 тис. козаків.
                </span>
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                <span className='font-bold text-orange-300'>
                  13-15 вересня 1651 р.
                </span>{' '}
                - Облога польсько-литовським військом козацького табору під
                Білою Церквою
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Через поразки козаків, позицію кримського хана, тиск з боку
                старшини Хмельницький іде на{' '}
                <span className='font-bold text-amber-300'>
                  Білоцерківського мирного договору
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Иван Богун */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-blue-400 backdrop-blur-sm'>
          <div className='flex flex-col lg:flex-row gap-6 sm:gap-8'>
            <div className='lg:w-1/3 flex justify-center'>
              <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
                <img
                  src='../../../assets/NVV/Ivan.jpg'
                  alt='Іван Богун'
                  className='w-full max-w-xs sm:max-w-sm rounded-lg shadow-2xl'
                />
              </div>
            </div>

            <div className='lg:w-2/3'>
              <h1 className='text-3xl sm:text-4xl font-bold mb-6 text-blue-300'>
                Іван Богун
              </h1>

              <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-2 border-blue-400 mb-6'>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  Український військовий та дипломат. Один з найближчих
                  соратників Богдана Хмельницького. Став відомим завдяки своїм
                  рішучим діям у битві під Берестечком, завдяки чому з оточення
                  було виведено близько{' '}
                  <span className='font-bold text-blue-300'>
                    30 тис. козаків
                  </span>
                  . Один з небагатьох козаків, який відмовився присягати на
                  вірність Московському царю.
                </p>
              </div>

              <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
                <h3 className='text-xl sm:text-2xl font-bold text-blue-300 mb-4'>
                  Цитата про нього:
                </h3>
                <p className='text-xl sm:text-2xl leading-relaxed italic text-blue-200'>
                  «I ось зібрав Богун (гетьман наказний) своїх полковників на
                  раду. Думали вони, якби вирватися з осади... На раді
                  полковники вирішили навести через Пляшівку міст, переправити
                  ним на той бік побільше війська, відігнати Лянцкоронського і
                  дати змогу усьому козацтву вийти з облоги...»
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Изображение поля битвы */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 text-amber-300 text-center'>
            🗺️ Зображення поля битви
          </h2>
          <div className='flex justify-center'>
            <div className='p-4 sm:p-6 bg-amber-900/20 rounded-lg border-l-2 border-amber-400 w-full max-w-4xl'>
              <img
                src='../../../assets/NVV/пб.jpg'
                alt='Зображення поля битви під Берестечком'
                className='w-full h-120 sm:h-120 lg:h-96 object-cover rounded-lg shadow-2xl'
              />
              <p className='text-xl sm:text-2xl text-amber-200 text-center mt-4 font-medium'>
                Поле битви під Берестечком
              </p>
            </div>
          </div>
        </div>

        {/* Историческое значение */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-red-300 text-center'>
            🎯 Історичне значення
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg'>
              <p className='text-xl sm:text-2xl font-semibold text-red-300 mb-4 text-center'>
                ⚔️ Одна з найбільших битв
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Одна з найбільших битв Національно-визвольної війни
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg'>
              <p className='text-xl sm:text-2xl font-semibold text-red-300 mb-4 text-center'>
                🏹 Зрада союзників
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Продемонструвала ненадійність кримських союзників
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg'>
              <p className='text-xl sm:text-2xl font-semibold text-red-300 mb-4 text-center'>
                🛡️ Героїзм козаків
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Показала мужність та героїзм українських козаків
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg'>
              <p className='text-xl sm:text-2xl font-semibold text-red-300 mb-4 text-center'>
                📜 Поразка та мир
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Призвела до Білоцерківського договору
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
            Білоцерковський договір
          </span>
        </div>
      </div>
    </div>
  )
}
