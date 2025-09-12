"use client"

import { motion } from "framer-motion"
import { GraduationCap, Shield, Search, Settings } from "lucide-react"
import { OfferingCard } from "@/components/ui/offering-card"
import { SectionHeader } from "@/components/ui/section-header"

const offerings = [
  {
    title: "Training Programs",
    description: "Comprehensive cybersecurity training for students, professionals, and enterprises",
    icon: GraduationCap,
    features: ["College Student Programs", "Online Certifications", "Corporate Training", "Hands-on Labs"],
    link: "/learning",
    gradient: "from-primary to-secondary",
  },
  {
    title: "IT Security Consulting",
    description: "Expert security consulting services to strengthen your organization's defenses",
    icon: Shield,
    features: ["Security Architecture", "Threat Modeling", "Zero Trust Implementation", "Compliance Guidance"],
    link: "/consulting",
    gradient: "from-secondary to-accent",
  },
  {
    title: "Security Assessments",
    description: "Comprehensive security assessments across multiple platforms and technologies",
    icon: Search,
    features: [
      "Web & Mobile App Testing",
      "Cloud Security Assessment",
      "Infrastructure Audits",
      "IoT Security Testing",
    ],
    link: "/consulting",
    gradient: "from-accent to-primary",
  },
  {
    title: "Managed Services",
    description: "24/7 managed security services to protect your organization around the clock",
    icon: Settings,
    features: ["SOC Operations", "SIEM Management", "Incident Response", "Threat Intelligence"],
    link: "/consulting",
    gradient: "from-primary via-accent to-secondary",
  },
]

export function CoreOfferingsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Core Offerings"
          description="Comprehensive cybersecurity solutions tailored to meet your organization's unique needs"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {offerings.map((offering, index) => (
            <OfferingCard key={index} {...offering} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
