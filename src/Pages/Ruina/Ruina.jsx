import { Ivan } from '../../Components/Ruina/Ivan'
import { Konotop } from '../../Components/Ruina/Konotop'
import { Rozkol } from '../../Components/Ruina/Rozkol'
import { Ruina_start } from '../../Components/Ruina/Ruina_start'
import { Ura } from '../../Components/Ruina/Ura'

export function Ruina () {
  return (
    <div>
      <div>
        <Ruina_start />
      </div>
      <div>
        <Ivan />
      </div>
      <div>
        <Konotop />
      </div>
      <div>
        <Ura />
      </div>
      <div>
        <Rozkol />
      </div>
    </div>
  )
}
