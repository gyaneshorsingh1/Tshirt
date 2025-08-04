import React from 'react'
import Hero from './Hero';
import "./hero.css";
import "./home.css";
import ProductList from '../Products/ProductList';
import ProductScroller from '../Products/ProductsSlider';

const Home = () => {
  return (
    <div className='home'>
      <div className='hero-section'>
        <Hero />
      </div>
      <div>
        <ProductList />
      </div>
      <div>
        <ProductScroller />
      </div>
    </div>
  )
}

export default Home
