"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Azefox Innovations transformed our security posture completely. Within 6 months, we achieved SOC 2 compliance and reduced security incidents by 90%.",
    author: "Sarah Chen",
    role: "CISO",
    company: "TechFlow Solutions",
    industry: "Technology",
    rating: 5,
    results: "90% reduction in security incidents",
  },
  {
    quote:
      "The training programs are exceptional. Our team's security awareness improved dramatically, and we've prevented multiple potential breaches.",
    author: "Michael Rodriguez",
    role: "Security Director",
    company: "HealthSecure Inc.",
    industry: "Healthcare",
    rating: 5,
    results: "100% compliance achievement",
  },
  {
    quote:
      "Outstanding consulting services. They helped us implement Zero Trust architecture that saved us $2M in potential breach costs.",
    author: "Emily Watson",
    role: "IT Director",
    company: "Financial Trust Corp",
    industry: "Finance",
    rating: 5,
    results: "$2M in cost savings",
  },
  {
    quote:
      "The managed security services are top-notch. 24/7 monitoring and rapid incident response have given us complete peace of mind.",
    author: "David Kim",
    role: "CTO",
    company: "StartupScale",
    industry: "Startup",
    rating: 5,
    results: "99.9% uptime achieved",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from security leaders who have transformed their organizations with our platform.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <Quote className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <blockquote className="text-lg md:text-xl text-muted-foreground italic">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="font-semibold text-lg">{testimonials[currentIndex].author}</div>
                  <div className="text-muted-foreground">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </div>
                  <div className="text-sm text-primary font-medium">{testimonials[currentIndex].industry}</div>
                </div>

                <div className="text-right">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-sm font-medium text-green-600">{testimonials[currentIndex].results}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button variant="outline" size="sm" onClick={prevTestimonial}>
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            <Button variant="outline" size="sm" onClick={nextTestimonial}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
