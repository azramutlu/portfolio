'use client';
import React, { useCallback, useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { config } from '@/config/environment';

const Footer: React.FC = () => {
  const socialLinks = useMemo(() => [
    { icon: "globe", link: config.socialWebsite }
  ], [])

  const verticalLineVariants = useMemo(() => ({
    initial: { scaleY: 0 },
    animate: { scaleY: 1 }
  }), [])

  const horizontalLineVariants = useMemo(() => ({
    initial: { scaleX: 0 },
    animate: { scaleX: 1 }
  }), [])

  const quickLinks = useMemo(() => [
    { name: "Home", id: "home" },
    { name: "About Me", id: "about" },
    { name: "My Skills", id: "skills" },
    { name: "Contact", id: "contact" }
  ], [])

  const brandNameChars = useMemo(() => 
    config.brandName.split('').map((char, index) => ({ char, index }))
  , [])

  const policyLinks = useMemo(() => ["Privacy Policy", "Terms of Service"], [])

  const handleNavClick = useCallback((id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  }, [])

  return (
    <footer id="contact" className="bg-[#1a1e26] relative overflow-hidden">
      <motion.div 
        className="hidden xl:block absolute left-[512px] top-0 w-[1px] h-full bg-[rgba(238,238,238,0.1)]"
        variants={verticalLineVariants}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />

      <div className="px-4 md:px-8 lg:px-12 xl:px-24 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12 md:mb-16">
          
          <motion.div 
            className="lg:col-span-1"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="font-oswald font-bold text-2xl md:text-3xl text-[#EEEEEE] mb-4 md:mb-6 cursor-pointer"
              whileHover={{ 
                scale: 1.08,
                color: '#84A8B4',
                textShadow: '0 0 20px rgba(132, 168, 180, 0.8)'
              }}
            >
              {brandNameChars.map(({ char, index }) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  animate={{
                    y: [0, -8, 0],
                    rotateZ: [0, 3, -3, 0]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: index * 0.15,
                    ease: 'easeInOut'
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h3>
            <p className="font-poppins text-sm md:text-base text-[rgba(238,238,238,0.75)] leading-relaxed mb-6 max-w-md">
              {config.footerDescription}
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.icon}
                  href={social.link}
                  className="w-10 h-10 md:w-12 md:h-12 bg-[rgba(132,168,180,0.2)] rounded-full flex items-center justify-center hover:bg-[#84A8B4] transition-colors group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Image 
                    src={`/${social.icon}.svg`}
                    alt={social.icon}
                    width={20}
                    height={20}
                    className="w-4 h-4 md:w-5 md:h-5 object-contain group-hover:scale-110 transition-transform"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-1"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-poppins font-bold text-lg md:text-xl text-white mb-4 md:mb-6">
              Quick Links
            </h4>
            <div className="space-y-3 md:space-y-4">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={`#${link.id}`}
                  className="block font-poppins text-sm md:text-base text-[rgba(238,238,238,0.75)] hover:text-[#84A8B4] transition-colors"
                  whileHover={{ x: 5 }}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id);
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-1"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-poppins font-bold text-lg md:text-xl text-white mb-4 md:mb-6">
              Contact
            </h4>
            <div className="space-y-3 md:space-y-4">
              <motion.div 
                className="font-poppins text-sm md:text-base text-[rgba(238,238,238,0.75)]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                📧 {config.email}
              </motion.div>
              <motion.div 
                className="font-poppins text-sm md:text-base text-[rgba(238,238,238,0.75)]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                📱 {config.phone}
              </motion.div>
              <motion.div 
                className="font-poppins text-sm md:text-base text-[rgba(238,238,238,0.75)]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                📍 {config.location}
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-[rgba(238,238,238,0.1)] pt-6 md:pt-8"
          variants={horizontalLineVariants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p 
              className="font-poppins text-sm text-[rgba(238,238,238,0.6)] text-center md:text-left"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              © {config.copyrightYear} {config.brandName}. {config.copyrightText}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {policyLinks.map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="font-poppins text-sm text-[rgba(238,238,238,0.6)] hover:text-[#84A8B4] transition-colors text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 right-8 hidden xl:block"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <Image 
            src="/vr-woman.png" 
            alt="VR Woman" 
            width={120} 
            height={120}
            className="w-[80px] h-[80px] xl:w-[120px] xl:h-[120px] object-contain opacity-30"
          />
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default React.memo(Footer); 