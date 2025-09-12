"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"

interface OfferingCardProps {
  title: string
  description: string
  icon: LucideIcon
  features: string[]
  link: string
  gradient: string
  index: number
}

export function OfferingCard({ title, description, icon: Icon, features, link, gradient, index }: OfferingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <Card className="group hover:shadow-xl transition-all duration-300 border-border bg-card card-shadow-lg">
        <CardHeader className="text-center pb-4">
          <motion.div
            className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center mb-4 glow-primary`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>
          <CardTitle className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-muted-foreground">{description}</CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <ul className="space-y-2 mb-6">
            {features.map((feature, featureIndex) => (
              <motion.li
                key={featureIndex}
                className="flex items-center text-sm text-muted-foreground"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
              >
                <motion.div className="w-2 h-2 rounded-full bg-accent mr-3" whileHover={{ scale: 1.5 }} />
                {feature}
              </motion.li>
            ))}
          </ul>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              asChild
              variant="outline"
              className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 bg-transparent"
            >
              <Link href={link}>Learn More</Link>
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
