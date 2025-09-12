"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts"

const elearningGrowthData = [
  { year: "2019", revenue: 2.5, students: 1200 },
  { year: "2020", revenue: 4.2, students: 2800 },
  { year: "2021", revenue: 7.8, students: 4500 },
  { year: "2022", revenue: 12.3, students: 6800 },
  { year: "2023", revenue: 18.7, students: 8900 },
  { year: "2024", revenue: 25.4, students: 10200 },
]

const consultingGrowthData = [
  { year: "2019", revenue: 1.8, clients: 45 },
  { year: "2020", revenue: 3.2, clients: 78 },
  { year: "2021", revenue: 5.9, clients: 125 },
  { year: "2022", revenue: 9.4, clients: 198 },
  { year: "2023", revenue: 14.2, clients: 285 },
  { year: "2024", revenue: 19.8, clients: 350 },
]

const marketTrendsData = [
  { category: "Security Training", growth: 285, demand: 92 },
  { category: "Cloud Security", growth: 340, demand: 88 },
  { category: "AI Security", growth: 450, demand: 95 },
  { category: "Zero Trust", growth: 380, demand: 90 },
  { category: "Compliance", growth: 220, demand: 85 },
]

export function GrowthChartsSection() {
  return (
    <section id="growth" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Growth Analytics</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive analysis of e-learning and consulting market growth over the past five years
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* E-learning Growth Chart */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-primary">E-learning Revenue Growth</CardTitle>
              <CardDescription>Annual revenue and student enrollment trends (in millions USD)</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={elearningGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
                  <XAxis dataKey="year" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#ffffff",
                      border: "1px solid #d1d5db",
                      borderRadius: "8px",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#38419d"
                    fill="url(#elearningGradient)"
                    strokeWidth={3}
                  />
                  <defs>
                    <linearGradient id="elearningGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#38419d" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#38419d" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Consulting Growth Chart */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-secondary">Consulting Revenue Growth</CardTitle>
              <CardDescription>Annual consulting revenue and client base expansion</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={consultingGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
                  <XAxis dataKey="year" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#ffffff",
                      border: "1px solid #d1d5db",
                      borderRadius: "8px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#3887be"
                    strokeWidth={3}
                    dot={{ fill: "#3887be", strokeWidth: 2, r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Market Trends Chart */}
        <Card className="border-border bg-card">
          <CardHeader className="text-center">
            <CardTitle className="text-accent">Market Trends & Demand</CardTitle>
            <CardDescription>Growth percentage and demand index across cybersecurity domains</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={marketTrendsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
                <XAxis dataKey="category" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="growth" fill="#3396d3" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Key Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="border-border bg-card text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">900%</div>
              <div className="text-muted-foreground">E-learning Growth</div>
              <div className="text-sm text-muted-foreground mt-2">Since 2019</div>
            </CardContent>
          </Card>
          <Card className="border-border bg-card text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-secondary mb-2">1000%</div>
              <div className="text-muted-foreground">Consulting Expansion</div>
              <div className="text-sm text-muted-foreground mt-2">Client base growth</div>
            </CardContent>
          </Card>
          <Card className="border-border bg-card text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-accent mb-2">450%</div>
              <div className="text-muted-foreground">AI Security Demand</div>
              <div className="text-sm text-muted-foreground mt-2">Fastest growing sector</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
