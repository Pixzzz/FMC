"use client"

import { Activity, MapPin, Timer, TrendingUp } from "lucide-react"

const stats = [
  { label: "Calorias", value: "230", unit: "kcal", icon: Activity },
  { label: "Ritmo", value: "40", unit: "min", icon: Timer },
  { label: "Distancia", value: "8.1", unit: "km", icon: MapPin },
]

export function ServicesGrid() {
  return (
    <section id="servicios" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section label */}
        <div className="text-center mb-4">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Tu entrenamiento
          </span>
        </div>

        <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground text-center mb-6 leading-tight">
          FCM combina la potencia de un{" "}
          <br className="hidden md:block" />
          tracker con la intuición de un{" "}
          <span className="italic text-gradient-coach">coach</span>
        </h2>

        <p className="text-center text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-16">
          Ayudándote a ser más inteligente, más consciente y más profundo en cada sesión.
        </p>

        {/* App showcase layout */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Phone mockup */}
            <div className="flex justify-center">
              <div className="relative w-56 h-[420px] rounded-[2.5rem] liquid-glass overflow-hidden">
                {/* Phone screen */}
                <div className="absolute inset-2 rounded-[2rem] bg-black/40 overflow-hidden">
                  <div className="p-5 h-full flex flex-col relative z-10">
                    {/* Status bar */}
                    <div className="flex justify-between items-center text-xs text-muted-foreground mb-6">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 rounded-sm bg-foreground/40" />
                      </div>
                    </div>

                    {/* Circular progress */}
                    <div className="flex-1 flex items-center justify-center">
                      <div className="relative w-36 h-36">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                          <circle cx="60" cy="60" r="52" fill="none" stroke="currentColor" strokeWidth="6" className="text-white/10" />
                          <circle cx="60" cy="60" r="52" fill="none" stroke="currentColor" strokeWidth="6" className="text-foreground" strokeDasharray={`${0.72 * 2 * Math.PI * 52} ${2 * Math.PI * 52}`} strokeLinecap="round" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-3xl font-bold text-foreground font-[family-name:var(--font-heading)]">72%</span>
                          <span className="text-xs text-muted-foreground">completado</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom nav dots */}
                    <div className="flex justify-center gap-2 mt-4">
                      <div className="w-2 h-2 rounded-full bg-foreground" />
                      <div className="w-2 h-2 rounded-full bg-foreground/20" />
                      <div className="w-2 h-2 rounded-full bg-foreground/20" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Route map + Timer */}
            <div className="md:col-span-2 space-y-6">
              {/* Route map card */}
              <div className="liquid-glass rounded-3xl p-8">
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-1">Ruta del día</p>
                    <p className="text-sm text-foreground/60">Santo Domingo, DR</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-foreground/60" />
                  </div>
                </div>

                {/* Fake route visualization */}
                <div className="relative h-32 rounded-2xl bg-white/[0.03] border border-white/[0.05] overflow-hidden mb-4">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 120">
                    <path
                      d="M 30 90 Q 80 20 130 60 T 230 30 T 330 70 T 380 40"
                      fill="none"
                      stroke="rgba(255,255,255,0.35)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="6 4"
                    />
                    <circle cx="30" cy="90" r="5" fill="rgba(255,255,255,0.5)" />
                    <circle cx="380" cy="40" r="5" fill="rgba(255,255,255,0.5)" />
                    <circle cx="380" cy="40" r="9" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" opacity="0.4" />
                  </svg>
                </div>
              </div>

              {/* Timer + Stats row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Big timer */}
                <div className="liquid-glass rounded-3xl p-8 flex flex-col items-center justify-center">
                  <span className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl font-extrabold text-foreground tracking-tight relative z-10">
                    40:28<span className="text-muted-foreground">.02</span>
                  </span>
                  <div className="flex gap-6 mt-4 relative z-10">
                    {[
                      { label: "Ritmo", value: "2.3" },
                      { label: "BPM", value: "8.10" },
                      { label: "Elev.", value: "56" },
                    ].map((s) => (
                      <div key={s.label} className="text-center">
                        <div className="text-sm font-bold text-foreground">{s.value}</div>
                        <div className="text-xs text-muted-foreground">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats cards */}
                <div className="grid grid-cols-1 gap-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="liquid-glass-subtle rounded-2xl p-4 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center flex-shrink-0">
                        <stat.icon className="w-5 h-5 text-foreground/60" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                        <p className="text-lg font-bold text-foreground font-[family-name:var(--font-heading)]">
                          {stat.value} <span className="text-sm font-normal text-muted-foreground">{stat.unit}</span>
                        </p>
                      </div>
                      <TrendingUp className="w-4 h-4 text-foreground/40" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
