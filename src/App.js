import React from 'react'
import { Routes,Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home'
function App() {
  return (
    <>
          <Routes>
            <Route exact path='/' element={<Home />} /> 
            </Routes>
    </>
  )
}

export default App