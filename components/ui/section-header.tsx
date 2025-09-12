"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
  title: string
  description: string
  className?: string
}

export function SectionHeader({ title, description, className = "" }: SectionHeaderProps) {
  return (
    <motion.div
      className={`text-center mb-16 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-primary mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {description}
      </motion.p>
    </motion.div>
  )
}
