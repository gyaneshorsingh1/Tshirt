import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import ProductDetails from './components/ProductDetails/ProductDetails'

function App() {


  return (
    <>
      <div className='full-app'>
        <Navbar />
        <Routes>
           <Route path='/' element={<Home />} />
           <Route path='product/:id' element={<ProductDetails />} />
           
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
