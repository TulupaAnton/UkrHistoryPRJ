import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeftLong,
  faArrowRightLong
} from '@fortawesome/free-solid-svg-icons'

export function CardsInfo () {
  const carouselRef = useRef(null)

  const cards = [
    {
      img: './src/public/assets/pale.png',
      title: 'Первісність на території України',
      desc: 'Короткий опис теми або вступ до матеріалу.'
    },
    {
      img: './src/public/assets/pale.png',
      title: 'Київська Русь',
      desc: 'Огляд формування та розвитку Київської держави.'
    },
    {
      img: './src/public/assets/pale.png',
      title: 'Галицько-Волинське князівство',
      desc: 'Основні події та діячі Галицько-Волинської держави.'
    },
    {
      img: './src/public/assets/pale.png',
      title: 'Козацька доба',
      desc: 'Короткий опис про зародження козацтва та його роль.'
    },
    {
      img: './src/public/assets/pale.png',
      title: 'Козацька доба',
      desc: 'Короткий опис про зародження козацтва та його роль.'
    },
    {
      img: './src/public/assets/pale.png',
      title: 'Козацька доба',
      desc: 'Короткий опис про зародження козацтва та його роль.'
    },
    {
      img: './src/public/assets/pale.png',
      title: 'Козацька доба',
      desc: 'Короткий опис про зародження козацтва та його роль.'
    }
  ]

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' })
  }

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' })
  }

  return (
    <div className='bg-[#fdf6e3] py-8'>
      <div
        ref={carouselRef}
        className=' flex gap-6 overflow-x-auto scroll-smooth px-6'
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className='flex flex-col max-w-sm border-2 border-[#8b5e3c] rounded-2xl shadow-md overflow-hidden bg-white flex-shrink-0'
          >
            <img
              className='w-full h-60 object-cover'
              src={card.img}
              alt={card.title}
            />
            <div className='p-4'>
              <h2 className='text-xl font-bold text-[#8b5e3c] mb-2'>
                {card.title}
              </h2>
              <p className='text-gray-700 text-sm'>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center gap-6 my-5 mb-6'>
        <button
          onClick={scrollLeft}
          className='cursor-pointer w-12 h-12 flex items-center justify-center rounded-full bg-[#002b36] text-white shadow-md hover:bg-[#073642] transition-colors duration-300'
        >
          <FontAwesomeIcon icon={faArrowLeftLong} className='text-lg' />
        </button>
        <button
          onClick={scrollRight}
          className='cursor-pointer w-12 h-12 flex items-center justify-center rounded-full bg-[#002b36] text-white shadow-md hover:bg-[#073642] transition-colors duration-300'
        >
          <FontAwesomeIcon icon={faArrowRightLong} className='text-lg' />
        </button>
      </div>
    </div>
  )
}
