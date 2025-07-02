'use client';
import React from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { config } from '@/config/environment'

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 }
  }

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  }

  const titleVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const wordVariants = {
    initial: { y: 100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1
    }
  }

  const buttonVariants = {
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
  }

  const imageVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 }
  }

  const decorativeVariants = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 }
  }

  const floatingButtonVariants = {
    initial: { scale: 0, opacity: 0, y: 100 },
    animate: { scale: 1, opacity: 1, y: 0 },
    hover: { 
      scale: 1.05,
      backgroundColor: "rgba(132, 168, 180, 0.9)"
    }
  }

  const mobileMenuVariants = {
    initial: { height: 0, opacity: 0 },
    animate: { height: 'auto', opacity: 1 },
    exit: { height: 0, opacity: 0 }
  }

  const skillCardVariants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    hover: { 
      y: -10,
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  }

  const titleWords = ["CREATIVE", "UI", "DESIGNER"];

  const skills = [
    {
      name: "Figma",
      icon: "/figma-icon.svg",
      description: "UI/UX Design & Prototyping"
    },
    {
      name: "Adobe Illustrator", 
      icon: "/adobe-illustrator-icon.svg",
      description: "Vector Graphics & Illustrations"
    },
    {
      name: "React",
      icon: "/react-icon.svg", 
      description: "Frontend Development"
    },
    {
      name: "Next.js",
      icon: "/nextjs-icon.svg",
      description: "Full-Stack Framework"
    }
  ];

  const socialLinks = [
    { icon: "globe", link: config.socialWebsite },
    { icon: "file", link: config.socialPortfolio },
    { icon: "window", link: config.socialLinkedin }
  ];

  return (
    <motion.div 
      className="min-h-screen bg-[#222831] relative overflow-hidden"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <motion.header 
        className="flex justify-between items-center px-4 py-6 md:px-12 md:py-8 xl:px-24 xl:py-12 relative z-10"
        variants={headerVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="font-oswald font-bold text-xl md:text-2xl text-[#EEEEEE]"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {config.brandName}
        </motion.div>
        
        <nav className="hidden md:flex gap-6 lg:gap-12">
          {["Home", "About Me", "Contact"].map((item, index) => (
            <motion.a 
              key={item}
              href="#" 
              className="font-poppins text-base lg:text-lg text-[#EEEEEE] hover:text-[#84A8B4] transition-colors"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <motion.button 
          className="md:hidden text-[#EEEEEE] text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
                {["Home", "About Me", "Contact"].map((item, index) => (
                  <motion.a 
                    key={item}
                    href="#" 
                    className="font-poppins text-lg text-[#EEEEEE] hover:text-[#84A8B4] transition-colors"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>

      <motion.div 
        className="hidden md:block absolute left-0 top-[100px] md:top-[120px] xl:top-[132px] w-full h-[1px] bg-[rgba(238,238,238,0.1)]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      
      <motion.div 
        className="hidden xl:block absolute left-[512px] top-0 w-[1px] h-full bg-[rgba(238,238,238,0.1)]"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      />

      <main className="flex flex-col xl:grid xl:grid-cols-2 xl:gap-8 px-4 md:px-12 xl:px-0 pt-8 md:pt-16 xl:pt-0 min-h-[calc(100vh-120px)] xl:min-h-[calc(100vh-200px)]">
        
        <div className="flex flex-col justify-center xl:justify-start xl:ml-[180px] xl:mt-[334px] order-2 xl:order-1">
          <motion.div 
            className="mb-8 md:mb-12"
            variants={titleVariants}
            initial="initial"
            animate="animate"
          >
            <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[96px] leading-[1em] text-white max-w-full xl:w-[586px]">
              {titleWords.map((word) => (
                <motion.span
                  key={word}
                  className="inline-block mr-2 sm:mr-4"
                  variants={wordVariants}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <motion.a 
              href={config.hireMeLink}
              className="bg-[#84A8B4] px-6 md:px-8 py-[8px] md:py-[10px] rounded-[20px] md:rounded-[24px] font-poppins font-bold text-base md:text-lg text-[#EEEEEE] hover:bg-[#6d8a94] transition-colors shadow-[0px_4px_4px_0px_rgba(0,0,0,0.5)] w-full sm:w-auto text-center"
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
            >
              Hire me
            </motion.a>
            
            <motion.a 
              href={config.cvDownloadLink}
              className="bg-[rgba(57,62,70,0.75)] backdrop-blur-[4px] px-6 md:px-8 py-[8px] md:py-[10px] rounded-[20px] md:rounded-[24px] font-poppins font-bold text-base md:text-lg text-[#EEEEEE] hover:bg-[rgba(57,62,70,0.9)] transition-colors shadow-[0px_4px_4px_0px_rgba(0,0,0,0.5)] flex items-center justify-center gap-[8px] md:gap-[10px] w-full sm:w-auto"
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
            >
              Download CV
              <motion.div 
                className="w-5 h-5 md:w-6 md:h-6 relative"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image 
                  src="/download-icon-part1.svg" 
                  alt="Download" 
                  width={18} 
                  height={6}
                  className="absolute top-[12px] md:top-[15px] left-[2px] md:left-[3px] w-[14px] md:w-[18px] h-[5px] md:h-[6px]"
                />
                <Image 
                  src="/download-icon-part2.svg" 
                  alt="Download" 
                  width={10} 
                  height={5}
                  className="absolute top-[8px] md:top-[10px] left-[5px] md:left-[7px] w-[8px] md:w-[10px] h-[4px] md:h-[5px]"
                />
                <Image 
                  src="/download-icon-part3.svg" 
                  alt="Download" 
                  width={1} 
                  height={12}
                  className="absolute top-[2px] md:top-[3px] left-[9px] md:left-[12px] w-[1px] h-[10px] md:h-[12px]"
                />
              </motion.div>
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
            />
          </motion.div>
        </motion.div>
      </main>

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

      <motion.div 
        className="fixed right-6 bottom-6 md:right-8 md:bottom-8 xl:right-12 xl:bottom-12 w-14 h-14 md:w-16 md:h-16 xl:w-20 xl:h-20 bg-[rgba(57,62,70,0.9)] backdrop-blur-[12px] rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition-shadow z-50"
        variants={floatingButtonVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        onClick={() => {
          const aboutSection = document.querySelector('section');
          aboutSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image 
            src="/scroll-down-icon.svg" 
            alt="Scroll Down" 
            width={24} 
            height={24}
            className="w-5 h-5 md:w-6 md:h-6 xl:w-7 xl:h-7 text-[rgba(238,238,238,0.8)]"
          />
        </motion.div>
      </motion.div>

      <section className="min-h-screen bg-[#222831] relative overflow-hidden">
        <motion.div 
          className="hidden xl:block absolute left-[512px] top-0 w-[1px] h-full bg-[rgba(238,238,238,0.1)]"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        <motion.div 
          className="hidden xl:block absolute left-0 top-[892px] w-full h-[1px] bg-[rgba(238,238,238,0.1)]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
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
              
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] leading-[1.5em] text-white">
                About me
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
              <motion.button 
                className="text-[#84A8B4] font-poppins text-base md:text-lg hover:text-[#6d8a94] transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read more
              </motion.button>

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
              className="hidden lg:block xl:absolute xl:left-[806px] xl:top-[256px]"
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
                className="w-[200px] h-[382px] lg:w-[250px] lg:h-[477px] xl:w-[350px] xl:h-[668px] object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#222831] relative overflow-hidden">
        <motion.div 
          className="hidden xl:block absolute left-[512px] top-0 w-[1px] h-full bg-[rgba(238,238,238,0.1)]"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
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
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] text-white mb-4">
                My Skills
              </h2>
              <motion.div 
                className="absolute top-[-20px] right-[-40px] hidden md:block"
                initial={{ scale: 0, rotate: -45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Image 
                  src="/decorative-vector.svg" 
                  alt="Decorative" 
                  width={40} 
                  height={40}
                  className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] object-contain opacity-60"
                />
              </motion.div>
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
                className="bg-[rgba(57,62,70,0.8)] backdrop-blur-sm rounded-3xl p-6 md:p-8 text-center group cursor-pointer"
                variants={skillCardVariants}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
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
            <motion.a 
              href={config.hireMeLink}
              className="inline-block bg-[#84A8B4] px-8 md:px-10 py-3 md:py-4 rounded-[24px] font-poppins font-bold text-base md:text-lg text-[#EEEEEE] hover:bg-[#6d8a94] transition-colors shadow-[0px_4px_4px_0px_rgba(0,0,0,0.5)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Work with Me
            </motion.a>
          </motion.div>
        </div>
      </section>

      <footer className="bg-[#1a1e26] relative overflow-hidden">
        <motion.div 
          className="hidden xl:block absolute left-[512px] top-0 w-[1px] h-full bg-[rgba(238,238,238,0.1)]"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
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
                className="font-oswald font-bold text-2xl md:text-3xl text-[#EEEEEE] mb-4 md:mb-6"
                whileHover={{ scale: 1.05 }}
              >
                {config.brandName}
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
                {["Home", "About Me", "My Projects", "Contact"].map((link, index) => (
                  <motion.a
                    key={link}
                    href="#"
                    className="block font-poppins text-sm md:text-base text-[rgba(238,238,238,0.75)] hover:text-[#84A8B4] transition-colors"
                    whileHover={{ x: 5 }}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {link}
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
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
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
                {["Privacy Policy", "Terms of Service"].map((item) => (
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
    </motion.div>
  )
}

export default HomePage

