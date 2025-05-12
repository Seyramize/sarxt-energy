"use server"

import { z } from "zod"
import { sendQuoteEmail, sendAutoReplyEmail } from "@/lib/email"

// Import the same schema from the quote form page
// This is a simplified version for brevity
const quoteFormSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  propertyType: z.enum(["residential", "commercial", "industrial"]),
  address: z.string().min(5),
  city: z.string().min(2),
  state: z.string().min(2),
  zipCode: z.string().min(5),
  serviceType: z.enum(["solar", "mechanical", "electrical", "plumbing", "multiple"]),
  projectTimeline: z.string(),
  budget: z.string(),
  preferredContact: z.enum(["email", "phone", "either"]),
  termsAccepted: z.literal(true),
  // Optional fields
  additionalInfo: z.string().optional(),
  currentElectricBill: z.string().optional(),
  roofType: z.string().optional(),
  roofAge: z.string().optional(),
  hvacType: z.string().optional(),
  hvacAge: z.string().optional(),
  squareFootage: z.string().optional(),
  electricalServiceType: z.string().optional(),
  electricalPanelAge: z.string().optional(),
  plumbingType: z.string().optional(),
  plumbingAge: z.string().optional(),
})

export async function submitQuoteForm(formData: FormData) {
  try {
    // Extract and convert form data to an object
    const formObject: Record<string, any> = {}
    formData.forEach((value, key) => {
      formObject[key] = value
    })

    // Convert checkbox value to boolean
    formObject.termsAccepted = formObject.termsAccepted === "on" || formObject.termsAccepted === "true"

    // Validate form data
    const validatedData = quoteFormSchema.parse(formObject)

    // Send email to admin
    await sendQuoteEmail(validatedData)

    // Send auto-reply to user
    await sendAutoReplyEmail(validatedData.email, `${validatedData.firstName} ${validatedData.lastName}`, "quote")

    return { success: true, message: "Your quote request has been submitted successfully!" }
  } catch (error) {
    console.error("Quote form submission error:", error)
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Validation error. Please check your inputs.",
        errors: error.errors,
      }
    }
    return { success: false, message: "There was an error submitting your quote request. Please try again." }
  }
}
