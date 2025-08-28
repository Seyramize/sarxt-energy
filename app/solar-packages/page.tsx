import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Sun, 
  Zap, 
  Calculator, 
  Shield, 
  Clock, 
  CheckCircle, 
  TrendingUp,
  Home,
  Building,
  Users,
  MapPin,
  Phone,
  Mail,
  Wrench
} from "lucide-react"

export default function SolarPackagesPage() {
  const packages = [
    {
      id: "basic",
      title: "Basic Home Package",
      subtitle: "Perfect for small families and apartments",
      price: "₵75,000 - ₵90,000",
      systemSize: "3-5 kW",
      dailyProduction: "20-25 kWh",
      monthlySavings: "₵2,000 - ₵2,500",
      paybackPeriod: "4-5 years",
      color: "from-blue-500 to-blue-600",
      batteryStorage: "10.2 KWH Lithium Powerwall Battery",
      panels: "10 pcs of 550W panels",
      inverter: "5kW Hybrid Inverter",
      features: [
        "10.2KWH Battery Storage Lithium Powerwall Battery",
        "10 pcs of 550W panels",
        "5kW Hybrid Inverter",
        "Grid-tied inverter system with battery backup",
        "Professional installation",
        "10-year warranty",
        "Advanced monitoring system",
        "24/7 technical support",
        "Free maintenance for 2 years"
      ],
      appliances: [
        { name: "1 Air Conditioner (1.5HP)", power: "1.1 kW", dailyUsage: "6 hrs", dailyConsumption: "6.6 kWh" },
        { name: "1 LED TV (55\")", power: "0.1 kW", dailyUsage: "4 hrs", dailyConsumption: "0.4 kWh" },
        { name: "1 Refrigerator", power: "0.15 kW", dailyUsage: "24 hrs", dailyConsumption: "3.6 kWh" },
        { name: "1 Washing Machine", power: "2.0 kW", dailyUsage: "0.5 hrs", dailyConsumption: "1.0 kWh" },
        { name: "1 Microwave", power: "1.2 kW", dailyUsage: "0.3 hrs", dailyConsumption: "0.36 kWh" },
        { name: "LED Lighting (15 bulbs)", power: "0.3 kW", dailyUsage: "4 hrs", dailyConsumption: "1.2 kWh" },
        { name: "Other appliances", power: "0.3 kW", dailyUsage: "3 hrs", dailyConsumption: "0.9 kWh" }
      ],
      totalDailyConsumption: "14.06 kWh",
      solarCoverage: "80-95%",
      recommendedFor: "Small homes, individual offices",
      canPower: "Essential home or office appliances for several hours during outages"
    },
    {
      id: "standard",
      title: "Standard Home Package",
      subtitle: "Ideal for medium-sized families",
      price: "₵115,000 - ₵140,000",
      systemSize: "8-10 kW",
      dailyProduction: "40-50 kWh",
      monthlySavings: "₵3,000 - ₵4,000",
      paybackPeriod: "4-5 years",
      color: "from-green-500 to-green-600",
      batteryStorage: "15.36 KWH Lithium Powerwall Battery",
      panels: "16 pcs of 550W panels",
      inverter: "10kW Hybrid Inverter",
      features: [
        "15.36KWH Battery Storage Lithium Powerwall Battery",
        "16 pcs of 550W panels",
        "10kW Hybrid Inverter",
        "Hybrid inverter system with battery backup",
        "Smart home integration",
        "Professional installation",
        "15-year warranty",
        "Advanced monitoring system",
        "24/7 technical support",
        "Free maintenance for 3 years"
      ],
      appliances: [
        { name: "2 Air Conditioners (1.5HP each)", power: "2.2 kW", dailyUsage: "8 hrs", dailyConsumption: "17.6 kWh" },
        { name: "2 LED TVs (55\" each)", power: "0.2 kW", dailyUsage: "6 hrs", dailyConsumption: "1.2 kWh" },
        { name: "1 Refrigerator", power: "0.15 kW", dailyUsage: "24 hrs", dailyConsumption: "3.6 kWh" },
        { name: "1 Washing Machine", power: "2.0 kW", dailyUsage: "1 hr", dailyConsumption: "2.0 kWh" },
        { name: "1 Microwave", power: "1.2 kW", dailyUsage: "0.5 hrs", dailyConsumption: "0.6 kWh" },
        { name: "1 Dishwasher", power: "1.8 kW", dailyUsage: "1 hr", dailyConsumption: "1.8 kWh" },
        { name: "1 Dryer", power: "3.0 kW", dailyUsage: "1 hr", dailyConsumption: "3.0 kWh" },
        { name: "LED Lighting (25 bulbs)", power: "0.5 kW", dailyUsage: "5 hrs", dailyConsumption: "2.5 kWh" },
        { name: "Other appliances", power: "0.6 kW", dailyUsage: "4 hrs", dailyConsumption: "2.4 kWh" }
      ],
      totalDailyConsumption: "34.7 kWh",
      solarCoverage: "85-95%",
      recommendedFor: "Medium-sized homes, small offices",
      canPower: "Air conditioner, refrigerator, multiple computers, lighting"
    },
    {
      id: "premium",
      title: "Premium Home Package",
      subtitle: "For large families and luxury homes",
      price: "₵155,000 - ₵185,000",
      systemSize: "12-15 kW",
      dailyProduction: "60-75 kWh",
      monthlySavings: "₵4,500 - ₵5,500",
      paybackPeriod: "4-5 years",
      color: "from-purple-500 to-purple-600",
      batteryStorage: "20.48 KWH Lithium Powerwall Battery",
      panels: "24 pcs of 550W panels",
      inverter: "15kW Hybrid Inverter",
      features: [
        "20.48KWH Battery Storage Lithium Powerwall Battery",
        "24 pcs of 550W panels",
        "15kW Hybrid Inverter",
        "Advanced hybrid system with large battery backup",
        "Full smart home automation",
        "Professional installation",
        "20-year warranty",
        "AI-powered monitoring system",
        "24/7 premium support",
        "Free maintenance for 5 years",
        "Energy optimization software",
        "Real-time monitoring app"
      ],
      appliances: [
        { name: "3 Air Conditioners (1.5HP each)", power: "3.3 kW", dailyUsage: "8 hrs", dailyConsumption: "26.4 kWh" },
        { name: "3 LED TVs (55\" each)", power: "0.3 kW", dailyUsage: "6 hrs", dailyConsumption: "1.8 kWh" },
        { name: "1 Refrigerator", power: "0.15 kW", dailyUsage: "24 hrs", dailyConsumption: "3.6 kWh" },
        { name: "1 Washing Machine", power: "2.0 kW", dailyUsage: "1.5 hrs", dailyConsumption: "3.0 kWh" },
        { name: "1 Microwave", power: "1.2 kW", dailyUsage: "1 hr", dailyConsumption: "1.2 kWh" },
        { name: "1 Dishwasher", power: "1.8 kW", dailyUsage: "1.5 hrs", dailyConsumption: "2.7 kWh" },
        { name: "1 Dryer", power: "3.0 kW", dailyUsage: "1.5 hrs", dailyConsumption: "4.5 kWh" },
        { name: "LED Lighting (35 bulbs)", power: "0.7 kW", dailyUsage: "5 hrs", dailyConsumption: "3.5 kWh" },
        { name: "Other appliances", power: "0.8 kW", dailyUsage: "4 hrs", dailyConsumption: "3.2 kWh" }
      ],
      totalDailyConsumption: "50.7 kWh",
      solarCoverage: "80-90%",
      recommendedFor: "Large homes, medium-sized offices",
      canPower: "Multiple air conditioners, refrigerators, computers, and other appliances"
    },
    {
      id: "luxury",
      title: "Luxury Home Package",
      subtitle: "Ultimate solar solution for premium homes",
      price: "₵210,000 - ₵250,000",
      systemSize: "16-20 kW",
      dailyProduction: "80-100 kWh",
      monthlySavings: "₵6,000 - ₵7,500",
      paybackPeriod: "4-5 years",
      color: "from-red-500 to-red-600",
      batteryStorage: "30.72 KWH Lithium Powerwall Battery",
      panels: "32 pcs of 550W panels",
      inverter: "20kW Hybrid Inverter",
      features: [
        "30.72KWH Battery Storage Lithium Powerwall Battery",
        "32 pcs of 550W panels",
        "20kW Hybrid Inverter",
        "Advanced hybrid system with large battery backup",
        "Full smart home automation",
        "Professional installation",
        "25-year warranty",
        "AI-powered monitoring system",
        "24/7 premium support",
        "Lifetime maintenance",
        "Energy management dashboard",
        "Grid-tie capability with battery backup",
        "EV charging station integration"
      ],
      appliances: [
        { name: "4 Air Conditioners (1.5HP each)", power: "4.4 kW", dailyUsage: "8 hrs", dailyConsumption: "35.2 kWh" },
        { name: "4 LED TVs (65\" each)", power: "0.4 kW", dailyUsage: "6 hrs", dailyConsumption: "2.4 kWh" },
        { name: "2 Refrigerators", power: "0.3 kW", dailyUsage: "24 hrs", dailyConsumption: "7.2 kWh" },
        { name: "1 Washing Machine", power: "2.0 kW", dailyUsage: "2 hrs", dailyConsumption: "4.0 kWh" },
        { name: "1 Microwave", power: "1.2 kW", dailyUsage: "1.5 hrs", dailyConsumption: "1.8 kWh" },
        { name: "1 Dishwasher", power: "1.8 kW", dailyUsage: "2 hrs", dailyConsumption: "3.6 kWh" },
        { name: "1 Dryer", power: "3.0 kW", dailyUsage: "2 hrs", dailyConsumption: "6.0 kWh" },
        { name: "LED Lighting (50 bulbs)", power: "1.0 kW", dailyUsage: "5 hrs", dailyConsumption: "5.0 kWh" },
        { name: "Office Equipment", power: "1.5 kW", dailyUsage: "8 hrs", dailyConsumption: "12.0 kWh" }
      ],
      totalDailyConsumption: "77.2 kWh",
      solarCoverage: "70-85%",
      recommendedFor: "Large homes, small to medium-sized businesses",
      canPower: "Multiple air conditioners, refrigerators, lighting systems, and office equipment"
    },
    {
      id: "commercial",
      title: "Commercial Business Package",
      subtitle: "For medium-sized businesses and offices",
      price: "₵350,000 - ₵420,000",
      systemSize: "30-45 kW",
      dailyProduction: "180-225 kWh",
      monthlySavings: "₵12,000 - ₵15,000",
      paybackPeriod: "4-5 years",
      color: "from-orange-500 to-orange-600",
      batteryStorage: "51.2 KWH Lithium Powerwall Battery",
      panels: "50 pcs of 550W panels",
      inverter: "45kW Hybrid Inverter",
      features: [
        "51.2KWH Battery Storage Lithium Powerwall Battery",
        "50 pcs of 550W panels",
        "45kW Hybrid Inverter",
        "Advanced hybrid system with large battery backup",
        "Full commercial automation",
        "Professional installation",
        "30-year warranty",
        "AI-powered monitoring system",
        "24/7 commercial support",
        "Lifetime maintenance",
        "Energy management dashboard",
        "EV charging station integration",
        "Industrial UPS integration",
        "Suitable for ensuring uninterrupted power supply"
      ],
      appliances: [
        { name: "5+ Air Conditioners (2HP each)", power: "7.5 kW", dailyUsage: "8 hrs", dailyConsumption: "60.0 kWh" },
        { name: "Multiple LED TVs (75\" each)", power: "0.6 kW", dailyUsage: "6 hrs", dailyConsumption: "3.6 kWh" },
        { name: "2 Refrigerators + 1 Freezer", power: "0.45 kW", dailyUsage: "24 hrs", dailyConsumption: "10.8 kWh" },
        { name: "2 Washing Machines", power: "4.0 kW", dailyUsage: "2.5 hrs", dailyConsumption: "10.0 kWh" },
        { name: "2 Microwaves", power: "2.4 kW", dailyUsage: "1.5 hrs", dailyConsumption: "3.6 kWh" },
        { name: "2 Dishwashers", power: "3.6 kW", dailyUsage: "2.5 hrs", dailyConsumption: "9.0 kWh" },
        { name: "2 Dryers", power: "6.0 kW", dailyUsage: "2.5 hrs", dailyConsumption: "15.0 kWh" },
        { name: "Automated Gate System", power: "0.5 kW", dailyUsage: "2 hrs", dailyConsumption: "1.0 kWh" },
        { name: "LED Lighting (80+ bulbs)", power: "1.6 kW", dailyUsage: "5 hrs", dailyConsumption: "8.0 kWh" },
        { name: "Server Room Equipment", power: "3.0 kW", dailyUsage: "24 hrs", dailyConsumption: "72.0 kWh" }
      ],
      totalDailyConsumption: "193.0 kWh",
      solarCoverage: "85-95%",
      recommendedFor: "Large offices, businesses with branches, servers or data centers",
      canPower: "Multiple heavy-duty appliances, extensive lighting systems, server rooms"
    },
    {
      id: "enterprise",
      title: "Enterprise Solution Package",
      subtitle: "For large enterprises and industrial facilities",
      price: "₵500,000 - ₵600,000",
      systemSize: "40-50 kW",
      dailyProduction: "200-250 kWh",
      monthlySavings: "₵12,000 - ₵16,000",
      paybackPeriod: "4-5 years",
      color: "from-indigo-500 to-indigo-600",
      batteryStorage: "61.44 KWH Lithium Powerwall Battery",
      panels: "60 pcs of 550W panels",
      inverter: "50kW Hybrid Inverter",
      features: [
        "61.44KWH Battery Storage Lithium Powerwall Battery",
        "60 pcs of 550W panels",
        "50kW Hybrid Inverter",
        "Industrial-grade hybrid system with massive battery backup",
        "Full enterprise automation and monitoring",
        "Professional installation with industrial standards",
        "35-year warranty",
        "AI-powered predictive maintenance",
        "24/7 enterprise support",
        "Lifetime maintenance and upgrades",
        "Advanced energy management dashboard",
        "Multiple EV charging stations",
        "Industrial UPS integration",
        "Remote monitoring and control",
        "Load balancing and peak shaving"
      ],
      appliances: [
        { name: "8+ Air Conditioners (3HP each)", power: "18.0 kW", dailyUsage: "10 hrs", dailyConsumption: "180.0 kWh" },
        { name: "Multiple LED TVs and Displays", power: "1.2 kW", dailyUsage: "8 hrs", dailyConsumption: "9.6 kWh" },
        { name: "3 Refrigerators + 2 Freezers", power: "0.75 kW", dailyUsage: "24 hrs", dailyConsumption: "18.0 kWh" },
        { name: "3 Washing Machines", power: "6.0 kW", dailyUsage: "3 hrs", dailyConsumption: "18.0 kWh" },
        { name: "3 Microwaves", power: "3.6 kW", dailyUsage: "2 hrs", dailyConsumption: "7.2 kWh" },
        { name: "3 Dishwashers", power: "5.4 kW", dailyUsage: "3 hrs", dailyConsumption: "16.2 kWh" },
        { name: "3 Dryers", power: "9.0 kW", dailyUsage: "3 hrs", dailyConsumption: "27.0 kWh" },
        { name: "Automated Systems", power: "1.5 kW", dailyUsage: "3 hrs", dailyConsumption: "4.5 kWh" },
        { name: "LED Lighting (120+ bulbs)", power: "2.4 kW", dailyUsage: "6 hrs", dailyConsumption: "14.4 kWh" },
        { name: "Server Room & IT Equipment", power: "5.0 kW", dailyUsage: "24 hrs", dailyConsumption: "120.0 kWh" },
        { name: "Industrial Equipment", power: "8.0 kW", dailyUsage: "12 hrs", dailyConsumption: "96.0 kWh" }
      ],
      totalDailyConsumption: "510.9 kWh",
      solarCoverage: "40-55%",
      recommendedFor: "Large enterprises, industrial facilities, data centers",
      canPower: "Complete enterprise operations, industrial equipment, extensive IT infrastructure"
    }
  ]

  const benefits = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Immediate Savings",
      description: "Start saving on your electricity bills from day one"
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-sarxt-dark to-sarxt-dark/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Solar Packages for Every Home
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Choose the perfect solar solution based on your household energy consumption. 
              Our detailed analysis ensures optimal system sizing for maximum savings.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-sarxt-dark">
                <Link href="/quote">Get Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-sarxt-dark hover:bg-white hover:text-sarxt-dark">
                <Link href="#packages">View Packages</Link>
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
              Why Choose Our Solar Packages?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each package is carefully designed based on real energy consumption data from Ghanaian households
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

      {/* Packages Section */}
      <section id="packages" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Detailed Solar Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive analysis of your energy needs with precise system recommendations
            </p>
          </div>
          
          <div className="space-y-16">
            {packages.map((pkg, index) => (
              <Card key={pkg.id} className="overflow-hidden shadow-2xl">
                <CardHeader className={`bg-gradient-to-r ${pkg.color} text-white`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                      <CardDescription className="text-white/90 mt-2">
                        {pkg.subtitle}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="text-lg px-4 py-2">
                      {pkg.systemSize}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                    {/* Left Column - Package Details */}
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="text-sm text-gray-600">Investment</div>
                          <div className="text-xl font-bold text-primary">{pkg.price}</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="text-sm text-gray-600">Monthly Savings</div>
                          <div className="text-xl font-bold text-green-600">{pkg.monthlySavings}</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="text-sm text-gray-600">Daily Production</div>
                          <div className="text-xl font-bold">{pkg.dailyProduction}</div>
                        </div>

                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-blue-800 mb-2">System Specifications:</h4>
                        <p className="text-sm text-blue-700 mb-2">{pkg.batteryStorage}</p>
                        <p className="text-sm text-blue-700 mb-2">{pkg.panels}</p>
                        <p className="text-sm text-blue-700">{pkg.inverter}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Package Features:</h4>
                        <ul className="space-y-2">
                          {pkg.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Ideal For:</h4>
                        <p className="text-gray-600">{pkg.recommendedFor}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Can Power:</h4>
                        <p className="text-gray-600">{pkg.canPower}</p>
                      </div>
                    </div>

                    {/* Right Column - Energy Analysis */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-4">Detailed Energy Consumption Analysis</h4>
                        <div className="space-y-3">
                          {pkg.appliances.map((appliance, idx) => (
                            <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <div className="flex-1">
                                <div className="font-medium text-sm">{appliance.name}</div>
                                <div className="text-xs text-gray-600">
                                  {appliance.power} × {appliance.dailyUsage}
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="font-semibold">{appliance.dailyConsumption}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-primary/10 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold">Total Daily Consumption:</span>
                          <span className="text-xl font-bold text-primary">{pkg.totalDailyConsumption}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">Solar Coverage:</span>
                          <span className="text-xl font-bold text-green-600">{pkg.solarCoverage}</span>
                        </div>
                      </div>

                      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                        <h5 className="font-semibold text-yellow-800 mb-2">💡 Energy Saving Tips:</h5>
                        <ul className="text-sm text-yellow-700 space-y-1">
                          <li>• Use energy-efficient appliances</li>
                          <li>• Optimize AC usage during peak solar hours</li>
                          <li>• Consider battery backup for night usage</li>
                          <li>• Regular system maintenance for optimal performance</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="bg-gray-50 p-6 border-t">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                      <div>
                        <h4 className="font-semibold">Ready to get started?</h4>
                        <p className="text-gray-600">Get a detailed quote for this package</p>
                      </div>
                      <div className="flex gap-3">
                        <Button asChild variant="outline">
                          <Link href="/quote">Get Quote</Link>
                        </Button>
                        <Button asChild>
                          <Link href="/contact">Contact Us</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Breakdown Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Transparent Pricing Breakdown</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our pricing includes all costs associated with importing, installing, and commissioning your solar system in Ghana
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="shadow-lg">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center">
                  <Calculator className="h-5 w-5 mr-2 text-blue-600" />
                  Equipment Costs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Solar Panels (550W)</span>
                  <span className="font-semibold">₵2,000-3,500/panel</span>
                </div>
                <div className="flex justify-between">
                  <span>Lithium Batteries</span>
                  <span className="font-semibold">₵15,000-65,000/kWh</span>
                </div>
                <div className="flex justify-between">
                  <span>Hybrid Inverters</span>
                  <span className="font-semibold">₵8,000-25,000/kW</span>
                </div>
                <div className="flex justify-between">
                  <span>Mounting & Accessories</span>
                  <span className="font-semibold">₵500-1000/panel</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between font-bold">
                    <span>Subtotal</span>
                    <span>60-70% of total</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="bg-green-50">
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-green-600" />
                  Import & Taxes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Import Duties (5-20%)</span>
                  <span className="font-semibold">₵15,000-50,000</span>
                </div>
                <div className="flex justify-between">
                  <span>VAT (12.5%)</span>
                  <span className="font-semibold">₵12,000-40,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Customs Processing</span>
                  <span className="font-semibold">₵5,000-15,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping & Logistics</span>
                  <span className="font-semibold">₵8,000-25,000</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between font-bold">
                    <span>Subtotal</span>
                    <span>15-20% of total</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="bg-purple-50">
                <CardTitle className="flex items-center">
                  <Wrench className="h-5 w-5 mr-2 text-purple-600" />
                  Installation & Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Site Survey & Design</span>
                  <span className="font-semibold">₵3,000-8,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Professional Installation</span>
                  <span className="font-semibold">₵8,000-20,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Electrical Work</span>
                  <span className="font-semibold">₵5,000-15,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Grid Connection & Permits</span>
                  <span className="font-semibold">₵3,000-10,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Testing & Commissioning</span>
                  <span className="font-semibold">₵2,000-5,000</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between font-bold">
                    <span>Subtotal</span>
                    <span>10-15% of total</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg inline-block">
              <h3 className="text-xl font-bold mb-2">Why Our Pricing is Competitive</h3>
              <p className="text-gray-600 max-w-2xl">
                We source directly from manufacturers, handle all import logistics, and provide complete installation services. 
                Our pricing reflects the true cost of quality solar systems in Ghana, including all taxes, duties, and professional workmanship.
              </p>
            </div>
          </div>

          {/* Pricing Disclaimer */}
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">📢 Important Pricing Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-yellow-700">
                <div>
                  <h4 className="font-semibold mb-2">Price Variations</h4>
                  <ul className="space-y-1">
                    <li>Prices may increase or decrease based on, inclusive of:</li>
                    <li>• Changes in requirements or specifications</li>
                    <li>• Current exchange rates (USD/GHS)</li>
                    <li>• Import duties and tax changes</li>
                    <li>• Deadlines may be impacted by Logistics and supply chain conditions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">What We Guarantee</h4>
                  <ul className="space-y-1">
                    <li>• Transparent pricing with no hidden costs</li>
                    <li>• Free detailed quote before commitment</li>
                    <li>• Firm price for 15 days "subject to conditions"</li>
                    <li>• Quality equipment with full warranties</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-yellow-100 rounded-lg">
                <p className="text-yellow-800 font-medium">
                  💡 <strong>Get Your Quote:</strong> Contact us for a personalized quote based on your specific requirements and current market conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">What's Included in Every Package?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Site Survey & Energy Audit</h4>
                    <p className="text-gray-600">Comprehensive analysis of your energy consumption patterns</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Custom System Design</h4>
                    <p className="text-gray-600">Tailored solution based on your specific needs and roof configuration</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Professional Installation</h4>
                    <p className="text-gray-600">Certified technicians with years of experience in Ghana</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Grid Connection</h4>
                    <p className="text-gray-600">Assistance with ECG connection and net metering setup</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Training & Support</h4>
                    <p className="text-gray-600">Complete training on system operation and maintenance</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Financing Options</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-600">Cash Payment</h4>
                  <p className="text-gray-600">Pay upfront and enjoy maximum savings from day one</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600">Installment Plan</h4>
                  <p className="text-gray-600">Spread payments over 12-24 months with 0% interest</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-600">Bank Financing</h4>
                  <p className="text-gray-600">Partner with local banks for competitive loan rates</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-600">Lease-to-Own</h4>
                  <p className="text-gray-600">Start saving immediately with flexible ownership options</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sarxt-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Solar Journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free consultation and detailed quote. Our experts will analyze your energy needs 
            and recommend the perfect solar solution for your home.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-sarxt-dark">
              <Link href="/quote">Get a Quote</Link>
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
