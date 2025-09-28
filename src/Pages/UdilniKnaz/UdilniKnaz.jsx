import { Kozak } from '../../Components/UdilniKnaz/Kozak'
import { KrevskaUn } from '../../Components/UdilniKnaz/KrevskaUn'
import { Krim } from '../../Components/UdilniKnaz/Krim'
import { Poland } from '../../Components/UdilniKnaz/Poland'
import { Vitovt } from '../../Components/UdilniKnaz/Vitovt'
import { VKL } from '../../Components/UdilniKnaz/VKL'

export function UdilniKnaz () {
  return (
    <div>
      <div>
        <VKL />
      </div>
      <div>
        <KrevskaUn />
      </div>
      <div>
        <Vitovt />
      </div>
      <div>
        <Poland />
      </div>
      <div>
        <Krim />
      </div>
      <div>
        <Kozak />
      </div>
    </div>
  )
}
