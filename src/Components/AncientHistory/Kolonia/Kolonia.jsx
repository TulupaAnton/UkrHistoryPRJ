import { useState } from 'react'

export function Kolonia () {
  return (
    <div className='w-full max-w-6xl mx-auto px-4 py-8'>
      <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border-2 border-amber-600 border-opacity-30'>
        {/* Заголовок */}
        <div className='text-center mb-8'>
          <h1 className='text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500'>
            Давньогрецька колонізація
          </h1>
          <p className='text-xl text-amber-300 mt-2'>VIII-VI ст. до н.е.</p>
        </div>

        {/* Основная информация */}
        <div className='mb-6 p-6 bg-gray-700 bg-opacity-50 rounded-xl border border-amber-500 border-opacity-20'>
          <p className='text-xl text-gray-200'>
            У період з VIII до VI ст. до н.е. відбувається{' '}
            <b>Велика грецька колонізація</b> - коли греки освоювали і заселяли
            нові землі на узбережжі Чорного моря
          </p>
        </div>

        {/* Причины колонизации */}
        <div className='mb-6 p-6 bg-gray-700 bg-opacity-50 rounded-xl border border-amber-500 border-opacity-20'>
          <h3 className='text-2xl font-semibold text-amber-300 mb-4 flex items-center'>
            <span className='w-3 h-3 bg-amber-400 rounded-full mr-3'></span>
            Причини колонізації
          </h3>
          <div className='bg-amber-900 bg-opacity-30 rounded-lg p-4'>
            <p className='text-lg text-amber-200'>
              Переважно через <b>соціально-економічні причини</b>, людям не
              вистачало землі в метрополії (місті, звідки вони переселилися)
            </p>
          </div>
        </div>

        {/* Особенности колонизации */}
        <div className='mb-6 p-6 bg-gray-700 bg-opacity-50 rounded-xl border border-amber-500 border-opacity-20'>
          <h3 className='text-2xl font-semibold text-amber-300 mb-4 flex items-center'>
            <span className='w-3 h-3 bg-amber-400 rounded-full mr-3'></span>
            Особливості колонізації
          </h3>
          <div className='space-y-2 text-xl text-gray-200'>
            <p className='flex items-start'>
              <span className='text-amber-400 mr-2 text-xl'>•</span>
              <span>
                Була переважно <b>мирного характеру</b>
              </span>
            </p>
            <p className='flex items-start'>
              <span className='text-amber-400 mr-2 text-xl'>•</span>
              <span>
                Кожне місто-держава було <b>самостійним</b> державним утворенням
              </span>
            </p>
          </div>
        </div>

        {/* Греческие колонии */}
        <div className='mb-6 p-6 bg-gray-700 flex flex-col bg-opacity-50 rounded-xl border border-amber-500 border-opacity-20'>
          <h3 className='text-2xl font-semibold text-amber-300 mb-4 flex items-center'>
            <span className='w-3 h-3 bg-amber-400 rounded-full mr-3'></span>
            Колонії на українських землях
          </h3>
          <div className='grid md:grid-cols-2  gap-4 text-xl text-gray-200'>
            <div className='bg-amber-900 bg-opacity-20 rounded-lg p-4'>
              <p className='font-semibold text-amber-300'>Тіра</p>
              <p>біля р. Дністер в Одеській області</p>
            </div>
            <div className='bg-amber-900 bg-opacity-20 rounded-lg p-4'>
              <p className='font-semibold text-amber-300'>Ольвія</p>
              <p>біля р. Пд. Буг і Миколаєва</p>
            </div>
            <div className='bg-amber-900 bg-opacity-20 rounded-lg p-4'>
              <p className='font-semibold text-amber-300'>Херсонес</p>
              <p>поблизу сучасного Севастополя</p>
              <div className='mt-4 rounded-lg overflow-hidden'>
                <img
                  src='../../assets/Chersonesos_columns.jpg'
                  alt='Руїни Херсонесу'
                  className='w-full h-60 object-cover'
                />
                <p className='text-sm text-amber-400 mt-1'>
                  Руїни Херсонесу - античного грецького міста
                </p>
              </div>
            </div>
            <div className='bg-amber-900 bg-opacity-20 rounded-lg p-4'>
              <p className='font-semibold text-amber-300'>Пантікапей</p>
              <p>біля м. Керч, столиця Боспорського царства</p>
            </div>
          </div>

          {/* Изображение, размещенное по центру */}
          <div className='mt-6  flex justify-center'>
            <div className='max-w-5xl w-full  rounded-lg overflow-hidden'>
              <img
                src='../../assets/karta-grek.png'
                alt='Руїни Херсонесу'
                className='w-full h-150 object-cover'
              />
              <p className='text-sm text-amber-400 mt-1 text-center'>
                Мапа античних міст держав на території України
              </p>
            </div>
          </div>
        </div>

        {/* Общественное устройство */}
        <div className='mb-6 p-6 bg-gray-700 bg-opacity-50 rounded-xl border border-amber-500 border-opacity-20'>
          <h3 className='text-2xl font-semibold text-amber-300 mb-4 flex items-center'>
            <span className='w-3 h-3 bg-amber-400 rounded-full mr-3'></span>
            Суспільний устрій
          </h3>
          <div className='space-y-3 text-xl text-gray-200'>
            <p>
              За формою правління міста були <b>демократичними республіками</b>
            </p>
            <p>
              Виняток: <b>Пантікапей</b> був монархічним (влада у правителя)
            </p>
            <p>Греки займалися сільським господарством, ремеслом і торгівлею</p>
            <p>Кожне місто-держава карбувало свою власну монету</p>
          </div>
        </div>

        {/* Историческая судьба */}
        <div className='mb-6 p-6 bg-gray-700 bg-opacity-50 rounded-xl border border-amber-500 border-opacity-20'>
          <h3 className='text-2xl font-semibold text-amber-300 mb-4 flex items-center'>
            <span className='w-3 h-3 bg-amber-400 rounded-full mr-3'></span>
            Історична доля
          </h3>
          <p className='text-xl text-gray-200'>
            З часом ці міста-держави занепадуть під натиском готів, а потім і
            гунів
          </p>
        </div>

        {/* Сравнение керамики */}
        <div className='p-6 bg-gray-700 bg-opacity-50 rounded-xl border border-amber-500 border-opacity-20'>
          <h3 className='text-2xl font-semibold text-amber-300 mb-4 flex items-center'>
            <span className='w-3 h-3 bg-amber-400 rounded-full mr-3'></span>
            Не переплутай!
          </h3>
          <div className='grid md:grid-cols-2 gap-6'>
            <div>
              <div className='bg-amber-900 bg-opacity-20 rounded-lg p-4 text-center'>
                <h4 className='text-lg font-semibold text-amber-300 mb-2'>
                  Трипільська кераміка
                </h4>
                <p className='text-gray-200'>Зображують різні лінії</p>
                <div className='mt-4 rounded-lg overflow-hidden'>
                  <img
                    src='/assets/keramikaTrill.JPG'
                    alt='Трипільська кераміка'
                    className='w-full h-120 object-cover'
                  />
                  <p className='text-sm text-amber-400 mt-1'>
                    Характерні геометричні візерунки та лінії
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className='bg-amber-900 bg-opacity-20 rounded-lg p-4 text-center'>
                <h4 className='text-lg font-semibold text-amber-300 mb-2'>
                  Грецька кераміка
                </h4>
                <p className='text-gray-200'>Зображують людей і тварин</p>
                <div className='mt-4 rounded-lg overflow-hidden'>
                  <img
                    src='../../assets/Master_Ahilla.jpg'
                    alt='Грецька кераміка'
                    className='w-full h-120 object-cover'
                  />
                  <p className='text-sm text-amber-400 mt-1'>
                    Зображення людей, тварин та міфологічних сцен
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
