import { Colegia } from '../../Components/Maloroos/Colegia'
import { Koliivshchyna } from '../../Components/Maloroos/Koliivshchyna'
import { RightSide } from '../../Components/Maloroos/RightSide'
import { RosTur } from '../../Components/Maloroos/RosTur'
import { Rozum } from '../../Components/Maloroos/Rozum'
import { ZPsich } from '../../Components/Maloroos/ZPsich'

export function Maloros () {
  return (
    <div>
      <div>
        <Rozum />
      </div>
      <div>
        <Colegia />
      </div>
      <div>
        <ZPsich />
      </div>
      <div>
        <RosTur />
      </div>
      <div>
        <RightSide />
      </div>
      <div>
        <Koliivshchyna />
      </div>
    </div>
  )
}
