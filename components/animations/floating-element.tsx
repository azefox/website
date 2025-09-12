"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FloatingElementProps {
  children: ReactNode
  className?: string
  duration?: number
  distance?: number
  delay?: number
}

export function FloatingElement({
  children,
  className = "",
  duration = 6,
  distance = 20,
  delay = 0,
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-distance, distance, -distance],
      }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay,
      }}
      style={{ willChange: "transform" }}
    >
      {children}
    </motion.div>
  )
}
