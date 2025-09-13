export function Sarmati () {
  return (
    <div className='w-full max-w-6xl mx-auto px-4 py-8'>
      <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border-2 border-amber-600 border-opacity-30'>
        {/* Заголовок */}
        <div className='text-center mb-8'>
          <h1 className='text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500'>
            Сармати
          </h1>
        </div>

        {/* Территория */}
        <div className='mb-6 p-6 bg-gray-700 bg-opacity-50 rounded-xl border border-amber-500 border-opacity-20'>
          <h3 className='text-2xl font-semibold text-amber-300 mb-4 flex items-center'>
            <span className='w-3 h-3 bg-amber-400 rounded-full mr-3'></span>
            Територія проживання
          </h3>
          <p className='text-xl text-gray-200'>
            Жили на території Північного Причорномор'я
          </p>
        </div>

        {/* Политическое устройство */}
        <div className='mb-6 p-6 bg-gray-700 bg-opacity-50 rounded-xl border border-amber-500 border-opacity-20'>
          <h3 className='text-2xl font-semibold text-amber-300 mb-4 flex items-center'>
            <span className='w-3 h-3 bg-amber-400 rounded-full mr-3'></span>
            Політичний устрій
          </h3>
          <div className='bg-amber-900 bg-opacity-30 rounded-lg p-4 border-l-4 border-amber-500'>
            <p className='text-lg text-amber-200 font-semibold'>
              Не мали власної держави
            </p>
          </div>
        </div>

        {/* Военное дело */}
        <div className='mb-6 p-6 bg-gray-700 bg-opacity-50 rounded-xl border border-amber-500 border-opacity-20'>
          <h3 className='text-2xl font-semibold text-amber-300 mb-4 flex items-center'>
            <span className='w-3 h-3 bg-amber-400 rounded-full mr-3'></span>
            Військова справа
          </h3>
          <div className='space-y-2 text-xl text-gray-200'>
            <p className='flex items-start'>
              <span className='text-amber-400 mr-2 text-xl'>•</span>
              <span>
                Воювали, мали <b>важку кінноту</b>
              </span>
            </p>
            <p className='flex items-start'>
              <span className='text-amber-400 mr-2 text-xl'>•</span>
              <span>
                <b>Нападали на Римську імперію</b>
              </span>
            </p>
          </div>
        </div>

        {/* Хозяйство */}
        <div className='mb-6 p-6 bg-gray-700 bg-opacity-50 rounded-xl border border-amber-500 border-opacity-20'>
          <h3 className='text-2xl font-semibold text-amber-300 mb-4 flex items-center'>
            <span className='w-3 h-3 bg-amber-400 rounded-full mr-3'></span>
            Господарство
          </h3>
          <div className='space-y-2 text-xl text-gray-200'>
            <p className='flex items-start'>
              <span className='text-amber-400 mr-2 text-xl'>•</span>
              <span>Займалися кочовим скотарством</span>
            </p>
            <p className='flex items-start'>
              <span className='text-amber-400 mr-2 text-xl'>•</span>
              <span>
                <b>Торгували з сусідніми народами</b>
              </span>
            </p>
          </div>
        </div>

        {/* Религия */}
        <div className='mb-6 p-6 bg-gray-700 bg-opacity-50 rounded-xl border border-amber-500 border-opacity-20'>
          <h3 className='text-2xl font-semibold text-amber-300 mb-4 flex items-center'>
            <span className='w-3 h-3 bg-amber-400 rounded-full mr-3'></span>
            Вірування
          </h3>
          <p className='text-xl text-gray-200'>Були язичниками</p>
        </div>

        {/* Историческая судьба */}
        <div className='p-6 bg-gray-700 bg-opacity-50 rounded-xl border border-amber-500 border-opacity-20'>
          <h3 className='text-2xl font-semibold text-amber-300 mb-4 flex items-center'>
            <span className='w-3 h-3 bg-amber-400 rounded-full mr-3'></span>
            Історична доля
          </h3>
          <div className='bg-amber-900 bg-opacity-30 rounded-lg p-4 border-l-4 border-amber-500'>
            <p className='text-lg text-amber-200 font-semibold'>
              Переможені готами
            </p>
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className='mt-8 p-6 bg-amber-900 bg-opacity-20 rounded-xl border border-amber-600 border-opacity-30'>
          <h4 className='text-lg font-semibold text-amber-300 mb-4 text-center'>
            Важливі особливості сарматів:
          </h4>
          <div className='grid md:grid-cols-2 gap-4 text-gray-200'>
            <div className='flex items-start'>
              <span className='text-amber-400 mr-2 text-lg'>•</span>
              <span>Матеріальна культура схожа на скіфську</span>
            </div>
            <div className='flex items-start'>
              <span className='text-amber-400 mr-2 text-lg'>•</span>
              <span>Велика роль жінок у суспільстві ("амазонки")</span>
            </div>
            <div className='flex items-start'>
              <span className='text-amber-400 mr-2 text-lg'>•</span>
              <span>Розвинене ковальське ремесло</span>
            </div>
            <div className='flex items-start'>
              <span className='text-amber-400 mr-2 text-lg'>•</span>
              <span>Поховання у курганах з багатим інвентарем</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
