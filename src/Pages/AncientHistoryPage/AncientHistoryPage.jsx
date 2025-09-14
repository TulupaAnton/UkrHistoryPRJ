import React, { useState } from 'react'
import { TooltipImage } from '../../store/TooltipImage'
import { Skif } from './Skif/Skif'
import { Sarmati } from './Sarmari/Sarmari'
import { Kolonia } from './Kolonia/Kolonia'
import { Slovani } from './Slovani/Slovani'
import { Pereselna } from './Pereselena/Pereselena'

export function AncientHistoryPage () {
  const [activePeriod, setActivePeriod] = useState(0)
  const [activeSubPeriod, setActiveSubPeriod] = useState(0)

  return (
    <div className='min-h-screen bg-gradient-to-b mt-5 from-gray-900 via-gray-800 to-gray-900 text-gray-100 flex flex-col relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-10'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-amber-400 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-blue-500 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-green-400 rounded-full blur-3xl'></div>
      </div>

      {/* Header Section */}
      <div className='w-full py-12 px-4 sm:px-6 lg:px-8 text-center relative z-10'>
        <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent'></div>
        <div className='absolute inset-x-0 top-0 flex justify-center'>
          <div className='w-40 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent'></div>
        </div>

        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 mt-4 tracking-tight'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500'>
            Стародавня історія України
          </span>
        </h1>

        <div className='w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6 rounded-full'></div>

        <p className='text-lg sm:text-xl lg:text-2xl text-amber-200 italic max-w-3xl mx-auto leading-relaxed'>
          Дослідження основних періодів розвитку людства на території сучасної
          України
        </p>

        <div className='absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent'></div>
      </div>

      {/* Main Periods Grid */}
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10'>
        <h2 className='text-2xl sm:text-3xl font-bold text-center mb-10 text-amber-100'>
          Основні історичні періоди
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {[
            {
              title: "Кам'яний вік",
              color: 'from-gray-700 to-gray-800',
              border: 'border-amber-400',
              period: '1млн - Кінець 3тис. до н.е.',
              icon: '⛏️',
              description: 'Основной материал: камінь, кістка, дерево'
            },
            {
              title: "Мідно-кам'яний",
              color: 'from-gray-600 to-gray-700',
              border: 'border-amber-500',
              period: '4-3 тис. до н.е.',
              icon: '🔨',
              description: 'Перехідний період'
            },
            {
              title: 'Бронзовий',
              color: 'from-amber-700 to-amber-800',
              border: 'border-yellow-500',
              period: '3-1 тис. до н.е.',
              icon: '🪙',
              description: 'Металобробка бронзи'
            },
            {
              title: 'Залізний вік',
              color: 'from-gray-800 to-gray-900',
              border: 'border-red-500',
              period: '1 тис. до н.е.',
              icon: '⚔️',
              description: 'Поява залізних знарядь'
            }
          ].map((period, index) => (
            <div
              key={index}
              onClick={() => setActivePeriod(index)}
              className={`p-6 rounded-2xl border-2 ${
                period.border
              } bg-gradient-to-b ${
                period.color
              } transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden group cursor-pointer ${
                activePeriod === index
                  ? 'ring-2 ring-amber-400 ring-opacity-50'
                  : ''
              }`}
            >
              <div className='absolute top-3 right-3 text-3xl text-amber-300 group-hover:scale-110 transition-transform'>
                {period.icon}
              </div>
              <h2 className='text-xl font-semibold text-center text-amber-100 mb-2 pr-8'>
                {period.title}
              </h2>
              <p className='text-lg text-center text-gray-300 mb-2'>
                {period.period}
              </p>
              <p className='text-sm text-center text-gray-400'>
                {period.description}
              </p>
            </div>
          ))}
        </div>
        <div className='absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent'></div>
      </div>

      {/* Stone Age Section */}
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center relative z-10'>
        <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500'>
            Кам'яний вік
          </span>
        </h2>
        <p className='text-2xl sm:text-3xl text-gray-300 mb-4'>
          (1млн - Кінець 3тис. до н.е.)
        </p>
        <p className='text-xl text-gray-400 italic'>
          Основной материал: камінь, кістка, дерево
        </p>
      </div>

      {/* Stone Age Sub-Periods */}
      <div className='flex flex-col w-full p-5 flex-wrap'>
        <div className='flex flex-col gap-8'>
          {/* Paleolithic */}
          <div className='font-six bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border-t-4 border-blue-500 overflow-hidden'>
            <div className='bg-gradient-to-r from-blue-600 to-blue-700 py-4 text-center'>
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
                <ul className='text-lg text-gray-300 space-y-3'>
                  <li className='flex items-start'>
                    <span className='text-blue-400 mr-2'>•</span>
                    <span>Збиральництво</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-blue-400 mr-2'>•</span>
                    <span>Полювання</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-blue-400 mr-2'>•</span>
                    <span>Рибальство</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Paleolithic Sub-Periods */}
            <div className='flex flex-col gap-6 p-8'>
              {/* Early Paleolithic */}
              <div className='bg-gray-700/50 rounded-xl p-6 backdrop-blur-sm border border-gray-600'>
                <h4 className='text-xl font-semibold text-blue-300 mb-3'>
                  Ранній Палеоліт
                </h4>
                <p className='text-lg text-gray-300 mb-3'>
                  (1 млн - 150 тис. років до н.е.)
                </p>
                <ul className='text-lg text-gray-300 space-y-3'>
                  <li className='flex items-start'>
                    <span className='text-blue-400 mr-2'>•</span>
                    <span>
                      <b>Привласнювальні форми господарювання:</b> збиральництво
                      та полювання
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-blue-400 mr-2'>•</span>
                    <span>Кочовий спосіб життя</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-blue-400 mr-2'>•</span>
                    <span>Жили у матріархаті</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-blue-400 mr-2'>•</span>
                    <span>
                      <TooltipImage
                        text="кам'яне ручне рубило"
                        imgSrc='./assets/rubilo.jpg'
                        alt="Кам'яне ручне рубило"
                      />
                    </span>
                  </li>
                </ul>
              </div>

              {/* Middle Paleolithic */}
              <div className='bg-gray-700/50 rounded-xl p-6 backdrop-blur-sm border border-gray-600'>
                <h4 className='text-xl font-semibold text-blue-300 mb-3'>
                  Середній Палеоліт
                </h4>
                <p className='text-lg text-gray-300 mb-3'>
                  (150-35 тис. років до н.е.)
                </p>
                <p className='text-lg text-blue-300 font-bold mb-3'>
                  Льодовиковий період
                </p>
                <ul className='text-lg text-gray-300 space-y-3'>
                  <li className='flex items-start'>
                    <span className='text-blue-400 mr-2'>•</span>
                    <span>Полювання на мамонтів та шерсистих тварин</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-blue-400 mr-2'>•</span>
                    <span>Наземні житла з кісток і шкур тварин</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-blue-400 mr-2'>•</span>
                    <span>
                      З'явилися релігійні вірування та образотворче мистецтво
                    </span>
                  </li>
                </ul>
              </div>

              {/* Late Paleolithic */}
              <div className='bg-gray-700/50 rounded-xl p-6 backdrop-blur-sm border border-gray-600'>
                <h4 className='text-xl font-semibold text-blue-300 mb-3'>
                  Пізній Палеоліт
                </h4>
                <p className='text-lg text-gray-300 mb-3'>
                  (35-11 тис. років до н.е.)
                </p>
                <p className='text-lg text-gray-300 mb-3'>
                  Поступове потепління
                </p>
                <ul className='text-lg text-gray-300 space-y-3'>
                  <li className='flex items-start'>
                    <span className='text-blue-400 mr-2'>•</span>
                    <span>Загінне полювання на диких коней</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-blue-400 mr-2'>•</span>
                    <span>
                      Нове знаряддя — ножеподібні пластини (наконечники списів
                      та кістяні гарпуни)
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-blue-400 mr-2'>•</span>
                    <span>
                      Старадавнє святилище Кам'яна Могила (Запорізька обл.) —
                      пагорб із печерами, вкритий наскальними зображеннями
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-blue-400 mr-2'>•</span>
                    <span>Поширені так звані "венери" — статуетки жінок</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-blue-400 mr-2'>•</span>
                    <span>
                      Поняття <b>Родова община:</b> коли кілька родів між собою
                      об'єднується
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mesolithic */}
          <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border-t-4 border-green-500 overflow-hidden transition-transform duration-300 hover:scale-[1.01]'>
            <div className='bg-gradient-to-r from-green-600 to-green-700 py-4 text-center'>
              <h3 className='text-2xl font-semibold text-white'>Мезоліт</h3>
              <p className='text-lg text-green-100 mt-1'>
                (10 - 6 тис. років тому)
              </p>
            </div>
            <div className='p-8'>
              <div className='mb-6'>
                <ul className='text-lg text-gray-300 space-y-3'>
                  <li className='flex items-start'>
                    <span className='text-green-400 mr-2'>•</span>
                    <span>
                      Винайдені лук та стріли, які уможливили успішне
                      індивідуальне полювання
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-green-400 mr-2'>•</span>
                    <span>
                      Полювання на копитних, а також{' '}
                      <b>рибальство, річкове збиральництво</b>
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-green-400 mr-2'>•</span>
                    <span>Нові інструменти: гачки та гарпуни</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-green-400 mr-2'>•</span>
                    <span>
                      Родові общини переходять у <b>племена</b>
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-green-400 mr-2'>•</span>
                    <span>
                      Транспортні засоби: човни, плоти, лижі, ручні нарти
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-green-400 mr-2'>•</span>
                    <span>
                      <b>Прирученні перші тварини</b> — свиня та собака
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Neolithic */}
          <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border-t-4 border-purple-500 overflow-hidden'>
            <div className='bg-gradient-to-r from-purple-600 to-purple-700 py-4 text-center'>
              <h3 className='text-2xl font-semibold text-white'>Неоліт</h3>
              <p className='text-lg text-purple-100 mt-1'>
                (6 - 4 тис. років тому)
              </p>
            </div>
            <div className='p-8'>
              <div className='mb-6'>
                <ul className='text-lg text-gray-300 space-y-3'>
                  <li className='flex items-start'>
                    <span className='text-purple-400 mr-2'>•</span>
                    <span>
                      <b>Неолітична революція:</b> перехід від{' '}
                      <b>привласнювальних</b> форм господарства до{' '}
                      <b>відтворювальних</b>
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-purple-400 mr-2'>•</span>
                    <span>
                      <b>Відтворювальне господарство:</b> коли сам вирощуєш та
                      сам збираєш
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-purple-400 mr-2'>•</span>
                    <span>Нові знаряддя: мотика, серп</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-purple-400 mr-2'>•</span>
                    <span>Формуються археологічні культури (деталі нижче)</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-purple-400 mr-2'>•</span>
                    <span>Перехід до патріархату</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-purple-400 mr-2'>•</span>
                    <span>
                      <b>Поява керамічної посуди</b>
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-purple-400 mr-2'>•</span>
                    <span>Демографічний вибух</span>
                  </li>
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

      {/* СТОЯНКИ */}
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

          {/* Декоративный элемент внизу */}
          {/* <div className='text-center mt-20 pt-8 border-t border-gray-700/50 relative'>
            <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center'>
              <i className='fas fa-monument text-amber-400/50 text-2xl'></i>
            </div>
            <p className='text-gray-400 italic'>
              Археологічні пам'ятки давньої історії України
            </p>
          </div> */}
        </div>
      </div>
      {/*//! Enolit */}
      <div className='bg-gray-800/50 rounded-2xl p-8 shadow-2xl border border-amber-700/30 relative overflow-hidden'>
        <div className='absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full -translate-y-16 translate-x-16'></div>
        <div className='absolute bottom-0 left-0 w-40 h-40 bg-amber-400/5 rounded-full translate-y-20 -translate-x-20'></div>

        <div className='flex items-center text-center justify-center mb-8'>
          <h1 className='font-bold text-5xl md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 relative inline-block'>
            <span className='absolute -inset-4 bg-amber-400 blur-xl opacity-20 rounded-full'></span>
            Енеоліт, або мідно-кам'яний вік <br />
            (4-3 тис. до н.е.)
          </h1>
        </div>

        <div className='space-y-4 relative z-10'>
          <div className='flex items-start p-5 rounded-xl bg-gradient-to-r from-gray-700/40 to-gray-800/40 hover:from-amber-900/30 hover:to-amber-800/30 transition-all duration-300 group border border-gray-700/50 hover:border-amber-700/30'>
            <span className='inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-700 text-gray-900 rounded-lg text-sm font-bold mr-4 flex-shrink-0 shadow-md'>
              1
            </span>
            <span className='text-lg md:text-xl'>
              Початок обробки металів (міді та золота) зі збереженням значної
              ролі каменю
            </span>
          </div>

          <div className='flex items-start p-5 rounded-xl bg-gradient-to-r from-gray-700/40 to-gray-800/40 hover:from-amber-900/30 hover:to-amber-800/30 transition-all duration-300 group border border-gray-700/50 hover:border-amber-700/30'>
            <span className='inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-700 text-gray-900 rounded-lg text-sm font-bold mr-4 flex-shrink-0 shadow-md'>
              2
            </span>
            <span className='text-lg md:text-xl'>
              Скотарство відокремлюється від хліборобства. З'являються пастуші
              племена. Перехід від мотичного до рільного землеробства
            </span>
          </div>

          <div className='flex items-start p-5 rounded-xl bg-gradient-to-r from-gray-700/40 to-gray-800/40 hover:from-amber-900/30 hover:to-amber-800/30 transition-all duration-300 group border border-gray-700/50 hover:border-amber-700/30'>
            <span className='inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-700 text-gray-900 rounded-lg text-sm font-bold mr-4 flex-shrink-0 shadow-md'>
              3
            </span>
            <span className='text-lg md:text-xl'>
              Винайдені суцільні колесо й чотириколісні вози, що сприяло
              розширенню контактів і розселенню людей
            </span>
          </div>

          <div className='flex items-start p-5 rounded-xl bg-gradient-to-r from-gray-700/40 to-gray-800/40 hover:from-amber-900/30 hover:to-amber-800/30 transition-all duration-300 group border border-gray-700/50 hover:border-amber-700/30'>
            <span className='inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-700 text-gray-900 rounded-lg text-sm font-bold mr-4 flex-shrink-0 shadow-md'>
              4
            </span>
            <span className='text-lg md:text-xl'>
              Починається перехід від родової до{' '}
              <span className='font-bold text-amber-300'>
                сусідської общини
              </span>
            </span>
          </div>
          <div className='flex items-start p-5 rounded-xl bg-gradient-to-r from-gray-700/40 to-gray-800/40 hover:from-amber-900/30 hover:to-amber-800/30 transition-all duration-300 group border border-gray-700/50 hover:border-amber-700/30'>
            <span className='inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-700 text-gray-900 rounded-lg text-sm font-bold mr-4 flex-shrink-0 shadow-md'>
              5
            </span>
            <span className='text-lg md:text-xl'>
              Скотарство відокремлюється від хліборобства. З'являються пастуші
              племена. Перехід від мотичного до рільного землеробства
            </span>
          </div>
          <div className='flex items-start p-5 rounded-xl bg-gradient-to-r from-gray-700/40 to-gray-800/40 hover:from-amber-900/30 hover:to-amber-800/30 transition-all duration-300 group border border-gray-700/50 hover:border-amber-700/30'>
            <span className='inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-700 text-gray-900 rounded-lg text-sm font-bold mr-4 flex-shrink-0 shadow-md'>
              6
            </span>
            <span className='text-lg md:text-xl'>
              Стався перший{' '}
              <span className='font-bold text-amber-300'>
                суспільний поділ праці
              </span>
              - скотарство відокремлюється від землеробства
            </span>
            <span className='font-bold text-amber-300'>!!!!!!!!!!</span>
          </div>
          <div className='flex items-start p-5 rounded-xl bg-gradient-to-r from-gray-700/40 to-gray-800/40 hover:from-amber-900/30 hover:to-amber-800/30 transition-all duration-300 group border border-gray-700/50 hover:border-amber-700/30'>
            <span className='inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-700 text-gray-900 rounded-lg text-sm font-bold mr-4 flex-shrink-0 shadow-md'>
              7
            </span>
            <span className='text-lg md:text-xl'>Перші транспорті засоби</span>
          </div>
        </div>
      </div>

      {/* //! Археологічні культури  */}
      <div className='bg-gray-800/50 rounded-2xl p-8 shadow-2xl border mt-5 border-amber-700/30 relative overflow-hidden'>
        <div className='flex items-center text-center justify-center mb-8'>
          <h1 className='font-bold text-5xl md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 relative inline-block'>
            <span className='absolute -inset-4 bg-amber-400 blur-xl opacity-20 rounded-full'></span>
            Археологічні культури
          </h1>
        </div>
        <div>
          <p className='text-2xl'>
            <span className='text-3xl font-bold text-amber-300'>
              Археологічна культура
            </span>{' '}
            - група подібних між собою археологічних пам'яток (за формами та
            оздобленням посуду, прикрасами,поховальними звичаями тощо),
            поширених на певній території в межах певного історичного часу.
          </p>
        </div>
      </div>
      {/* //! ТРИПІЛЬЦІ */}
      <div className='bg-gray-800/50 rounded-2xl mt-5 p-8 shadow-2xl border border-amber-700/30 relative overflow-hidden'>
        <div className='absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full -translate-y-16 translate-x-16'></div>
        <div className='absolute bottom-0 left-0 w-40 h-40 bg-amber-400/5 rounded-full translate-y-20 -translate-x-20'></div>

        <div className='flex items-center text-center justify-center mb-8'>
          <h1 className='font-bold text-5xl md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 relative inline-block'>
            <span className='absolute -inset-4 bg-amber-400 blur-xl opacity-20 rounded-full'></span>
            Трипільська культура
          </h1>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
          {/* Хронологічні межі */}
          <div className='flex items-start p-5 rounded-xl bg-gradient-to-r from-gray-700/40 to-gray-800/40 border border-gray-700/50'>
            <div className='w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0'>
              <i className='fas fa-clock text-gray-900 text-sm'></i>
            </div>
            <div>
              <p className='text-lg font-semibold text-amber-300 mb-2'>
                Хронологічні межі
              </p>
              <p className='text-xl text-amber-400'>IV-III тис. до н.е.</p>
            </div>
          </div>

          {/* Територія */}
          <div className='flex items-start p-5 rounded-xl bg-gradient-to-r from-gray-700/40 to-gray-800/40 border border-gray-700/50'>
            <div className='w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0'>
              <i className='fas fa-map-marker-alt text-gray-900 text-sm'></i>
            </div>
            <div>
              <p className='text-lg font-semibold text-amber-300 mb-2'>
                Територія
              </p>
              <p className='text-lg text-gray-300'>
                Правобережжя України, Середнє Подніпров'я
              </p>
            </div>
          </div>
        </div>

        {/* Господарство */}
        <div className='bg-gradient-to-r from-gray-700/40 to-gray-800/40 rounded-xl p-6 border border-gray-700/50'>
          <div className='flex items-center mb-6'>
            <div className='w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center mr-4'>
              <i className='fas fa-industry text-gray-900 text-sm'></i>
            </div>
            <h2 className='text-2xl font-semibold text-amber-400'>
              Господарство
            </h2>
          </div>

          <div className='space-y-4'>
            <div className='flex items-start'>
              <span className='w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center text-gray-900 font-bold mr-3 mt-1 text-sm'>
                1
              </span>
              <p className='text-lg text-gray-300'>
                З'явилася перша мідна металургія, проте переважали кам'яні
                знаряддя праці.
              </p>
            </div>

            <div className='flex items-start'>
              <span className='w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center text-gray-900 font-bold mr-3 mt-1 text-sm'>
                2
              </span>
              <p className='text-lg text-gray-300'>
                Виготовляли досконалий глиняний посуд (трипільска кераміка),
                який прикрашали орнаментами.
              </p>
            </div>

            <div className='bg-amber-900/30 p-4 rounded-lg border-l-4 border-amber-500 mt-6'>
              <p className='text-lg text-amber-300 mb-2'>
                <span className='font-bold'>Екстенсивний спосіб життя</span> -
                невміння відновлювати родючисть грунту - переселяються кожні 50
                років
              </p>
            </div>

            <div className='flex items-start mt-6'>
              <span className='w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center text-gray-900 font-bold mr-3 mt-1 text-sm'>
                3
              </span>
              <p className='text-lg text-gray-300'>
                <span className='font-semibold text-amber-300'>
                  Протоміста!
                </span>{' '}
                переважно двоповерхові житла
              </p>
            </div>
          </div>
        </div>

        {/* Место для изображений */}
        <div className='grid grid-cols-1 md:grid-cols-2  gap-6 mt-8'>
          <div className='bg-gray-700/50 rounded-xl p-4 text-center'>
            <img src='./assets/vase.jpg' alt='Трипільська кераміка' />
            <p className='text-gray-400 text-sm'>Трипільська кераміка</p>
          </div>

          <div className='bg-gray-700/50 rounded-xl p-4 text-center'>
            <img src='./assets/protomisto.avif' alt='Трипільські протоміста' />
            <p className='text-gray-400 text-sm'>Трипільські протоміста</p>
          </div>
          <div className='bg-gray-700/50 w-full rounded-xl p-4 text-center'>
            <img src='./assets/kartaTrip.jpg' alt='Карта' />
            <p className='text-gray-400 text-sm'>Карта розселення трипільців</p>
          </div>

          <div className='bg-gray-700/50 w-full rounded-xl p-4 text-center'>
            <img
              src='./assets/domik.jpg'
              alt='   Глиняна моделька трипільського храму/будиночка'
            />
            <p className='text-gray-400 text-sm'>
              Глиняна моделька трипільського храму/будиночка
            </p>
          </div>
        </div>
      </div>
      {/* //! Середньостогівська культура */}
      <div className='w-full  mx-auto px-4'>
        {/* Основной блок культуры */}
        <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-10 shadow-2xl border-2 border-amber-600 border-opacity-30 relative overflow-hidden mt-8'>
          {/* Декоративные элементы */}
          <div className='absolute top-0 left-0 w-32 h-32 bg-amber-500 rounded-full opacity-10 blur-3xl -translate-x-16 -translate-y-16'></div>
          <div className='absolute bottom-0 right-0 w-40 h-40 bg-amber-600 rounded-full opacity-10 blur-3xl translate-x-16 translate-y-16'></div>

          {/* Заголовок */}
          <div className='text-center mb-10 relative z-10'>
            <h1 className='font-bold text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 mb-4'>
              Середньостогівська культура
            </h1>
            <div className='w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full'></div>
          </div>

          {/* Хронология */}
          <div className='mb-8 text-center'>
            <p className='text-2xl text-amber-300 font-semibold mb-2'>
              Хронологічні межі:
              <span className='text-white ml-2'>V-IV тис. до н.е.</span>
            </p>
          </div>

          {/* Территория */}
          <div className='mb-8 bg-gray-700 bg-opacity-50 rounded-xl p-6 border border-amber-500 border-opacity-20'>
            <h2 className='text-2xl font-semibold text-amber-300 mb-4 flex items-center'>
              <span className='w-3 h-3 bg-amber-400 rounded-full mr-3'></span>
              Територія поширення
            </h2>
            <p className='text-xl text-gray-200'>
              Степове Подніпров'я, Приазов'я, басейн Сіверського Дінця
            </p>
          </div>

          {/* Господарство */}
          <div className='mb-8 bg-gray-700 bg-opacity-50 rounded-xl p-6 border border-amber-500 border-opacity-20'>
            <h2 className='text-2xl font-semibold text-amber-300 mb-4 flex items-center'>
              <span className='w-3 h-3 bg-amber-400 rounded-full mr-3'></span>
              Господарство
            </h2>
            <div className='space-y-3 text-xl text-gray-200'>
              <p className='flex items-start'>
                <span className='text-amber-400 mr-3 text-2xl'>•</span>
                <span>Скотарська археологічна культура</span>
              </p>
              <p className='flex items-start'>
                <span className='text-amber-400 mr-3 text-2xl'>•</span>
                <span>Напівкочовий спосіб життя</span>
              </p>
            </div>
          </div>

          {/* Религия и погребения */}
          <div className='mb-8 bg-gray-700 bg-opacity-50 rounded-xl p-6 border border-amber-500 border-opacity-20'>
            <h2 className='text-2xl font-semibold text-amber-300 mb-4 flex items-center'>
              <span className='w-3 h-3 bg-amber-400 rounded-full mr-3'></span>
              Вірування та поховання
            </h2>
            <div className='space-y-3 text-xl text-gray-200'>
              <p className='flex items-start'>
                <span className='text-amber-400 mr-3 text-2xl'>•</span>
                <span>Язичники</span>
              </p>
              <p className='flex items-start'>
                <span className='text-amber-400 mr-3 text-2xl'>•</span>
                <span>Померлих хоронили прямо в ямах</span>
              </p>
            </div>
          </div>
        </div>

        {/* Вывод */}
        <div className='bg-gradient-to-r from-amber-900 to-amber-800 rounded-2xl p-8 mt-8 border-2 border-amber-600 border-opacity-30'>
          <h2 className='text-3xl font-bold text-amber-200 text-center mb-6'>
            Висновок
          </h2>
          <div className='grid md:grid-cols-2 gap-6 text-xl text-gray-200'>
            <div className='text-center p-4 bg-amber-900 bg-opacity-30 rounded-xl border border-amber-500 border-opacity-20'>
              <h3 className='text-2xl font-semibold text-amber-300 mb-3'>
                Трипільці
              </h3>
              <p>Землероби, переважно на Правобережжі</p>
            </div>
            <div className='text-center p-4 bg-amber-900 bg-opacity-30 rounded-xl border border-amber-500 border-opacity-20'>
              <h3 className='text-2xl font-semibold text-amber-300 mb-3'>
                Середньостогівці
              </h3>
              <p>Скотарі, переважно на Лівобережжі</p>
            </div>
          </div>
        </div>
      </div>
      {/* //! Бронзовий вік  */}
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
                  document
                    .getElementById('kurgan-modal')
                    .classList.add('hidden')
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
      {/* //! Ранній залізний вік */}
      <div className='w-full max-w-4xl mx-auto px-4 py-8'>
        <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border-2 border-amber-600 border-opacity-30'>
          {/* Заголовок */}
          <div className='text-center mb-8'>
            <h1 className='text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500 mb-4'>
              Ранній залізний вік
            </h1>
            <p className='text-2xl text-amber-300 font-semibold'>
              (1 тис. до н.е.)
            </p>
          </div>

          {/* Технологические достижения */}
          <div className='bg-gray-700 bg-opacity-50 rounded-xl p-6 border border-amber-500 border-opacity-20 mb-6'>
            <h3 className='text-2xl font-semibold text-amber-300 mb-4 flex items-center'>
              <span className='w-3 h-3 bg-amber-400 rounded-full mr-3'></span>
              Технологічний прорив
            </h3>
            <p className='text-xl text-gray-200'>
              Люди навчилися плавити залізо, знаряддя з якого було міцнішим і
              гострішим
            </p>
          </div>

          {/* Разделение труда */}
          <div className='bg-gray-700 bg-opacity-50 rounded-xl p-6 border border-amber-500 border-opacity-20 mb-6'>
            <h3 className='text-2xl font-semibold text-amber-300 mb-4 flex items-center'>
              <span className='w-3 h-3 bg-amber-400 rounded-full mr-3'></span>
              Суспільний поділ праці
            </h3>
            <p className='text-xl text-gray-200 mb-3'>
              Зросла продуктивність праці
            </p>
            <div className='bg-amber-900 bg-opacity-30 rounded-lg p-4 border-l-4 border-amber-500'>
              <p className='text-lg text-amber-200'>
                <b>Ремесло</b> - дрібне виробництво готових виробів, що
                базується на ручній техніці без поділу праці - відокремилося від
                землеробства
              </p>
            </div>
          </div>

          {/* Экономическое развитие */}
          <div className='bg-gray-700 bg-opacity-50 rounded-xl p-6 border border-amber-500 border-opacity-20'>
            <h3 className='text-2xl font-semibold text-amber-300 mb-4 flex items-center'>
              <span className='w-3 h-3 bg-amber-400 rounded-full mr-3'></span>
              Економічний розвиток
            </h3>
            <p className='text-xl text-gray-200'>
              З'явилося виробництво товарів для обміну й продажу
            </p>
          </div>

          {/* Дополнительная информация */}
          <div className='mt-8 p-6 bg-amber-900 bg-opacity-20 rounded-xl border border-amber-600 border-opacity-30'>
            <h4 className='text-lg font-semibold text-amber-300 mb-3'>
              Наслідки розвитку металургії:
            </h4>
            <ul className='space-y-2 text-gray-200'>
              <li className='flex items-start'>
                <span className='text-amber-400 mr-2 text-lg'>•</span>
                <span>Покращення якості знарядь праці</span>
              </li>
              <li className='flex items-start'>
                <span className='text-amber-400 mr-2 text-lg'>•</span>
                <span>Розвиток спеціалізації в суспільстві</span>
              </li>
              <li className='flex items-start'>
                <span className='text-amber-400 mr-2 text-lg'>•</span>
                <span>Зростання продуктивності сільського господарства</span>
              </li>
              <li className='flex items-start'>
                <span className='text-amber-400 mr-2 text-lg'>•</span>
                <span>Поява товарно-грошових відносин</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* //! Кімірійці */}
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
                  <p className='text-lg text-gray-200'>
                    Були переможені скіфами
                  </p>
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
                  src='./assets/kimiriy.jpg'
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
      {/* //! Скіфи */}
      <div>
        <Skif />
      </div>
      {/* //! Сармати */}
      <div>
        <Sarmati />
      </div>
      {/* //! Колонія */}
      <div>
        <Kolonia />
      </div>
      {/* //! Переселення народів */}
      <div>
        <Slovani />
      </div>
      {/* //! Переселення слов'ян */}
      <div>
        <Pereselna />
      </div>
    </div>
  )
}
