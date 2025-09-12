import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, Phone } from "lucide-react"

const offices = [
  {
    city: "New York",
    address: "123 Security Plaza, Suite 500\nNew York, NY 10001",
    phone: "+1 (555) 123-4567",
    hours: "Mon-Fri: 9 AM - 6 PM EST",
    timezone: "Eastern Time",
  },
  {
    city: "San Francisco",
    address: "456 Innovation Drive, Floor 12\nSan Francisco, CA 94105",
    phone: "+1 (555) 987-6543",
    hours: "Mon-Fri: 9 AM - 6 PM PST",
    timezone: "Pacific Time",
  },
  {
    city: "London",
    address: "789 Cyber Street, Level 8\nLondon, UK EC2A 4DP",
    phone: "+44 20 1234 5678",
    hours: "Mon-Fri: 9 AM - 5 PM GMT",
    timezone: "Greenwich Mean Time",
  },
  {
    city: "Singapore",
    address: "321 Tech Hub, Tower B, #15-01\nSingapore 018989",
    phone: "+65 6123 4567",
    hours: "Mon-Fri: 9 AM - 6 PM SGT",
    timezone: "Singapore Time",
  },
]

export function OfficeLocationsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Global Offices</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With offices around the world, we're always close to our clients and ready to provide local support with
            global expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offices.map((office) => (
            <Card key={office.city} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  {office.city}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">{office.address}</p>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-secondary" />
                  <p className="text-sm">{office.phone}</p>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent" />
                  <div>
                    <p className="text-sm">{office.hours}</p>
                    <p className="text-xs text-muted-foreground">{office.timezone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Visit Our Offices</h3>
              <p className="text-muted-foreground mb-6">
                Schedule a visit to any of our offices to meet our team in person and discuss your security needs
                face-to-face.
              </p>
              <a
                href="mailto:visits@azefox.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:from-primary/90 hover:to-secondary/90 transition-colors"
              >
                Schedule a Visit
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
