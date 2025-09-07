export function Footer () {
  return (
    //!!Добавить Link вместо a
    <footer className='w-full bg-[#002b36] text-white py-6 pt-10'>
      <div className='max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6'>
        {/* Лого / название */}
        <div className='text-lg font-semibold'>Історія України</div>

        {/* Навигация */}
        <ul className='flex flex-col md:flex-row gap-4 text-sm'>
          <li>
            <a href='#' className='hover:underline'>
              Конспекти
            </a>
          </li>
          <li>
            <a href='#' className='hover:underline'>
              Тести НМТ/ЗНО
            </a>
          </li>
          <li>
            <a href='#' className='hover:underline'>
              Про Проєкт
            </a>
          </li>
          <li>
            <a href='#' className='hover:underline'>
              Підтримати автора
            </a>
          </li>
        </ul>

        {/* Авторские права */}
        <div className='text-xs text-gray-400 text-center md:text-right'>
          © {new Date().getFullYear()} Всі права захищено
        </div>
      </div>
    </footer>
  )
}
