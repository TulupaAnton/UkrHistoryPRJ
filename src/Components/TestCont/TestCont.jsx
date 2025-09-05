import { Link } from 'react-router-dom'

export function Test () {
  return (
    <section className='w-full bg-[#fdf6e3] py-10'>
      <div className='max-w-4xl mx-auto px-4 text-center'>
        {/* Заголовок */}
        <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-4'>
          Проходь тести по всім важливим темам!
        </h2>

        {/* Кнопка */}
        <Link
          to='/Tests'
          className='inline-block bg-[#002b36] text-white px-6 py-3 rounded-xl shadow-md hover:bg-[#073642] transition-colors'
        >
          Час вирішувати тести!
        </Link>
      </div>
    </section>
  )
}
