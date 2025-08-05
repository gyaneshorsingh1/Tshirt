// src/components/Footer.jsx
import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

// Parent animation for staggering
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // delay between each section
    },
  },
};

// Each section animation
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // trigger when 20% visible
    >
      <motion.div className="footer-container" variants={containerVariants}>
        
        {/* Navigation Links */}
        <motion.div className="footer-section" variants={itemVariants}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </motion.div>

        {/* About */}
        <motion.div className="footer-section" variants={itemVariants}>
          <h3>About Us</h3>
          <p>
            We offer high-quality products and aim to provide the best shopping
            experience. Your satisfaction is our top priority.
          </p>
        </motion.div>

        {/* Social Media */}
        <motion.div className="footer-section" variants={itemVariants}>
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </motion.div>

        {/* Email Subscription */}
        <motion.div className="footer-section" variants={itemVariants}>
          <h3>Subscribe</h3>
          <div className="subscribe-box">
            <input type="email" name="email" id="email" placeholder="Enter your email" />
            <button><FaEnvelope /></button>
          </div>
        </motion.div>
      </motion.div>

      {/* Footer Bottom */}
      <motion.div className="footer-bottom" variants={itemVariants}>
        <p>© {new Date().getFullYear()} MyShop. All rights reserved.</p>
      </motion.div>
    </motion.footer>
  );
}
