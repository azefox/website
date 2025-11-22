import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Shield, Target, Code, Bug, Award, Users, Clock, BookOpen, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function WAPTCertificationPage() {
  return (
    <div className="min-h-screen mt-15 bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-red-100 text-red-700 hover:bg-red-200">Professional Certification</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance">
                Web Application Penetration Testing
                <span className="text-red-600"> Certification</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-pretty">
                Master the art of ethical hacking and secure web applications through comprehensive penetration testing
                methodologies and hands-on practice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  <Link target="_blank" href="https://academy.azefox.com/courses/ACWAPT-67e3f5de7877b84d88b8e40f">Enroll Now</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/wapt.webp"
                alt="WAPT Certification Badge"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why You Need This Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why You Need WAPT Certification</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              In today's digital landscape, web applications are the primary target for cyber attacks. Organizations
              desperately need skilled professionals who can identify and fix vulnerabilities before malicious actors
              exploit them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <Target className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>High Demand Career</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Web application security specialists earn an average of $95,000-$140,000 annually, with demand growing
                  32% year-over-year.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <Bug className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Critical Skills Gap</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Over 3.5 million cybersecurity positions remain unfilled globally, with web app security being the
                  most sought-after skill.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Business Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Web application vulnerabilities cause 43% of all data breaches, making penetration testing essential
                  for business continuity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Certification Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Transform your career with industry-recognized skills and hands-on expertise in web application security
              testing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Industry Recognition</h3>
                  <p className="text-gray-600">
                    Globally recognized certification accepted by Fortune 500 companies and government agencies.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Hands-on Experience</h3>
                  <p className="text-gray-600">
                    Real-world lab environments with vulnerable applications for practical learning.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Career Advancement</h3>
                  <p className="text-gray-600">
                    Average 35% salary increase within 12 months of certification completion.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Lifetime Support</h3>
                  <p className="text-gray-600">
                    Access to exclusive community, job placement assistance, and continuous learning resources.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Success Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Job Placement Rate</span>
                  <span className="font-bold text-green-600">94%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: "94%" }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Salary Increase</span>
                  <span className="font-bold text-blue-600">35%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "35%" }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Student Satisfaction</span>
                  <span className="font-bold text-purple-600">98%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: "98%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Outcomes Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Course Outcomes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Master comprehensive web application penetration testing methodologies and become a certified ethical
              hacker.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Code className="h-10 w-10 text-red-600 mb-4" />
                <CardTitle className="text-lg">Web App Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• HTTP/HTTPS protocols and methods</li>
                  <li>• Client-server architecture</li>
                  <li>• Web technologies and frameworks</li>
                  <li>• Database integration patterns</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-10 w-10 text-orange-600 mb-4" />
                <CardTitle className="text-lg">Vulnerability Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• OWASP Top 10 vulnerabilities</li>
                  <li>• Automated scanning tools</li>
                  <li>• Manual testing techniques</li>
                  <li>• Risk assessment methodologies</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Bug className="h-10 w-10 text-blue-600 mb-4" />
                <CardTitle className="text-lg">Exploitation Techniques</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• SQL injection attacks</li>
                  <li>• Cross-site scripting (XSS)</li>
                  <li>• Authentication bypasses</li>
                  <li>• Session management flaws</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-10 w-10 text-green-600 mb-4" />
                <CardTitle className="text-lg">Security Testing Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Burp Suite Professional</li>
                  <li>• OWASP ZAP</li>
                  <li>• Nmap and Nessus</li>
                  <li>• Custom scripting tools</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-10 w-10 text-purple-600 mb-4" />
                <CardTitle className="text-lg">Reporting & Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Professional report writing</li>
                  <li>• Executive summaries</li>
                  <li>• Remediation recommendations</li>
                  <li>• Compliance frameworks</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-10 w-10 text-indigo-600 mb-4" />
                <CardTitle className="text-lg">Ethical Hacking Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Legal and ethical guidelines</li>
                  <li>• Responsible disclosure</li>
                  <li>• Professional conduct</li>
                  <li>• Industry best practices</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Certificate Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Your Professional Certificate</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Upon successful completion, receive an industry-recognized certificate that validates your expertise in
              web application penetration testing.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Image
                src="/wapt.webp"
                alt="WAPT Professional Certificate"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Industry Recognized</h3>
                <p className="text-gray-600">Accepted by leading cybersecurity firms and enterprises worldwide</p>
              </div>

              <div className="text-center">
                <Shield className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Blockchain Verified</h3>
                <p className="text-gray-600">Tamper-proof digital certificate with blockchain verification</p>
              </div>

              <div className="text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Professional Network</h3>
                <p className="text-gray-600">Join an exclusive community of certified penetration testers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 text-pretty">
              Get answers to common questions about our WAPT certification program.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                What are the prerequisites for this certification?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Basic understanding of networking concepts, web technologies (HTML, HTTP), and familiarity with Linux
                command line. No prior penetration testing experience required as we cover fundamentals.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                How long does it take to complete the certification?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                The program is designed to be completed in 12-16 weeks with 10-15 hours of study per week. We offer
                flexible scheduling with both self-paced and instructor-led options.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">What tools and software will I need?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We provide access to a cloud-based lab environment with all necessary tools including Burp Suite
                Professional, Kali Linux, and vulnerable applications. You only need a computer with internet access.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Is there job placement assistance after certification?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes! We offer comprehensive career support including resume review, interview preparation, job matching
                with our partner companies, and access to our exclusive job board with 500+ active positions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">What is the exam format and passing criteria?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                The certification exam consists of hands-on practical assessments where you'll perform real penetration
                tests on vulnerable applications, followed by a comprehensive report. Passing score is 75% with
                unlimited retakes included.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">Do you offer any guarantees?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We offer a 30-day money-back guarantee and a job placement guarantee - if you don't land a cybersecurity
                role within 6 months of certification, we'll refund your tuition fee.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Student Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Hear from professionals who transformed their careers with our WAPT certification program.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-red-600">SM</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Sarah Martinez</h3>
                    <p className="text-sm text-gray-600">Senior Penetration Tester at CyberGuard</p>
                  </div>
                </div>
                <div className="flex space-x-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "This certification completely changed my career trajectory. The hands-on labs were incredibly
                  realistic, and I landed my dream job as a penetration tester within 3 months of completing the
                  program."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-blue-600">MJ</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Michael Johnson</h3>
                    <p className="text-sm text-gray-600">Security Consultant at SecureNet</p>
                  </div>
                </div>
                <div className="flex space-x-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "The practical approach and real-world scenarios prepared me perfectly for the field. My salary
                  increased by 40% after certification, and I now lead penetration testing engagements for Fortune 500
                  companies."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-green-600">AP</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Aisha Patel</h3>
                    <p className="text-sm text-gray-600">Cybersecurity Analyst at TechCorp</p>
                  </div>
                </div>
                <div className="flex space-x-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Coming from a non-technical background, I was worried about the complexity. The instructors were
                  amazing, and the step-by-step approach made everything clear. Now I'm a certified ethical hacker!"
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">4.9/5</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">2,500+</div>
                <div className="text-sm text-gray-600">Certified Students</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">94%</div>
                <div className="text-sm text-gray-600">Job Placement Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 text-balance">
            Ready to Become a Certified Web Application Penetration Tester?
          </h2>
          <p className="text-xl text-red-100 mb-8 text-pretty">
            Join thousands of professionals who have advanced their careers with our comprehensive WAPT certification
            program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              <Clock className="mr-2 h-5 w-5" />
              <Link target="_blank" href="https://academy.azefox.com/courses/ACWAPT-67e3f5de7877b84d88b8e40f/">Enroll Now - Limited Seats</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
            >
              <Link href="/contact">Schedule Free Consultation</Link>
            </Button>
          </div>
          <p className="text-red-200 mt-4 text-sm">
            Next cohort starts in 2 weeks • 30-day money-back guarantee • Job placement assistance included
          </p>
        </div>
      </section>
    </div>
  )
}
