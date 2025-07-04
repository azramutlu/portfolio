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
    <section id="about" className="min-h-screen bg-[#222831] relative overflow-hidden">
      <motion.div 
        className="hidden xl:block absolute left-[512px] top-0 w-[1px] h-full bg-[rgba(238,238,238,0.1)]"
        variants={verticalLineVariants}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />

      <motion.div 
        className="hidden xl:block absolute left-0 top-[892px] w-full h-[1px] bg-[rgba(238,238,238,0.1)]"
        variants={horizontalLineVariants}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      />

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between min-h-screen px-4 md:px-8 lg:px-12 xl:px-0 py-8 md:py-16 lg:py-24 xl:py-0 gap-8 lg:gap-12 xl:gap-0">
        
        <div className="flex-1 lg:max-w-[500px] xl:ml-[96px] xl:mt-[135px] order-2 lg:order-1">
          <motion.div 
            className="mb-6 md:mb-8 relative"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute left-0 top-[-30px] md:top-[-40px] xl:top-[-121px]">
              <Image 
                src="/about-vector1.svg" 
                alt="About Vector" 
                width={62} 
                height={47}
                className="w-[40px] h-[30px] md:w-[50px] md:h-[38px] xl:w-[62px] xl:h-[47px] object-contain"
              />
            </div>
            
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] leading-[1.5em] text-white relative">
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
            <p className="font-poppins text-sm sm:text-base md:text-lg text-[rgba(238,238,238,0.75)] leading-[1.5em] mb-4 pr-4 lg:pr-0 lg:max-w-[389px]">
              {config.aboutText}
            </p>
          
            <motion.div 
              className="absolute right-[-30px] top-[20px] sm:right-[-40px] sm:top-[30px] lg:right-[-60px] lg:top-[40px] xl:left-[348px] xl:top-[-105px] hidden sm:block"
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
                  className="w-[50px] h-[64px] sm:w-[60px] sm:h-[77px] lg:w-[70px] lg:h-[90px] xl:w-[78px] xl:h-[100px] object-contain"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <div className="flex-1 flex flex-col items-center lg:items-end xl:items-start relative order-1 lg:order-2 w-full lg:w-auto">
          <motion.div 
            className="relative mb-8 lg:mb-0 xl:ml-[493px] xl:mt-[120px]"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="relative w-[280px] h-[247px] sm:w-[350px] sm:h-[309px] md:w-[450px] md:h-[397px] lg:w-[520px] lg:h-[459px] xl:w-[736px] xl:h-[649px]"
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
              />
              
              <motion.div 
                className="absolute bottom-[-8px] right-[-8px] sm:bottom-[-12px] sm:right-[-12px] lg:bottom-[-15px] lg:right-[-15px] xl:bottom-[799px] xl:right-[890px] w-[120px] h-[12px] sm:w-[140px] sm:h-[14px] lg:w-[160px] lg:h-[16px] xl:w-[212px] xl:h-[24px] bg-[rgba(0,0,0,0.5)] rounded-full blur-sm"
                animate={{ scaleX: [1, 1.05, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            <motion.div 
              className="absolute bottom-[-30px] right-[-40px] sm:bottom-[-40px] sm:right-[-50px] lg:bottom-[-50px] lg:right-[-60px] xl:left-[-332px] xl:top-[486px] hidden sm:block"
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
                className="w-[80px] h-[100px] sm:w-[100px] sm:h-[125px] lg:w-[120px] lg:h-[150px] xl:w-[156px] xl:h-[195px] object-contain"
              />
            </motion.div>
          </motion.div>

          <motion.div 
            className="hidden lg:static xl:absolute xl:left-[806px] xl:top-[256px] sm:flex justify-center lg:justify-start"
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
              className="w-[150px] h-[286px] sm:w-[180px] sm:h-[344px] md:w-[200px] md:h-[382px] lg:w-[250px] lg:h-[477px] xl:w-[350px] xl:h-[668px] object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(AboutSection); 