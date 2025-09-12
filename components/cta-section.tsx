import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent" />
      <div className="absolute inset-0 bg-black/20" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-pulse delay-2000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-white mr-3 animate-spin" />
            <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">Empower Your Future</h2>
            <Sparkles className="w-8 h-8 text-white ml-3 animate-spin" />
          </div>

          <h3 className="text-2xl md:text-3xl font-semibold text-white drop-shadow-md mb-8">
            with Learning + Security
          </h3>

          <p className="text-xl text-white drop-shadow-sm mb-12 leading-relaxed max-w-3xl mx-auto">
            Join thousands of professionals who have transformed their careers with our comprehensive cybersecurity
            training and consulting services. Start your journey today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Link href="/learning" className="flex items-center">
                Start Learning Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105 bg-black/20 backdrop-blur-sm"
            >
              <Link href="/contact" className="flex items-center">
                Get Expert Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 text-white drop-shadow-sm text-sm">
            <p>Trusted by 10,000+ learners • 500+ enterprises • 98% success rate</p>
          </div>
        </div>
      </div>
    </section>
  )
}
