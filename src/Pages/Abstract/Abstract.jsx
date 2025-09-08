import AbstractsData from '../../data/abstracts.json'

export function Abstract () {
  return (
    <div className='flex flex-col max-w-screen-xl mx-auto m-5 bg-[#fdfaf6] p-5 rounded-lg'>
      {/* CARDS */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {AbstractsData.map(note => (
          <div
            key={note.id}
            className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300'
          >
            <img
              src={note.image}
              alt={note.title}
              className='w-full h-48 object-cover'
            />
            <div className='p-4'>
              <h2 className='text-xl font-semibold mb-2'>{note.title}</h2>
              <p className='text-gray-600 mb-3'>{note.description}</p>
              <span className='text-sm text-gray-500 font-medium'>
                {note.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
