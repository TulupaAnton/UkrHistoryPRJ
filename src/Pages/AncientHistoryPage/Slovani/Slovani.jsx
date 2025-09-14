export function Slovani () {
  return (
    <div className='w-full max-w-6xl mx-auto px-4 py-8'>
      <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border-2 border-amber-600 border-opacity-30'>
        {/* Заголовок */}
        <div className='text-center mb-8'>
          <h1 className='text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500'>
            Велике переселення народів
          </h1>
          <p className='text-xl text-amber-300 mt-2'>IV-VII ст.</p>
        </div>

        {/* Основная информация */}
        <div className='mb-6 p-6 bg-gray-700 bg-opacity-50 rounded-xl border border-amber-500 border-opacity-20'>
          <p className='text-xl text-gray-200'>
            Це коли різні племена (слов'яни, германці, сармати) переміщалися на
            території Римської імперії, а все це розпочалося в українському
            Причорномор'ї
          </p>
        </div>

        {/* Дополнительная информация */}
        <div className='mb-6 p-6 bg-gray-700 bg-opacity-50 rounded-xl border border-amber-500 border-opacity-20'>
          <p className='text-lg text-gray-200'>
            Активне розселення та переміщення "варварських племен" від
            Центральної Азії до кордонів Римської імперії через територію
            Східної та Північної Європи у IV-VII ст. (слов'яни, гуни, готи)
          </p>
        </div>

        {/* Три колонки */}
        <div className='grid md:grid-cols-3 gap-6 mb-6'>
          {/* Готи */}
          <div className='bg-amber-900 bg-opacity-20 rounded-xl p-6 border border-amber-500 border-opacity-30'>
            <h3 className='text-2xl font-semibold text-amber-300 mb-4 flex items-center'>
              <span className='w-3 h-3 bg-amber-400 rounded-full mr-3'></span>
              Готи (II-IV ст.)
            </h3>
            <p className='text-lg text-gray-200 mb-4'>
              Германські племена. Знищували сарматів та підкорили слов'янські
              племена
            </p>
            <div className='mt-4 rounded-lg overflow-hidden bg-black bg-opacity-40 p-3'>
              <div className='text-center text-amber-400 mb-2'>
                Готські руни
              </div>
              <div className='flex justify-center space-x-2 text-2xl'>
                <span className='p-1 bg-amber-900 bg-opacity-50 rounded'>
                  ᚦ
                </span>
                <span className='p-1 bg-amber-900 bg-opacity-50 rounded'>
                  ᚨ
                </span>
                <span className='p-1 bg-amber-900 bg-opacity-50 rounded'>
                  ᚱ
                </span>
                <span className='p-1 bg-amber-900 bg-opacity-50 rounded'>
                  ᛁ
                </span>
                <span className='p-1 bg-amber-900 bg-opacity-50 rounded'>
                  ᛋ
                </span>
              </div>
            </div>
          </div>

          {/* Гуни */}
          <div className='bg-amber-900 bg-opacity-20 rounded-xl p-6 border border-amber-500 border-opacity-30'>
            <h3 className='text-2xl font-semibold text-amber-300 mb-4 flex items-center'>
              <span className='w-3 h-3 bg-amber-400 rounded-full mr-3'></span>
              Гуни (III-V ст.)
            </h3>
            <p className='text-lg text-gray-200 mb-2'>
              Вождь -{' '}
              <span className='text-amber-300 font-semibold'>Аттіла</span>
            </p>
            <p className='text-lg text-gray-200'>
              Разом зі слов'янами перемогли готів. Прийшли з Центральної Азії
            </p>
            <div className='mt-4 rounded-lg overflow-hidden'>
              <div className='text-center text-amber-400 p-2 bg-black bg-opacity-40'>
                Кочівники євразійських степів
              </div>
            </div>
          </div>

          {/* Авари */}
          <div className='bg-amber-900 bg-opacity-20 rounded-xl p-6 border border-amber-500 border-opacity-30'>
            <h3 className='text-2xl font-semibold text-amber-300 mb-4 flex items-center'>
              <span className='w-3 h-3 bg-amber-400 rounded-full mr-3'></span>
              Авари
            </h3>
            <p className='text-lg text-gray-200'>
              Змогли знищити Антський племінний союз – це таке об'єднання
              слов'ян та поставити їх у залежність
            </p>
            <div className='mt-4 rounded-lg overflow-hidden'>
              <div className='text-center text-amber-400 p-2 bg-black bg-opacity-40'>
                Кочеві народи з Центральної Азії
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
