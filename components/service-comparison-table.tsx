"use client"

import { CheckIcon, XIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Feature {
  name: string
  basic: boolean | string
  standard: boolean | string
  premium: boolean | string
}

interface ServiceTier {
  name: string
  description: string
  price: string
  features: Feature[]
  popular?: boolean
  ctaText: string
  ctaLink: string
}

interface ServiceComparisonTableProps {
  title: string
  description: string
  tiers: ServiceTier[]
}

export function ServiceComparisonTable({ title, description, tiers }: ServiceComparisonTableProps) {
  return (
    <div className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{title}</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {description}
            </p>
          </div>
        </div>
        <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={cn(
                "flex flex-col rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-800",
                tier.popular && "border-primary ring-2 ring-primary",
              )}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-32 rounded-full bg-primary px-3 py-1 text-center text-sm font-medium text-sarxt-dark">
                  Most Popular
                </div>
              )}
              <div className="relative">
                <h3 className="text-xl font-bold">{tier.name}</h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{tier.description}</p>
                <div className="mt-4 flex items-baseline text-3xl font-bold">
                  {tier.price}
                  {tier.price !== "Custom" && <span className="ml-1 text-sm font-medium text-gray-500">/month</span>}
                </div>
                <Button asChild className={cn("mt-6 w-full", tier.popular ? "bg-primary" : "")}>
                  <Link href={tier.ctaLink}>{tier.ctaText}</Link>
                </Button>
              </div>
              <div className="mt-6 space-y-4">
                {tier.features.map((feature, j) => (
                  <div key={j} className="flex items-center">
                    {typeof feature.basic === "boolean" && i === 0 ? (
                      feature.basic ? (
                        <CheckIcon className="h-5 w-5 text-green-500" />
                      ) : (
                        <XIcon className="h-5 w-5 text-gray-300 dark:text-gray-600" />
                      )
                    ) : typeof feature.standard === "boolean" && i === 1 ? (
                      feature.standard ? (
                        <CheckIcon className="h-5 w-5 text-green-500" />
                      ) : (
                        <XIcon className="h-5 w-5 text-gray-300 dark:text-gray-600" />
                      )
                    ) : typeof feature.premium === "boolean" && i === 2 ? (
                      feature.premium ? (
                        <CheckIcon className="h-5 w-5 text-green-500" />
                      ) : (
                        <XIcon className="h-5 w-5 text-gray-300 dark:text-gray-600" />
                      )
                    ) : (
                      <CheckIcon className="h-5 w-5 text-green-500" />
                    )}
                    <span className="ml-3 text-sm">
                      {feature.name}
                      {typeof feature.basic === "string" && i === 0 && `: ${feature.basic}`}
                      {typeof feature.standard === "string" && i === 1 && `: ${feature.standard}`}
                      {typeof feature.premium === "string" && i === 2 && `: ${feature.premium}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[250px]">Feature</TableHead>
                {tiers.map((tier, i) => (
                  <TableHead key={i} className="text-center">
                    {tier.name}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {tiers[0].features.map((feature, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{feature.name}</TableCell>
                  <TableCell className="text-center">
                    {typeof feature.basic === "boolean" ? (
                      feature.basic ? (
                        <CheckIcon className="mx-auto h-5 w-5 text-green-500" />
                      ) : (
                        <XIcon className="mx-auto h-5 w-5 text-gray-300 dark:text-gray-600" />
                      )
                    ) : (
                      feature.basic
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {typeof feature.standard === "boolean" ? (
                      feature.standard ? (
                        <CheckIcon className="mx-auto h-5 w-5 text-green-500" />
                      ) : (
                        <XIcon className="mx-auto h-5 w-5 text-gray-300 dark:text-gray-600" />
                      )
                    ) : (
                      feature.standard
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {typeof feature.premium === "boolean" ? (
                      feature.premium ? (
                        <CheckIcon className="mx-auto h-5 w-5 text-green-500" />
                      ) : (
                        <XIcon className="mx-auto h-5 w-5 text-gray-300 dark:text-gray-600" />
                      )
                    ) : (
                      feature.premium
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
