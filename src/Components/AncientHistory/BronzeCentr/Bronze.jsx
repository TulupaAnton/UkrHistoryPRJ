export function Bronze () {
  return (
    <div className='w-full max-w-4xl mx-auto px-4 py-8'>
      {/* Основной блок Бронзового века */}
      <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border-2 border-amber-600 border-opacity-30 relative overflow-hidden'>
        {/* Заголовок */}
        <div className='text-center mb-8'>
          <h1 className='text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500 mb-4'>
            Бронзовий вік
          </h1>
          <p className='text-2xl text-amber-300 font-semibold'>
            II тис. до н.е.
          </p>
        </div>

        {/* Основные факты */}
        <div className='grid md:grid-cols-2 gap-6 mb-8'>
          <div className='bg-gray-700 bg-opacity-50 rounded-xl p-6 border border-amber-500 border-opacity-20'>
            <h3 className='text-xl font-semibold text-amber-300 mb-3 flex items-center'>
              <span className='w-2 h-2 bg-amber-400 rounded-full mr-3'></span>
              Технології
            </h3>
            <p className='text-lg text-gray-200'>
              Перший сплав (мідь + олово) - бронза
            </p>
          </div>

          <div className='bg-gray-700 bg-opacity-50 rounded-xl p-6 border border-amber-500 border-opacity-20'>
            <h3 className='text-xl font-semibold text-amber-300 mb-3 flex items-center'>
              <span className='w-2 h-2 bg-amber-400 rounded-full mr-3'></span>
              Поховання
            </h3>
            <p className='text-lg text-gray-200'>
              <span
                className='text-amber-400 underline cursor-pointer hover:text-amber-300 transition-colors'
                onClick={() =>
                  document
                    .getElementById('kurgan-modal')
                    .classList.remove('hidden')
                }
              >
                Кургани
              </span>{' '}
              - великі земляні насипи над похованням
            </p>
          </div>
        </div>

        {/* Суспільний поділ праці */}
        <div className='bg-gray-700 bg-opacity-50 rounded-xl p-6 border border-amber-500 border-opacity-20 mb-6'>
          <h3 className='text-2xl font-semibold text-amber-300 mb-4 text-center'>
            Другий суспільний поділ праці
          </h3>
          <p className='text-xl text-gray-200 text-center mb-4'>
            Від землеробів і скотарів відокремлюються ремісники
          </p>

          {/* Важное примечание */}
          <div className='bg-amber-900 bg-opacity-30 rounded-lg p-4 border-2 border-amber-600 border-opacity-40 mt-4'>
            <h4 className='text-lg font-bold text-amber-300 mb-2 flex items-center'>
              <span className='text-amber-400 mr-2'>⚠️</span>
              Не переплутай!
            </h4>
            <div className='space-y-2 text-gray-200'>
              <p className='flex items-start'>
                <span className='text-amber-400 mr-2 text-lg'>•</span>
                <span>
                  Перший суспільний поділ праці – відокремлення скотарства від
                  землеробства (енеоліт)
                </span>
              </p>
              <p className='flex items-start'>
                <span className='text-amber-400 mr-2 text-lg'>•</span>
                <span>
                  Другий суспільний поділ праці – відокремлення ремесла від
                  скотарства і землеробства (бронзова доба)
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Достижения */}
        <div className='bg-gray-700 bg-opacity-50 rounded-xl p-6 border border-amber-500 border-opacity-20'>
          <h3 className='text-xl font-semibold text-amber-300 mb-3 flex items-center'>
            <span className='w-2 h-2 bg-amber-400 rounded-full mr-3'></span>
            Важливі досягнення
          </h3>
          <p className='text-lg text-gray-200 flex items-center'>
            <span className='text-amber-400 mr-2 text-xl'>•</span>У цей період
            приручили коня
          </p>
        </div>
      </div>
      <div
        id='kurgan-modal'
        className='hidden fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4'
      >
        <div className='bg-gray-800 rounded-2xl max-w-2xl max-h-full overflow-auto'>
          <div className='relative'>
            <button
              className='absolute top-4 right-4 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white hover:bg-amber-700 transition-colors z-10'
              onClick={() =>
                document.getElementById('kurgan-modal').classList.add('hidden')
              }
            >
              ✕
            </button>
            <img
              src='./assets/kurgan.jpg'
              alt='Курган - древнее захоронение'
              className='w-full h-auto rounded-t-2xl'
            />
          </div>
          <div className='p-4 text-center'>
            <p className='text-amber-300 text-lg'>
              Курган - великий земляной насип над древним захоронением
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
