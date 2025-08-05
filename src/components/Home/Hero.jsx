import React from 'react'
import banner from "../../assets/banner.webp/";
import {motion} from "framer-motion";
const Hero = () => {
  return (
    <motion.div 
    initial={{
      opacity:0,
      x:50
    }}
    animate={{
      opacity:1,
      x:0
    }}
    transition={{
      duration:2
    }}
    className='hero-img'>
      <img src={banner} alt="" />
    </motion.div>
  )
}

export default Hero
