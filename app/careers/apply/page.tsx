"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Send, Loader2 } from "lucide-react"

// Job listings data (simplified version from the careers page)
const jobListings = [
  {
    id: 1,
    title: "Solar Installation Technician",
    department: "Solar",
    location: "Multiple Locations",
  },
  {
    id: 2,
    title: "HVAC Service Technician",
    department: "Mechanical",
    location: "Phoenix, AZ",
  },
  {
    id: 3,
    title: "Electrical Project Manager",
    department: "Electrical",
    location: "Denver, CO",
  },
  {
    id: 4,
    title: "Plumbing Apprentice",
    department: "Plumbing",
    location: "Multiple Locations",
  },
  {
    id: 5,
    title: "Renewable Energy Sales Consultant",
    department: "Sales",
    location: "Remote (US-based)",
  },
  {
    id: 6,
    title: "Solar Design Engineer",
    department: "Solar",
    location: "Austin, TX",
  },
  {
    id: 7,
    title: "Commercial HVAC Project Manager",
    department: "Mechanical",
    location: "Chicago, IL",
  },
  {
    id: 8,
    title: "Master Electrician",
    department: "Electrical",
    location: "Seattle, WA",
  },
  {
    id: 9,
    title: "Commercial Plumbing Supervisor",
    department: "Plumbing",
    location: "Dallas, TX",
  },
  {
    id: 10,
    title: "Energy Efficiency Consultant",
    department: "Sales",
    location: "Boston, MA",
  },
  {
    id: 11,
    title: "Solar Operations Manager",
    department: "Solar",
    location: "San Diego, CA",
  },
  {
    id: 12,
    title: "HVAC Systems Engineer",
    department: "Mechanical",
    location: "Atlanta, GA",
  },
  {
    id: 13,
    title: "Electrical Estimator",
    department: "Electrical",
    location: "Portland, OR",
  },
  {
    id: 14,
    title: "Water Conservation Specialist",
    department: "Plumbing",
    location: "Las Vegas, NV",
  },
  {
    id: 15,
    title: "Marketing Manager",
    department: "Sales",
    location: "Denver, CO",
  },
  {
    id: 16,
    title: "Building Automation Technician",
    department: "Mechanical",
    location: "Minneapolis, MN",
  },
  {
    id: 17,
    title: "Renewable Energy Project Developer",
    department: "Solar",
    location: "Denver, CO",
  },
  {
    id: 18,
    title: "Customer Success Manager",
    department: "Sales",
    location: "Remote",
  },
  {
    id: 19,
    title: "Journeyman Plumber",
    department: "Plumbing",
    location: "Multiple Locations",
  },
  {
    id: 20,
    title: "Energy Storage Specialist",
    department: "Electrical",
    location: "Los Angeles, CA",
  },
]

export default function JobApplicationPage() {
  const searchParams = useSearchParams()
  const jobId = searchParams.get("job")

  const [job, setJob] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (jobId) {
      const selectedJob = jobListings.find((j) => j.id === Number.parseInt(jobId))
      setJob(selectedJob || null)
    }
  }, [jobId])

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-100 text-green-800 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">Application Submitted!</h2>
              <p className="mb-4">
                Thank you for your interest in joining Sarxt Energy. We've received your application and will review it
                shortly.
              </p>
              <p>Our hiring team will contact you if your qualifications match our requirements.</p>
            </div>
            <Button asChild>
              <Link href="/careers">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Careers
              </Link>
            </Button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/careers" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Careers
          </Link>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{job ? `Apply for ${job.title}` : "Job Application"}</CardTitle>
              <CardDescription>
                {job ? `${job.department} | ${job.location}` : "Complete the form below to apply for this position"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input id="email" type="email" className="w-full p-2 border border-gray-300 rounded-md" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone
                  </label>
                  <input id="phone" type="tel" className="w-full p-2 border border-gray-300 rounded-md" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="address" className="text-sm font-medium">
                    Address
                  </label>
                  <input id="address" type="text" className="w-full p-2 border border-gray-300 rounded-md" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="city" className="text-sm font-medium">
                    City
                  </label>
                  <input id="city" type="text" className="w-full p-2 border border-gray-300 rounded-md" required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="state" className="text-sm font-medium">
                      State
                    </label>
                    <input id="state" type="text" className="w-full p-2 border border-gray-300 rounded-md" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="zipCode" className="text-sm font-medium">
                      Zip Code
                    </label>
                    <input id="zipCode" type="text" className="w-full p-2 border border-gray-300 rounded-md" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="resume" className="text-sm font-medium">
                    Resume
                  </label>
                  <input id="resume" type="file" className="w-full p-2 border border-gray-300 rounded-md" required />
                  <p className="text-xs text-gray-500">PDF, DOC, or DOCX files only. Max size: 5MB</p>
                </div>

                <div className="space-y-2">
                  <label htmlFor="coverLetter" className="text-sm font-medium">
                    Cover Letter (Optional)
                  </label>
                  <input id="coverLetter" type="file" className="w-full p-2 border border-gray-300 rounded-md" />
                  <p className="text-xs text-gray-500">PDF, DOC, or DOCX files only. Max size: 5MB</p>
                </div>

                <div className="space-y-2">
                  <label htmlFor="experience" className="text-sm font-medium">
                    Relevant Experience
                  </label>
                  <textarea
                    id="experience"
                    rows={4}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  ></textarea>
                </div>

                <div className="space-y-2">
                  <label htmlFor="startDate" className="text-sm font-medium">
                    Earliest Start Date
                  </label>
                  <input id="startDate" type="date" className="w-full p-2 border border-gray-300 rounded-md" required />
                </div>

                <div className="flex items-start space-x-2">
                  <input id="terms" type="checkbox" className="mt-1" required />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I certify that all information provided is true and complete to the best of my knowledge. I
                    understand that false information may disqualify me from consideration.
                  </label>
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Submit Application
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-6">
              <p className="text-sm text-gray-500">
                Your privacy is important to us. Review our{" "}
                <Link href="#" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  )
}
