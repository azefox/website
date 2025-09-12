import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building2, Heart, Shield, Rocket } from "lucide-react"

const industries = [
  {
    title: "Financial Services",
    description: "Banks, fintech companies, and financial institutions securing digital transactions",
    icon: Building2,
    adoptionRate: 95,
    clients: 120,
    keyServices: ["PCI DSS Compliance", "Fraud Detection", "Risk Management", "Regulatory Compliance"],
    caseStudy: "Major bank reduced security incidents by 85% after implementing our zero trust architecture",
    gradient: "from-primary to-secondary",
    stats: {
      incidents: "85% Reduction",
      compliance: "100% PCI DSS",
      training: "2,500+ Staff",
    },
  },
  {
    title: "Healthcare",
    description: "Hospitals, clinics, and health tech companies protecting patient data and medical systems",
    icon: Heart,
    adoptionRate: 88,
    clients: 85,
    keyServices: ["HIPAA Compliance", "Medical Device Security", "Patient Data Protection", "Telehealth Security"],
    caseStudy: "Healthcare network secured 50+ facilities with comprehensive cybersecurity training program",
    gradient: "from-secondary to-accent",
    stats: {
      facilities: "50+ Secured",
      compliance: "HIPAA Certified",
      training: "1,800+ Staff",
    },
  },
  {
    title: "Government",
    description: "Federal, state, and local government agencies securing critical infrastructure",
    icon: Shield,
    adoptionRate: 92,
    clients: 45,
    keyServices: ["FISMA Compliance", "Critical Infrastructure", "Incident Response", "Security Clearance Training"],
    caseStudy: "Government agency achieved 100% FISMA compliance with our comprehensive security framework",
    gradient: "from-accent to-primary",
    stats: {
      compliance: "100% FISMA",
      clearance: "Top Secret",
      training: "5,000+ Personnel",
    },
  },
  {
    title: "Technology Startups",
    description: "Emerging tech companies building security into their products and operations from day one",
    icon: Rocket,
    adoptionRate: 78,
    clients: 200,
    keyServices: ["Secure Development", "Product Security", "Investor Due Diligence", "Scalable Security"],
    caseStudy: "Startup accelerated funding round by demonstrating robust security posture through our program",
    gradient: "from-primary via-accent to-secondary",
    stats: {
      funding: "$50M+ Raised",
      security: "Built-in from Day 1",
      training: "800+ Developers",
    },
  },
]

export function IndustryAdoptionSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Industry Adoption</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            How different industries are embracing cybersecurity training and consulting services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-border bg-card"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${industry.gradient} flex items-center justify-center`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge className="bg-green-100 text-green-800">{industry.adoptionRate}% Adoption</Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                    {industry.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">{industry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">Market Penetration</span>
                      <span className="text-sm text-muted-foreground">{industry.clients} clients</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${industry.gradient} h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${industry.adoptionRate}%` }}
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.keyServices.map((service, serviceIndex) => (
                        <Badge key={serviceIndex} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-2">Success Metrics:</h4>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      {Object.entries(industry.stats).map(([key, value], statIndex) => (
                        <div key={statIndex}>
                          <div className="text-sm font-semibold text-primary">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6 p-3 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground italic">"{industry.caseStudy}"</p>
                  </div>

                  <Button className="w-full gradient-primary hover:opacity-90 transition-opacity">
                    View Industry Solutions
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Serving 15+ industries with tailored cybersecurity solutions and training programs
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
          >
            Explore All Industries
          </Button>
        </div>
      </div>
    </section>
  )
}
