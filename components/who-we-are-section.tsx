"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Target, Eye, Building } from "lucide-react"

const whoWeAreData = [
  {
    id: "about",
    title: "About Azefox",
    icon: Building,
    content:
      "Azefox Innovations is a leading cybersecurity training and IT consulting company dedicated to empowering individuals and organizations with cutting-edge security knowledge and solutions. Founded by industry experts, we bridge the gap between theoretical knowledge and practical application in the rapidly evolving cybersecurity landscape.",
  },
  {
    id: "mission",
    title: "Our Mission",
    icon: Target,
    content:
      "To democratize cybersecurity education and provide world-class security consulting services that enable organizations to build robust defense mechanisms against evolving cyber threats. We strive to create a safer digital world through comprehensive training, expert consulting, and innovative security solutions.",
  },
  {
    id: "vision",
    title: "Our Vision",
    icon: Eye,
    content:
      "To become the global leader in cybersecurity education and consulting, recognized for our innovative training methodologies, expert guidance, and transformative impact on organizational security postures. We envision a future where every professional is equipped with the knowledge and skills to defend against cyber threats.",
  },
]

export function WhoWeAreSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Who We Are</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the story behind Azefox Innovations and our commitment to cybersecurity excellence
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {whoWeAreData.map((item) => {
              const Icon = item.icon
              return (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border border-border rounded-lg px-6 bg-background hover:shadow-lg transition-all duration-300"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-xl font-semibold text-primary">{item.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pt-2">
                    <p className="text-muted-foreground leading-relaxed text-lg ml-16">{item.content}</p>
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
