"use client"

import { motion } from "framer-motion"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import type { ReactNode } from "react"

interface RotateInViewProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  rotation?: number
}

export function RotateInView({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  rotation = 180,
}: RotateInViewProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "50px",
  })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, rotate: rotation }}
      animate={isIntersecting ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: rotation }}
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
