import { Button } from "@/components/ui/button"
import { Shield, Users, Award } from "lucide-react"
import Link from "next/link"

export function ConsultingHeroSection() {
  return (
    <section className="relative py-20 pt-32 bg-gradient-to-br from-background via-muted to-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-16 h-16 text-primary" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">IT Consulting Services</h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Expert cybersecurity consulting to strengthen your organization's defense mechanisms and ensure compliance
            with industry standards
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="gradient-primary hover:opacity-90 transition-opacity">
              <Link href="#solutions">Explore Solutions</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
            >
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Enterprises Secured</div>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold text-secondary">24/7</div>
              <div className="text-muted-foreground">Security Monitoring</div>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-accent">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
