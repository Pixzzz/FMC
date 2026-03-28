"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Flame, Droplets, PersonStanding, Building2, Baby } from "lucide-react"

const categories = [
  { id: "all", label: "Todos" },
  { id: "outdoor", label: "Outdoor" },
  { id: "natacion", label: "Natación" },
  { id: "burning", label: "Burning" },
  { id: "kids", label: "Kids" },
  { id: "empresarial", label: "Empresarial" },
]

const programs = [
  {
    id: 1,
    category: "burning",
    name: "Burning Básico",
    subtitle: "Quema grasa efectiva",
    price: "RD$1,500",
    period: "/mes",
    icon: Flame,
    features: [
      "4 sesiones semanales",
      "Plan de entrenamiento HIIT",
      "Acceso a comunidad",
      "Seguimiento básico"
    ],
    popular: false,
  },
  {
    id: 2,
    category: "burning",
    name: "Burning Pro",
    subtitle: "Transformación total",
    price: "RD$2,800",
    period: "/mes",
    icon: Flame,
    features: [
      "6 sesiones semanales",
      "Plan nutricional incluido",
      "Seguimiento personalizado",
      "Acceso a clases en vivo",
      "Asesoría WhatsApp"
    ],
    popular: true,
  },
  {
    id: 3,
    category: "natacion",
    name: "Natación Principiante",
    subtitle: "Aprende desde cero",
    price: "RD$1,800",
    period: "/mes",
    icon: Droplets,
    features: [
      "3 sesiones semanales",
      "Grupos reducidos",
      "Técnica de flotación",
      "Respiración básica"
    ],
    popular: false,
  },
  {
    id: 4,
    category: "natacion",
    name: "Natación Avanzado",
    subtitle: "Perfecciona tu técnica",
    price: "RD$3,200",
    period: "/mes",
    icon: Droplets,
    features: [
      "5 sesiones semanales",
      "Todos los estilos",
      "Video análisis",
      "Plan de resistencia",
      "Preparación competitiva"
    ],
    popular: true,
  },
  {
    id: 5,
    category: "outdoor",
    name: "Outdoor Starter",
    subtitle: "Entrena al aire libre",
    price: "RD$1,300",
    period: "/mes",
    icon: PersonStanding,
    features: [
      "Plan progresivo 8 semanas",
      "3 entrenamientos/semana",
      "Pesas y ejercicios funcionales",
      "Comunidad outdoor"
    ],
    popular: false,
  },
  {
    id: 6,
    category: "outdoor",
    name: "Outdoor Elite",
    subtitle: "Domina tu cuerpo al máximo",
    price: "RD$2,500",
    period: "/mes",
    icon: PersonStanding,
    features: [
      "Plan personalizado",
      "5 entrenamientos/semana",
      "Planchas, lagartijas y pesas",
      "Nutrición deportiva",
      "Circuitos de alta intensidad"
    ],
    popular: true,
  },
  {
    id: 7,
    category: "kids",
    name: "Kids Active",
    subtitle: "Niños 6-12 años",
    price: "RD$1,500",
    period: "/mes",
    icon: Baby,
    features: [
      "2 sesiones semanales",
      "Actividades lúdicas",
      "Desarrollo motriz",
      "Grupos por edad"
    ],
    popular: false,
  },
  {
    id: 8,
    category: "kids",
    name: "Kids Natación",
    subtitle: "Aprenden jugando",
    price: "RD$2,200",
    period: "/mes",
    icon: Baby,
    features: [
      "3 sesiones semanales",
      "Seguridad acuática",
      "Técnicas básicas",
      "Juegos en agua",
      "Diploma de nivel"
    ],
    popular: true,
  },
  {
    id: 9,
    category: "empresarial",
    name: "Corporate Wellness",
    subtitle: "Para tu empresa",
    price: "RD$4,500",
    period: "/mes",
    icon: Building2,
    features: [
      "Sesiones grupales",
      "Horarios flexibles",
      "Charlas de bienestar",
      "Reportes de participación",
      "Hasta 20 empleados"
    ],
    popular: false,
  },
  {
    id: 10,
    category: "empresarial",
    name: "Corporate Premium",
    subtitle: "Bienestar integral",
    price: "RD$5,000",
    period: "/mes",
    icon: Building2,
    features: [
      "Programa personalizado",
      "Evaluaciones físicas",
      "Nutricionista incluido",
      "Actividades team building",
      "Hasta 50 empleados",
      "Soporte dedicado"
    ],
    popular: true,
  }
]

export function Programs() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredPrograms = activeCategory === "all"
    ? programs
    : programs.filter(p => p.category === activeCategory)

  return (
    <section id="programas" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-4">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Programas
          </span>
        </div>

        <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground text-center mb-4 leading-tight">
          Fitness Que Te{" "}
          <span className="italic text-gradient-entiende">Entiende</span>
        </h2>

        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto text-center mb-12">
          Programas diseñados para cada estilo de vida, cada meta y cada persona.
        </p>

        {/* Category filter — liquid glass pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat.id
                  ? "bg-foreground text-background shadow-lg shadow-white/10"
                  : "bg-white/[0.05] text-muted-foreground hover:text-foreground hover:bg-white/[0.10] border border-white/[0.08] hover:border-white/[0.15] backdrop-blur-sm"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Programs grid — liquid glass cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredPrograms.map((program, index) => (
            <div
              key={program.id}
              className={`relative p-6 rounded-3xl liquid-glass-card group ${program.popular
                  ? "liquid-glass-card-popular"
                  : ""
                }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {program.popular && (
                <div className="absolute right-6 px-4 py-1 bg-foreground text-background text-xs font-bold rounded-full shadow-md shadow-white/10 z-10">
                  POPULAR
                </div>
              )}

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <program.icon className="w-7 h-7 text-foreground/80" />
              </div>

              <div className="mb-4 relative z-10">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-xl text-foreground mb-1">
                  {program.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {program.subtitle}
                </p>
              </div>

              <div className="mb-6 relative z-10">
                <span className="text-3xl font-extrabold text-foreground font-[family-name:var(--font-heading)]">
                  {program.price}
                </span>
                <span className="text-muted-foreground text-sm">{program.period}</span>
              </div>

              <ul className="space-y-3 mb-6 relative z-10">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/[0.08] border border-white/[0.10] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-foreground/70" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full h-12 rounded-full gap-2 font-semibold transition-all duration-300 relative z-10 ${program.popular
                    ? "bg-foreground hover:bg-foreground/90 text-background shadow-md shadow-white/10 hover:shadow-lg hover:shadow-white/15"
                    : "bg-white/[0.08] hover:bg-foreground hover:text-background text-foreground border border-white/[0.10] hover:border-transparent"
                  }`}
              >
                Unirme al equipo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
