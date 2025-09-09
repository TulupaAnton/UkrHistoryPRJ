import AbstractsData from '../../data/abstracts.json'
import { useState } from 'react'

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
    <div
      className='flex flex-col md:flex-row min-h-screen bg-[#fdf6e3] font-serif'
      style={{
        backgroundImage: `url('https://www.transparenttextures.com/patterns/old-paper.png')`,
        backgroundSize: 'cover'
      }}
    >
      {/* Sidebar */}
      <aside className='w-full md:w-64 bg-[#f9f3e7] shadow-lg rounded-2xl p-5 flex flex-col border border-[#d4b98a] mb-5 md:mb-0'>
        <h1 className='text-3xl font-quarter font-bold mb-8 text-[#5a381e] border-b-2 border-[#c18b4d] pb-2'>
          Конспекти
        </h1>
        <nav className='flex flex-col gap-2'>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-left px-4 py-2 rounded-lg transition font-semibold ${
                activeCategory === cat
                  ? 'bg-[#8b5e3c] text-white shadow-inner'
                  : 'text-[#5a381e] hover:bg-[#f1e1c0] hover:shadow-sm'
              } border-l-4 border-transparent hover:border-[#c18b4d]`}
            >
              {cat}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className='flex-1 p-5 md:p-8 overflow-y-auto'>
        {/* Search */}
        <div className='mb-8 relative'>
          <input
            type='text'
            placeholder='Пошук конспектів...'
            value={query}
            onChange={e => setQuery(e.target.value)}
            className='w-full px-4 py-3 border border-[#d4b98a] rounded-lg shadow-sm focus:ring-2 focus:ring-[#c18b4d] focus:outline-none bg-[#fef8f0] text-[#5a381e] placeholder-[#7a5a3e] text-lg'
            style={{
              backgroundImage: `url('https://www.transparenttextures.com/patterns/paper.png')`
            }}
          />
          <span className='absolute top-0 right-0 h-full w-12 flex items-center justify-center text-[#5a381e]'>
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

        {/* Cards */}
        {filteredNotes.length === 0 ? (
          <p className='text-[#7a5a3e] text-center text-lg italic'>
            Нічого не знайдено
          </p>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredNotes.map(note => (
              <div
                key={note.id}
                className='bg-[#fef8f0] rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 border border-[#d4b98a] relative flex flex-col'
                style={{
                  backgroundImage: `url('https://www.transparenttextures.com/patterns/paper.png')`
                }}
              >
                <div className='relative'>
                  <img
                    src={note.image}
                    alt={note.title}
                    className='w-full h-60 sm:h-72 md:h-80 object-cover border-b border-[#d4b98a]'
                  />
                  <span className='absolute top-3 right-3 bg-[#8b5e3c] text-white text-xs px-3 py-1 rounded-full shadow'>
                    {note.date}
                  </span>
                  <div className='absolute inset-0 border-2 border-[#c18b4d] rounded-xl pointer-events-none opacity-20' />
                </div>
                <div className='p-5 flex flex-col justify-between flex-1'>
                  <h2 className='text-2xl text-center font-fifth font-bold text-[#5a381e] line-clamp-2'>
                    {note.title}
                  </h2>
                  <button className='mt-4 w-full bg-[#8b5e3c] hover:bg-[#a37250] text-white py-2 rounded-lg shadow-inner font-semibold transition-colors'>
                    Переглянути
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
