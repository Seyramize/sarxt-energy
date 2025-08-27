import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, MapPin, Zap } from "lucide-react"

// Project data
const projects = [
  {
    id: 1,
    title: "Luxury Residential Solar Installation",
    category: "residential",
    location: "Beachside Heights, Solar City",
    date: "January 2023",
    description:
      "A comprehensive 15kW solar system installation for a luxury beachfront property, providing 100% of the home's energy needs.",
    image: "/projects/residential-1.jpg",
    tags: ["15kW System", "Battery Storage", "Smart Monitoring"],
    results: "50% reduction in energy bills",
    featured: true,
  },
  {
    id: 2,
    title: "Commercial Office Complex",
    category: "commercial",
    location: "Downtown Business District, Solar City",
    date: "March 2023",
    description:
      "Installation of a 100kW solar array for a multi-story office complex, helping the building achieve LEED certification.",
    image: "/projects/commercial-1.jpg",
    tags: ["100kW System", "LEED Certified", "Rooftop Installation"],
    results: "70% reduction in energy costs",
    featured: true,
  },
  {
    id: 3,
    title: "Manufacturing Facility M.E.P. Upgrade",
    category: "mep",
    location: "Industrial Park, Solar City",
    date: "May 2023",
    description:
      "Complete mechanical, electrical, and plumbing overhaul for a large manufacturing facility, improving efficiency and reducing maintenance costs.",
    image: "/projects/mep-1.jpg",
    tags: ["HVAC Upgrade", "Electrical Redesign", "Water Conservation"],
    results: "35% increase in operational efficiency",
    featured: true,
  },
  {
    id: 4,
    title: "Suburban Community Solar Project",
    category: "residential",
    location: "Green Valley Estates, Solar City",
    date: "July 2023",
    description:
      "Multi-home solar installation project covering 12 residences in a suburban community, creating a mini solar grid.",
    image: "/projects/residential-2.jpg",
    tags: ["Community Solar", "12 Homes", "Shared Battery System"],
    results: "60% average reduction in energy bills",
    featured: false,
  },
  {
    id: 5,
    title: "Shopping Mall Solar Carports",
    category: "commercial",
    location: "Westside Mall, Solar City",
    date: "August 2023",
    description:
      "Installation of solar carports in a shopping mall parking lot, providing shade for vehicles while generating clean energy.",
    image: "/projects/commercial-2.png",
    tags: ["Carport Design", "75kW System", "EV Charging Integration"],
    results: "40% reduction in mall energy costs",
    featured: false,
  },
  {
    id: 6,
    title: "Hospital HVAC Modernization",
    category: "mep",
    location: "City General Hospital, Solar City",
    date: "September 2023",
    description:
      "Complete overhaul of the HVAC system for a major hospital, improving air quality and energy efficiency while ensuring uninterrupted operation.",
    image: "/projects/mep-2.png",
    tags: ["Healthcare Facility", "HVAC Redesign", "Phased Implementation"],
    results: "45% reduction in HVAC energy usage",
    featured: false,
  },
  {
    id: 7,
    title: "Eco-Friendly Home Complete Energy Solution",
    category: "residential",
    location: "Hillside Terrace, Solar City",
    date: "October 2023",
    description:
      "Comprehensive energy solution for a new eco-friendly home, including solar panels, battery storage, and energy-efficient M.E.P. systems.",
    image: "/projects/residential-3.png",
    tags: ["Net-Zero Energy", "10kW System", "Smart Home Integration"],
    results: "Net-zero energy consumption achieved",
    featured: false,
  },
  {
    id: 8,
    title: "Hotel Rooftop Solar Installation",
    category: "commercial",
    location: "Oceanview Resort, Solar City",
    date: "November 2023",
    description:
      "Large-scale rooftop solar installation for a beachfront hotel, providing clean energy while maintaining the aesthetic appeal of the property.",
    image: "/projects/commercial-3.png",
    tags: ["120kW System", "Tourism Sector", "Aesthetic Design"],
    results: "55% reduction in energy costs",
    featured: false,
  },
  {
    id: 9,
    title: "School District Plumbing Renovation",
    category: "mep",
    location: "Central School District, Solar City",
    date: "December 2023",
    description:
      "Complete renovation of plumbing systems across five schools in the district, focusing on water conservation and improved facilities.",
    image: "/projects/mep-3.png",
    tags: ["Educational Facilities", "Water Conservation", "Multi-Site Project"],
    results: "60% reduction in water usage",
    featured: false,
  },
]

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative h-[400px] w-full">
          <Image
            src="/projects-hero.jpg"
            alt="Sarxt Energy completed projects"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Our Projects</h1>
              <p className="mt-6 text-xl text-white">
                Explore our portfolio of completed installations and see how we've helped our clients harness the power
                of sustainable energy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Take a look at some of our most impactful installations and the results they've delivered.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg">
                  <div className="relative h-80 w-full overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <Badge
                      className={`mb-2 ${
                        project.category === "residential"
                          ? "bg-emerald-500"
                          : project.category === "commercial"
                            ? "bg-blue-500"
                            : "bg-purple-500"
                      }`}
                    >
                      {project.category === "residential"
                        ? "Residential"
                        : project.category === "commercial"
                          ? "Commercial"
                          : "M.E.P."}
                    </Badge>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="mt-2 text-sm text-gray-200">{project.results}</p>
                    <Button
                      asChild
                      variant="outline"
                      className="mt-4 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:text-white"
                    >
                      <Link href={`/projects/${project.id}`}>View Project</Link>
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">All Projects</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Browse our complete portfolio of projects by category.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="residential">Residential</TabsTrigger>
                <TabsTrigger value="commercial">Commercial</TabsTrigger>
                <TabsTrigger value="mep">M.E.P.</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="residential" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((project) => project.category === "residential")
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="commercial" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((project) => project.category === "commercial")
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="mep" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((project) => project.category === "mep")
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sarxt-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Start Your Project?</h2>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
              Contact us today to discuss your energy needs and how we can help you achieve your sustainability goals.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="text-base">
                <Link href="/contact"> Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Project Card Component
function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-48 w-full overflow-hidden">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        <div className="absolute top-2 left-2">
          <Badge
            className={`${
              project.category === "residential"
                ? "bg-emerald-500"
                : project.category === "commercial"
                  ? "bg-blue-500"
                  : "bg-purple-500"
            }`}
          >
            {project.category === "residential"
              ? "Residential"
              : project.category === "commercial"
                ? "Commercial"
                : "M.E.P."}
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle>{project.title}</CardTitle>
        <CardDescription className="flex items-center text-sm">
          <MapPin className="h-4 w-4 mr-1" /> {project.location}
        </CardDescription>
        <CardDescription className="flex items-center text-sm">
          <Calendar className="h-4 w-4 mr-1" /> {project.date}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300 line-clamp-3">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-primary/10">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="mt-4 flex items-center">
          <Zap className="h-5 w-5 text-primary mr-2" />
          <span className="font-medium">{project.results}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="ghost" className="p-0 h-auto">
          <Link href={`/projects/${project.id}`} className="flex items-center text-primary">
            View details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
