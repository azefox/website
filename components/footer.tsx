import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Shield, Mail, Phone, MapPin, Linkedin, Youtube } from "lucide-react"

const footerLinks = {
  company: [
    { name: "About Us", href: "/#who-we-are" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "mailto:careers@azefox.com" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Cybersecurity Training", href: "/learning" },
    { name: "IT Consulting", href: "/consulting" },
    { name: "Security Assessments", href: "/consulting#assessments" },
    { name: "Managed Services", href: "/consulting#managed-services" },
  ],
  resources: [
    { name: "Market Insights", href: "/insights" },
    { name: "Platform Impact", href: "/impact" },
    { name: "Case Studies", href: "/impact#testimonials" },
    { name: "Certifications", href: "/learning#certifications" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Cookie Policy", href: "/privacy#cookies" },
    { name: "Data Protection", href: "/privacy#data-protection" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-90" />


      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Azefox Innovations</span>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Empowering organizations worldwide with cutting-edge cybersecurity training, expert consulting, and
              comprehensive security solutions. Transform your security posture with our proven methodologies.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@azefox.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="h-4 w-4 text-secondary" />
                <span>+91-9789892726</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Azefox Innovation V.O.C Street,Kottivakkam, OMR, Chennai - 600041</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Resources</h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-semibold text-lg mb-4 text-white">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-12 bg-slate-700" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-400 text-sm">
            © 2024 Azefox Innovations. All rights reserved. | Securing your digital future.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/azefox"
              className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4 text-slate-300 hover:text-white" />
            </a>
            <a
              href="https://www.youtube.com/@azefoxinnovations_official/videos"
              className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="h-4 w-4 text-slate-300 hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
