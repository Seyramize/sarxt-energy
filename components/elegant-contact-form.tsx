"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Loader2 } from "lucide-react"

export function ElegantContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="relative overflow-hidden rounded-xl bg-white shadow-xl">
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-full transform -translate-x-10 -translate-y-10"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/5 rounded-tr-full transform translate-x-10 translate-y-10"></div>

      <div className="relative p-8 md:p-10">
        {!isSubmitted ? (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <p className="text-gray-600 mb-8">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full border-gray-300 focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="w-full border-gray-300 focus:ring-primary focus:border-primary"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <Input
                id="phone"
                name="phone"
                placeholder="(123) 456-7890"
                className="w-full border-gray-300 focus:ring-primary focus:border-primary"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                className="w-full rounded-md border-gray-300 focus:ring-primary focus:border-primary py-2 px-3"
              >
                <option value="">Select a service</option>
                <option value="residential-solar">Residential Solar</option>
                <option value="commercial-solar">Commercial Solar</option>
                <option value="mechanical">Mechanical Services</option>
                <option value="electrical">Electrical Services</option>
                <option value="plumbing">Plumbing Services</option>
              </select>
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full border-gray-300 focus:ring-primary focus:border-primary"
              />
            </div>

            <Button type="submit" className="w-full relative overflow-hidden group" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="flex items-center">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </span>
              ) : (
                <span>Send Message</span>
              )}
              <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Button>
          </motion.form>
        ) : (
          <motion.div
            className="text-center py-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
            <p className="text-gray-600 mb-6">
              Your message has been sent successfully. We'll get back to you shortly.
            </p>
            <Button onClick={() => setIsSubmitted(false)} variant="outline">
              Send Another Message
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
