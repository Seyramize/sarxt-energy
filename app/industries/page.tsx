import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Building2, Factory, HardHat, Hotel, ShoppingBag, Warehouse } from "lucide-react"

export default function IndustriesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative h-[400px] w-full">
          <Image
            src="/industries/industries-hero.png"
            alt="Industrial solar installation"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Industry Solutions</h1>
              <p className="mt-6 text-xl text-white">
                Specialized energy and M.E.P. solutions tailored to the unique needs of various industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Powering Industries Forward</h2>
            <p className="mt-6 text-lg text-gray-600">
              At Sarxt Energy, we understand that different industries have unique energy and infrastructure needs. Our
              specialized solutions are designed to address the specific challenges and opportunities in each sector,
              helping businesses optimize operations, reduce costs, and meet sustainability goals.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Construction Industry */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <div className="relative h-48">
                <Image
                  src="/industries/construction.png"
                  alt="Construction site with solar panels"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mb-3">
                    <HardHat className="h-6 w-6 text-sarxt-dark" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Construction</h3>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <p className="text-gray-600 mb-4">
                  Integrate sustainable energy solutions into your construction projects. We partner with construction
                  companies to deliver turnkey solar and M.E.P. systems that meet modern building standards.
                </p>
                <Button asChild className="w-full">
                  <Link href="/industries/construction">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Real Estate Industry */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <div className="relative h-48">
                <Image
                  src="/industries/real-estate.png"
                  alt="Modern building with solar panels"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mb-3">
                    <Building2 className="h-6 w-6 text-sarxt-dark" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Real Estate</h3>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <p className="text-gray-600 mb-4">
                  Enhance property value and attract environmentally conscious tenants with our comprehensive energy
                  solutions for residential and commercial real estate.
                </p>
                <Button asChild className="w-full">
                  <Link href="/industries/real-estate">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Hospitality Industry */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <div className="relative h-48">
                <Image src="/industries/hospitality.png" alt="Hotel with solar panels" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mb-3">
                    <Hotel className="h-6 w-6 text-sarxt-dark" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Hospitality</h3>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <p className="text-gray-600 mb-4">
                  Reduce operational costs and enhance guest experience with our energy-efficient solutions for hotels,
                  resorts, and restaurants.
                </p>
                <Button asChild className="w-full">
                  <Link href="/industries/hospitality">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Manufacturing Industry */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <div className="relative h-48">
                <Image
                  src="/industries/manufacturing.png"
                  alt="Manufacturing facility with solar panels"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mb-3">
                    <Factory className="h-6 w-6 text-sarxt-dark" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Manufacturing</h3>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <p className="text-gray-600 mb-4">
                  Power your production facilities with reliable, cost-effective energy solutions that reduce
                  operational expenses and carbon footprint.
                </p>
                <Button asChild className="w-full">
                  <Link href="/industries/manufacturing">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Retail Industry */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <div className="relative h-48">
                <Image
                  src="/industries/retail.png"
                  alt="Retail store with solar panels"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mb-3">
                    <ShoppingBag className="h-6 w-6 text-sarxt-dark" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Retail</h3>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <p className="text-gray-600 mb-4">
                  Create comfortable shopping environments while reducing energy costs with our tailored solutions for
                  retail spaces.
                </p>
                <Button asChild className="w-full">
                  <Link href="/industries/retail">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Warehouse & Logistics Industry */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <div className="relative h-48">
                <Image
                  src="/industries/warehouse.png"
                  alt="Warehouse with solar panels"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mb-3">
                    <Warehouse className="h-6 w-6 text-sarxt-dark" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Warehouse & Logistics</h3>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <p className="text-gray-600 mb-4">
                  Optimize energy usage in large warehouse spaces with solar power, efficient HVAC, and smart lighting
                  solutions.
                </p>
                <Button asChild className="w-full">
                  <Link href="/industries/warehouse-logistics">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner With Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/industries/partnership.png"
                  alt="Business partnership handshake"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-4">Partner With Sarxt Energy</h3>
                <p className="text-gray-600 mb-6">
                  We work closely with businesses across all industries to develop customized energy solutions that
                  address specific operational challenges and sustainability goals. Our team of experts will collaborate
                  with you to design, implement, and maintain systems that deliver long-term value.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Comprehensive energy assessments</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Custom solution design</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Professional installation and implementation</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Ongoing maintenance and support</span>
                  </div>
                </div>
                <Button asChild size="lg">
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
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
              Ready to Transform Your Industry?
            </h2>
            <p className="mt-4 text-xl text-sarxt-dark/80 max-w-3xl mx-auto">
              Contact us today to discuss how our industry-specific solutions can benefit your business.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-sarxt-dark text-white hover:bg-sarxt-dark/90">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
