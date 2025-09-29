export function Culture () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-4 sm:py-8 px-3 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-red-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-amber-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-orange-600 rounded-full blur-3xl'></div>
      </div>

      {/* Заголовок страницы */}
      <div className='w-full max-w-7xl mx-auto text-center mb-8 sm:mb-12 relative z-10 px-2'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-red-400 to-red-500'>
            Культура та Архітектура
          </span>
        </h1>
        <h2 className='text-xl sm:text-2xl lg:text-3xl text-red-300 font-bold mb-4 sm:mb-6'>
          XIV-XVI століття
        </h2>
        <div className='w-32 sm:w-48 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto rounded-full'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-7xl mx-auto relative z-10 space-y-12 sm:space-y-16 px-2'>
        {/* Замки */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
          <h1 className='text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-amber-300 text-center'>
            Замки та Фортеці
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8'>
            <div className='bg-gradient-to-br from-amber-900 to-slate-800 rounded-xl p-4 sm:p-6 border-2 border-amber-500/30 shadow-lg'>
              <img
                src='../../../assets/UdilnaKnaz/Lutsk_castle_tower.jpg'
                alt='Верхній замок у Луцьку. Друга половина XIV-XV ст.'
                className='w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-md mb-4'
              />
              <p className='text-amber-200 text-center text-base sm:text-lg lg:text-xl'>
                Верхній замок у Луцьку
                <br />
                <span className='text-amber-300'>
                  Друга половина XIV-XV ст.
                </span>
              </p>
            </div>

            <div className='bg-gradient-to-br from-amber-900 to-slate-800 rounded-xl p-4 sm:p-6 border-2 border-amber-500/30 shadow-lg'>
              <img
                src='../../../assets/UdilnaKnaz/podil.jpg'
                alt='Камʼянець-Подільська фортеця. XIV-XVI ст.'
                className='w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-md mb-4'
              />
              <p className='text-amber-200 text-center text-base sm:text-lg lg:text-xl'>
                Камʼянець-Подільська фортеця
                <br />
                <span className='text-amber-300'>XIV-XVI ст.</span>
              </p>
            </div>

            <div className='bg-gradient-to-br from-amber-900 to-slate-800 rounded-xl p-4 sm:p-6 border-2 border-amber-500/30 shadow-lg'>
              <img
                src='../../../assets/UdilnaKnaz/hotin.jpg'
                alt='Хотинська фортеця XIII-XVI ст.'
                className='w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-md mb-4'
              />
              <p className='text-amber-200 text-center text-base sm:text-lg lg:text-xl'>
                Хотинська фортеця
                <br />
                <span className='text-amber-300'>XIII-XVI ст.</span>
              </p>
            </div>

            <div className='bg-gradient-to-br from-amber-900 to-slate-800 rounded-xl p-4 sm:p-6 border-2 border-amber-500/30 shadow-lg'>
              <img
                src='../../../assets/UdilnaKnaz/palanok.jpeg'
                alt='Замок Паланок (Мукачівський замок). XIV-XVII ст.'
                className='w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-md mb-4'
              />
              <p className='text-amber-200 text-center text-base sm:text-lg lg:text-xl'>
                Замок Паланок
                <br />
                <span className='text-amber-300'>XIV-XVII ст.</span>
              </p>
            </div>

            <div className='bg-gradient-to-br from-amber-900 to-slate-800 rounded-xl p-4 sm:p-6 border-2 border-amber-500/30 shadow-lg'>
              <img
                src='../../../assets/UdilnaKnaz/sydak.jpg'
                alt='Генуезька фортеця в Судаку. 1371-1469 роки'
                className='w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-md mb-4'
              />
              <p className='text-amber-200 text-center text-base sm:text-lg lg:text-xl'>
                Генуезька фортеця в Судаку
                <br />
                <span className='text-amber-300'>1371-1469 роки</span>
              </p>
            </div>

            <div className='bg-gradient-to-br from-amber-900 to-slate-800 rounded-xl p-4 sm:p-6 border-2 border-amber-500/30 shadow-lg'>
              <img
                src='../../../assets/UdilnaKnaz/bah.jpg'
                alt='Ханський палац у Бахчисараї. 1532-1764 роки'
                className='w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-md mb-4'
              />
              <p className='text-amber-200 text-center text-base sm:text-lg lg:text-xl'>
                Ханський палац у Бахчисараї
                <br />
                <span className='text-amber-300'>1532-1764 роки</span>
              </p>
            </div>
          </div>
        </div>

        {/* Религиозные сооружения */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <h1 className='text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-red-300 text-center'>
            Релігійні Споруди
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8'>
            <div className='bg-gradient-to-br from-red-900 to-slate-800 rounded-xl p-4 sm:p-6 border-2 border-red-500/30 shadow-lg'>
              <img
                src='../../../assets/UdilnaKnaz/kostel.jpeg'
                alt='Костел святого Варфоломія в Дрогобичі. 1392-XV ст.'
                className='w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-md mb-4'
              />
              <p className='text-red-200 text-center text-base sm:text-lg lg:text-xl'>
                Костел святого Варфоломія в Дрогобичі
                <br />
                <span className='text-red-300'>1392-XV ст.</span>
              </p>
            </div>

            <div className='bg-gradient-to-br from-red-900 to-slate-800 rounded-xl p-4 sm:p-6 border-2 border-red-500/30 shadow-lg'>
              <img
                src='../../../assets/UdilnaKnaz/virmen.jpg'
                alt='Вірменський собор у Львові. 1363р.'
                className='w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-md mb-4'
              />
              <p className='text-red-200 text-center text-base sm:text-lg lg:text-xl'>
                Вірменський собор у Львові
                <br />
                <span className='text-red-300'>1363 р.</span>
              </p>
            </div>

            <div className='bg-gradient-to-br from-red-900 to-slate-800 rounded-xl p-4 sm:p-6 border-2 border-red-500/30 shadow-lg'>
              <img
                src='../../../assets/UdilnaKnaz/dusha.jpg'
                alt='Церква Зішестя Святого Духа в Потеличі 1502 р.'
                className='w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-md mb-4'
              />
              <p className='text-red-200 text-center text-base sm:text-lg lg:text-xl'>
                Церква Зішестя Святого Духа в Потеличі
                <br />
                <span className='text-red-300'>1502 р.</span>
              </p>
            </div>

            <div className='bg-gradient-to-br from-red-900 to-slate-800 rounded-xl p-4 sm:p-6 border-2 border-red-500/30 shadow-lg md:col-span-2 xl:col-span-3'>
              <img
                src='../../../assets/UdilnaKnaz/fort.jpg'
                alt='Покровська церква-фортеця в с. Сутківцях (Збудована через постійну небезпеку спустошливих татарських набігів)'
                className='w-full h-64 sm:h-80 lg:h-120 object-cover rounded-lg shadow-md mb-4'
              />
              <p className='text-red-200 text-center text-base sm:text-lg lg:text-xl'>
                Покровська церква-фортеця в с. Сутківцях
                <br />
                <span className='text-red-300 italic'>
                  Збудована через постійну небезпеку спустошливих татарських
                  набігів
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Иконы */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-orange-400 backdrop-blur-sm'>
          <h1 className='text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-orange-300 text-center'>
            Ікони
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8'>
            <div className='bg-gradient-to-br from-orange-900 to-slate-800 rounded-xl p-4 sm:p-6 border-2 border-orange-500/30 shadow-lg'>
              <img
                src='../../../assets/UdilnaKnaz/pidg.jpg'
                alt='Ікона Богородиці з пророками з церкви у Підгородцях'
                className='w-full h-72 sm:h-96 lg:h-120 object-cover rounded-lg shadow-md mb-4'
              />
              <p className='text-orange-200 text-center text-base sm:text-lg lg:text-xl'>
                Ікона Богородиці з пророками
                <br />
                <span className='text-orange-300'>з церкви у Підгородцях</span>
              </p>
            </div>

            <div className='bg-gradient-to-br from-orange-900 to-slate-800 rounded-xl p-4 sm:p-6 border-2 border-orange-500/30 shadow-lg'>
              <img
                src='../../../assets/UdilnaKnaz/uspina.jpg'
                alt='Ікона "Успіння Богородиці". 1547р. О. Горошкович'
                className='w-full h-72 sm:h-96 lg:h-120 object-cover rounded-lg shadow-md mb-4'
              />
              <p className='text-orange-200 text-center text-base sm:text-lg lg:text-xl'>
                Ікона "Успіння Богородиці"
                <br />
                <span className='text-orange-300'>1547 р. О. Горошкович</span>
              </p>
            </div>

            <div className='bg-gradient-to-br from-orange-900 to-slate-800 rounded-xl p-4 sm:p-6 border-2 border-orange-500/30 shadow-lg'>
              <img
                src='../../../assets/UdilnaKnaz/ura.jpg'
                alt='Ікона святого Юрія Змієборця із с. Станилі поблизу Дрогобича'
                className='w-full h-72 sm:h-96 lg:h-120 object-cover rounded-lg shadow-md mb-4'
              />
              <p className='text-orange-200 text-center text-base sm:text-lg lg:text-xl'>
                Ікона святого Юрія Змієборця
                <br />
                <span className='text-orange-300'>
                  із с. Станилі поблизу Дрогобича
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Разделитель внизу */}
    </div>
  )
}
