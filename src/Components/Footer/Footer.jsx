import { Link } from 'react-router-dom'

export function Footer () {
  return (
    <footer className='w-full bg-gradient-to-b from-gray-900 to-gray-950 text-white py-8 pt-12 border-t border-amber-700 border-opacity-20'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Основной контент */}
        <div className='flex flex-col md:flex-row items-start justify-between gap-8 mb-8'>
          {/* Лого и описание */}
          <div className='flex-1'>
            <div className='text-2xl font-bold mb-4'>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500'>
                Історія України
              </span>
            </div>
            <p className='text-gray-400 text-sm max-w-md leading-relaxed'>
              Освітній проєкт з історії України для підготовки до НМТ.
              Конспекти, тести та корисні матеріали для ефективного навчання.
            </p>
          </div>

          {/* Навигация */}
          <div className='flex-1'>
            <h3 className='text-lg font-semibold text-amber-300 mb-4 border-b border-amber-700 border-opacity-30 pb-2'>
              Навігація
            </h3>
            <ul className='space-y-3'>
              {[
                { path: '/Abstarcts', label: 'Конспекти' },
                { path: '/Tests', label: 'Тести НМТ/ЗНО' },
                { path: '/About', label: 'Про Проєкт' },
                { path: '/Support', label: 'Підтримати автора' }
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className='text-gray-400 hover:text-amber-400 transition-colors duration-300 flex items-center group'
                  >
                    <span className='w-1.5 h-1.5 bg-amber-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity'></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты/Соцсети */}
          {/* <div className='flex-1'>
            <h3 className='text-lg font-semibold text-amber-300 mb-4 border-b border-amber-700 border-opacity-30 pb-2'>
              Зв'язок
            </h3>
            <div className='flex space-x-4 mb-4'>
              {[
                {
                  icon: '📧',
                  label: 'Email',
                  url: 'mailto:contact@ukrhistory.com'
                },
                {
                  icon: '📱',
                  label: 'Telegram',
                  url: 'https://t.me/ukrhistory'
                },
                {
                  icon: '📘',
                  label: 'Facebook',
                  url: 'https://facebook.com/ukrhistory'
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className='w-10 h-10 bg-gray-800 bg-opacity-50 rounded-lg flex items-center justify-center text-lg hover:bg-amber-600 hover:bg-opacity-20 transition-all duration-300 border border-gray-700 hover:border-amber-600 hover:border-opacity-30'
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className='text-gray-500 text-sm'>
              З питань співпраці: <br />
              <a
                href='mailto:cooperation@ukrhistory.com'
                className='text-amber-400 hover:text-amber-300'
              >
                cooperation@ukrhistory.com
              </a>
            </p>
          </div> */}
        </div>

        {/* Разделительная линия */}
        <div className='w-full h-px bg-gradient-to-r from-transparent via-amber-700 to-transparent opacity-30 my-6'></div>

        {/* Нижняя часть */}
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
          {/* Авторские права */}
          <div className='text-sm text-gray-500'>
            © {new Date().getFullYear()} Історія України. Всі права захищено.
          </div>

          {/* Дополнительные ссылки */}
          <div className='flex items-center space-x-6 text-sm text-gray-500'>
            <Link
              to='/privacy'
              className='hover:text-amber-400 transition-colors'
            >
              Політика конфіденційності
            </Link>
            <Link
              to='/terms'
              className='hover:text-amber-400 transition-colors'
            >
              Умови використання
            </Link>
          </div>
        </div>
      </div>

      {/* Декоративные элементы */}
      <div className='absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-amber-700 border-opacity-10'></div>
      <div className='absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-amber-700 border-opacity-10'></div>
    </footer>
  )
}
