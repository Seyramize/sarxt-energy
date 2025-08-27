import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sun, Building, Wrench, Zap, BarChart, Shield, MapPin, Clock, Award } from "lucide-react"

import { IndustrySolutionsSection } from "@/components/industry-solutions-section"
import { ElegantHero } from "@/components/elegant-hero"
import { AnimatedStats } from "@/components/animated-stats"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { ElegantServiceCard } from "@/components/elegant-service-card"
import { SectionDivider } from "@/components/section-divider"
import { ParallaxSection } from "@/components/parallax-section"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <ElegantHero
        title="Leading Solar Energy & MEP Solutions in Ghana"
        subtitle="Transform your home or business with reliable solar power systems and professional MEP services. 3+ years of excellence in renewable energy across Ghana."
        primaryCta={{ text: "Get Free Quote", href: "/quote" }}
        secondaryCta={{ text: "View Solar Packages", href: "/solar-packages" }}
        imageSrc="/hero-image.jpg"
        imageAlt="Solar panels installation in Ghana"
      />

      {/* Stats Section */}
      <AnimatedStats
        title="Our Impact in Ghana"
        subtitle="Empowering homes and businesses across Ghana with sustainable energy solutions."
        stats={[
                      { value: 15, label: "Installations Completed", suffix: "+" },
          { value: 500, label: "kW Installed", suffix: "+" },
          { value: 600, label: "Tons of CO₂ Offset", suffix: "+" },
          { value: 82, label: "Client Satisfaction", suffix: "%" },
        ]}
        className="bg-gray-50"
      />

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Comprehensive Services</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              From residential solar installations to complex commercial MEP installations, we deliver excellence across Ghana.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ElegantServiceCard
              icon={<Sun className="h-6 w-6 text-primary" />}
              title="Solar Energy Solutions"
              description="Custom solar panel installations for homes and businesses, designed for Ghana's climate and energy needs."
              features={["Energy audit & system design", "Professional installation", "24/7 monitoring & maintenance"]}
              href="/services/solar-energy"
              index={0}
            />

            <ElegantServiceCard
              icon={<Building className="h-6 w-6 text-primary" />}
              title="MEP Services"
              description="Complete Mechanical, Electrical, and Plumbing solutions for residential and commercial properties."
              features={[
                "HVAC systems & maintenance",
                "Electrical installations & upgrades",
                "Plumbing & water systems",
              ]}
              href="/services/mep"
              index={1}
            />

            <ElegantServiceCard
              icon={<Wrench className="h-6 w-6 text-primary" />}
              title="Energy Audits & Consulting"
              description="Professional energy assessments to optimize your power consumption and reduce costs."
              features={["Comprehensive energy analysis", "Cost-saving recommendations", "ROI projections"]}
              href="/services/energy-audit"
              index={2}
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose SeyEnergy?</h2>
              <p className="mt-4 text-lg text-gray-600">
                With 3+ years of experience serving Ghana, we understand the unique energy challenges and opportunities in our region.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-sarxt-dark">
                      <Award className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Local Expertise</h3>
                    <p className="mt-2 text-gray-600">
                      Deep understanding of Ghana's energy landscape, regulations, and climate conditions.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-sarxt-dark">
                      <Zap className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Quality Assurance</h3>
                    <p className="mt-2 text-gray-600">
                      Premium equipment, certified installations, and comprehensive warranties for peace of mind.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-sarxt-dark">
                      <Clock className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">24/7 Support</h3>
                    <p className="mt-2 text-gray-600">
                      Round-the-clock technical support and maintenance services across Ghana.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/5 opacity-60 mix-blend-overlay z-10"></div>
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-transparent rounded-lg blur-lg z-0"></div>
              <div className="relative z-10 h-full w-full overflow-hidden rounded-lg">
                <img
                  src="/about-image.jpg"
                  alt="SeyEnergy team installing solar panels in Ghana"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Packages Preview */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Solar Packages for Every Home</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the perfect solar solution based on your household energy consumption. Our detailed packages include power analysis and system recommendations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                             {
                 title: "Basic Home",
                 appliances: "2 ACs, 2 TVs, 1 Fridge, Washing Machine, Microwave, Dishwasher, Dryer",
                 power: "3-5 kW",
                 savings: "40-60%",
                 color: "from-blue-500 to-blue-600"
               },
               {
                 title: "Standard Home",
                 appliances: "3 ACs, 3 TVs, 1 Fridge, Washing Machine, Microwave, Dishwasher, Dryer",
                 power: "5-8 kW",
                 savings: "50-70%",
                 color: "from-green-500 to-green-600"
               },
               {
                 title: "Premium Home",
                 appliances: "4 ACs, 4 TVs, 2 Fridges, Washing Machine, Microwave, Dishwasher, Dryer",
                 power: "8-12 kW",
                 savings: "60-80%",
                 color: "from-purple-500 to-purple-600"
               },
               {
                 title: "Luxury Home",
                 appliances: "5+ ACs, Multiple TVs, 2 Fridges, 2 Washing Machines, 2 Microwaves, 2 Dishwashers, 2 Dryers, Automation",
                 power: "12-20 kW",
                 savings: "70-90%",
                 color: "from-red-500 to-red-600"
               }
            ].map((package_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${package_.color} flex items-center justify-center mb-4`}>
                  <Sun className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{package_.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{package_.appliances}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>System Size:</span>
                    <span className="font-semibold">{package_.power}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Energy Savings:</span>
                    <span className="font-semibold text-green-600">{package_.savings}</span>
                  </div>
                </div>
                <Button asChild className="w-full mt-4" variant="outline">
                  <Link href="/solar-packages">View Details</Link>
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/solar-packages">View All Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <IndustrySolutionsSection />

      {/* Testimonial Section */}
      <TestimonialCarousel
        testimonials={[
          {
            quote:
              "SeyEnergy installed a 10kW solar system for our home in Accra. We've seen a 70% reduction in our electricity bills, and the system has been running flawlessly for over 2 years. Their team was professional and the installation was completed on time.",
            author: "Phillip Edwards",
            position: "Homeowner",
            company: "Accra, Ghana",
            imageSrc: "/jpm.png",
          },
          {
            quote:
              "As a business owner in Kumasi, switching to solar with SeyEnergy was the best decision we made. Our operational costs have decreased significantly, and we're proud to be contributing to Ghana's renewable energy goals.",
            author: "Moses Osei",
            position: "Managing Director",
            company: "Osei Enterprises",
            imageSrc: "/asabir.png",
          },
          {
            quote:
              "The MEP services from SeyEnergy transformed our office building. Their expertise in both solar and mechanical systems made them the perfect partner for our complex project in Takoradi.",
            author: "David Mensah",
            position: "Facilities Manager",
            company: "Mensah Group",
            imageSrc: "/charles.png",
          },
        ]}
      />

      {/* Parallax CTA Section */}
      <ParallaxSection
        title="Powering Ghana's Future with Solar Energy"
        subtitle="Join hundreds of satisfied customers across Ghana who have made the switch to clean, reliable solar power."
        ctaText="Start Your Solar Journey"
        ctaLink="/contact"
        imageSrc="/parallax-bg.jpg"
      />



      {/* CTA Section */}
      <section className="py-16 bg-sarxt-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full transform translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full transform -translate-x-1/2 translate-y-1/2 blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Go Solar in Ghana?</h2>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
              Get a free consultation and detailed quote. Our experts will analyze your energy needs and recommend the perfect solar solution for your home or business.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="text-base relative overflow-hidden group">
                <Link href="/quote">
                  <span className="relative z-10">Get a Quote</span>
                  <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-black bg-yellow-400 hover:bg-yellow-500 relative overflow-hidden group"
              >
                <Link href="/solar-packages">
                  <span className="relative z-10">View Solar Packages</span>
                  <span className="absolute inset-0 bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
