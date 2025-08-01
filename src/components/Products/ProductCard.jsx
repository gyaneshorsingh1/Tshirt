import React from 'react';
import products from '../../data/ProductsData';
import "./productcard.css";

const ProductCard = () => {
  return (
    <div className='product-card-list'>
      {products.map((item)=>(
        <div key={item.id} className='product-card'>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <button>Buy Now</button>
        </div>
      ))}
    </div>
  )
}

export default ProductCard
