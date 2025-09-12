"use client"

import { motion } from "framer-motion"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  staggerDelay?: number
}

export function TextReveal({ text, className = "", delay = 0, staggerDelay = 0.05 }: TextRevealProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "50px",
  })

  const words = text.split(" ")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isIntersecting ? "visible" : "hidden"}
      style={{ willChange: "transform, opacity" }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className="inline-block mr-2"
          style={{ willChange: "transform, opacity" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
