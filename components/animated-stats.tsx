"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface Stat {
  value: number
  label: string
  suffix?: string
  prefix?: string
}

interface AnimatedStatsProps {
  title: string
  subtitle?: string
  stats: Stat[]
  className?: string
}

export function AnimatedStats({ title, subtitle, stats, className = "" }: AnimatedStatsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0))

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        const duration = 2000 // Animation duration in ms
        const frameDuration = 1000 / 60 // 60fps
        const totalFrames = Math.round(duration / frameDuration)
        const increment = stat.value / totalFrames

        let currentCount = 0
        let frame = 0

        const counter = setInterval(() => {
          frame++
          currentCount += increment

          if (frame === totalFrames) {
            clearInterval(counter)
            setCounts((prev) => {
              const newCounts = [...prev]
              newCounts[index] = stat.value
              return newCounts
            })
          } else {
            setCounts((prev) => {
              const newCounts = [...prev]
              newCounts[index] = Math.floor(currentCount)
              return newCounts
            })
          }
        }, frameDuration)

        return () => clearInterval(counter)
      })
    }
  }, [isInView, stats])

  return (
    <section ref={ref} className={`py-16 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/5 rounded-full blur-lg transform -rotate-6"></div>
                <p className="text-4xl md:text-5xl font-bold text-primary relative">
                  {stat.prefix}
                  {counts[index].toLocaleString()}
                  {stat.suffix}
                </p>
              </div>
              <p className="mt-2 text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
