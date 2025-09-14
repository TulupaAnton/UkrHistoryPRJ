export function Serednostog () {
  return (
    <div className='w-full  mx-auto px-4'>
      {/* Основной блок культуры */}
      <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-10 shadow-2xl border-2 border-amber-600 border-opacity-30 relative overflow-hidden mt-8'>
        {/* Декоративные элементы */}
        <div className='absolute top-0 left-0 w-32 h-32 bg-amber-500 rounded-full opacity-10 blur-3xl -translate-x-16 -translate-y-16'></div>
        <div className='absolute bottom-0 right-0 w-40 h-40 bg-amber-600 rounded-full opacity-10 blur-3xl translate-x-16 translate-y-16'></div>

        {/* Заголовок */}
        <div className='text-center mb-10 relative z-10'>
          <h1 className='font-bold text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 mb-4'>
            Середньостогівська культура
          </h1>
          <div className='w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full'></div>
        </div>

        {/* Хронология */}
        <div className='mb-8 text-center'>
          <p className='text-2xl text-amber-300 font-semibold mb-2'>
            Хронологічні межі:
            <span className='text-white ml-2'>V-IV тис. до н.е.</span>
          </p>
        </div>

        {/* Территория */}
        <div className='mb-8 bg-gray-700 bg-opacity-50 rounded-xl p-6 border border-amber-500 border-opacity-20'>
          <h2 className='text-2xl font-semibold text-amber-300 mb-4 flex items-center'>
            <span className='w-3 h-3 bg-amber-400 rounded-full mr-3'></span>
            Територія поширення
          </h2>
          <p className='text-xl text-gray-200'>
            Степове Подніпров'я, Приазов'я, басейн Сіверського Дінця
          </p>
        </div>

        {/* Господарство */}
        <div className='mb-8 bg-gray-700 bg-opacity-50 rounded-xl p-6 border border-amber-500 border-opacity-20'>
          <h2 className='text-2xl font-semibold text-amber-300 mb-4 flex items-center'>
            <span className='w-3 h-3 bg-amber-400 rounded-full mr-3'></span>
            Господарство
          </h2>
          <div className='space-y-3 text-xl text-gray-200'>
            <p className='flex items-start'>
              <span className='text-amber-400 mr-3 text-2xl'>•</span>
              <span>Скотарська археологічна культура</span>
            </p>
            <p className='flex items-start'>
              <span className='text-amber-400 mr-3 text-2xl'>•</span>
              <span>Напівкочовий спосіб життя</span>
            </p>
          </div>
        </div>

        {/* Религия и погребения */}
        <div className='mb-8 bg-gray-700 bg-opacity-50 rounded-xl p-6 border border-amber-500 border-opacity-20'>
          <h2 className='text-2xl font-semibold text-amber-300 mb-4 flex items-center'>
            <span className='w-3 h-3 bg-amber-400 rounded-full mr-3'></span>
            Вірування та поховання
          </h2>
          <div className='space-y-3 text-xl text-gray-200'>
            <p className='flex items-start'>
              <span className='text-amber-400 mr-3 text-2xl'>•</span>
              <span>Язичники</span>
            </p>
            <p className='flex items-start'>
              <span className='text-amber-400 mr-3 text-2xl'>•</span>
              <span>Померлих хоронили прямо в ямах</span>
            </p>
          </div>
        </div>
      </div>

      {/* Вывод */}
      <div className='bg-gradient-to-r from-amber-900 to-amber-800 rounded-2xl p-8 mt-8 border-2 border-amber-600 border-opacity-30'>
        <h2 className='text-3xl font-bold text-amber-200 text-center mb-6'>
          Висновок
        </h2>
        <div className='grid md:grid-cols-2 gap-6 text-xl text-gray-200'>
          <div className='text-center p-4 bg-amber-900 bg-opacity-30 rounded-xl border border-amber-500 border-opacity-20'>
            <h3 className='text-2xl font-semibold text-amber-300 mb-3'>
              Трипільці
            </h3>
            <p>Землероби, переважно на Правобережжі</p>
          </div>
          <div className='text-center p-4 bg-amber-900 bg-opacity-30 rounded-xl border border-amber-500 border-opacity-20'>
            <h3 className='text-2xl font-semibold text-amber-300 mb-3'>
              Середньостогівці
            </h3>
            <p>Скотарі, переважно на Лівобережжі</p>
          </div>
        </div>
      </div>
    </div>
  )
}
