import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, CheckCircle, MapPin, User, Zap } from "lucide-react"

// Project data (same as in projects/page.tsx)
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
    client: "Johnson Family",
    challenge:
      "The Johnson family wanted to achieve energy independence for their luxury beachfront home while maintaining the aesthetic appeal of the property. The coastal location presented challenges with salt exposure and occasional high winds.",
    solution:
      "We designed a custom 15kW solar system that integrated seamlessly with the home's architecture. We used high-efficiency panels with enhanced durability for coastal conditions and installed a comprehensive battery storage system to ensure power availability during outages. The system includes smart monitoring capabilities, allowing the homeowners to track energy production and consumption in real-time.",
    benefits: [
      "Complete energy independence during daylight hours",
      "Battery backup for essential systems during outages",
      "50% reduction in annual energy costs",
      "Increased property value by an estimated 4.1%",
      "Carbon footprint reduction equivalent to planting 250 trees annually",
    ],
    testimonial:
      "Sarxt Energy exceeded our expectations in every way. From the initial consultation to the final installation, their team was professional, knowledgeable, and attentive to our needs. The system has performed flawlessly, and we're thrilled with the energy savings we've achieved. We highly recommend Sarxt Energy to anyone considering solar power.",
    galleryImages: [
      "/projects/residential-1-detail-1.png",
      "/projects/residential-1-detail-2.png",
      "/projects/residential-1-detail-3.png",
    ],
    specs: {
      "System Size": "15kW",
      "Panel Type": "High-efficiency monocrystalline",
      "Number of Panels": "42",
      "Battery Storage": "20kWh",
      "Inverter Type": "SolarEdge with power optimizers",
      "Monitoring System": "Smart monitoring with mobile app",
      "Annual Production": "21,000 kWh (estimated)",
      "CO2 Offset": "15 tons annually",
    },
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
    client: "Skyline Properties",
    challenge:
      "Skyline Properties wanted to reduce the operating costs of their 10-story office complex while achieving LEED certification. The urban location presented space constraints and required careful planning to maximize energy production.",
    solution:
      "We designed and installed a 100kW solar array on the available rooftop space, using high-efficiency panels to maximize energy production. The system was integrated with the building's existing energy management system, allowing for optimal energy usage and distribution throughout the complex. We also implemented a comprehensive monitoring solution to track performance and demonstrate energy savings to tenants.",
    benefits: [
      "70% reduction in building energy costs",
      "Achievement of LEED Gold certification",
      "Enhanced marketability to environmentally conscious tenants",
      "Reduced carbon footprint by 70 tons annually",
      "Projected ROI within 5 years",
    ],
    testimonial:
      "Working with Sarxt Energy on our office complex solar project was a seamless experience. Their team's expertise in commercial installations was evident throughout the process. The system has significantly reduced our operating costs and helped us achieve our sustainability goals. The LEED certification has been a valuable marketing tool for attracting new tenants.",
    galleryImages: [
      "/projects/commercial-1-detail-1.png",
      "/projects/commercial-1-detail-2.png",
      "/projects/commercial-1-detail-3.png",
    ],
    specs: {
      "System Size": "100kW",
      "Panel Type": "High-efficiency bifacial modules",
      "Number of Panels": "250",
      "Inverter Type": "String inverters with module-level optimization",
      "Mounting System": "Ballasted racking system",
      "Monitoring System": "Enterprise-level monitoring with tenant dashboard",
      "Annual Production": "135,000 kWh (estimated)",
      "CO2 Offset": "70 tons annually",
    },
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
    client: "TechManufacture Inc.",
    challenge:
      "TechManufacture's 50,000 sq ft facility was operating with outdated M.E.P. systems, resulting in high energy costs, frequent maintenance issues, and inconsistent environmental conditions that affected production quality. The upgrade needed to be implemented with minimal disruption to ongoing operations.",
    solution:
      "We conducted a comprehensive audit of the existing systems and developed a phased implementation plan to minimize operational disruption. The upgrade included a new high-efficiency HVAC system with zoned controls, a complete electrical system redesign with smart distribution panels, LED lighting throughout the facility, and water-conserving plumbing fixtures. We also implemented a building management system to optimize all systems for maximum efficiency.",
    benefits: [
      "35% increase in overall operational efficiency",
      "40% reduction in energy consumption",
      "60% reduction in maintenance costs",
      "Improved working conditions and consistent environmental control",
      "Enhanced production quality due to stable environmental conditions",
    ],
    testimonial:
      "The M.E.P. upgrade by Sarxt Energy has transformed our manufacturing facility. The phased implementation allowed us to maintain production throughout the process, and the results have exceeded our expectations. The energy savings alone will pay for the project within three years, and the improved working conditions have boosted employee satisfaction and productivity.",
    galleryImages: ["/projects/mep-1-detail-1.png", "/projects/mep-1-detail-2.png", "/projects/mep-1-detail-3.png"],
    specs: {
      "HVAC System": "High-efficiency VRF system with zoned controls",
      "Electrical Upgrade": "400A service with smart distribution panels",
      Lighting: "LED throughout with occupancy and daylight sensors",
      Plumbing: "Low-flow fixtures and process water recycling system",
      "Building Management System": "Integrated control of all M.E.P. systems",
      "Energy Recovery": "Heat recovery ventilation system",
      "Annual Energy Savings": "450,000 kWh",
      "Water Conservation": "1.2 million gallons annually",
    },
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
    client: "Green Valley Homeowners Association",
    challenge:
      "The Green Valley Estates community wanted to implement solar power across multiple homes while maintaining aesthetic consistency and maximizing collective benefits. Individual installations would have been less efficient and more costly.",
    solution:
      "We designed a community solar project that included individual rooftop installations on 12 homes, connected through a smart microgrid system. The project included a shared battery storage system to maximize energy utilization and provide backup power. We worked closely with the homeowners association to ensure aesthetic consistency and developed a fair energy allocation system.",
    benefits: [
      "60% average reduction in energy bills for participating homes",
      "Shared battery system providing backup power during outages",
      "Increased property values across the community",
      "Reduced installation costs through bulk purchasing",
      "Community energy independence and resilience",
    ],
    testimonial:
      "Sarxt Energy's community solar project has transformed our neighborhood. The collaborative approach allowed us to achieve much more than we could have individually. The system has been reliable, the energy savings substantial, and the shared battery system has kept our essential systems running during several power outages. We're now the model for other communities in the area.",
    galleryImages: [
      "/projects/residential-2-detail-1.png",
      "/projects/residential-2-detail-2.png",
      "/projects/residential-2-detail-3.png",
    ],
    specs: {
      "Total System Size": "72kW across 12 homes",
      "Average System Size": "6kW per home",
      "Shared Battery Capacity": "100kWh",
      "Microgrid Type": "Smart distribution with load balancing",
      "Panel Type": "Uniform high-efficiency panels across all homes",
      "Monitoring System": "Individual and community-level monitoring",
      "Annual Production": "100,800 kWh (estimated)",
      "CO2 Offset": "72 tons annually",
    },
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
    client: "Westside Mall Management",
    challenge:
      "Westside Mall wanted to reduce energy costs while enhancing customer experience by providing covered parking. They also wanted to prepare for increasing EV adoption among shoppers by adding charging stations.",
    solution:
      "We designed and installed solar carports covering 100 parking spaces, with a total capacity of 75kW. The carports were strategically placed in prime parking areas to maximize customer benefit. We integrated 10 EV charging stations powered by the solar array, with a smart management system to balance charging loads and mall energy needs.",
    benefits: [
      "40% reduction in mall energy costs",
      "Enhanced customer experience with covered parking",
      "10 EV charging stations attracting eco-conscious shoppers",
      "Additional revenue stream from EV charging",
      "Improved mall sustainability profile and marketing opportunities",
    ],
    testimonial:
      "The solar carports have been a win-win for our mall and our customers. Shoppers love the covered parking and EV charging options, while we've seen significant reductions in our energy bills. Sarxt Energy managed the entire project with minimal disruption to our operations, and the finished installation looks fantastic. The carports have become a distinctive feature of our mall.",
    galleryImages: [
      "/projects/commercial-2-detail-1.png",
      "/projects/commercial-2-detail-2.png",
      "/projects/commercial-2-detail-3.png",
    ],
    specs: {
      "System Size": "75kW",
      "Carport Coverage": "100 parking spaces",
      "EV Charging": "10 Level 2 charging stations",
      "Panel Type": "Bifacial modules to capture reflected light",
      "Charging Management": "Smart load balancing system",
      Lighting: "Integrated LED lighting for nighttime safety",
      "Annual Production": "105,000 kWh (estimated)",
      "CO2 Offset": "55 tons annually",
    },
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
    client: "City General Hospital",
    challenge:
      "City General Hospital needed to modernize its aging HVAC system to improve air quality, meet updated healthcare facility standards, and reduce energy costs. The project required maintaining strict environmental controls and ensuring zero disruption to critical hospital operations.",
    solution:
      "We designed a comprehensive HVAC modernization plan with a phased implementation approach. The new system included advanced air filtration, precise humidity control, and zoned temperature management. We installed a dedicated outdoor air system with energy recovery and implemented a hospital-specific building management system. The work was scheduled in coordination with hospital staff to ensure zero impact on patient care.",
    benefits: [
      "45% reduction in HVAC energy usage",
      "Improved air quality meeting healthcare standards",
      "Enhanced infection control through better air management",
      "Precise environmental control for sensitive areas",
      "Reduced maintenance costs and improved system reliability",
    ],
    testimonial:
      "Sarxt Energy's approach to our HVAC modernization was exceptional. Their understanding of healthcare facility requirements and commitment to zero disruption made them the ideal partner. The new system has significantly improved our air quality and infection control capabilities while reducing our energy costs. Throughout the project, their team demonstrated the highest levels of professionalism and technical expertise.",
    galleryImages: ["/projects/mep-2-detail-1.png", "/projects/mep-2-detail-2.png", "/projects/mep-2-detail-3.png"],
    specs: {
      "HVAC System Type": "Dedicated Outdoor Air System with energy recovery",
      "Air Filtration": "HEPA filtration for critical areas",
      Zoning: "40 independently controlled zones",
      "Control System": "Healthcare-specific building management system",
      "Energy Recovery": "Enthalpy wheel with 80% efficiency",
      Redundancy: "N+1 redundancy for critical areas",
      "Annual Energy Savings": "1.2 million kWh",
      "Implementation Timeline": "18 months phased approach",
    },
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
    client: "Zhang Family",
    challenge:
      "The Zhang family was building a new eco-friendly home and wanted to achieve net-zero energy consumption while incorporating smart home technology for optimal comfort and efficiency.",
    solution:
      "We designed a comprehensive energy solution that integrated a 10kW solar system with battery storage, energy-efficient HVAC, LED lighting throughout, and smart home controls. The system included a ground-source heat pump for heating and cooling, energy recovery ventilation, and water conservation fixtures. All systems were integrated with a central smart home platform for monitoring and control.",
    benefits: [
      "Net-zero energy consumption achieved",
      "Complete energy independence with battery backup",
      "Intelligent energy management through smart home integration",
      "Superior comfort with precise environmental control",
      "Minimal environmental footprint with sustainable materials and systems",
    ],
    testimonial:
      "Sarxt Energy turned our dream of a truly sustainable home into reality. Their holistic approach to energy efficiency, from solar generation to smart consumption management, has resulted in a home that's not only environmentally responsible but also incredibly comfortable and convenient. The integration of all systems through the smart home platform gives us complete control and visibility.",
    galleryImages: [
      "/projects/residential-3-detail-1.png",
      "/projects/residential-3-detail-2.png",
      "/projects/residential-3-detail-3.png",
    ],
    specs: {
      "Solar System": "10kW with premium efficiency panels",
      "Battery Storage": "15kWh lithium-ion system",
      HVAC: "Ground-source heat pump with zoned control",
      Ventilation: "Energy recovery ventilation system",
      Lighting: "100% LED with daylight and occupancy sensing",
      "Water Heating": "Heat pump water heater with solar pre-heating",
      "Smart Home": "Integrated control of all energy systems",
      "Annual Energy Balance": "Net-zero (produces as much as it consumes)",
    },
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
    client: "Oceanview Resort & Spa",
    challenge:
      "Oceanview Resort wanted to reduce their substantial energy costs while maintaining the premium aesthetic of their beachfront property. The installation needed to be invisible to guests while maximizing energy production.",
    solution:
      "We designed a 120kW solar system that utilized the extensive flat roof areas of the resort. The installation included low-profile mounting systems and strategic placement to ensure the panels were not visible from guest areas. We incorporated a monitoring system that displays energy production on screens in the lobby as part of the resort's sustainability messaging.",
    benefits: [
      "55% reduction in energy costs",
      "Enhanced sustainability credentials for eco-conscious travelers",
      "Preservation of the resort's premium aesthetic",
      "Educational component for guests interested in sustainability",
      "Significant reduction in carbon footprint",
    ],
    testimonial:
      "Sarxt Energy understood our unique needs as a luxury resort. They designed a system that delivers substantial energy savings without compromising our aesthetic standards. The installation process was managed with minimal disruption to our guests, and the system has performed flawlessly since completion. The energy production display in our lobby has become a talking point for guests interested in our sustainability initiatives.",
    galleryImages: [
      "/projects/commercial-3-detail-1.png",
      "/projects/commercial-3-detail-2.png",
      "/projects/commercial-3-detail-3.png",
    ],
    specs: {
      "System Size": "120kW",
      "Panel Type": "Low-profile high-efficiency modules",
      "Number of Panels": "300",
      "Mounting System": "Ballasted system with minimal roof penetration",
      "Inverter Type": "String inverters with module-level optimization",
      Monitoring: "Comprehensive system with guest-facing display",
      "Annual Production": "168,000 kWh (estimated)",
      "CO2 Offset": "88 tons annually",
    },
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
    client: "Central School District",
    challenge:
      "The Central School District was facing high water bills and frequent maintenance issues due to aging plumbing infrastructure across five schools. They needed a comprehensive solution that would reduce water usage, improve reliability, and update facilities for students and staff.",
    solution:
      "We developed a district-wide plumbing renovation plan that included replacing all fixtures with water-efficient models, installing smart water management systems, upgrading water heating to high-efficiency units, and implementing rainwater harvesting for irrigation. The work was scheduled during summer break to minimize disruption to school operations.",
    benefits: [
      "60% reduction in water usage across all schools",
      "Significant decrease in maintenance calls and emergency repairs",
      "Improved facilities for students and staff",
      "Educational opportunities about water conservation",
      "Substantial cost savings on water and sewer bills",
    ],
    testimonial:
      "Sarxt Energy's district-wide plumbing renovation has been transformative for our schools. The water savings have exceeded our projections, and the reliability of the new systems has virtually eliminated the maintenance issues that plagued us previously. Their team worked efficiently during our summer break, ensuring everything was ready for the new school year. The water conservation features have also become teaching tools for our environmental science classes.",
    galleryImages: ["/projects/mep-3-detail-1.png", "/projects/mep-3-detail-2.png", "/projects/mep-3-detail-3.png"],
    specs: {
      Scope: "Five schools, complete plumbing renovation",
      Fixtures: "Low-flow toilets, urinals, and faucets with touchless operation",
      "Water Heating": "High-efficiency condensing water heaters",
      "Water Management": "Smart leak detection and usage monitoring",
      "Rainwater Harvesting": "50,000-gallon capacity across all schools",
      "Implementation Timeline": "10 weeks during summer break",
      "Annual Water Savings": "3.5 million gallons",
      "Payback Period": "4.2 years",
    },
  },
]

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const projectId = Number.parseInt(params.id)
  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    notFound()
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative h-[500px] w-full">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill priority className="object-cover" />
        </div>
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <Badge
                className={`mb-4 ${
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
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">{project.title}</h1>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center text-white">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center text-white">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{project.date}</span>
                </div>
                <div className="flex items-center text-white">
                  <User className="h-5 w-5 mr-2" />
                  <span>{project.client}</span>
                </div>
              </div>
              <div className="mt-6 flex items-center bg-primary/90 text-sarxt-dark px-4 py-2 rounded-md inline-block">
                <Zap className="h-5 w-5 mr-2" />
                <span className="font-bold">{project.results}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Project Overview</h2>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">{project.description}</p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold">The Challenge</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">{project.challenge}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Our Solution</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">{project.solution}</p>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold">Key Benefits</h3>
              <ul className="mt-4 space-y-2">
                {project.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-12">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[project.image, ...project.galleryImages].map((image, index) => (
                <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="specs" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="specs">Technical Specifications</TabsTrigger>
                  <TabsTrigger value="testimonial">Client Testimonial</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="specs" className="mt-0">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-bold mb-6">Technical Specifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(project.specs).map(([key, value], index) => (
                        <div key={index} className="flex flex-col p-4 border rounded-lg">
                          <span className="text-sm text-gray-500 dark:text-gray-400">{key}</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="testimonial" className="mt-0">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <svg
                        className="h-12 w-12 text-primary mb-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                      </svg>
                      <blockquote className="text-lg italic text-gray-600 dark:text-gray-300">
                        "{project.testimonial}"
                      </blockquote>
                      <div className="mt-6">
                        <p className="font-semibold">{project.client}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Related Projects</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore more of our {project.category} projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects
              .filter((p) => p.category === project.category && p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <div key={relatedProject.id} className="group relative overflow-hidden rounded-lg shadow-lg">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={relatedProject.image || "/placeholder.svg"}
                      alt={relatedProject.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white">{relatedProject.title}</h3>
                    <p className="mt-2 text-sm text-gray-200">{relatedProject.results}</p>
                    <Button
                      asChild
                      variant="outline"
                      className="mt-4 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:text-white"
                    >
                      <Link href={`/projects/${relatedProject.id}`}>View Project</Link>
                    </Button>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Start Your Project?</h2>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
              Contact us today to discuss how we can help you achieve similar results for your property or business.
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
