import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Building2, Zap, BarChart, Clock, Shield, Home } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function RealEstateIndustryPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative h-[400px] w-full">
          <Image
            src="/industries/real-estate-hero.png"
            alt="Modern building with solar panels"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Real Estate Industry Solutions
              </h1>
              <p className="mt-6 text-xl text-white">
                Enhance property value and attract premium tenants with our comprehensive energy solutions.
              </p>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/contact?industry=real-estate">Request a Consultation</Link>
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
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Elevate Your Real Estate Portfolio</h2>
              <p className="mt-4 text-lg text-gray-600">
                Sarxt Energy partners with real estate developers, property managers, and investment firms to enhance
                property value, reduce operating costs, and meet sustainability goals. Our comprehensive energy
                solutions help you attract and retain tenants while maximizing returns on your real estate investments.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Whether you're developing new properties or upgrading existing buildings, our team provides tailored
                solutions that address the unique energy challenges and opportunities in the real estate sector.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Property energy audits</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Solar installations</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Building systems modernization</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Energy management systems</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Certification support</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">ROI and financial analysis</p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/industries/real-estate-overview.png"
                alt="Modern apartment building with solar panels"
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Real Estate Services</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed specifically for real estate companies and property managers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Property Energy Audits</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive assessments of your properties to identify energy efficiency opportunities, prioritize
                  improvements, and maximize ROI.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Detailed energy consumption analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Building envelope assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>HVAC and electrical system evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Prioritized improvement recommendations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Solar Energy Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Custom solar installations for multi-unit residential properties, office buildings, retail centers,
                  and other commercial real estate.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Rooftop and carport solar installations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Building-integrated photovoltaics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Battery storage systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Solar PPA and financing options</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Building Systems Modernization</h3>
                <p className="text-gray-600 mb-4">
                  Upgrade existing building systems to improve energy efficiency, reduce maintenance costs, and enhance
                  tenant comfort.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>HVAC system upgrades</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Lighting retrofits and controls</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Building envelope improvements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Water efficiency upgrades</span>
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
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Energy Management Systems</h3>
                <p className="text-gray-600 mb-4">
                  Implement smart building technologies to monitor, control, and optimize energy usage across your
                  property portfolio.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Building automation systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Energy monitoring and analytics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Demand response capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Remote system management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Certification Support</h3>
                <p className="text-gray-600 mb-4">
                  Assistance with achieving and maintaining green building certifications that enhance property value
                  and marketability.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>LEED certification support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>ENERGY STAR certification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>WELL Building Standard</span>
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
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Ongoing Support & Maintenance</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive maintenance programs to ensure your energy systems continue to perform optimally
                  throughout their lifecycle.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Preventative maintenance plans</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Performance monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Emergency service response</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>System optimization and upgrades</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Property Types Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Solutions for All Property Types</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We provide tailored energy solutions for every segment of the real estate market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/industries/multifamily.png"
                  alt="Multifamily residential building"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">Multifamily Residential</h3>
                <p className="mt-2 text-sm text-gray-200">
                  Energy solutions for apartment buildings, condominiums, and other multi-unit residential properties.
                </p>
                <ul className="mt-3 space-y-1">
                  <li className="text-white/90 text-sm">• Common area energy optimization</li>
                  <li className="text-white/90 text-sm">• Common area energy optimization</li>
                  <li className="text-white/90 text-sm">• Individual unit efficiency upgrades</li>
                  <li className="text-white/90 text-sm">• Solar PV for reduced common charges</li>
                </ul>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/industries/office-building.png"
                  alt="Modern office building"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">Commercial Office</h3>
                <p className="mt-2 text-sm text-gray-200">
                  Energy-efficient solutions for office buildings that reduce operating costs and enhance tenant
                  comfort.
                </p>
                <ul className="mt-3 space-y-1">
                  <li className="text-white/90 text-sm">• Building automation systems</li>
                  <li className="text-white/90 text-sm">• Lighting and HVAC optimization</li>
                  <li className="text-white/90 text-sm">• Tenant submetering solutions</li>
                </ul>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/industries/retail-property.png"
                  alt="Retail shopping center"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">Retail Properties</h3>
                <p className="mt-2 text-sm text-gray-200">
                  Energy solutions for shopping centers, malls, and standalone retail locations.
                </p>
                <ul className="mt-3 space-y-1">
                  <li className="text-white/90 text-sm">• Energy-efficient lighting systems</li>
                  <li className="text-white/90 text-sm">• Solar carports with EV charging</li>
                  <li className="text-white/90 text-sm">• Refrigeration system optimization</li>
                </ul>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/industries/industrial-property.png"
                  alt="Industrial warehouse facility"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">Industrial & Warehouse</h3>
                <p className="mt-2 text-sm text-gray-200">
                  Energy solutions for industrial facilities, warehouses, and distribution centers.
                </p>
                <ul className="mt-3 space-y-1">
                  <li className="text-white/90 text-sm">• Large-scale rooftop solar</li>
                  <li className="text-white/90 text-sm">• High-bay LED lighting</li>
                  <li className="text-white/90 text-sm">• Energy-efficient HVAC for large spaces</li>
                </ul>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/industries/hospitality-property.png"
                  alt="Hotel building"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">Hospitality</h3>
                <p className="mt-2 text-sm text-gray-200">
                  Energy solutions for hotels, resorts, and other hospitality properties.
                </p>
                <ul className="mt-3 space-y-1">
                  <li className="text-white/90 text-sm">• Guest room energy management</li>
                  <li className="text-white/90 text-sm">• Pool heating and water efficiency</li>
                  <li className="text-white/90 text-sm">• Kitchen and laundry optimization</li>
                </ul>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/industries/mixed-use-property.png"
                  alt="Mixed-use development"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">Mixed-Use Developments</h3>
                <p className="mt-2 text-sm text-gray-200">
                  Integrated energy solutions for properties combining residential, commercial, and retail spaces.
                </p>
                <ul className="mt-3 space-y-1">
                  <li className="text-white/90 text-sm">• Shared energy systems</li>
                  <li className="text-white/90 text-sm">• Microgrid solutions</li>
                  <li className="text-white/90 text-sm">• Comprehensive energy management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Real Estate Projects</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              See how we've helped real estate companies enhance property value and reduce operating costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/industries/real-estate-case-1.png"
                  alt="Luxury apartment complex with solar panels"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Parkview Residences</h3>
                <p className="text-gray-600 mb-4">
                  Partnered with Meridian Properties to retrofit a 200-unit luxury apartment complex with rooftop solar,
                  energy-efficient HVAC, and smart building controls.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="font-semibold">Property Type</p>
                    <p className="text-gray-600">Multifamily Residential</p>
                  </div>
                  <div>
                    <p className="font-semibold">Energy Reduction</p>
                    <p className="text-gray-600">35% Year-Over-Year</p>
                  </div>
                  <div>
                    <p className="font-semibold">ROI Period</p>
                    <p className="text-gray-600">4.5 Years</p>
                  </div>
                  <div>
                    <p className="font-semibold">Property Value Increase</p>
                    <p className="text-gray-600">12%</p>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href="/projects/parkview-residences">View Full Case Study</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/industries/real-estate-case-2.png"
                  alt="Office building with solar facade"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Commerce Tower</h3>
                <p className="text-gray-600 mb-4">
                  Worked with Global Real Estate Trust to transform an aging office building into a high-performance
                  property with integrated solar, modernized MEP systems, and LEED Gold certification.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="font-semibold">Property Type</p>
                    <p className="text-gray-600">Commercial Office</p>
                  </div>
                  <div>
                    <p className="font-semibold">Energy Reduction</p>
                    <p className="text-gray-600">42% Year-Over-Year</p>
                  </div>
                  <div>
                    <p className="font-semibold">Occupancy Increase</p>
                    <p className="text-gray-600">From 68% to 94%</p>
                  </div>
                  <div>
                    <p className="font-semibold">Certification</p>
                    <p className="text-gray-600">LEED Gold</p>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href="/projects/commerce-tower">View Full Case Study</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Benefits for Real Estate Companies</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Partner with Sarxt Energy to enhance your real estate portfolio and maximize returns.
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
              <h3 className="text-xl font-bold mb-3">Increased Property Value</h3>
              <p className="text-gray-600">
                Energy-efficient buildings with renewable energy systems command premium prices and higher
                capitalization rates in the real estate market.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Reduced Operating Costs</h3>
              <p className="text-gray-600">
                Lower energy expenses translate to improved net operating income (NOI) and higher profitability for
                property owners and managers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Tenant Attraction & Retention</h3>
              <p className="text-gray-600">
                Environmentally conscious tenants increasingly seek energy-efficient spaces, leading to higher occupancy
                rates and longer lease terms.
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
              <h3 className="text-xl font-bold mb-3">Competitive Differentiation</h3>
              <p className="text-gray-600">
                Stand out in the market with properties that offer superior comfort, lower utility costs, and
                sustainable features that appeal to modern tenants.
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
              <h3 className="text-xl font-bold mb-3">Regulatory Compliance</h3>
              <p className="text-gray-600">
                Stay ahead of increasingly stringent energy codes and building performance standards with proactive
                energy upgrades and improvements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">ESG Goal Achievement</h3>
              <p className="text-gray-600">
                Meet environmental, social, and governance (ESG) targets with measurable improvements in energy
                efficiency and carbon footprint reduction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-sarxt-dark sm:text-4xl">
              Ready to Enhance Your Real Estate Portfolio?
            </h2>
            <p className="mt-4 text-xl text-sarxt-dark/80 max-w-3xl mx-auto">
              Contact us today to discuss how our energy solutions can increase property value and reduce operating
              costs.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-sarxt-dark text-white hover:bg-sarxt-dark/90">
                <Link href="/contact?industry=real-estate">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
