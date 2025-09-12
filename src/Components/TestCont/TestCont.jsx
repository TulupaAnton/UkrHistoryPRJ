import { Link } from 'react-router-dom'

export function Test () {
  return (
    <section className='relative w-full py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-1/4 left-1/4 w-64 h-64 bg-amber-400 rounded-full blur-3xl'></div>
        <div className='absolute bottom-1/3 right-1/3 w-80 h-80 bg-blue-500 rounded-full blur-3xl'></div>
      </div>

      <div className='relative max-w-4xl mx-auto px-6 text-center'>
        {/* Акцентные линии */}

        {/* Иконка */}
        <div className='mb-6 flex justify-center'>
          <div className='w-16 h-16 bg-amber-500 bg-opacity-20 rounded-2xl flex items-center justify-center border border-amber-500 border-opacity-30'>
            <svg
              className='w-8 h-8 text-amber-400'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              ></path>
            </svg>
          </div>
        </div>

        {/* Заголовок */}
        <h2 className='text-3xl md:text-4xl font-bold mb-6'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500'>
            Проходь тести по всім важливим темам!
          </span>
        </h2>

        {/* Описание */}
        <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed'>
          Перевір свої знання та підготуйся до НМТ з історії України. Тести
          охоплюють усі ключові періоди та події.
        </p>

        {/* Кнопка */}
        <Link
          to='/Tests'
          className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-800 text-white text-lg font-semibold rounded-xl shadow-lg hover:from-amber-700 hover:to-amber-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-amber-500 border-opacity-30 relative group'
        >
          <span className='relative z-10'>Час вирішувати тести!</span>

          {/* Анимационный эффект при наведении */}
          <div className='absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-900 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

          {/* Иконка стрелки */}
          <svg
            className='w-5 h-5 ml-3 relative z-10 transform group-hover:translate-x-1 transition-transform'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M13 7l5 5m0 0l-5 5m5-5H6'
            ></path>
          </svg>
        </Link>

        {/* Дополнительная информация */}
      </div>

      {/* Декоративные уголки
      <div className='absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-amber-500 border-opacity-20'></div>
      <div className='absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-amber-500 border-opacity-20'></div>
      <div className='absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-amber-500 border-opacity-20'></div>
      <div className='absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-amber-500 border-opacity-20'></div> */}
    </section>
  )
}
