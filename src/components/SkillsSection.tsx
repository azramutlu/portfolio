'use client';
import React, { useMemo, useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { config } from '@/config/environment';
import Spline from "@splinetool/react-spline";


const SkillsSection: React.FC = () => {
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const [splineError, setSplineError] = useState(false);
  const [userPrefers3D, setUserPrefers3D] = useState(true);
  const splineRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleSplineLoad = useCallback(() => {
    setIsSplineLoaded(true);
    setSplineError(false);
  }, []);

  const handleSplineError = useCallback(() => {
    setSplineError(true);
    setIsSplineLoaded(false);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
    
    if (prefersReducedMotion || isLowEndDevice) {
      setUserPrefers3D(false);
      return;
    }

    if (!splineRef.current || !userPrefers3D) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldLoadSpline && userPrefers3D) {
            setTimeout(() => {
              setShouldLoadSpline(true);
            }, 800);
            observerRef.current?.disconnect();
          }
        });
      },
      { 
        threshold: 0.2,
        rootMargin: '100px'
      }
    );

    observerRef.current.observe(splineRef.current);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [shouldLoadSpline, userPrefers3D]);
  const skillCardVariants = useMemo(() => ({
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    hover: { 
      y: -10,
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  }), [])

  const verticalLineVariants = useMemo(() => ({
    initial: { scaleY: 0 },
    animate: { scaleY: 1 }
  }), [])

  const skills = useMemo(() => [
    {
      name: "Figma",
      icon: "/figma.png",
      description: "UI/UX Design & Prototyping"
    },
    {
      name: "Adobe Illustrator", 
      icon: "/adobe.png",
      description: "Vector Graphics & Illustrations"
    },
    {
      name: "React",
      icon: "/react.png", 
      description: "Frontend Development"
    },
    {
      name: "Next.js",
      icon: "/nextjs.png",
      description: "Full-Stack Framework"
    }
  ], [])

  return (
    <section id="skills" className="min-h-screen bg-[#222831] relative overflow-hidden">
      <motion.div 
        className="hidden xl:block absolute left-[512px] top-0 w-[1px] h-full bg-[rgba(238,238,238,0.1)]"
        variants={verticalLineVariants}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />

      <div className="px-4 md:px-8 lg:px-12 xl:px-0 py-16 md:py-24 xl:py-32">
        <div className="text-center mb-16 md:mb-20 xl:mb-24">
          <motion.div 
            className="relative inline-block"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] text-white mb-4 relative">
              <motion.span
                className="inline-block mr-4 bg-gradient-to-r from-[#84A8B4] via-[#EEEEEE] to-[#84A8B4] bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                style={{
                  backgroundSize: '200% 100%',
                  filter: 'drop-shadow(0 0 15px rgba(132, 168, 180, 0.4))'
                }}
              >
                My
              </motion.span>
              <motion.span
                className="inline-block relative"
                animate={{
                  rotateY: [0, 15, -15, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                style={{
                  color: '#EEEEEE',
                  textShadow: '0 0 25px rgba(238, 238, 238, 0.6)'
                }}
              >
                Skills
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#84A8B4] to-[#EEEEEE] rounded-full"
                  animate={{
                    scaleX: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
              </motion.span>
            </h2>
          </motion.div>
          
          <motion.p 
            className="font-poppins text-base md:text-lg text-[rgba(238,238,238,0.75)] max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {config.skillsDescription}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-[rgba(57,62,70,0.8)] backdrop-blur-sm rounded-3xl p-6 md:p-8 text-center group cursor-pointer relative overflow-hidden"
              variants={skillCardVariants}
              initial="initial"
              whileInView="animate"
              whileHover={{
                y: -15,
                scale: 1.08,
                rotateY: 5,
                boxShadow: '0 20px 40px rgba(132, 168, 180, 0.3)',
                background: 'linear-gradient(135deg, rgba(132, 168, 180, 0.2), rgba(57, 62, 70, 0.9))',
                transition: { duration: 0.3 }
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#84A8B4] to-[#EEEEEE] opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />
              <motion.div 
                className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 relative"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.6 }}
              >
                <Image 
                  src={skill.icon}
                  alt={skill.name}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
              
              <h3 className="font-poppins font-bold text-lg md:text-xl text-white mb-2 md:mb-3">
                {skill.name}
              </h3>
              
              <p className="font-poppins text-sm md:text-base text-[rgba(238,238,238,0.75)] leading-relaxed">
                {skill.description}
              </p>
              
              <motion.div 
                className="w-0 h-[2px] bg-[#84A8B4] mx-auto mt-4 group-hover:w-full transition-all duration-500"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16 md:mt-20"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div 
            ref={splineRef}
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] mb-8 md:mb-12 rounded-3xl overflow-hidden relative"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {!shouldLoadSpline || !userPrefers3D || splineError ? (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[rgba(57,62,70,0.9)] via-[rgba(132,168,180,0.1)] to-[rgba(57,62,70,0.9)] rounded-3xl relative overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#84A8B4] via-transparent to-[#84A8B4] opacity-20"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                
                <div className="relative z-10 text-center">
                  <motion.div className="relative mb-8">
                    <motion.div 
                      className="w-20 h-20 border-[3px] border-[#84A8B4] rounded-full mx-auto relative"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <motion.div 
                        className="absolute top-1 left-1 w-3 h-3 bg-[#84A8B4] rounded-full"
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [1, 0.5, 1] 
                        }}
                        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <motion.div 
                        className="absolute bottom-1 right-1 w-2 h-2 bg-[#EEEEEE] rounded-full"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5] 
                        }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </motion.div>
                    
                    <motion.div 
                      className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-[1px] border-[rgba(132,168,180,0.3)] rounded-full"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.1, 0.3] 
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="mb-6"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <motion.h3 
                      className="text-xl font-bold bg-gradient-to-r from-[#84A8B4] to-[#EEEEEE] bg-clip-text text-transparent font-poppins mb-2"
                      animate={{ 
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      style={{ backgroundSize: '200% 100%' }}
                    >
                      {splineError ? 'Interactive Preview' : !userPrefers3D ? 'Performance Mode' : 'Loading 3D Experience'}
                    </motion.h3>
                    <motion.p 
                      className="text-[rgba(238,238,238,0.6)] font-poppins text-sm"
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {splineError ? 'Unable to load 3D content' : !userPrefers3D ? 'Optimized for your device' : 'Preparing interactive elements...'}
                    </motion.p>
                    {(splineError || !userPrefers3D) && (
                      <motion.button
                        onClick={() => {
                          setUserPrefers3D(true);
                          setSplineError(false);
                          setShouldLoadSpline(true);
                        }}
                        className="mt-4 px-4 py-2 bg-[#84A8B4] text-white rounded-lg text-sm font-medium hover:bg-[#6d8a94] transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Enable 3D View
                      </motion.button>
                    )}
                  </motion.div>
                  
                  <motion.div className="flex justify-center space-x-1">
                    {[0, 1, 2, 3, 4].map((index) => (
                      <motion.div
                        key={index}
                        className="w-2 h-2 bg-[#84A8B4] rounded-full"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.3, 1, 0.3]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.1
                        }}
                      />
                    ))}
                  </motion.div>
                </div>
                
                <motion.div 
                  className="absolute top-4 right-4 w-8 h-8 border border-[rgba(132,168,180,0.3)] rounded-lg"
                  animate={{ 
                    rotate: [0, 90, 180, 270, 360],
                    scale: [1, 1.1, 1] 
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                
                <motion.div 
                  className="absolute bottom-6 left-6 w-4 h-4 bg-gradient-to-r from-[#84A8B4] to-[#EEEEEE] rounded-full"
                  animate={{ 
                    y: [0, -10, 0],
                    opacity: [0.3, 0.8, 0.3] 
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            ) : (
              <motion.div
                className="w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: isSplineLoaded ? 1 : 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <Spline
                  scene="https://prod.spline.design/8g2w2YVQfw5X0-f7/scene.splinecode"
                  onLoad={handleSplineLoad}
                  onError={handleSplineError}
                  style={{ 
                    width: '100%', 
                    height: '100%',
                    pointerEvents: isSplineLoaded ? 'auto' : 'none'
                  }}
                />
              </motion.div>
            )}
          </motion.div>
          
          <motion.a 
            href={config.githubLink}
            className="inline-block bg-gradient-to-r from-[#84A8B4] to-[#6d8a94] px-8 md:px-10 py-3 md:py-4 rounded-[24px] font-poppins font-bold text-base md:text-lg text-[#EEEEEE] transition-all duration-300 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.5)] relative overflow-hidden"
            whileHover={{ 
              scale: 1.08,
              boxShadow: '0 0 30px rgba(132, 168, 180, 0.8)',
              background: 'linear-gradient(45deg, #84A8B4, #6d8a94, #84A8B4)',
              y: -3
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
              animate={{
                x: ['-100%', '100%'],
                opacity: [0, 0.4, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            <span className="relative z-10">Github</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(SkillsSection);