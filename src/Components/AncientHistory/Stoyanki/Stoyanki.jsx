export function Stoyanki () {
  return (
    <div>
      <div className='w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-4 relative z-10'>
        <div className='w-full max-w-6xl mx-auto'>
          {/* Заголовок с улучшенным дизайном */}
          <div className='text-center mb-16 relative'>
            <div className='absolute -top-10 -left-10 w-24 h-24 bg-amber-400 rounded-full opacity-10 blur-xl'></div>
            <div className='absolute -bottom-10 -right-10 w-32 h-32 bg-amber-600 rounded-full opacity-10 blur-xl'></div>

            <h1 className='font-bold text-5xl md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 relative inline-block'>
              <span className='absolute -inset-4 bg-amber-400 blur-xl opacity-20 rounded-full'></span>
              Стоянки
            </h1>

            <div className='w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-4 rounded-full'></div>

            <p className='text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed'>
              Місця, де знайшли залишки життя первісних людей на території
              України
            </p>
          </div>

          {/* Контент */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
            {/* Список стоянок - улучшенный дизайн */}
            <div className='bg-gray-800/50 rounded-2xl p-8 shadow-2xl border border-amber-700/30 relative overflow-hidden'>
              <div className='absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full -translate-y-16 translate-x-16'></div>
              <div className='absolute bottom-0 left-0 w-40 h-40 bg-amber-400/5 rounded-full translate-y-20 -translate-x-20'></div>

              <div className='flex items-center mb-8'>
                <div className='w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center mr-4'>
                  <i className='fas fa-map-marker-alt text-amber-400'></i>
                </div>
                <h2 className='text-2xl font-semibold text-amber-400'>
                  Археологічні стоянки
                </h2>
              </div>

              <ul className='space-y-4 relative z-10'>
                {[
                  'Королеве на Закарпатті – найдавніша стоянка',
                  'Киїк-Коба в Криму',
                  'Мізин на Чернігівщині – знайдено браслет із меандровим орнаментом',
                  'Кирилівська у м. Київ',
                  'Межиріцька на Черкащині'
                ].map((item, index) => (
                  <li
                    key={index}
                    className='flex items-start p-5 rounded-xl bg-gradient-to-r from-gray-700/40 to-gray-800/40 hover:from-amber-900/30 hover:to-amber-800/30 transition-all duration-300 relative group border border-gray-700/50 hover:border-amber-700/30'
                    id={index === 2 ? 'third-item' : ''}
                  >
                    <span className='inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-700 text-gray-900 rounded-lg text-sm font-bold mr-4 flex-shrink-0 shadow-md'>
                      {index + 1}
                    </span>
                    <span className='text-lg md:text-xl pr-8'>{item}</span>

                    {/* Индикатор для третьего пункта */}
                    {index === 2 && (
                      <div className='absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                        <div className='flex items-center bg-amber-900/70 text-amber-200 px-3 py-1 rounded-full text-sm'>
                          <span className='mr-2'>Див. фото</span>
                          <i className='fas fa-arrow-right text-xs'></i>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Изображения - улучшенный дизайн */}
            <div className='space-y-8'>
              {/* Первое изображение */}
              <div className='relative group'>
                <div className='absolute -inset-2 bg-gradient-to-r from-amber-400/10 to-amber-600/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500'></div>
                <div className='relative overflow-hidden rounded-2xl shadow-2xl border border-amber-500/20'>
                  <img
                    src='./assets/stoyanki.jpg'
                    alt='Археологічна стоянка'
                    className='w-full h-auto transform group-hover:scale-110 transition-transform duration-700'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                  <div className='absolute bottom-0 left-0 right-0 p-5 text-center translate-y-5 group-hover:translate-y-0 transition-transform duration-500'>
                    <p className='text-white text-lg font-medium'>
                      Реконструкція первісної стоянки
                    </p>
                    <div className='w-12 h-0.5 bg-amber-400 mx-auto mt-2'></div>
                  </div>
                </div>
              </div>

              {/* Второе изображение с акцентом */}
              <div className='relative group' id='third-image'>
                <div className='absolute -inset-2 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500'></div>
                <div className='relative overflow-hidden rounded-2xl shadow-2xl bg-black/30 p-3 border-2 border-amber-500/40'>
                  <img
                    src='./assets/hishin-removebg-preview.png'
                    alt='Первісне житло'
                    className='w-full h-auto transform group-hover:scale-110 transition-transform duration-700'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                  <div className='absolute bottom-0 left-0 right-0 p-5 text-center translate-y-5 group-hover:translate-y-0 transition-transform duration-500'>
                    <p className='text-white text-lg font-medium'>
                      Браслет із меандровим орнаментом, знайдений у Мізині
                    </p>
                    <div className='w-12 h-0.5 bg-amber-400 mx-auto mt-2'></div>
                  </div>
                </div>

                {/* Подпись для изображения */}
                <div className='absolute -top-3 -right-3 bg-amber-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg z-10'>
                  Мізин
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
