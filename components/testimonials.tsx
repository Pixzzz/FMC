"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "María Rodríguez",
    role: "Programa Burning",
    content: "Bajé 15 libras en 3 meses siguiendo el plan. Lo mejor es que aprendí a comer bien y a disfrutar el ejercicio. El soporte de la comunidad es increíble.",
    rating: 5,
    result: "-15 lbs"
  },
  {
    id: 2,
    name: "Carlos Méndez",
    role: "Natación Avanzado",
    content: "A mis 45 años aprendí a nadar correctamente. La técnica que enseña Miguel me cambió la vida. Ahora nado 2km sin parar.",
    rating: 5,
    result: "2km nadados"
  },
  {
    id: 3,
    name: "Laura Santos",
    role: "Outdoor Elite",
    content: "Nunca pensé que podría hacer 50 lagartijas seguidas. El programa outdoor me transformó por completo. Los circuitos con pesas al aire libre son increíbles.",
    rating: 5,
    result: "50 lagartijas"
  },
  {
    id: 4,
    name: "Empresa Tech Solutions",
    role: "Corporate Premium",
    content: "Implementamos el programa en nuestra empresa y la productividad aumentó. Los empleados están más motivados y saludables.",
    rating: 5,
    result: "+30% productividad"
  }
]

export function Testimonials() {
  return (
    <section id="testimonios" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-4">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Testimonios
          </span>
        </div>

        <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground text-center mb-4 leading-tight">
          Resultados <span className="italic text-gradient-reales">Reales</span>
        </h2>

        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto text-center mb-16">
          Historias de transformación de nuestra comunidad
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="relative p-8 rounded-3xl liquid-glass-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:bg-white/[0.08] group-hover:border-white/[0.12] transition-all duration-300 z-10">
                <Quote className="w-5 h-5 text-foreground/20 group-hover:text-foreground/40 transition-colors" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-5 relative z-10">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-foreground/80 text-foreground/80" />
                ))}
              </div>

              <p className="text-foreground/85 mb-8 leading-relaxed text-[15px] relative z-10">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  {/* Avatar placeholder */}
                  <div className="w-11 h-11 rounded-full bg-white/[0.08] border border-white/[0.10] flex items-center justify-center">
                    <span className="text-sm font-bold text-foreground/80 font-[family-name:var(--font-heading)]">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.10] text-foreground/80 text-xs font-bold backdrop-blur-sm">
                  {testimonial.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
