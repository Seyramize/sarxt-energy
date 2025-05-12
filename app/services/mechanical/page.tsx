import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Fan, Thermometer, Clock, Wrench, Zap } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// First, import the HVACPlansTable component
import { HVACPlansTable } from "@/components/hvac-plans-table"

export default function MechanicalServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative h-[400px] w-full">
          <Image
            src="/services/mechanical-hero.jpg"
            alt="Advanced HVAC system installation"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Mechanical Services</h1>
              <p className="mt-6 text-xl text-white">
                Comprehensive HVAC solutions for optimal comfort, efficiency, and air quality in residential and
                commercial properties.
              </p>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/quote?service=mechanical">Request Service</Link>
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Expert HVAC Solutions for Every Need</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                At Sarxt Energy, our mechanical services division specializes in designing, installing, and maintaining
                HVAC systems that deliver optimal comfort, energy efficiency, and air quality. Our team of certified
                technicians handles projects of all sizes, from residential installations to complex commercial systems.
              </p>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                We understand that HVAC systems represent a significant investment and play a critical role in your
                property's comfort and energy consumption. That's why we approach every project with meticulous
                attention to detail, ensuring systems are properly sized, energy-efficient, and built to last.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-sarxt-dark">
                      <Thermometer className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Comfort Optimization</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">Perfect temperature and humidity control</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-sarxt-dark">
                      <Zap className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Energy Efficiency</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">Reduced utility bills and carbon footprint</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-sarxt-dark">
                      <Fan className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Air Quality</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">
                      Advanced filtration for healthier indoor environments
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-sarxt-dark">
                      <Clock className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">System Longevity</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">Quality installations and maintenance plans</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/services/mechanical-1.jpg"
                alt="HVAC technician installing a system"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Mechanical Services</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive HVAC solutions for residential and commercial properties.
            </p>
          </div>

          <Tabs defaultValue="installations" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="installations">Installations</TabsTrigger>
                <TabsTrigger value="maintenance">Maintenance & Repair</TabsTrigger>
                <TabsTrigger value="upgrades">System Upgrades</TabsTrigger>
                <TabsTrigger value="commercial">Commercial Solutions</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="installations" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/services/hvac-installation.jpg"
                    alt="HVAC system installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">New HVAC Installations</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Our installation services include comprehensive system design, professional installation, and
                    thorough testing to ensure optimal performance from day one. We work with leading manufacturers to
                    provide reliable, energy-efficient systems tailored to your specific needs.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Heating systems (furnaces, heat pumps, boilers)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Cooling systems (central air, heat pumps, ductless mini-splits)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Ventilation systems and air handlers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Ductwork design and installation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Smart thermostats and controls</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Indoor air quality solutions</span>
                    </li>
                  </ul>
                  <Button asChild className="mt-8">
                    <Link href="/quote?service=mechanical-installation">Schedule a Consultation</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="maintenance" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4">Maintenance & Repair Services</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Regular maintenance is essential for optimal HVAC performance and longevity. Our comprehensive
                    maintenance programs and prompt repair services keep your systems running efficiently and prevent
                    costly breakdowns.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Seasonal tune-ups and inspections</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Preventative maintenance plans</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Emergency repair services</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Filter replacement and system cleaning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Refrigerant leak detection and repair</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Ductwork inspection and sealing</span>
                    </li>
                  </ul>
                  <Button asChild className="mt-8">
                    <Link href="/quote?service=mechanical-maintenance">Schedule Service</Link>
                  </Button>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
                  <Image
                    src="/services/hvac-maintenance.jpg"
                    alt="HVAC system maintenance"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="upgrades" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image src="/services/hvac-upgrade.jpg" alt="HVAC system upgrade" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">System Upgrades & Retrofits</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Enhance your existing HVAC system with upgrades that improve efficiency, comfort, and functionality.
                    Our retrofit solutions can significantly reduce energy consumption while extending the life of your
                    system.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>High-efficiency equipment replacements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Zoning system installations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Smart thermostat integration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Duct system improvements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Air quality enhancement solutions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Energy recovery ventilators</span>
                    </li>
                  </ul>
                  <Button asChild className="mt-8">
                    <Link href="/quote?service=mechanical-upgrades">Discuss Upgrade Options</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="commercial" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4">Commercial HVAC Solutions</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Our commercial HVAC services address the unique needs of businesses, from retail spaces to large
                    office buildings and industrial facilities. We focus on energy efficiency, reliability, and
                    minimizing disruption to your operations.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Rooftop units and packaged systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Variable refrigerant flow (VRF) systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Chillers and cooling towers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Building automation systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Preventative maintenance programs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Energy audits and efficiency upgrades</span>
                    </li>
                  </ul>
                  <Button asChild className="mt-8">
                    <Link href="/quote?service=commercial-hvac">Request Commercial Consultation</Link>
                  </Button>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
                  <Image
                    src="/services/commercial-hvac.png"
                    alt="Commercial HVAC system"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Equipment & Technology Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Equipment & Technology</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We partner with leading manufacturers to provide cutting-edge HVAC solutions that maximize comfort,
              efficiency, and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "High-Efficiency Furnaces",
                description:
                  "Modern furnaces with up to 98% AFUE ratings, variable-speed blowers, and modulating gas valves for optimal comfort and energy savings.",
                image: "/services/furnace.png",
              },
              {
                title: "Air Conditioning Systems",
                description:
                  "Energy-efficient cooling systems with SEER ratings up to 26, variable-speed compressors, and environmentally friendly refrigerants.",
                image: "/services/air-conditioner.png",
              },
              {
                title: "Heat Pumps",
                description:
                  "Versatile systems that provide both heating and cooling, with advanced technology for operation in extreme climates and significant energy savings.",
                image: "/services/heat-pump.png",
              },
              {
                title: "Ductless Mini-Split Systems",
                description:
                  "Flexible zoning solutions for homes without ductwork or for adding comfort to specific areas without extending existing systems.",
                image: "/services/mini-split.png",
              },
              {
                title: "Smart Controls & Thermostats",
                description:
                  "Advanced control systems with learning capabilities, remote access, energy usage reports, and integration with home automation platforms.",
                image: "/services/smart-thermostat.png",
              },
              {
                title: "Indoor Air Quality Solutions",
                description:
                  "Comprehensive air purification systems, including HEPA filtration, UV treatment, humidifiers, and energy recovery ventilators.",
                image: "/services/air-purifier.png",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Benefits of Professional HVAC Services</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Investing in quality HVAC services delivers significant advantages for your comfort, health, and finances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Enhanced Comfort",
                description:
                  "Professional HVAC services ensure your system maintains consistent temperatures throughout your space, eliminates hot and cold spots, and controls humidity for optimal comfort year-round.",
                icon: <Thermometer className="h-10 w-10 text-primary" />,
              },
              {
                title: "Improved Air Quality",
                description:
                  "Modern HVAC systems with proper filtration remove allergens, dust, and pollutants from your indoor air, creating a healthier environment for everyone in your home or business.",
                icon: <Fan className="h-10 w-10 text-primary" />,
              },
              {
                title: "Energy Efficiency",
                description:
                  "Well-designed and properly maintained systems consume less energy, reducing your utility bills and environmental impact while delivering the same or better performance.",
                icon: <Zap className="h-10 w-10 text-primary" />,
              },
              {
                title: "Extended Equipment Life",
                description:
                  "Regular professional maintenance prevents premature wear and component failure, maximizing your system's lifespan and protecting your investment.",
                icon: <Clock className="h-10 w-10 text-primary" />,
              },
              {
                title: "Fewer Repairs",
                description:
                  "Preventative maintenance catches small issues before they become major problems, reducing the frequency and cost of repairs and emergency service calls.",
                icon: <Wrench className="h-10 w-10 text-primary" />,
              },
              {
                title: "Peace of Mind",
                description:
                  "Working with certified professionals ensures your system is properly installed, maintained, and operating safely, giving you confidence in your home or building's comfort systems.",
                icon: (
                  <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Plans Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">HVAC Maintenance Plans</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the perfect maintenance plan to keep your HVAC system running efficiently year-round.
            </p>
          </div>

          <HVACPlansTable />

          <div className="mt-8 text-center">
            <p className="text-gray-600 italic">
              * All plans include our satisfaction guarantee. Plans can be paid monthly or annually with a discount.
            </p>
            <Button asChild className="mt-6">
              <Link href="/service-plans">View All Service Plans</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our mechanical services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white dark:bg-gray-800 rounded-lg shadow">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  How often should I have my HVAC system serviced?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  We recommend professional maintenance twice yearly: in spring for your cooling system and in fall for
                  your heating system. Regular maintenance ensures optimal performance, efficiency, and system
                  longevity. Our maintenance plans include these seasonal check-ups plus priority service and discounts
                  on repairs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white dark:bg-gray-800 rounded-lg shadow">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  How long should my HVAC system last?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  With proper maintenance, you can expect your HVAC equipment to last: 15-20 years for furnaces, 12-15
                  years for air conditioners, 12-15 years for heat pumps, and 20-30 years for boilers. Regular
                  professional maintenance is key to maximizing equipment lifespan and maintaining efficiency throughout
                  those years.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white dark:bg-gray-800 rounded-lg shadow">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  How do I know if I need a new HVAC system?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Consider replacement if: your system is over 15 years old, repairs exceed 50% of replacement cost,
                  your energy bills are steadily increasing, your system can't maintain comfortable temperatures, you're
                  experiencing frequent breakdowns, or your system uses R-22 refrigerant (being phased out). We offer
                  free replacement evaluations to help you make an informed decision.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white dark:bg-gray-800 rounded-lg shadow">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  What size HVAC system do I need?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Proper sizing requires a professional load calculation that considers your home's square footage,
                  insulation levels, window efficiency, local climate, and other factors. Both oversized and undersized
                  systems cause problems with comfort, efficiency, and system longevity. Our technicians use
                  industry-standard Manual J calculations to determine the correct size for your specific needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white dark:bg-gray-800 rounded-lg shadow">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  How can I improve my indoor air quality?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  We offer several indoor air quality solutions: high-efficiency air filtration systems, UV air
                  purifiers that kill bacteria and viruses, whole-house humidifiers and dehumidifiers to maintain
                  optimal humidity levels, energy recovery ventilators to bring in fresh air without losing
                  heating/cooling, and duct cleaning services. Our air quality experts can assess your specific needs
                  and recommend the best solutions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white dark:bg-gray-800 rounded-lg shadow">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  Are there any rebates or incentives available for HVAC upgrades?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Yes, many utility companies and government programs offer rebates and incentives for energy-efficient
                  HVAC upgrades. These can significantly reduce your upfront costs. Additionally, high-efficiency
                  systems may qualify for tax credits. Our team stays current on available incentives and can help you
                  navigate the application process to maximize your savings.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-sarxt-dark sm:text-4xl">
              Ready to Enhance Your Comfort?
            </h2>
            <p className="mt-4 text-xl text-sarxt-dark/80">
              Contact our mechanical services team today for expert HVAC solutions tailored to your needs.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-sarxt-dark text-white hover:bg-sarxt-dark/90">
                <Link href="/quote?service=mechanical">Schedule Service</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
