import type { Metadata } from "next"
import { PlatformImpactHeroSection } from "@/components/impact/platform-impact-hero-section"
import { GlobalReachSection } from "@/components/impact/global-reach-section"
import { SuccessMetricsSection } from "@/components/impact/success-metrics-section"
import { TestimonialsSection } from "@/components/impact/testimonials-section"
import { RoiSection } from "@/components/impact/roi-section"
import { StructuredData } from "@/components/seo/structured-data"
import { generateMetadata } from "@/lib/seo"

export const metadata: Metadata = generateMetadata({
  title: "Platform Impact & Success Stories",
  description:
    "Discover how Azefox Innovations has transformed 500+ enterprises globally with 98% success rate. Explore our cybersecurity platform impact, ROI metrics, client testimonials, and measurable business outcomes.",
  keywords:
    "cybersecurity platform impact, enterprise transformation, security ROI metrics, client success stories, global cybersecurity reach, training effectiveness, consulting success rate, business security outcomes",
  canonical: "/impact",
  ogType: "website",
  section: "Impact",
})

export default function PlatformImpactPage() {
  const achievementStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Azefox Innovations",
    url: "https://azefox.com",
    description: "Leading cybersecurity training and consulting organization with proven global impact",
    award: ["98% Client Success Rate", "500+ Enterprises Served", "10,000+ Professionals Trained"],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Cybersecurity Training Excellence",
        recognizedBy: {
          "@type": "Organization",
          name: "Industry Recognition",
        },
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "500",
    },
  }

  return (
    <>
      <StructuredData data={achievementStructuredData} />
      <main className="min-h-screen">
        <PlatformImpactHeroSection />
        <GlobalReachSection />
        <SuccessMetricsSection />
        <TestimonialsSection />
        <RoiSection />
      </main>
    </>
  )
}
