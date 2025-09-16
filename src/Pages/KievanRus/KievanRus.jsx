import { Askold } from '../../Components/KievanRus/Askold'
import { Igor } from '../../Components/KievanRus/Igor'
import { Oleg } from '../../Components/KievanRus/Oleg'
import { Olga } from '../../Components/KievanRus/Olga'
import { Svatoslav } from '../../Components/KievanRus/Svatoslav'

export function KievanRus () {
  return (
    <div className='min-h-screen bg-gradient-to-b mt-5 from-gray-900 via-gray-800 to-gray-900 text-gray-100 flex flex-col relative overflow-hidden'>
      {/* //! Аскольд*/}
      <div>
        <Askold />
      </div>
      {/* //! Олег*/}
      <div>
        <Oleg />
      </div>
      {/* //! Igor */}
      <div>
        <Igor />
      </div>
      {/* //! Olga */}
      <div>
        <Olga />
      </div>
      {/* //! Святослав */}
      <div>
        <Svatoslav />
      </div>
    </div>
  )
}
