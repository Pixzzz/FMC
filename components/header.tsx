"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Download } from "lucide-react"

const navLinks = [
  { href: "#programas", label: "Programas" },
  { href: "#servicios", label: "Servicios" },
  { href: "#filosofia", label: "Filosofía" },
  { href: "#testimonios", label: "Testimonios" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? "liquid-glass-nav-scrolled py-2"
            : "py-3 lg:py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5 group relative z-10">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-foreground flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-white/10">
                <span className="text-background font-extrabold text-sm sm:text-base font-[family-name:var(--font-heading)]">FCM</span>
              </div>
              <span className="font-[family-name:var(--font-heading)] font-bold text-base sm:text-lg text-foreground hidden sm:block tracking-tight">
                Fit Con Miguel
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 font-medium px-4 py-2 rounded-full hover:bg-white/[0.06] relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-foreground transition-all duration-300 group-hover:w-1/2 rounded-full" />
                </a>
              ))}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-2 sm:gap-3 relative z-10">
              <Button
                className="hidden sm:flex h-10 sm:h-11 px-5 sm:px-6 rounded-full bg-foreground text-background hover:bg-foreground/90 font-semibold text-sm gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-white/15 hover:scale-[1.02]"
              >
                Acceso Clientes
                <Download className="w-4 h-4" />
              </Button>

              {/* Mobile menu button */}
              <button
                className="lg:hidden p-2.5 text-foreground rounded-xl hover:bg-white/[0.08] transition-all duration-200 active:scale-95"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-400 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-400 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Slide-in panel */}
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full liquid-glass-mobile-menu transition-transform duration-400 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full pt-20 pb-8 px-6">
            {/* Close button at top */}
            <button
              className="absolute top-5 right-5 p-2.5 text-foreground/70 hover:text-foreground rounded-xl hover:bg-white/[0.08] transition-all"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar menu"
            >
              <X className="w-6 h-6" />
            </button>

            <nav className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-lg text-foreground/80 hover:text-foreground transition-all duration-300 font-medium py-3.5 px-5 rounded-2xl hover:bg-white/[0.06] ${
                    isOpen ? "animate-fade-up" : ""
                  }`}
                  style={{ animationDelay: `${index * 80 + 100}ms`, animationFillMode: "both" }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-auto pt-6 border-t border-white/[0.08]">
              <Button
                className="w-full h-13 rounded-2xl bg-foreground text-background font-semibold text-base gap-2 hover:shadow-lg hover:shadow-white/10 transition-all"
                onClick={() => setIsOpen(false)}
              >
                Acceso Clientes
                <Download className="w-4 h-4" />
              </Button>

              <p className="text-center text-xs text-muted-foreground/60 mt-4">
                Fit Con Miguel © {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
