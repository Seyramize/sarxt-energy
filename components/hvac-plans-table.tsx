import { CheckIcon, XIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HVACPlansTable() {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-4 text-left border-b-2 border-gray-200"></th>
            <th className="p-4 text-center border-b-2 border-gray-200">
              <div className="font-bold text-lg">Basic HVAC</div>
              <div className="text-gray-500">Essential</div>
            </th>
            <th className="p-4 text-center border-b-2 border-gray-200 bg-yellow-50 dark:bg-yellow-900/20">
              <div className="font-bold text-lg">Standard HVAC</div>
              <div className="text-gray-500">Most Popular</div>
            </th>
            <th className="p-4 text-center border-b-2 border-gray-200">
              <div className="font-bold text-lg">Premium HVAC</div>
              <div className="text-gray-500">Ultimate</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 border-b border-gray-200 font-medium">Annual Inspections</td>
            <td className="p-4 text-center border-b border-gray-200">1 per year</td>
            <td className="p-4 text-center border-b border-gray-200 bg-yellow-50 dark:bg-yellow-900/20">2 per year</td>
            <td className="p-4 text-center border-b border-gray-200">4 per year</td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-200 font-medium">Filter Replacements</td>
            <td className="p-4 text-center border-b border-gray-200">1 per year</td>
            <td className="p-4 text-center border-b border-gray-200 bg-yellow-50 dark:bg-yellow-900/20">2 per year</td>
            <td className="p-4 text-center border-b border-gray-200">4 per year</td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-200 font-medium">System Cleaning</td>
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
            <td className="p-4 border-b border-gray-200 font-medium">Discounted Repairs</td>
            <td className="p-4 text-center border-b border-gray-200">10%</td>
            <td className="p-4 text-center border-b border-gray-200 bg-yellow-50 dark:bg-yellow-900/20">15%</td>
            <td className="p-4 text-center border-b border-gray-200">20%</td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-200 font-medium">Emergency Service</td>
            <td className="p-4 text-center border-b border-gray-200">
              <XIcon className="h-5 w-5 text-gray-300 mx-auto" />
            </td>
            <td className="p-4 text-center border-b border-gray-200 bg-yellow-50 dark:bg-yellow-900/20">
              Business Hours
            </td>
            <td className="p-4 text-center border-b border-gray-200">24/7</td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-200 font-medium">Parts Coverage</td>
            <td className="p-4 text-center border-b border-gray-200">
              <XIcon className="h-5 w-5 text-gray-300 mx-auto" />
            </td>
            <td className="p-4 text-center border-b border-gray-200 bg-yellow-50 dark:bg-yellow-900/20">Basic Parts</td>
            <td className="p-4 text-center border-b border-gray-200">All Parts</td>
          </tr>
          <tr>
            <td className="p-4 border-b border-gray-200"></td>
            <td className="p-4 text-center border-b border-gray-200">
              <Button asChild variant="outline" className="w-full">
                <Link href="/quote?plan=basic-hvac">Get Started</Link>
              </Button>
            </td>
            <td className="p-4 text-center border-b border-gray-200 bg-yellow-50 dark:bg-yellow-900/20">
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link href="/quote?plan=standard-hvac">Choose Plan</Link>
              </Button>
            </td>
            <td className="p-4 text-center border-b border-gray-200">
              <Button asChild variant="outline" className="w-full">
                <Link href="/quote?plan=premium-hvac">Go Premium</Link>
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
