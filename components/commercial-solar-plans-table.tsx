import { CheckIcon, XIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CommercialSolarPlansTable() {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-4 text-left border-b-2 border-gray-200"></th>
            <th className="p-4 text-center border-b-2 border-gray-200">
              <div className="font-bold text-lg">Small Business</div>
              <div className="text-gray-500">Up to 25kW</div>
            </th>
            <th className="p-4 text-center border-b-2 border-gray-200 bg-yellow-50 dark:bg-yellow-900/20">
              <div className="font-bold text-lg">Mid-Size Commercial</div>
              <div className="text-gray-500">25-100kW</div>
            </th>
            <th className="p-4 text-center border-b-2 border-gray-200">
              <div className="font-bold text-lg">Enterprise</div>
              <div className="text-gray-500">100kW+</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 border-b border-gray-200 font-medium">System Design</td>
            <td className="p-4 text-center border-b border-gray-200">Standard</td>
            <td className="p-4 text-center border-b border-gray-200 bg-yellow-50 dark:bg-yellow-900/20">Custom</td>
            <td className="p-4 text-center border-b border-gray-200">Advanced Custom</td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-200 font-medium">Panel Type</td>
            <td className="p-4 text-center border-b border-gray-200">Commercial Grade</td>
            <td className="p-4 text-center border-b border-gray-200 bg-yellow-50 dark:bg-yellow-900/20">
              High Efficiency
            </td>
            <td className="p-4 text-center border-b border-gray-200">Premium Efficiency</td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-200 font-medium">Monitoring System</td>
            <td className="p-4 text-center border-b border-gray-200">Basic</td>
            <td className="p-4 text-center border-b border-gray-200 bg-yellow-50 dark:bg-yellow-900/20">Advanced</td>
            <td className="p-4 text-center border-b border-gray-200">Enterprise-grade</td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-200 font-medium">Battery Storage</td>
            <td className="p-4 text-center border-b border-gray-200">Optional</td>
            <td className="p-4 text-center border-b border-gray-200 bg-yellow-50 dark:bg-yellow-900/20">Optional</td>
            <td className="p-4 text-center border-b border-gray-200">Included</td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-200 font-medium">Warranty</td>
            <td className="p-4 text-center border-b border-gray-200">10 Years</td>
            <td className="p-4 text-center border-b border-gray-200 bg-yellow-50 dark:bg-yellow-900/20">15 Years</td>
            <td className="p-4 text-center border-b border-gray-200">20 Years</td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-200 font-medium">Maintenance Plan</td>
            <td className="p-4 text-center border-b border-gray-200">Basic</td>
            <td className="p-4 text-center border-b border-gray-200 bg-yellow-50 dark:bg-yellow-900/20">
              Comprehensive
            </td>
            <td className="p-4 text-center border-b border-gray-200">Premium</td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-200 font-medium">Performance Guarantee</td>
            <td className="p-4 text-center border-b border-gray-200">
              <XIcon className="h-5 w-5 text-gray-300 mx-auto" />
            </td>
            <td className="p-4 text-center border-b border-gray-200 bg-yellow-50 dark:bg-yellow-900/20">
              <CheckIcon className="h-5 w-5 text-green-500 mx-auto" />
            </td>
            <td className="p-4 text-center border-b border-gray-200">
              <CheckIcon className="h-5 w-5 text-green-500 mx-auto" />
            </td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-200 font-medium">Financing Options</td>
            <td className="p-4 text-center border-b border-gray-200">Limited</td>
            <td className="p-4 text-center border-b border-gray-200 bg-yellow-50 dark:bg-yellow-900/20">Multiple</td>
            <td className="p-4 text-center border-b border-gray-200">Customized</td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-200"></td>
            <td className="p-4 text-center border-b border-gray-200">
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact?plan=small-business-solar">Get Started</Link>
              </Button>
            </td>
            <td className="p-4 text-center border-b border-gray-200 bg-yellow-50 dark:bg-yellow-900/20">
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link href="/contact?plan=mid-size-commercial-solar">Request Quote</Link>
              </Button>
            </td>
            <td className="p-4 text-center border-b border-gray-200">
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact?plan=enterprise-solar">Enterprise Solution</Link>
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
