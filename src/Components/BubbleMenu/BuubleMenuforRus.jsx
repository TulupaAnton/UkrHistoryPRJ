// src/components/BubbleMenuKievanRus.jsx
import { FaCrown } from 'react-icons/fa6'
import { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import {
  Search,
  History,
  Castle,
  Scroll,
  Crown,
  Sword,
  Shield,
  X
} from 'lucide-react'

export function BubbleMenuforRus () {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize() // Initial check
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const sections = [
    { id: 'askold', title: 'Аскольд', icon: <Crown size={16} /> },
    { id: 'oleg', title: 'Олег', icon: <Shield size={16} /> },
    { id: 'igor', title: 'Ігор', icon: <Sword size={16} /> },
    { id: 'olga', title: 'Ольга', icon: <Castle size={16} /> },
    { id: 'svatoslav', title: 'Святослав', icon: <Sword size={16} /> },
    { id: 'volodimir', title: 'Володимир', icon: <Crown size={16} /> },
    { id: 'yarik', title: 'Ярослав', icon: <Scroll size={16} /> },
    { id: 'triumvirat', title: 'Тріумвірат', icon: <History size={16} /> },
    { id: 'monomah', title: 'Мономах', icon: <Crown size={16} /> },
    { id: 'mstislav', title: 'Мстислав', icon: <Shield size={16} /> },
    { id: 'culture', title: 'Культура', icon: <Castle size={16} /> }
  ]

  const filteredSections = sections.filter(s =>
    s.title.toLowerCase().includes(query.toLowerCase())
  )

  // Mobile view - bottom navigation
  if (isMobile) {
    return (
      <>
        {/* Кнопка внизу слева для мобильных */}
        <button
          onClick={() => setOpen(!open)}
          className='fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center shadow-2xl hover:from-amber-700 hover:to-amber-900 transition-all duration-300'
        >
          {open ? (
            <X size={24} className='text-white' />
          ) : (
            <div className='flex flex-col items-center justify-center'>
              <FaCrown className='text-white text-lg' />
              <span className='text-[8px] text-white/80 mt-0.5'>Меню</span>
            </div>
          )}
        </button>

        {/* Мобильное меню снизу с размытием фона */}
        {open && (
          <>
            {/* Фон с размытием */}
            <div
              className='fixed inset-0 bg-black/40 backdrop-blur-md z-40'
              onClick={() => setOpen(false)}
            />

            {/* Меню */}
            <div className='fixed bottom-0 left-0 right-0 z-50 p-4'>
              <div className='bg-slate-900/95 backdrop-blur-lg rounded-2xl p-4 border border-amber-500/30 shadow-2xl w-full max-w-md mx-auto max-h-[70vh] overflow-hidden flex flex-col'>
                {/* Поиск */}
                <div className='relative mb-3'>
                  <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                    <Search size={18} className='text-amber-400' />
                  </div>
                  <input
                    type='text'
                    placeholder='Пошук правителя...'
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    className='w-full pl-10 pr-4 py-3 rounded-xl bg-slate-800/90 border border-amber-500/30 text-white placeholder-amber-200/60 focus:outline-none focus:ring-2 focus:ring-amber-500 backdrop-blur-sm'
                  />
                </div>

                {/* Список разделов */}
                <div className='flex-1 overflow-y-auto'>
                  {filteredSections.length > 0 ? (
                    <div className='grid grid-cols-2 gap-2'>
                      {filteredSections.map(s => (
                        <ScrollLink
                          key={s.id}
                          to={s.id}
                          smooth={true}
                          duration={700}
                          offset={-80}
                          onClick={() => setOpen(false)}
                          className='
                            flex flex-col items-center justify-center p-3 rounded-lg
                            bg-slate-800/90 hover:bg-amber-700/50
                            border border-slate-700 hover:border-amber-500/50
                            text-amber-100 hover:text-white
                            cursor-pointer transition-all duration-200
                            text-center backdrop-blur-sm
                          '
                        >
                          <div className='text-amber-400 mb-1'>{s.icon}</div>
                          <span className='text-sm font-medium'>{s.title}</span>
                        </ScrollLink>
                      ))}
                    </div>
                  ) : (
                    <div className='text-center py-6 px-4'>
                      <Search
                        size={32}
                        className='mx-auto text-amber-400/70 mb-2'
                      />
                      <p className='text-amber-200/70 italic'>
                        Правитель не знайдений
                      </p>
                    </div>
                  )}
                </div>

                {/* Кнопка закрытия */}
                <button
                  onClick={() => setOpen(false)}
                  className='mt-4 py-2 bg-slate-800/90 text-amber-200 rounded-lg hover:bg-slate-700 transition-colors backdrop-blur-sm'
                >
                  Закрити
                </button>
              </div>
            </div>
          </>
        )}
      </>
    )
  }

  // Desktop view - LEFT side
  return (
    <>
      {/* Кнопка-триггер для десктопа СЛЕВА */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed z-50 flex items-center justify-center shadow-2xl transition-all duration-300 group
          ${
            isScrolled
              ? 'top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900'
              : 'top-6 left-6 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-700 to-amber-900 hover:from-amber-800 hover:to-amber-950'
          }
        `}
      >
        {open ? (
          <X size={24} className='text-white' />
        ) : (
          <div className='flex flex-col items-center justify-center'>
            <FaCrown className='text-white text-lg' />
            <span className='text-[8px] text-white/80 mt-0.5'>Меню</span>
          </div>
        )}
      </button>

      {/* Пузырьковое меню для десктопа СЛЕВА с размытием */}
      {open && (
        <>
          {/* Фон с размытием */}
          <div
            className='fixed inset-0 bg-black/30 backdrop-blur-sm z-30'
            onClick={() => setOpen(false)}
          />

          {/* Меню */}
          <div className='fixed top-20 left-4 z-40 flex flex-col gap-3 max-h-[70vh]'>
            {/* Поиск */}
            <div className='relative w-64 mb-2'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <Search size={18} className='text-amber-400' />
              </div>
              <input
                type='text'
                placeholder='Пошук правителя...'
                value={query}
                onChange={e => setQuery(e.target.value)}
                className='w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/95 backdrop-blur-md border border-amber-500/30 text-white placeholder-amber-200/60 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500'
              />
            </div>

            {/* Список разделов */}
            <div className='bg-slate-900/95 backdrop-blur-md rounded-xl p-2 border border-amber-500/30 shadow-2xl overflow-y-auto'>
              {filteredSections.length > 0 ? (
                <div className='space-y-2'>
                  {filteredSections.map((s, index) => (
                    <ScrollLink
                      key={s.id}
                      to={s.id}
                      smooth={true}
                      duration={700}
                      offset={-80}
                      onClick={() => setOpen(false)}
                      className='
                        flex items-center space-x-3 px-4 py-3 rounded-lg
                        bg-gradient-to-r from-slate-800/95 to-slate-900/95
                        hover:from-amber-900/70 hover:to-amber-800/70
                        border border-slate-700 hover:border-amber-500/50
                        text-amber-100 hover:text-white
                        cursor-pointer transition-all duration-200
                        transform hover:scale-[1.02]
                        backdrop-blur-sm
                      '
                      style={{
                        transitionDelay: `${index * 30}ms`
                      }}
                    >
                      <div className='text-amber-400'>{s.icon}</div>
                      <span className='font-medium'>{s.title}</span>
                    </ScrollLink>
                  ))}
                </div>
              ) : (
                <div className='text-center py-6 px-4'>
                  <Search
                    size={32}
                    className='mx-auto text-amber-400/70 mb-2'
                  />
                  <p className='text-amber-200/70 italic'>
                    Правитель не знайдений
                  </p>
                  <p className='text-sm text-amber-200/50 mt-1'>
                    Спробуйте інший запит
                  </p>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  )
}
