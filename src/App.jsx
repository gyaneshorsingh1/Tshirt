import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import ProductDetails from './components/ProductDetails/ProductDetails'
import ScrollToTop from './ScrollToTop'
import CartPage from './pages/CartPage'
import WishlistPage from './pages/WishlistPage'

function App() {


  return (
    <>
      <div className='full-app'>
        <ScrollToTop />
        <Navbar />
        <Routes>
           <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
           <Route path='product/:id' element={<ProductDetails />} />
           <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
