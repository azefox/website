import type { Metadata } from "next"
import { ConsultingHeroSection } from "@/components/consulting/consulting-hero-section"
import { ConsultingSolutionsSection } from "@/components/consulting/consulting-solutions-section"
import { AssessmentOfferingsSection } from "@/components/consulting/assessment-offerings-section"
import { ManagedServicesSection } from "@/components/consulting/managed-services-section"
import { StructuredData } from "@/components/seo/structured-data"
import { generateMetadata, generateStructuredData } from "@/lib/seo"

export const metadata: Metadata = generateMetadata({
  title: "IT Security Consulting Services",
  description:
    "Expert cybersecurity consulting services including security architecture, threat modeling, vulnerability assessments, and managed security services. Strengthen your organization's defense posture with our proven methodologies.",
  keywords:
    "IT security consulting, cybersecurity consulting, security architecture, threat modeling, vulnerability assessment, penetration testing, managed security services, SOC operations, SIEM, compliance consulting, zero trust implementation",
  canonical: "/consulting",
  ogType: "website",
  section: "Services",
})

export default function ConsultingPage() {
  const serviceStructuredData = generateStructuredData("Service", {
    name: "Cybersecurity Consulting Services",
    description:
      "Comprehensive IT security consulting including architecture design, threat modeling, and managed services",
    serviceType: "Cybersecurity Consulting",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cybersecurity Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Security Architecture Design",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Vulnerability Assessment & Penetration Testing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Managed Security Services",
          },
        },
      ],
    },
  })

  return (
    <>
      <StructuredData data={serviceStructuredData} />
      <div className="flex flex-col min-h-screen">
        <ConsultingHeroSection />
        <ConsultingSolutionsSection />
        <AssessmentOfferingsSection />
        <ManagedServicesSection />
      </div>
    </>
  )
}
