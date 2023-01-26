import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { Home } from './pages/Home'
import { Produtos } from './pages/Produtos'
import { Contato } from './pages/Contato'
import { Sobre } from './pages/Sobre'

export function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/produtos' element={<Produtos/>}/>
        <Route path='/contato' element={<Contato/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
      </Routes>
    </Router>
  )
}
