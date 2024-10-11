import React from 'react'
import Home from './pages/home.jsx'
import Com from './computer/computer.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/com' element={<Com/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
