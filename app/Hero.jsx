"use client"

import { motion } from "framer-motion";

const entranceAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-start h-screen pt-20">
      <motion.h1
        className="text-7xl md:text-[200px] CFont text-[#d71214] font-bold text-center"
        variants={entranceAnimation}
        initial="hidden"
        animate="visible"
      >
        $Tony
      </motion.h1>
        <motion.p
          className="text-2xl CFont text-[#d71214] font-bold text-center max-w-3xl"
          variants={entranceAnimation}
          initial="hidden"
          animate="visible"
        >
         Meet $TONY, the ultimate high-roller memecoin that brings a touch of danger and a whole lot of swagger to the crypto world. 
        </motion.p>
        {/* hero image */}
        <img src="/images/heroImg.png" className="w-[50] h-[50]" />
    </div>
  );
}