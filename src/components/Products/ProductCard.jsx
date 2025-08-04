// src/components/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";
import "./productCard.css";

export default function ProductCard({ product }) {
  const { id, name, brand, price, images, rating } = product;

  return (
    <div className="product-card">
      <Link to={`/product/${id}`}>
        <div className="product-image">
          <img src={images[0]} alt={name} className="main-img" />
          {images[1] && <img src={images[1]} alt={name} className="hover-img" />}
        </div>
      </Link>

      <div className="product-info">
        <h4 className="product-brand">{brand}</h4>
        <h3 className="product-name">{name}</h3>
        <p className="product-price">${price.toFixed(2)}</p>

        <div className="product-rating">
          {[...Array(5)].map((_, index) =>
            index < Math.round(rating) ? (
              <FaStar key={index} className="star filled" />
            ) : (
              <FaRegStar key={index} className="star" />
            )
          )}
        </div>
      </div>
    </div>
  );
}
