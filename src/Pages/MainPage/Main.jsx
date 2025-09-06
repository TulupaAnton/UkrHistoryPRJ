import { Arrow } from '../../Components/ArrowRL/Arrow'
import { CardsInfo } from '../../Components/CardsInfo/CardsInfo'
import { Info } from '../../Components/MainInfo/Info'
import { Test } from '../../Components/TestCont/TestCont'

export function Main () {
  return (
    <>
      <div>
        <Info />
        <CardsInfo />
        <Arrow />
        <Test />
      </div>
    </>
  )
}
