import { Mazepaa } from '../../Components/Mazepa/Mazepa'
import { Paliy } from '../../Components/Mazepa/Paliy'
import { Pivnichna } from '../../Components/Mazepa/Pivnichna'
import { Poltava } from '../../Components/Mazepa/Poltava'

export function Mazepa () {
  return (
    <div>
      <div>
        <Mazepaa />
      </div>
      <div>
        <Paliy />
      </div>
      <div>
        <Pivnichna />
      </div>
      <div>
        <Poltava />
      </div>
    </div>
  )
}
