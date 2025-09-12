"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, Globe, Building, Clock, Users } from "lucide-react"

const programsData = {
  college: [
    {
      title: "Web Application Penetration Tester",
      description: "Identify. Exploit. Report. Master the Full Cycle of Web Application Penetration Testing.",
      duration: "3 weeks",
      students: "500+",
      level: "Beginner",
      features: ["Understanding Web Technologies", "Input Validation and Injection Attacks\t", "Bug Bounty Techniques and Automation\t", "Hands-on Labs"],
      link: "/learning/web-application-penetration-tester",
    },
  ],
  online: [
    {
      title: "Web Application Penetration Tester",
      description: "Identify. Exploit. Report. Master the Full Cycle of Web Application Penetration Testing.",
      duration: "3 weeks",
      students: "500+",
      level: "Beginner",
      features: ["Understanding Web Technologies", "Input Validation and Injection Attacks\t", "Bug Bounty Techniques and Automation\t", "Hands-on Labs"],
      link: "/learning/web-application-penetration-tester",
    },
    {
      title: "CISSP Training",
      description: "Gear up for success with our intensive CISSP Training Bootcamp and become a certified expert in Information Systems Security",
      duration: "2 weeks",
      students: "400+",
      level: "Executive",
      features: ["Security and Risk Management", "Asset Security", "Security Architecture and Engineering\t", "Identity and Access Management (IAM)"],
      link: "/learning/cissp-training",
    },
  ],
  corporate: [
    {
      title: "CISSP Training",
      description: "Gear up for success with our intensive CISSP Training Bootcamp and become a certified expert in Information Systems Security",
      duration: "2 weeks",
      students: "400+",
      level: "Executive",
      features: ["Security and Risk Management", "Asset Security", "Security Architecture and Engineering\t", "Identity and Access Management (IAM)"],
      link: "/learning/cissp-training",
    },
  ],
}

export default function ProgramsSection() {
  const [activeTab, setActiveTab] = useState("college")
  const router = useRouter()

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Training Programs</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose from our specialized programs designed for different audiences and skill levels
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-muted p-1 rounded-lg">
            <TabsTrigger
              value="college"
              className="flex items-center space-x-2 data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              <GraduationCap className="w-4 h-4" />
              <span>College Students</span>
            </TabsTrigger>
            <TabsTrigger
              value="online"
              className="flex items-center space-x-2 data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              <Globe className="w-4 h-4" />
              <span>Online</span>
            </TabsTrigger>
            <TabsTrigger
              value="corporate"
              className="flex items-center space-x-2 data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              <Building className="w-4 h-4" />
              <span>Corporate Training</span>
            </TabsTrigger>
          </TabsList>

          {Object.entries(programsData).map(([key, programs]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {programs.map((program, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-border bg-card"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            program.level === "Beginner"
                              ? "bg-green-100 text-green-800"
                              : program.level === "Intermediate"
                                ? "bg-yellow-100 text-yellow-800"
                                : program.level === "Advanced"
                                  ? "bg-red-100 text-red-800"
                                  : "bg-purple-100 text-purple-800"
                          }`}
                        >
                          {program.level}
                        </span>
                      </div>
                      <CardTitle className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                        {program.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">{program.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {program.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {program.students}
                        </div>
                      </div>

                      <ul className="space-y-2 mb-6">
                        {program.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-2 h-2 rounded-full bg-accent mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Button
                        className="w-full gradient-primary hover:opacity-90 transition-opacity"
                        onClick={() => router.push(program.link)}
                      >
                        Enroll Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
