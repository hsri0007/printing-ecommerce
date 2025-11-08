"use client"

import { X } from "lucide-react"
import { useState, useEffect } from "react"

export default function FestivalBanner() {
  const [visible, setVisible] = useState(true)

  // Optional: auto-hide after some days or user closes it
  useEffect(() => {
    const hidden = localStorage.getItem("hideFestivalBanner")
    if (hidden === "true") setVisible(false)
  }, [])

  const closeBanner = () => {
    setVisible(false)
    localStorage.setItem("hideFestivalBanner", "true")
  }

  if (!visible) return null

  return (
    <div className="relative bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white text-center py-3 px-4 font-semibold text-sm md:text-base shadow-md flex items-center justify-center gap-3">
      <span>🎉 Sankranti, New Year & Christmas Special Offer! Flat 20% OFF on all Printing Services 🎁</span>
      <button
        onClick={closeBanner}
        className="absolute right-4 hover:text-gray-200 transition"
        aria-label="Close banner"
      >
        <X size={18} />
      </button>
    </div>
  )
}
