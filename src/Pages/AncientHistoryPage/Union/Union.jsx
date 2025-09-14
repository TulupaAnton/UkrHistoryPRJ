export function Union () {
  return (
    <div className='w-full max-w-6xl mx-auto px-4 py-8'>
      <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border-2 border-amber-600 border-opacity-30'>
        {/* Заголовок */}
        <div className='text-center mb-8'>
          <h1 className='text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500'>
            Слов'янські племінні союзи на теренах України
          </h1>
          <p className='text-xl text-amber-300 mt-2'>VII-VIII ст.</p>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          {/* Список племен */}
          <div className='space-y-6'>
            <div className='p-6 bg-gray-700 bg-opacity-50 rounded-xl border border-amber-500 border-opacity-20'>
              <h3 className='text-2xl font-semibold text-amber-300 mb-4 text-center'>
                Племінні союзи та їх центри
              </h3>

              <div className='space-y-4'>
                <div className='bg-amber-900 bg-opacity-20 rounded-lg p-4'>
                  <p className='font-semibold text-amber-300'>Поляни</p>
                  <p>
                    У Середньому Подніпров'ї навколо{' '}
                    <span className='text-amber-400 font-medium'>Києва</span>
                  </p>
                </div>

                <div className='bg-amber-900 bg-opacity-20 rounded-lg p-4'>
                  <p className='font-semibold text-amber-300'>Деревляни</p>
                  <p>
                    У басейні Прип'яті з центром в{' '}
                    <span className='text-amber-400 font-medium'>
                      Іскоростені
                    </span>
                  </p>
                </div>

                <div className='bg-amber-900 bg-opacity-20 rounded-lg p-4'>
                  <p className='font-semibold text-amber-300'>Дреговичі</p>
                  <p>
                    У Поліссі з центром у{' '}
                    <span className='text-amber-400 font-medium'>Турові</span>
                  </p>
                </div>

                <div className='bg-amber-900 bg-opacity-20 rounded-lg p-4'>
                  <p className='font-semibold text-amber-300'>Сіверяни</p>
                  <p>
                    На Лівобережжі Дніпра, центр -{' '}
                    <span className='text-amber-400 font-medium'>Чернігів</span>
                  </p>
                </div>

                <div className='bg-amber-900 bg-opacity-20 rounded-lg p-4'>
                  <p className='font-semibold text-amber-300'>Дуліби</p>
                  <p>
                    На Волині; з часом на їх основі утворилися волиняни і бужани
                  </p>
                </div>

                <div className='bg-amber-900 bg-opacity-20 rounded-lg p-4'>
                  <p className='font-semibold text-amber-300'>Уличі</p>
                  <p>
                    Між Південним Бугом і Дніпром. Центр -{' '}
                    <span className='text-amber-400 font-medium'>
                      Пересічень
                    </span>
                  </p>
                </div>

                <div className='bg-amber-900 bg-opacity-20 rounded-lg p-4'>
                  <p className='font-semibold text-amber-300'>Тиверці</p>
                  <p>
                    Між Прутом і Дністром з центром у{' '}
                    <span className='text-amber-400 font-medium'>
                      Білгород-Дністровську
                    </span>
                  </p>
                </div>

                <div className='bg-amber-900 bg-opacity-20 rounded-lg p-4'>
                  <p className='font-semibold text-amber-300'>Білі Хорвати</p>
                  <p>
                    У Прикарпатті, Північній Буковині, Закарпатті, центр в{' '}
                    <span className='text-amber-400 font-medium'>Ужгороді</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Карта */}
          <div className='p-6 bg-gray-700 bg-opacity-50 rounded-xl border border-amber-500 border-opacity-20'>
            <h3 className='text-2xl font-semibold text-amber-300 mb-4 text-center'>
              Карта розселення племен
            </h3>
            <div className='rounded-lg overflow-hidden h-96 bg-amber-900 bg-opacity-20 flex items-center justify-center'>
              <div className='text-center p-4 w-full h-full'>
                <div className='text-amber-300 text-lg mb-2'>
                  Карта слов'янських племенних союзів
                </div>
                <div className='h-80 flex items-center justify-center'>
                  <img
                    src='./assets/union.jpg'
                    alt='Карта розселення словʼянських племен на території України'
                    className='max-h-full max-w-full object-contain rounded-lg border border-amber-600 border-opacity-30'
                  />
                </div>
                <p className='text-amber-400 text-sm mt-2'>
                  Основні центри розселення слов'янських племен на території
                  сучасної України
                </p>
              </div>
            </div>
            <p className='text-sm text-amber-400 mt-2 text-center'>
              Основні центри слов'янських племен на території сучасної України
            </p>
          </div>
        </div>

        {/* Важные центры */}
        <div className='mt-8 p-6 bg-gray-700 bg-opacity-50 rounded-xl border border-amber-500 border-opacity-20'>
          <h3 className='text-2xl font-semibold text-amber-300 mb-4 text-center'>
            Найважливіші центри
          </h3>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
            <div className='bg-amber-900 bg-opacity-30 rounded-lg p-4 text-center'>
              <div className='text-amber-400 text-lg font-semibold'>Київ</div>
              <div className='text-amber-200'>Центр полян</div>
            </div>
            <div className='bg-amber-900 bg-opacity-30 rounded-lg p-4 text-center'>
              <div className='text-amber-400 text-lg font-semibold'>
                Чернігів
              </div>
              <div className='text-amber-200'>Центр сіверян</div>
            </div>
            <div className='bg-amber-900 bg-opacity-30 rounded-lg p-4 text-center'>
              <div className='text-amber-400 text-lg font-semibold'>
                Іскоростень
              </div>
              <div className='text-amber-200'>Центр деревлян</div>
            </div>
            <div className='bg-amber-900 bg-opacity-30 rounded-lg p-4 text-center'>
              <div className='text-amber-400 text-lg font-semibold'>
                Пересічень
              </div>
              <div className='text-amber-200'>Центр уличей</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
