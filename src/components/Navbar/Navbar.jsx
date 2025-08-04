// src/components/Navbar.jsx
import React, { useState } from "react";
import "./navbar.css";
import { FaShoppingCart, FaHeart, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      {/* Logo */}
      <div className="logo">MyShop</div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      {/* Icons */}
      <div className="nav-icons">
        <a href="/wishlist"><FaHeart /></a>
        <a href="/cart"><FaShoppingCart /></a>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}
