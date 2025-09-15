export function Mesolit () {
  return (
    <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border-t-4 border-green-500 overflow-hidden transition-transform duration-300 hover:scale-[1.01]'>
      <div className='bg-gradient-to-r from-green-600 to-green-700 py-4 text-center'>
        <h3 className='text-2xl font-semibold text-white'>Мезоліт</h3>
        <p className='text-lg text-green-100 mt-1'>(10 - 6 тис. років тому)</p>
      </div>
      <div className='p-8'>
        <div className='mb-6'>
          <ul className='text-lg text-gray-300 space-y-3'>
            <li className='flex items-start'>
              <span className='text-green-400 mr-2'>•</span>
              <span>
                Винайдені лук та стріли, які уможливили успішне індивідуальне
                полювання
              </span>
            </li>
            <li className='flex items-start'>
              <span className='text-green-400 mr-2'>•</span>
              <span>
                Полювання на копитних, а також{' '}
                <b>рибальство, річкове збиральництво</b>
              </span>
            </li>
            <li className='flex items-start'>
              <span className='text-green-400 mr-2'>•</span>
              <span>Нові інструменти: гачки та гарпуни</span>
            </li>
            <li className='flex items-start'>
              <span className='text-green-400 mr-2'>•</span>
              <span>
                Родові общини переходять у <b>племена</b>
              </span>
            </li>
            <li className='flex items-start'>
              <span className='text-green-400 mr-2'>•</span>
              <span>Транспортні засоби: човни, плоти, лижі, ручні нарти</span>
            </li>
            <li className='flex items-start'>
              <span className='text-green-400 mr-2'>•</span>
              <span>
                <b>Прирученні перші тварини</b> — свиня та собака
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
