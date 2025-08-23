import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-sarxt-dark mb-8">Privacy Policy</h1>

        <div className="prose max-w-none">
          <p className="text-lg mb-6">Last Updated: May 8, 2025</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>
            Welcome to Sey Energy ("we," "our," or "us"). We are committed to protecting your privacy and personal
            information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
            you visit our website or use our services.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
          <p>We may collect personal information that you voluntarily provide to us when you:</p>
          <ul className="list-disc ml-6 mt-2 mb-4">
            <li>Fill out forms on our website</li>
            <li>Request a quote or consultation</li>
            <li>Subscribe to our newsletter</li>
            <li>Apply for a job</li>
            <li>Contact us via email, phone, or social media</li>
          </ul>
          <p>
            This information may include your name, email address, phone number, address, and any other information you
            choose to provide.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Automatically Collected Information</h3>
          <p>
            When you visit our website, we may automatically collect certain information about your device, including:
          </p>
          <ul className="list-disc ml-6 mt-2 mb-4">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Operating system</li>
            <li>Pages visited</li>
            <li>Time and date of your visit</li>
            <li>Referring website</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
          <p>We may use the information we collect for various purposes, including:</p>
          <ul className="list-disc ml-6 mt-2 mb-4">
            <li>Providing, maintaining, and improving our services</li>
            <li>Processing and completing transactions</li>
            <li>Sending administrative information</li>
            <li>Responding to inquiries and providing customer support</li>
            <li>Sending marketing and promotional communications</li>
            <li>Analyzing usage patterns to improve our website and services</li>
            <li>Protecting against fraudulent or illegal activity</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">4. Disclosure of Your Information</h2>
          <p>We may share your information in the following situations:</p>
          <ul className="list-disc ml-6 mt-2 mb-4">
            <li>With service providers who perform services on our behalf</li>
            <li>To comply with legal obligations</li>
            <li>To protect and defend our rights and property</li>
            <li>With your consent or at your direction</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">5. Your Choices</h2>
          <p>You have certain choices regarding the use of your information:</p>
          <ul className="list-disc ml-6 mt-2 mb-4">
            <li>You can opt out of receiving promotional emails by following the instructions in those emails</li>
            <li>
              You can choose not to provide certain information, although this may limit your ability to use some
              features of our services
            </li>
            <li>You can request access to, correction of, or deletion of your personal information by contacting us</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">6. Security</h2>
          <p>
            We implement reasonable security measures to protect your personal information. However, no method of
            transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute
            security.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">7. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The updated version will be indicated by an updated
            "Last Updated" date. We encourage you to review this Privacy Policy frequently to stay informed about how we
            are protecting your information.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">8. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at:</p>
          <p className="mt-2">
            Sey Energy Inc.
            <br />
            123 Energy Way
            <br />
            Solar City, SC 12345
            <br />
            Email: privacy@sarxtenergy.com
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
