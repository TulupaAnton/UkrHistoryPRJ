import { Link } from 'react-router-dom'

export function Info () {
  return (
    <section className='px-6 py-16 bg-[#fdf6e3]  bg-cover bg-center'>
      <div className=' max-w-3xl mx-auto text-center border-4 border-[#8b5e3c] rounded-3xl p-10 shadow-xl'>
        <h1 className=' font-secondary font-epunda text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide text-[#4a2c18]'>
          Конспекти по Історії України
        </h1>

        <p className='mt-6 font-secondary text-4xl sm:text-xl md:text-2xl text-[#5a3b22] leading-relaxed'>
          На цьому сайті ви знайдете конспекти з основних тем для підготовки до
          НМТ. Усе зібрано в одному місці, щоб навчатися було зручно та швидко.
        </p>

        <div className='mt-10'>
          <Link
            to='/Abstarcts'
            className='inline-block font-secondary text-xl sm:text-2xl px-8 py-4 rounded-xl bg-[#8b5e3c] text-[#fdf6e3] shadow-md hover:bg-[#6d452b] transition-all duration-200 border-2 border-[#4a2c18]'
          >
            Усі Конспекти
          </Link>
        </div>
      </div>
    </section>
  )
}
