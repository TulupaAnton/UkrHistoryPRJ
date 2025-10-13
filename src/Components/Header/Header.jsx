import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Header () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-gray-900 to-gray-800 py-4 shadow-lg'>
      <div className='container mx-auto px-4 flex justify-between items-center'>
        {/* Логотип */}
        <div className='ml-2 md:ml-8 lg:ml-12'>
          <Link
            to='/'
            className='font-bold text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500'
            onClick={() => setIsMenuOpen(false)}
          >
            UkrHistory
          </Link>
        </div>

        {/* Десктопное меню */}
        <nav className='hidden md:flex gap-6 lg:gap-8 mr-4 lg:mr-10'>
          {[
            { path: '/', label: 'Головна' },
            { path: '/Abstarcts', label: 'Конспекти' },
            { path: '/Tests', label: 'Тести' },
            { path: '/About', label: 'Про проєкт' }
          ].map(item => (
            <Link
              key={item.path}
              to={item.path}
              className='relative text-lg lg:text-xl font-medium px-3 py-2 rounded-lg text-gray-300 hover:text-amber-400 transition-colors duration-300'
            >
              {item.label}
              <span className='absolute -bottom-1 left-0 h-0.5 bg-amber-400 w-0 hover:w-full transition-all duration-300'></span>
            </Link>
          ))}
        </nav>

        {/* Кнопка-бургер для мобильных устройств */}
        <button
          className='md:hidden mr-2 relative w-10 h-10 focus:outline-none'
          aria-label='Меню'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6'>
            <div
              className={`absolute h-0.5 w-6 bg-amber-400 transition-transform duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
              }`}
            ></div>
            <div
              className={`absolute h-0.5 w-6 bg-amber-400 transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></div>
            <div
              className={`absolute h-0.5 w-6 bg-amber-400 transition-transform duration-300 ${
                isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
              }`}
            ></div>
          </div>
        </button>
      </div>

      {/* Мобильное меню */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className='bg-gray-800 bg-opacity-95 shadow-inner py-4 px-6 border-t border-amber-700 border-opacity-30'>
          <div className='flex flex-col space-y-3'>
            {[
              { path: '/', label: 'Головна' }
              // { path: '/Abstarcts', label: 'Конспекти' },
              // { path: '/Tests', label: 'Тести' },
              // { path: '/About', label: 'Про проєкт' }
            ].map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className='py-3 px-4 rounded-xl text-lg font-medium text-gray-300 hover:bg-amber-900 hover:bg-opacity-20 hover:text-amber-400 transition-colors duration-300 flex items-center'
                onClick={() => setIsMenuOpen(false)}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms',
                  transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  opacity: isMenuOpen ? 1 : 0
                }}
              >
                <span className='w-2 h-2 rounded-full mr-3 bg-amber-600'></span>
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
