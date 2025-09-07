import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Header () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='flex bg-[#fdf6e3] justify-between items-center p-5'>
      {/* Лого */}
      <div className='ml-4 md:ml-20'>
        <Link to='/' className='font-secondary text-3xl md:text-5xl'>
          UkrHistory
        </Link>
      </div>

      {/* Десктопное меню */}
      <nav className='hidden md:flex gap-8 mr-8'>
        <Link to='/' className='text-xl md:text-3xl font-secondary'>
          Головна
        </Link>
        <Link to='/Abstarcts' className='text-xl md:text-3xl font-secondary'>
          Конспекти
        </Link>
        <Link to='/Tests' className='text-xl md:text-3xl font-secondary'>
          Тести
        </Link>
        <Link to='/About' className='text-xl md:text-3xl font-secondary'>
          Про проєкт
        </Link>
      </nav>

      {/* Кнопка-бургер для мобилок */}
      <button className='md:hidden mr-4' onClick={() => setIsOpen(!isOpen)}>
        <div className='w-6 h-0.5 bg-black mb-1'></div>
        <div className='w-6 h-0.5 bg-black mb-1'></div>
        <div className='w-6 h-0.5 bg-black'></div>
      </button>

      {/* Мобильное меню */}
      {isOpen && (
        <nav className='absolute top-16 right-5 bg-[#fdf6e3] shadow-lg rounded-lg flex flex-col items-start p-4 gap-3 md:hidden'>
          <Link
            to='/'
            className='text-lg font-secondary'
            onClick={() => setIsOpen(false)}
          >
            Головна
          </Link>
          <Link
            to='/Abstarcts'
            className='text-lg font-secondary'
            onClick={() => setIsOpen(false)}
          >
            Конспекти
          </Link>
          <Link
            to='/Tests'
            className='text-lg font-secondary'
            onClick={() => setIsOpen(false)}
          >
            Тести
          </Link>
          <Link
            to='/About'
            className='text-lg font-secondary'
            onClick={() => setIsOpen(false)}
          >
            Про проєкт
          </Link>
        </nav>
      )}
    </header>
  )
}
