import './App.css'

import { Header } from './Components/Header/Header'
import { Routes, Route, useParams } from 'react-router-dom'
import { About } from './Pages/About/About'
import { Main } from './Pages/MainPage/Main'
import { Footer } from './Components/Footer/Footer'
import { AncientHistoryPage } from './Pages/AncientHistoryPage/AncientHistoryPage'
import { ButtonUp } from './Components/ButtonUp/ButtonUp'
import { Abstract } from './Pages/Abstract/Abstract'
import { KievanRus } from './Pages/KievanRus/KievanRus'
import { Scroll } from './Components/AutoScroll/Scroll'
import { GaliciaVolynPower } from './Pages/GaliciaVolynPower/GaliciaVolynPower'
import { UdilniKnaz } from './Pages/UdilniKnaz/UdilniKnaz'
import { RichP } from './Pages/RP/RichP'
import { KozakGer } from './Pages/KozakGer/KozakGer'
import { NVV } from './Pages/NVV/NVV'
import { Ruina } from './Pages/Ruina/Ruina'
import { Mazepa } from './Pages/Mazepa/Mazepa'

function DynamicHistoryPage () {
  const { code } = useParams()
  const pageMap = {
    starodavna_ukr: AncientHistoryPage,
    kyivska_rus: KievanRus,
    galica_volin: GaliciaVolynPower,
    udilni_kniazivstva: UdilniKnaz,
    rich_pospolita: RichP,
    kozaki_ger: KozakGer,
    n_vv: NVV,
    ruina: Ruina,
    mazepa: Mazepa
  }

  const PageComponent = pageMap[code]
  if (!PageComponent) {
    return (
      <div className='text-center text-gray-200 p-10'>Сторінку не знайдено</div>
    )
  }
  return <PageComponent />
}

export default function App () {
  return (
    <>
      <Header />

      <Scroll />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/abstracts' element={<Abstract />} />
        <Route path='/about' element={<About />} />
        <Route path='/abstract/:code' element={<DynamicHistoryPage />} />
      </Routes>

      <ButtonUp />
      <Footer />
    </>
  )
}
