"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react"

export function CTA() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.10] text-foreground/70 text-sm font-medium mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            Empieza hoy
          </div>

          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-7xl font-extrabold text-foreground mb-6 leading-tight">
            Tu Mejor Versión{" "}
            <br className="hidden sm:block" />
            <span className="italic text-gradient">Comienza Aquí</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Únete a nuestra lista y recibe contenido exclusivo, tips de entrenamiento y ofertas especiales.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-3 p-6 rounded-3xl liquid-glass max-w-lg mx-auto">
              <CheckCircle className="w-7 h-7 text-foreground relative z-10" />
              <span className="text-foreground font-semibold text-lg relative z-10">¡Gracias! Te contactaremos pronto.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
              <div className="liquid-glass rounded-3xl p-2">
                <div className="flex flex-col sm:flex-row gap-2 relative z-10">
                  <Input
                    type="text"
                    placeholder="Tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="h-14 rounded-xl border-0 bg-transparent text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
                  />
                  <Input
                    type="email"
                    placeholder="Tu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-14 rounded-xl border-0 bg-transparent text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="h-14 px-8 rounded-xl bg-foreground hover:bg-foreground/90 text-background font-semibold gap-2 whitespace-nowrap transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
                  >
                    Unirme
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </form>
          )}

          <p className="mt-6 text-sm text-muted-foreground">
            Sin spam. Solo contenido de valor para tu transformación.
          </p>

          {/* Phone mockups area — liquid glass */}
          <div className="mt-16 flex items-end justify-center gap-6">
            {/* Phone 1 */}
            <div className="hidden sm:block w-44 h-80 rounded-[2rem] liquid-glass overflow-hidden -rotate-6 translate-y-4">
              <div className="m-1.5 rounded-[1.7rem] h-[calc(100%-12px)] bg-black/30 flex items-center justify-center relative z-10">
                <div className="text-center">
                  <div className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground/70">40:28.02</div>
                  <div className="text-xs text-muted-foreground mt-1">Sesión activa</div>
                </div>
              </div>
            </div>

            {/* Phone 2 (center, bigger) */}
            <div className="w-52 h-96 rounded-[2.5rem] liquid-glass overflow-hidden z-10">
              <div className="m-2 rounded-[2rem] h-[calc(100%-16px)] bg-black/30 flex flex-col items-center justify-center p-5 relative z-10">
                <div className="w-16 h-16 rounded-full bg-white/[0.08] border border-white/[0.12] flex items-center justify-center mb-4">
                  <span className="text-2xl font-extrabold text-foreground font-[family-name:var(--font-heading)]">FCM</span>
                </div>
                <p className="text-foreground font-semibold text-sm">Fit Con Miguel</p>
                <p className="text-muted-foreground text-xs mt-1">Tu app de fitness</p>
                <Button className="mt-6 rounded-full h-10 px-6 bg-foreground text-background text-xs font-semibold hover:shadow-lg hover:shadow-white/10">
                  Descargar App
                </Button>
              </div>
            </div>

            {/* Phone 3 */}
            <div className="hidden sm:block w-44 h-80 rounded-[2rem] liquid-glass overflow-hidden rotate-6 translate-y-4">
              <div className="m-1.5 rounded-[1.7rem] h-[calc(100%-12px)] bg-black/30 flex items-center justify-center relative z-10">
                <div className="text-center">
                  <div className="flex justify-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map(i => (
                      <div key={i} className="w-1.5 rounded-full bg-white/[0.30]" style={{ height: `${15 + i * 6}px` }} />
                    ))}
                  </div>
                  <div className="text-xs text-muted-foreground">Tu progreso</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
