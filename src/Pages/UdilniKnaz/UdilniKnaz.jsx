import { BubbleMenuforUdil } from '../../Components/BubbleMenu/BuubleMenuForUdil'
import { Culture } from '../../Components/UdilniKnaz/Culture'
import { Kozak } from '../../Components/UdilniKnaz/Kozak'
import { KrevskaUn } from '../../Components/UdilniKnaz/KrevskaUn'
import { Krim } from '../../Components/UdilniKnaz/Krim'
import { Poland } from '../../Components/UdilniKnaz/Poland'
import { Vitovt } from '../../Components/UdilniKnaz/Vitovt'
import { VKL } from '../../Components/UdilniKnaz/VKL'
import { Udil_Test } from '../Testtt/UdilKnaz/TestUdil'

export function UdilniKnaz () {
  return (
    <div>
      <BubbleMenuforUdil />

      <div id='vkl'>
        <VKL />
      </div>

      <div id='krevska-un'>
        <KrevskaUn />
      </div>

      <div id='vitovt'>
        <Vitovt />
      </div>

      <div id='poland'>
        <Poland />
      </div>

      <div id='krim'>
        <Krim />
      </div>

      <div id='kozak'>
        <Kozak />
      </div>

      <div id='culture'>
        <Culture />
      </div>
      <div id='test'>
        <Udil_Test />
      </div>
    </div>
  )
}
