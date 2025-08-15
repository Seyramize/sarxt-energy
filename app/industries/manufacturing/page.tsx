import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ManufacturingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] w-full">
        <Image
          src="/industries/manufacturing-hero.png"
          alt="Manufacturing Industry"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Manufacturing Energy Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
              Optimize production efficiency and reduce operational costs with our comprehensive energy solutions for
              manufacturing facilities.
            </p>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/quote">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Manufacturing Industry Overview</h2>
              <p className="text-gray-700 mb-4">
                Manufacturing facilities are energy-intensive operations where electricity and thermal energy costs
                significantly impact the bottom line. Energy typically represents 10-20% of operating expenses in
                manufacturing, making it a critical area for optimization.
              </p>
              <p className="text-gray-700 mb-4">
                Our solutions help manufacturing businesses reduce energy consumption, optimize production processes,
                and implement renewable energy systems that provide long-term cost stability. From high-efficiency HVAC
                and lighting to solar installations and energy management systems, we provide comprehensive services
                tailored to your specific manufacturing needs.
              </p>
              <p className="text-gray-700">
                Sarxt Energy has worked with manufacturers across various sectors including automotive, electronics,
                food processing, pharmaceuticals, and more to implement energy solutions that enhance competitiveness
                and sustainability.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/industries/manufacturing-overview.png"
                alt="Manufacturing Industry Overview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Manufacturing Energy Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/services/commercial-solar.png"
                    alt="Industrial Solar Solutions"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Industrial Solar Solutions</h3>
                <p className="text-gray-700 mb-4">
                  Reduce energy costs and enhance sustainability with custom solar installations designed for
                  manufacturing facilities and industrial buildings.
                </p>
                <Link href="/services/commercial-solar" className="text-green-600 font-medium hover:underline">
                  Learn more →
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/services/commercial-electrical.png"
                    alt="Energy Management Systems"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Energy Management Systems</h3>
                <p className="text-gray-700 mb-4">
                  Implement advanced monitoring and control systems to optimize energy use across your manufacturing
                  processes and facility.
                </p>
                <Link href="/services/electrical" className="text-green-600 font-medium hover:underline">
                  Learn more →
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/services/commercial-hvac.png"
                    alt="Industrial HVAC Solutions"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Industrial HVAC Solutions</h3>
                <p className="text-gray-700 mb-4">
                  Optimize heating, cooling, and ventilation systems for manufacturing environments to improve
                  efficiency and worker comfort.
                </p>
                <Link href="/services/mechanical" className="text-green-600 font-medium hover:underline">
                  Learn more →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Manufacturing Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="h-64 relative">
                  <Image
                    src="/industries/manufacturing-case-1.png"
                    alt="Automotive Parts Manufacturer"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Automotive Parts Manufacturer</h3>
                  <p className="text-gray-700 mb-4">
                    We implemented a 1.2MW solar array and comprehensive energy management system for an automotive
                    parts manufacturer, reducing their energy costs by 42% and providing stable energy pricing for their
                    24/7 operations. The project achieved ROI in just 3.8 years.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      42% Energy Savings
                    </span>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      3.8 Year ROI
                    </span>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      24/7 Operations Support
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="h-64 relative">
                  <Image
                    src="/industries/manufacturing-case-2.png"
                    alt="Food Processing Facility"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Food Processing Facility</h3>
                  <p className="text-gray-700 mb-4">
                    We upgraded the HVAC, refrigeration, and electrical systems for a food processing facility,
                    resulting in a 35% reduction in energy consumption. The improvements also enhanced product quality
                    by providing more consistent temperature and humidity control.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      35% Energy Reduction
                    </span>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      Improved Product Quality
                    </span>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      Enhanced Compliance
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Benefits for Manufacturing Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Reduced Production Costs</h3>
              <p className="text-gray-700">
                Lower energy expenses directly impact your cost of goods sold, enhancing competitiveness in the market.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Energy Price Stability</h3>
              <p className="text-gray-700">
                Renewable energy solutions provide long-term price stability, protecting against utility rate increases.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Enhanced Reliability</h3>
              <p className="text-gray-700">
                Modern energy systems reduce downtime and provide more consistent power for sensitive manufacturing
                processes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Sustainability Goals</h3>
              <p className="text-gray-700">
                Meet corporate sustainability targets and enhance your brand with customers and stakeholders.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Tax Incentives</h3>
              <p className="text-gray-700">
                Take advantage of substantial tax credits, accelerated depreciation, and other incentives for energy
                installations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Improved Working Conditions</h3>
              <p className="text-gray-700">
                Better lighting, air quality, and temperature control enhance worker comfort, safety, and productivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Manufacturing Facility?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to schedule a consultation and learn how our energy solutions can help your manufacturing
            business reduce costs, enhance production efficiency, and achieve sustainability goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-green-600"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="/quote">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
