"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Brain, Blocks, Cog, Shield } from "lucide-react"

const specialTracks = [
  {
    title: "AI Security",
    description: "Comprehensive security solutions for artificial intelligence and machine learning systems",
    icon: Brain,
    features: [
      "ML Model Security Assessment",
      "Adversarial Attack Prevention",
      "AI Ethics and Governance",
      "Privacy-Preserving AI Implementation",
    ],
    gradient: "from-primary to-secondary",
    duration: "6-12 weeks",
    complexity: "Advanced",
  },
  {
    title: "Blockchain & Web3",
    description: "Security consulting for blockchain technologies and decentralized applications",
    icon: Blocks,
    features: [
      "Smart Contract Auditing",
      "DeFi Protocol Security",
      "NFT Platform Security",
      "Cryptocurrency Wallet Security",
    ],
    gradient: "from-secondary to-accent",
    duration: "8-16 weeks",
    complexity: "Expert",
  },
  {
    title: "OT Security",
    description: "Operational Technology security for industrial control systems and IoT devices",
    icon: Cog,
    features: [
      "SCADA System Security",
      "Industrial IoT Protection",
      "Critical Infrastructure Security",
      "OT/IT Network Segmentation",
    ],
    gradient: "from-accent to-primary",
    duration: "10-20 weeks",
    complexity: "Advanced",
  },
  {
    title: "Privacy by Design",
    description: "Implement privacy-first approaches in system design and data processing",
    icon: Shield,
    features: [
      "Privacy Impact Assessments",
      "Data Minimization Strategies",
      "Consent Management Systems",
      "Cross-Border Data Transfer",
    ],
    gradient: "from-primary via-accent to-secondary",
    duration: "4-8 weeks",
    complexity: "Intermediate",
  },
]

export function SpecialTracksSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % specialTracks.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % specialTracks.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + specialTracks.length) % specialTracks.length)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Special Tracks</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cutting-edge security consulting for emerging technologies and specialized domains
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {specialTracks.map((track, index) => {
                const Icon = track.icon
                return (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="mx-4 border-border bg-card shadow-lg">
                      <CardHeader className="text-center pb-4">
                        <div
                          className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${track.gradient} flex items-center justify-center mb-6`}
                        >
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <CardTitle className="text-2xl font-bold text-primary mb-2">{track.title}</CardTitle>
                        <CardDescription className="text-muted-foreground text-lg">{track.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex items-center justify-center space-x-6 mb-6 text-sm text-muted-foreground">
                          <div className="text-center">
                            <div className="font-semibold text-primary">{track.duration}</div>
                            <div>Timeline</div>
                          </div>
                          <div className="text-center">
                            <div
                              className={`font-semibold ${
                                track.complexity === "Intermediate"
                                  ? "text-yellow-600"
                                  : track.complexity === "Advanced"
                                    ? "text-red-600"
                                    : "text-purple-600"
                              }`}
                            >
                              {track.complexity}
                            </div>
                            <div>Complexity</div>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-3">Key Services:</h4>
                          <div className="grid grid-cols-1 gap-2">
                            {track.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                                <div className="w-2 h-2 rounded-full bg-accent mr-3" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>

                        <Button className="w-full gradient-primary hover:opacity-90 transition-opacity">
                          Get Consultation
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
            {specialTracks.map((_, index) => (
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
