export function Ivan () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-4 sm:py-8 px-3 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-blue-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-indigo-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-purple-600 rounded-full blur-3xl'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12 px-2'>
        {/* Главный заголовок */}
        <div className='w-full text-center mb-8 sm:mb-12 relative z-10 px-2'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-500'>
              Іван Виговський
            </span>
          </h1>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl text-indigo-300 font-bold mb-4 sm:mb-6'>
            Гетьман (1657-1659)
          </h2>
          <div className='w-32 sm:w-48 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full'></div>
        </div>

        {/* Основная информация о Виговском */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8'>
          {/* Портрет */}
          <div className='lg:col-span-1 flex justify-center'>
            <div className='p-4 sm:p-6 bg-slate-800/40 rounded-xl border-l-4 border-blue-400 backdrop-blur-sm'>
              <img
                src='../../../assets/Ruina/Ivan.jpg'
                alt='Іван Виговський'
                className='w-full max-w-xs sm:max-w-sm rounded-lg shadow-2xl'
              />
            </div>
          </div>

          {/* Описание деятельности */}
          <div className='lg:col-span-2 space-y-6'>
            <div className='p-4 sm:p-6 bg-slate-800/40 rounded-xl border-l-4 border-blue-400 backdrop-blur-sm'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Укріплював становище козацької старшини і православної шляхти,
                роздаючи землі, що призводило до наростання соціальної
                напруженості та невдоволення народу.
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-slate-800/40 rounded-xl border-l-4 border-indigo-400 backdrop-blur-sm'>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                <span className='font-bold text-indigo-300'>1658 р.</span> за
                допомогою кримських татар жорстоко придушив повстання
                полтавського полковника{' '}
                <span className='font-bold text-indigo-300 bg-indigo-900/40 px-2 py-1 rounded'>
                  М. Пушкаря
                </span>{' '}
                і кошового отамана{' '}
                <span className='font-bold text-indigo-300 bg-indigo-900/40 px-2 py-1 rounded'>
                  Я. Барабаша
                </span>
                , підбурюване Москвою.
                <span className='font-bold text-red-400'>
                  {' '}
                  М. Пушкар загинув, Я. Барабаш страчений.
                </span>
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-slate-800/40 rounded-xl border-l-4 border-purple-400 backdrop-blur-sm'>
              <p className='text-xl sm:text-2xl leading-relaxed text-center font-bold text-purple-300'>
                Підписав Гадяцький договір про перемир'я з Річчю Посполитою
              </p>
            </div>
          </div>
        </div>

        {/* Гадяцький договір */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-green-400 backdrop-blur-sm'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-green-300 text-center'>
            📜 Гадяцький договір 1658 р.
          </h1>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8'>
            <div className='space-y-6'>
              <div className='p-4 sm:p-6 bg-green-900/20 rounded-lg border-l-2 border-green-400'>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  Гетьманщина як{' '}
                  <span className='font-bold text-green-300'>
                    Велике князівство Руське (ВКР)
                  </span>{' '}
                  входить разом з Польщею та ВКЛ до Речі Посполитої як
                  рівноправна держава.
                </p>
              </div>

              <div className='p-4 sm:p-6 bg-green-900/20 rounded-lg border-l-2 border-green-400'>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  3 воєводства (Київське, Чернігівське, Брацлавське) - Велике
                  князівство Руське
                  <span className='block mt-3 font-bold text-green-300 bg-green-900/40 px-3 py-2 rounded'>
                    Федерація трьох самостійних держав
                  </span>
                  <span className='block mt-2 font-bold text-green-300 bg-green-900/40 px-3 py-2 rounded'>
                    Як рівний до рівних як вільний до вільних: Польща + Литва +
                    Україна
                  </span>
                </p>
              </div>

              <div className='p-4 sm:p-6 bg-green-900/20 rounded-lg border-l-2 border-green-400'>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  <span className='font-bold text-green-300'>Юрій Немирич</span>{' '}
                  - автор угоди
                </p>
              </div>
            </div>

            <div className='space-y-6'>
              <div className='p-4 sm:p-6 bg-green-900/20 rounded-lg border-l-2 border-green-400'>
                <h3 className='text-xl sm:text-2xl font-bold text-green-300 mb-3'>
                  Основні умови:
                </h3>
                <ul className='space-y-3 text-lg sm:text-xl'>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-green-400 rounded-full mt-2 mr-3'></span>
                    <span>Зрівняння православних з правами католиків</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-green-400 rounded-full mt-2 mr-3'></span>
                    <span>Створення університету в Києві</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-green-400 rounded-full mt-2 mr-3'></span>
                    <span>Гетьман з довічною владою київський воєвода</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-green-400 rounded-full mt-2 mr-3'></span>
                    <span>
                      Відновлення великого землеволодіння та кріпацтва
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-green-400 rounded-full mt-2 mr-3'></span>
                    <span>Скасування церковної унії</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-green-400 rounded-full mt-2 mr-3'></span>
                    <span>
                      Збройні сили ВКР: 30 тис. козаків та 10 тис. найманців
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Карта Гадяцького договора */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-blue-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 text-blue-300 text-center'>
            🗺️ Територія за Гадяцьким договором
          </h2>
          <div className='flex justify-center'>
            <div className='p-4 sm:p-6 bg-blue-900/20 rounded-lg border-l-2 border-blue-400 w-full max-w-4xl'>
              <img
                src='../../../assets/Ruina/image.png'
                alt='Мапа за Гадяцьким договором 1658 року'
                className='w-full h-220 sm:h-80 lg:h-220 object-cover rounded-lg shadow-2xl bg-blue-700'
              />
              <p className='text-xl sm:text-2xl text-blue-200 text-center mt-4 font-medium'>
                Територія Великого князівства Руського за Гадяцьким договором
              </p>
            </div>
          </div>
        </div>

        {/* Наслідки договору */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-red-300 text-center'>
            ⚔️ Наслідки Гадяцького договору
          </h2>

          <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
            <p className='text-xl sm:text-2xl leading-relaxed text-center font-bold text-red-300'>
              Московсько-українська війна 1658-1659 рр.
            </p>
            <p className='text-xl sm:text-2xl leading-relaxed text-center mt-3'>
              Договір викликав різку реакцію Московської держави та призвів до
              нової війни
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-6'>
            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg'>
              <p className='text-xl sm:text-2xl font-semibold text-red-300 mb-4 text-center'>
                🛑 Протидія Москви
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Московська держава не визнала договір
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-red-900/20 rounded-lg'>
              <p className='text-xl sm:text-2xl font-semibold text-red-300 mb-4 text-center'>
                ⚔️ Нова війна
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Початок московсько-української війни
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Разделитель внизу */}
      <div className='relative mt-12 sm:mt-16 py-6 sm:py-8 px-3 sm:px-6 lg:px-8'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-full border-t-2 border-blue-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-xl sm:text-2xl font-semibold text-blue-200 rounded-full border-2 border-blue-600/50 shadow-lg text-center'>
            Битва Під Конотопом
          </span>
        </div>
      </div>
    </div>
  )
}
