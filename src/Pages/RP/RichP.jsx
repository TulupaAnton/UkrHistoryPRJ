import { Culture } from '../../Components/RP/Culture'
import { Kozak1 } from '../../Components/RP/Kozak1'
import { Lublinska2 } from '../../Components/RP/Lublinska2'
import { Ostrog3 } from '../../Components/RP/Ostrog3'

export function RichP () {
  return (
    <div>
      <div>
        <Kozak1 />
      </div>
      <div>
        <Lublinska2 />
      </div>
      <div>
        <Ostrog3 />
      </div>
      <div>
        <Culture />
      </div>
    </div>
  )
}
