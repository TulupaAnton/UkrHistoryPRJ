import { Culture } from '../../Components/KozakGer/Culture'
import { Hotin } from '../../Components/KozakGer/Hotin'
import { KozakCamp } from '../../Components/KozakGer/KozakCamp'
import { Rebel } from '../../Components/KozakGer/Rebel'
import { Sagaydachniy } from '../../Components/KozakGer/Sagaydachniy'

export function KozakGer () {
  return (
    <div>
      <div>
        <Sagaydachniy />
      </div>
      <div>
        <KozakCamp />
      </div>
      <div>
        <Hotin />
      </div>
      <div>
        <Rebel />
      </div>
      <div>
        <Culture />
      </div>
    </div>
  )
}
