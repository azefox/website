import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Lightbulb, Target, Globe, Award } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Passion for Security",
    description:
      "We're genuinely passionate about protecting organizations and empowering people with security knowledge.",
  },
  {
    icon: Users,
    title: "Collaborative Excellence",
    description: "We believe the best solutions come from diverse perspectives and collaborative problem-solving.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    description: "We stay ahead of emerging threats and technologies to provide cutting-edge security solutions.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "We measure our success by the tangible security improvements we deliver to our clients.",
  },
  {
    icon: Globe,
    title: "Global Mindset",
    description: "We understand that security challenges are global and require diverse, inclusive solutions.",
  },
  {
    icon: Award,
    title: "Excellence in Everything",
    description: "We maintain the highest standards in our training, consulting, and client relationships.",
  },
]

export function CompanyCultureSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values & Culture</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our company culture is built on shared values that drive everything we do, from client relationships to
            innovation and team collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value) => (
            <Card key={value.title} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
              <p className="text-muted-foreground mb-6">
                We're always looking for passionate cybersecurity professionals who share our values and want to make a
                difference in organizational security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:careers@azefox.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:from-primary/90 hover:to-secondary/90 transition-colors"
                >
                  View Open Positions
                </a>
                <a
                  href="mailto:careers@azefox.com"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors"
                >
                  Send Your Resume
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
