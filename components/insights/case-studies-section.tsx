"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Quote, TrendingUp, Shield, Users } from "lucide-react"

const caseStudies = [
  {
    title: "Global Bank Transforms Security Posture",
    industry: "Financial Services",
    challenge: "Legacy security infrastructure vulnerable to modern threats",
    solution: "Comprehensive zero trust architecture implementation with staff training",
    results: {
      incidents: "85% reduction in security incidents",
      compliance: "100% PCI DSS compliance achieved",
      training: "2,500 employees trained",
      timeline: "6 months implementation",
    },
    quote:
      "Azefox Innovations transformed our security culture. The training was exceptional and the consulting expertise unmatched.",
    author: "CISO, Fortune 500 Bank",
    metrics: [
      { label: "Incident Reduction", value: "85%", icon: Shield },
      { label: "Staff Trained", value: "2,500", icon: Users },
      { label: "ROI", value: "340%", icon: TrendingUp },
    ],
    gradient: "from-primary to-secondary",
  },
  {
    title: "Healthcare Network Secures Patient Data",
    industry: "Healthcare",
    challenge: "Multi-facility network with inconsistent security practices",
    solution: "Standardized security framework with HIPAA compliance training",
    results: {
      facilities: "50 facilities secured",
      compliance: "HIPAA compliance across all sites",
      training: "1,800 healthcare workers trained",
      timeline: "8 months rollout",
    },
    quote:
      "The comprehensive approach to healthcare security gave us confidence in protecting patient data across all our facilities.",
    author: "IT Director, Regional Healthcare System",
    metrics: [
      { label: "Facilities Secured", value: "50", icon: Shield },
      { label: "Staff Trained", value: "1,800", icon: Users },
      { label: "Compliance Rate", value: "100%", icon: TrendingUp },
    ],
    gradient: "from-secondary to-accent",
  },
  {
    title: "Government Agency Achieves FISMA Compliance",
    industry: "Government",
    challenge: "Complex regulatory requirements and legacy systems",
    solution: "Tailored FISMA compliance program with security clearance training",
    results: {
      compliance: "100% FISMA compliance",
      clearance: "Top Secret clearance training",
      training: "5,000 personnel trained",
      timeline: "12 months program",
    },
    quote:
      "Azefox delivered exactly what we needed - expertise, compliance, and practical training that our team could implement immediately.",
    author: "Security Director, Federal Agency",
    metrics: [
      { label: "FISMA Compliance", value: "100%", icon: Shield },
      { label: "Personnel Trained", value: "5,000", icon: Users },
      { label: "Security Score", value: "A+", icon: TrendingUp },
    ],
    gradient: "from-accent to-primary",
  },
  {
    title: "Startup Accelerates Funding with Security",
    industry: "Technology",
    challenge: "Investor due diligence requiring robust security posture",
    solution: "Rapid security implementation with developer training program",
    results: {
      funding: "$50M Series B raised",
      security: "Built-in security from day one",
      training: "800 developers trained",
      timeline: "3 months to funding",
    },
    quote:
      "The security foundation Azefox helped us build was crucial in closing our Series B. Investors were impressed with our proactive approach.",
    author: "CTO, AI Startup",
    metrics: [
      { label: "Funding Raised", value: "$50M", icon: TrendingUp },
      { label: "Developers Trained", value: "800", icon: Users },
      { label: "Security Rating", value: "A", icon: Shield },
    ],
    gradient: "from-primary via-accent to-secondary",
  },
]

export function CaseStudiesSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % caseStudies.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real-world case studies showcasing transformative cybersecurity implementations
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {caseStudies.map((study, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="mx-4 border-border bg-card shadow-lg">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <Badge className="bg-blue-100 text-blue-800">{study.industry}</Badge>
                        <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${study.gradient}`} />
                      </div>
                      <CardTitle className="text-2xl font-bold text-primary mb-2">{study.title}</CardTitle>
                      <CardDescription className="text-muted-foreground text-lg">{study.challenge}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Solution Implemented:</h4>
                          <p className="text-muted-foreground mb-6">{study.solution}</p>

                          <h4 className="font-semibold text-foreground mb-3">Key Results:</h4>
                          <ul className="space-y-2">
                            {Object.entries(study.results).map(([key, value], resultIndex) => (
                              <li key={resultIndex} className="flex items-center text-sm text-muted-foreground">
                                <div className="w-2 h-2 rounded-full bg-accent mr-3" />
                                <span className="capitalize">{key.replace(/([A-Z])/g, " $1")}: </span>
                                <span className="font-medium ml-1">{value}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <div className="mb-6">
                            <Quote className="w-8 h-8 text-primary mb-3" />
                            <p className="text-muted-foreground italic mb-3">"{study.quote}"</p>
                            <p className="text-sm font-medium text-foreground">— {study.author}</p>
                          </div>

                          <div className="grid grid-cols-3 gap-4">
                            {study.metrics.map((metric, metricIndex) => {
                              const Icon = metric.icon
                              return (
                                <div key={metricIndex} className="text-center">
                                  <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                                  <div className="text-lg font-bold text-primary">{metric.value}</div>
                                  <div className="text-xs text-muted-foreground">{metric.label}</div>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </div>

                    </CardContent>
                  </Card>
                </div>
              ))}
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
            {caseStudies.map((_, index) => (
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
