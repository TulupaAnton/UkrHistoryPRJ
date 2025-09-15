import { useState } from 'react'

export function Skif () {
  const [showMap, setShowMap] = useState(false)
  const [showPectoral, setShowPectoral] = useState(false)
  const [showComb, setShowComb] = useState(false)

  return (
    <div className='w-full max-w-6xl mx-auto px-4 py-8'>
      <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border-2 border-amber-600 border-opacity-30'>
        {/* Заголовок */}
        <div className='text-center mb-8'>
          <h1 className='text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500'>
            Скіфи
          </h1>
        </div>

        {/* Государство */}
        <div className='mb-6 p-6 bg-gray-700 bg-opacity-50 rounded-xl border border-amber-500 border-opacity-20'>
          <p className='text-xl text-gray-200 mb-4'>
            Мали власну державу -{' '}
            <span className='text-amber-400 font-bold'>Велику Скіфію</span> (цар
            Атей)
          </p>
          <div
            className='cursor-pointer hover:opacity-90 transition-opacity'
            onClick={() => setShowMap(true)}
          >
            <img
              src='../../assets/skifi.png'
              alt='Карта Великої Скіфії'
              className='w-full h-120 object-cover rounded-lg border-2 border-amber-500 border-opacity-30'
            />
            <p className='text-center text-amber-400 mt-2 text-sm'>
              Карта Великої Скіфії
            </p>
          </div>
        </div>

        {/* Военное дело */}
        <div className='mb-6 p-6 bg-gray-700 bg-opacity-50 rounded-xl border border-amber-500 border-opacity-20'>
          <p className='text-xl text-gray-200'>Воювали, мали сильну кінноту</p>
        </div>

        {/* Хозяйство */}
        <div className='mb-6 p-6 bg-gray-700 bg-opacity-50 rounded-xl border border-amber-500 border-opacity-20'>
          <p className='text-xl text-gray-200'>
            Були кочовиками та переважно займалися скотарством
          </p>
        </div>

        {/* Культура */}
        <div className='mb-6 p-6 bg-gray-700 bg-opacity-50 rounded-xl border border-amber-500 border-opacity-20'>
          <p className='text-xl text-gray-200 mb-4'>
            У культурі панував{' '}
            <span className='text-amber-400 font-bold'>"звіриний стиль"</span>
          </p>

          <div className='grid md:grid-cols-2 gap-4'>
            {/* Скіфська Пектораль */}
            <div
              className='cursor-pointer hover:opacity-90 transition-opacity'
              onClick={() => setShowPectoral(true)}
            >
              <img
                src='../../assets/Pektoral.JPG'
                alt='Скіфська Пектораль'
                className='w-full h-120 object-cover rounded-lg border-2 border-amber-500 border-opacity-30'
              />
              <p className='text-center text-amber-400 mt-2 text-sm'>
                Скіфська Пектораль
              </p>
            </div>

            {/* Золотий гребінь */}
            <div
              className='cursor-pointer hover:opacity-90 transition-opacity'
              onClick={() => setShowComb(true)}
            >
              <img
                src='../../assets/grebin.jpg'
                alt='Золотий гребінь'
                className='w-full h-120 object-cover rounded-lg border-2 border-amber-500 border-opacity-30'
              />
              <p className='text-center text-amber-400 mt-2 text-sm'>
                Золотий гребінь
              </p>
            </div>
          </div>
        </div>

        {/* Война с Дарием */}
        <div className='mb-6 p-6 bg-gray-700 bg-opacity-50 rounded-xl border border-amber-500 border-opacity-20'>
          <p className='text-xl text-gray-200'>
            <span className='text-amber-400 font-bold'>У 514 році до н.е.</span>{' '}
            - перський цар Дарій І невдало напав на Скіфію. Використовували
            тактику випаленої землі.
          </p>
        </div>

        {/* Историческая судьба */}
        <div className='p-6 bg-gray-700 bg-opacity-50 rounded-xl border border-amber-500 border-opacity-20'>
          <p className='text-xl text-gray-200'>
            Були витіснені сарматами у Крим. Там створили малу Скіфію.
          </p>
        </div>
      </div>

      {/* Модальные окна для увеличенных изображений */}

      {/* Карта Великой Скифии */}
      {showMap && (
        <div className='fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4'>
          <div className='bg-gray-800 rounded-2xl max-w-4xl w-full mx-4'>
            <div className='relative'>
              <button
                className='absolute top-4 right-4 w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white hover:bg-amber-700 transition-colors z-10 text-lg'
                onClick={() => setShowMap(false)}
              >
                ✕
              </button>
              <img
                src='../../assets/scythian-map.jpg'
                alt='Карта Великої Скіфії'
                className='w-full h-auto rounded-t-2xl'
              />
            </div>
            <div className='p-6 text-center'>
              <h3 className='text-2xl font-bold text-amber-300 mb-2'>
                Карта Великої Скіфії
              </h3>
              <p className='text-gray-200'>
                Територія скіфської держави за часів царя Атея
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Скифская пектораль */}
      {showPectoral && (
        <div className='fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4'>
          <div className='bg-gray-800 rounded-2xl max-w-4xl w-full mx-4'>
            <div className='relative'>
              <button
                className='absolute top-4 right-4 w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white hover:bg-amber-700 transition-colors z-10 text-lg'
                onClick={() => setShowPectoral(false)}
              >
                ✕
              </button>
              <img
                src='../../assets/scythian-pectoral.jpg'
                alt='Скіфська пектораль'
                className='w-full h-auto rounded-t-2xl'
              />
            </div>
            <div className='p-6 text-center'>
              <h3 className='text-2xl font-bold text-amber-300 mb-2'>
                Скіфська Пектораль
              </h3>
              <p className='text-gray-200'>
                Золоте нашийне прикраса у "звіриному стилі"
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Золотой гребень */}
      {showComb && (
        <div className='fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4'>
          <div className='bg-gray-800 rounded-2xl max-w-4xl w-full mx-4'>
            <div className='relative'>
              <button
                className='absolute top-4 right-4 w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white hover:bg-amber-700 transition-colors z-10 text-lg'
                onClick={() => setShowComb(false)}
              >
                ✕
              </button>
              <img
                src='../../assets/scythian-comb.jpg'
                alt='Золотий гребінь'
                className='w-full h-auto rounded-t-2xl'
              />
            </div>
            <div className='p-6 text-center'>
              <h3 className='text-2xl font-bold text-amber-300 mb-2'>
                Золотий гребінь
              </h3>
              <p className='text-gray-200'>
                Приклад скіфського мистецтва у "звіриному стилі"
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
