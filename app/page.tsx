import { AnimatedBackground } from "@/components/animated-background"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { Programs } from "@/components/programs"
import { ServicesGrid } from "@/components/services-grid"
import { Philosophy } from "@/components/philosophy"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <Programs />
      <Philosophy />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
