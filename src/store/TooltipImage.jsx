import { useState } from 'react'

export function TooltipImage ({ text, imgSrc, alt }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='relative inline-block'>
      {/* Триггер */}
      <p
        className='text-lg text-gray-300 cursor-pointer border-b border-dashed border-blue-400'
        onClick={() => setIsOpen(!isOpen)}
      >
        {text}
      </p>

      {/* Сам popover */}
      {isOpen && (
        <div className='absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-56 p-2 bg-gray-800 shadow-lg rounded-md border border-gray-600'>
          <img src={imgSrc} alt={alt} className='w-full h-auto rounded' />
        </div>
      )}
    </div>
  )
}
