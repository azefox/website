"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Shield, Cloud, Code, Brain } from "lucide-react"

const courses = [
  {
    title: "Cybersecurity Basics",
    description: "Foundation course covering essential cybersecurity principles and practices",
    icon: Shield,
    duration: "6 weeks",
    modules: 12,
    level: "Beginner",
    highlights: ["Network Security", "Threat Landscape", "Risk Management", "Security Policies"],
    gradient: "from-primary to-secondary",
  },
  {
    title: "Cloud Compliance",
    description: "Master compliance frameworks for cloud environments and regulations",
    icon: Cloud,
    duration: "8 weeks",
    modules: 16,
    level: "Intermediate",
    highlights: ["GDPR Compliance", "SOC 2", "ISO 27001", "Cloud Auditing"],
    gradient: "from-secondary to-accent",
  },
  {
    title: "DevSecOps",
    description: "Integrate security into development and operations workflows",
    icon: Code,
    duration: "10 weeks",
    modules: 20,
    level: "Advanced",
    highlights: ["Secure SDLC", "Container Security", "CI/CD Security", "Infrastructure as Code"],
    gradient: "from-accent to-primary",
  },
  {
    title: "AI Security",
    description: "Cutting-edge security for artificial intelligence and machine learning systems",
    icon: Brain,
    duration: "8 weeks",
    modules: 14,
    level: "Advanced",
    highlights: ["ML Model Security", "Adversarial Attacks", "Privacy-Preserving AI", "AI Ethics"],
    gradient: "from-primary via-accent to-secondary",
  },
]

export function CoursesCarouselSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % courses.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % courses.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + courses.length) % courses.length)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Featured Course Tracks</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our most popular cybersecurity course tracks designed by industry experts
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {courses.map((course, index) => {
                const Icon = course.icon
                return (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="mx-4 border-border bg-card shadow-lg">
                      <CardHeader className="text-center pb-4">
                        <div
                          className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${course.gradient} flex items-center justify-center mb-6`}
                        >
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <CardTitle className="text-2xl font-bold text-primary mb-2">{course.title}</CardTitle>
                        <CardDescription className="text-muted-foreground text-lg">
                          {course.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex items-center justify-center space-x-6 mb-6 text-sm text-muted-foreground">
                          <div className="text-center">
                            <div className="font-semibold text-primary">{course.duration}</div>
                            <div>Duration</div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-secondary">{course.modules}</div>
                            <div>Modules</div>
                          </div>
                          <div className="text-center">
                            <div
                              className={`font-semibold ${
                                course.level === "Beginner"
                                  ? "text-green-600"
                                  : course.level === "Intermediate"
                                    ? "text-yellow-600"
                                    : "text-red-600"
                              }`}
                            >
                              {course.level}
                            </div>
                            <div>Level</div>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-3">Course Highlights:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {course.highlights.map((highlight, highlightIndex) => (
                              <div key={highlightIndex} className="flex items-center text-sm text-muted-foreground">
                                <div className="w-2 h-2 rounded-full bg-accent mr-2" />
                                {highlight}
                              </div>
                            ))}
                          </div>
                        </div>

                        <Button className="w-full gradient-primary hover:opacity-90 transition-opacity">
                          Start Learning
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
            {courses.map((_, index) => (
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
