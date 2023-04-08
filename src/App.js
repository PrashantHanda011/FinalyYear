import React from 'react'
import { Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import Landing from './pages/Landing'
import './Styles/common/common.css'
import './App.css'
import Question from './pages/Question'
import Result from './pages/Result'
function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        {/* <Route exact path='/' element={<Home />} /> */}
        <Route exact path='/questions' element={<Question />} />
        <Route exact path='/result' element={<Result />} />
      </Routes>
    </>
  )
}

export default App