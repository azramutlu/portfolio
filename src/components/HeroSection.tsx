'use client';
import React, { useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { config } from '@/config/environment';

const HeroSection: React.FC = () => {
  const [typewriterText, setTypewriterText] = React.useState('');
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  const titleVariants = useMemo(() => ({
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }), [])

  const wordVariants = useMemo(() => ({
    initial: { y: 100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1
    }
  }), [])

  const buttonVariants = useMemo(() => ({
    initial: { y: 50, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, delay: 0.8 }
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  }), [])

  const imageVariants = useMemo(() => ({
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 }
  }), [])

  const decorativeVariants = useMemo(() => ({
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 }
  }), [])

  const typewriterWords = useMemo(() => ["CREATIVE", "MODERN", "INNOVATIVE", "UNIQUE"], []);

  React.useEffect(() => {
    let isMounted = true;
    let timeoutId: NodeJS.Timeout;

    const typeWriter = () => {
      if (!isMounted) return;
      
      const currentWord = typewriterWords[currentWordIndex];
      
      if (isDeleting) {
        setTypewriterText(prev => {
          const newText = prev.slice(0, -1);
          if (newText.length === 0) {
            setIsDeleting(false);
            setCurrentWordIndex(prev => (prev + 1) % typewriterWords.length);
          }
          return newText;
        });
        timeoutId = setTimeout(typeWriter, 50);
      } else {
        setTypewriterText(prev => {
          const newText = currentWord.substring(0, prev.length + 1);
          if (newText.length === currentWord.length) {
            timeoutId = setTimeout(() => {
              if (isMounted) {
                setIsDeleting(true);
                typeWriter();
              }
            }, 1500);
          } else {
            timeoutId = setTimeout(typeWriter, 100);
          }
          return newText;
        });
      }
    };

    typeWriter();

    return () => {
      isMounted = false;
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [currentWordIndex, isDeleting, typewriterWords]);

  return (
    <main id="home" className="flex flex-col xl:grid xl:grid-cols-2 xl:gap-8 px-4 md:px-12 xl:px-0 pt-8 md:pt-16 xl:pt-0 min-h-[calc(100vh-120px)] xl:min-h-[calc(100vh-200px)]">
      <div className="flex flex-col justify-center xl:justify-start xl:ml-[180px] xl:mt-[334px] order-2 xl:order-1">
        <motion.div 
          className="mb-8 md:mb-12"
          variants={titleVariants}
          initial="initial"
          animate="animate"
        >
          <h1 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[96px] leading-[1.1em] text-white max-w-full xl:w-[586px]">
            <motion.span
              className="inline-block mr-1 sm:mr-2 md:mr-3 lg:mr-4 bg-gradient-to-r from-[#84A8B4] via-[#EEEEEE] to-[#84A8B4] bg-clip-text text-transparent"
              variants={wordVariants}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear'
              }}
              style={{
                backgroundSize: '200% 100%',
                filter: 'drop-shadow(0 0 10px rgba(132, 168, 180, 0.3))'
              }}
            >
              {typewriterText}
            </motion.span>
            <motion.span
              className="inline-block bg-gradient-to-r from-[#84A8B4] to-[#EEEEEE] bg-clip-text text-transparent"
              variants={wordVariants}
              animate={{
                textShadow: [
                  '0 0 10px rgba(132, 168, 180, 0.8)',
                  '0 0 20px rgba(132, 168, 180, 0.6)',
                  '0 0 30px rgba(132, 168, 180, 0.4)',
                  '0 0 20px rgba(132, 168, 180, 0.6)',
                  '0 0 10px rgba(132, 168, 180, 0.8)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              UI
            </motion.span>
            <motion.span
              className="inline-block ml-1 sm:ml-2 md:ml-3 lg:ml-4"
              variants={wordVariants}
              animate={{
                y: [0, -10, 0],
                rotateX: [0, 15, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              style={{
                color: '#EEEEEE',
                textShadow: '0 0 20px rgba(238, 238, 238, 0.5)'
              }}
            >
              DESIGNER
            </motion.span>
          </h1>
        </motion.div>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.a 
            href={config.githubLink}
            className="bg-gradient-to-r from-[#84A8B4] to-[#6d8a94] px-6 md:px-8 py-[8px] md:py-[10px] rounded-[20px] md:rounded-[24px] font-poppins font-bold text-base md:text-lg text-[#EEEEEE] transition-all duration-300 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.5)] w-full sm:w-auto text-center relative overflow-hidden"
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 25px rgba(132, 168, 180, 0.6)',
              background: 'linear-gradient(45deg, #84A8B4, #6d8a94, #84A8B4)',
              transition: { duration: 0.3 }
            }}
            whileTap="tap"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
              animate={{
                x: ['-100%', '100%'],
                opacity: [0, 0.3, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            <span className="relative z-10">Github</span>
          </motion.a>
        </motion.div>
      </div>

      <motion.div 
        className="flex justify-center xl:justify-start xl:ml-[132px] xl:mt-[256px] order-1 xl:order-2 mb-8 xl:mb-0"
        variants={imageVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div 
          className="relative w-[280px] h-[260px] sm:w-[350px] sm:h-[324px] md:w-[420px] md:h-[389px] lg:w-[480px] lg:h-[444px] xl:w-[552px] xl:h-[511px]"
          whileHover={{ 
            scale: 1.02,
            rotateY: 5,
            transition: { duration: 0.3 }
          }}
        >
          <Image 
            src="/design-monitor-figma.png" 
            alt="Design Monitor" 
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </motion.div>

      <motion.div 
        className="hidden md:block absolute left-4 md:left-8 lg:left-12 xl:left-[72px] top-[40%] md:top-[45%] xl:top-[385px] z-10"
        variants={decorativeVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.02, 1]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <Image 
            src="/decorative-line.svg" 
            alt="Decorative Line" 
            width={78}
            height={234}
            className="w-[60px] h-[180px] md:w-[78px] md:h-[234px] lg:w-[90px] lg:h-[270px] xl:w-[122px] xl:h-[366px] object-contain filter brightness-110"
          />
        </motion.div>
      </motion.div>
    </main>
  );
};

export default React.memo(HeroSection); 