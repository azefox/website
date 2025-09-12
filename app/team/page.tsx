import type { Metadata } from "next"
import { TeamHeroSection } from "@/components/team/team-hero-section"
import { LeadershipSection } from "@/components/team/leadership-section"
import { TeamMembersSection } from "@/components/team/team-members-section"
import { CompanyCultureSection } from "@/components/team/company-culture-section"

export const metadata: Metadata = {
  title: "Our Team | Azefox Innovations - Expert Cybersecurity Professionals",
  description:
    "Meet the expert team behind Azefox Innovations. Our cybersecurity professionals, consultants, and trainers are dedicated to transforming organizational security.",
  keywords:
    "cybersecurity team, security experts, IT consultants, security trainers, leadership team, cybersecurity professionals",
}

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <TeamHeroSection />
      <LeadershipSection />
      <TeamMembersSection />
      <CompanyCultureSection />
    </main>
  )
}
