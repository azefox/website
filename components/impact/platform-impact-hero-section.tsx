import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Users, TrendingUp } from "lucide-react"

export function PlatformImpactHeroSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <Globe className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Global Reach</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <Users className="h-5 w-5 text-secondary" />
              <span className="text-sm font-medium">500+ Enterprises</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <TrendingUp className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">98% Success Rate</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Transforming Organizations
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {" "}
              Globally
            </span>
          </h1>

          <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-3xl mx-auto">
            Our platform has empowered thousands of professionals and hundreds of enterprises to achieve unprecedented
            security maturity and operational excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
            >
              View Success Stories
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Download Impact Report
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
