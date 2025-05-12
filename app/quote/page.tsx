"use client"

import { useState } from "react"
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
import { CheckCircle, Sun, Building, Wrench, Zap, Droplet, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Define the form schema with Zod and enhanced validation
const formSchema = z.object({
  // Contact Information
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters." })
    .max(50, { message: "First name cannot exceed 50 characters." })
    .regex(/^[a-zA-Z\s\-']+$/, {
      message: "First name can only contain letters, spaces, hyphens, and apostrophes.",
    }),

  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters." })
    .max(50, { message: "Last name cannot exceed 50 characters." })
    .regex(/^[a-zA-Z\s\-']+$/, {
      message: "Last name can only contain letters, spaces, hyphens, and apostrophes.",
    }),

  email: z
    .string()
    .email({ message: "Please enter a valid email address (e.g., name@example.com)." })
    .min(5, { message: "Email address is too short." })
    .max(100, { message: "Email address cannot exceed 100 characters." }),

  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." })
    .max(20, { message: "Phone number cannot exceed 20 characters." })
    .regex(/^[0-9$$$$\-.+\s]+$/, {
      message: "Phone number can only contain digits, spaces, and the following characters: ( ) - . +",
    })
    .refine(
      (val) => {
        // Count only digits
        const digitCount = val.replace(/\D/g, "").length
        return digitCount >= 10
      },
      {
        message: "Phone number must contain at least 10 digits.",
      },
    ),

  // Property Information
  propertyType: z.enum(["residential", "commercial", "industrial"], {
    errorMap: () => ({ message: "Please select a property type." }),
  }),

  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters." })
    .max(100, { message: "Address cannot exceed 100 characters." }),

  city: z
    .string()
    .min(2, { message: "City name must be at least 2 characters." })
    .max(50, { message: "City name cannot exceed 50 characters." })
    .regex(/^[a-zA-Z\s\-'.]+$/, {
      message: "City name can only contain letters, spaces, hyphens, apostrophes, and periods.",
    }),

  state: z
    .string()
    .min(2, { message: "State must be at least 2 characters." })
    .max(20, { message: "State cannot exceed 20 characters." }),

  zipCode: z
    .string()
    .min(5, { message: "Zip code must be at least 5 characters." })
    .max(10, { message: "Zip code cannot exceed 10 characters." })
    .regex(/^[0-9-]+$/, {
      message: "Zip code can only contain numbers and hyphens.",
    }),

  // Service Information
  serviceType: z.enum(["solar", "mechanical", "electrical", "plumbing", "multiple"], {
    errorMap: () => ({ message: "Please select a service type." }),
  }),

  // Solar Specific
  currentElectricBill: z
    .string()
    .optional()
    .refine((val) => val === undefined || val.length > 0, {
      message: "Please select your average monthly electric bill.",
      path: ["currentElectricBill"],
    }),

  roofType: z
    .string()
    .optional()
    .refine((val) => val === undefined || val.length > 0, {
      message: "Please select your roof type.",
      path: ["roofType"],
    }),

  roofAge: z
    .string()
    .optional()
    .refine((val) => val === undefined || val.length > 0, {
      message: "Please select your roof age.",
      path: ["roofAge"],
    }),

  // Mechanical Specific
  hvacType: z
    .string()
    .optional()
    .refine((val) => val === undefined || val.length > 0, {
      message: "Please select your HVAC system type.",
      path: ["hvacType"],
    }),

  hvacAge: z
    .string()
    .optional()
    .refine((val) => val === undefined || val.length > 0, {
      message: "Please select your HVAC system age.",
      path: ["hvacAge"],
    }),

  squareFootage: z
    .string()
    .optional()
    .refine((val) => val === undefined || val.length > 0, {
      message: "Please enter the square footage of your property.",
      path: ["squareFootage"],
    })
    .refine((val) => val === undefined || /^\d+$/.test(val), {
      message: "Square footage must be a number.",
      path: ["squareFootage"],
    }),

  // Electrical Specific
  electricalServiceType: z
    .string()
    .optional()
    .refine((val) => val === undefined || val.length > 0, {
      message: "Please select your electrical service type.",
      path: ["electricalServiceType"],
    }),

  electricalPanelAge: z
    .string()
    .optional()
    .refine((val) => val === undefined || val.length > 0, {
      message: "Please select your electrical panel age.",
      path: ["electricalPanelAge"],
    }),

  // Plumbing Specific
  plumbingType: z
    .string()
    .optional()
    .refine((val) => val === undefined || val.length > 0, {
      message: "Please select your plumbing pipe type.",
      path: ["plumbingType"],
    }),

  plumbingAge: z
    .string()
    .optional()
    .refine((val) => val === undefined || val.length > 0, {
      message: "Please select your plumbing system age.",
      path: ["plumbingAge"],
    }),

  // General
  projectTimeline: z.string({
    required_error: "Please select a project timeline.",
  }),

  budget: z.string({
    required_error: "Please select a budget range.",
  }),

  additionalInfo: z
    .string()
    .max(1000, {
      message: "Additional information cannot exceed 1000 characters.",
    })
    .optional(),

  preferredContact: z.enum(["email", "phone", "either"], {
    errorMap: () => ({ message: "Please select a preferred contact method." }),
  }),

  // Terms
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions to proceed." }),
  }),
})

