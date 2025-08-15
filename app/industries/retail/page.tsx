import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function RetailPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] w-full">
        <Image src="/industries/retail-hero.png" alt="Retail Industry" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Retail Energy Solutions</h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
              Create comfortable shopping environments while reducing operational costs with our tailored energy
              solutions for retail spaces.
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
              <h2 className="text-3xl font-bold mb-6">Retail Industry Overview</h2>
              <p className="text-gray-700 mb-4">
                Retail businesses face unique energy challenges with extended operating hours, customer comfort
                requirements, and the need to create inviting shopping environments. Energy costs typically represent
                4-8% of operating expenses for retail spaces, making efficient energy management a significant
                opportunity for improving profitability.
              </p>
              <p className="text-gray-700 mb-4">
                Our comprehensive solutions help retail businesses reduce energy consumption while enhancing the
                shopping experience. From lighting that showcases merchandise beautifully while using less energy to
                HVAC systems that maintain perfect comfort efficiently, we provide end-to-end services tailored to your
                specific retail needs.
              </p>
              <p className="text-gray-700">
                Sarxt Energy has worked with retailers of all sizes—from small boutiques to large shopping centers—to
                implement sustainable energy solutions that deliver measurable ROI and enhance brand reputation.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/industries/retail-overview.png"
                alt="Retail Industry Overview"
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
          <h2 className="text-3xl font-bold mb-12 text-center">Our Retail Energy Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/services/commercial-solar.png"
                    alt="Retail Solar Solutions"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Retail Solar Solutions</h3>
                <p className="text-gray-700 mb-4">
                  Reduce energy costs and showcase your commitment to sustainability with custom solar installations for
                  retail buildings and shopping centers.
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
                    src="/services/commercial-hvac.png"
                    alt="Retail HVAC Solutions"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Retail HVAC Solutions</h3>
                <p className="text-gray-700 mb-4">
                  Maintain perfect comfort for shoppers while reducing energy consumption with smart HVAC systems
                  designed for retail environments.
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
                    src="/services/electrical-1.png"
                    alt="Energy-Efficient Lighting"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Energy-Efficient Lighting</h3>
                <p className="text-gray-700 mb-4">
                  Implement lighting solutions that enhance product displays while reducing energy consumption and
                  maintenance costs.
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
          <h2 className="text-3xl font-bold mb-12 text-center">Retail Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="h-64 relative">
                  <Image
                    src="/industries/retail-case-1.png"
                    alt="Shopping Center Solar Installation"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Shopping Center Solar Installation</h3>
                  <p className="text-gray-700 mb-4">
                    We installed a 750kW solar array for a shopping center in Arizona, reducing their energy costs by
                    40% and providing covered parking for customers. The system pays for itself in just 4 years and has
                    become a marketing feature for the property.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      40% Energy Savings
                    </span>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      4 Year ROI
                    </span>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      Enhanced Customer Experience
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="h-64 relative">
                  <Image
                    src="/industries/retail-case-2.png"
                    alt="Retail Chain Energy Retrofit"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Retail Chain Energy Retrofit</h3>
                  <p className="text-gray-700 mb-4">
                    We performed comprehensive energy retrofits for a chain of 20 retail stores, upgrading lighting,
                    HVAC, and building controls. The project resulted in a 32% reduction in energy consumption while
                    improving the shopping environment and merchandise visibility.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      32% Energy Reduction
                    </span>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      Improved Shopping Experience
                    </span>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      Better Merchandise Display
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
          <h2 className="text-3xl font-bold mb-12 text-center">Benefits for Retail Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Reduced Operating Costs</h3>
              <p className="text-gray-700">
                Lower energy bills mean higher profit margins. Our solutions typically reduce energy costs by 25-40% for
                retail businesses.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Enhanced Shopping Experience</h3>
              <p className="text-gray-700">
                Better lighting, comfortable temperatures, and improved air quality create a more pleasant environment
                for shoppers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Sustainability Marketing</h3>
              <p className="text-gray-700">
                Showcase your commitment to sustainability, attracting eco-conscious consumers and enhancing your brand
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
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Retail Space?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to schedule a consultation and learn how our energy solutions can help your retail business
            reduce costs, enhance the shopping experience, and achieve sustainability goals.
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
