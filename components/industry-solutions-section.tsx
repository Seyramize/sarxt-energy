import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Building2, HardHat } from "lucide-react"

export function IndustrySolutionsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Industry Solutions</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Specialized energy and M.E.P. solutions tailored to the unique needs of various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="relative h-64">
              <Image
                src="/industries/construction.png"
                alt="Construction site with solar panels being installed"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mb-3">
                  <HardHat className="h-6 w-6 text-sarxt-dark" />
                </div>
                <h3 className="text-2xl font-bold text-white">Construction Companies</h3>
              </div>
            </div>
            <div className="p-6 flex-grow">
              <p className="text-gray-600 mb-6">
                Partner with Sey Energy to offer integrated energy solutions in your construction projects. We work
                directly with construction companies to incorporate solar, electrical, mechanical, and plumbing systems
                that meet modern efficiency standards and sustainability goals.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Design-build energy solutions for new construction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Energy-efficient M.E.P. systems integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Solar-ready infrastructure planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Compliance with energy codes and green building standards</span>
                </li>
              </ul>
            </div>
            <div className="px-6 pb-6 mt-auto">
              <Button asChild className="w-full">
                <Link href="/industries/construction">Learn More</Link>
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="relative h-64">
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
                <h3 className="text-2xl font-bold text-white">Real Estate Companies</h3>
              </div>
            </div>
            <div className="p-6 flex-grow">
              <p className="text-gray-600 mb-6">
                Enhance property value and attract environmentally conscious tenants with our comprehensive energy
                solutions. We help real estate companies upgrade existing properties and develop new energy-efficient
                buildings that command premium prices.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Property energy audits and efficiency upgrades</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Solar installations for multi-unit residential and commercial properties</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Building systems modernization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Energy management systems for property portfolios</span>
                </li>
              </ul>
            </div>
            <div className="px-6 pb-6 mt-auto">
              <Button asChild className="w-full">
                <Link href="/industries/real-estate">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/industries">View All Industry Solutions</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
