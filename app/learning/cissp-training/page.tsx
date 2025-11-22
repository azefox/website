import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { CheckCircle, Shield, Users, Award, BookOpen, Clock, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CISSPTrainingPage() {
  return (
    <div className="min-h-screen mt-15 bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Professional Certification</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance">
                CISSP Training
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-pretty">
                Master cybersecurity leadership with our comprehensive CISSP training program. Join thousands of
                professionals who have advanced their careers with this globally recognized certification.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link target="_blank" href="https://academy.azefox.com/courses/Certified-Information-Systems-Security-Professional-CISSP-Training-689a03952fa0742b9a9e8776">Enroll Now</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/cissp.webp"
                  alt="CISSP Certification Training"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-yellow-500" />
                  <span className="font-semibold">ISC² Authorized</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why You Need CISSP Certification</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              In today's digital landscape, cybersecurity expertise is not just valuable—it's essential. CISSP
              certification positions you as a trusted security leader.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Industry Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  CISSP is the gold standard in cybersecurity, recognized by organizations worldwide as proof of
                  advanced security knowledge and leadership capability.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Career Advancement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Open doors to senior security roles, consulting opportunities, and leadership positions with
                  significantly higher earning potential.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Comprehensive Knowledge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Master all eight domains of cybersecurity, from risk management to software security, making you a
                  well-rounded security professional.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Training Benefits</h2>
              <div className="space-y-4">
                {[
                  "Expert-led instruction from certified professionals",
                  "Comprehensive study materials and practice exams",
                  "Flexible learning schedule with online and in-person options",
                  "Career guidance and job placement assistance",
                  "Lifetime access to updated course materials",
                  "Money-back guarantee if you don't pass",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-sm text-gray-600">Pass Rate</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">$130K</div>
                <div className="text-sm text-gray-600">Avg. Salary</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">40hrs</div>
                <div className="text-sm text-gray-600">Training Time</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Course Outcomes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Upon completion, you'll have mastered all eight CISSP domains and be ready to lead cybersecurity
              initiatives.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { domain: "Security & Risk Management", icon: Shield },
              { domain: "Asset Security", icon: Award },
              { domain: "Security Architecture", icon: BookOpen },
              { domain: "Communication & Network Security", icon: Users },
              { domain: "Identity & Access Management", icon: CheckCircle },
              { domain: "Security Assessment", icon: Star },
              { domain: "Security Operations", icon: Clock },
              { domain: "Software Development Security", icon: Shield },
            ].map((item, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <item.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 text-sm">{item.domain}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Your CISSP Certificate Awaits</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto text-pretty">
            Join the elite community of CISSP-certified professionals and showcase your expertise with this prestigious
            certification.
          </p>
          <div className="max-w-2xl mx-auto">
            <Image
              src="/cissp.webp"
              alt="CISSP Certificate Demo"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about our CISSP training program.</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                What are the prerequisites for CISSP certification?
              </AccordionTrigger>
              <AccordionContent>
                You need at least 5 years of cumulative, paid, full-time work experience in two or more of the eight
                CISSP domains. A college degree or additional certifications can substitute for up to one year of
                experience.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                How long is the CISSP exam and what's the format?
              </AccordionTrigger>
              <AccordionContent>
                The CISSP exam is a computer-based test with 100-150 questions. You have up to 3 hours to complete it.
                The exam uses adaptive testing, so the number of questions varies based on your performance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">What's included in the training program?</AccordionTrigger>
              <AccordionContent>
                Our comprehensive program includes live instructor-led sessions, recorded lectures, official study
                guides, practice exams, hands-on labs, and ongoing support from certified instructors.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">Do you offer a money-back guarantee?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer a 100% money-back guarantee if you don't pass the CISSP exam after completing our training
                program and following our study recommendations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600">
              Hear from professionals who've successfully earned their CISSP certification with our training.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Security Manager at TechCorp",
                avatar: "SJ",
                rating: 5,
                feedback:
                  "The training was comprehensive and well-structured. I passed the CISSP exam on my first attempt thanks to their excellent preparation materials and expert guidance.",
              },
              {
                name: "Michael Chen",
                role: "IT Director at FinanceSecure",
                avatar: "MC",
                rating: 5,
                feedback:
                  "Outstanding program! The instructors were knowledgeable and the hands-on labs really helped me understand complex security concepts. Highly recommended.",
              },
              {
                name: "Emily Rodriguez",
                role: "Cybersecurity Consultant",
                avatar: "ER",
                rating: 5,
                feedback:
                  "This training program exceeded my expectations. The career guidance and job placement assistance helped me land a senior security role with a 40% salary increase.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback className="bg-blue-100 text-blue-600">{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-pretty">"{testimonial.feedback}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Advance Your Cybersecurity Career?
          </h2>
          <p className="text-xl text-gray-300 mb-8 text-pretty">
            Join our next CISSP training cohort and take the first step toward becoming a certified cybersecurity
            leader.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link target="_blank" href="https://academy.azefox.com/courses/Certified-Information-Systems-Security-Professional-CISSP-Training-689a03952fa0742b9a9e8776">Enroll Now</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
            >
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
