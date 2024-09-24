"use client";

import { motion } from "framer-motion";
import EggEffect from "./components/EggEffect";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Pokers() {
  return (
    <motion.div
      className="flex flex-col md:flex-row flex-wrap justify-center items-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
    >
      <motion.div variants={itemVariants}>
        <EggEffect imageUrl="/images/card2.png" hoverText="About us" />
      </motion.div>
      <motion.div variants={itemVariants}>
        <EggEffect imageUrl="/images/card2.png" hoverText="Tokenomics" />
      </motion.div>
      {/* <motion.div variants={itemVariants}>
        <EggEffect imageUrl="/images/card2.png" hoverText="How to buy?" />
      </motion.div> */}
      {/* <motion.div variants={itemVariants}>
        <EggEffect imageUrl="/images/card2.png" hoverText="Faq" />
      </motion.div> */}
    </motion.div>
  );
}
