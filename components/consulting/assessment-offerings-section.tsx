import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Smartphone, Code, Wifi, Cloud, Server, Cog, Plane } from "lucide-react"
import Link from "next/link"

const assessmentOfferings = [
  {
    title: "Web Application",
    description: "Comprehensive security testing of web applications and APIs",
    icon: Globe,
    color: "from-primary to-secondary",
    features: ["OWASP Top 10", "Authentication Testing", "Session Management", "Input Validation"],
  },
  {
    title: "Mobile Application",
    description: "Security assessment for iOS and Android mobile applications",
    icon: Smartphone,
    color: "from-secondary to-accent",
    features: ["Platform Security", "Data Storage", "Communication", "Runtime Protection"],
  },
  {
    title: "API Security",
    description: "REST and GraphQL API security testing and validation",
    icon: Code,
    color: "from-accent to-primary",
    features: ["Authentication", "Authorization", "Rate Limiting", "Data Validation"],
  },
  {
    title: "IoT Security",
    description: "Internet of Things device and ecosystem security assessment",
    icon: Wifi,
    color: "from-primary via-accent to-secondary",
    features: ["Device Firmware", "Communication Protocols", "Cloud Integration", "Physical Security"],
  },
  {
    title: "Cloud Security",
    description: "Multi-cloud security assessment and configuration review",
    icon: Cloud,
    color: "from-secondary via-primary to-accent",
    features: ["Configuration Review", "Access Controls", "Data Protection", "Compliance Check"],
  },
  {
    title: "Infrastructure",
    description: "Network and system infrastructure security assessment",
    icon: Server,
    color: "from-accent via-secondary to-primary",
    features: ["Network Scanning", "System Hardening", "Patch Management", "Access Controls"],
  },
  {
    title: "Industrial Control Systems",
    description: "SCADA and industrial control system security assessment",
    icon: Cog,
    color: "from-primary to-accent",
    features: ["Protocol Analysis", "HMI Security", "Network Segmentation", "Safety Systems"],
  },
  {
    title: "Drone Security",
    description: "Unmanned aerial vehicle security and privacy assessment",
    icon: Plane,
    color: "from-secondary to-primary",
    features: ["Flight Control", "Communication Links", "Data Collection", "Privacy Compliance"],
  },
]

export function AssessmentOfferingsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Assessment Offerings</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive security assessments across multiple platforms and technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {assessmentOfferings.map((offering, index) => {
            const Icon = offering.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-border bg-card"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${offering.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                    {offering.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm">{offering.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {offering.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 bg-transparent text-xs"
                  >
                    <Link href="/contact">
                    Get Assessment
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            All assessments include detailed reports, remediation guidance, and executive summaries
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
          >
            View Assessment Methodology
          </Button>
        </div>
      </div>
    </section>
  )
}