type FormValues = z.infer<typeof formSchema>

export default function QuotePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formErrors, setFormErrors] = useState<string[]>([])
  const [attemptedSubmit, setAttemptedSubmit] = useState(false)
  const router = useRouter()

  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      propertyType: "residential",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      serviceType: "solar",
      projectTimeline: "1-3 months",
      budget: "under-10k",
      preferredContact: "either",
      termsAccepted: false,
      additionalInfo: "",
    },
    mode: "onChange", // Only validate on change
    criteriaMode: "all", // Show all validation errors
    shouldFocusError: true,
  })

  // Watch the service type to conditionally render fields
  const serviceType = form.watch("serviceType")

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    setFormErrors([])
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log("Form submitted:", data)
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Redirect after 3 seconds
      setTimeout(() => {
        router.push("/")
      }, 3000)
    } catch (error) {
      setIsSubmitting(false)
      setFormErrors(["There was an error submitting your form. Please try again."])
      console.error("Form submission error:", error)
    }
  }

  // Handle form errors
  const onError = (errors: any) => {
    console.error("Form validation errors:", errors)
    setAttemptedSubmit(true)

    // Create a list of error messages
    const errorMessages = Object.values(errors)
      .map((error: any) => error?.message)
      .filter(Boolean)

    setFormErrors(errorMessages as string[])

    // Scroll to the top of the form to show errors
    window.scrollTo({
      top: document.getElementById("quote-form")?.offsetTop || 0,
      behavior: "smooth",
    })
  }

  // Function to check if a field should show error
  const shouldShowError = (fieldName: string) => {
    return attemptedSubmit || (form.formState.touchedFields as any)[fieldName]
  }

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {!isSubmitted ? (
            <>
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Request a Quote</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Fill out the form below to get a personalized quote for your project. Our team will review your
                  information and get back to you within 24-48 hours.
                </p>
              </div>

              {attemptedSubmit && formErrors.length > 0 && (
                <Alert variant="destructive" className="mb-6">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Please correct the following errors:</AlertTitle>
                  <AlertDescription>
                    <ul className="list-disc pl-5 mt-2">
                      {formErrors.map((error, index) => (
                        <li key={index}>{error}</li>
                      ))}
                    </ul>
                  </AlertDescription>
                </Alert>
              )}

              <Card className="border-none shadow-xl" id="quote-form">
                <CardContent className="p-6 sm:p-10">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit, onError)} className="space-y-8">
                      {/* Service Selection */}
                      <div className="space-y-4">
                        <h2 className="text-xl font-semibold">What service are you interested in?</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                          <FormField
                            control={form.control}
                            name="serviceType"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <div className="space-y-4">
                                    <div
                                      className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                        field.value === "solar"
                                          ? "border-primary bg-primary/5"
                                          : "border-gray-200 hover:border-primary/50"
                                      }`}
                                      onClick={() => field.onChange("solar")}
                                    >
                                      <Sun
                                        className={`h-8 w-8 mb-2 ${field.value === "solar" ? "text-primary" : "text-gray-500"}`}
                                      />
                                      <span
                                        className={
                                          field.value === "solar" ? "font-medium text-primary" : "text-gray-700"
                                        }
                                      >
                                        Solar
                                      </span>
                                      <input
                                        type="radio"
                                        className="sr-only"
                                        {...field}
                                        value="solar"
                                        checked={field.value === "solar"}
                                      />
                                    </div>
                                  </div>
                                </FormControl>
                                {shouldShowError("serviceType") && <FormMessage />}
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="serviceType"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <div
                                    className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                      field.value === "mechanical"
                                        ? "border-primary bg-primary/5"
                                        : "border-gray-200 hover:border-primary/50"
                                    }`}
                                    onClick={() => field.onChange("mechanical")}
                                  >
                                    <Wrench
                                      className={`h-8 w-8 mb-2 ${field.value === "mechanical" ? "text-primary" : "text-gray-500"}`}
                                    />
                                    <span
                                      className={
                                        field.value === "mechanical" ? "font-medium text-primary" : "text-gray-700"
                                      }
                                    >
                                      HVAC
                                    </span>
                                    <input
                                      type="radio"
                                      className="sr-only"
                                      {...field}
                                      value="mechanical"
                                      checked={field.value === "mechanical"}
                                    />
                                  </div>
                                </FormControl>
                                {shouldShowError("serviceType") && <FormMessage />}
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="serviceType"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <div
                                    className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                      field.value === "electrical"
                                        ? "border-primary bg-primary/5"
                                        : "border-gray-200 hover:border-primary/50"
                                    }`}
                                    onClick={() => field.onChange("electrical")}
                                  >
                                    <Zap
                                      className={`h-8 w-8 mb-2 ${field.value === "electrical" ? "text-primary" : "text-gray-500"}`}
                                    />
                                    <span
                                      className={
                                        field.value === "electrical" ? "font-medium text-primary" : "text-gray-700"
                                      }
                                    >
                                      Electrical
                                    </span>
                                    <input
                                      type="radio"
                                      className="sr-only"
                                      {...field}
                                      value="electrical"
                                      checked={field.value === "electrical"}
                                    />
                                  </div>
                                </FormControl>
                                {shouldShowError("serviceType") && <FormMessage />}
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="serviceType"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <div
                                    className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                      field.value === "plumbing"
                                        ? "border-primary bg-primary/5"
                                        : "border-gray-200 hover:border-primary/50"
                                    }`}
                                    onClick={() => field.onChange("plumbing")}
                                  >
                                    <Droplet
                                      className={`h-8 w-8 mb-2 ${field.value === "plumbing" ? "text-primary" : "text-gray-500"}`}
                                    />
                                    <span
                                      className={
                                        field.value === "plumbing" ? "font-medium text-primary" : "text-gray-700"
                                      }
                                    >
                                      Plumbing
                                    </span>
                                    <input
                                      type="radio"
                                      className="sr-only"
                                      {...field}
                                      value="plumbing"
                                      checked={field.value === "plumbing"}
                                    />
                                  </div>
                                </FormControl>
                                {shouldShowError("serviceType") && <FormMessage />}
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="serviceType"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <div
                                    className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                      field.value === "multiple"
                                        ? "border-primary bg-primary/5"
                                        : "border-gray-200 hover:border-primary/50"
                                    }`}
                                    onClick={() => field.onChange("multiple")}
                                  >
                                    <Building
                                      className={`h-8 w-8 mb-2 ${field.value === "multiple" ? "text-primary" : "text-gray-500"}`}
                                    />
                                    <span
                                      className={
                                        field.value === "multiple" ? "font-medium text-primary" : "text-gray-700"
                                      }
                                    >
                                      Multiple
                                    </span>
                                    <input
                                      type="radio"
                                      className="sr-only"
                                      {...field}
                                      value="multiple"
                                      checked={field.value === "multiple"}
                                    />
                                  </div>
                                </FormControl>
                                {shouldShowError("serviceType") && <FormMessage />}
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      {/* Contact Information */}
                      <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Contact Information</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>
                                  First Name <span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="John"
                                    {...field}
                                    className={
                                      shouldShowError("firstName") && form.formState.errors.firstName
                                        ? "border-red-500"
                                        : ""
                                    }
                                  />
                                </FormControl>
                                <FormDescription>Enter your legal first name.</FormDescription>
                                {shouldShowError("firstName") && <FormMessage />}
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>
                                  Last Name <span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Doe"
                                    {...field}
                                    className={
                                      shouldShowError("lastName") && form.formState.errors.lastName
                                        ? "border-red-500"
                                        : ""
                                    }
                                  />
                                </FormControl>
                                <FormDescription>Enter your legal last name.</FormDescription>
                                {shouldShowError("lastName") && <FormMessage />}
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>
                                  Email <span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="john@example.com"
                                    type="email"
                                    {...field}
                                    className={
                                      shouldShowError("email") && form.formState.errors.email ? "border-red-500" : ""
                                    }
                                  />
                                </FormControl>
                                <FormDescription>We'll send your quote to this email address.</FormDescription>
                                {shouldShowError("email") && <FormMessage />}
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>
                                  Phone <span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="(123) 456-7890"
                                    {...field}
                                    className={
                                      shouldShowError("phone") && form.formState.errors.phone ? "border-red-500" : ""
                                    }
                                  />
                                </FormControl>
                                <FormDescription>Format: (123) 456-7890 or 123-456-7890</FormDescription>
                                {shouldShowError("phone") && <FormMessage />}
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      {/* Property Information */}
                      <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Property Information</h2>

                        <FormField
                          control={form.control}
                          name="propertyType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                Property Type <span className="text-red-500">*</span>
                              </FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="flex flex-col sm:flex-row gap-4"
                                >
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="residential" />
                                    </FormControl>
                                    <FormLabel className="font-normal cursor-pointer">Residential</FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="commercial" />
                                    </FormControl>
                                    <FormLabel className="font-normal cursor-pointer">Commercial</FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="industrial" />
                                    </FormControl>
                                    <FormLabel className="font-normal cursor-pointer">Industrial</FormLabel>
                                  </FormItem>
                                </RadioGroup>
                              </FormControl>
                              <FormDescription>Select the type of property for this project.</FormDescription>
                              {shouldShowError("propertyType") && <FormMessage />}
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                Street Address <span className="text-red-500">*</span>
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="123 Main St"
                                  {...field}
                                  className={
                                    shouldShowError("address") && form.formState.errors.address ? "border-red-500" : ""
                                  }
                                />
                              </FormControl>
                              <FormDescription>Enter the full street address of the property.</FormDescription>
                              {shouldShowError("address") && <FormMessage />}
                            </FormItem>
                          )}
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>
                                  City <span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Anytown"
                                    {...field}
                                    className={
                                      shouldShowError("city") && form.formState.errors.city ? "border-red-500" : ""
                                    }
                                  />
                                </FormControl>
                                {shouldShowError("city") && <FormMessage />}
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="state"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>
                                  State <span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="CA"
                                    {...field}
                                    className={
                                      shouldShowError("state") && form.formState.errors.state ? "border-red-500" : ""
                                    }
                                  />
                                </FormControl>
                                {shouldShowError("state") && <FormMessage />}
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="zipCode"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>
                                  Zip Code <span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="12345"
                                    {...field}
                                    className={
                                      shouldShowError("zipCode") && form.formState.errors.zipCode
                                        ? "border-red-500"
                                        : ""
                                    }
                                  />
                                </FormControl>
                                <FormDescription>Format: 12345 or 12345-6789</FormDescription>
                                {shouldShowError("zipCode") && <FormMessage />}
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      {/* Service Specific Information */}
                      {serviceType === "solar" && (
                        <div className="space-y-4">
                          <h2 className="text-xl font-semibold">Solar System Information</h2>

                          <FormField
                            control={form.control}
                            name="currentElectricBill"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>
                                  Average Monthly Electric Bill <span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger
                                      className={
                                        shouldShowError("currentElectricBill") &&
                                        form.formState.errors.currentElectricBill
                                          ? "border-red-500"
                                          : ""
                                      }
                                    >
                                      <SelectValue placeholder="Select your average monthly bill" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="under-100">Under $100</SelectItem>
                                      <SelectItem value="100-200">$100 - $200</SelectItem>
                                      <SelectItem value="200-300">$200 - $300</SelectItem>
                                      <SelectItem value="300-400">$300 - $400</SelectItem>
                                      <SelectItem value="400-500">$400 - $500</SelectItem>
                                      <SelectItem value="over-500">Over $500</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </FormControl>
                                <FormDescription>
                                  This helps us estimate the size of solar system you might need.
                                </FormDescription>
                                {shouldShowError("currentElectricBill") && <FormMessage />}
                              </FormItem>
                            )}
                          />

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="roofType"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>
                                    Roof Type <span className="text-red-500">*</span>
                                  </FormLabel>
                                  <FormControl>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                      <SelectTrigger
                                        className={
                                          shouldShowError("roofType") && form.formState.errors.roofType
                                            ? "border-red-500"
                                            : ""
                                        }
                                      >
                                        <SelectValue placeholder="Select roof type" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="asphalt">Asphalt Shingle</SelectItem>
                                        <SelectItem value="metal">Metal</SelectItem>
                                        <SelectItem value="tile">Tile</SelectItem>
                                        <SelectItem value="flat">Flat/Low Slope</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </FormControl>
                                  <FormDescription>
                                    Different roof types require different mounting solutions.
                                  </FormDescription>
                                  {shouldShowError("roofType") && <FormMessage />}
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="roofAge"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>
                                    Roof Age <span className="text-red-500">*</span>
                                  </FormLabel>
                                  <FormControl>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                      <SelectTrigger
                                        className={
                                          shouldShowError("roofAge") && form.formState.errors.roofAge
                                            ? "border-red-500"
                                            : ""
                                        }
                                      >
                                        <SelectValue placeholder="Select roof age" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="0-5">0-5 years</SelectItem>
                                        <SelectItem value="6-10">6-10 years</SelectItem>
                                        <SelectItem value="11-15">11-15 years</SelectItem>
                                        <SelectItem value="16-20">16-20 years</SelectItem>
                                        <SelectItem value="over-20">Over 20 years</SelectItem>
                                        <SelectItem value="unknown">Unknown</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </FormControl>
                                  <FormDescription>
                                    Solar panels typically last 25+ years, so roof condition is important.
                                  </FormDescription>
                                  {shouldShowError("roofAge") && <FormMessage />}
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                      )}

                      {serviceType === "mechanical" && (
                        <div className="space-y-4">
                          <h2 className="text-xl font-semibold">HVAC System Information</h2>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="hvacType"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>
                                    Current HVAC System Type <span className="text-red-500">*</span>
                                  </FormLabel>
                                  <FormControl>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                      <SelectTrigger
                                        className={
                                          shouldShowError("hvacType") && form.formState.errors.hvacType
                                            ? "border-red-500"
                                            : ""
                                        }
                                      >
                                        <SelectValue placeholder="Select system type" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="central">Central AC/Furnace</SelectItem>
                                        <SelectItem value="heat-pump">Heat Pump</SelectItem>
                                        <SelectItem value="mini-split">Mini-Split System</SelectItem>
                                        <SelectItem value="boiler">Boiler</SelectItem>
                                        <SelectItem value="none">No Existing System</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </FormControl>
                                  <FormDescription>This helps us understand your current setup.</FormDescription>
                                  {shouldShowError("hvacType") && <FormMessage />}
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="hvacAge"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>
                                    System Age <span className="text-red-500">*</span>
                                  </FormLabel>
                                  <FormControl>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                      <SelectTrigger
                                        className={
                                          shouldShowError("hvacAge") && form.formState.errors.hvacAge
                                            ? "border-red-500"
                                            : ""
                                        }
                                      >
                                        <SelectValue placeholder="Select system age" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="0-5">0-5 years</SelectItem>
                                        <SelectItem value="6-10">6-10 years</SelectItem>
                                        <SelectItem value="11-15">11-15 years</SelectItem>
                                        <SelectItem value="16-20">16-20 years</SelectItem>
                                        <SelectItem value="over-20">Over 20 years</SelectItem>
                                        <SelectItem value="unknown">Unknown</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </FormControl>
                                  <FormDescription>HVAC systems typically last 15-20 years.</FormDescription>
                                  {shouldShowError("hvacAge") && <FormMessage />}
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="squareFootage"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>
                                  Property Square Footage <span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="2000"
                                    {...field}
                                    className={
                                      shouldShowError("squareFootage") && form.formState.errors.squareFootage
                                        ? "border-red-500"
                                        : ""
                                    }
                                  />
                                </FormControl>
                                <FormDescription>
                                  Approximate square footage of the area to be heated/cooled. This helps us size your
                                  system correctly.
                                </FormDescription>
                                {shouldShowError("squareFootage") && <FormMessage />}
                              </FormItem>
                            )}
                          />
                        </div>
                      )}

                      {serviceType === "electrical" && (
                        <div className="space-y-4">
                          <h2 className="text-xl font-semibold">Electrical System Information</h2>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="electricalServiceType"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>
                                    Electrical Service Type <span className="text-red-500">*</span>
                                  </FormLabel>
                                  <FormControl>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                      <SelectTrigger
                                        className={
                                          shouldShowError("electricalServiceType") &&
                                          form.formState.errors.electricalServiceType
                                            ? "border-red-500"
                                            : ""
                                        }
                                      >
                                        <SelectValue placeholder="Select service type" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="100-amp">100 Amp Service</SelectItem>
                                        <SelectItem value="200-amp">200 Amp Service</SelectItem>
                                        <SelectItem value="400-amp">400 Amp Service</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                        <SelectItem value="unknown">Unknown</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </FormControl>
                                  <FormDescription>
                                    This indicates the capacity of your electrical system.
                                  </FormDescription>
                                  {shouldShowError("electricalServiceType") && <FormMessage />}
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="electricalPanelAge"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>
                                    Electrical Panel Age <span className="text-red-500">*</span>
                                  </FormLabel>
                                  <FormControl>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                      <SelectTrigger
                                        className={
                                          shouldShowError("electricalPanelAge") &&
                                          form.formState.errors.electricalPanelAge
                                            ? "border-red-500"
                                            : ""
                                        }
                                      >
                                        <SelectValue placeholder="Select panel age" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="0-10">0-10 years</SelectItem>
                                        <SelectItem value="11-20">11-20 years</SelectItem>
                                        <SelectItem value="21-30">21-30 years</SelectItem>
                                        <SelectItem value="over-30">Over 30 years</SelectItem>
                                        <SelectItem value="unknown">Unknown</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </FormControl>
                                  <FormDescription>
                                    Older panels may need to be upgraded for safety and capacity.
                                  </FormDescription>
                                  {shouldShowError("electricalPanelAge") && <FormMessage />}
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                      )}

                      {serviceType === "plumbing" && (
                        <div className="space-y-4">
                          <h2 className="text-xl font-semibold">Plumbing System Information</h2>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="plumbingType"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>
                                    Plumbing Pipe Type <span className="text-red-500">*</span>
                                  </FormLabel>
                                  <FormControl>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                      <SelectTrigger
                                        className={
                                          shouldShowError("plumbingType") && form.formState.errors.plumbingType
                                            ? "border-red-500"
                                            : ""
                                        }
                                      >
                                        <SelectValue placeholder="Select pipe type" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="copper">Copper</SelectItem>
                                        <SelectItem value="pex">PEX</SelectItem>
                                        <SelectItem value="galvanized">Galvanized</SelectItem>
                                        <SelectItem value="cast-iron">Cast Iron</SelectItem>
                                        <SelectItem value="pvc">PVC</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                        <SelectItem value="unknown">Unknown</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </FormControl>
                                  <FormDescription>
                                    Different pipe materials have different lifespans and compatibility issues.
                                  </FormDescription>
                                  {shouldShowError("plumbingType") && <FormMessage />}
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="plumbingAge"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>
                                    Plumbing System Age <span className="text-red-500">*</span>
                                  </FormLabel>
                                  <FormControl>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                      <SelectTrigger
                                        className={
                                          shouldShowError("plumbingAge") && form.formState.errors.plumbingAge
                                            ? "border-red-500"
                                            : ""
                                        }
                                      >
                                        <SelectValue placeholder="Select system age" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="0-10">0-10 years</SelectItem>
                                        <SelectItem value="11-20">11-20 years</SelectItem>
                                        <SelectItem value="21-30">21-30 years</SelectItem>
                                        <SelectItem value="over-30">Over 30 years</SelectItem>
                                        <SelectItem value="unknown">Unknown</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </FormControl>
                                  <FormDescription>
                                    Older plumbing systems may have corrosion or leakage issues.
                                  </FormDescription>
                                  {shouldShowError("plumbingAge") && <FormMessage />}
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                      )}

                      {/* Project Details */}
                      <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Project Details</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="projectTimeline"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>
                                  Project Timeline <span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger
                                      className={
                                        shouldShowError("projectTimeline") && form.formState.errors.projectTimeline
                                          ? "border-red-500"
                                          : ""
                                      }
                                    >
                                      <SelectValue placeholder="Select timeline" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="immediate">Immediate (ASAP)</SelectItem>
                                      <SelectItem value="1-3 months">1-3 months</SelectItem>
                                      <SelectItem value="3-6 months">3-6 months</SelectItem>
                                      <SelectItem value="6-12 months">6-12 months</SelectItem>
                                      <SelectItem value="planning">Just planning</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </FormControl>
                                <FormDescription>When would you like to start this project?</FormDescription>
                                {shouldShowError("projectTimeline") && <FormMessage />}
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="budget"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>
                                  Budget Range <span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger
                                      className={
                                        shouldShowError("budget") && form.formState.errors.budget
                                          ? "border-red-500"
                                          : ""
                                      }
                                    >
                                      <SelectValue placeholder="Select budget range" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="under-10k">Under $10,000</SelectItem>
                                      <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                                      <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                                      <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                                      <SelectItem value="over-100k">Over $100,000</SelectItem>
                                      <SelectItem value="not-sure">Not sure yet</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </FormControl>
                                <FormDescription>
                                  This helps us recommend solutions that fit your budget.
                                </FormDescription>
                                {shouldShowError("budget") && <FormMessage />}
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="additionalInfo"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Additional Information</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Please provide any additional details about your project that would help us prepare an accurate quote."
                                  className={`min-h-[100px] ${
                                    shouldShowError("additionalInfo") && form.formState.errors.additionalInfo
                                      ? "border-red-500"
                                      : ""
                                  }`}
                                  value={field.value || ""}
                                  onChange={field.onChange}
                                  onBlur={field.onBlur}
                                  name={field.name}
                                />
                              </FormControl>
                              <FormDescription>
                                Include any specific requirements or questions you have about your project.
                              </FormDescription>
                              {shouldShowError("additionalInfo") && <FormMessage />}
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Contact Preference */}
                      <FormField
                        control={form.control}
                        name="preferredContact"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Preferred Contact Method <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col sm:flex-row gap-4"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="email" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">Email</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="phone" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">Phone</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="either" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">Either</FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormDescription>How would you prefer we contact you about your quote?</FormDescription>
                            {shouldShowError("preferredContact") && <FormMessage />}
                          </FormItem>
                        )}
                      />

                      {/* Terms and Conditions */}
                      <FormField
                        control={form.control}
                        name="termsAccepted"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className={
                                  shouldShowError("termsAccepted") && form.formState.errors.termsAccepted
                                    ? "border-red-500"
                                    : ""
                                }
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="font-normal cursor-pointer">
                                I agree to the{" "}
                                <a
                                  href="/terms-of-service"
                                  className="text-primary hover:underline"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  terms of service
                                </a>{" "}
                                and{" "}
                                <a
                                  href="/privacy-policy"
                                  className="text-primary hover:underline"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  privacy policy
                                </a>
                                . <span className="text-red-500">*</span>
                              </FormLabel>
                              {shouldShowError("termsAccepted") && <FormMessage />}
                            </div>
                          </FormItem>
                        )}
                      />

                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-500">
                          <span className="text-red-500">*</span> Indicates required fields
                        </p>
                      </div>

                      <Button type="submit" className="w-full" disabled={isSubmitting} size="lg">
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Submitting...
                          </span>
                        ) : (
                          "Submit Quote Request"
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-16 px-4"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Your quote request has been submitted successfully. One of our representatives will contact you within
                24-48 hours to discuss your project.
              </p>
              <p className="text-gray-600 mb-8">You will be redirected to the homepage in a few seconds...</p>
              <Button onClick={() => router.push("/")} className="px-8">
                Return to Homepage
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
