import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter, Mail } from "lucide-react"

const leaders = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Chief Executive Officer",
    bio: "Former CISO at Fortune 500 companies with 20+ years in cybersecurity. PhD in Computer Science, expert in enterprise security architecture.",
    image: "/professional-woman-ceo-cybersecurity.jpg",
    certifications: ["CISSP", "CISM", "CISSP"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@azefox.com",
    },
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    bio: "Security researcher and former NSA analyst. Specializes in threat intelligence, AI security, and zero-trust architectures.",
    image: "/professional-man-cto-cybersecurity.jpg",
    certifications: ["CISSP", "CEH", "OSCP"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "michael@azefox.com",
    },
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Chief Learning Officer",
    bio: "Educational technology expert with focus on cybersecurity training. Former university professor with 15+ years in security education.",
    image: "/professional-woman-clo-education.jpg",
    certifications: ["CISSP", "CISA", "PMP"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "emily@azefox.com",
    },
  },
  {
    name: "James Thompson",
    role: "Chief Security Officer",
    bio: "Incident response specialist and penetration testing expert. Led security teams at major consulting firms for 18+ years.",
    image: "/professional-man-cso-security.jpg",
    certifications: ["CISSP", "GCIH", "OSCP"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "james@azefox.com",
    },
  },
]

export function LeadershipSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our leadership team combines decades of experience in cybersecurity, technology, and education to guide
            organizations toward security excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {leaders.map((leader) => (
            <Card key={leader.name} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                    <p className="text-primary font-medium mb-3">{leader.role}</p>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{leader.bio}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {leader.certifications.map((cert) => (
                        <Badge key={cert} variant="secondary" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={leader.social.linkedin}
                        className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                      >
                        <Linkedin className="h-4 w-4 text-primary" />
                      </a>
                      <a
                        href={leader.social.twitter}
                        className="p-2 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors"
                      >
                        <Twitter className="h-4 w-4 text-secondary" />
                      </a>
                      <a
                        href={`mailto:${leader.social.email}`}
                        className="p-2 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors"
                      >
                        <Mail className="h-4 w-4 text-accent" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
