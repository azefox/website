"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Shield, Monitor, Zap, AlertTriangle, Search, Bug } from "lucide-react"
import Link from "next/link"

const managedServices = [
  {
    title: "SOC Operations",
    description: "24/7 Security Operations Center monitoring and incident response",
    icon: Shield,
    features: ["Continuous monitoring", "Real-time threat detection", "Incident escalation", "Compliance reporting"],
    metrics: ["99.9% Uptime", "< 5min Response", "24/7 Coverage"],
    gradient: "from-primary to-secondary",
  },
  {
    title: "SIEM Management",
    description: "Security Information and Event Management platform administration",
    icon: Monitor,
    features: [
      "Log aggregation and analysis",
      "Custom rule development",
      "Dashboard management",
      "Performance optimization",
    ],
    metrics: ["1M+ Events/Day", "Custom Rules", "Real-time Analytics"],
    gradient: "from-secondary to-accent",
  },
  {
    title: "SOAR Implementation",
    description: "Security Orchestration, Automation, and Response platform setup",
    icon: Zap,
    features: ["Workflow automation", "Playbook development", "Integration management", "Process optimization"],
    metrics: ["80% Automation", "Custom Playbooks", "Multi-tool Integration"],
    gradient: "from-accent to-primary",
  },
  {
    title: "Incident Response",
    description: "Rapid response to security incidents and breach containment",
    icon: AlertTriangle,
    features: ["Incident containment", "Forensic analysis", "Recovery planning", "Lessons learned"],
    metrics: ["15min Response", "Expert Team", "Full Recovery"],
    gradient: "from-primary via-accent to-secondary",
  },
  {
    title: "Threat Intelligence",
    description: "Actionable threat intelligence and proactive threat hunting",
    icon: Search,
    features: ["Threat landscape analysis", "IOC management", "Attribution analysis", "Predictive intelligence"],
    metrics: ["Global Sources", "Real-time Intel", "Custom Reports"],
    gradient: "from-secondary via-primary to-accent",
  },
  {
    title: "VAPT Services",
    description: "Vulnerability Assessment and Penetration Testing as a service",
    icon: Bug,
    features: ["Regular assessments", "Continuous scanning", "Penetration testing", "Remediation tracking"],
    metrics: ["Monthly Scans", "Expert Testing", "Trend Analysis"],
    gradient: "from-accent via-secondary to-primary",
  },
]

export function ManagedServicesSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % managedServices.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % managedServices.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + managedServices.length) % managedServices.length)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Managed Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive managed security services to protect your organization around the clock
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {managedServices.map((service, index) => {
                const Icon = service.icon
                return (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="mx-4 border-border bg-card shadow-lg">
                      <CardHeader className="text-center pb-4">
                        <div
                          className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6`}
                        >
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <CardTitle className="text-2xl font-bold text-primary mb-2">{service.title}</CardTitle>
                        <CardDescription className="text-muted-foreground text-lg">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-3">Service Features:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {service.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                                <div className="w-2 h-2 rounded-full bg-accent mr-2" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-3">Key Metrics:</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.metrics.map((metric, metricIndex) => (
                              <span
                                key={metricIndex}
                                className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-primary"
                              >
                                {metric}
                              </span>
                            ))}
                          </div>
                        </div>

                        <Button className="w-full gradient-primary hover:opacity-90 transition-opacity">
                          <Link href="/contact">Get Started</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg hover:bg-gray-50 text-primary"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg hover:bg-gray-50 text-primary"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {managedServices.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index)
                  setIsAutoPlaying(false)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-primary scale-125" : "bg-muted-foreground hover:bg-secondary"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
