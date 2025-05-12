"use server"

import { z } from "zod"
import { sendContactEmail, sendAutoReplyEmail } from "@/lib/email"

// Define the contact form schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    }

    // Validate form data
    const validatedData = contactFormSchema.parse(data)

    // Send email to admin
    await sendContactEmail(validatedData)

    // Send auto-reply to user
    await sendAutoReplyEmail(validatedData.email, validatedData.name, "contact")

    return { success: true, message: "Your message has been sent successfully!" }
  } catch (error) {
    console.error("Contact form submission error:", error)
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Validation error. Please check your inputs.",
        errors: error.errors,
      }
    }
    return { success: false, message: "There was an error sending your message. Please try again." }
  }
}
