import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MessageCircle, Headphones } from "lucide-react"

const contactMethods = [
  {
    icon: Phone,
    title: "Phone Support",
    details: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
    description: "Monday - Friday, 9 AM - 6 PM EST",
    color: "text-primary",
  },
  {
    icon: Mail,
    title: "Email Support",
    details: ["info@azefox.com", "support@azefox.com"],
    description: "Response within 2 hours",
    color: "text-secondary",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    details: ["Available on website", "24/7 Support"],
    description: "Instant responses",
    color: "text-accent",
  },
  {
    icon: Headphones,
    title: "Emergency Support",
    details: ["+1 (555) 911-HELP", "24/7 Incident Response"],
    description: "For security incidents",
    color: "text-red-600",
  },
]

const departments = [
  {
    department: "Sales & Partnerships",
    email: "sales@azefox.com",
    description: "New business inquiries and partnerships",
  },
  {
    department: "Training & Education",
    email: "training@azefox.com",
    description: "Course inquiries and educational programs",
  },
  {
    department: "Consulting Services",
    email: "consulting@azefox.com",
    description: "Security consulting and assessments",
  },
  {
    department: "Technical Support",
    email: "support@azefox.com",
    description: "Platform and technical assistance",
  },
]

export function ContactInfoSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Information</h2>

          <div className="space-y-6 mb-12">
            {contactMethods.map((method) => (
              <Card key={method.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg`}>
                      <method.icon className={`h-6 w-6 ${method.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                      {method.details.map((detail, index) => (
                        <p key={index} className="text-muted-foreground mb-1">
                          {detail}
                        </p>
                      ))}
                      <p className="text-sm text-muted-foreground mt-2">{method.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Department Contacts
              </h3>
              <div className="space-y-4">
                {departments.map((dept) => (
                  <div key={dept.department} className="border-l-2 border-primary/20 pl-4">
                    <h4 className="font-medium">{dept.department}</h4>
                    <p className="text-primary text-sm">{dept.email}</p>
                    <p className="text-muted-foreground text-sm">{dept.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
