export function VKL () {
  return (
    <div className='min-h-screen bg-gradient-to-b  from-slate-900 via-slate-800 to-slate-900 text-gray-100 py-4 pt-25 sm:py-25 px-3 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-5'>
        <div className='absolute top-10% left-5% w-72 h-72 bg-red-600 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10% right-5% w-96 h-96 bg-amber-600 rounded-full blur-3xl'></div>
        <div className='absolute top-50% left-30% w-64 h-64 bg-orange-600 rounded-full blur-3xl'></div>
      </div>

      {/* Заголовок страницы */}
      <div className='w-full max-w-6xl mx-auto text-center mb-8 sm:mb-12 relative z-10 px-2'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-red-400 to-red-500'>
            РУСЬКІ УДІЛЬНІ КНЯЗІВСТВА У СКЛАДІ ІНОЗЕМНИХ ДЕРЖАВ У ДРУГІЙ
            ПОЛОВИНІ ХІV – ПЕРШІЙ ПОЛОВИНІ ХVІ СТ.
          </span>
        </h1>
        <div className='w-32 sm:w-48 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto rounded-full'></div>
      </div>

      {/* Основной контент */}
      <div className='w-full max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12 px-2'>
        {/* Территории современной Украины */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
          <h1 className='text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-amber-300'>
            Території сучасної України в ХІV-ХVІ ст
          </h1>
          <div className='bg-gradient-to-br from-amber-900 to-slate-800 rounded-xl p-3 sm:p-4 border-2 border-amber-500/30 shadow-lg mb-4'>
            <img
              src='../../../assets/UdilnaKnaz/udilMap.png'
              alt='UdilMap'
              className='w-full h-auto max-w-full rounded-lg shadow-md'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4'>
            <p className='p-3 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              Угорщина - Закарпаття
            </p>
            <p className='p-3 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              Молдавське князівство - Буковина
            </p>
            <p className='p-3 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              Велике князівство Литовське - Волинь, Київщина, Чернігівщина,
              Переяславщина і Східне Поділля
            </p>
            <p className='p-3 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              Польське королівство - Галичина, Західна Волинь, Західне Поділля
            </p>
            <p className='p-3 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              Московське князівство - Чернігово-Сіверщина
            </p>
            <p className='p-3 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              Кримське ханство - південноукраїнські землі
            </p>
          </div>
        </div>

        {/* Украинские земли в составе ВКЛ */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-red-400 backdrop-blur-sm'>
          <h1 className='text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-red-300'>
            Українські землі у складі Великого князівства Литовського
          </h1>

          <div className='space-y-4 sm:space-y-6'>
            <div className='p-3 sm:p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Литовські князі — нові об'єднувачі Русі. Вони відвойовують
                руські землі у поляків і монголів. Приєдання білоруських та
                українських земель розпочав Гедимін (засновник однойменної
                династії){' '}
                <span className='font-bold text-red-300'>
                  називав себе королем литовським і руським
                </span>
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                <span className='font-bold text-red-300'>1340 р.</span>{' '}
                литовський князь{' '}
                <span className='font-bold text-red-300'>Любарт</span> закріпив
                за собою Волинь
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-base sm:text-lg leading-relaxed mb-3'>
                <span className='font-bold text-red-300'>1345 р.</span>{' '}
                литовський князь{' '}
                <span className='font-bold text-red-300'>Ольгерд </span> почав
                боротьбу за приєднання нових українських земель - остаточно
                відвоював території у монголів ( + північні й центральні
                українські землі):
              </p>
              <ul className='space-y-2 ml-4'>
                <li className='text-base sm:text-lg'>
                  1355 – 1356 рр – приєднання Чернігово – Сіверських земель
                </li>
                <li className='text-base sm:text-lg'>
                  1361 – 1362 рр. – приєднання Київських та Переяславських
                  земель, Києва
                </li>
                <li className='text-base sm:text-lg'>
                  <span className='font-bold text-red-300'>1362р.</span> –
                  розгром татар на р.{' '}
                  <span className='font-bold text-red-300'>Сині Води </span>{' '}
                  (об'єднані руськолитовські війська)
                  <div className='mt-2 p-2 bg-red-800/30 rounded'>
                    <span className='font-bold text-red-300'>Як наслідок:</span>
                    <p className='ml-2'>
                      територіальні межі Золотої Орди було відсунуто
                    </p>
                    <p className='ml-2'>
                      послаблення політичного впливу Золотій Орді татарських орд
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className='p-3 sm:p-4 bg-red-900/20 rounded-lg border-l-2 border-red-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                посадив у Києві свого сина Володимира Ольгердовича
              </p>
            </div>
          </div>
        </div>

        {/* Политическая система */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-orange-400 backdrop-blur-sm'>
          <h1 className='text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-orange-300'>
            Політична система
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
            <div className='p-3 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Ґрунтувалася на принципі: "Старого не змінювати,нового не
                впроводжувати"
              </p>
            </div>

            <div className='p-3 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Збережено удільну систему, на чолі князівств представники
                литовської династії Гедеміновичів
              </p>
            </div>

            <div className='p-3 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Удільні князівства сплачували данину й надавали збройну допомогу
                Великому князеві.
              </p>
            </div>

            <div className='p-3 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Запозичений руський досвід військової організації,зведення
                фортець,формування оподаткування та князівської адміністрації.
              </p>
            </div>

            <div className='p-3 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Збереглося законодавство "Руська правда"
              </p>
            </div>

            <div className='p-3 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Територія Великого князівства Литовського складалася на 90% з
                руських (українських і білоруських) земель
              </p>
            </div>

            <div className='p-3 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Русичі мали рівні права з литовцями
              </p>
            </div>

            <div className='p-3 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Руська мова була державною мовою, панували руська культура.
              </p>
            </div>

            <div className='p-3 bg-orange-900/20 rounded-lg border-l-2 border-orange-400'>
              <p className='text-base sm:text-lg leading-relaxed'>
                Православна церква була домінуючою
              </p>
            </div>

            <div className='p-3 bg-orange-900/20 rounded-lg border-l-2 border-orange-400 md:col-span-2'>
              <p className='text-base sm:text-lg leading-relaxed'>
                а заповітом Ольгерда, влада відійшла його сину Ягайлу. Між ним
                та його дядьком Кейстутом розпочалася кровопролитна боротьба за
                престол. У ході неї було вбито Кейстута, а його син Вітовт,
                продовжив подальшу боротьбу проти Ягайла.
              </p>
            </div>
          </div>
        </div>

        {/* Цитаты */}
        <div className='p-4 sm:p-6 lg:p-8 bg-slate-800/40 rounded-xl border-l-4 border-amber-400 backdrop-blur-sm'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-amber-300 text-center'>
            Цитати:
          </h2>

          <div className='space-y-4 sm:space-y-6'>
            <div className='p-3 sm:p-4 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-base sm:text-lg leading-relaxed italic'>
                «Ольгерд... пішов у похід в Дикі Поля проти татар. З ним
                вирушили також чотири його племінники, сини новогрудського князя
                Коріата, княжичі: Олександр, Костянтин, Юрій та Федір. І коли
                вони, минувши Канів і Черкаси, дійшли до урочища Сині Води, то
                побачили в полі велику татарську орду з трьома царками на чолі,
                поділену на три загони... Татари не змогли довго витримати
                лобового натиску литви й почали відступати та втікати у розлогі
                степи. На побоїщі залишилися вбиті три їхні царьки...»
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-base sm:text-lg leading-relaxed italic'>
                «...відправився проти татар у Поля Дикі... А коли прийшли до
                Синьої Води,.. побачили в полі велику орду... Литва з Руссю по
                тій перемозі забрали... всі землі аж... до устя Дону,.. а інших
                татар... до Криму загнали,.. вибивши їх з Подільських країв»
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-base sm:text-lg leading-relaxed italic'>
                «Народ сей даниною звірів, меду та іншого князям руським служив.
                Коли ж він відчув, що князі руські розтрощені татарами, він
                змужнів... і на знесилених русів владу свою поширив...»
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-base sm:text-lg leading-relaxed italic'>
                «Гедимінів син, великий князь Ольгерд.., прилучив до своєї
                держави подільську землю та вигнав звідти татар...»
              </p>
            </div>

            <div className='p-3 sm:p-4 bg-amber-900/20 rounded-lg border-l-2 border-amber-400'>
              <p className='text-base sm:text-lg leading-relaxed italic'>
                «...І відтоді з Поділля вигнано владу татарську. Цей Ольгерд і
                інші руські землі під свою владу взяв, і Київ з-під
                Федора-князя, ставленика хана, взято і посадив в ньому
                Володимира, сина свого, і почав над ними володіти...»
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Разделитель внизу */}
      <div className='relative mt-12 sm:mt-16 py-6 sm:py-8 px-3 sm:px-6 lg:px-8'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-full border-t-2 border-red-700/30 border-dashed'></div>
        </div>
        <div className='relative flex justify-center'>
          <span className='bg-gradient-to-r from-slate-800 to-slate-900 px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold text-red-200 rounded-full border-2 border-red-600/50 shadow-lg text-center'>
            Наступна тема: Кревська унія
          </span>
        </div>
      </div>
    </div>
  )
}
