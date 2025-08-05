// src/pages/ProductDetails.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../../data/ProductsData.jsx";
import "./ProductDetails.css";
import { motion } from "framer-motion";

// Animation settings
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(
    product?.images?.[0] || product?.image
  );
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <>
      {/* Main Product Details Section */}
      <motion.div
        className="product-details"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Image Gallery */}
        <motion.div className="pd-image" variants={itemVariants}>
          <img
            src={selectedImage}
            alt={product.name}
            className="pd-main-image"
          />

          {/* Thumbnails */}
          <div className="thumbnail-gallery">
            {(product?.images || []).map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt={`${product.name} ${index + 1}`}
                className={`thumbnail ${
                  selectedImage === img ? "active" : ""
                }`}
                onClick={() => setSelectedImage(img)}
                variants={itemVariants}
              />
            ))}
          </div>
        </motion.div>

        {/* Info Section */}
        <motion.div className="product-info" variants={itemVariants}>
          <h2>{product.name}</h2>
          <p className="product-brand">
            <strong>Brand:</strong> {product.brand}
          </p>
          <p className="product-sku">
            <strong>SKU:</strong> {product.sku}
          </p>
          <p className="product-stock">
            <strong>Stock:</strong> {product.stock}
          </p>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <p className="product-description">{product.description}</p>
          <p>
            <strong>Material:</strong> {product.material}
          </p>
          <p>
            <strong>Rating:</strong> ⭐ {product.rating}
          </p>

          {/* Size Selector */}
          <motion.div className="product-sizes" variants={itemVariants}>
            <strong>Size:</strong>
            <div className="size-options">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`size-btn ${
                    selectedSize === size ? "active" : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Color Selector */}
          <motion.div className="product-colors" variants={itemVariants}>
            <strong>Color:</strong>
            <div className="color-options">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className={`color-btn ${
                    selectedColor === color ? "active" : ""
                  }`}
                  style={{ backgroundColor: color.toLowerCase() }}
                  onClick={() => setSelectedColor(color)}
                ></button>
              ))}
            </div>
          </motion.div>

          {/* Actions */}
          <motion.button className="add-to-cart" variants={itemVariants}>
            Add to Cart
          </motion.button>
          <motion.div variants={itemVariants}>
            <Link to="/" className="back-link">
              ← Back to Products
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Extra Features Section */}
      <motion.div
        className="product-details extra-features"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.p variants={itemVariants}>{product.delivery}</motion.p>
        <motion.p variants={itemVariants}>{product.shipping}</motion.p>
        <motion.p variants={itemVariants}>{product.returns}</motion.p>
      </motion.div>
    </>
  );
}
