import { TooltipImage } from '../../../store/TooltipImage'

export function Early () {
  return (
    <div className='bg-gray-700/50 rounded-xl p-6 backdrop-blur-sm border border-gray-600'>
      <h4 className='text-xl font-semibold text-blue-300 mb-3'>
        Ранній Палеоліт
      </h4>
      <p className='text-lg text-gray-300 mb-3'>
        (1 млн - 150 тис. років до н.е.)
      </p>
      <ul className='text-lg text-gray-300 space-y-3'>
        <li className='flex items-start'>
          <span className='text-blue-400 mr-2'>•</span>
          <span>
            <b>Привласнювальні форми господарювання:</b> збиральництво та
            полювання
          </span>
        </li>
        <li className='flex items-start'>
          <span className='text-blue-400 mr-2'>•</span>
          <span>Кочовий спосіб життя</span>
        </li>
        <li className='flex items-start'>
          <span className='text-blue-400 mr-2'>•</span>
          <span>Жили у матріархаті</span>
        </li>
        <li className='flex items-start'>
          <span className='text-blue-400 mr-2'>•</span>
          <span>
            <TooltipImage
              text="кам'яне ручне рубило"
              imgSrc='../../assets/rubilo.jpg'
              alt="Кам'яне ручне рубило"
            />
          </span>
        </li>
      </ul>
    </div>
  )
}
