import React from 'react';
import Hero from './Hero';
import "./hero.css";
import "./home.css";
import ProductList from '../Products/ProductList';
import ProductScroller from '../Products/ProductsSlider';
import { motion } from 'framer-motion';

// Parent container variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // delay between each section
    },
  },
};

// Section variants
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Home = () => {
  return (
    <motion.div
      className='home'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.div className='hero-section' variants={sectionVariants}>
        <Hero />
      </motion.div>

      {/* Product List */}
      <motion.div variants={sectionVariants}
      transition={{duration:2}}
      >
        <ProductList />
      </motion.div>

      {/* Product Scroller */}
      <motion.div variants={sectionVariants}      >
        <ProductScroller />
      </motion.div>
    </motion.div>
  );
};

export default Home;
