import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Building, 
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
  Calendar,
  Users,
  BarChart3
} from "lucide-react"

export const metadata: Metadata = {
  title: "Commercial Solar Quote | Sey Energy",
  description: "Get a customized quote for your commercial solar installation. Our experts will design the perfect system for your business.",
}

export default function CommercialSolarQuotePage() {
  const benefits = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Operational Savings",
      description: "Reduce operational costs by 60-80% on electricity bills"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Business Continuity",
      description: "Ensure uninterrupted operations with backup power"
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Tax Benefits",
      description: "Take advantage of business tax incentives and depreciation"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Corporate Responsibility",
      description: "Demonstrate commitment to sustainability and green energy"
    }
  ]

  const commercialFeatures = [
    "Custom commercial system design",
    "High-efficiency commercial panels",
    "Large-scale battery storage systems",
    "Professional commercial installation",
    "Advanced monitoring and analytics",
    "25-year warranty on panels",
    "10-year warranty on inverters",
    "Comprehensive maintenance plans",
    "Grid-tie with net metering",
    "Emergency backup power systems",
    "Energy management dashboard",
    "24/7 commercial support"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-sarxt-dark to-sarxt-dark/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/20 p-4 rounded-full">
                <Building className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Commercial Solar Quote
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Power your business with commercial solar energy. Our experts will analyze your operations 
              and design a system that maximizes your ROI and operational efficiency.
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
              Why Choose Commercial Solar?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your business operations with clean, reliable solar energy and significantly reduce your operational costs
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
                  <CardTitle className="text-2xl">Get Your Free Commercial Solar Quote</CardTitle>
                  <CardDescription className="text-white/90">
                    Fill out the form below and our commercial solar experts will contact you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    {/* Business Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Business Information</h3>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Business Name *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person *</label>
                          <input
                            type="text"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Job Title *</label>
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
                        <label className="block text-sm font-medium text-gray-700 mb-2">Business Address *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Business Type *</label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                            <option>Office Building</option>
                            <option>Retail Store</option>
                            <option>Manufacturing Facility</option>
                            <option>Warehouse</option>
                            <option>Hotel/Resort</option>
                            <option>Restaurant</option>
                            <option>Healthcare Facility</option>
                            <option>Educational Institution</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Building Size (sq ft)</label>
                          <input
                            type="number"
                            placeholder="e.g., 5000"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Roof Type</label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                            <option>Flat Roof</option>
                            <option>Pitched Roof</option>
                            <option>Metal Roof</option>
                            <option>Mixed</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Available Roof Space (sq ft)</label>
                          <input
                            type="number"
                            placeholder="e.g., 2000"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
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
                            placeholder="e.g., 5000"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Peak Usage Hours</label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                            <option>Daytime (8 AM - 6 PM)</option>
                            <option>Evening (6 PM - 10 PM)</option>
                            <option>24/7 Operations</option>
                            <option>Variable</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Current Equipment</label>
                        <div className="grid grid-cols-2 gap-2">
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">HVAC Systems</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Lighting Systems</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Production Equipment</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Refrigeration</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Computers/IT</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Security Systems</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Business Operations */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Business Operations</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Number of Employees</label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                            <option>1-10</option>
                            <option>11-50</option>
                            <option>51-100</option>
                            <option>101-500</option>
                            <option>500+</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Operating Hours</label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                            <option>8 hours/day</option>
                            <option>12 hours/day</option>
                            <option>16 hours/day</option>
                            <option>24 hours/day</option>
                            <option>Variable</option>
                          </select>
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
                      Get Free Commercial Solar Quote
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
                    <Building className="h-5 w-5 mr-2 text-primary" />
                    What's Included in Your Quote
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {commercialFeatures.map((feature, index) => (
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
                    <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                    Business Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">60-80%</div>
                      <div className="text-sm text-gray-600">Average reduction in operational costs</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">3-5 Years</div>
                      <div className="text-sm text-gray-600">Typical payback period for businesses</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">25+ Years</div>
                      <div className="text-sm text-gray-600">System lifespan and warranty</div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">Tax Benefits</div>
                      <div className="text-sm text-gray-600">Depreciation and tax incentives available</div>
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
                        <div className="font-semibold">Business Consultation</div>
                        <div className="text-sm text-gray-600">Our commercial expert will contact you within 24 hours</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</div>
                      <div>
                        <div className="font-semibold">Site Assessment</div>
                        <div className="text-sm text-gray-600">We'll conduct a detailed commercial site survey</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</div>
                      <div>
                        <div className="font-semibold">Commercial Proposal</div>
                        <div className="text-sm text-gray-600">Receive your detailed business solar proposal</div>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Power Your Business with Solar?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses across Ghana who have already made the switch to commercial solar energy and are enjoying significant operational savings.
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
