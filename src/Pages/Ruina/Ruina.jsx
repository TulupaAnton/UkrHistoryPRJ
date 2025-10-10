import { Doroshenko } from '../../Components/Ruina/Doroshenko'
import { Ivan } from '../../Components/Ruina/Ivan'
import { Konotop } from '../../Components/Ruina/Konotop'
import { Mnogogrish } from '../../Components/Ruina/Mnogogrish'
import { Rozkol } from '../../Components/Ruina/Rozkol'
import { Ruina_start } from '../../Components/Ruina/Ruina_start'
import { Samoylovich } from '../../Components/Ruina/Samoylovich'
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
      <div>
        <Doroshenko />
      </div>
      <div>
        <Mnogogrish />
      </div>
      <div>
        <Samoylovich />
      </div>
    </div>
  )
}
