export function Zbor () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-4 sm:py-8 px-3 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-purple-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-indigo-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-violet-600 rounded-full blur-3xl'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12 px-2'>
        {/* Главный заголовок */}
        <div className='w-full text-center mb-8 sm:mb-12 relative z-10 px-2'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-violet-400 to-indigo-500'>
              Зборівський трактат
            </span>
          </h1>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl text-violet-300 font-bold mb-4 sm:mb-6'>
            8 серпня 1649 року
          </h2>
          <div className='w-32 sm:w-48 h-1 bg-gradient-to-r from-purple-400 to-indigo-600 mx-auto rounded-full'></div>
        </div>

        {/* Условия трактата */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-purple-400 backdrop-blur-sm'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-purple-300 text-center'>
            📜 Умови Зборівського трактату
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
            <div className='space-y-4'>
              <div className='p-4 sm:p-6 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  <span className='font-bold text-purple-300'>1.</span> Влада
                  гетьмана поширювалася на{' '}
                  <span className='font-bold text-purple-300'>
                    Київське, Чернігівське та Брацлавське воєводства
                  </span>
                </p>
              </div>

              <div className='p-4 sm:p-6 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  <span className='font-bold text-purple-300'>2.</span> Реєстр
                  становив{' '}
                  <span className='font-bold text-purple-300'>
                    40 тис. козаків
                  </span>
                </p>
              </div>

              <div className='p-4 sm:p-6 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  <span className='font-bold text-purple-300'>3.</span> Державні
                  посади в Гетьманщині мали обіймати{' '}
                  <span className='font-bold text-purple-300'>
                    тільки українці
                  </span>
                </p>
              </div>
            </div>

            <div className='space-y-4'>
              <div className='p-4 sm:p-6 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  <span className='font-bold text-purple-300'>4.</span>{' '}
                  Повстанцям було гарантовано{' '}
                  <span className='font-bold text-purple-300'>
                    повну амністію
                  </span>
                </p>
              </div>

              <div className='p-4 sm:p-6 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  <span className='font-bold text-purple-300'>5.</span> Питання
                  про долю унії та церковне майно мало бути винесене на{' '}
                  <span className='font-bold text-purple-300'>
                    найближчий сейм
                  </span>
                </p>
              </div>

              <div className='p-4 sm:p-6 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  <span className='font-bold text-purple-300'>6.</span>{' '}
                  <span className='font-bold text-purple-300'>
                    Євреї та Єзуїти
                  </span>{' '}
                  повинні були залишити Україну
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Адам Кисіль */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-indigo-400 backdrop-blur-sm'>
          <div className='flex flex-col lg:flex-row gap-6 sm:gap-8 items-center'>
            <div className='lg:w-2/3'>
              <h2 className='text-2xl sm:text-3xl font-bold text-indigo-300 mb-4'>
                Постійним представником РП у переговорах був{' '}
                <span className='font-bold text-indigo-200 bg-indigo-900/40 px-3 py-1 rounded'>
                  Адам Кисіль
                </span>
              </h2>
              <div className='p-4 sm:p-6 bg-indigo-900/20 rounded-lg border-l-2 border-indigo-400'>
                <p className='text-xl sm:text-2xl leading-relaxed'>
                  Адам Кисіль — політичний і державний діяч РП. Один з чотирьох
                  православних сенаторів напередодні повстання Б. Хмельницького,
                  значний меценат православної культури
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Карта территории */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-violet-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 text-violet-300 text-center'>
            🗺️ Територія України після Зборівського договору
          </h2>
          <div className='flex justify-center'>
            <div className='p-4 sm:p-6 bg-violet-900/20 rounded-lg border-l-2 border-violet-400 w-full max-w-5xl'>
              <img
                src='../../../assets/NVV/image.png'
                alt='Територія України після Зборівського договору'
                className='w-full h-96 sm:h-[28rem] lg:h-[36rem] object-cover rounded-lg shadow-2xl'
              />
              <p className='text-2xl sm:text-3xl text-violet-200 text-center mt-6 font-medium'>
                Територія України після Зборівського договору 1649 року
              </p>
            </div>
          </div>
        </div>

        {/* Результаты */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-purple-400 backdrop-blur-sm'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-purple-300 text-center'>
            📊 Результати укладення
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
            <div className='p-4 sm:p-6 bg-purple-900/20 rounded-lg text-center'>
              <p className='text-2xl sm:text-3xl font-bold text-purple-300 mb-4'>
                ⚠️ Незадоволені сторони
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Ані Україна, ані Річ Посполита не були задоволені договором
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-purple-900/20 rounded-lg text-center'>
              <p className='text-2xl sm:text-3xl font-bold text-purple-300 mb-4'>
                🏛️ Державність
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed'>
                Створено умови для формування української державності
              </p>
            </div>
          </div>
        </div>

        {/* Цитаты */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-indigo-400 backdrop-blur-sm'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-indigo-300 text-center'>
            💬 Історичні цитати
          </h1>

          <div className='space-y-6'>
            <div className='p-4 sm:p-6 bg-indigo-900/20 rounded-lg border-l-4 border-indigo-400'>
              <p className='text-xl sm:text-2xl leading-relaxed italic text-indigo-200'>
                «Його королівська величність буде далі жалувати посади
                громадянам шляхетського стану в Київському, Брацлавському та
                Чернігівському воєводствах. Чигирин має назавжди залишитися при
                булаві Війська Запорозького...»
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-indigo-900/20 rounded-lg border-l-4 border-indigo-400'>
              <p className='text-xl sm:text-2xl leading-relaxed italic text-indigo-200'>
                «...де його королівська милість дозволяє мати сорок тисяч
                Війська Запорозького, укладення реєстру козаків довіряє
                гетьманові Війська Запорозького, а посади всілякі обіцяє
                роздавати тут обивателям віри православної грецької...»
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-indigo-900/20 rounded-lg border-l-4 border-indigo-400'>
              <p className='text-xl sm:text-2xl leading-relaxed italic text-indigo-200'>
                «Правда, що я лихий, малий чоловік, але мені то Бог дав, що я
                есть єдиновладцем самодержцем руським! Виб'ю з лядської неволі
                руський народ увесь! Перше я за свою шкоду кривду воював тепер
                буду воювати за нашу православну віру! За границю на війну не
                піду. Шаблі на Турків і Татар не підійму! Досить маю на Україні.
                Поділлі і Волині. Тепер досить достатку пожитку в землі й
                князівстві моїм по Львів, по Холм Галич...»
              </p>
            </div>
          </div>
        </div>

        {/* Историческое значение */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-violet-400 backdrop-blur-sm'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-violet-300 text-center'>
            🎯 Історичне значення
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
            <div className='p-4 sm:p-6 bg-violet-900/20 rounded-lg'>
              <p className='text-xl sm:text-2xl font-semibold text-violet-300 mb-4 text-center'>
                📜 Перший офіційний договір
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Перший офіційний договір між козаками та Річчю Посполитою
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-violet-900/20 rounded-lg'>
              <p className='text-xl sm:text-2xl font-semibold text-violet-300 mb-4 text-center'>
                🏛️ Визнання автономії
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Визнання автономії козацької держави
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-violet-900/20 rounded-lg'>
              <p className='text-xl sm:text-2xl font-semibold text-violet-300 mb-4 text-center'>
                ⚔️ Тимчасовий мир
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Тимчасове припинення воєнних дій
              </p>
            </div>

            <div className='p-4 sm:p-6 bg-violet-900/20 rounded-lg'>
              <p className='text-xl sm:text-2xl font-semibold text-violet-300 mb-4 text-center'>
                🌍 Міжнародне визнання
              </p>
              <p className='text-xl sm:text-2xl leading-relaxed text-center'>
                Міжнародне визнання козацької держави
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Разделитель внизу */}
      <div className='relative mt-12 sm:mt-16 py-6 sm:py-8 px-3 sm:px-6 lg:px-8'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-full border-t-2 border-purple-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-xl sm:text-2xl font-semibold text-purple-200 rounded-full border-2 border-purple-600/50 shadow-lg text-center'>
            Зборівський трактат 1649 року
          </span>
        </div>
      </div>
    </div>
  )
}
