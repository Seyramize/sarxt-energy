"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQ() {
  const faqs = [
    {
      category: "Solar Energy",
      questions: [
        {
          question: "How do solar panels work?",
          answer:
            "Solar panels work by converting sunlight into electricity through the photovoltaic effect. When sunlight hits the solar cells in the panels, it excites electrons, creating a flow of electricity. This direct current (DC) electricity is then converted to alternating current (AC) by an inverter, making it usable in your home or business.",
        },
        {
          question: "How much can I save with solar panels?",
          answer:
            "Savings vary depending on your energy usage, local electricity rates, available incentives, and system size. Most homeowners save between 50-90% on their monthly electricity bills. We provide a detailed savings estimate during your free consultation.",
        },
        {
          question: "What incentives are available for solar installation?",
          answer:
            "Several incentives may be available, including the federal solar investment tax credit (ITC), state tax credits, local rebates, and net metering programs. Our solar consultants will help you identify all incentives available in your area to maximize your savings.",
        },
        {
          question: "How long do solar panels last?",
          answer:
            "Most solar panels come with a 25-30 year performance warranty, but they can continue producing electricity for 30-40 years. The inverter typically has a shorter lifespan of 10-15 years and may need replacement during the lifetime of your solar system.",
        },
        {
          question: "Do solar panels work on cloudy days or during winter?",
          answer:
            "Yes, solar panels still produce electricity on cloudy days, though at reduced efficiency. Similarly, they work during winter, and the cold temperatures can actually improve performance, though shorter days mean less sunlight. We design systems accounting for seasonal variations to ensure year-round performance.",
        },
      ],
    },
    {
      category: "Mechanical Services (HVAC)",
      questions: [
        {
          question: "How often should I service my HVAC system?",
          answer:
            "We recommend servicing your HVAC system twice a year: once before summer for cooling system maintenance and once before winter for heating system maintenance. Regular maintenance extends the life of your system, improves efficiency, and prevents costly breakdowns.",
        },
        {
          question: "What size HVAC system do I need for my home?",
          answer:
            "The right size depends on multiple factors, including your home's square footage, insulation, number of windows, ceiling height, and local climate. Our technicians perform a detailed load calculation to determine the appropriate system size for your specific needs.",
        },
        {
          question: "How can I improve my HVAC system's efficiency?",
          answer:
            "Regular maintenance, changing air filters monthly, using a programmable thermostat, sealing ductwork, improving insulation, and upgrading to a high-efficiency system are all ways to improve efficiency. We can perform an energy audit to identify specific improvements for your system.",
        },
        {
          question: "What's the difference between a heat pump and a conventional HVAC system?",
          answer:
            "A conventional HVAC system has separate heating and cooling units, typically a furnace and air conditioner. A heat pump serves both functions, extracting heat from outside air for warming in winter and removing heat from indoor air for cooling in summer, making it more energy-efficient in moderate climates.",
        },
      ],
    },
    {
      category: "Electrical Services",
      questions: [
        {
          question: "How often should electrical systems be inspected?",
          answer:
            "Homes should have an electrical inspection every 3-5 years, or when purchasing a home that's more than 25 years old. Commercial properties typically require annual inspections to meet safety regulations and insurance requirements.",
        },
        {
          question: "What are signs that I might need an electrical panel upgrade?",
          answer:
            "Frequent circuit breaker trips, flickering lights, buzzing sounds from outlets, burning odors, warm outlets or switches, still having fuses instead of circuit breakers, or planning to add major appliances or electric vehicle charging are all signs you might need a panel upgrade.",
        },
        {
          question: "Can you install EV charging stations at my home or business?",
          answer:
            "Yes, we specialize in installing various levels of EV charging stations for both residential and commercial properties. We'll assess your electrical system to ensure it can support the charger and recommend upgrades if necessary.",
        },
        {
          question: "What electrical services do you offer for commercial buildings?",
          answer:
            "We provide comprehensive commercial electrical services including lighting design and installation, power distribution, emergency backup systems, electrical system upgrades, energy management solutions, data and communication wiring, and regular maintenance and testing.",
        },
      ],
    },
    {
      category: "Plumbing Services",
      questions: [
        {
          question: "What should I do if I have a water leak?",
          answer:
            "First, shut off the water to the leaking fixture or at the main water valve if necessary. Then call us for emergency service. While waiting for our arrival, place towels or buckets to collect water and remove valuable items from the affected area.",
        },
        {
          question: "How often should I have my water heater serviced?",
          answer:
            "Water heaters should be inspected and serviced annually to ensure efficient operation and extend their lifespan. This includes flushing the tank to remove sediment buildup, checking the anode rod, and inspecting safety components.",
        },
        {
          question: "What water-saving plumbing fixtures do you recommend?",
          answer:
            "We recommend low-flow toilets, aerated faucets, water-efficient showerheads, and smart irrigation systems. These fixtures can reduce water usage by 20-50% without sacrificing performance, leading to significant savings on water bills.",
        },
        {
          question: "Can you install water filtration systems?",
          answer:
            "Yes, we install various water filtration systems from simple under-sink filters to whole-house purification systems. We'll test your water quality and recommend the appropriate filtration solution based on your specific water quality issues and needs.",
        },
      ],
    },
    {
      category: "General Questions",
      questions: [
        {
          question: "Do you offer financing for your services?",
          answer:
            "Yes, we offer flexible financing options with competitive rates and terms for all our services. We partner with several financial institutions to provide solutions that fit various budgets and needs, including zero-down and low-monthly-payment options.",
        },
        {
          question: "Are your technicians licensed and insured?",
          answer:
            "Yes, all our technicians are fully licensed, insured, and certified in their respective fields. We also conduct background checks and regular training to ensure our team delivers the highest quality service and workmanship.",
        },
        {
          question: "Do you offer maintenance plans?",
          answer:
            "Yes, we offer comprehensive maintenance plans for all our services. These plans include regular inspections, priority service, discounts on repairs, and extended warranties. Maintenance plans help prevent costly emergencies and extend the life of your systems.",
        },
        {
          question: "What areas do you serve?",
          answer:
            "We currently serve the entire Solar City metropolitan area and surrounding counties within a 50-mile radius. For projects outside this area, please contact us for availability as we may be able to accommodate depending on project scope.",
        },
        {
          question: "How do I request a quote?",
          answer:
            "You can request a quote by filling out the form on our contact page, calling our office at (123) 456-7890, or emailing info@sarxtenergy.com. One of our consultants will reach out to schedule a free on-site assessment and provide a detailed estimate.",
        },
      ],
    },
  ]

  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [openQuestions, setOpenQuestions] = useState<{ [key: string]: boolean }>({})

  const toggleCategory = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category)
  }

  const toggleQuestion = (category: string, index: number) => {
    const key = `${category}-${index}`
    setOpenQuestions({
      ...openQuestions,
      [key]: !openQuestions[key],
    })
  }

  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-sarxt-dark mb-8">Frequently Asked Questions</h1>

        <p className="text-lg text-center mb-12">
          Find answers to common questions about our services and solutions. Can't find what you're looking for?{" "}
          <Link href="/contact" className="text-primary hover:underline">
            Contact us
          </Link>
          .
        </p>

        <div className="space-y-6">
          {faqs.map((faqCategory) => (
            <div key={faqCategory.category} className="border rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                onClick={() => toggleCategory(faqCategory.category)}
              >
                <h2 className="text-xl font-semibold text-sarxt-dark">{faqCategory.category}</h2>
                {activeCategory === faqCategory.category ? (
                  <ChevronUp className="h-5 w-5 text-sarxt-dark" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-sarxt-dark" />
                )}
              </button>

              {activeCategory === faqCategory.category && (
                <div className="p-4 divide-y">
                  {faqCategory.questions.map((faq, index) => (
                    <div key={index} className="py-4">
                      <button
                        className="w-full flex justify-between items-center text-left"
                        onClick={() => toggleQuestion(faqCategory.category, index)}
                      >
                        <h3 className="text-lg font-medium text-sarxt-dark pr-4">{faq.question}</h3>
                        {openQuestions[`${faqCategory.category}-${index}`] ? (
                          <ChevronUp className="h-5 w-5 flex-shrink-0 text-primary" />
                        ) : (
                          <ChevronDown className="h-5 w-5 flex-shrink-0 text-primary" />
                        )}
                      </button>

                      {openQuestions[`${faqCategory.category}-${index}`] && (
                        <div className="mt-4 text-gray-600 prose">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-sarxt-dark text-center mb-6">Still Have Questions?</h2>
          <div className="text-center">
            <p className="mb-6">Our team is ready to help you with any questions you might have.</p>
            <Link
              href="/contact"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-md transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
