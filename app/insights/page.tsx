import type { Metadata } from "next"
import { InsightsHeroSection } from "@/components/insights/insights-hero-section"
import { GrowthChartsSection } from "@/components/insights/growth-charts-section"
import { CaseStudiesSection } from "@/components/insights/case-studies-section"
import { StructuredData } from "@/components/seo/structured-data"
import { generateMetadata, generateStructuredData } from "@/lib/seo"

export const metadata: Metadata = generateMetadata({
  title: "Cybersecurity Market Insights & Trends",
  description:
    "Explore comprehensive cybersecurity market trends, industry adoption rates, and data-driven insights. Discover the growing demand for security training, consulting services, and emerging threat landscapes with detailed case studies.",
  keywords:
    "cybersecurity market trends, security industry insights, training market growth, consulting market analysis, threat landscape analysis, security adoption rates, industry case studies, cybersecurity statistics, market research",
  canonical: "/insights",
  ogType: "website",
  section: "Research",
})

export default function InsightsPage() {
  const researchStructuredData = generateStructuredData("Article", {
    headline: "Cybersecurity Market Insights and Industry Trends",
    description: "Comprehensive analysis of cybersecurity market trends and industry adoption rates",
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    articleSection: "Market Research",
    keywords: ["cybersecurity market", "security trends", "industry adoption", "market analysis"],
    about: {
      "@type": "Thing",
      name: "Cybersecurity Market Analysis",
    },
    mainEntity: {
      "@type": "Dataset",
      name: "Cybersecurity Industry Statistics",
      description: "Comprehensive data on cybersecurity market growth and adoption rates",
    },
  })

  return (
    <>
      <StructuredData data={researchStructuredData} />
      <div className="flex flex-col min-h-screen">
        <InsightsHeroSection />
        <GrowthChartsSection />
        <CaseStudiesSection />
      </div>
    </>
  )
}
