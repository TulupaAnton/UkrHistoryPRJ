export function Neolit () {
  return (
    <div>
      <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border-t-4 border-purple-500 overflow-hidden'>
        <div className='bg-gradient-to-r from-purple-600 to-purple-700 py-4 text-center'>
          <h3 className='text-2xl font-semibold text-white'>Неоліт</h3>
          <p className='text-lg text-purple-100 mt-1'>
            (6 - 4 тис. років тому)
          </p>
        </div>
        <div className='p-8'>
          <div className='mb-6'>
            <ul className='text-lg text-gray-300 space-y-3'>
              <li className='flex items-start'>
                <span className='text-purple-400 mr-2'>•</span>
                <span>
                  <b>Неолітична революція:</b> перехід від{' '}
                  <b>привласнювальних</b> форм господарства до{' '}
                  <b>відтворювальних</b>
                </span>
              </li>
              <li className='flex items-start'>
                <span className='text-purple-400 mr-2'>•</span>
                <span>
                  <b>Відтворювальне господарство:</b> коли сам вирощуєш та сам
                  збираєш
                </span>
              </li>
              <li className='flex items-start'>
                <span className='text-purple-400 mr-2'>•</span>
                <span>Нові знаряддя: мотика, серп</span>
              </li>
              <li className='flex items-start'>
                <span className='text-purple-400 mr-2'>•</span>
                <span>Формуються археологічні культури (деталі нижче)</span>
              </li>
              <li className='flex items-start'>
                <span className='text-purple-400 mr-2'>•</span>
                <span>Перехід до патріархату</span>
              </li>
              <li className='flex items-start'>
                <span className='text-purple-400 mr-2'>•</span>
                <span>
                  <b>Поява керамічної посуди</b>
                </span>
              </li>
              <li className='flex items-start'>
                <span className='text-purple-400 mr-2'>•</span>
                <span>Демографічний вибух</span>
              </li>
            </ul>
          </div>
          <div className='mb-6'>
            <div className='relative group inline-block'>
              <p className='text-lg text-gray-300 cursor-help border-b border-dashed border-purple-400'>
                неолітична кераміка
              </p>
              <div className='absolute hidden group-hover:block z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-gray-800 shadow-lg rounded-md border border-gray-600'>
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Trypillian_pottery.jpg/800px-Trypillian_pottery.jpg'
                  alt='Неолітична кераміка'
                  className='w-full h-auto rounded'
                />
                <p className='text-sm text-gray-400 mt-1'>
                  Кераміка трипільської культури
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
