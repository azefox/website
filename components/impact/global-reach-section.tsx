"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Building2, GraduationCap, Shield } from "lucide-react"

const globalStats = [
  { icon: MapPin, label: "Countries Served", value: 45, suffix: "+" },
  { icon: Building2, label: "Enterprise Clients", value: 500, suffix: "+" },
  { icon: GraduationCap, label: "Professionals Trained", value: 10000, suffix: "+" },
  { icon: Shield, label: "Security Incidents Prevented", value: 2500, suffix: "+" },
]

const regions = [
  { name: "North America", clients: 180, growth: "+25%" },
  { name: "Europe", clients: 150, growth: "+30%" },
  { name: "Asia Pacific", clients: 120, growth: "+40%" },
  { name: "Middle East & Africa", clients: 50, growth: "+35%" },
]

export function GlobalReachSection() {
  const [animatedValues, setAnimatedValues] = useState(globalStats.map(() => 0))

  useEffect(() => {
    const timers = globalStats.map((stat, index) => {
      return setTimeout(() => {
        const duration = 2000
        const steps = 60
        const increment = stat.value / steps
        let current = 0

        const timer = setInterval(() => {
          current += increment
          if (current >= stat.value) {
            current = stat.value
            clearInterval(timer)
          }
          setAnimatedValues((prev) => {
            const newValues = [...prev]
            newValues[index] = Math.floor(current)
            return newValues
          })
        }, duration / steps)
      }, index * 200)
    })

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Global Platform Impact</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform reaches organizations across continents, delivering measurable security transformation and
            business value.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {globalStats.map((stat, index) => (
            <Card key={stat.label} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {animatedValues[index].toLocaleString()}
                  {stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region) => (
            <Card key={region.name} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">{region.name}</h3>
                <div className="text-2xl font-bold text-primary mb-1">{region.clients}</div>
                <div className="text-sm text-muted-foreground mb-2">Active Clients</div>
                <div className="text-sm font-medium text-green-600">{region.growth} YoY Growth</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
