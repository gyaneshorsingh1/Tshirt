// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import "./navbar.css";
import { FaShoppingCart, FaHeart, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext.jsx";
import { useAuth } from "../../context/AuthContext.jsx";
import { toast } from "react-toastify";
import { auth } from "../../firebase-config.js";
import { signOut } from "firebase/auth";

export default function Navbar() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();


  const [menuOpen, setMenuOpen] = useState(false);

  const { cart } = useCart();
  const { wishlist } = useWishlist();

  const navVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  const linksContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };


  return (
    <motion.nav variants={navVariants} initial="hidden" animate="visible">
      {/* Logo */}
      <motion.div variants={itemVariants} className="logo">
        Rare Robo
      </motion.div>

      {/* Navigation Links */}
      <motion.ul
        variants={linksContainer}
        className={`nav-links ${menuOpen ? "active" : ""}`}
      >
        {["Home", "About", "Products", "Contact"].map((link) => (
          <motion.li key={link} variants={itemVariants}>
            <Link
              to={`/${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </Link>
          </motion.li>
        ))}

        {currentUser ? (
          <motion.li variants={itemVariants}>
            <Link to="/Dashboard" className="logout-btn">
              Profile
            </Link>
          </motion.li>
        ) : (
          <motion.li variants={itemVariants}>
            <Link to="/register" onClick={() => setMenuOpen(false)}>
              Register
            </Link>
          </motion.li>
        )}
      </motion.ul>

      {/* Icons with counts */}
      <motion.div variants={itemVariants} className="nav-icons">
        <Link to="/wishlist" className="wishlist-link">
          <FaHeart />
          {wishlist.length > 0 && (
            <span className="count">{wishlist.length}</span>
          )}
        </Link>
        <Link to="/cart" className="cart-link">
          <FaShoppingCart />
          {cart.length > 0 && <span className="count">{cart.length}</span>}
        </Link>
      </motion.div>

      {/* Mobile Menu Toggle */}
      <motion.div
        variants={itemVariants}
        transition={{ duration: 0 }}
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </motion.div>
    </motion.nav>
  );
}
