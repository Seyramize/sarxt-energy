"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Testimonial {
  quote: string
  author: string
  position: string
  company: string
  imageSrc?: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((current + 1) % testimonials.length)
  }, [current, testimonials.length])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }, [current, testimonials.length])

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 6000)

    return () => clearInterval(interval)
  }, [autoplay, current, next])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 py-16 md:py-24">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative" onMouseEnter={() => setAutoplay(false)} onMouseLeave={() => setAutoplay(true)}>
            <Quote className="absolute -top-10 -left-10 h-20 w-20 text-primary/10 transform -rotate-12" />

            <AnimatePresence custom={direction} initial={false} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="text-center"
              >
                <blockquote className="text-xl md:text-2xl font-medium text-gray-800 italic">
                  "{testimonials[current].quote}"
                </blockquote>

                <div className="mt-8 flex flex-col items-center">
                  {testimonials[current].imageSrc && (
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4 ring-2 ring-primary/20 ring-offset-2">
                      <Image
                        src={testimonials[current].imageSrc || "/placeholder.svg"}
                        alt={testimonials[current].author}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <p className="font-bold text-gray-900">{testimonials[current].author}</p>
                  <p className="text-gray-600">
                    {testimonials[current].position}, {testimonials[current].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2">
              <button
                onClick={prev}
                className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6 text-gray-700" />
              </button>
            </div>

            <div className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2">
              <button
                onClick={next}
                className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6 text-gray-700" />
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1)
                  setCurrent(index)
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current ? "bg-primary w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
