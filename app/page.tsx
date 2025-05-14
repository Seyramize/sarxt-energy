import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sun, Building, Wrench, Zap, BarChart, Shield } from "lucide-react"
import { HomeBlogSection } from "@/components/home-blog-section"
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
        title="Harness the Power of the Sun"
        subtitle="Lower your bills, increase your property value, and help protect the planet with Sarxt Energy's solar solutions."
        primaryCta={{ text: "Get a Quote", href: "/quote" }}
        secondaryCta={{ text: "Our Services", href: "/services" }}
        imageSrc="/hero-image.jpg"
        imageAlt="Solar panels on a residential roof"
      />

      {/* Stats Section */}
      <AnimatedStats
        title="Our Impact"
        subtitle="We're committed to creating a sustainable future through renewable energy solutions."
        stats={[
          { value: 50, label: "Projects Completed", suffix: "+" },
          { value: 1500, label: "kW Installed", suffix: "+" },
          { value: 1200, label: "Tons of CO₂ Offset", suffix: "+" },
          { value: 85, label: "Client Satisfaction", suffix: "%" },
        ]}
        className="bg-gray-50"
      />

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Sarxt Energy provides comprehensive solar and M.E.P. solutions for both residential and commercial
              properties.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ElegantServiceCard
              icon={<Sun className="h-6 w-6 text-primary" />}
              title="Residential Solar"
              description="Reduce your electricity bills and increase your home's value with our custom residential solar panel installations."
              features={["Custom system design", "Professional installation", "Monitoring and maintenance"]}
              href="/services/residential-solar"
              index={0}
            />

            <ElegantServiceCard
              icon={<Building className="h-6 w-6 text-primary" />}
              title="Commercial Solar"
              description="Reduce operating costs and demonstrate your commitment to sustainability with our commercial solar solutions."
              features={[
                "Scalable system design",
                "Minimal disruption installation",
                "ROI analysis and financing options",
              ]}
              href="/services/commercial-solar"
              index={1}
            />

            <ElegantServiceCard
              icon={<Wrench className="h-6 w-6 text-primary" />}
              title="M.E.P. Services"
              description="Comprehensive M.E.P. services for both residential and commercial properties, ensuring optimal performance."
              features={["HVAC systems", "Electrical installations", "Plumbing solutions"]}
              href="/services/mep"
              index={2}
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Industry Solutions Section */}
      <IndustrySolutionsSection />

      {/* Testimonial Section */}
      <TestimonialCarousel
        testimonials={[
          {
            quote:
              "Sarxt Energy transformed our office building with a state-of-the-art solar system that reduced our energy costs by 60%. Their team was professional, efficient, and delivered exactly what they promised.",
            author: "Michael Johnson",
            position: "Facilities Director",
            company: "Horizon Properties",
            imageSrc: "/testimonials/michael.jpg",
          },
          {
            quote:
              "Working with Sarxt Energy on our residential development was a game-changer. Their integrated approach to solar and MEP systems helped us achieve LEED certification and increased our property values significantly.",
            author: "Sarah Williams",
            position: "Project Manager",
            company: "Summit Construction",
            imageSrc: "/testimonials/sarah.jpg",
          },
          {
            quote:
              "The team at Sarxt Energy provided exceptional service from start to finish. Their expertise in both solar and mechanical systems made them the perfect partner for our complex commercial project.",
            author: "David Chen",
            position: "CEO",
            company: "GreenTech Innovations",
            imageSrc: "/testimonials/david.jpg",
          },
        ]}
      />

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Sarxt Energy?</h2>
              <p className="mt-4 text-lg text-gray-600">
                With years of experience and a commitment to excellence, Sarxt Energy is your trusted partner for all
                your energy needs.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-sarxt-dark">
                      <Zap className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Expertise</h3>
                    <p className="mt-2 text-gray-600">
                      Our team of certified professionals brings years of experience in solar and M.E.P. installations.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-sarxt-dark">
                      <BarChart className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Cost Efficiency</h3>
                    <p className="mt-2 text-gray-600">
                      We provide solutions that maximize your return on investment and minimize long-term costs.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-sarxt-dark">
                      <Shield className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Quality Assurance</h3>
                    <p className="mt-2 text-gray-600">
                      We use only the highest quality materials and equipment, backed by comprehensive warranties.
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
                  alt="Sarxt Energy team installing solar panels"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax CTA Section */}
      <ParallaxSection
        title="Sustainable Energy Solutions for a Brighter Future"
        subtitle="Join thousands of satisfied customers who have made the switch to clean, renewable energy with Sarxt Energy."
        ctaText="Start Your Journey"
        ctaLink="/contact"
        imageSrc="/parallax-bg.jpg"
      />

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recent installations and the impact they've made.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="group relative overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-80 w-full overflow-hidden">
                  <img
                    src={`/project-${project}.jpg`}
                    alt={`Project ${project}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
                  <h3 className="text-xl font-bold text-white">
                    {project === 1
                      ? "Residential Solar Installation"
                      : project === 2
                        ? "Commercial Office Complex"
                        : "Industrial M.E.P. Project"}
                  </h3>
                  <p className="mt-2 text-sm text-gray-200 opacity-0 transform transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
                    {project === 1
                      ? "15kW system, 50% energy savings"
                      : project === 2
                        ? "100kW system, LEED certified building"
                        : "Complete M.E.P. services for manufacturing facility"}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-4 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:text-white opacity-0 transform transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4"
                  >
                    <Link href={`/projects/${project}`}>View Project</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <HomeBlogSection />

      {/* CTA Section */}
      <section className="py-16 bg-sarxt-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full transform translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full transform -translate-x-1/2 translate-y-1/2 blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Make the Switch?</h2>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
              Contact us today for a free consultation and quote. Let's work together to create a sustainable future.
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
                className="text-base border-white text-black hover:bg-yellow-400 hover:text-sarxt-dark relative overflow-hidden group"
              >
                <Link href="/contact">
                  <span className="relative z-10">Contact Us</span>
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
