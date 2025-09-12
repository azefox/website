"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlayCircle, Clock, Users } from "lucide-react"

const learningPaths = [
  {
    id: "beginner",
    title: "Beginner Path",
    description: "Perfect for those new to cybersecurity",
    duration: "3-6 months",
    courses: 8,
    students: "5000+",
    modules: [
      {
        name: "Introduction to Cybersecurity",
        duration: "2 weeks",
        description: "Fundamental concepts and terminology",
      },
      {
        name: "Network Security Basics",
        duration: "3 weeks",
        description: "Understanding network protocols and security",
      },
      {
        name: "Operating System Security",
        duration: "3 weeks",
        description: "Windows and Linux security fundamentals",
      },
      {
        name: "Basic Risk Assessment",
        duration: "2 weeks",
        description: "Identifying and evaluating security risks",
      },
    ],
    color: "bg-green-100 text-green-800",
  },
  {
    id: "intermediate",
    title: "Intermediate Path",
    description: "For professionals with basic security knowledge",
    duration: "6-9 months",
    courses: 12,
    students: "3000+",
    modules: [
      {
        name: "Advanced Threat Detection",
        duration: "4 weeks",
        description: "SIEM tools and threat hunting techniques",
      },
      {
        name: "Incident Response",
        duration: "3 weeks",
        description: "Handling security incidents effectively",
      },
      {
        name: "Vulnerability Assessment",
        duration: "4 weeks",
        description: "Identifying and prioritizing vulnerabilities",
      },
      {
        name: "Security Architecture",
        duration: "5 weeks",
        description: "Designing secure systems and networks",
      },
    ],
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    id: "advanced",
    title: "Advanced Path",
    description: "For experienced security professionals",
    duration: "9-12 months",
    courses: 15,
    students: "1500+",
    modules: [
      {
        name: "Advanced Penetration Testing",
        duration: "6 weeks",
        description: "Complex attack scenarios and methodologies",
      },
      {
        name: "Malware Analysis",
        duration: "5 weeks",
        description: "Reverse engineering and behavioral analysis",
      },
      {
        name: "Security Research",
        duration: "4 weeks",
        description: "Discovering new vulnerabilities and exploits",
      },
      {
        name: "Leadership in Security",
        duration: "3 weeks",
        description: "Managing security teams and programs",
      },
    ],
    color: "bg-red-100 text-red-800",
  },
]

export function LearningPathSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Learning Paths</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Structured learning journeys from beginner to expert level
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {learningPaths.map((path) => (
              <AccordionItem
                key={path.id}
                value={path.id}
                className="border border-border rounded-lg px-6 bg-card hover:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-4">
                      <Badge className={path.color}>{path.title}</Badge>
                      <div>
                        <h3 className="text-xl font-semibold text-primary">{path.title}</h3>
                        <p className="text-muted-foreground text-sm">{path.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {path.duration}
                      </div>
                      <div className="flex items-center">
                        <PlayCircle className="w-4 h-4 mr-1" />
                        {path.courses} courses
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {path.students}
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {path.modules.map((module, index) => (
                      <div key={index} className="p-4 bg-muted rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-foreground">{module.name}</h4>
                          <span className="text-xs text-muted-foreground">{module.duration}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{module.description}</p>
                      </div>
                    ))}
                  </div>
                  <Button className="gradient-primary hover:opacity-90 transition-opacity">Start This Path</Button>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
