import { Link } from 'react-router-dom'

export function Info () {
  return (
    <section className='relative px-6 py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-1/4 left-1/4 w-64 h-64 bg-amber-400 rounded-full blur-3xl'></div>
        <div className='absolute bottom-1/3 right-1/3 w-80 h-80 bg-blue-500 rounded-full blur-3xl'></div>
      </div>

      <div className='relative max-w-4xl mx-auto text-center border-2 border-amber-700 border-opacity-30 rounded-3xl p-8 md:p-12 shadow-2xl bg-gradient-to-b from-gray-800 to-gray-900 backdrop-blur-sm'>
        {/* Акцентные элементы */}
        <div className='absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full'></div>
        <div className='absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-700 rounded-full'></div>

        <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl tracking-wide mb-8'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500'>
            Конспекти по Історії України
          </span>
        </h1>

        <p className='mt-6 text-xl sm:text-2xl md:text-3xl text-gray-300 leading-relaxed max-w-3xl mx-auto'>
          На цьому сайті ви знайдете конспекти з основних тем для підготовки до
          НМТ. Усе зібрано в одному місці, щоб навчатися було зручно та швидко.
        </p>

        <div className='mt-12'>
          <Link
            to='/Abstarcts'
            className='inline-block relative group font-semibold text-xl sm:text-2xl px-8 py-4 rounded-xl bg-gradient-to-r from-amber-600 to-amber-800 text-white shadow-lg hover:from-amber-700 hover:to-amber-900 transition-all duration-300 border-2 border-amber-500 border-opacity-30 hover:shadow-2xl hover:scale-105'
          >
            <span className='relative z-10'>Усі Конспекти</span>
            <div className='absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-900 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

            {/* Анимация подчеркивания */}
            <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-amber-400 group-hover:w-3/4 transition-all duration-500'></div>
          </Link>
        </div>

        {/* Декоративные элементы в углах */}
        <div className='absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-amber-500 border-opacity-30'></div>
        <div className='absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-amber-500 border-opacity-30'></div>
        <div className='absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-amber-500 border-opacity-30'></div>
        <div className='absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-amber-500 border-opacity-30'></div>
      </div>
    </section>
  )
}
