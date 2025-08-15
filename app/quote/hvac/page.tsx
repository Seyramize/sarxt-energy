import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Fan, 
  Calculator, 
  Shield, 
  Clock, 
  CheckCircle, 
  TrendingUp,
  Zap,
  Thermometer,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Users,
  BarChart3,
  Snowflake,
  Sun
} from "lucide-react"

export const metadata: Metadata = {
  title: "HVAC Services Quote | SAY Energy",
  description: "Get a customized quote for your HVAC installation, repair, or maintenance. Our experts will design the perfect climate control solution.",
}

export default function HVACQuotePage() {
  const benefits = [
    {
      icon: <Thermometer className="h-6 w-6" />,
      title: "Optimal Comfort",
      description: "Perfect temperature control for year-round comfort"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Energy Efficiency",
      description: "Reduce energy costs with high-efficiency systems"
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Cost Savings",
      description: "Lower utility bills with modern HVAC technology"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Reliable Service",
      description: "Professional installation and maintenance"
    }
  ]

  const hvacFeatures = [
    "Custom HVAC system design",
    "High-efficiency air conditioners",
    "Smart thermostats and controls",
    "Professional installation",
    "Ductwork design and installation",
    "Air quality improvement systems",
    "Regular maintenance plans",
    "Emergency repair services",
    "Energy efficiency optimization",
    "Warranty coverage",
    "24/7 emergency support",
    "Free consultation and assessment"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-sarxt-dark to-sarxt-dark/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/20 p-4 rounded-full">
                <Fan className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              HVAC Services Quote
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Get the perfect climate control solution for your space. Our HVAC experts will assess your needs 
              and provide a customized quote for optimal comfort and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-sarxt-dark">
                <Link href="#quote-form">Get Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-sarxt-dark">
                <Link href="/services/mechanical">View HVAC Services</Link>
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
              Why Choose Our HVAC Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience superior comfort and energy efficiency with our professional HVAC solutions
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
                  <CardTitle className="text-2xl">Get Your Free HVAC Quote</CardTitle>
                  <CardDescription className="text-white/90">
                    Fill out the form below and our HVAC experts will contact you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
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
                            <option>Residential Home</option>
                            <option>Apartment/Condo</option>
                            <option>Office Building</option>
                            <option>Retail Store</option>
                            <option>Restaurant</option>
                            <option>Hotel/Resort</option>
                            <option>Healthcare Facility</option>
                            <option>Educational Institution</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Property Size (sq ft)</label>
                          <input
                            type="number"
                            placeholder="e.g., 2000"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Number of Rooms</label>
                          <input
                            type="number"
                            placeholder="e.g., 5"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Number of Floors</label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4+</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* HVAC Service Type */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Service Required</h3>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Service Type *</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                          <option>New HVAC Installation</option>
                          <option>HVAC System Replacement</option>
                          <option>HVAC Repair</option>
                          <option>HVAC Maintenance</option>
                          <option>Ductwork Installation</option>
                          <option>Ductwork Repair</option>
                          <option>Air Quality Improvement</option>
                          <option>Smart Thermostat Installation</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Current HVAC System</label>
                        <div className="grid grid-cols-2 gap-2">
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Central Air Conditioning</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Heat Pump</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Furnace</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Mini-Split System</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Window Units</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">No Current System</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Current Issues */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Current Issues (if any)</h3>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Problems Experienced</label>
                        <div className="grid grid-cols-2 gap-2">
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Not Cooling Properly</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Not Heating Properly</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">High Energy Bills</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Poor Air Quality</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Loud Noises</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">System Not Working</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Uneven Temperature</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Frequent Breakdowns</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Preferences */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Preferences</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">System Type Preference</label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                            <option>No Preference</option>
                            <option>Central Air Conditioning</option>
                            <option>Heat Pump</option>
                            <option>Mini-Split System</option>
                            <option>Ductless System</option>
                            <option>Hybrid System</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Energy Efficiency Priority</label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                            <option>High Priority</option>
                            <option>Medium Priority</option>
                            <option>Low Priority</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Project Timeline</h3>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">When do you need the service? *</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                          <option>Emergency - ASAP</option>
                          <option>Within 1 week</option>
                          <option>Within 1 month</option>
                          <option>Within 3 months</option>
                          <option>Just getting quotes</option>
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
                      Get Free HVAC Quote
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
                    <Fan className="h-5 w-5 mr-2 text-primary" />
                    What's Included in Your Quote
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {hvacFeatures.map((feature, index) => (
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
                    Typical Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">30-50%</div>
                      <div className="text-sm text-gray-600">Energy cost savings with new systems</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">24/7</div>
                      <div className="text-sm text-gray-600">Comfort and temperature control</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">10+ Years</div>
                      <div className="text-sm text-gray-600">System lifespan with maintenance</div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">Improved</div>
                      <div className="text-sm text-gray-600">Indoor air quality and health</div>
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
                        <div className="font-semibold">HVAC Consultation</div>
                        <div className="text-sm text-gray-600">Our HVAC expert will contact you within 24 hours</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</div>
                      <div>
                        <div className="font-semibold">Site Assessment</div>
                        <div className="text-sm text-gray-600">We'll visit your property for detailed HVAC assessment</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</div>
                      <div>
                        <div className="font-semibold">Custom HVAC Proposal</div>
                        <div className="text-sm text-gray-600">Receive your detailed HVAC system proposal</div>
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
          <h2 className="text-3xl font-bold mb-4">Ready for Perfect Climate Control?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who enjoy optimal comfort and energy efficiency with our professional HVAC services.
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
