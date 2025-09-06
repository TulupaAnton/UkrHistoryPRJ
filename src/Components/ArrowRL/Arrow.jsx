import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeftLong,
  faArrowRightLong
} from '@fortawesome/free-solid-svg-icons'

export function Arrow () {
  return (
    <div className='bg-[#fdf6e3] flex flex-row justify-center gap-6  py-6'>
      {/* Левая стрелка */}
      <button
        class='prevBtn'
        className='cursor-pointer   w-12 h-12 flex items-center justify-center rounded-full bg-[#002b36] text-white shadow-md hover:bg-[#073642] transition-colors duration-300'
      >
        <FontAwesomeIcon icon={faArrowLeftLong} className='text-lg' />
      </button>

      {/* Правая стрелка */}
      <button
        class='nextBtn'
        className='cursor-pointer nextBtn w-12 h-12 flex items-center justify-center rounded-full bg-[#002b36] text-white shadow-md hover:bg-[#073642] transition-colors duration-300'
      >
        <FontAwesomeIcon icon={faArrowRightLong} className='text-lg' />
      </button>
    </div>
  )
}
