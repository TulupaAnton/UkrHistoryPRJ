export function Formatting () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-amber-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-emerald-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-blue-600 rounded-full blur-3xl'></div>
      </div>

      {/* Заголовок страницы */}
      <div className='w-full max-w-6xl mx-auto text-center mb-12 relative z-10'>
        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500'>
            Галицько-Волинська держава
          </span>
        </h1>
        <div className='w-64 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-8'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-6xl mx-auto relative z-10 space-y-12'>
        {/* Первый блок - Утворення держави */}
        <div className='p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
          <h1 className='text-3xl font-bold mb-6 text-amber-300'>
            Утворення Галицько-Волинської держави
          </h1>
          <h2 className='text-2xl font-semibold mb-6 text-amber-200'>
            Особливості Галицького і Волинського князівств
          </h2>

          <div className='space-y-4'>
            <div className='flex items-start p-4 bg-slate-700/40 rounded-lg'>
              <span className='text-amber-400 mr-3 mt-1 text-xl'>•</span>
              <p className='text-lg leading-relaxed'>
                віддаленість від Києва і, як наслідок, обмеження впливу
                центральної влади
              </p>
            </div>

            <div className='flex items-start p-4 bg-slate-700/40 rounded-lg'>
              <span className='text-amber-400 mr-3 mt-1 text-xl'>•</span>
              <p className='text-lg leading-relaxed'>
                розташування на перехресті торгових шляхів
              </p>
            </div>

            <div className='flex items-start p-4 bg-slate-700/40 rounded-lg'>
              <span className='text-amber-400 mr-3 mt-1 text-xl'>•</span>
              <p className='text-lg leading-relaxed'>
                великі поклади солі, яка стала важливим експортним товаром і
                чинником економічного піднесення
              </p>
            </div>

            <div className='flex items-start p-4 bg-slate-700/40 rounded-lg'>
              <span className='text-amber-400 mr-3 mt-1 text-xl'>•</span>
              <p className='text-lg leading-relaxed'>
                віддаленість від кордону зі Степом, що захищало від нападів
                кочовиків
              </p>
            </div>

            <div className='flex items-start p-4 bg-slate-700/40 rounded-lg'>
              <span className='text-amber-400 mr-3 mt-1 text-xl'>•</span>
              <p className='text-lg leading-relaxed'>
                потреба в об'єднанні для боротьби з поляками та угорцями,
                пізніше — з монголо-татарами
              </p>
            </div>
          </div>
        </div>

        {/* Второй блок - Ярослав Осмомисл */}
        <div className='p-8 bg-slate-800/40 rounded-xl border-l-4 border-blue-400 backdrop-blur-sm'>
          <h1 className='text-3xl font-bold mb-6 text-blue-300'>
            Ярослав Осмомисл
          </h1>

          <div className='space-y-6'>
            <div className='p-4 bg-slate-700/40 rounded-lg'>
              <p className='text-lg leading-relaxed'>
                <span className='font-bold text-blue-300 text-xl'>
                  Галицький князь у 1153—1187 роках
                </span>
                , за правління якого Галицьке князівство досягло найбільшої
                могутності
              </p>
            </div>

            <div className='p-4 bg-blue-900/30 rounded-lg border-l-2 border-blue-400'>
              <blockquote className='text-lg italic leading-relaxed'>
                Ярослав Осмомисл згадується у «Слові о полку Ігоревім», що він
                «підпер гори угорські залізними військами...»
              </blockquote>
            </div>

            <div className='p-4 bg-slate-700/40 rounded-lg'>
              <p className='text-lg leading-relaxed'>
                Прозвище{' '}
                <span className='font-bold text-blue-300 text-xl'>
                  «Осмомисл»
                </span>{' '}
                дістав за свою мудрість та освіченість
              </p>
            </div>
          </div>
        </div>

        {/* Третий блок - Передумови об'єднання */}
        <div className='p-8 bg-slate-800/40 rounded-xl border-l-4 border-emerald-400 backdrop-blur-sm'>
          <h1 className='text-3xl font-bold mb-6 text-emerald-300'>
            Передумови об'єднання Галицького і Волинського князівств
          </h1>

          <div className='grid md:grid-cols-2 gap-6'>
            <div className='p-4 bg-emerald-900/30 rounded-lg border-l-2 border-emerald-400'>
              <p className='text-lg leading-relaxed font-medium'>
                Спільна боротьба з поляками та угорцями
              </p>
            </div>

            <div className='p-4 bg-emerald-900/30 rounded-lg border-l-2 border-emerald-400'>
              <p className='text-lg leading-relaxed font-medium'>
                Етнічна однорідність населення обох князівств
              </p>
            </div>

            <div className='md:col-span-2 p-4 bg-emerald-900/30 rounded-lg border-l-2 border-emerald-400'>
              <p className='text-lg leading-relaxed font-medium'>
                Припинення династії Ростиславичів у Галицькому князівстві після
                смерті сина Ярослава Осмомисла Володимира у{' '}
                <span className='font-bold text-emerald-300 text-xl'>
                  1199 році
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Четвертый блок - Результат об'єднання */}
        <div className='p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
          <h1 className='text-3xl font-bold mb-6 text-amber-300'>
            Результат об'єднання
          </h1>

          <div className='space-y-6'>
            <div className='grid md:grid-cols-2 gap-6 mb-6'>
              <div className='p-4 bg-amber-900/30 rounded-lg border-l-2 border-amber-400'>
                <p className='text-lg leading-relaxed'>
                  Сприятливі умови для економічного розвитку краю
                </p>
              </div>

              <div className='p-4 bg-amber-900/30 rounded-lg border-l-2 border-amber-400'>
                <p className='text-lg leading-relaxed'>
                  Зміцнені політичні позиції держави на тлі роздробленості
                  руських земель
                </p>
              </div>
            </div>

            <div className='p-6 bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg text-center'>
              <h2 className='text-2xl font-bold text-white'>
                У <span className='text-3xl'>1199 році</span> волинський князь
                <span className='font-bold text-xl'>
                  {' '}
                  Роман Мстиславович
                </span>{' '}
                об'єднав Галицьке й Волинське князівства
              </h2>
            </div>
          </div>
        </div>

        {/* Историческое значение */}
        <div className='p-8 bg-slate-800/40 rounded-xl border-l-4 border-purple-400 backdrop-blur-sm'>
          <h2 className='text-3xl font-bold mb-6 text-purple-300 text-center'>
            Історичне значення Галицько-Волинської держави
          </h2>

          <div className='grid md:grid-cols-2 gap-6'>
            <div className='p-4 bg-purple-900/30 rounded-lg'>
              <p className='text-lg leading-relaxed'>
                Стала спадкоємицею політичних та культурних традицій Київської
                Русі
              </p>
            </div>

            <div className='p-4 bg-purple-900/30 rounded-lg'>
              <p className='text-lg leading-relaxed'>
                Зберегла державність українських земель під час
                монголо-татарської навали
              </p>
            </div>

            <div className='p-4 bg-purple-900/30 rounded-lg'>
              <p className='text-lg leading-relaxed'>
                Встановила тісні зв'язки з країнами Європи
              </p>
            </div>

            <div className='p-4 bg-purple-900/30 rounded-lg'>
              <p className='text-lg leading-relaxed'>
                Створила потужний культурний осередок на західноукраїнських
                землях
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Разделитель внизу */}
      <div className='relative mt-16 py-8 px-4 sm:px-6 lg:px-8'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-full border-t-2 border-amber-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-3 text-lg font-semibold text-amber-200 rounded-full border-2 border-amber-600/50 shadow-lg'>
            Наступна тема: Роман Мстиславович
          </span>
        </div>
      </div>
    </div>
  )
}
