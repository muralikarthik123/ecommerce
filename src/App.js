import React from 'react'
import Header from './header/header.jsx'
import Home from './pages/home.jsx'
import Com from './computer/computer.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/com' element={<Com/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
