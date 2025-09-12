import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Users, Shield, AlertTriangle, Scale, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms & Conditions | Azefox Innovations - Service Agreement",
  description:
    "Read the terms and conditions for using Azefox Innovations cybersecurity training and consulting services. Understand your rights and responsibilities.",
  keywords: "terms of service, service agreement, cybersecurity training terms, consulting agreement",
}

const sections = [
  {
    icon: FileText,
    title: "Service Agreement",
    content: [
      "These terms govern your use of Azefox Innovations training platforms and consulting services",
      "By accessing our services, you agree to be bound by these terms and conditions",
      "Services include cybersecurity training courses, consulting, assessments, and managed security services",
      "We reserve the right to modify these terms with 30 days notice to registered users",
      "Continued use of services after changes constitutes acceptance of new terms",
    ],
  },
  {
    icon: Users,
    title: "User Responsibilities",
    content: [
      "Provide accurate and complete information during registration and service delivery",
      "Maintain confidentiality of your account credentials and notify us of unauthorized access",
      "Use services only for legitimate business and educational purposes",
      "Comply with all applicable laws and regulations in your jurisdiction",
      "Respect intellectual property rights and not share proprietary training materials",
    ],
  },
  {
    icon: Shield,
    title: "Service Availability & Security",
    content: [
      "We strive for 99.9% uptime but cannot guarantee uninterrupted service availability",
      "Scheduled maintenance will be announced in advance when possible",
      "We implement industry-standard security measures to protect your data and our systems",
      "Users are responsible for maintaining secure access to their accounts",
      "Report any security incidents or vulnerabilities to our security team immediately",
    ],
  },
  {
    icon: Scale,
    title: "Limitation of Liability",
    content: [
      "Our liability is limited to the amount paid for services in the 12 months preceding any claim",
      "We are not liable for indirect, incidental, or consequential damages",
      "Services are provided 'as is' without warranties beyond those required by law",
      "Users acknowledge that cybersecurity involves inherent risks that cannot be eliminated",
      "Professional consulting advice should be verified and implemented according to your specific needs",
    ],
  },
]

export default function TermsPage() {
  return (
    <main className="min-h-screen mt-15 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Terms & Conditions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Service Terms &
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {" "}
                Conditions
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              These terms and conditions outline the rules and regulations for the use of Azefox Innovations services,
              including our cybersecurity training platform and consulting services.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>Last updated: December 2024</p>
              <p>Effective date: January 1, 2024</p>
            </div>
          </div>

          {/* Main Sections */}
          <div className="space-y-8 mb-16">
            {sections.map((section) => (
              <Card key={section.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
                      <section.icon className="h-6 w-6 text-primary" />
                    </div>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.content.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Payment & Refund Policy */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg">
                  <Scale className="h-6 w-6 text-accent" />
                </div>
                Payment & Refund Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Payment Terms</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Training courses: Payment due upon enrollment</li>
                    <li>• Consulting services: 50% upfront, 50% upon completion</li>
                    <li>• Enterprise contracts: Net 30 payment terms</li>
                    <li>• Late payments subject to 1.5% monthly interest</li>
                    <li>• All prices in USD unless otherwise specified</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Refund Policy</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• 30-day money-back guarantee for training courses</li>
                    <li>• Consulting services: Refunds at discretion based on deliverables</li>
                    <li>• No refunds after course completion or certification</li>
                    <li>• Enterprise contracts: Refunds per individual agreement</li>
                    <li>• Processing time: 5-10 business days</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
                Intellectual Property Rights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                All content, materials, and intellectual property provided through our services remain the exclusive
                property of Azefox Innovations unless otherwise specified.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Our Rights</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Training materials and course content</li>
                    <li>• Proprietary methodologies and frameworks</li>
                    <li>• Software tools and platforms</li>
                    <li>• Trademarks and brand assets</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Your Rights</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Personal use of training materials during enrollment</li>
                    <li>• Implementation of learned concepts in your organization</li>
                    <li>• Certificates and credentials earned through our programs</li>
                    <li>• Feedback and suggestions you provide</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dispute Resolution */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                Dispute Resolution
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We are committed to resolving any disputes fairly and efficiently. Our dispute resolution process
                includes multiple steps to ensure satisfactory outcomes.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h4 className="font-semibold mb-2">Step 1: Direct Communication</h4>
                  <p className="text-sm text-muted-foreground">
                    Contact our support team at support@azefox.com to discuss and resolve issues directly.
                  </p>
                </div>
                <div className="p-4 bg-secondary/5 rounded-lg">
                  <h4 className="font-semibold mb-2">Step 2: Formal Mediation</h4>
                  <p className="text-sm text-muted-foreground">
                    If direct communication fails, we'll engage in formal mediation through a neutral third party.
                  </p>
                </div>
                <div className="p-4 bg-accent/5 rounded-lg">
                  <h4 className="font-semibold mb-2">Step 3: Binding Arbitration</h4>
                  <p className="text-sm text-muted-foreground">
                    Final disputes will be resolved through binding arbitration under the rules of the American
                    Arbitration Association.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Questions About These Terms?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our legal team is available to clarify any aspects of these terms and conditions. We're committed to
                transparency in all our business relationships.
              </p>
              <div className="space-y-2">
                <p className="font-medium">Legal Department</p>
                <p className="text-muted-foreground">legal@azefox.com</p>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
