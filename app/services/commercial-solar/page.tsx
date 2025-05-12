import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Building2, TrendingUp, Lightbulb, BarChart4, Shield, Clock } from "lucide-react"

// First, import the CommercialSolarPlansTable component
import { CommercialSolarPlansTable } from "@/components/commercial-solar-plans-table"

export default function CommercialSolarPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-500 to-yellow-600 py-20">
        <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg?key=w1lwy')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Commercial Solar Solutions</h1>
            <p className="text-xl text-white mb-8">
              Reduce operating costs and achieve sustainability goals with our custom commercial solar power systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
                <Link href="/quote">Get a Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent text-white border-white hover:bg-white/10"
              >
                <Link href="#benefits">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white" id="overview">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Powerful Solutions for Businesses</h2>
              <p className="text-lg text-gray-700 mb-6">
                Sarxt Energy delivers comprehensive commercial solar solutions designed to maximize your return on
                investment while minimizing your environmental impact. Our commercial systems are engineered for
                reliability, performance, and longevity.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                From initial site assessment to system design, permitting, installation, and ongoing maintenance, our
                team of experts handles every aspect of your commercial solar project with precision and care.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" />
                  <p className="text-gray-700">Turnkey solutions</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" />
                  <p className="text-gray-700">Custom system design</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" />
                  <p className="text-gray-700">Financing options</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" />
                  <p className="text-gray-700">Advanced monitoring</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" />
                  <p className="text-gray-700">25-year warranty</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" />
                  <p className="text-gray-700">Ongoing maintenance</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/commercial-solar.png" alt="Commercial Solar Installation" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Commercial Solar Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Building2 className="h-12 w-12 text-yellow-500 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-gray-900">Rooftop Solar Systems</h3>
              <p className="text-gray-700">
                Maximize unused roof space with custom-designed solar arrays that work with your existing roof
                structure. Our rooftop systems are engineered for minimal structural impact and maximum energy
                production.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <TrendingUp className="h-12 w-12 text-yellow-500 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-gray-900">Carport Solar Structures</h3>
              <p className="text-gray-700">
                Transform your parking areas into power-generating assets with solar carports. These dual-purpose
                structures provide shade for vehicles while producing clean energy for your business.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Lightbulb className="h-12 w-12 text-yellow-500 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-gray-900">Ground-Mounted Systems</h3>
              <p className="text-gray-700">
                Utilize available land with ground-mounted solar arrays. These systems offer flexibility in design and
                orientation to maximize energy production regardless of building constraints.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <BarChart4 className="h-12 w-12 text-yellow-500 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-gray-900">Energy Storage Solutions</h3>
              <p className="text-gray-700">
                Enhance your solar investment with battery storage systems that allow you to store excess energy for use
                during peak demand periods or power outages, further reducing utility costs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Shield className="h-12 w-12 text-yellow-500 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-gray-900">Microgrid Systems</h3>
              <p className="text-gray-700">
                Achieve energy independence with comprehensive microgrid solutions that combine solar, storage, and
                intelligent energy management for resilience and cost control.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Clock className="h-12 w-12 text-yellow-500 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-gray-900">Monitoring & Maintenance</h3>
              <p className="text-gray-700">
                Keep your system performing optimally with our advanced monitoring and maintenance services. We
                proactively identify and address issues before they impact your energy production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white" id="benefits">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Benefits for Your Business</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Financial Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900">Reduced Operating Costs</p>
                    <p className="text-gray-700">
                      Lower your electricity bills by 50-90%, freeing up capital for other business investments.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900">Protection from Rate Increases</p>
                    <p className="text-gray-700">
                      Shield your business from utility rate hikes by generating your own power.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900">Tax Incentives</p>
                    <p className="text-gray-700">
                      Take advantage of federal tax credits, accelerated depreciation, and local incentives.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900">Increased Property Value</p>
                    <p className="text-gray-700">
                      Enhance your property's value and marketability with clean energy infrastructure.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Strategic Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900">Sustainability Leadership</p>
                    <p className="text-gray-700">
                      Demonstrate your commitment to environmental responsibility and attract eco-conscious customers.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900">Energy Independence</p>
                    <p className="text-gray-700">
                      Reduce reliance on the grid and maintain operations during power outages with battery storage.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900">Marketing Advantage</p>
                    <p className="text-gray-700">
                      Leverage your green initiatives in marketing to differentiate your business from competitors.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900">Corporate Responsibility</p>
                    <p className="text-gray-700">
                      Meet sustainability goals and reduce your carbon footprint to align with ESG initiatives.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Plans Section */}
      <section className="py-16 bg-gray-50" id="plans">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Commercial Solar Plans</h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            Choose the perfect solar solution for your business. All plans include professional installation and our
            commitment to quality.
          </p>
          <CommercialSolarPlansTable />
          <div className="mt-8 text-center">
            <p className="text-gray-600 italic">
              * All plans can be customized to meet your specific business needs. Contact us for a personalized quote.
            </p>
            <Button asChild className="mt-6">
              <Link href="/service-plans">View All Service Plans</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/projects/commercial-1.jpg"
                  alt="Office Building Solar Installation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Skyline Office Complex</h3>
                <p className="text-gray-700 mb-4">
                  100kW rooftop system providing 70% of the building's energy needs, resulting in $35,000 annual
                  savings.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/projects/2">View Case Study</Link>
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/projects/commercial-2.png"
                  alt="Shopping Mall Solar Carports"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Westside Mall</h3>
                <p className="text-gray-700 mb-4">
                  75kW solar carport installation with EV charging stations, reducing mall energy costs by 40%.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/projects/5">View Case Study</Link>
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/projects/commercial-3.png"
                  alt="Hotel Rooftop Solar Installation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Oceanview Resort</h3>
                <p className="text-gray-700 mb-4">
                  120kW system with aesthetic design considerations, achieving 55% reduction in energy costs.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/projects/8">View Case Study</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white" id="faq">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-lg font-medium">
                  What is the ROI for commercial solar systems?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Most commercial solar systems achieve ROI in 3-7 years, depending on energy usage, local utility
                  rates, available incentives, and system size. After payback, your business will enjoy decades of
                  reduced energy costs. We provide detailed financial analysis with every proposal, including projected
                  cash flow, payback period, and IRR calculations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-lg font-medium">
                  Will installing solar panels disrupt my business operations?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  We design our installation process to minimize disruption to your business. Most of the work occurs on
                  your roof or in other non-operational areas. Electrical connections typically require only brief
                  planned outages that can be scheduled during off-hours. Our project managers coordinate closely with
                  your team to ensure minimal impact on your operations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-lg font-medium">
                  What financing options are available for commercial solar?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  We offer several financing options including cash purchase, solar loans, operating leases, capital
                  leases, and Power Purchase Agreements (PPAs). Each option has different benefits regarding ownership,
                  tax advantages, and cash flow impacts. Our financial team can help you determine which option best
                  aligns with your business goals and financial strategy.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-lg font-medium">
                  How do commercial solar systems affect my roof warranty?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Our installation methods are designed to maintain your existing roof warranty. We work directly with
                  roofing manufacturers and can provide documentation to ensure your warranty remains intact. For older
                  roofs, we can coordinate with roofing contractors if repairs or replacements are needed before
                  installation. We also offer additional weatherproofing warranties for roof penetrations related to the
                  solar installation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-lg font-medium">
                  What maintenance is required for commercial solar systems?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Commercial solar systems require minimal maintenance. Our maintenance packages include annual
                  inspections, performance monitoring, panel cleaning as needed, and inverter maintenance. Our
                  monitoring system continuously tracks performance and alerts our team to any issues, often before they
                  affect energy production. Most components carry manufacturer warranties of 10-25 years, and we offer
                  extended service plans for complete peace of mind.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left text-lg font-medium">
                  Can my business still operate during a power outage with solar?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Standard grid-tied solar systems will shut down during a power outage for safety reasons. However, we
                  offer battery storage and microgrid solutions that can provide backup power during outages. These
                  systems can be designed to power critical loads or entire facilities depending on your needs and
                  budget. We can help you assess your resilience requirements and design an appropriate backup solution.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Business with Solar?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Contact us today for a comprehensive consultation and custom proposal tailored to your business needs.
          </p>
          <Button asChild size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
            <Link href="/quote">Get Your Quote</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
