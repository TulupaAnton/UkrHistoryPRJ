import './App.css'
import { Abstract } from './Pages/Abstract/Abstract'
import { Header } from './Components/Header/Header'
import { Routes, Route } from 'react-router-dom'
import { Tests } from './Pages/Testtt/Tests'
import { About } from './Pages/About/About'
import { Main } from './Pages/MainPage/Main'
import { Footer } from './Components/Footer/Footer'

function App () {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Abstarcts' element={<Abstract />} />
        <Route path='/Tests' element={<Tests />} />
        <Route path='/About' element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
