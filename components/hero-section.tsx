"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Shield, BookOpen, Zap } from "lucide-react"
import Link from "next/link"

const heroSlides = [
  {
    title: "Learn",
    subtitle: "Master Cybersecurity Skills",
    description:
      "Comprehensive training programs designed for college students, professionals, and enterprises. Build expertise in the latest security technologies and methodologies.",
    icon: BookOpen,
    gradient: "gradient-primary",
    color: "text-primary",
  },
  {
    title: "Secure",
    subtitle: "Protect Your Digital Assets",
    description:
      "Expert IT security consulting services including threat modeling, security architecture, and compliance assessments to safeguard your organization.",
    icon: Shield,
    gradient: "gradient-secondary",
    color: "text-secondary",
  },
  {
    title: "Transform",
    subtitle: "Evolve Your Security Posture",
    description:
      "Managed security services and continuous monitoring to transform your cybersecurity capabilities and stay ahead of emerging threats.",
    icon: Zap,
    gradient: "gradient-cyber",
    color: "text-accent",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const slideVariants = {
  enter: { opacity: 0, x: 100, scale: 0.9 },
  center: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0, x: -100, scale: 0.9 },
}

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000) // Increased interval for better UX
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background"
        animate={{
          background: [
            "linear-gradient(135deg, #f8faff 0%, rgba(37, 99, 235, 0.05) 50%, #f8faff 100%)",
            "linear-gradient(135deg, #f8faff 0%, rgba(14, 165, 233, 0.05) 50%, #f8faff 100%)",
            "linear-gradient(135deg, #f8faff 0%, rgba(6, 182, 212, 0.05) 50%, #f8faff 100%)",
          ],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      />

      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center max-w-5xl mx-auto">
          <div className="relative h-96 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <motion.div
                  className={`w-20 h-20 rounded-full ${heroSlides[currentSlide].gradient} flex items-center justify-center mb-6 glow-primary`}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  }}
                >
                  {React.createElement(heroSlides[currentSlide].icon, { className: "w-10 h-10 text-white" })}
                </motion.div>

                <motion.h1
                  className={`text-5xl md:text-7xl font-bold ${heroSlides[currentSlide].color} mb-4`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  {heroSlides[currentSlide].title}
                </motion.h1>

                <motion.h2
                  className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {heroSlides[currentSlide].subtitle}
                </motion.h2>

                <motion.p
                  className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  {heroSlides[currentSlide].description}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
            variants={itemVariants}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="gradient-primary hover:opacity-90 transition-all duration-300 glow-primary"
              >
                <Link href="/learning">Start Learning</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 bg-transparent"
              >
                <Link href="/contact">Get Consultation</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div className="flex items-center justify-center mt-12 space-x-4" variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={prevSlide}
                className="text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
            </motion.div>

            <div className="flex space-x-2">
              {heroSlides.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-primary scale-125" : "bg-muted-foreground hover:bg-secondary"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextSlide}
                className="text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
