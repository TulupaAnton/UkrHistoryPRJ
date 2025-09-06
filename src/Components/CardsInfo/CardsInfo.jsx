export function CardsInfo () {
  const cards = [
    {
      img: './src/Assets/pale.png',
      title: 'Первісність на території України',
      desc: 'Короткий опис теми або вступ до матеріалу. Тут можна додати інформацію для ознайомлення.'
    },
    {
      img: './src/Assets/pale.png',
      title: 'Київська Русь',
      desc: 'Огляд формування та розвитку Київської держави.'
    },
    {
      img: './src/Assets/pale.png',
      title: 'Галицько-Волинське князівство',
      desc: 'Основні події та діячі Галицько-Волинської держави.'
    },
    {
      img: './src/Assets/pale.png',
      title: 'Козацька доба',
      desc: 'Короткий опис про зародження козацтва та його роль.'
    },
    {
      img: './src/Assets/pale.png',
      title: 'Козацька доба',
      desc: 'Короткий опис про зародження козацтва та його роль.'
    },
    {
      img: './src/Assets/pale.png',
      title: 'Козацька доба',
      desc: 'Короткий опис про зародження козацтва та його роль.'
    },
    {
      img: './src/Assets/pale.png',
      title: 'Козацька доба',
      desc: 'Короткий опис про зародження козацтва та його роль.'
    },
    {
      img: './src/Assets/pale.png',
      title: 'Козацька доба',
      desc: 'Короткий опис про зародження козацтва та його роль.'
    },
    {
      img: './src/Assets/pale.png',
      title: 'Козацька доба',
      desc: 'Короткий опис про зародження козацтва та його роль.'
    }
  ]

  return (
    <div className='flex h-full flex-row gap-10 bg-[#fdf6e3] pb-5 px-5 overflow-x-auto'>
      {cards.map((card, i) => (
        <div
          key={i}
          className='flex flex-col max-w-sm border-2 border-[#8b5e3c] rounded-2xl shadow-md overflow-hidden bg-white flex-shrink-0'
        >
          <img
            className='w-full h-60 object-cover'
            src={card.img}
            alt={card.title}
          />
          <div className='p-4'>
            <h2 className='text-xl font-bold text-[#8b5e3c] mb-2'>
              {card.title}
            </h2>
            <p className='text-gray-700 text-sm'>{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
