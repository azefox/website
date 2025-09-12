"use client"

import { motion } from "framer-motion"
import { Users, Building2, TrendingUp } from "lucide-react"
import { StatCard } from "@/components/ui/stat-card"
import { SectionHeader } from "@/components/ui/section-header"

const stats = [
  {
    icon: Users,
    value: 10000,
    suffix: "+",
    label: "Learners Trained",
    description: "Students and professionals empowered with cybersecurity skills",
  },
  {
    icon: Building2,
    value: 500,
    suffix: "+",
    label: "Enterprises Served",
    description: "Organizations secured with our consulting services",
  },
  {
    icon: TrendingUp,
    value: 98,
    suffix: "%",
    label: "Success Rate",
    description: "Client satisfaction and project success rate",
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-muted via-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Why Choose Us"
          description="Trusted by thousands of learners and hundreds of enterprises worldwide"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
