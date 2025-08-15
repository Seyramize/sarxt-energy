import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HospitalityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] w-full">
        <Image
          src="/industries/hospitality-hero.png"
          alt="Hospitality Industry"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Hospitality Energy Solutions</h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
              Enhance guest experience while reducing operational costs with our tailored energy solutions for hotels,
              resorts, and restaurants.
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
              <h2 className="text-3xl font-bold mb-6">Hospitality Industry Overview</h2>
              <p className="text-gray-700 mb-4">
                The hospitality industry faces unique energy challenges with 24/7 operations and high guest expectations
                for comfort. Energy costs typically represent 3-6% of operating expenses for hotels and resorts, making
                efficient energy management a critical factor for profitability.
              </p>
              <p className="text-gray-700 mb-4">
                Our comprehensive solutions help hospitality businesses reduce energy consumption while maintaining or
                enhancing guest comfort and experience. From solar installations that showcase your commitment to
                sustainability to smart HVAC systems that optimize comfort and efficiency, we provide end-to-end
                services tailored to your specific needs.
              </p>
              <p className="text-gray-700">
                Sarxt Energy has worked with hotels, resorts, restaurants, and entertainment venues across the country
                to implement sustainable energy solutions that deliver measurable ROI and enhance brand reputation.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/industries/hospitality-overview.png"
                alt="Hospitality Industry Overview"
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
          <h2 className="text-3xl font-bold mb-12 text-center">Our Hospitality Energy Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/services/commercial-solar.png"
                    alt="Solar Energy Solutions"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Solar Energy Solutions</h3>
                <p className="text-gray-700 mb-4">
                  Reduce energy costs and showcase your commitment to sustainability with custom solar installations for
                  hotels, resorts, and restaurants.
                </p>
                <Link href="/services/commercial-solar" className="text-green-600 font-medium hover:underline">
                  Learn more →
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image src="/services/commercial-hvac.png" alt="HVAC Optimization" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">HVAC Optimization</h3>
                <p className="text-gray-700 mb-4">
                  Maintain perfect comfort for guests while reducing energy consumption with smart HVAC systems and
                  regular maintenance.
                </p>
                <Link href="/services/mechanical" className="text-green-600 font-medium hover:underline">
                  Learn more →
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/services/smart-thermostat.png"
                    alt="Smart Building Controls"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Smart Building Controls</h3>
                <p className="text-gray-700 mb-4">
                  Implement intelligent building management systems that optimize energy use based on occupancy and
                  usage patterns.
                </p>
                <Link href="/services/electrical" className="text-green-600 font-medium hover:underline">
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
          <h2 className="text-3xl font-bold mb-12 text-center">Hospitality Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="h-64 relative">
                  <Image
                    src="/industries/hospitality-case-1.png"
                    alt="Luxury Resort Solar Installation"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Luxury Resort Solar Installation</h3>
                  <p className="text-gray-700 mb-4">
                    We installed a 500kW solar array for a luxury resort in California, reducing their energy costs by
                    35% and enhancing their sustainability credentials. The system pays for itself in just 4.5 years and
                    provides clean energy for guest rooms, restaurants, and common areas.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      35% Energy Savings
                    </span>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      4.5 Year ROI
                    </span>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      Carbon Reduction
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="h-64 relative">
                  <Image
                    src="/industries/hospitality-case-2.png"
                    alt="Hotel Chain HVAC Modernization"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Hotel Chain HVAC Modernization</h3>
                  <p className="text-gray-700 mb-4">
                    We upgraded the HVAC systems across a chain of 12 hotels, implementing smart controls and
                    energy-efficient equipment. The project resulted in a 28% reduction in energy consumption while
                    improving guest comfort and reducing maintenance costs.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      28% Energy Reduction
                    </span>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      Improved Guest Comfort
                    </span>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      Lower Maintenance Costs
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
          <h2 className="text-3xl font-bold mb-12 text-center">Benefits for Hospitality Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Reduced Operating Costs</h3>
              <p className="text-gray-700">
                Lower energy bills mean higher profit margins. Our solutions typically reduce energy costs by 20-40% for
                hospitality businesses.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Enhanced Guest Experience</h3>
              <p className="text-gray-700">
                Modern, efficient systems provide better comfort, air quality, and reliability, leading to improved
                guest satisfaction.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Sustainability Marketing</h3>
              <p className="text-gray-700">
                Showcase your commitment to sustainability, attracting eco-conscious travelers and enhancing your brand
                reputation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Regulatory Compliance</h3>
              <p className="text-gray-700">
                Stay ahead of energy regulations and building codes with future-proof systems and infrastructure.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Tax Incentives</h3>
              <p className="text-gray-700">
                Take advantage of federal, state, and local tax incentives and rebates for energy efficiency and
                renewable energy installations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Reduced Maintenance</h3>
              <p className="text-gray-700">
                Modern systems require less maintenance and have longer lifespans, reducing long-term operational costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Hospitality Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to schedule a consultation and learn how our energy solutions can help your hospitality
            business reduce costs, enhance guest experience, and achieve sustainability goals.
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
