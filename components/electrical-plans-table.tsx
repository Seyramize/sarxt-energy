import { CheckIcon, XIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ElectricalPlansTable() {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-4 text-left border-b-2 border-gray-200"></th>
            <th className="p-4 text-center border-b-2 border-gray-200">
              <div className="font-bold text-lg">Basic Electrical</div>
              <div className="text-gray-500">Essential</div>
            </th>
            <th className="p-4 text-center border-b-2 border-gray-200 bg-yellow-50 dark:bg-yellow-900/20">
              <div className="font-bold text-lg">Standard Electrical</div>
              <div className="text-gray-500">Most Popular</div>
            </th>
            <th className="p-4 text-center border-b-2 border-gray-200">
              <div className="font-bold text-lg">Premium Electrical</div>
              <div className="text-gray-500">Ultimate</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 border-b border-gray-200 font-medium">Annual Safety Inspection</td>
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
            <td className="p-4 border-b border-gray-200 font-medium">Panel Inspection</td>
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
            <td className="p-4 border-b border-gray-200 font-medium">Outlet & Switch Testing</td>
            <td className="p-4 text-center border-b border-gray-200">Limited</td>
            <td className="p-4 text-center border-b border-gray-200 bg-yellow-50 dark:bg-yellow-900/20">Full</td>
            <td className="p-4 text-center border-b border-gray-200">Full</td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-200 font-medium">Priority Service</td>
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
            <td className="p-4 border-b border-gray-200 font-medium">Discounted Service Calls</td>
            <td className="p-4 text-center border-b border-gray-200">5%</td>
            <td className="p-4 text-center border-b border-gray-200 bg-yellow-50 dark:bg-yellow-900/20">15%</td>
            <td className="p-4 text-center border-b border-gray-200">25%</td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-200 font-medium">Emergency Response</td>
            <td className="p-4 text-center border-b border-gray-200">
              <XIcon className="h-5 w-5 text-gray-300 mx-auto" />
            </td>
            <td className="p-4 text-center border-b border-gray-200 bg-yellow-50 dark:bg-yellow-900/20">Next Day</td>
            <td className="p-4 text-center border-b border-gray-200">Same Day</td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-200 font-medium">Surge Protection</td>
            <td className="p-4 text-center border-b border-gray-200">
              <XIcon className="h-5 w-5 text-gray-300 mx-auto" />
            </td>
            <td className="p-4 text-center border-b border-gray-200 bg-yellow-50 dark:bg-yellow-900/20">Basic</td>
            <td className="p-4 text-center border-b border-gray-200">Whole Home</td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-200"></td>
            <td className="p-4 text-center border-b border-gray-200">
              <Button asChild variant="outline" className="w-full">
                <Link href="/quote?plan=basic-electrical">Get Started</Link>
              </Button>
            </td>
            <td className="p-4 text-center border-b border-gray-200 bg-yellow-50 dark:bg-yellow-900/20">
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link href="/quote?plan=standard-electrical">Choose Plan</Link>
              </Button>
            </td>
            <td className="p-4 text-center border-b border-gray-200">
              <Button asChild variant="outline" className="w-full">
                <Link href="/quote?plan=premium-electrical">Go Premium</Link>
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
