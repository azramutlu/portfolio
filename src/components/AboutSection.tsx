'use client';
import React, { useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { config } from '@/config/environment';

const AboutSection: React.FC = () => {
  const verticalLineVariants = useMemo(() => ({
    initial: { scaleY: 0 },
    animate: { scaleY: 1 }
  }), [])

  const horizontalLineVariants = useMemo(() => ({
    initial: { scaleX: 0 },
    animate: { scaleX: 1 }
  }), [])

  const aboutTextChars = useMemo(() => 
    "About me".split('').map((char, index) => ({ char, index }))
  , [])

  return (
    <section id="about" className="min-h-screen bg-[#222831] relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <motion.div 
        className="hidden xl:block absolute left-1/2 top-0 w-[1px] h-full bg-[rgba(238,238,238,0.1)]"
        variants={verticalLineVariants}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />

      <motion.div 
        className="hidden xl:block absolute left-0 top-3/4 w-full h-[1px] bg-[rgba(238,238,238,0.1)]"
        variants={horizontalLineVariants}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16 xl:gap-24">
          
          <div className="w-full lg:w-1/2 xl:w-5/12">
            <motion.div 
              className="mb-8 relative"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute left-0 -top-8 sm:-top-10 xl:-top-16">
                <Image 
                  src="/about-vector1.svg" 
                  alt="About Vector" 
                  width={62} 
                  height={47}
                  className="w-10 h-8 sm:w-12 sm:h-10 xl:w-16 xl:h-12 object-contain"
                />
              </div>
              
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight text-white relative">
                {aboutTextChars.map(({ char, index }) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    whileHover={{
                      scale: 1.2,
                      color: '#84A8B4',
                      textShadow: '0 0 20px rgba(132, 168, 180, 0.8)',
                      transition: { duration: 0.2 }
                    }}
                    viewport={{ once: true }}
                    style={{
                      cursor: 'pointer',
                      transformOrigin: 'center bottom'
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </h2>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="font-poppins text-base sm:text-lg xl:text-xl text-[rgba(238,238,238,0.75)] leading-relaxed">
                {config.aboutText}
              </p>
            
              <motion.div 
                className="absolute -right-8 top-8 sm:-right-12 sm:top-10 lg:-right-16 lg:top-12 hidden sm:block"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, 3, -3, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <Image 
                    src="/lightbulb.svg" 
                    alt="Lightbulb" 
                    width={78} 
                    height={100}
                    className="w-12 h-16 sm:w-16 sm:h-20 lg:w-20 lg:h-24 xl:w-24 xl:h-28 object-contain"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 xl:w-7/12 relative">
            <motion.div 
              className="relative"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="relative aspect-[736/649] w-full max-w-[736px] mx-auto"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: -3,
                  transition: { duration: 0.3 }
                }}
              >
                <Image 
                  src="/design-composition.png" 
                  alt="Design Composition" 
                  fill
                  className="object-contain"
                  priority
                />
                
                <motion.div 
                  className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-1/3 h-4 sm:h-5 lg:h-6 bg-[rgba(0,0,0,0.5)] rounded-full blur-sm"
                  animate={{ scaleX: [1, 1.05, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>

              <motion.div 
                className="absolute -bottom-8 -right-8 sm:-bottom-12 sm:-right-12 lg:-bottom-16 lg:-right-16 hidden sm:block"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <Image 
                  src="/about-vector2.svg" 
                  alt="About Vector 2" 
                  width={156} 
                  height={195}
                  className="w-20 h-24 sm:w-24 sm:h-28 lg:w-32 lg:h-36 xl:w-40 xl:h-44 object-contain"
                />
              </motion.div>
            </motion.div>

            <motion.div 
              className="hidden lg:block absolute right-0 -bottom-16 xl:-bottom-24"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Image 
                src="/student-magnifying.png" 
                alt="Student with Magnifying Glass" 
                width={350} 
                height={668}
                className="w-48 h-auto lg:w-64 xl:w-80 object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(AboutSection); 