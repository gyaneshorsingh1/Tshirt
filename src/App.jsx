import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router'
import Home from './components/Home/Home'

function App() {


  return (
    <>
      <div className='full-app'>
        <Navbar />
        <Routes>
           <Route path='/' element={<Home />} />
           
        </Routes>
      </div>
    </>
  )
}

export default App
