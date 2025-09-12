import type { Metadata } from "next"
import { ContactHeroSection } from "@/components/contact/contact-hero-section"
import { ContactFormSection } from "@/components/contact/contact-form-section"
import { ContactInfoSection } from "@/components/contact/contact-info-section"
import { OfficeLocationsSection } from "@/components/contact/office-locations-section"
import { StructuredData } from "@/components/seo/structured-data"
import { generateMetadata, generateStructuredData } from "@/lib/seo"

export const metadata: Metadata = generateMetadata({
  title: "Contact Cybersecurity Experts",
  description:
    "Get in touch with Azefox Innovations for cybersecurity training, IT security consulting, and vulnerability assessments. Contact our expert team for personalized security solutions and consultations.",
  keywords:
    "contact cybersecurity experts, security consulting contact, cybersecurity training inquiry, IT security consultation, vulnerability assessment contact, penetration testing services",
  canonical: "/contact",
  ogType: "website",
  section: "Contact",
})

export default function ContactPage() {
  const organizationStructuredData = generateStructuredData("Organization", {
    name: "Azefox Innovations",
    alternateName: "Azefox",
    url: "https://azefox.com",
    logo: "https://azefox.com/logo.webp",
    description: "Leading cybersecurity training and consulting organization",
    foundingDate: "2020",
    numberOfEmployees: "50-100",
    industry: "Cybersecurity Training and Consulting",
    serviceArea: {
      "@type": "Place",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cybersecurity Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "EducationalOccupationalProgram",
            name: "Cybersecurity Training Programs",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "IT Security Consulting",
          },
        },
      ],
    },
  })

  return (
    <>
      <StructuredData data={organizationStructuredData} />
      <main className="min-h-screen">
        <ContactHeroSection />
        <div className="grid lg:grid-cols-2 gap-0">
          <ContactFormSection />
          <ContactInfoSection />
        </div>
        <OfficeLocationsSection />
      </main>
    </>
  )
}
