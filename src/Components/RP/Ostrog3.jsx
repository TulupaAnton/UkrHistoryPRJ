export function Ostrog3 () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-4 sm:py-8 px-3 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-blue-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-purple-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-indigo-600 rounded-full blur-3xl'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12 px-2'>
        {/* Князь Острожский */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-blue-400 backdrop-blur-sm'>
          <div className='text-center mb-6'>
            <h1 className='text-3xl sm:text-4xl font-bold mb-3 text-blue-300'>
              Князь Василь-Костянтин Острозький
            </h1>
            <span className='text-xl sm:text-2xl text-amber-300 font-semibold bg-amber-900/30 px-4 py-2 rounded-full'>
              Некоронований король Русі
            </span>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start'>
            <div className='space-y-4'>
              <div className='p-4 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
                <p className='text-base sm:text-lg leading-relaxed'>
                  Київський воєвода та володар українського прикордоння.
                </p>
              </div>

              <div className='p-4 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
                <p className='text-base sm:text-lg leading-relaxed'>
                  Засновник Острозького культурно-освітнього осередку та{' '}
                  <span className='font-bold text-blue-300'>
                    Острозької академії
                  </span>{' '}
                  - перша вища слов'яно-греколатинська школа в Україні (ректор -
                  Герасим Смотрицький){' '}
                  <span className='font-bold text-amber-300'>
                    "Сім вільних наук"
                  </span>
                </p>
              </div>

              <div className='p-4 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
                <p className='text-base sm:text-lg leading-relaxed'>
                  Ініціатор друку повної Біблії церковнослов'янською мовою
                </p>
              </div>
            </div>

            {/* Изображение Острожского */}
            <div className='p-4 bg-slate-700/30 rounded-lg border-2 border-blue-400/30 flex flex-col items-center justify-center min-h-[250px]'>
              <p className='text-blue-300 text-center text-xl'>
                Князь Василь-Костянтин Острозький
              </p>
              <p className='text-gray-400 text-xs text-center mt-2'>
                <img src='../../../assets/RP/Ostrog.jpg' alt='' />
              </p>
            </div>
          </div>
        </div>

        {/* Братский рух */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-purple-400 backdrop-blur-sm'>
          <h1 className='text-2xl sm:text-3xl font-bold mb-6 text-purple-300 text-center'>
            Братський рух
          </h1>

          <div className='space-y-6'>
            <div className='p-4 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-purple-300'>Братства</span> -
                національно-релігійні громадські об'єднання при православних
                церквах
              </p>
            </div>

            <div className='p-4 bg-purple-900/20 rounded-lg border-l-2 border-purple-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-purple-300'>1586 р.</span> -
                утворення першої братської слов'яно-греколатинської школи у м.
                Львів (Львівське успенське братство. Домоглося ставропігії)
                (автономії).
              </p>
            </div>
          </div>
        </div>

        {/* Деятельность братств */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-green-400 backdrop-blur-sm'>
          <h1 className='text-2xl sm:text-3xl font-bold mb-6 text-green-300 text-center'>
            Діяльність братств
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
            <div className='p-4 bg-green-900/20 rounded-lg border-l-2 border-green-400'>
              <p className='text-base sm:text-lg text-center'>Доброчинність</p>
            </div>

            <div className='p-4 bg-green-900/20 rounded-lg border-l-2 border-green-400'>
              <p className='text-base sm:text-lg text-center'>
                Культурно-освітня діяльність (бібліотеки, друкарні, школи)
              </p>
            </div>

            <div className='p-4 bg-green-900/20 rounded-lg border-l-2 border-green-400'>
              <p className='text-base sm:text-lg text-center'>
                Братські школи давали середню освіту
              </p>
            </div>

            <div className='p-4 bg-green-900/20 rounded-lg border-l-2 border-green-400 md:col-span-2 lg:col-span-1'>
              <p className='text-base sm:text-lg text-center'>
                Прагнули поліпшити становище православної церкви
              </p>
            </div>

            <div className='p-4 bg-green-900/20 rounded-lg border-l-2 border-green-400 md:col-span-2 lg:col-span-2'>
              <p className='text-base sm:text-lg text-center'>
                Хотіли бачити церкву "дешевою" та загальнодоступною
              </p>
            </div>
          </div>
        </div>

        {/* Положение православной церкви и уния */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <h1 className='text-2xl sm:text-3xl font-bold mb-6 text-red-300 text-center'>
            Становище православної церкви. Унія
          </h1>

          <div className='space-y-6'>
            <div className='p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <h2 className='text-xl font-semibold text-red-300 mb-4 text-center'>
                Мотиви/причини
              </h2>

              <div className='space-y-3'>
                <p className='text-base sm:text-lg leading-relaxed'>
                  • Українці прагнули рівності у правах української та
                  православної церков
                </p>
                <p className='text-base sm:text-lg leading-relaxed'>
                  • Проблема підпорядкування Української православної церкви
                  (зазіхання Московського патріархату)
                </p>
                <p className='text-base sm:text-lg leading-relaxed'>
                  • Можливість відлучити братства від церковних справ
                </p>
                <p className='text-base sm:text-lg leading-relaxed'>
                  • Поляки тлумачили об'єднання як крок до окатоличення
                </p>
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='p-4 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
                <h3 className='text-lg font-semibold text-amber-300 mb-3'>
                  Прихильники унії:
                </h3>
                <p className='text-base sm:text-lg'>
                  Гедеон Балабан, Михайло Рогоза, Іпатій Потій{' '}
                  <span className='font-bold text-amber-300'>
                    Посланець до Папи
                  </span>
                </p>
              </div>

              <div className='p-4 bg-blue-900/20 rounded-lg border-l-2 border-blue-400'>
                <h3 className='text-lg font-semibold text-blue-300 mb-3'>
                  Противники унії:
                </h3>
                <p className='text-base sm:text-lg'>
                  Василь-Костянтин Острозький, Герасим Смотрицький, Іван
                  Вишенський
                </p>
              </div>
            </div>

            <div className='p-4 bg-red-800/30 rounded-lg border-2 border-red-500/50'>
              <p className='text-base sm:text-lg text-red-200 text-center font-semibold'>
                *Спойлер* Українська православна церква опинилась поза законом
              </p>
            </div>
          </div>
        </div>

        {/* Берестейская уния */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-indigo-400 backdrop-blur-sm'>
          <div className='text-center mb-6'>
            <h1 className='text-3xl sm:text-4xl font-bold mb-3 text-indigo-300'>
              Берестейська унія 1596 р.
            </h1>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* Условия */}
            <div className='space-y-4'>
              <h2 className='text-2xl font-bold text-indigo-300 text-center mb-4'>
                Умови
              </h2>

              <div className='space-y-3'>
                <div className='p-3 bg-indigo-900/20 rounded-lg border-l-2 border-indigo-400'>
                  <p className='text-base sm:text-lg'>
                    Підпорядкування Папі Римському
                  </p>
                </div>
                <div className='p-3 bg-indigo-900/20 rounded-lg border-l-2 border-indigo-400'>
                  <p className='text-base sm:text-lg'>
                    Греко-католицьке духівництво звільнялося від сплати податків
                  </p>
                </div>
                <div className='p-3 bg-indigo-900/20 rounded-lg border-l-2 border-indigo-400'>
                  <p className='text-base sm:text-lg'>
                    Уніатська шляхта на рівні з католицькою могла претендувати
                    на держ. посади
                  </p>
                </div>
                <div className='p-3 bg-indigo-900/20 rounded-lg border-l-2 border-indigo-400'>
                  <p className='text-base sm:text-lg'>
                    Церковні обряди залишались православними, а мова
                    богослужіння - церковнослов'янська
                  </p>
                </div>
                <div className='p-3 bg-indigo-900/20 rounded-lg border-l-2 border-indigo-400'>
                  <p className='text-base sm:text-lg'>
                    Визнано засади/догмати католицької церкви
                  </p>
                </div>
              </div>
            </div>

            {/* Последствия */}
            <div className='space-y-4'>
              <h2 className='text-2xl font-bold text-red-300 text-center mb-4'>
                Наслідки
              </h2>

              <div className='space-y-3'>
                <div className='p-3 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
                  <p className='text-base sm:text-lg'>
                    Об'єднання церков не відбулось. Утворилась третя -
                    греко-католицька (уніатська)
                  </p>
                </div>
                <div className='p-3 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
                  <p className='text-base sm:text-lg'>
                    Більші утиски православних. Ліквідовано православну
                    ієрархію. Уніатська так і не набула статусу рівноправної з
                    католицькою
                  </p>
                </div>
                <div className='p-3 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
                  <p className='text-base sm:text-lg'>
                    Частина шляхти, козацтво та селянство дотримувалися
                    православ'я та боролися за нього
                  </p>
                </div>
                <div className='p-3 bg-green-900/20 rounded-lg border-l-2 border-green-400'>
                  <p className='text-base sm:text-lg'>
                    Згодом УГКЦ стала оплотом українства проти полонізації
                  </p>
                </div>
              </div>
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
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold text-blue-200 rounded-full border-2 border-blue-600/50 shadow-lg text-center'>
            Культура
          </span>
        </div>
      </div>
    </div>
  )
}
