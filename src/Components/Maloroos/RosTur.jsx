export function RosTur () {
  return (
    <article className='relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/80 to-purple-900/90 text-white overflow-hidden'>
      {/* Background elements */}
      <div className='fixed top-0 left-0 w-full h-full opacity-5 pointer-events-none'>
        <div className='absolute top-20 left-10 w-80 h-80 bg-cyan-400 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-violet-500 rounded-full blur-3xl'></div>
        <div className='absolute top-1/2 left-1/3 w-72 h-72 bg-indigo-400 rounded-full blur-3xl'></div>
      </div>

      {/* Decorative top border */}
      <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent'></div>

      {/* Header Section */}
      <header className='relative z-10 pt-16 pb-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto text-center'>
          {/* Decorative elements */}
          <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full'></div>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400'>
              Російсько-турецькі війни
            </span>
          </h1>

          <div className='inline-flex items-center justify-center space-x-4 mb-6'>
            <div className='w-16 h-0.5 bg-gradient-to-r from-transparent to-cyan-400'></div>
            <span className='text-cyan-200 text-2xl sm:text-3xl font-semibold tracking-wider'>
              XVIII століття
            </span>
            <div className='w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent'></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20'>
        <section className='space-y-8'>
          {/* Дати воєн */}
          <article className='bg-gradient-to-r from-slate-800/50 to-blue-900/30 rounded-2xl p-6 sm:p-8 border border-cyan-500/30 backdrop-blur-sm'>
            <h2 className='text-3xl sm:text-4xl font-bold text-cyan-300 mb-6 flex items-center'>
              <span className='w-4 h-4 bg-cyan-400 rounded-full mr-4'></span>
              Хронологія воєн
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {/* Війна 1768-1774 */}
              <div className='bg-blue-900/20 rounded-xl p-6 border border-blue-500/30'>
                <div className='flex items-center space-x-4 mb-4'>
                  <div className='flex-shrink-0 w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center'>
                    <span className='text-blue-300 font-bold text-xl'>
                      1768-1774
                    </span>
                  </div>
                  <h3 className='text-2xl font-bold text-blue-300'>
                    Перша війна
                  </h3>
                </div>
                <p className='text-xl text-white/90 leading-relaxed'>
                  Завершилася підписанням{' '}
                  <span className='bg-blue-500/30 text-blue-200 px-2 py-1 rounded font-semibold'>
                    Кючук-Кайнарджійського мирного договору
                  </span>
                  , за яким до Росії відійшли землі між Дніпром та Південним
                  Бугом, Азов з навколишніми землями, міста Керч та Єнікале
                </p>
              </div>

              {/* Війна 1787-1791 */}
              <div className='bg-purple-900/20 rounded-xl p-6 border border-purple-500/30'>
                <div className='flex items-center space-x-4 mb-4'>
                  <div className='flex-shrink-0 w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center'>
                    <span className='text-purple-300 font-bold text-xl'>
                      1787-1791
                    </span>
                  </div>
                  <h3 className='text-2xl font-bold text-purple-300'>
                    Друга війна
                  </h3>
                </div>
                <p className='text-xl text-white/90 leading-relaxed'>
                  Закінчилась укладанням{' '}
                  <span className='bg-purple-500/30 text-purple-200 px-2 py-1 rounded font-semibold'>
                    Ясського мирного договору
                  </span>
                  , за яким до Росії відійшли території між Південним Бугом та
                  Дністром
                </p>
              </div>
            </div>
          </article>

          {/* Кримські події */}
          <article className='bg-gradient-to-r from-slate-800/50 to-red-900/30 rounded-2xl p-6 sm:p-8 border border-red-500/30 backdrop-blur-sm'>
            <h2 className='text-3xl sm:text-4xl font-bold text-red-300 mb-6 flex items-center'>
              <span className='w-4 h-4 bg-red-400 rounded-full mr-4'></span>
              Приєднання Криму
            </h2>

            <div className='space-y-6'>
              {/* 1774 рік */}
              <div className='flex items-start space-x-4 p-6 bg-red-900/20 rounded-xl'>
                <div className='flex-shrink-0 w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center'>
                  <span className='text-red-300 font-bold text-xl'>1774</span>
                </div>
                <div>
                  <h3 className='text-red-200 font-semibold text-2xl mb-2'>
                    Проголошення незалежності Криму
                  </h3>
                  <p className='text-white/90 text-xl'>
                    <span className='bg-red-500/30 text-red-200 px-2 py-1 rounded'>
                      Крим проголошено незалежним
                    </span>{' '}
                    від Османської імперії
                  </p>
                </div>
              </div>

              {/* 1783 рік */}
              <div className='flex items-start space-x-4 p-6 bg-orange-900/20 rounded-xl border-2 border-orange-500/50'>
                <div className='flex-shrink-0 w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center'>
                  <span className='text-orange-300 font-bold text-2xl'>
                    1783
                  </span>
                </div>
                <div>
                  <h3 className='text-orange-200 font-semibold text-2xl mb-2'>
                    Приєднання Криму до Росії
                  </h3>
                  <p className='text-white/90 text-xl'>
                    Царський указ про приєднання Криму до Російської імперії
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Наслідки війн */}
          <article className='bg-gradient-to-r from-slate-800/50 to-green-900/30 rounded-2xl p-6 sm:p-8 border border-green-500/30 backdrop-blur-sm'>
            <h2 className='text-3xl sm:text-4xl font-bold text-green-300 mb-6 flex items-center'>
              <span className='w-4 h-4 bg-green-400 rounded-full mr-4'></span>
              Наслідки війн для України
            </h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              <div className='space-y-6'>
                <div className='bg-green-900/20 rounded-xl p-6'>
                  <h3 className='text-2xl font-bold text-green-200 mb-4'>
                    Заснування міст
                  </h3>
                  <p className='text-xl text-white/90 leading-relaxed'>
                    Масове переселення людей на Південь України. Заснування
                    міст:
                  </p>
                  <div className='grid grid-cols-2 gap-2 mt-3'>
                    {[
                      'Одеса',
                      'Катеринослав',
                      'Маріуполь',
                      'Миколаїв',
                      'Херсон',
                      'Севастополь'
                    ].map((city, index) => (
                      <span
                        key={index}
                        className='bg-green-500/20 text-green-200 px-3 py-1 rounded text-center'
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className='space-y-6'>
                <div className='bg-green-900/20 rounded-xl p-6'>
                  <h3 className='text-2xl font-bold text-green-200 mb-4'>
                    Економічний розвиток
                  </h3>
                  <p className='text-xl text-white/90 leading-relaxed'>
                    <span className='bg-green-500/30 text-green-200 px-2 py-1 rounded'>
                      Швидкий економічний розвиток південних українських земель
                    </span>
                  </p>
                  <p className='text-xl text-white/90 mt-3'>
                    Офіційна назва Південної України -{' '}
                    <span className='font-bold text-green-200'>Новоросія</span>
                  </p>
                </div>

                {/* Важлива дата */}
                <div className='bg-red-900/20 rounded-xl p-6 border-l-4 border-red-400'>
                  <h3 className='text-2xl font-bold text-red-200 mb-2'>
                    <span className='bg-red-500/30 text-red-200 px-3 py-1 rounded'>
                      Важлива дата!
                    </span>
                  </h3>
                  <p className='text-xl text-white/90'>
                    <span className='text-red-300 font-bold text-2xl'>
                      1796
                    </span>{' '}
                    - запровадження кріпацтва у Південній Україні
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Цитата */}
          <article className='bg-gradient-to-br from-amber-900/20 to-orange-900/20 rounded-2xl p-6 sm:p-8 border border-amber-500/30 backdrop-blur-sm'>
            <h2 className='text-3xl sm:text-4xl font-bold text-amber-300 mb-6 text-center'>
              Історичні документи
            </h2>
            <blockquote className='relative bg-amber-900/20 rounded-2xl p-6 border-l-4 border-amber-400'>
              <div className='absolute -left-2 top-0 text-amber-400 text-3xl'>
                "
              </div>
              <p className='italic text-amber-100 pl-6 leading-relaxed text-xl'>
                Вирішили Ми взяти під державу Російську півострів Кримський...
                Сповіщаючи мешканців тих місць цим Нашим Маніфестом про таку
                переміну їхнього буття, обіцяємо ставитися до них нарівні з
                іншими Нашими підданими »
              </p>
              <footer className='text-right mt-4 text-amber-200 text-lg'>
                — Маніфест про приєднання Криму
              </footer>
            </blockquote>
          </article>

          {/* Карта */}
          <article className='bg-gradient-to-r from-slate-800/50 to-blue-900/30 rounded-2xl p-6 sm:p-8 border border-blue-500/30 backdrop-blur-sm'>
            <h2 className='text-3xl sm:text-4xl font-bold text-blue-300 mb-6 text-center'>
              Територіальні зміни
            </h2>
            <div className='text-center mb-4'>
              <p className='text-xl text-white/90 mb-4'>
                Території, що ввійшли до складу Російської імперії в результаті
                російсько-турецької війни 1787-1791 рр.(Позначенно цифрою 2)
              </p>
            </div>
            <div className='flex justify-center'>
              <div className='w-full max-w-2xl bg-slate-800/50 rounded-xl p-4 border-2 border-blue-500/30'>
                <img
                  src='../../../assets/Maloroos/image.jpg'
                  alt='Території, що ввійшли до складу Російської імперії в результаті російсько-турецької війни 1787-1791 рр'
                  className='w-full h-auto rounded-lg shadow-lg'
                />
              </div>
            </div>
          </article>
        </section>
      </main>

      {/* Next Topic Footer */}
      <footer className='relative z-10 border-t border-cyan-500/20 mt-20 pt-12 pb-8'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='inline-flex items-center space-x-4 bg-slate-800/50 backdrop-blur-sm px-6 py-4 rounded-full border border-cyan-500/30'>
            <span className='text-cyan-200 font-semibold text-lg'>
              Наступна тема: Українські землі у складі Російської імперії
            </span>
          </div>
        </div>
      </footer>
    </article>
  )
}
