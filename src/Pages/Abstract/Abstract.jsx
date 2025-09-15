import { useState } from 'react'
import { Link } from 'react-router-dom'
import AbstractsData from '../../data/abstracts.json'

export function Abstract () {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('Усі')

  const categories = [
    'Усі',
    ...new Set(AbstractsData.map(note => note.category))
  ]

  const filteredNotes = AbstractsData.filter(note => {
    const matchesCategory =
      activeCategory === 'Усі' || note.category === activeCategory
    const matchesSearch = note.title.toLowerCase().includes(query.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className='min-h-screen bg-gradient-to-br mt-15 from-gray-900 to-gray-800 text-gray-200 w-full'>
      <div className='w-full px-4 py-8 flex flex-col lg:flex-row min-h-screen'>
        {/* Sidebar */}
        <aside className='w-full lg:w-80 bg-gray-800 p-6 flex flex-col'>
          <h1 className='text-3xl font-bold mb-8 text-center text-amber-400'>
            Конспекти
          </h1>

          {/* Поиск */}
          <div className='mb-8 relative'>
            <input
              type='text'
              placeholder='Пошук конспектів...'
              value={query}
              onChange={e => setQuery(e.target.value)}
              className='w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 text-lg focus:outline-none focus:ring-2 focus:ring-amber-400'
            />
            <span className='absolute inset-y-0 right-0 flex items-center pr-3 text-amber-400'>
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </span>
          </div>

          {/* Категории */}
          <nav className='flex flex-col gap-2 flex-1'>
            <h2 className='text-lg font-semibold text-gray-300 mb-4'>
              Категорії
            </h2>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-amber-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-amber-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>

          {/* Статистика */}
          <div className='mt-8'>
            <p className='text-gray-400 text-center'>
              Знайдено:{' '}
              <span className='font-bold text-amber-400'>
                {filteredNotes.length}
              </span>{' '}
              конспектів
            </p>
          </div>
        </aside>

        {/* Main content */}
        <main className='flex-1 p-6 lg:p-8'>
          {/* Заголовок */}
          <div className='mb-8'>
            <h2 className='text-2xl font-bold text-center text-amber-400'>
              {activeCategory === 'Усі' ? 'Всі конспекти' : activeCategory}
            </h2>
          </div>

          {/* Cards */}
          {filteredNotes.length === 0 ? (
            <div className='text-center py-16 bg-gray-800 rounded-lg'>
              <p className='text-xl text-gray-300 mb-2'>Нічого не знайдено</p>
              <p className='text-gray-400'>
                Спробуйте змінити параметри пошуку
              </p>
            </div>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
              {filteredNotes.map(note => (
                <div
                  key={note.id}
                  className='bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors'
                >
                  <div className='relative'>
                    <img
                      src={note.image}
                      alt={note.title}
                      className='w-full h-100 object-cover'
                    />
                    <span className='absolute top-3 right-3 bg-amber-600 text-white text-xs px-3 py-1 rounded'>
                      {note.date}
                    </span>
                  </div>

                  <div className='p-5'>
                    <h2 className='text-xl font-bold text-gray-200 mb-3 text-center line-clamp-2'>
                      {note.title}
                    </h2>

                    <Link
                      to={`/abstract/${note.code}`}
                      className='block w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded text-center font-semibold transition-colors'
                    >
                      Переглянути
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
