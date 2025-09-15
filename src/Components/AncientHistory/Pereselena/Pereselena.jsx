export function Pereselna () {
  return (
    <div className='w-full max-w-6xl mx-auto px-4 py-8'>
      <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border-2 border-amber-600 border-opacity-30'>
        {/* Заголовок */}
        <div className='text-center mb-8'>
          <h1 className='text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500'>
            Давні слов'яни
          </h1>
        </div>

        {/* Основная информация */}
        <div className='mb-6 p-6 bg-gray-700 bg-opacity-50 rounded-xl border border-amber-500 border-opacity-20'>
          <p className='text-xl text-gray-200'>
            Слов'яни - автохтонне індоєвропейське населення Центральної Європи
          </p>
          <p className='text-lg text-gray-200 mt-4'>
            Уперше згадуються римськими авторами I-II ст. як венеди, пізніше -
            як анти і склавини
          </p>
        </div>

        {/* Антский союз */}
        <div className='mb-6 p-6 bg-gray-700 bg-opacity-50 rounded-xl border border-amber-500 border-opacity-20'>
          <h3 className='text-2xl font-semibold text-amber-300 mb-4 flex items-center'>
            <span className='w-3 h-3 bg-amber-400 rounded-full mr-3'></span>
            Антський союз племен
          </h3>
          <p className='text-lg text-gray-200'>
            У IV ст. на території України склався Антський союз племен, який
            воював на боці гунів з готами. Розпався під тиском аварів
          </p>
        </div>

        {/* Великое расселение славян */}
        <div className='mb-6 p-6 bg-gray-700 bg-opacity-50 rounded-xl border border-amber-500 border-opacity-20'>
          <h2 className='text-3xl font-bold text-amber-300 mb-4 text-center'>
            Велике розселення слов'ян
          </h2>
          <p className='text-xl text-amber-200 text-center mb-4'>
            V-VII ст. н.е.
          </p>

          <div className='bg-amber-900 bg-opacity-30 rounded-lg p-4 mb-4'>
            <p className='text-lg text-amber-200'>
              Велике розселення словʼян тривало з другої половини V до VII ст.
              н.е. Воно є продовженням Великого переселення народів
            </p>
          </div>

          <h3 className='text-xl font-semibold text-amber-300 mb-3'>
            Як це проходило?
          </h3>
          <div className='space-y-3 text-lg text-gray-200'>
            <p className='flex items-start'>
              <span className='text-amber-400 mr-2 text-xl'>•</span>
              <span>
                Анти, за допомогою гунів, витіснили готів до Римської імперії
                (самі слов'яни також вторгалися на землі цієї держави)
              </span>
            </p>
            <p className='flex items-start'>
              <span className='text-amber-400 mr-2 text-xl'>•</span>
              <span>
                Далі слов'яни пішли на території Візантійської імперії
              </span>
            </p>
            <p className='flex items-start'>
              <span className='text-amber-400 mr-2 text-xl'>•</span>
              <span>
                Потім авари знищили державне об'єднання антів – Антський
                племінний союз
              </span>
            </p>
          </div>
        </div>

        {/* Результаты расселения */}
        <div className='mb-6 p-6 bg-gray-700 bg-opacity-50 rounded-xl border border-amber-500 border-opacity-20'>
          <h3 className='text-2xl font-semibold text-amber-300 mb-4 flex items-center'>
            <span className='w-3 h-3 bg-amber-400 rounded-full mr-3'></span>
            Наслідки розселення
          </h3>
          <p className='text-lg text-gray-200 mb-4'>
            У V-VII ст. внаслідок Великого розселення слов'ян племена мешкали
            від Балканського півострова до Балтійського моря, від Ельби до
            Подніпров'я
          </p>

          <div className='grid md:grid-cols-3 gap-4 mt-4'>
            <div className='bg-amber-900 bg-opacity-20 rounded-lg p-4 text-center'>
              <h4 className='text-lg font-semibold text-amber-300 mb-2'>
                Східні слов'яни
              </h4>
              <p className='text-gray-200'>
                Східна Європа (українці, білоруси, росіяни)
              </p>
            </div>
            <div className='bg-amber-900 bg-opacity-20 rounded-lg p-4 text-center'>
              <h4 className='text-lg font-semibold text-amber-300 mb-2'>
                Західні слов'яни
              </h4>
              <p className='text-gray-200'>Центральна Європа (чехи, поляки)</p>
            </div>
            <div className='bg-amber-900 bg-opacity-20 rounded-lg p-4 text-center'>
              <h4 className='text-lg font-semibold text-amber-300 mb-2'>
                Південні слов'яни
              </h4>
              <p className='text-gray-200'>Балкани (болгари, серби, хорвати)</p>
            </div>
          </div>
        </div>

        {/* Цитата */}
        <div className='p-6 bg-gray-700 bg-opacity-50 rounded-xl border border-amber-500 border-opacity-20'>
          <h3 className='text-2xl font-semibold text-amber-300 mb-4 flex items-center'>
            <span className='w-3 h-3 bg-amber-400 rounded-full mr-3'></span>
            Історична свідчення
          </h3>
          <div className='bg-amber-900 bg-opacity-30 rounded-lg p-6 italic'>
            <p className='text-lg text-amber-200'>
              «Тепер слов’яни бушують повсюдно... Вони спустошили та спалили
              міста й фортеці, узяли полонених і стали панами на землі. Вони
              осіли на ній панами, як на своїй, без страху... І нині вони живуть
              тут і перебувають у країні ромеїв... Зіслов’янилась вся наша земля
              і стала варварською»
            </p>
          </div>
        </div>

        {/* Карта расселения славян */}
        <div className='mt-6 p-6 bg-gray-700 bg-opacity-50 rounded-xl border border-amber-500 border-opacity-20'>
          <h3 className='text-2xl font-semibold text-amber-300 mb-4 text-center'>
            Карта розселення слов'ян
          </h3>
          <div className='rounded-lg overflow-hidden'>
            <div className='bg-amber-900 bg-opacity-20 h-150 flex items-center justify-center'>
              <span className='text-amber-300 text-lg'>
                <img src='./assets/slovani.jpeg' alt='' />
              </span>
            </div>
            <p className='text-sm text-amber-400 mt-2 text-center'>
              Основні напрямки розселення слов'янських племен в V-VII ст.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
