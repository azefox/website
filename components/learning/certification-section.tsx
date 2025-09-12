import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Shield, Globe, Lock, Cloud } from "lucide-react"
import Link from "next/link"

const certifications = [
  {
    title: "ISO 27001",
    description: "Information Security Management Systems",
    icon: Shield,
    level: "Intermediate",
    duration: "40 hours",
    recognition: "Global",
    color: "from-primary to-secondary",
  },
  {
    title: "SOC 2",
    description: "Service Organization Control 2",
    icon: Award,
    level: "Advanced",
    duration: "35 hours",
    recognition: "Industry Standard",
    color: "from-secondary to-accent",
  },
  {
    title: "PCI DSS",
    description: "Payment Card Industry Data Security Standard",
    icon: Lock,
    level: "Intermediate",
    duration: "30 hours",
    recognition: "Financial Sector",
    color: "from-accent to-primary",
  },
  {
    title: "GDPR",
    description: "General Data Protection Regulation",
    icon: Globe,
    level: "Beginner",
    duration: "25 hours",
    recognition: "EU Compliance",
    color: "from-primary via-accent to-secondary",
  },
  {
    title: "CSA STAR",
    description: "Cloud Security Alliance Security Trust Assurance",
    icon: Cloud,
    level: "Advanced",
    duration: "45 hours",
    recognition: "Cloud Industry",
    color: "from-secondary via-primary to-accent",
  },
]

export function CertificationSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Industry Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Earn recognized certifications that validate your cybersecurity expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-border bg-card"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">{cert.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      className={
                        cert.level === "Beginner"
                          ? "bg-green-100 text-green-800"
                          : cert.level === "Intermediate"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }
                    >
                      {cert.level}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{cert.duration}</span>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm text-muted-foreground mb-1">Recognition:</div>
                    <div className="font-semibold text-foreground">{cert.recognition}</div>
                  </div>

                  <Link href="/contact">
                      <Button className="w-full gradient-primary hover:opacity-90 transition-opacity">Get Certified</Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
