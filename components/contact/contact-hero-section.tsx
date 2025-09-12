import { Badge } from "@/components/ui/badge"
import { MessageCircle, Phone, Mail, Clock } from "lucide-react"

export function ContactHeroSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-6">
            Contact Us
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Let's Secure Your
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {" "}
              Future Together
            </span>
          </h1>

          <p className="text-xl text-muted-foreground text-pretty mb-12 max-w-3xl mx-auto">
            Ready to transform your organization's security posture? Our expert team is here to help you achieve your
            cybersecurity goals through training, consulting, and managed services.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <div className="text-center">
                <div className="font-semibold">Live Chat</div>
                <div className="text-sm text-muted-foreground">24/7 Support</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full flex items-center justify-center">
                <Phone className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-center">
                <div className="font-semibold">Phone Support</div>
                <div className="text-sm text-muted-foreground">Business Hours</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full flex items-center justify-center">
                <Mail className="h-8 w-8 text-accent" />
              </div>
              <div className="text-center">
                <div className="font-semibold">Email Support</div>
                <div className="text-sm text-muted-foreground">Quick Response</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <div className="text-center">
                <div className="font-semibold">Fast Response</div>
                <div className="text-sm text-muted-foreground">Within 2 Hours</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
