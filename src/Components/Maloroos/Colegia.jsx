export function Colegia () {
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
              Друга Малоросійська колегія (1764-1786)
            </span>
          </h1>

          <div className='inline-flex items-center justify-center space-x-4 mb-6'>
            <div className='w-16 h-0.5 bg-gradient-to-r from-transparent to-cyan-400'></div>
            <span className='text-cyan-200 text-2xl sm:text-3xl font-semibold tracking-wider'>
              1764 - 1786
            </span>
            <div className='w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent'></div>
          </div>

          <p className='text-2xl sm:text-3xl text-cyan-100 font-light max-w-3xl mx-auto leading-tight'>
            Перебрала на себе управління Гетьманщиною після скасування
            гетьманської посади
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20'>
        {/* Основна інформація */}
        <section className='space-y-8'>
          {/* Керівництво */}
          <article className='bg-gradient-to-r from-slate-800/50 to-blue-900/30 rounded-2xl p-6 sm:p-8 border border-cyan-500/30 backdrop-blur-sm'>
            <h2 className='text-3xl sm:text-4xl font-bold text-cyan-300 mb-6 flex items-center'>
              <span className='w-4 h-4 bg-cyan-400 rounded-full mr-4'></span>
              Керівництво колегії
            </h2>
            <p className='text-xl sm:text-2xl leading-relaxed text-white/90'>
              Очолив другу Малоросійську Колегію{' '}
              <span className='bg-cyan-500/30 text-cyan-200 px-3 py-1 rounded-lg font-bold text-2xl'>
                П. Румянцев
              </span>
            </p>
          </article>

          {/* Мета діяльності */}
          <article className='bg-gradient-to-r from-slate-800/50 to-purple-900/30 rounded-2xl p-6 sm:p-8 border border-purple-500/30 backdrop-blur-sm'>
            <h2 className='text-3xl sm:text-4xl font-bold text-purple-300 mb-6 flex items-center'>
              <span className='w-4 h-4 bg-purple-400 rounded-full mr-4'></span>
              Мета діяльності
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 text-xl sm:text-2xl'>
              <div className='space-y-4'>
                <p className='flex items-start space-x-3'>
                  <span className='text-purple-400 mt-2'>•</span>
                  <span>Закріпачення селян</span>
                </p>
                <p className='flex items-start space-x-3'>
                  <span className='text-purple-400 mt-2'>•</span>
                  <span>Пильний нагляд за розвитком економіки</span>
                </p>
                <p className='flex items-start space-x-3'>
                  <span className='text-purple-400 mt-2'>•</span>
                  <span> ліквідація залишків української автономії</span>
                </p>
              </div>
              <div className='space-y-4'>
                <p className='flex items-start space-x-3'>
                  <span className='text-purple-400 mt-2'>•</span>
                  <span>Збільшення збору податків</span>
                </p>
                <p className='flex items-start space-x-3'>
                  <span className='text-purple-400 mt-2'>•</span>
                  <span>
                    Запровадження намісництв, загальноросійських судових установ
                  </span>
                </p>
              </div>
            </div>
          </article>

          {/* Генеральний опис Малоросії */}
          <article className='bg-gradient-to-r from-slate-800/50 to-blue-900/30 rounded-2xl p-6 sm:p-8 border border-blue-500/30 backdrop-blur-sm'>
            <h2 className='text-3xl sm:text-4xl font-bold text-blue-300 mb-6 flex items-center'>
              <span className='w-4 h-4 bg-blue-400 rounded-full mr-4'></span>
              Генеральний опис Малоросії
            </h2>
            <div className='space-y-6 text-xl sm:text-2xl leading-relaxed'>
              <p>
                П. Румянцев здійснив «Генеральний опис Малоросії» - перепис
                населення, детальний опис поземельної власності та статку
                кожного господаря тощо.
              </p>
              <p className='bg-blue-500/20 rounded-xl p-4 border-l-4 border-blue-400'>
                <span className='text-blue-200'>
                  На початку року граф П. Рум'янцев прибув у Глухов. Першим його
                  кроком стало проведення ревізії людей, худоби, землі, споруд.
                  Її результати, узагальнені в тисячі томах, отримали назву
                  «Генерального опису Малоросії»
                </span>
              </p>
            </div>
          </article>

          {/* Ліквідація автономії */}
          <article className='bg-gradient-to-r from-slate-800/50 to-red-900/30 rounded-2xl p-6 sm:p-8 border border-red-500/30 backdrop-blur-sm'>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-red-300 mb-8 text-center'>
              Ліквідація автономії Лівобережної Гетьманщини і Слобожанщини
            </h1>

            {/* 1765 рік */}
            <div className='flex items-start space-x-4 p-6 bg-red-900/20 rounded-xl mb-6'>
              <div className='flex-shrink-0 w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center'>
                <span className='text-red-300 font-bold text-xl'>1765</span>
              </div>
              <div>
                <h3 className='text-red-200 font-semibold text-2xl mb-2'>
                  Ліквідація козацьких полків на Слобожанщині
                </h3>
                <p className='text-white/90 text-xl'>
                  Замість п'яти козацьких полків на Слобожанщині створювалася
                  Слобідсько-українська губернія Російської імперії
                </p>
              </div>
            </div>

            {/* 1775 рік */}
            <div className='flex items-start space-x-4 p-6 bg-red-900/20 rounded-xl mb-6'>
              <div className='flex-shrink-0 w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center'>
                <span className='text-red-300 font-bold text-xl'>1775</span>
              </div>
              <div>
                <h3 className='text-red-200 font-semibold text-2xl mb-2'>
                  Знищення Запорозької Січі
                </h3>
                <p className='text-white/90 text-xl'>
                  Остаточно зруйновано Запорозьку Січ{' '}
                  <span className='bg-red-500/30 text-red-200 px-2 py-1 rounded'>
                    Нову Січ на р. Підпільній
                  </span>
                </p>
              </div>
            </div>

            {/* 1781 рік */}
            <div className='flex items-start space-x-4 p-6 bg-red-900/20 rounded-xl mb-6'>
              <div className='flex-shrink-0 w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center'>
                <span className='text-red-300 font-bold text-xl'>1781</span>
              </div>
              <div>
                <h3 className='text-red-200 font-semibold text-2xl mb-2'>
                  Ліквідація полково-сотенного устрою
                </h3>
                <p className='text-white/90 text-xl'>
                  Ліквідовано{' '}
                  <span className='bg-red-500/30 text-red-200 px-2 py-1 rounded'>
                    полково-сотенний устрій Лівобережної Гетьманщини.
                  </span>{' '}
                  Замість Гетьманщини створене Малоросійське
                  генерал-губернаторство{' '}
                  <span className='bg-cyan-500/30 text-cyan-200 px-2 py-1 rounded'>
                    (очолив П. Рум'янцев)
                  </span>
                  , яке поділялося на намісництва (Київське, Чернігівське,
                  Новгород-Сіверське, згодом додалися Харківське та
                  Катеринославське)
                </p>
              </div>
            </div>

            {/* 1783 рік - Важлива дата */}
            <div className='flex items-start space-x-4 p-6 bg-orange-900/20 rounded-xl mb-6 border-2 border-orange-500/50'>
              <div className='flex-shrink-0 w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center'>
                <span className='text-orange-300 font-bold text-2xl'>1783</span>
              </div>
              <div>
                <h3 className='text-orange-200 font-semibold text-2xl mb-2'>
                  <span className='bg-orange-500/30 text-orange-200 px-3 py-1 rounded-lg'>
                    Важлива дата!
                  </span>{' '}
                  Запровадження кріпацтва
                </h3>
                <div className='space-y-3 text-xl'>
                  <p className='text-white/90'>
                    Запровадження кріпацтва у Лівобережній та Слобідській
                    Україні
                  </p>
                  <p className='text-white/90'>Ліквідація козацького війська</p>
                  <p className='text-white/90'>
                    Перетворення козацьких і компанійських полків на кінні
                    (карабінерські) полки російської армії
                  </p>
                </div>
              </div>
            </div>

            {/* 1785 рік */}
            <div className='flex items-start space-x-4 p-6 bg-red-900/20 rounded-xl'>
              <div className='flex-shrink-0 w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center'>
                <span className='text-red-300 font-bold text-xl'>1785</span>
              </div>
              <div>
                <h3 className='text-red-200 font-semibold text-2xl mb-2'>
                  Жалувана грамота дворянству
                </h3>
                <p className='text-white/90 text-xl'>
                  На Україну поширено «жалувану грамоту дворянству»: козацьку
                  старшину зрівняно в правах з російським дворянством
                </p>
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
              Наступна тема: Запорозька Січ
            </span>
          </div>
        </div>
      </footer>
    </article>
  )
}
