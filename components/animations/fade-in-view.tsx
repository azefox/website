"use client"

import { motion } from "framer-motion"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import type { ReactNode } from "react"

interface FadeInViewProps {
  children: ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
  distance?: number
}

export function FadeInView({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 50,
}: FadeInViewProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "50px",
  })

  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: distance }
      case "down":
        return { opacity: 0, y: -distance }
      case "left":
        return { opacity: 0, x: distance }
      case "right":
        return { opacity: 0, x: -distance }
      default:
        return { opacity: 0, y: distance }
    }
  }

  const getAnimatePosition = () => {
    switch (direction) {
      case "up":
      case "down":
        return { opacity: 1, y: 0 }
      case "left":
      case "right":
        return { opacity: 1, x: 0 }
      default:
        return { opacity: 1, y: 0 }
    }
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitialPosition()}
      animate={isIntersecting ? getAnimatePosition() : getInitialPosition()}
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
