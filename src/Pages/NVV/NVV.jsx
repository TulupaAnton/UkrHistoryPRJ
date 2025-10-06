import { Bilo } from '../../Components/NVV/Bilo'
import { Bilocharch } from '../../Components/NVV/Bilocharch'
import { Bohdan } from '../../Components/NVV/Bogdan'
import { Dershava } from '../../Components/NVV/Dershava'
import { Moldova } from '../../Components/NVV/Moldova'
import { Moskva } from '../../Components/NVV/Moskva'
import { Nvv } from '../../Components/NVV/nvv'
import { Rebellion } from '../../Components/NVV/Rebellion'
import { Zbor } from '../../Components/NVV/Zbor'

export function NVV () {
  return (
    <div>
      <div>
        <Nvv />
      </div>
      <div>
        <Bohdan />
      </div>
      <div>
        <Rebellion />
      </div>
      <div>
        <Zbor />
      </div>
      <div>
        <Dershava />
      </div>
      <div>
        <Bilo />
      </div>
      <div>
        <Bilocharch />
      </div>
      <div>
        <Moldova />
      </div>
      <div>
        <Moskva />
      </div>
    </div>
  )
}
