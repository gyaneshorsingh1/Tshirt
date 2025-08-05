// src/components/ProductScroller.jsx
import React, { useRef } from "react";
import products from "../../data/ProductsData.jsx";
import "./ProductScroller.css";
import { motion } from "framer-motion";

export default function ProductScroller() {
  const scrollerRef = useRef(null);

  const scrollLeft = () => {
    scrollerRef.current.scrollBy({ left: -220, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollerRef.current.scrollBy({ left: 220, behavior: "smooth" });
  };

  // Parent container animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // delay between each product card
      },
    },
  };

  // Each card animation
  const itemVariants = {
    hidden: { opacity: 0, y: 10,  },
    visible: { opacity: 1, y: 0,transition: { duration: 0.4 } },
  };

  return (
    <div className="product-section">
      <h2>🔥 Featured Products</h2>

      <div className="scroll-container">
        <button className="scroll-btn left" onClick={scrollLeft}>⬅</button>

        {/* Motion scroller container */}
        <motion.div
          className="product-scroller"
          ref={scrollerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
        >
          {products.map((product) => (
            <motion.div
              className="product-card"
              key={product.id}
              variants={itemVariants}
            >
              <img src={product.images} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </motion.div>
          ))}
        </motion.div>

        <button className="scroll-btn right" onClick={scrollRight}>➡</button>
      </div>
    </div>
  );
}
