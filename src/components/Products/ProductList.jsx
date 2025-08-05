import React from "react";
import products from "../../data/ProductsData";
import ProductCard from "./ProductCard";
import "./productlist.css";
import { motion } from "framer-motion";

// Parent container animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // delay between each product card
    },
  },
};

// Each product card animation
const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.5 } },
};

export default function ProductList() {
  return (
    <div className="our-products">
      <div className="hot-deal">
        <div className="line"></div>
        <h2>Hot Deals</h2>
        <div className="line"></div>
      </div>

      {/* Motion container for stagger animation */}
      <motion.div
        className="product-list"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // animate when in view
        viewport={{ once: true, amount: 0.2 }} // only once, start when 20% visible
      >
        {products.map((product) => (
          <motion.div key={product.id} variants={itemVariants}>
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
