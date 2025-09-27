import { Culture } from '../../Components/GaliciaVolynPower/Culture'
import { Danil } from '../../Components/GaliciaVolynPower/Danil'
import { Formatting } from '../../Components/GaliciaVolynPower/Formatting'
import { Navala } from '../../Components/GaliciaVolynPower/Navala'
import { Posterity_of_Danil } from '../../Components/GaliciaVolynPower/Posterity_of_Danil'
import { Roman } from '../../Components/GaliciaVolynPower/Roman'
import { Smuta } from '../../Components/GaliciaVolynPower/Smuta'
import { Galica_Test } from '../Testtt/GalicaVolynPower/Galica_Test'

export function GaliciaVolynPower () {
  return (
    <div>
      <div>
        <Formatting />
      </div>
      <div>
        <Roman />
      </div>
      <div>
        <Smuta />
      </div>
      <div>
        <Navala />
      </div>
      <div>
        <Danil />
      </div>
      <div>
        <Posterity_of_Danil />
      </div>
      <div>
        <Culture />
      </div>
      <div>
        <Galica_Test />
      </div>
    </div>
  )
}
