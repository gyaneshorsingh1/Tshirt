import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaRegStar, FaHeart, FaRegHeart } from "react-icons/fa";

import "./ProductCard.css";
import { useCart } from "../../context/CartContext.jsx";
import { useWishlist } from "../../context/WishlistContext.jsx";

export default function ProductCard({ product }) {
  const { id, name, brand, price, images, rating } = product;
  const { addToCart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();

  const isWishlisted = wishlist.some((item) => item.id === id);

  return (
    <div className="product-card">
      <div
        className="wishlist-icon"
        onClick={(e) => {
          e.preventDefault();
          toggleWishlist(product);
        }}
      >
        {isWishlisted ? (
          <FaHeart className="heart filled" />
        ) : (
          <FaRegHeart className="heart" />
        )}
      </div>

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

        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
