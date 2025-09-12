import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Eye, Lock, Database, Cookie, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | Azefox Innovations - Your Data Protection Rights",
  description:
    "Learn how Azefox Innovations protects your privacy and personal data. Our comprehensive privacy policy outlines data collection, usage, and your rights.",
  keywords: "privacy policy, data protection, GDPR compliance, personal data, cybersecurity privacy",
}

const sections = [
  {
    icon: Eye,
    title: "Information We Collect",
    content: [
      "Personal information you provide when registering for courses or services",
      "Professional information including job title, company, and industry",
      "Learning progress and assessment results for educational purposes",
      "Communication preferences and contact information",
      "Technical information including IP address, browser type, and device information",
    ],
  },
  {
    icon: Database,
    title: "How We Use Your Information",
    content: [
      "Deliver cybersecurity training courses and consulting services",
      "Personalize your learning experience and track progress",
      "Communicate important updates about courses and security insights",
      "Improve our platform and develop new security training content",
      "Comply with legal obligations and industry regulations",
    ],
  },
  {
    icon: Lock,
    title: "Data Security & Protection",
    content: [
      "Industry-standard encryption for all data transmission and storage",
      "Regular security audits and penetration testing of our systems",
      "Access controls and authentication measures for all personnel",
      "Secure data centers with 24/7 monitoring and backup systems",
      "Incident response procedures for any potential data breaches",
    ],
  },
  {
    icon: Shield,
    title: "Your Privacy Rights",
    content: [
      "Access and review your personal information at any time",
      "Request corrections or updates to your data",
      "Delete your account and associated data (right to be forgotten)",
      "Opt-out of marketing communications while maintaining service access",
      "Data portability - receive your data in a structured format",
    ],
  },
]

export default function PrivacyPage() {
  return (
    <main className="min-h-screen mt-15 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Privacy Policy
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Privacy is Our
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {" "}
                Priority
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              At Azefox Innovations, we are committed to protecting your privacy and ensuring the security of your
              personal information. This policy explains how we collect, use, and safeguard your data.
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

          {/* Cookie Policy Section */}
          <Card id="cookies" className="mb-16">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg">
                  <Cookie className="h-6 w-6 text-accent" />
                </div>
                Cookie Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar technologies to enhance your experience on our platform. Cookies help us
                remember your preferences, analyze site usage, and provide personalized content.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h4 className="font-semibold mb-2">Essential Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    Required for basic site functionality and security features.
                  </p>
                </div>
                <div className="p-4 bg-secondary/5 rounded-lg">
                  <h4 className="font-semibold mb-2">Analytics Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    Help us understand how you use our platform to improve services.
                  </p>
                </div>
                <div className="p-4 bg-accent/5 rounded-lg">
                  <h4 className="font-semibold mb-2">Preference Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    Remember your settings and personalize your experience.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Protection Section */}
          <Card id="data-protection" className="mb-16">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg">
                  <Database className="h-6 w-6 text-secondary" />
                </div>
                Data Protection & Compliance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                As a cybersecurity company, we maintain the highest standards of data protection and comply with
                international privacy regulations including GDPR, CCPA, and other applicable laws.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">International Transfers</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    When transferring data internationally, we ensure adequate protection through:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Standard Contractual Clauses (SCCs)</li>
                    <li>• Adequacy decisions by relevant authorities</li>
                    <li>• Binding Corporate Rules where applicable</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Data Retention</h4>
                  <p className="text-sm text-muted-foreground mb-2">We retain your data only as long as necessary:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Account data: Until account deletion</li>
                    <li>• Learning records: 7 years for certification purposes</li>
                    <li>• Marketing data: Until you opt-out</li>
                    <li>• Legal compliance: As required by law</li>
                  </ul>
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
              <h3 className="text-2xl font-bold mb-4">Questions About Your Privacy?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our Data Protection Officer is available to answer any questions about how we handle your personal
                information and your privacy rights.
              </p>
              <div className="space-y-2">
                <p className="font-medium">Data Protection Officer</p>
                <p className="text-muted-foreground">privacy@azefox.com</p>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
