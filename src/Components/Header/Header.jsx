import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export function Header () {
  return (
    <div className='flex bg-[#fdf6e3]  justify-between  p-5'>
      <div className='flex flex-col ml-20'>
        <Link to='/' className='font-secondary text-5xl '>
          UkrHistory
        </Link>
      </div>

      <div className='flex gap-5  '>
        <Link to='/' className='text-3xl font-secondary  '>
          Головна
        </Link>
        <Link to='/Abstarcts' className='text-3xl font-secondary '>
          Конспекти
        </Link>
        <Link to='/Tests' className='text-3xl font-secondary '>
          Тести
        </Link>
        <Link to='/About' className='text-3xl font-secondary '>
          Про проєкт
        </Link>
      </div>
    </div>
  )
}
