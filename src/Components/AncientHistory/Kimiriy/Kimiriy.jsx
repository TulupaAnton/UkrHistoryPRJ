export function Kimiriy () {
  return (
    <div className='w-full max-w-6xl mx-auto px-4 py-8'>
      <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border-2 border-amber-600 border-opacity-30'>
        {/* Заголовок и основная информация */}
        <div className='grid md:grid-cols-2 gap-8 items-start mb-8'>
          {/* Текстовая информация */}
          <div>
            <div className='text-center mb-8'>
              <h1 className='text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500 mb-4'>
                Кіммерійці
              </h1>
              <p className='text-2xl text-amber-300 font-semibold'>
                IX-VII ст. до н.е.
              </p>
            </div>

            <div className='space-y-4'>
              <div className='flex items-start'>
                <span className='text-amber-400 text-xl mr-3'>•</span>
                <p className='text-lg text-gray-200'>
                  Територія: Причорномор'я, Крим та Кавказ
                </p>
              </div>

              <div className='flex items-start'>
                <span className='text-amber-400 text-xl mr-3'>•</span>
                <p className='text-lg text-gray-200'>
                  Перша згадка у творі "Одіссея" Гомера
                </p>
              </div>

              <div className='bg-amber-900 bg-opacity-30 rounded-lg p-4 border-l-4 border-amber-500'>
                <p className='text-lg text-amber-200 font-semibold'>
                  Не мали власної держави
                </p>
              </div>

              <div className='flex items-start'>
                <span className='text-amber-400 text-xl mr-3'>•</span>
                <p className='text-lg text-gray-200'>
                  Були військовим плем'ям, воювали <b>мали кіноту</b>
                </p>
              </div>

              <div className='flex items-start'>
                <span className='text-amber-400 text-xl mr-3'>•</span>
                <p className='text-lg text-gray-200'>
                  Були язичниками, <b>ховали у курганах</b>
                </p>
              </div>

              <div className='flex items-start'>
                <span className='text-amber-400 text-xl mr-3'>•</span>
                <p className='text-lg text-gray-200'>Були переможені скіфами</p>
              </div>
              <div className='bg-amber-900 bg-opacity-30 rounded-lg p-4 border-l-4 border-amber-500'>
                <p className='text-lg text-amber-200 font-semibold'>
                  Вперше на тереторії України почали плавити залізні знаряддя
                  праці та зброю
                </p>
              </div>
            </div>
          </div>

          {/* Изображение */}
          <div className='relative'>
            <div className='rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-500 border-opacity-30'>
              <img
                src='../../assets/kimiriy.jpg'
                alt='Кіммерійський воїн'
                className='w-full h-auto object-cover'
              />
            </div>
            <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-3 text-center'>
              <p className='text-sm'>Кімірійці на карті</p>
            </div>
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className='mt-8 p-6 bg-amber-900 bg-opacity-20 rounded-xl border border-amber-600 border-opacity-30'>
          <h4 className='text-lg font-semibold text-amber-300 mb-4 text-center'>
            Історичне значення кіммерійців:
          </h4>
          <div className='grid md:grid-cols-2 gap-4 text-gray-200'>
            <div className='flex items-start'>
              <span className='text-amber-400 mr-2 text-lg'>•</span>
              <span>
                Перший кочовий народ, який залишив значний слід в античних
                джерелах
              </span>
            </div>
            <div className='flex items-start'>
              <span className='text-amber-400 mr-2 text-lg'>•</span>
              <span>Мастерське володіння кіннотою та лучна стрільба</span>
            </div>
            <div className='flex items-start'>
              <span className='text-amber-400 mr-2 text-lg'>•</span>
              <span>Вплинули на формування скіфської культури</span>
            </div>
            <div className='flex items-start'>
              <span className='text-amber-400 mr-2 text-lg'>•</span>
              <span>Залишили археологічні пам'ятки у вигляді курганів</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
