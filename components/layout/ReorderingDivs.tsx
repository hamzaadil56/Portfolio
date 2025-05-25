"use client";

import React, { useState } from 'react';
import * as motion from "motion/react-client"

const ReorderingDivs = () => {
  const [order, setOrder] = useState([1, 2]);
  const [yProps,setYProps] = useState({
    y1: 20,
    y2: 80,
  })

  const toggleOrder = () => {
    setOrder(prev => prev[0] === 1 ? [2, 1] : [1, 2]);
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-2xl relative">
        < >
          {order.map((num, index) => (
            <motion.div
              key={num}
              initial={{
                y: index === 0 ? 20 : 80,
              }}
              animate={{
                y: index === 0 ? yProps.y1 : yProps.y2,
              }}
              
              transition={{ type: "spring" }}
              className={`h-32 w-full rounded-lg flex items-center justify-center text-4xl font-bold text-white absolute ${
                num === 1 ? 'bg-blue-500 z-10' : 'bg-purple-500 z-0'
              }`}
              style={{
                top: index === 0 ? '0' : '4rem'
              }}
            >
              Div {num}
            </motion.div>
          ))}
        </>
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