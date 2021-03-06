import React from 'react'
import './assets/css/base/base.css'
import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Pagina404 from './paginas/Pagina404'
import Cabecalho from './components/Cabecalho'


function App() {
  return (
    <Router>
      <Cabecalho />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sobre' element={<Sobre />} />
      <Route path="*" element={<Pagina404 />} />
    </Routes>
  </Router>
  )
}

export default App
