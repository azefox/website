import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Users,
  Award,
  BookOpen,
  Shield,
  Target,
  ArrowRight,
  Star,
  Clock,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"


export default function WorkshopPage() {
  return (
    <div className="flex flex-col mt-15 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              🎓 Learning Edutech & IT Security Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Transform Your Career with
              <span className="text-primary"> Expert-Led</span> Cybersecurity Training
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Break into cybersecurity without years of experience. From beginner to expert, get the practical, job-ready skills employers are actually hiring for.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                        Book Your Spot Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </Link>
              <Button size="lg" variant="outline">
                View Course Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore Our Featured Courses
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kickstart your journey with our most in-demand courses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Link href="/learning/cissp-training" className="group">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <img
                  src="/cissp.webp"
                  alt="Cybersecurity Essentials"
                  className="w-full h-52 object-cover"
                />
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-semibold text-primary">
                    CISSP Bootcamp
                  </CardTitle>
                  <CardDescription className="mt-2 text-muted-foreground">
                    Build a strong foundation in core security principles and threats.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link href="/learning/web-application-penetration-tester" className="group">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <img
                  src="/wapt.webp"
                  alt="Cloud Security Pro"
                  className="w-full h-52 object-cover"
                />
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-semibold text-secondary">
                    Web Application Penetration Testing
                  </CardTitle>
                  <CardDescription className="mt-2 text-muted-foreground">
                    Master security for environments with real-world scenarios.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Proven Track Record of Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our achievements speak for themselves - empowering professionals worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Learners Trained</div>
            </div>
            <div className="text-center">
              <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold text-secondary mb-2">500+</div>
              <div className="text-muted-foreground">Enterprises Served</div>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
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
          </div>
        </section>
      
      {/* Pain Points Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Azefox Workshops?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Addressing the real challenges faced by IT and cybersecurity professionals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Target className="w-5 h-5" />
                  Practical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our hands-on labs and real-world scenarios ensure you gain skills that matter in the field.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-secondary">
                  <BookOpen className="w-5 h-5" />
                  Updated Curriculum
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Stay ahead with up-to-date content curated by industry experts and practitioners.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-accent">
                  <Star className="w-5 h-5" />
                  Career Growth
                </CardTitle>
              </CardHeader>
                            <CardContent>
                <CardDescription>
                  Unlock new opportunities and certifications to boost your professional journey.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      

      {/* Workshop Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Workshop Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our comprehensive training approach
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Expert Instructors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Learn from certified professionals with years of industry experience.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Flexible Schedules
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Choose sessions that fit your calendar, including weekends and evenings.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-600" />
                  Certification Prep
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get ready for industry-recognized certifications with focused exam training.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-purple-600" />
                  Security Focused
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  All workshops are designed with the latest security best practices in mind.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-pink-600" />
                  Community Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Join a vibrant community of learners and experts for ongoing support.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-cyan-600" />
                  Career Advancement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Accelerate your career with skills that employers value most.
                </CardDescription>
              </CardContent>
            </Card>
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
                Who are these courses for?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Our courses are specifically designed for aspiring cybersecurity professionals and IT practitioners looking to transition into this critical field. We provide the practical skills and foundational knowledge you need to launch or advance your cybersecurity career.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Are the courses self-paced or on a schedule?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We provide both recorded as well as live session, please check the respective course catalogs button
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">Do I receive a certificate of completion?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We provide Certificate of Completion
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Is there job placement assistance after certification?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                After finishing the course we will provide career guidance and job support and doubts clarification through the community.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">Do I need any specific software or tools to start?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Laptop and a good internet connection is more than enough to learn.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Elevate Your Skills?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Secure your spot in our next workshop and take the first step towards a brighter future in cybersecurity.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Contact Us to Register <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
