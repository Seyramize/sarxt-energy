import { CheckIcon, XIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SolarPlansTable() {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-4 text-left border-b-2 border-gray-200"></th>
            <th className="p-4 text-center border-b-2 border-gray-200">
              <div className="font-bold text-lg">Basic Solar</div>
              <div className="text-gray-500">Essential</div>
            </th>
            <th className="p-4 text-center border-b-2 border-gray-200 bg-yellow-50 dark:bg-yellow-900/20">
              <div className="font-bold text-lg">Standard Solar</div>
              <div className="text-gray-500">Most Popular</div>
            </th>
            <th className="p-4 text-center border-b-2 border-gray-200">
              <div className="font-bold text-lg">Premium Solar</div>
              <div className="text-gray-500">Ultimate</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 border-b border-gray-200 font-medium">System Size</td>
            <td className="p-4 text-center border-b border-gray-200">Up to 5kW</td>
            <td className="p-4 text-center border-b border-gray-200 bg-yellow-50 dark:bg-yellow-900/20">5-10kW</td>
            <td className="p-4 text-center border-b border-gray-200">10kW+</td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-200 font-medium">Panel Type</td>
            <td className="p-4 text-center border-b border-gray-200">Standard Efficiency</td>
            <td className="p-4 text-center border-b border-gray-200 bg-yellow-50 dark:bg-yellow-900/20">
              High Efficiency
            </td>
            <td className="p-4 text-center border-b border-gray-200">Premium Efficiency</td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-200 font-medium">Inverter</td>
            <td className="p-4 text-center border-b border-gray-200">String Inverter</td>
            <td className="p-4 text-center border-b border-gray-200 bg-yellow-50 dark:bg-yellow-900/20">
              String Inverter
            </td>
            <td className="p-4 text-center border-b border-gray-200">Microinverters</td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-200 font-medium">Monitoring System</td>
            <td className="p-4 text-center border-b border-gray-200">
              <CheckIcon className="h-5 w-5 text-green-500 mx-auto" />
            </td>
            <td className="p-4 text-center border-b border-gray-200 bg-yellow-50 dark:bg-yellow-900/20">
              <CheckIcon className="h-5 w-5 text-green-500 mx-auto" />
            </td>
            <td className="p-4 text-center border-b border-gray-200">
              <CheckIcon className="h-5 w-5 text-green-500 mx-auto" />
            </td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-200 font-medium">Battery Storage</td>
            <td className="p-4 text-center border-b border-gray-200">
              <XIcon className="h-5 w-5 text-gray-300 mx-auto" />
            </td>
            <td className="p-4 text-center border-b border-gray-200 bg-yellow-50 dark:bg-yellow-900/20">Optional</td>
            <td className="p-4 text-center border-b border-gray-200">Included</td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-200 font-medium">Warranty</td>
            <td className="p-4 text-center border-b border-gray-200">10 Years</td>
            <td className="p-4 text-center border-b border-gray-200 bg-yellow-50 dark:bg-yellow-900/20">15 Years</td>
            <td className="p-4 text-center border-b border-gray-200">25 Years</td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-200 font-medium">Maintenance Plan</td>
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
            <td className="p-4 border-b border-gray-200"></td>
            <td className="p-4 text-center border-b border-gray-200">
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact?plan=basic-solar">Get Started</Link>
              </Button>
            </td>
            <td className="p-4 text-center border-b border-gray-200 bg-yellow-50 dark:bg-yellow-900/20">
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link href="/contact?plan=standard-solar">Choose Plan</Link>
              </Button>
            </td>
            <td className="p-4 text-center border-b border-gray-200">
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact?plan=premium-solar">Go Premium</Link>
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
