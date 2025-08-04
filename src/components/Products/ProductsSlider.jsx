// src/components/ProductScroller.jsx
import React, { useRef } from "react";
import products from "../../data/ProductsData.jsx";
import "./ProductScroller.css";

export default function ProductScroller() {
  const scrollerRef = useRef(null);

  const scrollLeft = () => {
    scrollerRef.current.scrollBy({ left: -220, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollerRef.current.scrollBy({ left: 220, behavior: "smooth" });
  };

  return (
    <div className="product-section">
      <h2>🔥 Featured Products</h2>
      
      <div className="scroll-container">
        <button className="scroll-btn left" onClick={scrollLeft}>⬅</button>
        <div className="product-scroller" ref={scrollerRef}>
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.images} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={scrollRight}>➡</button>
      </div>
    </div>
  );
}
