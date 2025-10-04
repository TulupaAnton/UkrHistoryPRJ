import { Bilo } from '../../Components/NVV/Bilo'
import { Bohdan } from '../../Components/NVV/Bogdan'
import { Dershava } from '../../Components/NVV/Dershava'
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
      <div></div>
    </div>
  )
}
