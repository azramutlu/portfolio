'use client';
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { config } from '@/config/environment';

const LoadingScreen: React.FC = () => {
  const containerVariants = useMemo(() => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  }), [])

  const titleVariants = useMemo(() => ({
    animate: {
      scale: [1, 1.1, 1],
      rotate: [0, 5, -5, 0],
      textShadow: [
        '0 0 20px rgba(132, 168, 180, 0.8)',
        '0 0 30px rgba(132, 168, 180, 0.6)',
        '0 0 40px rgba(132, 168, 180, 0.4)',
        '0 0 30px rgba(132, 168, 180, 0.6)',
        '0 0 20px rgba(132, 168, 180, 0.8)'
      ]
    }
  }), [])

  const dotsVariants = useMemo(() => ({
    animate: {
      scale: [1, 1.05, 1]
    }
  }), [])

  const textVariants = useMemo(() => ({
    animate: {
      opacity: [0.5, 1, 0.5]
    }
  }), [])

  const dotElements = useMemo(() => 
    [0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="w-4 h-4 bg-[#84A8B4] rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 1, 0.3]
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: i * 0.2
        }}
      />
    ))
  , [])

  return (
    <motion.div 
      className="min-h-screen bg-[#222831] flex items-center justify-center relative overflow-hidden"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="text-center">
        <motion.div 
          className="font-oswald font-bold text-4xl md:text-6xl text-[#EEEEEE] mb-8"
          variants={titleVariants}
          animate="animate"
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          {config.brandName}
        </motion.div>
        
        <motion.div 
          className="flex space-x-2 justify-center mb-8"
          variants={dotsVariants}
          animate="animate"
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          {dotElements}
        </motion.div>
        
        <motion.p 
          className="font-poppins text-lg text-[rgba(238,238,238,0.75)]"
          variants={textVariants}
          animate="animate"
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default React.memo(LoadingScreen); 