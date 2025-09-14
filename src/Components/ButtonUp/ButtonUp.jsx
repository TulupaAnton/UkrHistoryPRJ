import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpLong } from '@fortawesome/free-solid-svg-icons'

export function ButtonUp () {
  const [isVisible, setIsVisible] = useState(false)

  // Следим за прокруткой
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  // Плавный скролл наверх
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-amber-600 text-white shadow-lg hover:bg-amber-700 transition-all duration-300 z-50 border border-amber-400 border-opacity-30'
          aria-label='Прокрутити до початку'
        >
          <FontAwesomeIcon icon={faUpLong} size='lg' />
        </button>
      )}
    </>
  )
}
