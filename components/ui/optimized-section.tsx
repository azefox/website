"use client"

import { motion } from "framer-motion"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import type { ReactNode } from "react"

interface OptimizedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function OptimizedSection({ children, className = "", delay = 0 }: OptimizedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "50px",
  })

  return (
    <motion.section
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.6, -0.05, 0.01, 0.99],
      }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.section>
  )
}
