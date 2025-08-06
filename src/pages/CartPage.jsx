import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import "./CartPage.css";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const handleBuySelected = () => {
    if (selectedItems.length === 0) {
      alert("Please select at least one product to buy.");
      return;
    }
    const selectedProducts = cart.filter((item) =>
      selectedItems.includes(item.id)
    );
    console.log("Buying these products:", selectedProducts);
    alert(`Proceeding to checkout with ${selectedProducts.length} products.`);
    // Redirect to checkout here
  };

  if (cart.length === 0) return <h2 className="cart-page">Your cart is empty</h2>;

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <input
              type="checkbox"
              className="cart-checkbox"
              checked={selectedItems.includes(item.id)}
              onChange={() => handleSelect(item.id)}
            />
            <img src={item.images[0]} alt={item.name} />
            <div className="cart-item-info">
              <p><strong>{item.name}</strong></p>
              <p>${item.price}</p>
              <p>Qty: {item.quantity}</p>
            </div>
            <div className="cart-item-actions">
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        <button className="buy-selected-btn" onClick={handleBuySelected}>
          Buy Selected
        </button>
        <button className="clear-cart-btn" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    </div>
  );
}
