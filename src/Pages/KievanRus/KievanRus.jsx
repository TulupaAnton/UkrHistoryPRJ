import { BubbleMenuforRus } from '../../Components/BubbleMenu/BuubleMenuforRus'
import { Askold } from '../../Components/KievanRus/Askold'
import { Culture } from '../../Components/KievanRus/Culture'
import { Igor } from '../../Components/KievanRus/Igor'
import { Monomah } from '../../Components/KievanRus/Monomah'
import { Mstislav } from '../../Components/KievanRus/Mstislav'
import { Oleg } from '../../Components/KievanRus/Oleg'
import { Olga } from '../../Components/KievanRus/Olga'
import { Svatoslav } from '../../Components/KievanRus/Svatoslav'
import { Triumvirat } from '../../Components/KievanRus/Triumvirat'
import { Volodimir } from '../../Components/KievanRus/Volodimir'
import { Yarik } from '../../Components/KievanRus/Yarik'
import Quiz from '../Testtt/KyivRusTest/Quiz'

export function KievanRus () {
  return (
    <div className='min-h-screen bg-gradient-to-b mt-5 from-gray-900 via-gray-800 to-gray-900 text-gray-100 flex flex-col relative overflow-hidden'>
      {/* Декоративные элементы фона */}
      <div className='absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none'>
        <div className='absolute top-[10%] left-[5%] w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse'></div>
        <div className='absolute top-[30%] left-[60%] w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000'></div>
        <div className='absolute bottom-[10%] right-[5%] w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000'></div>
      </div>

      <BubbleMenuforRus />

      <div id='askold'>
        <Askold />
      </div>

      <div id='oleg'>
        <Oleg />
      </div>

      <div id='igor'>
        <Igor />
      </div>

      <div id='olga'>
        <Olga />
      </div>

      <div id='svatoslav'>
        <Svatoslav />
      </div>

      <div id='volodimir'>
        <Volodimir />
      </div>

      <div id='yarik'>
        <Yarik />
      </div>

      <div id='triumvirat'>
        <Triumvirat />
      </div>

      <div id='monomah'>
        <Monomah />
      </div>

      <div id='mstislav'>
        <Mstislav />
      </div>

      <div id='culture'>
        <Culture />
      </div>

      {/* TEST */}
      <div id='Tests'>
        <Quiz />
      </div>
    </div>
  )
}
