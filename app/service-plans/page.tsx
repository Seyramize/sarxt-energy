import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SolarPlansTable } from "@/components/solar-plans-table"
import { HVACPlansTable } from "@/components/hvac-plans-table"
import { ElectricalPlansTable } from "@/components/electrical-plans-table"
import { PlumbingPlansTable } from "@/components/plumbing-plans-table"
import { CommercialSolarPlansTable } from "@/components/commercial-solar-plans-table"

export const metadata: Metadata = {
  title: "Service Plans | SAY Energy",
  description: "Choose from our range of service plans for solar, HVAC, electrical, and plumbing services.",
}

export default function ServicePlansPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Service Plans</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Choose from our range of service plans designed to meet your specific needs and budget. Each plan includes
          comprehensive coverage and our commitment to quality service.
        </p>
      </div>

      {/* Solar Plans Section */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Residential Solar Plans</h2>
          <SolarPlansTable />
          <div className="mt-8 text-center">
            <p className="text-gray-600 italic mb-4">
              * All solar plans include our performance guarantee and professional installation.
            </p>
          </div>
        </div>
      </section>

      {/* Commercial Solar Plans Section */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Commercial Solar Plans</h2>
          <CommercialSolarPlansTable />
          <div className="mt-8 text-center">
            <p className="text-gray-600 italic mb-4">
              * All commercial plans include business energy assessment and ROI analysis.
            </p>
          </div>
        </div>
      </section>

      {/* HVAC Plans Section */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">HVAC Service Plans</h2>
          <HVACPlansTable />
          <div className="mt-8 text-center">
            <p className="text-gray-600 italic mb-4">
              * All HVAC plans include priority scheduling and our comfort guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* Electrical Plans Section */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Electrical Service Plans</h2>
          <ElectricalPlansTable />
          <div className="mt-8 text-center">
            <p className="text-gray-600 italic mb-4">
              * All electrical plans include our safety guarantee and code compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Plumbing Plans Section */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Plumbing Service Plans</h2>
          <PlumbingPlansTable />
          <div className="mt-8 text-center">
            <p className="text-gray-600 italic mb-4">
              * All plumbing plans include emergency support and our leak-free guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/10 rounded-lg p-8 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Need Help Choosing the Right Plan?</h2>
        <p className="text-lg mb-6">
          Our energy experts are ready to help you select the perfect service plan for your specific needs and budget.
        </p>
        <Button asChild size="lg">
          <Link href="/contact?subject=Service Plan Consultation">Schedule a Consultation</Link>
        </Button>
      </section>
    </div>
  )
}
