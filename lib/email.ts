import nodemailer from "nodemailer"

// Create a transporter with SMTP configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

// Email sender information
const defaultFrom = {
  name: process.env.SMTP_FROM_NAME,
  address: process.env.SMTP_FROM_EMAIL,
}

// Function to send contact form emails
export async function sendContactEmail(data: any) {
  try {
    const mailOptions = {
      from: defaultFrom,
      to: process.env.CONTACT_EMAIL,
      subject: `Contact Form Submission from ${data.name}`,
      text: `
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone || "Not provided"}
        Message: ${data.message}
      `,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
        <h2>Message:</h2>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
    }

    const info = await transporter.sendMail(mailOptions)
    console.log("Contact email sent:", info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error("Error sending contact email:", error)
    throw error
  }
}

// Function to send quote request emails
export async function sendQuoteEmail(data: any) {
  try {
    // Create a formatted HTML email with all the quote form data
    const htmlContent = `
      <h1>New Quote Request</h1>
      
      <h2>Contact Information</h2>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Preferred Contact Method:</strong> ${data.preferredContact}</p>
      
      <h2>Property Information</h2>
      <p><strong>Property Type:</strong> ${data.propertyType}</p>
      <p><strong>Address:</strong> ${data.address}</p>
      <p><strong>City:</strong> ${data.city}</p>
      <p><strong>State:</strong> ${data.state}</p>
      <p><strong>Zip Code:</strong> ${data.zipCode}</p>
      
      <h2>Service Information</h2>
      <p><strong>Service Type:</strong> ${data.serviceType}</p>
      
      ${
        data.serviceType === "solar"
          ? `
        <h3>Solar System Information</h3>
        <p><strong>Current Electric Bill:</strong> ${data.currentElectricBill || "Not provided"}</p>
        <p><strong>Roof Type:</strong> ${data.roofType || "Not provided"}</p>
        <p><strong>Roof Age:</strong> ${data.roofAge || "Not provided"}</p>
      `
          : ""
      }
      
      ${
        data.serviceType === "mechanical"
          ? `
        <h3>HVAC System Information</h3>
        <p><strong>HVAC Type:</strong> ${data.hvacType || "Not provided"}</p>
        <p><strong>HVAC Age:</strong> ${data.hvacAge || "Not provided"}</p>
        <p><strong>Square Footage:</strong> ${data.squareFootage || "Not provided"}</p>
      `
          : ""
      }
      
      ${
        data.serviceType === "electrical"
          ? `
        <h3>Electrical System Information</h3>
        <p><strong>Electrical Service Type:</strong> ${data.electricalServiceType || "Not provided"}</p>
        <p><strong>Electrical Panel Age:</strong> ${data.electricalPanelAge || "Not provided"}</p>
      `
          : ""
      }
      
      ${
        data.serviceType === "plumbing"
          ? `
        <h3>Plumbing System Information</h3>
        <p><strong>Plumbing Type:</strong> ${data.plumbingType || "Not provided"}</p>
        <p><strong>Plumbing Age:</strong> ${data.plumbingAge || "Not provided"}</p>
      `
          : ""
      }
      
      <h2>Project Details</h2>
      <p><strong>Project Timeline:</strong> ${data.projectTimeline}</p>
      <p><strong>Budget Range:</strong> ${data.budget}</p>
      
      ${
        data.additionalInfo
          ? `
        <h2>Additional Information</h2>
        <p>${data.additionalInfo.replace(/\n/g, "<br>")}</p>
      `
          : ""
      }
    `

    const mailOptions = {
      from: defaultFrom,
      to: process.env.QUOTE_EMAIL,
      subject: `Quote Request from ${data.firstName} ${data.lastName}`,
      text: JSON.stringify(data, null, 2), // Fallback plain text version
      html: htmlContent,
    }

    const info = await transporter.sendMail(mailOptions)
    console.log("Quote email sent:", info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error("Error sending quote email:", error)
    throw error
  }
}

// Function to send auto-reply emails to users
export async function sendAutoReplyEmail(to: string, name: string, type: "contact" | "quote") {
  try {
    const subject =
      type === "contact" ? "Thank you for contacting Sarxt Energy" : "Your Quote Request has been received"

    const content =
      type === "contact"
        ? `
        <h1>Thank you for contacting Sarxt Energy</h1>
        <p>Dear ${name},</p>
        <p>We have received your message and appreciate your interest in Sarxt Energy. Our team will review your inquiry and get back to you as soon as possible, typically within 1-2 business days.</p>
        <p>If your matter is urgent, please call us at (555) 123-4567.</p>
        <p>Best regards,<br>The Sarxt Energy Team</p>
      `
        : `
        <h1>Your Quote Request has been received</h1>
        <p>Dear ${name},</p>
        <p>Thank you for requesting a quote from Sarxt Energy. We have received your request and our team is working on preparing a personalized quote for your project.</p>
        <p>You can expect to hear from one of our representatives within 24-48 hours to discuss your project in more detail.</p>
        <p>If you have any immediate questions, please call us at (555) 123-4567.</p>
        <p>Best regards,<br>The Sarxt Energy Team</p>
      `

    const mailOptions = {
      from: defaultFrom,
      to,
      subject,
      html: content,
    }

    const info = await transporter.sendMail(mailOptions)
    console.log("Auto-reply email sent:", info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error("Error sending auto-reply email:", error)
    throw error
  }
}
