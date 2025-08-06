import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import "./WishlistPage.css";
import { FaShoppingCart, FaHeartBroken } from "react-icons/fa";

export default function WishlistPage() {
  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (wishlist.length === 0)
    return <h2 className="wishlist-page">Your wishlist is empty</h2>;

  return (
    <div className="wishlist-page">
      <h2>Your Wishlist</h2>
      <div className="wishlist-items">
        {wishlist.map((item) => (
          <div key={item.id} className="wishlist-item">
            <img src={item.images[0]} alt={item.name} />
            <p><strong>{item.name}</strong></p>
            <p>${item.price}</p>
            <div className="wishlist-buttons">
              <button
                className="icon-btn add-cart-icon"
                onClick={() => addToCart(item)}
                title="Add to Cart"
              >
                <FaShoppingCart />
              </button>
              <button
                className="icon-btn remove-icon"
                onClick={() => toggleWishlist(item)}
                title="Remove from Wishlist"
              >
                <FaHeartBroken />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
