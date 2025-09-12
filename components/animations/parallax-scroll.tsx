"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface ParallaxScrollProps {
  children: ReactNode
  className?: string
  speed?: number
}

export function ParallaxScroll({ children, className = "", speed = 0.5 }: ParallaxScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`])

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y, willChange: "transform" }}>{children}</motion.div>
    </div>
  )
}
