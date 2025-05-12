import { ElegantContactForm } from "@/components/elegant-contact-form"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions or ready to start your project? Reach out to our team for expert advice and support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <ElegantContactForm />
            </div>

            <div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-6">Contact Information</h3>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary/10 text-primary">
                          <MapPin className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-sm font-medium text-gray-900">Our Location</h4>
                        <p className="mt-1 text-sm text-gray-600">123 Energy Way, Solar City, SC 12345</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary/10 text-primary">
                          <Phone className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-sm font-medium text-gray-900">Phone</h4>
                        <p className="mt-1 text-sm text-gray-600">(123) 456-7890</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary/10 text-primary">
                          <Mail className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-sm font-medium text-gray-900">Email</h4>
                        <p className="mt-1 text-sm text-gray-600">info@sarxtenergy.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary/10 text-primary">
                          <Clock className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-sm font-medium text-gray-900">Business Hours</h4>
                        <p className="mt-1 text-sm text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p className="mt-1 text-sm text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                        <p className="mt-1 text-sm text-gray-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-64 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573036935!2d-73.98784492346177!3d40.75798597138413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1683650101048!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sarxt Energy Location"
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
