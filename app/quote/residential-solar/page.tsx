import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Sun, 
  Home, 
  Calculator, 
  Shield, 
  Clock, 
  CheckCircle, 
  TrendingUp,
  Zap,
  Battery,
  MapPin,
  Phone,
  Mail,
  Calendar
} from "lucide-react"

export const metadata: Metadata = {
  title: "Residential Solar Quote | SAY Energy",
  description: "Get a customized quote for your residential solar installation. Our experts will design the perfect system for your home.",
}

export default function ResidentialSolarQuotePage() {
  const benefits = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Immediate Savings",
      description: "Start saving 70-90% on your electricity bills from day one"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Reliable Power",
      description: "Uninterrupted power supply with battery backup options"
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "ROI Guaranteed",
      description: "Average payback period of 3-4 years with 25+ year lifespan"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Quality Assured",
      description: "Premium equipment with comprehensive warranties"
    }
  ]

  const residentialFeatures = [
    "Custom system design for your home",
    "High-efficiency solar panels",
    "Battery storage options available",
    "Professional installation",
    "Real-time monitoring system",
    "25-year warranty on panels",
    "10-year warranty on inverter",
    "Free maintenance for 2 years",
    "Grid-tie with net metering",
    "Emergency backup power"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-sarxt-dark to-sarxt-dark/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/20 p-4 rounded-full">
                <Sun className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Residential Solar Quote
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Get a customized solar solution for your home. Our experts will analyze your energy consumption 
              and design the perfect system to maximize your savings.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-sarxt-dark">
                <Link href="#quote-form">Get Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-sarxt-dark">
                <Link href="/solar-packages">View Solar Packages</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Why Choose Residential Solar?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your home with clean, reliable solar energy and start saving on your electricity bills immediately
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-sarxt-dark">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <Card className="shadow-2xl">
                <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-white">
                  <CardTitle className="text-2xl">Get Your Free Solar Quote</CardTitle>
                  <CardDescription className="text-white/90">
                    Fill out the form below and our solar experts will contact you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                          <input
                            type="text"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                          <input
                            type="text"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                          <input
                            type="email"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                          <input
                            type="tel"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Property Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Property Information</h3>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Property Address *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Property Type *</label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                            <option>Single Family Home</option>
                            <option>Townhouse</option>
                            <option>Apartment</option>
                            <option>Duplex</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Roof Type *</label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                            <option>Asphalt Shingles</option>
                            <option>Metal Roof</option>
                            <option>Tile Roof</option>
                            <option>Flat Roof</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Roof Age (years)</label>
                          <input
                            type="number"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Roof Orientation</label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                            <option>South Facing</option>
                            <option>Southwest/Southeast</option>
                            <option>West/East Facing</option>
                            <option>North Facing</option>
                            <option>Not Sure</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Energy Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Energy Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Average Monthly Bill (₵) *</label>
                          <input
                            type="number"
                            required
                            placeholder="e.g., 500"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Number of Bedrooms</label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                            <option>1-2</option>
                            <option>3-4</option>
                            <option>5+</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Current Appliances</label>
                        <div className="grid grid-cols-2 gap-2">
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Air Conditioners</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Electric Water Heater</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Electric Stove</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Washing Machine</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Dishwasher</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Electric Vehicle</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Project Timeline */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Project Timeline</h3>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">When would you like to install? *</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                          <option>Within 1 month</option>
                          <option>1-3 months</option>
                          <option>3-6 months</option>
                          <option>6+ months</option>
                          <option>Just exploring options</option>
                        </select>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Additional Information</h3>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Special Requirements or Questions</label>
                        <textarea
                          rows={4}
                          placeholder="Tell us about any specific requirements, concerns, or questions you have..."
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-sarxt-dark">
                      Get Free Solar Quote
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Information Panel */}
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Sun className="h-5 w-5 mr-2 text-primary" />
                    What's Included in Your Quote
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {residentialFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calculator className="h-5 w-5 mr-2 text-primary" />
                    Typical Savings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">70-90%</div>
                      <div className="text-sm text-gray-600">Average reduction in electricity bills</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">3-4 Years</div>
                      <div className="text-sm text-gray-600">Typical payback period</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">25+ Years</div>
                      <div className="text-sm text-gray-600">System lifespan</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-primary" />
                    Next Steps
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</div>
                      <div>
                        <div className="font-semibold">Submit Quote Request</div>
                        <div className="text-sm text-gray-600">Fill out the form and submit your request</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</div>
                      <div>
                        <div className="font-semibold">Free Consultation</div>
                        <div className="text-sm text-gray-600">Our expert will contact you within 24 hours</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</div>
                      <div>
                        <div className="font-semibold">Site Survey</div>
                        <div className="text-sm text-gray-600">We'll visit your property for detailed assessment</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</div>
                      <div>
                        <div className="font-semibold">Custom Proposal</div>
                        <div className="text-sm text-gray-600">Receive your detailed solar system proposal</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sarxt-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Solar Journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of homeowners who have already made the switch to solar energy and are enjoying significant savings.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-sarxt-dark">
              <Link href="#quote-form">Get Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-sarxt-dark">
              <Link href="/contact">Contact Our Experts</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
