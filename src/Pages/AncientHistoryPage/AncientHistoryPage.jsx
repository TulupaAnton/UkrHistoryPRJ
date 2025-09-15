import React, { useState } from 'react'
import { TooltipImage } from '../../store/TooltipImage'
import { Skif } from '../../Components/AncientHistory/Skif/Skif'
import { Sarmati } from '../../Components/AncientHistory/Sarmari/Sarmari'
import { Kolonia } from '../../Components/AncientHistory/Kolonia/Kolonia'
import { Slovani } from '../../Components/AncientHistory/Slovani/Slovani'
import { Pereselna } from '../../Components/AncientHistory/Pereselena/Pereselena'
import { Union } from '../../Components/AncientHistory/Union/Union'
import { Kimiriy } from '../../Components/AncientHistory/Kimiriy/Kimiriy'
import { Iron } from '../../Components/AncientHistory/IronCentury/Iron'
import { Bronze } from '../../Components/AncientHistory/BronzeCentr/Bronze'
import { Serednostog } from '../../Components/AncientHistory/Serednestog/SeredneStog'
import { Tripilla } from '../../Components/AncientHistory/Tripilla/Tripilla'
import { ArhoCult } from '../../Components/AncientHistory/ArhoCult/ArhoCult'
import { Eneolit } from '../../Components/AncientHistory/Eneolit/Eneolit'
import { Stoyanki } from '../../Components/AncientHistory/Stoyanki/Stoyanki'
import { Neolit } from '../../Components/AncientHistory/Neolit/Neoilit'
import { Mesolit } from '../../Components/AncientHistory/Mesolit/Mesolit'
import { Midle } from '../../Components/AncientHistory/Paleolit/Midle'
import { Late } from '../../Components/AncientHistory/Paleolit/Late'
import { Early } from '../../Components/AncientHistory/Paleolit/Early'

import { BubbleMenu } from '../../Components/BubbleMenu/BubbleMenu'

export function AncientHistoryPage () {
  const [activePeriod, setActivePeriod] = useState(0)
  const [activeSubPeriod, setActiveSubPeriod] = useState(0)

  return (
    <div className='relative'>
      <BubbleMenu />
      <div className='min-h-screen bg-gradient-to-b mt-5 from-gray-900 via-gray-800 to-gray-900 text-gray-100 flex flex-col relative overflow-hidden'>
        {/* Декоративные элементы фона */}
        <div className='absolute top-0 left-0 w-full h-full opacity-10'>
          <div className='absolute top-10% left-5% w-72 h-72 bg-amber-400 rounded-full blur-3xl'></div>
          <div className='absolute bottom-10% right-5% w-96 h-96 bg-blue-500 rounded-full blur-3xl'></div>
          <div className='absolute top-50% left-30% w-64 h-64 bg-green-400 rounded-full blur-3xl'></div>
        </div>
        {/* Header Section */}
        <div
          id='header'
          className='w-full py-12 px-4 sm:px-6 lg:px-8 text-center relative z-10'
        >
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
        <div
          id='main-periods'
          className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10'
        >
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
        <div
          id='stone-age'
          className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center relative z-10'
        >
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
            <div
              id='paleolithic'
              className='font-six bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border-t-4 border-blue-500 overflow-hidden'
            >
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
                {/* //!Early Paleolithic */}
                <div id='paleolithic-early'>
                  <Early />
                </div>
                {/* //!Middle Paleolithic */}
                <div id='paleolithic-middle'>
                  <Midle />
                </div>
                {/*//! Late Paleolithic */}
                <div id='paleolithic-late'>
                  <Late />
                </div>
              </div>
            </div>
            {/* //!Mesolithic */}
            <div id='mesolithic'>
              <Mesolit />
            </div>
            {/* //!Neolithic */}
            <div id='neolithic'>
              <Neolit />
            </div>
          </div>
        </div>
        {/* //!СТОЯНКИ */}
        <div id='stoyanki'>
          <Stoyanki />
        </div>
        {/*//! Enolit */}
        <div id='eneolit'>
          <Eneolit />
        </div>
        {/* //! Археологічні культури  */}
        <div id='arho-cult'>
          <ArhoCult />
        </div>
        {/* //! ТРИПІЛЬЦІ */}
        <div id='tripilla'>
          <Tripilla />
        </div>
        {/* //! Середньостогівська культура */}
        <div id='serednostog'>
          <Serednostog />
        </div>
        {/* //! Бронзовий вік  */}
        <div id='bronze'>
          <Bronze />
        </div>
        {/* //! Ранній залізний вік */}
        <div id='iron'>
          <Iron />
        </div>
        {/* //! Кімірійці */}
        <div id='kimiriy'>
          <Kimiriy />
        </div>
        {/* //! Скіфи */}
        <div id='skif'>
          <Skif />
        </div>
        {/* //! Сармати */}
        <div id='sarmati'>
          <Sarmati />
        </div>
        {/* //! Колонія */}
        <div id='kolonia'>
          <Kolonia />
        </div>
        {/* //! Переселення народів */}
        <div id='slovani'>
          <Slovani />
        </div>
        {/* //! Переселення слов'ян */}
        <div id='pereselna'>
          <Pereselna />
        </div>
        {/* //! Слов'янські племена */}
        <div id='union'>
          <Union />
        </div>
      </div>
    </div>
  )
}
