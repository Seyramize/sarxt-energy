import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function WarehouseLogisticsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] w-full">
        <Image
          src="/industries/warehouse-hero.png"
          alt="Warehouse & Logistics Industry"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Warehouse & Logistics Energy Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
              Optimize operational efficiency and reduce costs with our tailored energy solutions for warehouses and
              distribution centers.
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
              <h2 className="text-3xl font-bold mb-6">Warehouse & Logistics Industry Overview</h2>
              <p className="text-gray-700 mb-4">
                Warehouses and distribution centers face significant energy challenges with large open spaces, high
                ceilings, loading dock areas, and 24/7 operations. Energy costs typically represent 10-15% of operating
                expenses for these facilities, making efficient energy management a critical factor for profitability.
              </p>
              <p className="text-gray-700 mb-4">
                Our comprehensive solutions help warehouse and logistics businesses reduce energy consumption while
                maintaining operational efficiency. From high-bay LED lighting that improves visibility and safety to
                solar installations that offset substantial energy usage, we provide end-to-end services tailored to
                your specific facility needs.
              </p>
              <p className="text-gray-700">
                Sarxt Energy has worked with warehouses, distribution centers, and logistics companies across the
                country to implement sustainable energy solutions that deliver measurable ROI and enhance operational
                capabilities.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/industries/warehouse-overview.png"
                alt="Warehouse & Logistics Industry Overview"
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
          <h2 className="text-3xl font-bold mb-12 text-center">Our Warehouse & Logistics Energy Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/services/commercial-solar.png"
                    alt="Warehouse Solar Solutions"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Warehouse Solar Solutions</h3>
                <p className="text-gray-700 mb-4">
                  Leverage large roof areas for solar installations that significantly reduce energy costs and provide
                  long-term price stability.
                </p>
                <Link href="/services/commercial-solar" className="text-green-600 font-medium hover:underline">
                  Learn more →
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image src="/services/electrical-1.png" alt="High-Bay LED Lighting" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">High-Bay LED Lighting</h3>
                <p className="text-gray-700 mb-4">
                  Upgrade to energy-efficient lighting systems that improve visibility, safety, and productivity while
                  reducing energy costs.
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
                    alt="Warehouse HVAC Solutions"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Warehouse HVAC Solutions</h3>
                <p className="text-gray-700 mb-4">
                  Implement efficient heating, cooling, and ventilation systems designed for large warehouse spaces and
                  loading dock areas.
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
          <h2 className="text-3xl font-bold mb-12 text-center">Warehouse & Logistics Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="h-64 relative">
                  <Image
                    src="/industries/warehouse-case-1.png"
                    alt="Distribution Center Solar Project"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Distribution Center Solar Project</h3>
                  <p className="text-gray-700 mb-4">
                    We installed a 2.5MW solar array for a major distribution center in Texas, reducing their energy
                    costs by 65% and providing stable energy pricing for their 24/7 operations. The system achieved ROI
                    in just 4.2 years and significantly reduced their carbon footprint.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      65% Energy Savings
                    </span>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      4.2 Year ROI
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
                    src="/industries/warehouse-case-2.png"
                    alt="Logistics Company Energy Retrofit"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Logistics Company Energy Retrofit</h3>
                  <p className="text-gray-700 mb-4">
                    We performed a comprehensive energy retrofit for a logistics company with multiple facilities,
                    upgrading lighting, HVAC, and building controls. The project resulted in a 38% reduction in energy
                    consumption while improving worker comfort, safety, and productivity.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      38% Energy Reduction
                    </span>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      Improved Worker Safety
                    </span>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      Enhanced Productivity
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
          <h2 className="text-3xl font-bold mb-12 text-center">Benefits for Warehouse & Logistics Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Reduced Operating Costs</h3>
              <p className="text-gray-700">
                Lower energy bills directly impact your bottom line. Our solutions typically reduce energy costs by
                30-65% for warehouse facilities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Energy Price Stability</h3>
              <p className="text-gray-700">
                Renewable energy solutions provide long-term price stability, protecting against utility rate increases.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Improved Worker Productivity</h3>
              <p className="text-gray-700">
                Better lighting and more comfortable temperatures lead to higher worker productivity and fewer errors.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Enhanced Safety</h3>
              <p className="text-gray-700">
                Proper lighting and climate control reduce workplace accidents and improve overall safety conditions.
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
              <h3 className="text-xl font-bold mb-3">Sustainability Goals</h3>
              <p className="text-gray-700">
                Meet corporate sustainability targets and enhance your brand with customers and stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Warehouse Facility?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to schedule a consultation and learn how our energy solutions can help your warehouse or
            logistics business reduce costs, enhance operational efficiency, and achieve sustainability goals.
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
