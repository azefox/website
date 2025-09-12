"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Target, Award, Shield } from "lucide-react"

const metrics = [
  {
    category: "Security Posture Improvement",
    icon: Shield,
    items: [
      { metric: "Average Security Score Increase", value: 85, unit: "%" },
      { metric: "Vulnerability Reduction", value: 92, unit: "%" },
      { metric: "Compliance Achievement Rate", value: 98, unit: "%" },
    ],
  },
  {
    category: "Operational Efficiency",
    icon: TrendingUp,
    items: [
      { metric: "Incident Response Time Reduction", value: 75, unit: "%" },
      { metric: "Security Team Productivity Gain", value: 60, unit: "%" },
      { metric: "Cost Savings on Security Operations", value: 45, unit: "%" },
    ],
  },
  {
    category: "Learning Outcomes",
    icon: Award,
    items: [
      { metric: "Course Completion Rate", value: 94, unit: "%" },
      { metric: "Certification Success Rate", value: 89, unit: "%" },
      { metric: "Knowledge Retention Score", value: 87, unit: "%" },
    ],
  },
  {
    category: "Business Impact",
    icon: Target,
    items: [
      { metric: "ROI Achievement", value: 320, unit: "%" },
      { metric: "Time to Value Realization", value: 90, unit: " days" },
      { metric: "Client Satisfaction Score", value: 96, unit: "%" },
    ],
  },
]

export function SuccessMetricsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Success Metrics
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Measurable Results</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform delivers quantifiable improvements across security, operations, learning, and business
            outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {metrics.map((category) => (
            <Card key={category.category} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.items.map((item) => (
                  <div key={item.metric} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{item.metric}</span>
                      <span className="text-sm font-bold text-primary">
                        {item.value}
                        {item.unit}
                      </span>
                    </div>
                    <Progress value={item.unit === "%" ? item.value : Math.min(item.value / 4, 100)} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
