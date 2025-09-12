"use client"

import { motion, type MotionProps } from "framer-motion"
import { forwardRef, type ReactNode } from "react"

interface LazyMotionProps extends MotionProps {
  children: ReactNode
  className?: string
}

export const LazyMotionDiv = forwardRef<HTMLDivElement, LazyMotionProps>(({ children, className, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      className={className}
      {...props}
      style={{
        willChange: "transform, opacity",
        ...props.style,
      }}
    >
      {children}
    </motion.div>
  )
})

LazyMotionDiv.displayName = "LazyMotionDiv"

export const LazyMotionSection = forwardRef<HTMLElement, LazyMotionProps>(({ children, className, ...props }, ref) => {
  return (
    <motion.section
      ref={ref}
      className={className}
      {...props}
      style={{
        willChange: "transform, opacity",
        ...props.style,
      }}
    >
      {children}
    </motion.section>
  )
})

LazyMotionSection.displayName = "LazyMotionSection"

export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
}

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] },
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}
