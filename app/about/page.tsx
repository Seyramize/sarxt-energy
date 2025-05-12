import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Users, Clock, Lightbulb } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative h-[400px] w-full">
          <Image src="/about-hero.jpg" alt="Sarxt Energy team" fill priority className="object-cover" />
        </div>
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">About Sarxt Energy</h1>
              <p className="mt-6 text-xl text-white">
                Leading the way in sustainable energy solutions and M.E.P. services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Story</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Founded in 2010, Sarxt Energy began with a simple mission: to make sustainable energy accessible to
                everyone. What started as a small team of passionate engineers has grown into a leading provider of
                solar and M.E.P. solutions.
              </p>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Our founder, Seyram Yao Alifo, recognized the potential of solar energy to transform how we power our
                homes and businesses. With a background in electrical engineering and a vision for a sustainable future,
                he assembled a team of experts dedicated to quality, innovation, and customer satisfaction.
              </p>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Today, Sarxt Energy serves both residential and commercial clients, providing comprehensive energy
                solutions that reduce costs, increase property value, and help protect our planet.
              </p>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/founder.jpg"
                alt="Seyram Yao Alifo, Founder and CEO of Sarxt Energy"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Values</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              At Sarxt Energy, our values guide everything we do. They shape our culture, inform our decisions, and
              drive our commitment to excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                <Lightbulb className="h-6 w-6 text-sarxt-dark" />
              </div>
              <h3 className="mt-4 text-xl font-bold">Innovation</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                We continuously seek new and better ways to serve our clients and advance sustainable energy solutions.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                <Award className="h-6 w-6 text-sarxt-dark" />
              </div>
              <h3 className="mt-4 text-xl font-bold">Excellence</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                We are committed to delivering the highest quality work and exceeding our clients' expectations.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                <Users className="h-6 w-6 text-sarxt-dark" />
              </div>
              <h3 className="mt-4 text-xl font-bold">Integrity</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                We operate with honesty, transparency, and ethical business practices in all our dealings.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                <Clock className="h-6 w-6 text-sarxt-dark" />
              </div>
              <h3 className="mt-4 text-xl font-bold">Sustainability</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                We are dedicated to promoting environmental responsibility and sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Leadership Team</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Meet the experienced professionals who lead Sarxt Energy and drive our mission forward.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Seyram Yao Alifo",
                role: "Founder & CEO",
                bio: "With over 15 years of experience in renewable energy, Seyram leads Sarxt Energy with vision and expertise.",
                image: "/team-1.png",
              },
              {
                name: "Amara Johnson",
                role: "Chief Operations Officer",
                bio: "Amara oversees all operations, ensuring efficiency, quality, and customer satisfaction in every project.",
                image: "/team-2.png",
              },
              {
                name: "David Chen",
                role: "Chief Technical Officer",
                bio: "David leads our technical team, bringing innovation and technical excellence to our solar and M.E.P. solutions.",
                image: "/team-3.png",
              },
              {
                name: "Sophia Rodriguez",
                role: "Director of Residential Services",
                bio: "Sophia specializes in designing custom solar solutions for residential clients, maximizing efficiency and aesthetics.",
                image: "/team-4.png",
              },
              {
                name: "Marcus Williams",
                role: "Director of Commercial Services",
                bio: "Marcus leads our commercial division, developing scalable energy solutions for businesses of all sizes.",
                image: "/team-5.png",
              },
              {
                name: "Priya Patel",
                role: "Director of M.E.P. Services",
                bio: "Priya brings extensive experience in mechanical, electrical, and plumbing systems to lead our M.E.P. division.",
                image: "/team-6.png",
              },
            ].map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-sarxt-dark sm:text-4xl">Join Our Team</h2>
            <p className="mt-4 text-lg text-sarxt-dark/80 max-w-3xl mx-auto">
              We're always looking for talented individuals who share our passion for sustainable energy and excellence
              in service.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="text-base bg-sarxt-dark text-white hover:bg-sarxt-dark/90">
                <Link href="/careers">View Open Positions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
