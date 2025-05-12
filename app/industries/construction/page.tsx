import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, HardHat, Zap, Building, Clock, Shield, BarChart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ConstructionIndustryPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative h-[400px] w-full">
          <Image
            src="/industries/construction-hero.png"
            alt="Construction site with solar installation"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Construction Industry Solutions
              </h1>
              <p className="mt-6 text-xl text-white">
                Comprehensive energy and M.E.P. solutions for construction companies and developers.
              </p>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/contact?industry=construction">Request a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <HardHat className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Building a Sustainable Future</h2>
              <p className="mt-4 text-lg text-gray-600">
                Sarxt Energy partners with construction companies and developers to integrate cutting-edge energy
                solutions into new construction and renovation projects. Our expertise in solar energy and M.E.P.
                systems allows us to work alongside your team from the design phase through completion, ensuring
                seamless integration and optimal performance.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Whether you're building residential communities, commercial properties, or industrial facilities, our
                solutions help you meet energy codes, achieve green building certifications, and deliver more valuable,
                sustainable projects to your clients.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Design-build energy solutions</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">M.E.P. systems integration</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Solar-ready infrastructure</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Energy code compliance</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Green building certification</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Energy modeling and analysis</p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/industries/construction-overview.png"
                alt="Construction team reviewing solar plans"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Construction Industry Services</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed specifically for construction companies and developers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Design-Build Solar Integration</h3>
                <p className="text-gray-600 mb-4">
                  We work with your design and construction teams from the early planning stages to integrate solar
                  energy systems that complement the building's architecture and maximize energy production.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Architectural integration planning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Structural analysis and reinforcement</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>System sizing and production modeling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Permitting and utility coordination</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">M.E.P. Systems Design & Installation</h3>
                <p className="text-gray-600 mb-4">
                  Our comprehensive mechanical, electrical, and plumbing services ensure that all building systems work
                  together efficiently, reducing energy consumption and maintenance costs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Energy-efficient HVAC design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Electrical system integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Water-saving plumbing solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Building automation systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Energy Code Compliance</h3>
                <p className="text-gray-600 mb-4">
                  We help you navigate increasingly stringent energy codes and green building standards, ensuring your
                  projects meet or exceed requirements while maintaining cost-effectiveness.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Code analysis and compliance planning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Energy modeling and simulations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>LEED and other certification support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Documentation and verification</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Energy Modeling & Analysis</h3>
                <p className="text-gray-600 mb-4">
                  Our advanced energy modeling services help you optimize building performance, predict energy
                  consumption, and identify cost-effective efficiency measures.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Building energy simulation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>ROI and payback analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Energy conservation measure evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Performance verification</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Project Management</h3>
                <p className="text-gray-600 mb-4">
                  Our experienced project managers work alongside your construction team to ensure energy systems are
                  installed on time, within budget, and to the highest quality standards.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Schedule coordination</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Quality control processes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Subcontractor management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Progress reporting and documentation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Commissioning & Handover</h3>
                <p className="text-gray-600 mb-4">
                  We ensure all energy systems are properly commissioned, tested, and documented before project
                  completion, providing a smooth transition to building operations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>System testing and verification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Owner training and documentation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Warranty management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ongoing support and maintenance plans</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Construction Projects</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              See how we've helped construction companies deliver exceptional energy-efficient buildings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/industries/construction-case-1.png"
                  alt="Residential development with solar panels"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Sunnyvale Residential Development</h3>
                <p className="text-gray-600 mb-4">
                  Partnered with ABC Construction to design and install solar systems for a 50-unit residential
                  development, achieving net-zero energy status and LEED Platinum certification.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="font-semibold">Project Type</p>
                    <p className="text-gray-600">Residential Development</p>
                  </div>
                  <div>
                    <p className="font-semibold">System Size</p>
                    <p className="text-gray-600">350 kW Total</p>
                  </div>
                  <div>
                    <p className="font-semibold">Energy Savings</p>
                    <p className="text-gray-600">100% (Net-Zero)</p>
                  </div>
                  <div>
                    <p className="font-semibold">Certification</p>
                    <p className="text-gray-600">LEED Platinum</p>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href="/projects/sunnyvale-residential">View Full Case Study</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/industries/construction-case-2.png"
                  alt="Commercial office building with integrated solar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Horizon Office Tower</h3>
                <p className="text-gray-600 mb-4">
                  Collaborated with XYZ Developers on a 15-story office building, integrating solar panels into the
                  building facade and implementing comprehensive M.E.P. systems.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="font-semibold">Project Type</p>
                    <p className="text-gray-600">Commercial Office</p>
                  </div>
                  <div>
                    <p className="font-semibold">System Size</p>
                    <p className="text-gray-600">500 kW</p>
                  </div>
                  <div>
                    <p className="font-semibold">Energy Reduction</p>
                    <p className="text-gray-600">45% Below Baseline</p>
                  </div>
                  <div>
                    <p className="font-semibold">Certification</p>
                    <p className="text-gray-600">LEED Gold</p>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href="/projects/horizon-tower">View Full Case Study</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Benefits for Construction Companies</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Partner with Sarxt Energy to enhance your construction projects and deliver more value to your clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Increased Project Value</h3>
              <p className="text-gray-600">
                Energy-efficient buildings with integrated renewable energy systems command premium prices and attract
                environmentally conscious buyers and tenants.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Competitive Advantage</h3>
              <p className="text-gray-600">
                Differentiate your construction company by offering integrated energy solutions that meet increasingly
                stringent building codes and sustainability standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Simplified Process</h3>
              <p className="text-gray-600">
                Our turnkey approach streamlines the integration of energy systems into your construction projects,
                reducing coordination challenges and potential delays.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Incentive Navigation</h3>
              <p className="text-gray-600">
                We help you identify and secure available tax credits, rebates, and incentives that can significantly
                reduce project costs and improve ROI for your clients.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Single Point of Contact</h3>
              <p className="text-gray-600">
                Work with a dedicated project manager who coordinates all energy-related aspects of your construction
                project, simplifying communication and accountability.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                Our rigorous quality control processes ensure that all energy systems are installed correctly and
                perform as designed, reducing callbacks and warranty issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Partnership Process</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              How we work with construction companies to deliver integrated energy solutions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/20"></div>

              {/* Step 1 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-gray-900">Initial Consultation</h3>
                    <p className="text-gray-600 mt-2">
                      We meet with your team to understand your project goals, timeline, and specific requirements for
                      energy systems.
                    </p>
                  </div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-primary rounded-full">
                    <span className="text-sarxt-dark font-bold">1</span>
                  </div>
                  <div className="flex-1 md:pl-8 hidden md:block"></div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 hidden md:block"></div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-primary rounded-full">
                    <span className="text-sarxt-dark font-bold">2</span>
                  </div>
                  <div className="flex-1 md:pl-8 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-gray-900">Design Integration</h3>
                    <p className="text-gray-600 mt-2">
                      Our engineers work with your design team to develop integrated energy solutions that complement
                      the building's architecture and systems.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-gray-900">Detailed Proposal</h3>
                    <p className="text-gray-600 mt-2">
                      We provide a comprehensive proposal including system specifications, timeline, costs, and
                      projected energy performance.
                    </p>
                  </div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-primary rounded-full">
                    <span className="text-sarxt-dark font-bold">3</span>
                  </div>
                  <div className="flex-1 md:pl-8 hidden md:block"></div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 hidden md:block"></div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-primary rounded-full">
                    <span className="text-sarxt-dark font-bold">4</span>
                  </div>
                  <div className="flex-1 md:pl-8 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-gray-900">Coordination & Installation</h3>
                    <p className="text-gray-600 mt-2">
                      Our project managers coordinate with your construction schedule to ensure timely installation with
                      minimal disruption to other trades.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-gray-900">Commissioning & Handover</h3>
                    <p className="text-gray-600 mt-2">
                      We thoroughly test all systems, provide documentation and training, and ensure a smooth transition
                      to building operations.
                    </p>
                  </div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-primary rounded-full">
                    <span className="text-sarxt-dark font-bold">5</span>
                  </div>
                  <div className="flex-1 md:pl-8 hidden md:block"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-sarxt-dark sm:text-4xl">
              Ready to Partner on Your Next Construction Project?
            </h2>
            <p className="mt-4 text-xl text-sarxt-dark/80 max-w-3xl mx-auto">
              Contact us today to discuss how our energy solutions can enhance your construction projects.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-sarxt-dark text-white hover:bg-sarxt-dark/90">
                <Link href="/contact?industry=construction">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
