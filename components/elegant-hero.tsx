"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface ElegantHeroProps {
  title: string
  subtitle: string
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  imageSrc: string
  imageAlt: string
}

export function ElegantHero({ title, subtitle, primaryCta, secondaryCta, imageSrc, imageAlt }: ElegantHeroProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
      <div className="relative h-[600px] md:h-[700px] w-full">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          style={{ transform: isVisible ? "scale(1)" : "scale(1.05)" }}
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10 transition-opacity duration-1000"
          style={{ opacity: isVisible ? 1 : 0 }}
        />
      </div>
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl leading-tight">
              {title.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <motion.p
              className="mt-6 text-xl text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {subtitle}
            </motion.p>
            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button asChild size="lg" className="text-base relative overflow-hidden group">
                <Link href={primaryCta.href}>
                  <span className="relative z-10">{primaryCta.text}</span>
                  <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Link>
              </Button>
              {secondaryCta && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-base bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:text-white border-white/30 relative overflow-hidden group"
                >
                  <Link href={secondaryCta.href}>
                    <span className="relative z-10">{secondaryCta.text}</span>
                    <span className="absolute inset-0 bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </Link>
                </Button>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
    </section>
  )
}
