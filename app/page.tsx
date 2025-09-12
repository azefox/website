import HeroSection from "@/components/hero-section"
import { WhoWeAreSection } from "@/components/who-we-are-section"
import { CoreOfferingsSection } from "@/components/core-offerings-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { CTASection } from "@/components/cta-section"
import { StructuredData } from "@/components/seo/structured-data"
import { generateStructuredData } from "@/lib/seo"

export default function HomePage() {
  const organizationStructuredData = generateStructuredData("Organization", {
    name: "Azefox Innovations",
    alternateName: "Azefox",
    url: "https://azefox.com",
    logo: "https://azefox.com/logo.webp",
    description:
      "Leading provider of cybersecurity training, IT security consulting, assessments, and managed services",
    foundingDate: "2020",
    slogan: "Empowering Security Excellence",
    knowsAbout: [
      "Cybersecurity Training",
      "IT Security Consulting",
      "Vulnerability Assessment",
      "Penetration Testing",
      "Managed Security Services",
      "SOC Operations",
      "Compliance Training",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cybersecurity Solutions",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "EducationalOccupationalProgram",
            name: "Cybersecurity Training Programs",
            description: "Comprehensive training for students, professionals, and enterprises",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "IT Security Consulting",
            description: "Expert security consulting and architecture services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Security Assessments",
            description: "Vulnerability assessments and penetration testing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Managed Security Services",
            description: "24/7 managed security operations and monitoring",
          },
        },
      ],
    },
  })

  return (
    <>
      <StructuredData data={organizationStructuredData} />
      <div className="flex flex-col min-h-screen">
        <HeroSection />
        <WhoWeAreSection />
        <CoreOfferingsSection />
        <WhyChooseUsSection />
        <CTASection />
      </div>
    </>
  )
}
