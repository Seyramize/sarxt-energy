"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

type CookiePreferences = {
  necessary: boolean
  functional: boolean
  analytics: boolean
  marketing: boolean
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true and cannot be changed
    functional: true,
    analytics: true,
    marketing: false,
  })

  useEffect(() => {
    // Check if user has already made a choice
    const consentGiven = localStorage.getItem("cookieConsent")

    if (!consentGiven) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 1000)

      return () => clearTimeout(timer)
    } else {
      // Load saved preferences
      try {
        const savedPreferences = JSON.parse(consentGiven)
        setPreferences(savedPreferences)
      } catch (e) {
        // If parsing fails, reset consent
        localStorage.removeItem("cookieConsent")
        setShowBanner(true)
      }
    }
  }, [])

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    }
    setPreferences(allAccepted)
    localStorage.setItem("cookieConsent", JSON.stringify(allAccepted))
    setShowBanner(false)
  }

  const rejectNonEssential = () => {
    const essentialOnly = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    }
    setPreferences(essentialOnly)
    localStorage.setItem("cookieConsent", JSON.stringify(essentialOnly))
    setShowBanner(false)
  }

  const savePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(preferences))
    setShowBanner(false)
  }

  const togglePreferences = () => {
    setShowPreferences(!showPreferences)
  }

  const handlePreferenceChange = (key: keyof CookiePreferences) => {
    if (key === "necessary") return // Cannot change necessary cookies

    setPreferences({
      ...preferences,
      [key]: !preferences[key],
    })
  }

  const openCookieSettings = () => {
    setShowBanner(true)
    setShowPreferences(true)
  }

  if (!showBanner) {
    return (
      <button
        onClick={openCookieSettings}
        className="fixed bottom-4 left-4 z-50 bg-gray-100 hover:bg-gray-200 text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300"
        aria-label="Cookie Settings"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-cookie"
        >
          <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
          <path d="M8.5 8.5v.01" />
          <path d="M16 15.5v.01" />
          <path d="M12 12v.01" />
          <path d="M11 17v.01" />
          <path d="M7 14v.01" />
        </svg>
      </button>
    )
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-gray-200 p-4 md:p-6 animate-slide-up">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start">
          <div className="pr-4">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Cookie Consent</h2>
            <p className="text-sm text-gray-600 mb-4">
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our
              traffic. By clicking "Accept All", you consent to our use of cookies.
              <Link href="/cookie-policy" className="text-primary hover:underline ml-1">
                Read our Cookie Policy
              </Link>
            </p>
          </div>
          <button
            onClick={() => setShowBanner(false)}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close cookie banner"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-2">
          <button
            onClick={togglePreferences}
            className="flex items-center text-sm text-gray-600 hover:text-primary mb-4"
          >
            {showPreferences ? (
              <>
                <ChevronUp className="h-4 w-4 mr-1" />
                Hide cookie preferences
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4 mr-1" />
                Customize cookie preferences
              </>
            )}
          </button>

          {showPreferences && (
            <div className="bg-gray-50 p-4 rounded-md mb-4 border border-gray-200">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">Necessary Cookies</h3>
                    <p className="text-sm text-gray-500">
                      Essential for the website to function properly. Cannot be disabled.
                    </p>
                  </div>
                  <Switch checked={preferences.necessary} disabled={true} className="opacity-60" />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">Functional Cookies</h3>
                    <p className="text-sm text-gray-500">Enable personalized features and remember your preferences.</p>
                  </div>
                  <Switch
                    checked={preferences.functional}
                    onCheckedChange={() => handlePreferenceChange("functional")}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">Analytics Cookies</h3>
                    <p className="text-sm text-gray-500">Help us understand how visitors interact with our website.</p>
                  </div>
                  <Switch checked={preferences.analytics} onCheckedChange={() => handlePreferenceChange("analytics")} />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">Marketing Cookies</h3>
                    <p className="text-sm text-gray-500">Used to deliver relevant ads and track their performance.</p>
                  </div>
                  <Switch checked={preferences.marketing} onCheckedChange={() => handlePreferenceChange("marketing")} />
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-3 justify-end">
            <Button
              variant="outline"
              onClick={rejectNonEssential}
              className="text-gray-700 border-gray-300 hover:bg-gray-100"
            >
              Reject Non-Essential
            </Button>
            <Button
              variant="outline"
              onClick={savePreferences}
              className="text-primary border-primary hover:bg-primary/10"
              disabled={!showPreferences}
            >
              Save Preferences
            </Button>
            <Button onClick={acceptAll} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
