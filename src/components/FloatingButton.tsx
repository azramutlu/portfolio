'use client';
import React, { useCallback, useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface FloatingButtonProps {
  currentSection: string;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ currentSection }) => {
  const floatingButtonVariants = useMemo(() => ({
    initial: { scale: 0, opacity: 0, y: 100 },
    animate: { scale: 1, opacity: 1, y: 0 },
    hover: { 
      scale: 1.05,
      backgroundColor: "rgba(132, 168, 180, 0.9)"
    }
  }), [])

  const sectionOrder = useMemo(() => ['home', 'about', 'skills', 'contact'], [])

  const handleClick = useCallback(() => {
    const currentIndex = sectionOrder.indexOf(currentSection);
    const nextIndex = currentIndex === sectionOrder.length - 1 ? 0 : currentIndex + 1;
    const nextSection = sectionOrder[nextIndex];
    
    const targetSection = document.getElementById(nextSection);
    targetSection?.scrollIntoView({ behavior: 'smooth' });
  }, [currentSection, sectionOrder])

  const isLastSection = useMemo(() => currentSection === 'contact', [currentSection])

  return (
    <motion.div 
      className="fixed right-6 bottom-6 md:right-8 md:bottom-8 xl:right-12 xl:bottom-12 w-14 h-14 md:w-16 md:h-16 xl:w-20 xl:h-20 bg-gradient-to-r from-[rgba(57,62,70,0.9)] to-[rgba(132,168,180,0.3)] backdrop-blur-[12px] rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition-shadow z-50 border border-[rgba(132,168,180,0.2)]"
      variants={floatingButtonVariants}
      initial="initial"
      animate="animate"
      whileHover={{
        scale: 1.1,
        rotate: [0, 15, -15, 0],
        boxShadow: '0 0 30px rgba(132, 168, 180, 0.6)',
        background: 'linear-gradient(45deg, rgba(132,168,180,0.8), rgba(57,62,70,0.9))'
      }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      onClick={handleClick}
    >
      <motion.div
        animate={{ 
          y: [0, 8, 0],
          rotate: isLastSection ? 180 : 0
        }}
        transition={{ 
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 0.5, ease: "easeInOut" }
        }}
      >
        <Image 
          src="/scroll-down-icon.svg" 
          alt={isLastSection ? "Scroll Up" : "Scroll Down"} 
          width={24} 
          height={24}
          className="w-5 h-5 md:w-6 md:h-6 xl:w-7 xl:h-7 text-[rgba(238,238,238,0.8)]"
        />
      </motion.div>
    </motion.div>
  );
};

export default React.memo(FloatingButton); 