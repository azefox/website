import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const departments = [
  {
    name: "Security Consultants",
    members: [
      {
        name: "Alex Kumar",
        role: "Senior Security Architect",
        specialties: ["Zero Trust", "Cloud Security", "IAM"],
        image: "/professional-man-security-consultant.jpg",
      },
      {
        name: "Lisa Wang",
        role: "Penetration Testing Lead",
        specialties: ["VAPT", "Red Team", "OSINT"],
        image: "/professional-woman-penetration-tester.jpg",
      },
      {
        name: "David Park",
        role: "Compliance Specialist",
        specialties: ["SOC 2", "ISO 27001", "GDPR"],
        image: "/professional-man-compliance-specialist.jpg",
      },
    ],
  },
  {
    name: "Training Specialists",
    members: [
      {
        name: "Maria Santos",
        role: "Cybersecurity Trainer",
        specialties: ["Security Awareness", "Phishing", "Incident Response"],
        image: "/professional-woman-cybersecurity-trainer.jpg",
      },
      {
        name: "Robert Johnson",
        role: "Technical Instructor",
        specialties: ["Hands-on Labs", "DevSecOps", "Cloud Security"],
        image: "/professional-man-technical-instructor.jpg",
      },
      {
        name: "Jennifer Lee",
        role: "Learning Designer",
        specialties: ["Curriculum Design", "E-learning", "Assessment"],
        image: "/professional-woman-learning-designer.jpg",
      },
    ],
  },
]

export function TeamMembersSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expert Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet some of our talented professionals who work tirelessly to deliver exceptional security solutions and
            training programs.
          </p>
        </div>

        {departments.map((department) => (
          <div key={department.name} className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">{department.name}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {department.members.map((member) => (
                <Card key={member.name} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h4 className="font-semibold text-lg mb-1">{member.name}</h4>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.specialties.map((specialty) => (
                        <Badge key={specialty} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
