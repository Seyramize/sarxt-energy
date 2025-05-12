"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxSectionProps {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  imageSrc: string
}

export function ParallaxSection({ title, subtitle, ctaText, ctaLink, imageSrc }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6])

  return (
    <section ref={ref} className="relative overflow-hidden py-24 md:py-32">
      <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
        <Image src={imageSrc || "/placeholder.svg"} alt="Background" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-white/90 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-gray-900 hover:bg-white/90 relative overflow-hidden group"
            >
              <Link href={ctaLink}>
                <span className="relative z-10">{ctaText}</span>
                <span className="absolute inset-0 bg-primary/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
