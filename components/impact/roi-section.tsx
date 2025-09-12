import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calculator, DollarSign, TrendingUp, Clock, ArrowRight } from "lucide-react"

const roiMetrics = [
  {
    metric: "Average ROI",
    value: "320%",
    description: "Return on investment within 12 months",
    icon: TrendingUp,
    color: "text-green-600",
  },
  {
    metric: "Cost Savings",
    value: "$2.5M",
    description: "Average annual savings per enterprise client",
    icon: DollarSign,
    color: "text-blue-600",
  },
  {
    metric: "Payback Period",
    value: "4.2 months",
    description: "Time to recover initial investment",
    icon: Clock,
    color: "text-purple-600",
  },
  {
    metric: "Risk Reduction",
    value: "85%",
    description: "Decrease in security risk exposure",
    icon: Calculator,
    color: "text-orange-600",
  },
]

const costBenefits = [
  {
    category: "Direct Cost Savings",
    items: [
      "Reduced security incidents and breach costs",
      "Lower compliance and audit expenses",
      "Decreased security tool redundancy",
      "Optimized security team productivity",
    ],
  },
  {
    category: "Operational Benefits",
    items: [
      "Faster incident detection and response",
      "Automated security processes",
      "Improved team efficiency and morale",
      "Enhanced business continuity",
    ],
  },
  {
    category: "Strategic Advantages",
    items: [
      "Competitive advantage through security",
      "Customer trust and retention",
      "Regulatory compliance confidence",
      "Scalable security architecture",
    ],
  },
]

export function RoiSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            ROI Analysis
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Return on Investment</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our clients consistently achieve significant ROI through reduced costs, improved efficiency, and enhanced
            security posture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {roiMetrics.map((metric) => (
            <Card key={metric.metric} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-4">
                  <metric.icon className={`h-6 w-6 ${metric.color}`} />
                </div>
                <div className={`text-3xl font-bold mb-2 ${metric.color}`}>{metric.value}</div>
                <div className="font-medium mb-2">{metric.metric}</div>
                <div className="text-sm text-muted-foreground">{metric.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {costBenefits.map((benefit) => (
            <Card key={benefit.category} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{benefit.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {benefit.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Calculate Your ROI</h3>
              <p className="text-muted-foreground mb-6">
                See how much your organization could save with our platform. Get a personalized ROI analysis based on
                your specific requirements.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              >
                Get ROI Calculator
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
