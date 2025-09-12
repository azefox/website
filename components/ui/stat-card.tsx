"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { AnimatedCounter } from "./animated-counter"

interface StatCardProps {
  icon: LucideIcon
  value: number
  suffix: string
  label: string
  description: string
  index: number
}

export function StatCard({ icon: Icon, value, suffix, label, description, index }: StatCardProps) {
  return (
    <motion.div
      className="text-center group"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-primary via-secondary to-accent flex items-center justify-center mb-6 glow-primary"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <Icon className="w-10 h-10 text-white" />
      </motion.div>

      <motion.div
        className="text-5xl md:text-6xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 + index * 0.2 }}
      >
        <AnimatedCounter value={value} suffix={suffix} />
      </motion.div>

      <motion.h3
        className="text-xl font-semibold text-foreground mb-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 + index * 0.2 }}
      >
        {label}
      </motion.h3>

      <motion.p
        className="text-muted-foreground leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9 + index * 0.2 }}
      >
        {description}
      </motion.p>
    </motion.div>
  )
}
