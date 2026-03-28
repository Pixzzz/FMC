"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Heart, Target, Sparkles, RotateCcw } from "lucide-react"

const moodPills = [
  { icon: Zap, label: "Energizar", color: "text-foreground/50" },
  { icon: Heart, label: "Recuperar", color: "text-foreground/50" },
  { icon: Target, label: "Enfocarse", color: "text-foreground/50" },
  { icon: Sparkles, label: "Calma", color: "text-foreground/50" },
  { icon: RotateCcw, label: "Reset", color: "text-foreground/50" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/YTDown.com_YouTube_Gente-haciendo-deporte-Recurso-web-Backg_Media_hf44HjroTto_001_1080p.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-foreground mb-6 leading-[1.05] tracking-tight animate-fade-up">
            Entrena Con{" "}
            <span className="italic text-gradient-proposito">Propósito</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.15s' }}>
            Fit Con Miguel es tu coach que escucha, aprende y se adapta —
            ayudando a tu cuerpo a encontrar su ritmo natural cada día.
          </p>

          {/* AI Chat Input Bar — Liquid Glass */}
          <div className="max-w-xl mx-auto mb-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="liquid-glass rounded-3xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center text-muted-foreground">
                  <span className="text-lg">+</span>
                </div>
                <p className="text-sm text-muted-foreground flex-1 text-left">
                  Buenos días, ¿cómo te sientes y cómo quieres moverte hoy?
                </p>
                <div className="flex gap-1">
                  <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-foreground/50 rotate-[-90deg]" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-background rotate-[-45deg]" />
                  </div>
                </div>
              </div>

              {/* Mood pills */}
              <div className="flex flex-wrap gap-2">
                {moodPills.map((pill) => (
                  <button
                    key={pill.label}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-xs font-medium text-foreground/70 transition-all duration-300 hover:scale-105 border border-white/[0.08] hover:border-white/[0.15] backdrop-blur-sm"
                  >
                    <pill.icon className={`w-3 h-3 ${pill.color}`} />
                    {pill.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  )
}
