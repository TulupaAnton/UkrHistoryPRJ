import { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeftLong,
  faArrowRightLong
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export function CardsInfo () {
  const carouselRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const cards = [
    {
      img: '/assets/pale.png',
      title: 'Первісність на території України',
      desc: 'Короткий опис теми або вступ до матеріалу.',
      path: '/topic/primitive'
    },
    {
      img: '/assets/pale.png',
      title: 'Київська Русь',
      desc: 'Огляд формування та розвитку Київської держави.',
      path: '/topic/kyivan-rus'
    },
    {
      img: '/assets/pale.png',
      title: 'Галицько-Волинське князівство',
      desc: 'Основні події та діячі Галицько-Волинської держави.',
      path: '/topic/galicia-volhynia'
    },
    {
      img: '/assets/pale.png',
      title: 'Козацька доба',
      desc: 'Короткий опис про зародження козацтва та його роль.',
      path: '/topic/cossack-era'
    },
    {
      img: '/assets/pale.png',
      title: 'Українська революція',
      desc: 'Події 1917-1921 років та боротьба за незалежність.',
      path: '/topic/ukrainian-revolution'
    },
    {
      img: '/assets/pale.png',
      title: 'Радянський період',
      desc: 'Україна в складі СРСР та опір тоталітарному режиму.',
      path: '/topic/soviet-period'
    },
    {
      img: '/assets/pale.png',
      title: 'Незалежність України',
      desc: 'Відновлення державності та сучасний розвиток.',
      path: '/topic/independence'
    }
  ]

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' })
    updateArrowVisibility()
  }

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' })
    updateArrowVisibility()
  }

  const updateArrowVisibility = () => {
    setTimeout(() => {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }, 300)
  }

  return (
    <div className='relative py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden'>
      {/* Декоративные элементы */}
      <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-30'></div>
      <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-30'></div>

      {/* Заголовок секции */}
      <div className='text-center mb-12 px-4'>
        <h2 className='text-3xl md:text-4xl font-bold text-amber-300 mb-4'>
          Теми для вивчення
        </h2>
        <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
          Огляд основних історичних періодів та подій на території України
        </p>
      </div>

      {/* Карусель */}
      <div className='relative'>
        {/* Кнопки навигации */}
        {showLeftArrow && (
          <button
            onClick={scrollLeft}
            className='absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-amber-600 bg-opacity-80 text-white shadow-lg hover:bg-amber-700 hover:bg-opacity-90 transition-all duration-300 backdrop-blur-sm border border-amber-400 border-opacity-30'
          >
            <FontAwesomeIcon icon={faArrowLeftLong} className='text-lg' />
          </button>
        )}

        {showRightArrow && (
          <button
            onClick={scrollRight}
            className='absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-amber-600 bg-opacity-80 text-white shadow-lg hover:bg-amber-700 hover:bg-opacity-90 transition-all duration-300 backdrop-blur-sm border border-amber-400 border-opacity-30'
          >
            <FontAwesomeIcon icon={faArrowRightLong} className='text-lg' />
          </button>
        )}

        {/* Контейнер карточек */}
        <div
          ref={carouselRef}
          className='flex gap-6 overflow-x-auto scroll-smooth px-8 py-4 scrollbar-hide'
          onScroll={updateArrowVisibility}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className='flex flex-col w-80 flex-shrink-0 transform transition-all duration-300 hover:scale-105 group'
            >
              <div className='relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-b from-gray-800 to-gray-900 border border-amber-700 border-opacity-20 h-full'>
                {/* Изображение */}
                <div className='relative h-48 overflow-hidden'>
                  <img
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                    src={card.img}
                    alt={card.title}
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60'></div>
                  <div className='absolute top-4 right-4 w-10 h-10 bg-amber-500 bg-opacity-90 rounded-full flex items-center justify-center text-white font-bold shadow-lg'>
                    {i + 1}
                  </div>
                </div>

                {/* Контент карточки */}
                <div className='p-5'>
                  <h2 className='text-xl font-bold text-amber-300 mb-3 line-clamp-2'>
                    {card.title}
                  </h2>
                  <p className='text-gray-300 text-sm mb-4 line-clamp-3'>
                    {card.desc}
                  </p>

                  <Link
                    to={card.path}
                    className='inline-flex items-center px-4 py-2 bg-amber-600 bg-opacity-20 text-amber-300 rounded-lg hover:bg-amber-700 hover:bg-opacity-30 transition-all duration-300 border border-amber-500 border-opacity-20 group-hover:border-opacity-40'
                  >
                    <span className='text-sm'>Детальніше</span>
                    <svg
                      className='w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M9 5l7 7-7 7'
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Индикатор прокрутки */}
      <div className='flex justify-center mt-8'>
        <div className='w-24 h-1 bg-gray-700 rounded-full'>
          <div
            className='h-1 bg-amber-500 rounded-full transition-all duration-300'
            style={{ width: '30%' }}
          ></div>
        </div>
      </div>

      {/* Стили для скрытия scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}
