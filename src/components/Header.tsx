'use client';
import React, { useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { config } from '@/config/environment';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const headerVariants = useMemo(() => ({
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  }), [])

  const mobileMenuVariants = useMemo(() => ({
    initial: { height: 0, opacity: 0 },
    animate: { height: 'auto', opacity: 1 },
    exit: { height: 0, opacity: 0 }
  }), [])

  const handleNavClick = useCallback((id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  }, [setMobileMenuOpen])

  const handleMobileMenuToggle = useCallback(() => {
    setMobileMenuOpen(!mobileMenuOpen)
  }, [mobileMenuOpen, setMobileMenuOpen])

  const brandNameChars = useMemo(() => 
    config.brandName.split('').map((char, index) => ({ char, index }))
  , [])

  const navItems = useMemo(() => [
    { name: "Home", id: "home" },
    { name: "About Me", id: "about" },
    { name: "Contact", id: "contact" }
  ], [])

  return (
    <motion.header 
      className="flex justify-between items-center px-4 py-6 md:px-12 md:py-8 xl:px-24 xl:py-12 relative z-10"
      variants={headerVariants}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div 
        className="font-oswald font-bold text-xl md:text-2xl text-[#EEEEEE] relative cursor-pointer"
        whileHover={{ 
          scale: 1.08,
          color: '#84A8B4',
          textShadow: '0 0 15px rgba(132, 168, 180, 0.8)'
        }}
        transition={{ duration: 0.2 }}
      >
        {brandNameChars.map(({ char, index }) => (
          <motion.span
            key={index}
            className="inline-block"
            animate={{
              y: [0, -5, 0],
              rotateZ: [0, 2, -2, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.1,
              ease: 'easeInOut'
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
      
      <nav className="hidden md:flex gap-6 lg:gap-12">
        {navItems.map((item, index) => (
          <motion.a 
            key={item.name}
            href={`#${item.id}`} 
            className="font-poppins text-base lg:text-lg text-[#EEEEEE] hover:text-[#84A8B4] transition-colors"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            whileHover={{ scale: 1.05, y: -2 }}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(item.id);
            }}
          >
            {item.name}
          </motion.a>
        ))}
      </nav>

      <motion.button 
        className="md:hidden text-[#EEEEEE] text-2xl"
        onClick={handleMobileMenuToggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
      >
        ☰
      </motion.button>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav 
            className="absolute top-full left-0 right-0 bg-[#222831] border-t border-[rgba(238,238,238,0.1)] md:hidden overflow-hidden"
            variants={mobileMenuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="flex flex-col px-4 py-4 gap-4">
              {navItems.map((item, index) => (
                <motion.a 
                  key={item.name}
                  href={`#${item.id}`} 
                  className="font-poppins text-lg text-[#EEEEEE] hover:text-[#84A8B4] transition-colors"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default React.memo(Header); 