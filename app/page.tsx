"use client"

import { HeroSection } from "@/components/HeroSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { PricingSection } from "@/components/PricingSection"
import { ContactSection } from "@/components/ContactSection"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <HeroSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
    </div>
  )
}
