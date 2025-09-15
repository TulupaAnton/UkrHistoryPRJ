export function Midle () {
  return (
    <div className='bg-gray-700/50 rounded-xl p-6 backdrop-blur-sm border border-gray-600'>
      <h4 className='text-xl font-semibold text-blue-300 mb-3'>
        Середній Палеоліт
      </h4>
      <p className='text-lg text-gray-300 mb-3'>(150-35 тис. років до н.е.)</p>
      <p className='text-lg text-blue-300 font-bold mb-3'>
        Льодовиковий період
      </p>
      <ul className='text-lg text-gray-300 space-y-3'>
        <li className='flex items-start'>
          <span className='text-blue-400 mr-2'>•</span>
          <span>Полювання на мамонтів та шерсистих тварин</span>
        </li>
        <li className='flex items-start'>
          <span className='text-blue-400 mr-2'>•</span>
          <span>Наземні житла з кісток і шкур тварин</span>
        </li>
        <li className='flex items-start'>
          <span className='text-blue-400 mr-2'>•</span>
          <span>З'явилися релігійні вірування та образотворче мистецтво</span>
        </li>
      </ul>
    </div>
  )
}
