"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Sun, Building, Wrench, Zap, Droplet, AlertCircle, MapPin, Calculator, Shield } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Enhanced form schema for Ghana solar energy services
const formSchema = z.object({
  // Contact Information
  firstName: z.string().min(2, "First name must be at least 2 characters."),
  lastName: z.string().min(2, "Last name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(10, "Phone number must be at least 10 digits."),

  // Property Information
  propertyType: z.enum(["residential", "commercial", "industrial"]),
  address: z.string().min(5, "Address must be at least 5 characters."),
  city: z.string().min(2, "City name must be at least 2 characters."),
  region: z.string().min(2, "Region must be at least 2 characters."),
  
  // Energy Information
  currentElectricBill: z.string().min(1, "Please select your average monthly electric bill."),
  monthlyConsumption: z.string().optional(),
  peakUsageHours: z.string().optional(),

  // Solar Specific
  roofType: z.string().optional(),
  roofAge: z.string().optional(),
  roofOrientation: z.string().optional(),
  roofCondition: z.string().optional(),
  shadingIssues: z.string().optional(),
  
  // Appliance Inventory
  airConditioners: z.string().optional(),
  refrigerators: z.string().optional(),
  televisions: z.string().optional(),
  washingMachines: z.string().optional(),
  dishwashers: z.string().optional(),
  microwaves: z.string().optional(),
  otherAppliances: z.string().optional(),
  
  // MEP Services
  mepServices: z.array(z.string()).optional(),
  hvacType: z.string().optional(),
  electricalPanelType: z.string().optional(),
  plumbingType: z.string().optional(),
  
  // Project Details
  projectTimeline: z.string().min(1, "Please select a project timeline."),
  budget: z.string().min(1, "Please select a budget range."),
  financingInterest: z.string().optional(),
  
  // Additional Information
  additionalInfo: z.string().optional(),
  preferredContact: z.enum(["email", "phone", "whatsapp", "either"]),
  termsAccepted: z.literal(true, { errorMap: () => ({ message: "You must accept the terms and conditions." }) }),
})

type FormValues = z.infer<typeof formSchema>

export default function QuotePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [formErrors, setFormErrors] = useState<string[]>([])
  const router = useRouter()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      propertyType: "residential",
      address: "",
      city: "",
      region: "",
      currentElectricBill: "",
      monthlyConsumption: "",
      peakUsageHours: "",
      roofType: "",
      roofAge: "",
      roofOrientation: "",
      roofCondition: "",
      shadingIssues: "",
      airConditioners: "",
      refrigerators: "",
      televisions: "",
      washingMachines: "",
      dishwashers: "",
      microwaves: "",
      otherAppliances: "",
      mepServices: [],
      hvacType: "",
      electricalPanelType: "",
      plumbingType: "",
      projectTimeline: "",
      budget: "",
      financingInterest: "",
      additionalInfo: "",
      preferredContact: "either",
      termsAccepted: true,
    },
  })

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log("Form submitted:", data)
      setIsSubmitted(true)
      setTimeout(() => router.push("/"), 3000)
    } catch (error) {
      setFormErrors(["Submission error. Please try again."])
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4))
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1))

  const ghanaRegions = [
    "Greater Accra", "Ashanti", "Western", "Central", "Eastern", 
    "Volta", "Northern", "Upper East", "Upper West", "Bono", 
    "Bono East", "Ahafo", "Western North", "Savannah", "North East"
  ]

  const electricBillRanges = [
    "₵100 - ₵300",
    "₵300 - ₵500", 
    "₵500 - ₵800",
    "₵800 - ₵1,200",
    "₵1,200 - ₵2,000",
    "₵2,000+"
  ]

  const roofTypes = [
    "Corrugated Metal",
    "Concrete Tiles", 
    "Clay Tiles",
    "Asphalt Shingles",
    "Flat Concrete",
    "Other"
  ]

  const projectTimelines = [
    "Immediately",
    "1-2 months",
    "3-6 months", 
    "6-12 months",
    "Planning stage only"
  ]

  const budgetRanges = [
    "₵25,000 - ₵50,000",
    "₵50,000 - ₵100,000",
    "₵100,000 - ₵200,000",
    "₵200,000 - ₵500,000",
    "₵500,000+"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-sarxt-dark to-sarxt-dark/90 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Get Your Free Solar Quote
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Our experts will analyze your energy needs and provide a detailed quote for your solar installation in Ghana.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span>24-Hour Response</span>
                          </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span>No Obligation</span>
                                    </div>
                                  </div>
                                  </div>
                                  </div>
      </section>

      {/* Progress Bar */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentStep >= step ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step}
                                  </div>
                  {step < 4 && (
                    <div className={`w-20 h-1 mx-2 ${
                      currentStep > step ? 'bg-primary' : 'bg-gray-200'
                    }`} />
                  )}
                                  </div>
              ))}
                        </div>
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span>Contact Info</span>
              <span>Property Details</span>
              <span>Energy Needs</span>
              <span>Project Details</span>
                      </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {!isSubmitted ? (
              <Card className="shadow-2xl">
                <CardContent className="p-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                      
                      {/* Step 1: Contact Information */}
                      {currentStep === 1 && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="space-y-6"
                        >
                          <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
                            <p className="text-gray-600">Tell us how to reach you</p>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                  <FormLabel>First Name *</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your first name" {...field} />
                                </FormControl>
                                  <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                  <FormLabel>Last Name *</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your last name" {...field} />
                                </FormControl>
                                  <FormMessage />
                              </FormItem>
                            )}
                          />
                          </div>

                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address *</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="your.email@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number *</FormLabel>
                                <FormControl>
                                  <Input placeholder="+233 XX XXX XXXX" {...field} />
                                </FormControl>
                                <FormDescription>
                                  Include country code for international numbers
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <div className="flex justify-end">
                            <Button type="button" onClick={nextStep} className="bg-primary">
                              Next: Property Details
                            </Button>
                        </div>
                        </motion.div>
                      )}

                      {/* Step 2: Property Information */}
                      {currentStep === 2 && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="space-y-6"
                        >
                          <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold mb-2">Property Information</h2>
                            <p className="text-gray-600">Tell us about your property</p>
                      </div>

                        <FormField
                          control={form.control}
                          name="propertyType"
                          render={({ field }) => (
                            <FormItem>
                                <FormLabel>Property Type *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select property type" />
                                    </SelectTrigger>
                                    </FormControl>
                                  <SelectContent>
                                    <SelectItem value="residential">Residential</SelectItem>
                                    <SelectItem value="commercial">Commercial</SelectItem>
                                    <SelectItem value="industrial">Industrial</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem>
                                <FormLabel>Property Address *</FormLabel>
                              <FormControl>
                                  <Input placeholder="Enter your property address" {...field} />
                              </FormControl>
                                <FormMessage />
                            </FormItem>
                          )}
                        />

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                              <FormItem>
                                  <FormLabel>City *</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your city" {...field} />
                                </FormControl>
                                  <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                              name="region"
                            render={({ field }) => (
                              <FormItem>
                                  <FormLabel>Region *</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select region" />
                                      </SelectTrigger>
                                </FormControl>
                                    <SelectContent>
                                      {ghanaRegions.map((region) => (
                                        <SelectItem key={region} value={region}>
                                          {region}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                              </FormItem>
                            )}
                          />
                          </div>

                          <div className="flex justify-between">
                            <Button type="button" variant="outline" onClick={prevStep}>
                              Previous
                            </Button>
                            <Button type="button" onClick={nextStep} className="bg-primary">
                              Next: Energy Needs
                            </Button>
                          </div>
                        </motion.div>
                      )}

                      {/* Step 3: Energy Information */}
                      {currentStep === 3 && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="space-y-6"
                        >
                          <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold mb-2">Energy Consumption</h2>
                            <p className="text-gray-600">Help us understand your energy needs</p>
                      </div>

                          <FormField
                            control={form.control}
                            name="currentElectricBill"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Average Monthly Electric Bill *</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select your monthly bill range" />
                                    </SelectTrigger>
                                  </FormControl>
                                    <SelectContent>
                                    {electricBillRanges.map((range) => (
                                      <SelectItem key={range} value={range}>
                                        {range}
                                      </SelectItem>
                                    ))}
                                    </SelectContent>
                                  </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="airConditioners"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Number of Air Conditioners</FormLabel>
                                  <FormControl>
                                    <Input placeholder="e.g., 3" {...field} />
                                  </FormControl>
                                  <FormDescription>
                                    How many AC units do you have?
                                  </FormDescription>
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="refrigerators"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Number of Refrigerators</FormLabel>
                                  <FormControl>
                                    <Input placeholder="e.g., 2" {...field} />
                                  </FormControl>
                                </FormItem>
                              )}
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="televisions"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Number of TVs</FormLabel>
                                  <FormControl>
                                    <Input placeholder="e.g., 4" {...field} />
                                  </FormControl>
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="washingMachines"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Washing Machines</FormLabel>
                                  <FormControl>
                                    <Input placeholder="e.g., 1" {...field} />
                                  </FormControl>
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="otherAppliances"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Other Major Appliances</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="List other appliances (dishwasher, microwave, dryer, etc.)"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription>
                                  Include any other high-power appliances you use regularly
                                </FormDescription>
                              </FormItem>
                            )}
                          />

                          <div className="flex justify-between">
                            <Button type="button" variant="outline" onClick={prevStep}>
                              Previous
                            </Button>
                            <Button type="button" onClick={nextStep} className="bg-primary">
                              Next: Project Details
                            </Button>
                        </div>
                        </motion.div>
                      )}

                      {/* Step 4: Project Details */}
                      {currentStep === 4 && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="space-y-6"
                        >
                          <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold mb-2">Project Details</h2>
                            <p className="text-gray-600">Final details to complete your quote</p>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="projectTimeline"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Project Timeline *</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="When do you want to start?" />
                                      </SelectTrigger>
                                    </FormControl>
                                      <SelectContent>
                                      {projectTimelines.map((timeline) => (
                                        <SelectItem key={timeline} value={timeline}>
                                          {timeline}
                                        </SelectItem>
                                      ))}
                                      </SelectContent>
                                    </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="budget"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Budget Range *</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select your budget range" />
                                      </SelectTrigger>
                                    </FormControl>
                                      <SelectContent>
                                      {budgetRanges.map((range) => (
                                        <SelectItem key={range} value={range}>
                                          {range}
                                        </SelectItem>
                                      ))}
                                      </SelectContent>
                                    </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="preferredContact"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Preferred Contact Method *</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="How should we contact you?" />
                                    </SelectTrigger>
                                  </FormControl>
                                    <SelectContent>
                                    <SelectItem value="email">Email</SelectItem>
                                    <SelectItem value="phone">Phone</SelectItem>
                                    <SelectItem value="whatsapp">WhatsApp</SelectItem>
                                    <SelectItem value="either">Either is fine</SelectItem>
                                    </SelectContent>
                                  </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                        <FormField
                          control={form.control}
                          name="additionalInfo"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Additional Information</FormLabel>
                              <FormControl>
                                <Textarea
                                    placeholder="Any special requirements, questions, or additional details about your project..."
                                    {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                  Tell us anything else we should know about your project
                              </FormDescription>
                            </FormItem>
                          )}
                        />

                      <FormField
                        control={form.control}
                        name="termsAccepted"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                                  <FormLabel>
                                    I agree to the terms and conditions *
                              </FormLabel>
                                  <FormDescription>
                                    By submitting this form, you agree to our privacy policy and consent to being contacted about your quote.
                                  </FormDescription>
                            </div>
                          </FormItem>
                        )}
                      />

                          <div className="flex justify-between">
                            <Button type="button" variant="outline" onClick={prevStep}>
                              Previous
                            </Button>
                            <Button type="submit" disabled={isSubmitting} className="bg-primary">
                              {isSubmitting ? "Submitting..." : "Get Free Quote"}
                            </Button>
                      </div>
                        </motion.div>
                      )}
                    </form>
                  </Form>
                </CardContent>
              </Card>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="bg-green-50 border border-green-200 rounded-lg p-8">
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h2>
                  <p className="text-green-700 mb-4">
                    Your quote request has been submitted successfully. Our team will review your information and get back to you within 24 hours.
                  </p>
                  <p className="text-sm text-green-600">
                    Redirecting to homepage...
                  </p>
                </div>
            </motion.div>
          )}
        </div>
      </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Quote Process?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Calculator className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Detailed Analysis</h3>
                <p className="text-gray-600">
                  We analyze your energy consumption patterns to provide the most accurate quote possible.
                </p>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Hidden Costs</h3>
                <p className="text-gray-600">
                  Transparent pricing with no surprises. All costs are clearly outlined in your quote.
                </p>
              </div>
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
                <p className="text-gray-600">
                  Our team understands Ghana's energy landscape and provides tailored solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
