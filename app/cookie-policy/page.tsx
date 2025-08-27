import Link from "next/link"

export default function CookiePolicyPage() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Cookie Policy</h1>
          <p className="mt-4 text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </div>

        <div className="mt-12 space-y-8 text-gray-600">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What are cookies?</h2>
            <p className="mb-4">
              Cookies are small text files that are placed on your device when you visit a website. They are widely used
              to make websites work more efficiently and provide information to the website owners.
            </p>
            <p>
              Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device when you go
              offline, while session cookies are deleted as soon as you close your web browser.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How we use cookies</h2>
            <p className="mb-4">
              SeyEnergy uses cookies for a variety of purposes. We use different types of cookies to run our website
              and services effectively.
            </p>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Necessary Cookies</h3>
                <p>
                  These cookies are essential for the website to function properly. They enable core functionality such
                  as security, network management, and account access. You cannot disable these cookies in our system.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Functional Cookies</h3>
                <p>
                  These cookies enable us to provide enhanced functionality and personalization. They may be set by us
                  or by third-party providers whose services we have added to our pages. If you disable these cookies,
                  some or all of these services may not function properly.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                <p>
                  These cookies allow us to count visits and traffic sources so we can measure and improve the
                  performance of our site. They help us know which pages are the most and least popular and see how
                  visitors move around the site. All information these cookies collect is aggregated and anonymous.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketing Cookies</h3>
                <p>
                  These cookies may be set through our site by our advertising partners. They may be used by those
                  companies to build a profile of your interests and show you relevant advertisements on other sites.
                  They do not directly store personal information but are based on uniquely identifying your browser and
                  internet device.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing cookies</h2>
            <p className="mb-4">
              You can set your browser to refuse all or some browser cookies, or to alert you when websites set or
              access cookies. If you disable or refuse cookies, please note that some parts of this website may become
              inaccessible or not function properly.
            </p>
            <p className="mb-4">
              You can also manage your cookie preferences at any time by clicking on the cookie settings icon at the
              bottom left of our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to our cookie policy</h2>
            <p className="mb-4">
              We may update our Cookie Policy from time to time. Any changes will be posted on this page with an updated
              revision date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact us</h2>
            <p className="mb-4">If you have any questions about our Cookie Policy, please contact us at:</p>
            <ul className="list-disc pl-5 mb-4">
              <li>
                Email:{" "}
                <Link href="mailto:privacy@sarxtenergy.com" className="text-primary hover:underline">
                  privacy@sarxtenergy.com
                </Link>
              </li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Energy Way, Solar City, SC 12345</li>
            </ul>
          </section>
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
