"use client"

import { motion } from "framer-motion"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import type { ReactNode } from "react"

interface ScaleInViewProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  scale?: number
}

export function ScaleInView({ children, className = "", delay = 0, duration = 0.5, scale = 0.8 }: ScaleInViewProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "50px",
  })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale }}
      animate={isIntersecting ? { opacity: 1, scale: 1 } : { opacity: 0, scale }}
      transition={{
        duration,
        delay,
        ease: [0.6, -0.05, 0.01, 0.99],
      }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  )
}
