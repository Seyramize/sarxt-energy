import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Droplet, Wrench, Clock, ShieldCheck, Thermometer } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// First, import the PlumbingPlansTable component
import { PlumbingPlansTable } from "@/components/plumbing-plans-table"

export default function PlumbingServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative h-[400px] w-full">
          <Image
            src="/services/plumbing-hero.png"
            alt="Professional plumber working on pipes"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Plumbing Services</h1>
              <p className="mt-6 text-xl text-white">
                Reliable plumbing solutions for residential and commercial properties, from routine maintenance to
                emergency repairs.
              </p>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/quote?service=plumbing">Request Service</Link>
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Professional Plumbing Services You Can Trust
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Sarxt Energy's team of licensed plumbers provides comprehensive plumbing services for homes and
                businesses. From fixing leaky faucets to installing complex plumbing systems, we deliver quality
                workmanship and exceptional customer service on every project.
              </p>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                We understand that plumbing issues can disrupt your daily life and potentially cause significant damage
                to your property. That's why we respond quickly, diagnose accurately, and implement effective solutions
                that restore functionality while preventing future problems.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-sarxt-dark">
                      <Droplet className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Leak Detection & Repair</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">Find and fix leaks before they cause damage</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-sarxt-dark">
                      <Wrench className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Installation & Replacement</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">Expert installation of fixtures and systems</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-sarxt-dark">
                      <Clock className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">24/7 Emergency Service</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">Rapid response when you need it most</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-sarxt-dark">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Licensed Professionals</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">Fully licensed and insured plumbers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/services/plumbing-1.png"
                alt="Plumber installing new fixtures"
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Plumbing Services</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive plumbing solutions for residential and commercial properties.
            </p>
          </div>

          <Tabs defaultValue="repair" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="repair">Repair & Maintenance</TabsTrigger>
                <TabsTrigger value="installation">Installation & Replacement</TabsTrigger>
                <TabsTrigger value="drain">Drain & Sewer Services</TabsTrigger>
                <TabsTrigger value="commercial">Commercial Plumbing</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="repair" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/services/plumbing-repair.png"
                    alt="Plumber repairing a sink"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Repair & Maintenance Services</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Our repair and maintenance services address a wide range of plumbing issues, from minor leaks to
                    major system failures. We diagnose problems accurately and implement effective, long-lasting
                    solutions.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Leak detection and repair</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Faucet and fixture repairs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Toilet repairs and adjustments</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Pipe repairs and replacements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Water pressure issues</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Preventative maintenance plans</span>
                    </li>
                  </ul>
                  <Button asChild className="mt-8">
                    <Link href="/quote?service=plumbing-repair">Schedule Service</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="installation" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4">Installation & Replacement Services</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Whether you're renovating, building new, or replacing outdated fixtures, our installation services
                    ensure your plumbing systems are properly installed for optimal performance and longevity.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Fixture installation (sinks, toilets, showers)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Water heater installation and replacement</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Pipe installation and replacement</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Garbage disposal installation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Water filtration systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Sump pump installation</span>
                    </li>
                  </ul>
                  <Button asChild className="mt-8">
                    <Link href="/quote?service=plumbing-installation">Schedule Installation</Link>
                  </Button>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
                  <Image
                    src="/services/plumbing-installation.png"
                    alt="Plumber installing new fixtures"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="drain" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/services/drain-cleaning.png"
                    alt="Drain cleaning equipment"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Drain & Sewer Services</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Our drain and sewer services keep your wastewater systems flowing smoothly. We use advanced
                    equipment and techniques to clear blockages, repair damage, and prevent future issues.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Drain cleaning and unclogging</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Sewer line cleaning and repair</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Video camera inspections</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Hydro jetting services</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Sewer line replacement</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Root removal</span>
                    </li>
                  </ul>
                  <Button asChild className="mt-8">
                    <Link href="/quote?service=drain-sewer">Schedule Service</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="commercial" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4">Commercial Plumbing Services</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Our commercial plumbing team understands the unique needs of businesses. We provide reliable,
                    efficient services that minimize disruption to your operations while ensuring your plumbing systems
                    function optimally.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Commercial fixture installation and repair</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Water line installation and repair</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Backflow prevention services</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Commercial water heater services</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Code compliance inspections</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Preventative maintenance programs</span>
                    </li>
                  </ul>
                  <Button asChild className="mt-8">
                    <Link href="/quote?service=commercial-plumbing">Request Commercial Service</Link>
                  </Button>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
                  <Image
                    src="/services/commercial-plumbing.png"
                    alt="Commercial plumbing system"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      {/* Water Heater Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/services/water-heater.png" alt="Water heater installation" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Water Heater Services</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Our comprehensive water heater services ensure you have reliable hot water when you need it. From
                routine maintenance to complete system replacements, we provide expert solutions for all types of water
                heaters.
              </p>

              <div className="mt-8 space-y-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                  <div className="flex items-center mb-4">
                    <Thermometer className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-xl font-bold">Tankless Water Heaters</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Energy-efficient, space-saving solutions that provide hot water on demand. We offer installation,
                    repair, and maintenance services for all major brands of tankless water heaters.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                  <div className="flex items-center mb-4">
                    <Thermometer className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-xl font-bold">Traditional Tank Water Heaters</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Reliable and cost-effective hot water solutions. Our services include installation, repair,
                    maintenance, and replacement of gas and electric tank water heaters.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                  <div className="flex items-center mb-4">
                    <Thermometer className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-xl font-bold">Heat Pump Water Heaters</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Highly efficient systems that use electricity to move heat rather than generate it directly. We
                    provide expert installation and service for these energy-saving water heating solutions.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                  <div className="flex items-center mb-4">
                    <Thermometer className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-xl font-bold">Commercial Water Heating</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Specialized solutions for businesses with high hot water demands. Our commercial water heater
                    services include system design, installation, and maintenance programs.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild>
                  <Link href="/quote?service=water-heater">Learn More About Water Heater Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Water Conservation Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Water Conservation Solutions</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Reduce your water usage, lower your utility bills, and help protect our planet's most precious resource.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Low-Flow Fixtures",
                description:
                  "Modern fixtures that maintain performance while using significantly less water. We install water-efficient faucets, showerheads, and toilets that can reduce water usage by up to 50%.",
                image: "/services/low-flow-fixtures.png",
              },
              {
                title: "Water Leak Detection",
                description:
                  "Advanced techniques to find and fix hidden leaks that waste water and can cause damage. Our comprehensive leak detection services identify problems before they become major issues.",
                image: "/services/leak-detection.png",
              },
              {
                title: "Smart Irrigation Systems",
                description:
                  "Water-saving irrigation solutions for landscaping that adjust based on weather conditions and soil moisture. These systems ensure your plants get exactly what they need without waste.",
                image: "/services/smart-irrigation.png",
              },
              {
                title: "Rainwater Harvesting",
                description:
                  "Systems that collect and store rainwater for irrigation and other non-potable uses. We design and install custom rainwater harvesting solutions for both homes and businesses.",
                image: "/services/rainwater-harvesting.png",
              },
              {
                title: "Greywater Systems",
                description:
                  "Solutions that recycle water from sinks, showers, and washing machines for irrigation and toilet flushing. These systems can significantly reduce your freshwater consumption.",
                image: "/services/greywater-system.png",
              },
              {
                title: "Water Audits",
                description:
                  "Comprehensive assessments of your water usage patterns and recommendations for conservation. Our water audits identify opportunities to reduce consumption and save money.",
                image: "/services/water-audit.png",
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

          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/quote?service=water-conservation">Schedule a Water Conservation Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Service Plans Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Plumbing Service Plans</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose a maintenance plan to keep your plumbing system in optimal condition and prevent costly
              emergencies.
            </p>
          </div>

          <PlumbingPlansTable />

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
              Find answers to common questions about our plumbing services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white dark:bg-gray-800 rounded-lg shadow">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  How do I know if I have a water leak?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Signs of a water leak include unexplained increases in your water bill, the sound of running water
                  when no fixtures are in use, damp spots on walls or floors, mold or mildew growth, and reduced water
                  pressure. If you suspect a leak, our professional leak detection service can locate the source using
                  specialized equipment without causing damage to your property.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white dark:bg-gray-800 rounded-lg shadow">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  How often should I have my drains cleaned?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  For preventative maintenance, we recommend having your main sewer line cleaned every 18-24 months.
                  However, homes with large trees near sewer lines, older plumbing systems, or a history of drain
                  problems may benefit from more frequent cleaning. Watch for warning signs like slow drains, gurgling
                  sounds, or recurring clogs, which indicate it's time for a professional drain cleaning.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white dark:bg-gray-800 rounded-lg shadow">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  When should I replace my water heater?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Most traditional tank water heaters last 8-12 years, while tankless models can last up to 20 years
                  with proper maintenance. Consider replacement if your water heater is near the end of its expected
                  lifespan, requires frequent repairs, produces rusty water, makes unusual noises, or can't keep up with
                  your hot water demands. We can assess your current system and recommend the most efficient replacement
                  options.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white dark:bg-gray-800 rounded-lg shadow">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  What should I do in a plumbing emergency?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  In a plumbing emergency, first locate and shut off the water source if possible. For isolated issues
                  like a toilet or sink, use the local shut-off valve. For major emergencies, use your home's main water
                  shut-off valve. Then call our 24/7 emergency service line. While waiting for our technicians to
                  arrive, you can place buckets under active leaks and remove valuable items from affected areas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white dark:bg-gray-800 rounded-lg shadow">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  How can I prevent frozen pipes?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  To prevent frozen pipes, insulate exposed pipes in unheated areas like basements, attics, and garages.
                  During cold weather, keep cabinet doors open to allow warm air to circulate around pipes, let faucets
                  drip slightly to relieve pressure, and maintain a consistent temperature in your home, even when
                  you're away. If you're concerned about specific vulnerable areas, we offer professional pipe
                  insulation services.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white dark:bg-gray-800 rounded-lg shadow">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  Do you offer warranties on your plumbing work?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Yes, we stand behind our work with comprehensive warranties. All of our repairs come with a 90-day
                  labor warranty, while new installations include warranties ranging from 1-5 years depending on the
                  type of installation. Additionally, manufacturer warranties cover the products we install. Our service
                  representatives can provide detailed warranty information specific to your project before work begins.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">{/* Add your CTA content here */}</div>
        </div>
      </section>
      \
    </div>
  )
}
