"use client";

import React, { useState } from 'react';
import * as motion from "motion/react-client"

const ReorderingDivs = () => {
  const [order, setOrder] = useState([1, 2]);
  const [yProps, setYProps] = useState({
    y1: 10,
    y2: 80,
    scale1: 1,
    scale2: 1,
  })

  const toggleOrder = () => {
    setYProps(prev => ({
      ...prev,
      y2: prev.y2 === 80 ? -30 : 80,
      scale1: prev.scale1 === 1 ? 0.5 : 1,
    }))
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-2xl relative">
        <motion.div
          key="div1"
          initial={{ y: 20 }}
          animate={{ y: yProps.y1, scale: yProps.scale1 }}
          transition={{ type: "spring" }}
          className="h-32 w-full rounded-lg flex items-center justify-center text-4xl font-bold text-white absolute bg-blue-500"
          style={{ top: '0' }}
        >
          Div {order[0]}
        </motion.div>

        <motion.div
          key="div2"
          initial={{ y: 80 }}
          animate={{ y: yProps.y2, scale: yProps.scale2 }}
          transition={{ type: "spring" }}
          className="h-32 w-full rounded-lg flex items-center justify-center text-4xl font-bold text-white absolute bg-purple-500 z-10 shadow-2xl"
          style={{ top: '4rem' }}
        >
          Div {order[1]}
        </motion.div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleOrder}
        className="fixed bottom-8 right-8 bg-black text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
      >
        Reorder Divs
      </motion.button>
    </div>
  );
};

export default ReorderingDivs;