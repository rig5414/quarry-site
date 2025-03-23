"use server"

import { z } from "zod"
import { sql } from "@vercel/postgres"
import { Resend } from "resend"

// Initialize Resend
const resendApiKey = process.env.RESEND_API_KEY
if (!resendApiKey) {
  console.error("Missing RESEND_API_KEY environment variable")
}
const resend = new Resend(resendApiKey || "")

// Define schema for form validation
const ContactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(1, "Message is required"),
})

type ContactFormData = z.infer<typeof ContactFormSchema>

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Validate form data
    const validatedData = ContactFormSchema.parse(formData)

    // Save to database
    try {
      await sql`
        INSERT INTO contact_submissions (name, email, phone, subject, message)
        VALUES (${validatedData.name}, ${validatedData.email}, ${validatedData.phone || ""}, ${validatedData.subject || ""}, ${validatedData.message})
      `
    } catch (dbError) {
      console.error("Database error:", dbError)
      // Continue execution even if database fails
      // This allows the form to work even if the database is not set up yet
    }

    // Send email notification
    if (process.env.NOTIFICATION_EMAIL && resendApiKey) {
      try {
        await resend.emails.send({
          from: "Londiani Building Stones <onboarding@resend.dev>", // Use Resend's default domain for testing
          to: process.env.NOTIFICATION_EMAIL,
          subject: `New Contact Form Submission: ${validatedData.subject || "No Subject"}`,
          html: `
            <h1>New Contact Form Submission</h1>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Phone:</strong> ${validatedData.phone || "Not provided"}</p>
            <p><strong>Subject:</strong> ${validatedData.subject || "Not provided"}</p>
            <h2>Message:</h2>
            <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
          `,
        })
      } catch (emailError) {
        console.error("Error sending email notification:", emailError)
        // Continue execution even if email fails
      }
    }

    return { success: true }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    throw new Error("Failed to submit contact form")
  }
}

