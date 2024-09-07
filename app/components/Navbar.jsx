"use client";

import React from "react";
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const iconVariants = {
  animate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 2,
      ease: "linear",
    },
  },
  hover: {
    scale: 1.2,
    rotate: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
};

export default function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col sm:flex-row justify-between p-4 items-center CFont"
    >
      {/* social links */}
      <div className="flex flex-row space-x-4 mb-4 sm:mb-0">
        {[<FaTelegramPlane />, <FaXTwitter />, <FaInstagram />].map(
          (Icon, index) => (
            <motion.div
              key={index}
              className="bgimg flex items-center justify-center bg-cover w-10 h-10 sm:w-[100px] sm:h-[100px] rounded-full"
              variants={iconVariants}
              animate="animate"
              whileHover="hover"
            >
              {React.cloneElement(Icon, {
                className: "text-2xl sm:text-3xl text-white",
              })}
            </motion.div>
          )
        )}
      </div>
      {/* long button */}
      <motion.div
        initial="initial"
        whileHover="hover"
        variants={buttonVariants}
        className="w-full sm:w-auto"
      >
        <div className="bg-[#E38412] glass px-4 sm:px-6 py-2 sm:py-3 rounded-3xl text-white uppercase font-bold shadow-lg shadow-red-400 text-center sm:text-left">
          Tony's Casino
        </div>
      </motion.div>
    </motion.div>
  );
}
