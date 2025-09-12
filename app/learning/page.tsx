import type { Metadata } from "next"
import ProgramsSection from "@/components/learning/programs-section"
import { LearningPathSection } from "@/components/learning/learning-path-section"
import { CertificationSection } from "@/components/learning/certification-section"
import { LearningHeroSection } from "@/components/learning/learning-hero-section"
import { StructuredData } from "@/components/seo/structured-data"
import { generateMetadata, generateStructuredData } from "@/lib/seo"

export const metadata: Metadata = generateMetadata({
  title: "Cybersecurity Training & Learning Programs",
  description:
    "Master cybersecurity skills with comprehensive training programs for college students, professionals, and enterprises. Expert-led courses, hands-on labs, and industry certifications to advance your security career.",
  keywords:
    "cybersecurity training, online security courses, corporate cybersecurity training, security certifications, college cybersecurity programs, DevSecOps training, cloud security courses, ethical hacking, penetration testing training, SOC analyst training",
  canonical: "/learning",
  ogType: "website",
  section: "Education",
})

export default function LearningPage() {
  const courseStructuredData = generateStructuredData("Course", {
    name: "Comprehensive Cybersecurity Training Programs",
    description: "Professional cybersecurity training covering ethical hacking, cloud security, DevSecOps, and more",
    provider: {
      "@type": "Organization",
      name: "Azefox Innovations",
      url: "https://azefox.com",
    },
    courseMode: ["online", "onsite"],
    educationalLevel: ["Beginner", "Intermediate", "Advanced"],
    teaches: [
      "Ethical Hacking",
      "Penetration Testing",
      "Cloud Security",
      "DevSecOps",
      "SOC Operations",
      "Incident Response",
      "Compliance & Governance",
    ],
    coursePrerequisites: "Basic IT knowledge recommended",
    hasCourseInstance: [
      {
        "@type": "CourseInstance",
        courseMode: "online",
        instructor: {
          "@type": "Organization",
          name: "Azefox Innovations Expert Team",
        },
      },
    ],
  })

  return (
    <>
      <StructuredData data={courseStructuredData} />
      <div className="flex flex-col min-h-screen">
        <LearningHeroSection />
        <ProgramsSection />
        <LearningPathSection />
        <CertificationSection />
      </div>
    </>
  )
}
