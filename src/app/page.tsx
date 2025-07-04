'use client';
import React, { useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import LoadingScreen from '@/components/LoadingScreen'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import SkillsSection from '@/components/SkillsSection'
import Footer from '@/components/Footer'
import FloatingButton from '@/components/FloatingButton'

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)
  const [currentSection, setCurrentSection] = React.useState('home')

  const pageVariants = useMemo(() => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 }
  }), [])

  const setMobileMenuOpenCallback = useCallback((open: boolean) => {
    setMobileMenuOpen(open)
  }, [])

  const throttle = useCallback((func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout
    let lastExecTime = 0
    return (...args: any[]) => {
      const currentTime = Date.now()
      if (currentTime - lastExecTime > delay) {
        func(...args)
        lastExecTime = currentTime
      } else {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
          func(...args)
          lastExecTime = Date.now()
        }, delay - (currentTime - lastExecTime))
      }
    }
  }, [])

  const handleScroll = useCallback(() => {
    const sections = ['home', 'about', 'skills', 'contact']
    const scrollPosition = window.scrollY + window.innerHeight / 2

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i])
      if (section && scrollPosition >= section.offsetTop) {
        setCurrentSection(prev => prev !== sections[i] ? sections[i] : prev)
        break
      }
    }
  }, [])

  const throttledHandleScroll = useMemo(() => throttle(handleScroll, 100), [throttle, handleScroll])

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  React.useEffect(() => {
    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    throttledHandleScroll()

    return () => window.removeEventListener('scroll', throttledHandleScroll)
  }, [throttledHandleScroll])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <motion.div 
      className="min-h-screen bg-[#222831] relative overflow-hidden"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <Header 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpenCallback}
      />

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

      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <Footer />
      
      <FloatingButton currentSection={currentSection} />
    </motion.div>
  )
}

export default React.memo(HomePage)

