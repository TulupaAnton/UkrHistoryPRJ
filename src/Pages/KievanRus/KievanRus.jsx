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

export function KievanRus () {
  return (
    <div className='min-h-screen bg-gradient-to-b mt-5 from-gray-900 via-gray-800 to-gray-900 text-gray-100 flex flex-col relative overflow-hidden'>
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
    </div>
  )
}
