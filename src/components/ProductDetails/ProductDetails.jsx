// src/pages/ProductDetails.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../../data/ProductsData.jsx";
import "./ProductDetails.css";

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
      <div className="product-details">
        {/* Image Gallery */}
        <div className="pd-image">
          <img
            src={selectedImage}
            alt={product.name}
            className="pd-main-image"
          />

          {/* Thumbnails */}
          <div className="thumbnail-gallery">
            {(product?.images || []).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.name} ${index + 1}`}
                className={`thumbnail ${selectedImage === img ? "active" : ""}`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="product-info">
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
          <div className="product-sizes">
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
          </div>

          {/* Color Selector */}
          <div className="product-colors">
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
          </div>

          {/* Actions */}
          <button className="add-to-cart">Add to Cart</button>
          <Link to="/" className="back-link">
            ← Back to Products
          </Link>
        </div>
      </div>
      <div className="product-details extra-features">
        <p>
          {product.delivery}
        </p>
        <p>
           {product.shipping}
        </p>
        <p>
          {product.returns}
        </p>
      </div>
    </>
  );
}
