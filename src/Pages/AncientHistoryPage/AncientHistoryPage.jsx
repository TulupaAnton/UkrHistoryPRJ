export function AncientHistoryPage () {
  return (
    <div>
      <div className=' mx-auto  p-6 md:p-8 border border-amber-200 '>
        {/* Заголовок в историческом стиле */}
        <div className='text-center mb-12 relative'>
          <div className='absolute top-0 left-0 right-0 h-1 bg-amber-700 opacity-50'></div>
          <h1 className='text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-4 mt-2'>
            Стародавня історія України
          </h1>
          <p className='text-xl text-amber-800 italic'>
            Дослідження основних періодів розвитку людства на території сучасної
            України
          </p>
          <div className='absolute bottom-0 left-0 right-0 h-1 bg-amber-700 opacity-50'></div>
        </div>

        {/* Основные периоды */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
          {[
            {
              title: "Кам'яний вік",
              color: 'bg-stone-200',
              border: 'border-stone-400',
              period: '1млн - Кінець 3тис. до н.е.',
              icon: '⛏️'
            },
            {
              title: "Мідно-кам'яний",
              color: 'bg-amber-200',
              border: 'border-amber-500',
              period: '4-3 тис. до н.е.',
              icon: '🔨'
            },
            {
              title: 'Бронзовий',
              color: 'bg-yellow-200',
              border: 'border-yellow-600',
              period: '3-1 тис. до н.е.',
              icon: '🪙'
            },
            {
              title: 'Залізний вік',
              color: 'bg-red-200',
              border: 'border-red-600',
              period: '1 тис. до н.е.',
              icon: '⚔️'
            }
          ].map((period, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border-2 ${period.border} ${period.color} transition-all hover:scale-105 shadow-md hover:shadow-lg relative overflow-hidden`}
            >
              <div className='absolute top-2 right-2 text-2xl'>
                {period.icon}
              </div>
              <h2 className='text-xl font-semibold text-center text-gray-800 mb-2 pr-6'>
                {period.title}
              </h2>
              <p className='text-sm text-center text-gray-600'>
                {period.period}
              </p>
            </div>
          ))}
        </div>

        {/* Заголовок для каменного века */}
        <div className='mb-8 text-center'>
          <h2 className='text-3xl font-bold text-stone-800 font-serif'>
            Кам'яний вік
            <p className='text-xl'>(1млн - Кінець 3тис. до н.е.)</p>
          </h2>
          <p className='text-stone-600 italic'>
            Основной материал: камінь, кістка, дерево
          </p>
        </div>

        {/* Горизонтальные карточки периодов каменного века */}
        <div className='flex flex-col gap-5'>
          {/* Палеолит */}
          <div className='flex-1 bg-white rounded-xl shadow-lg border-t-4 border-blue-600 overflow-hidden transition-transform hover:scale-[1.02]'>
            <div className='bg-blue-600 py-2 text-center'>
              <h3 className='text-xl font-semibold text-white'>Палеоліт</h3>
              <p className='text-blue-100 text-sm'>
                (1млн-11тис. років до н.е.)
              </p>
            </div>

            <div className='p-5'>
              <div className='mb-4'>
                <p>
                  1 млн років тому з'явивилася перша людоподобка істота на
                  теріторії України
                </p>
                <h4 className='font-medium text-blue-800 mb-2'>
                  Основні заняття:
                </h4>
                <ul className='text-sm text-blue-700 list-disc list-inside space-y-1'>
                  <li>Збиральництво</li>
                  <li>Полювання</li>
                  <li>Рибальство</li>
                </ul>
              </div>
            </div>
            <div className='flex justify-center mb-4'>
              <svg
                className='w-8 h-8 text-blue-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M19 14l-7 7m0 0l-7-7m7 7V3'
                ></path>
              </svg>
            </div>
            {/* Подпериоды Палеолита */}
            <div className='flex flex-col gap-4 p-5'>
              {/* Ранний Палеолит */}
              <div className='bg-blue-50 rounded-lg p-4'>
                <h4 className='text-lg font-semibold text-blue-800 mb-2'>
                  Ранній Палеоліт
                </h4>
                <p className='text-sm text-blue-700 mb-2'>
                  (1 млн - 150 тис. років до н.е.)
                </p>
                <p className='text-sm text-blue-700'>
                  <li>
                    <b>Привласнювальні форми господарювання:</b> збиральництво
                    та полювання
                  </li>
                  <li>Кочовий спосіб життя</li>
                  <li>Жили у матріархаті</li>
                  <li>
                    <div className='relative group inline-block'>
                      <p className='text-sm text-blue-700 cursor-help border-b border-dashed border-blue-400'>
                        кам'яне ручне рубило
                      </p>
                      <div className='absolute hidden group-hover:block z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-white shadow-lg rounded-md border border-gray-200'>
                        <img
                          src='./public/assets/rubilo.jpg'
                          alt='Камяне ручне рубило'
                          className='w-full h-auto rounded'
                        />
                      </div>
                    </div>
                  </li>
                </p>
              </div>

              {/* Средний Палеолит */}
              <div className='bg-blue-50 rounded-lg p-4'>
                <h4 className='text-lg font-semibold text-blue-800 mb-2'>
                  Середній Палеоліт
                </h4>
                <p className='text-sm text-blue-700 mb-2'>
                  (150-35 тис. років до н.е.)
                </p>
                <p className='text-blue-700 font-bold'>лоьдовиковий період</p>
                <p className='text-sm text-blue-700'>
                  <li>Полювання на мамонтів та шерсистих тварин,тощо</li>
                  <li>Наземні житла з кісток і шкур тварин</li>
                  <li>
                    З'явилися релегійні вірування та образотворче мистецтво
                  </li>
                </p>
              </div>

              {/* Поздний Палеолит */}
              <div className='bg-blue-50 rounded-lg p-4'>
                <h4 className='text-lg font-semibold text-blue-800 mb-2'>
                  Пізній Палеоліт
                </h4>
                <p className='text-sm text-blue-700 mb-2'>
                  (35-11 тис. років до н.е.)
                </p>
                <p className=''>Поступове потепління</p>
                <li>Загінне полювання на диких коней,тощо..</li>
                <li>
                  Нове знаряддя-ножеподібні пластини(наконечникі списів та
                  кстяні гарпуни)
                </li>
                <li>
                  Старадавнє святилище Кам'яна Могила(Запорізька обл.)-пагорб із
                  печерами,вкритий наскальними зображеннями.
                </li>
                <li>Поширені так звані "венери" статуетки жінок </li>
                <li>
                  Поняття <b>Родова община:</b> коли кілька родів між собо
                  об'єднується
                </li>
              </div>
            </div>
          </div>

          {/* Мезолит */}
          <div className='flex-1 bg-white rounded-xl shadow-lg border-t-4 border-green-600 overflow-hidden transition-transform hover:scale-[1.02]'>
            <div className='bg-green-600 py-2 text-center'>
              <h3 className='text-xl font-semibold text-white'>Мезоліт</h3>
              <p className='text-green-100 text-sm'>(10 - 6 тис. років тому)</p>
            </div>

            <div className='p-5'>
              <div className='mb-4'>
                <ul className='text-sm text-green-700 list-disc list-inside space-y-1'>
                  <li>
                    Винайдені лук та стріли, які уможливили успішне
                    індивідуальне полювання
                  </li>
                  <li>
                    Полювання на копитних а також
                    <b> рибальство,річкове збиральництво</b>
                  </li>
                  <li>Нові інструменти: Гачки та гарпуни</li>//TODOфото
                  <li>
                    Родові общини переходять у <b>племена</b>
                  </li>
                  <li>Транспортні засоби: човни і плоти,лижі,ручні нарти</li>
                  <li>
                    <b>Прирученні перші тварини</b>- свиня та собака
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Неолит */}
          <div className='flex-1 bg-white rounded-xl shadow-lg border-t-4 border-purple-600 overflow-hidden transition-transform hover:scale-[1.02]'>
            <div className='bg-purple-600 py-2 text-center'>
              <h3 className='text-xl font-semibold text-white'>Неоліт</h3>
              <p className='text-purple-100 text-sm'>(6 - 4 тис. років тому)</p>
            </div>

            <div className='p-5'>
              <div className='mb-4'>
                <ul className='text-sm text-purple-700 list-disc list-inside space-y-1'>
                  <li>
                    <b>Неолтічна революція:</b>перехід від{' '}
                    <b>привласнювальних </b>форм господарства до{' '}
                    <b>відтворювальних</b>
                  </li>
                  <li>
                    <b>Відтворювальне господарство:</b> це коли сам вирощуєш та
                    сам збираєш{' '}
                  </li>
                  <li>Нові знаряддя: мотика серп //TODO photo</li>
                  <li>Формуються археологічні культури(деталі нижче)</li>
                  <li>Перехід до патріархату</li>
                  <li>
                    <b>Поява керамічної посуди</b>
                  </li>
                  <li>Демографічний вибух</li>
                </ul>
              </div>

              <div className='mb-4'>
                <div className='relative group inline-block'>
                  <p className='text-sm text-purple-700 cursor-help border-b border-dashed border-purple-400'>
                    неолітична кераміка
                  </p>
                  <div className='absolute hidden group-hover:block z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-white shadow-lg rounded-md border border-gray-200'>
                    <img
                      src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Trypillian_pottery.jpg/800px-Trypillian_pottery.jpg'
                      alt='Неолітична кераміка'
                      className='w-full h-auto rounded'
                    />
                    <p className='text-xs text-gray-600 mt-1'>
                      Кераміка трипільської культури
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
