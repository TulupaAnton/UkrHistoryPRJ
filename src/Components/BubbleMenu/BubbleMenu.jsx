import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Menu, X, Search } from 'lucide-react'

export function BubbleMenu () {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  const sections = [
    { id: 'stone-age', title: "Кам'яний вік" },
    { id: 'paleolithic', title: 'Палеоліт' },
    { id: 'mesolithic', title: 'Мезоліт' },
    { id: 'neolithic', title: 'Неоліт' },
    { id: 'stoyanki', title: 'Стоянки' },
    { id: 'eneolit', title: 'Енеоліт' },
    { id: 'arho-cult', title: 'Археологічні культури' },
    { id: 'tripilla', title: 'Трипілля' },
    { id: 'serednostog', title: 'Середньостогівська' },
    { id: 'bronze', title: 'Бронзовий' },
    { id: 'iron', title: 'Залізний вік' },
    { id: 'kimiriy', title: 'Кімірійці' },
    { id: 'skif', title: 'Скіфи' },
    { id: 'sarmati', title: 'Сармати' },
    { id: 'kolonia', title: 'Колонії' },
    { id: 'slovani', title: 'Переселення народів' },
    { id: 'pereselna', title: "Переселення слов'ян" },
    { id: 'union', title: "Союзи слов'ян" }
  ]

  const filteredSections = sections.filter(s =>
    s.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <>
      {/* Кнопка-триггер */}
      <button
        onClick={() => setOpen(!open)}
        className='fixed top-4 left-4 z-50 w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center shadow-lg hover:bg-amber-700 transition-colors duration-200 md:w-14 md:h-14'
      >
        {open ? (
          <X size={24} className='text-white' />
        ) : (
          <Menu size={24} className='text-white' />
        )}
      </button>

      {/* Пузырьковое меню */}
      <div
        className={`fixed top-20 left-4 z-40 flex flex-col gap-2 max-h-[calc(100vh-7rem)] overflow-y-auto transition-all duration-300
          ${
            open
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }
        `}
      >
        {/* Поле поиска */}
        <div className='relative w-[180px] md:w-[220px] mb-2'>
          <Search size={16} className='absolute left-3 top-2.5 text-gray-400' />
          <input
            type='text'
            placeholder='Пошук...'
            value={query}
            onChange={e => setQuery(e.target.value)}
            className='w-full pl-9 pr-3 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500'
          />
        </div>

        {/* Список */}
        {filteredSections.map((s, index) => (
          <ScrollLink
            key={s.id}
            to={s.id}
            smooth={true}
            duration={600}
            offset={-80}
            onClick={() => setOpen(false)}
            className='
              bg-gray-900 text-white px-3 py-2 rounded-full shadow-md 
              hover:bg-amber-600 hover:scale-105 transition-all duration-200
              text-sm md:text-base
              w-[180px] md:w-[220px] text-center
            '
            style={{ transitionDelay: `${index * 40}ms` }}
          >
            {s.title}
          </ScrollLink>
        ))}

        {/* Если ничего не найдено */}
        {filteredSections.length === 0 && (
          <p className='text-gray-400 text-sm italic px-3 py-2'>
            Нічого не знайдено
          </p>
        )}
      </div>

      {/* Затемнение фона на мобильных */}
      {open && (
        <div
          className='fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden'
          onClick={() => setOpen(false)}
        />
      )}
    </>
  )
}
