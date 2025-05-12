import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Sun, Building, Fan, Plug, Droplet } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative h-[400px] w-full">
          <Image src="/services-hero.jpg" alt="Solar panel installation" fill priority className="object-cover" />
        </div>
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Our Services</h1>
              <p className="mt-6 text-xl text-white">
                Comprehensive solar and M.E.P. solutions for residential and commercial properties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Solar Energy Solutions</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Harness the power of the sun with our custom solar solutions for both residential and commercial
              properties.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/residential-solar.png" alt="Residential solar installation" fill className="object-cover" />
            </div>
            <div>
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Sun className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Residential Solar</h3>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Our residential solar solutions are designed to maximize energy production while complementing your
                home's aesthetics. We handle everything from system design to installation and maintenance.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Custom System Design</span>
                    <p className="text-gray-600 dark:text-gray-300">
                      Tailored to your home's architecture and energy needs
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Professional Installation</span>
                    <p className="text-gray-600 dark:text-gray-300">Expert installation by certified technicians</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Battery Storage Options</span>
                    <p className="text-gray-600 dark:text-gray-300">
                      Store excess energy for use during outages or peak hours
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Monitoring and Maintenance</span>
                    <p className="text-gray-600 dark:text-gray-300">
                      Real-time system monitoring and regular maintenance
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/services/residential-solar">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-20">
            <div className="order-2 md:order-1">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Commercial Solar</h3>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Reduce operating costs and demonstrate your commitment to sustainability with our commercial solar
                solutions. We work with businesses of all sizes to develop scalable energy systems.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Scalable System Design</span>
                    <p className="text-gray-600 dark:text-gray-300">
                      Customized for your business's current and future needs
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Minimal Disruption Installation</span>
                    <p className="text-gray-600 dark:text-gray-300">
                      Efficient installation process to minimize business interruption
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">ROI Analysis</span>
                    <p className="text-gray-600 dark:text-gray-300">
                      Detailed financial analysis and payback period calculations
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Financing Options</span>
                    <p className="text-gray-600 dark:text-gray-300">
                      Various financing solutions to fit your business model
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/services/commercial-solar">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
              <Image src="/commercial-solar.png" alt="Commercial solar installation" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* M.E.P. Services */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">M.E.P. Services</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive Mechanical, Electrical, and Plumbing services for both residential and commercial
              properties.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Fan className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Mechanical Services</CardTitle>
                <CardDescription>HVAC and ventilation solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Our mechanical services include the design, installation, and maintenance of HVAC systems for optimal
                  comfort and energy efficiency.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>HVAC system design and installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ventilation solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Energy-efficient upgrades</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Preventative maintenance</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="p-0 h-auto">
                  <Link href="/services/mechanical" className="flex items-center text-primary">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Plug className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Electrical Services</CardTitle>
                <CardDescription>Comprehensive electrical solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Our electrical services cover everything from basic wiring to complex electrical system design and
                  installation.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Electrical system design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Wiring and rewiring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Panel upgrades and repairs</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="p-0 h-auto">
                  <Link href="/services/electrical" className="flex items-center text-primary">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Droplet className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Plumbing Services</CardTitle>
                <CardDescription>Complete plumbing solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Our plumbing services include installation, repair, and maintenance of all plumbing systems for
                  residential and commercial properties.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Plumbing system design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Installation and repairs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Water heater services</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Drain cleaning and maintenance</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="p-0 h-auto">
                  <Link href="/services/plumbing" className="flex items-center text-primary">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Process</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We follow a comprehensive process to ensure the highest quality service and customer satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Consultation",
                description: "We begin with a thorough consultation to understand your needs, goals, and budget.",
              },
              {
                step: "2",
                title: "Design & Planning",
                description: "Our team designs a custom solution tailored to your specific requirements.",
              },
              {
                step: "3",
                title: "Installation",
                description: "Our certified technicians handle the installation with minimal disruption.",
              },
              {
                step: "4",
                title: "Monitoring & Support",
                description: "We provide ongoing monitoring and support to ensure optimal performance.",
              },
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="absolute top-0 left-0 -mt-2 -ml-2 bg-primary text-sarxt-dark w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  {process.step}
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 pt-10 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold">{process.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sarxt-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Get Started?</h2>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
              Contact us today for a free consultation and quote. Our team is ready to help you find the perfect
              solution for your needs.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="text-base">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
