import Link from "next/link"

export default function TermsOfService() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-sarxt-dark mb-8">Terms of Service</h1>

        <div className="prose max-w-none">
          <p className="text-lg mb-6">Last Updated: May 8, 2025</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the SeyEnergy website and services, you agree to be bound by these Terms of Service
            ("Terms"). If you do not agree to these Terms, please do not use our website or services.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. Description of Services</h2>
          <p>
            SeyEnergy provides solar energy solutions and M.E.P. (Mechanical, Electrical, and Plumbing) services for
            residential and commercial properties. Our services include but are not limited to residential solar
            installations, commercial solar installations, HVAC services, electrical services, and plumbing services.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. Use of the Website</h2>
          <p>
            You agree to use our website only for lawful purposes and in a way that does not infringe upon the rights of
            others or restrict their use of the website. Prohibited activities include:
          </p>
          <ul className="list-disc ml-6 mt-2 mb-4">
            <li>Violating any applicable laws or regulations</li>
            <li>Interfering with the operation of the website</li>
            <li>Attempting to gain unauthorized access to any part of the website</li>
            <li>Collecting user information without their consent</li>
            <li>Using the website to transmit malware or other harmful code</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">4. Quotes and Service Requests</h2>
          <p>
            Quotes provided through our website are estimates only and subject to change based on actual site
            conditions, material costs, and other factors. Final pricing will be confirmed in a written contract.
          </p>
          <p className="mt-2">
            By submitting a service request or quote request, you are not obligated to purchase services, and we are not
            obligated to provide services until a formal agreement is signed by both parties.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, images, and software, is the property of Sarxt
            Energy or its content suppliers and is protected by copyright and other intellectual property laws. You may
            not use, reproduce, distribute, or create derivative works from this content without our express written
            permission.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">6. Warranties and Disclaimers</h2>
          <p>
            Our services are provided with warranties as specified in our service contracts. The website and its content
            are provided "as is" without any warranties, express or implied. We do not guarantee that the website will
            be error-free, secure, or uninterrupted.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, SeyEnergy shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages resulting from your use of or inability to use the website or
            services.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">8. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless SeyEnergy and its officers, directors, employees, and agents
            from any claims, damages, liabilities, costs, or expenses arising from your use of the website or violation
            of these Terms.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">9. Modifications to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. The updated Terms will be posted on this page with a
            revised "Last Updated" date. Continued use of the website after any changes constitutes your acceptance of
            the modified Terms.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">10. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the state of South Carolina,
            without regard to its conflict of law provisions.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">11. Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <p className="mt-2">
            SeyEnergy Inc.
            <br />
            123 Energy Way
            <br />
            Solar City, SC 12345
            <br />
            Email: legal@sarxtenergy.com
            <br />
            Phone: (123) 456-7890
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
