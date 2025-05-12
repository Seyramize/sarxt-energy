import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle } from "lucide-react"
import { SolarPlansTable } from "@/components/solar-plans-table"

export default function ResidentialSolarPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-500 to-yellow-600 py-20">
        <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg?key=vc9j4')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Residential Solar Solutions</h1>
            <p className="text-xl text-white mb-8">
              Harness the power of the sun to reduce your energy bills and carbon footprint with our custom residential
              solar solutions.
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
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Power Your Home with Clean Energy</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Sarxt Energy, we specialize in designing and installing high-performance residential solar systems
                tailored to your home's unique energy needs and architectural style.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our residential solar solutions are designed to maximize energy production while enhancing your home's
                appearance. We handle everything from initial assessment to installation and ongoing maintenance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" />
                  <p className="text-gray-700">Custom system design</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" />
                  <p className="text-gray-700">Premium solar panels</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" />
                  <p className="text-gray-700">Battery storage options</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" />
                  <p className="text-gray-700">Smart monitoring</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" />
                  <p className="text-gray-700">25-year warranty</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" />
                  <p className="text-gray-700">Financing options</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/residential-solar.png" alt="Residential Solar Installation" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50" id="benefits">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Benefits of Residential Solar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Significant Savings</h3>
              <p className="text-gray-700">
                Reduce or eliminate your monthly electricity bills. Most homeowners see a 50-90% reduction in their
                energy costs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Energy Independence</h3>
              <p className="text-gray-700">
                Protect yourself from rising utility rates and power outages with your own energy production and
                optional battery storage.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Environmental Impact</h3>
              <p className="text-gray-700">
                Reduce your carbon footprint. The average residential solar system offsets about 100,000 pounds of
                carbon dioxide over its lifetime.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Increased Home Value</h3>
              <p className="text-gray-700">
                Homes with solar panels sell for 4.1% more on average than comparable homes without solar systems.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Tax Incentives</h3>
              <p className="text-gray-700">
                Take advantage of federal tax credits, state incentives, and local rebates that can cover up to 30% of
                your system cost.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Low Maintenance</h3>
              <p className="text-gray-700">
                Solar panels require minimal maintenance and are designed to withstand harsh weather conditions for
                decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white" id="process">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Installation Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-yellow-200"></div>

              {/* Step 1 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-gray-900">Initial Consultation</h3>
                    <p className="text-gray-700 mt-2">
                      We assess your energy needs, roof condition, and sun exposure to determine the optimal solar
                      solution for your home.
                    </p>
                  </div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-yellow-500 rounded-full">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="flex-1 md:pl-8 hidden md:block"></div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 hidden md:block"></div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-yellow-500 rounded-full">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="flex-1 md:pl-8 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-gray-900">Custom Design</h3>
                    <p className="text-gray-700 mt-2">
                      Our engineers create a custom solar system design that maximizes energy production and aesthetic
                      appeal.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-gray-900">Permitting</h3>
                    <p className="text-gray-700 mt-2">
                      We handle all necessary permits and paperwork with local authorities and utility companies.
                    </p>
                  </div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-yellow-500 rounded-full">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="flex-1 md:pl-8 hidden md:block"></div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 hidden md:block"></div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-yellow-500 rounded-full">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="flex-1 md:pl-8 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-gray-900">Professional Installation</h3>
                    <p className="text-gray-700 mt-2">
                      Our certified technicians install your solar system with minimal disruption to your daily life,
                      typically in just 1-2 days.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-gray-900">System Activation</h3>
                    <p className="text-gray-700 mt-2">
                      After final inspection, we activate your system and provide comprehensive training on monitoring
                      and maintenance.
                    </p>
                  </div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-yellow-500 rounded-full">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div className="flex-1 md:pl-8 hidden md:block"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Plans Section */}
      <section className="py-16 bg-white" id="plans">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Solar Service Plans</h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            Choose the perfect solar package for your home. All plans include professional installation and our
            commitment to quality.
          </p>
          <SolarPlansTable />
          <div className="mt-8 text-center">
            <p className="text-gray-600 italic">
              * All plans can be customized to meet your specific needs. Contact us for a personalized quote.
            </p>
            <Button asChild className="mt-6">
              <Link href="/service-plans">View All Service Plans</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50" id="faq">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-lg font-medium">
                  How much does a residential solar system cost?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  The cost of a residential solar system varies based on size, equipment, and installation requirements.
                  On average, systems range from $15,000 to $25,000 before incentives. After federal tax credits and
                  local incentives, most homeowners pay 30-50% less. We offer free consultations to provide an accurate
                  quote for your specific needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-lg font-medium">
                  How long will my solar panels last?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Modern solar panels are designed to last 25-30 years or more. We offer premium panels with 25-year
                  performance warranties that guarantee at least 85% of original output after 25 years. The actual
                  lifespan often exceeds 30 years with minimal degradation in performance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-lg font-medium">
                  What happens during a power outage?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Standard grid-tied solar systems will shut down during a power outage for safety reasons. However, we
                  offer battery storage solutions that allow you to maintain power during outages. These systems
                  automatically disconnect from the grid and power essential appliances using stored solar energy.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-lg font-medium">
                  Do solar panels work in cloudy or cold weather?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Yes, solar panels generate electricity even on cloudy days, though at reduced efficiency (typically
                  10-25% of their normal output). They actually perform better in cold weather than hot weather, as
                  solar panel efficiency improves in cooler temperatures. Our system designs account for local weather
                  patterns to ensure optimal annual production.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-lg font-medium">
                  What financing options are available?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  We offer multiple financing options including solar loans, leases, and power purchase agreements
                  (PPAs). Solar loans allow you to own the system with little or no money down and monthly payments
                  often lower than your current electric bill. Leases and PPAs require no upfront cost, but you pay a
                  monthly fee for the power generated. Our financial advisors can help determine the best option for
                  your situation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left text-lg font-medium">
                  How do I maintain my solar panels?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Solar panels require minimal maintenance. Rain naturally cleans the panels in most areas. In drier
                  regions or during pollen season, occasional cleaning with water may be beneficial. We recommend an
                  annual inspection to ensure optimal performance. Our monitoring system alerts you to any performance
                  issues, and our maintenance plans provide peace of mind with regular professional check-ups.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Power Your Home with Solar?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and custom quote. Start your journey to energy independence and
            savings.
          </p>
          <Button asChild size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
            <Link href="/quote">Get Your Quote</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
