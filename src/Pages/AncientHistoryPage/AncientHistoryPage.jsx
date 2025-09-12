import React from 'react'
import { TooltipImage } from '../../store/TooltipImage'

export function AncientHistoryPage () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 flex flex-col'>
      {/* Header Section */}
      <div className='w-full py-8 px-4 sm:px-6 lg:px-8 text-center relative'>
        <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent'></div>
        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-amber-400 mb-4 mt-4 tracking-tight'>
          Стародавня історія України
        </h1>
        <p className='text-lg sm:text-xl lg:text-2xl text-amber-200 italic max-w-3xl mx-auto'>
          Дослідження основних періодів розвитку людства на території сучасної
          України
        </p>
        <div className='absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent'></div>
      </div>

      {/* Main Periods Grid */}
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 gap-6'>
          {[
            {
              title: "Кам'яний вік",
              color: 'bg-gray-700',
              border: 'border-amber-400',
              period: '1млн - Кінець 3тис. до н.е.',
              icon: '⛏️'
            },
            {
              title: "Мідно-кам'яний",
              color: 'bg-gray-600',
              border: 'border-amber-500',
              period: '4-3 тис. до н.е.',
              icon: '🔨'
            },
            {
              title: 'Бронзовий',
              color: 'bg-gray-700',
              border: 'border-yellow-500',
              period: '3-1 тис. до н.е.',
              icon: '🪙'
            },
            {
              title: 'Залізний вік',
              color: 'bg-gray-600',
              border: 'border-red-500',
              period: '1 тис. до н.е.',
              icon: '⚔️'
            }
          ].map((period, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border-2 ${period.border} ${period.color} transition-all hover:scale-105 hover:shadow-xl relative overflow-hidden group`}
            >
              <div className='absolute top-3 right-3 text-3xl text-amber-300 group-hover:scale-110 transition-transform'>
                {period.icon}
              </div>
              <h2 className='text-2xl font-semibold text-center text-amber-100 mb-2 pr-8'>
                {period.title}
              </h2>
              <p className='text-lg text-center text-gray-300'>
                {period.period}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stone Age Section */}
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center'>
        <h2 className='text-4xl sm:text-5xl font-bold font-serif text-amber-300'>
          Кам'яний вік
          <p className='text-2xl sm:text-3xl text-gray-300 mt-2'>
            (1млн - Кінець 3тис. до н.е.)
          </p>
        </h2>
        <p className='text-xl text-gray-400 italic mt-3'>
          Основной материал: камінь, кістка, дерево
        </p>
      </div>

      {/* Stone Age Sub-Periods */}
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12'>
        <div className='flex flex-col gap-8'>
          {/* Paleolithic */}
          <div className='bg-gray-800 rounded-2xl shadow-xl border-t-4 border-blue-500 overflow-hidden transition-transform hover:scale-[1.02]'>
            <div className='bg-blue-500 py-4 text-center'>
              <h3 className='text-2xl font-semibold text-white'>Палеоліт</h3>
              <p className='text-lg text-blue-100 mt-1'>
                (1млн-11тис. років до н.е.)
              </p>
            </div>
            <div className='p-8'>
              <div className='mb-6'>
                <p className='text-lg text-gray-200 leading-relaxed'>
                  1 млн років тому з'явивилася перша людоподобка істота на
                  теріторії України
                </p>
                <h4 className='font-medium text-blue-300 text-xl mt-6 mb-3'>
                  Основні заняття:
                </h4>
                <ul className='text-lg text-gray-300 list-disc list-inside space-y-3'>
                  <li>Збиральництво</li>
                  <li>Полювання</li>
                  <li>Рибальство</li>
                </ul>
              </div>
            </div>
            <div className='flex justify-center mb-8'>
              <svg
                className='w-10 h-10 text-blue-400'
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
            {/* Paleolithic Sub-Periods */}
            <div className='flex flex-col gap-6 p-8'>
              {/* Early Paleolithic */}
              <div className='bg-gray-700 rounded-lg p-6'>
                <h4 className='text-xl font-semibold text-blue-300 mb-3'>
                  Ранній Палеоліт
                </h4>
                <p className='text-lg text-gray-300 mb-3'>
                  (1 млн - 150 тис. років до н.е.)
                </p>
                <ul className='text-lg text-gray-300 list-disc list-inside space-y-3'>
                  <li>
                    <b>Привласнювальні форми господарювання:</b> збиральництво
                    та полювання
                  </li>
                  <li>Кочовий спосіб життя</li>
                  <li>Жили у матріархаті</li>
                  <li>
                    <TooltipImage
                      text="кам'яне ручне рубило"
                      imgSrc='./public/assets/rubilo.jpg'
                      alt="Кам'яне ручне рубило"
                    />
                  </li>
                </ul>
              </div>

              {/* Middle Paleolithic */}
              <div className='bg-gray-700 rounded-lg p-6'>
                <h4 className='text-xl font-semibold text-blue-300 mb-3'>
                  Середній Палеоліт
                </h4>
                <p className='text-lg text-gray-300 mb-3'>
                  (150-35 тис. років до н.е.)
                </p>
                <p className='text-lg text-blue-300 font-bold mb-3'>
                  Льодовиковий період
                </p>
                <ul className='text-lg text-gray-300 list-disc list-inside space-y-3'>
                  <li>Полювання на мамонтів та шерсистих тварин</li>
                  <li>Наземні житла з кісток і шкур тварин</li>
                  <li>
                    З'явилися релігійні вірування та образотворче мистецтво
                  </li>
                </ul>
              </div>

              {/* Late Paleolithic */}
              <div className='bg-gray-700 rounded-lg p-6'>
                <h4 className='text-xl font-semibold text-blue-300 mb-3'>
                  Пізній Палеоліт
                </h4>
                <p className='text-lg text-gray-300 mb-3'>
                  (35-11 тис. років до н.е.)
                </p>
                <p className='text-lg text-gray-300 mb-3'>
                  Поступове потепління
                </p>
                <ul className='list-disc list-inside text-lg text-gray-300 space-y-3'>
                  <li>Загінне полювання на диких коней</li>
                  <li>
                    Нове знаряддя — ножеподібні пластини (наконечники списів та
                    кістяні гарпуни)
                  </li>
                  <li>
                    Старадавнє святилище Кам'яна Могила (Запорізька обл.) —
                    пагорб із печерами, вкритий наскальними зображеннями
                  </li>
                  <li>Поширені так звані "венери" — статуетки жінок</li>
                  <li>
                    Поняття <b>Родова община:</b> коли кілька родів між собою
                    об'єднується
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mesolithic */}
          <div className='bg-gray-800 rounded-2xl shadow-xl border-t-4 border-green-500 overflow-hidden transition-transform hover:scale-[1.02]'>
            <div className='bg-green-500 py-4 text-center'>
              <h3 className='text-2xl font-semibold text-white'>Мезоліт</h3>
              <p className='text-lg text-green-100 mt-1'>
                (10 - 6 тис. років тому)
              </p>
            </div>
            <div className='p-8'>
              <div className='mb-6'>
                <ul className='text-lg text-gray-300 list-disc list-inside space-y-3'>
                  <li>
                    Винайдені лук та стріли, які уможливили успішне
                    індивідуальне полювання
                  </li>
                  <li>
                    Полювання на копитних, а також{' '}
                    <b>рибальство, річкове збиральництво</b>
                  </li>
                  <li>Нові інструменти: гачки та гарпуни</li>
                  <li>
                    Родові общини переходять у <b>племена</b>
                  </li>
                  <li>Транспортні засоби: човни, плоти, лижі, ручні нарти</li>
                  <li>
                    <b>Прирученні перші тварини</b> — свиня та собака
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Neolithic */}
          <div className='bg-gray-800 rounded-2xl shadow-xl border-t-4 border-purple-500 overflow-hidden transition-transform hover:scale-[1.02]'>
            <div className='bg-purple-500 py-4 text-center'>
              <h3 className='text-2xl font-semibold text-white'>Неоліт</h3>
              <p className='text-lg text-purple-100 mt-1'>
                (6 - 4 тис. років тому)
              </p>
            </div>
            <div className='p-8'>
              <div className='mb-6'>
                <ul className='text-lg text-gray-300 list-disc list-inside space-y-3'>
                  <li>
                    <b>Неолітична революція:</b> перехід від{' '}
                    <b>привласнювальних</b> форм господарства до{' '}
                    <b>відтворювальних</b>
                  </li>
                  <li>
                    <b>Відтворювальне господарство:</b> коли сам вирощуєш та сам
                    збираєш
                  </li>
                  <li>Нові знаряддя: мотика, серп</li>
                  <li>Формуються археологічні культури (деталі нижче)</li>
                  <li>Перехід до патріархату</li>
                  <li>
                    <b>Поява керамічної посуди</b>
                  </li>
                  <li>Демографічний вибух</li>
                </ul>
              </div>
              <div className='mb-6'>
                <div className='relative group inline-block'>
                  <p className='text-lg text-gray-300 cursor-help border-b border-dashed border-purple-400'>
                    неолітична кераміка
                  </p>
                  <div className='absolute hidden group-hover:block z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-gray-800 shadow-lg rounded-md border border-gray-600'>
                    <img
                      src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Trypillian_pottery.jpg/800px-Trypillian_pottery.jpg'
                      alt='Неолітична кераміка'
                      className='w-full h-auto rounded'
                    />
                    <p className='text-sm text-gray-400 mt-1'>
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
