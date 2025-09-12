"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Shield, Target, Key, Lock, Database } from "lucide-react"

const consultingSolutions = [
  {
    id: "security-architecture",
    title: "Security Architecture",
    icon: Shield,
    description: "Design and implement comprehensive security architectures tailored to your business needs",
    details: [
      "Enterprise security framework design",
      "Network segmentation strategies",
      "Security control implementation",
      "Architecture review and optimization",
    ],
    benefits: [
      "Reduced attack surface",
      "Improved security posture",
      "Regulatory compliance",
      "Cost-effective security investments",
    ],
  },
  {
    id: "threat-modeling",
    title: "Threat Modeling",
    icon: Target,
    description: "Systematic approach to identifying and mitigating potential security threats",
    details: [
      "Asset identification and classification",
      "Threat landscape analysis",
      "Attack vector mapping",
      "Risk prioritization and mitigation",
    ],
    benefits: [
      "Proactive threat identification",
      "Risk-based security decisions",
      "Optimized security investments",
      "Enhanced incident preparedness",
    ],
  },
  {
    id: "iam",
    title: "Identity & Access Management",
    icon: Key,
    description: "Comprehensive IAM solutions to control and monitor user access across your organization",
    details: [
      "Identity governance frameworks",
      "Single sign-on (SSO) implementation",
      "Multi-factor authentication (MFA)",
      "Privileged access management (PAM)",
    ],
    benefits: [
      "Reduced insider threats",
      "Improved user experience",
      "Compliance with regulations",
      "Centralized access control",
    ],
  },
  {
    id: "zero-trust",
    title: "Zero Trust Implementation",
    icon: Lock,
    description: "Modern security model that assumes no implicit trust and verifies every transaction",
    details: [
      "Zero trust architecture design",
      "Micro-segmentation implementation",
      "Continuous authentication",
      "Policy-based access controls",
    ],
    benefits: [
      "Enhanced security posture",
      "Reduced breach impact",
      "Improved visibility",
      "Future-ready architecture",
    ],
  },
  {
    id: "data-security",
    title: "Data Security",
    icon: Database,
    description: "Comprehensive data protection strategies to safeguard your most valuable assets",
    details: [
      "Data classification and labeling",
      "Encryption at rest and in transit",
      "Data loss prevention (DLP)",
      "Privacy compliance frameworks",
    ],
    benefits: [
      "Protected sensitive data",
      "Regulatory compliance",
      "Reduced data breach risk",
      "Enhanced customer trust",
    ],
  },
]

export function ConsultingSolutionsSection() {
  return (
    <section id="solutions" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Consulting Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive cybersecurity consulting services to address your organization's unique security challenges
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {consultingSolutions.map((solution) => {
              const Icon = solution.icon
              return (
                <AccordionItem
                  key={solution.id}
                  value={solution.id}
                  className="border border-border rounded-lg px-6 bg-card hover:shadow-lg transition-all duration-300"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary">{solution.title}</h3>
                        <p className="text-muted-foreground text-sm">{solution.description}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pt-2">
                    <div className="ml-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">What We Deliver:</h4>
                        <ul className="space-y-2">
                          {solution.details.map((detail, index) => (
                            <li key={index} className="flex items-center text-muted-foreground">
                              <div className="w-2 h-2 rounded-full bg-accent mr-3" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {solution.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center text-muted-foreground">
                              <div className="w-2 h-2 rounded-full bg-secondary mr-3" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="ml-16 mt-6">
                      <Button className="gradient-primary hover:opacity-90 transition-opacity">Learn More</Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
