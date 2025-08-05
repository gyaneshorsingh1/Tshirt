// src/components/Navbar.jsx
import React, { useState } from "react";
import "./navbar.css";
import { FaShoppingCart, FaHeart, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Parent navbar container
  const navVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren", // make sure children animate after
        staggerChildren: 0.2, // delay between children
      },
    },
  };

  // Individual item animation
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  // For links specifically
  const linksContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // delay between each link
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
        variants={linksContainer} // special container for staggering links
        className={`nav-links ${menuOpen ? "active" : ""}`}
      >
        {["Home", "About", "Products", "Contact"].map((link) => (
          <motion.li key={link} variants={itemVariants}>
            <a href={`/${link.toLowerCase()}`}>{link}</a>
          </motion.li>
        ))}
      </motion.ul>

      {/* Icons */}
      <motion.div variants={itemVariants} className="nav-icons">
        <a href="/wishlist">
          <FaHeart />
        </a>
        <a href="/cart">
          <FaShoppingCart />
        </a>
      </motion.div>

      {/* Mobile Menu Toggle */}
      <motion.div
        variants={itemVariants}
        transition={{duration:0}}
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </motion.div>
    </motion.nav>
  );
}
