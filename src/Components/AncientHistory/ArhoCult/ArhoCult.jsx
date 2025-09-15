export function ArhoCult () {
  return (
    <div className='bg-gray-800/50 rounded-2xl p-8 shadow-2xl border mt-5 border-amber-700/30 relative overflow-hidden'>
      <div className='flex items-center text-center justify-center mb-8'>
        <h1 className='font-bold text-5xl md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 relative inline-block'>
          <span className='absolute -inset-4 bg-amber-400 blur-xl opacity-20 rounded-full'></span>
          Археологічні культури
        </h1>
      </div>
      <div>
        <p className='text-2xl'>
          <span className='text-3xl font-bold text-amber-300'>
            Археологічна культура
          </span>{' '}
          - група подібних між собою археологічних пам'яток (за формами та
          оздобленням посуду, прикрасами,поховальними звичаями тощо), поширених
          на певній території в межах певного історичного часу.
        </p>
      </div>
    </div>
  )
}
