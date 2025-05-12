"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface ElegantServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  href: string
  index?: number
}

export function ElegantServiceCard({ icon, title, description, features, href, index = 0 }: ElegantServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative bg-white rounded-lg overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered
          ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/70 to-primary transform origin-left transition-transform duration-500"
        style={{ transform: isHovered ? "scaleX(1)" : "scaleX(0)" }}
      />

      <div className="p-8">
        <div
          className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 transform transition-transform duration-500"
          style={{ transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0)" }}
        >
          {icon}
        </div>

        <h3 className="text-xl font-bold mb-3">{title}</h3>

        <p className="text-gray-600 mb-6">{description}</p>

        <ul className="space-y-2 mb-8">
          {features.map((feature, i) => (
            <motion.li
              key={i}
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
            >
              <div className="h-5 w-5 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>

        <Link href={href} className="inline-flex items-center text-primary font-medium group/link">
          Learn more
          <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>

      <div
        className="absolute bottom-0 right-0 w-24 h-24 bg-primary/5 rounded-tl-full transform transition-transform duration-500 origin-bottom-right"
        style={{ transform: isHovered ? "scale(2)" : "scale(1)" }}
      />
    </motion.div>
  )
}
