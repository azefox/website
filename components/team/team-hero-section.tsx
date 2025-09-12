import { Badge } from "@/components/ui/badge"
import { Users, Award, Globe, Heart } from "lucide-react"

export function TeamHeroSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-6">
            Our Team
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Meet the Experts Behind
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {" "}
              Your Security
            </span>
          </h1>

          <p className="text-xl text-muted-foreground text-pretty mb-12 max-w-3xl mx-auto">
            Our diverse team of cybersecurity professionals, consultants, and trainers brings decades of combined
            experience to help organizations achieve security excellence.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">200+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full flex items-center justify-center">
                <Globe className="h-8 w-8 text-accent" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">15+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Passion</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
