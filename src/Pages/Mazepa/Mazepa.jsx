import { Apostol } from '../../Components/Mazepa/Apostol'
import { Culture } from '../../Components/Mazepa/Culture'
import { Malorosia } from '../../Components/Mazepa/Malorosia'
import { Mazepaa } from '../../Components/Mazepa/Mazepa'
import { Paliy } from '../../Components/Mazepa/Paliy'
import { Pilip } from '../../Components/Mazepa/Pilip'
import { Pivnichna } from '../../Components/Mazepa/Pivnichna'
import { Poltava } from '../../Components/Mazepa/Poltava'
import { Skoropadskiy } from '../../Components/Mazepa/Skoropadskiy'

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
      <div>
        <Pilip />
      </div>
      <div>
        <Skoropadskiy />
      </div>
      <div>
        <Malorosia />
      </div>
      <div>
        <Apostol />
      </div>
      <div>
        <Culture />
      </div>
    </div>
  )
}
