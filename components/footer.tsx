import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-sarxt-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <div className="flex items-center">
              <Image src="/logo.png" alt="Sarxt Energy Logo" width={40} height={40} className="h-10 w-auto" />
              <span className="ml-2 text-xl font-bold text-white">Sarxt Energy</span>
            </div>
            <p className="mt-4 text-sm text-gray-300">
              Providing sustainable energy solutions and M.E.P. services for residential and commercial properties.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="https://facebook.com" className="text-gray-300 hover:text-primary">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" className="text-gray-300 hover:text-primary">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" className="text-gray-300 hover:text-primary">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" className="text-gray-300 hover:text-primary">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/services/residential-solar" className="text-gray-300 hover:text-primary">
                  Residential Solar
                </Link>
              </li>
              <li>
                <Link href="/services/commercial-solar" className="text-gray-300 hover:text-primary">
                  Commercial Solar
                </Link>
              </li>
              <li>
                <Link href="/services/mechanical" className="text-gray-300 hover:text-primary">
                  Mechanical Services
                </Link>
              </li>
              <li>
                <Link href="/services/electrical" className="text-gray-300 hover:text-primary">
                  Electrical Services
                </Link>
              </li>
              <li>
                <Link href="/services/plumbing" className="text-gray-300 hover:text-primary">
                  Plumbing Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-primary">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-primary">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span className="text-gray-300">Accra, Ghana</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <Link href="tel:+233546506220" className="text-gray-300 hover:text-primary">
                  +233546506220
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <Link href="mailto:info@sarxtenergy.com" className="text-gray-300 hover:text-primary">
                  info@sarxtenergy.com
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-300 hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-center text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Sarxt Energy Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
