"use client"

export function Philosophy() {
  return (
    <section id="filosofia" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-4">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Filosofía
          </span>
        </div>

        <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground text-center mb-6 leading-tight">
          Tu Ritmo{" "}
          <span className="italic text-gradient-integral">Integral</span>
        </h2>

        <p className="text-center text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-16">
          Hazlo Como Puedas<span className="align-super text-xs">®</span> — El fitness debe adaptarse a tu vida, no al revés.
        </p>

        {/* Stats dashboard */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Big stat 1 */}
            <div className="liquid-glass rounded-3xl p-8 text-center group">
              <div className="text-6xl md:text-7xl font-extrabold text-foreground font-[family-name:var(--font-heading)] mb-2 relative z-10">
                91K<span className="text-muted-foreground text-4xl">+</span>
              </div>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider relative z-10">Seguidores</p>

              {/* Mini bar chart */}
              <div className="flex items-end justify-center gap-1.5 mt-6 h-12 relative z-10">
                {[40, 60, 35, 80, 55, 90, 70, 85, 95, 75, 88, 100].map((h, i) => (
                  <div
                    key={i}
                    className="w-2 rounded-full bg-white/[0.10] group-hover:bg-white/[0.25] transition-all duration-500"
                    style={{ height: `${h}%`, transitionDelay: `${i * 30}ms` }}
                  />
                ))}
              </div>
            </div>

            {/* Big stat 2 */}
            <div className="liquid-glass rounded-3xl p-8 text-center group">
              <div className="text-6xl md:text-7xl font-extrabold text-foreground font-[family-name:var(--font-heading)] mb-2 relative z-10">
                11
              </div>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider relative z-10">Años de Experiencia</p>

              {/* Progress ring */}
              <div className="flex justify-center mt-6 relative z-10">
                <div className="relative w-16 h-16">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 60 60">
                    <circle cx="30" cy="30" r="24" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
                    <circle cx="30" cy="30" r="24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="4" strokeDasharray={`${0.9 * 2 * Math.PI * 24} ${2 * Math.PI * 24}`} strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Big stat 3 */}
            <div className="liquid-glass rounded-3xl p-8 text-center group">
              <div className="text-6xl md:text-7xl font-extrabold text-foreground font-[family-name:var(--font-heading)] mb-2 relative z-10">
                5K<span className="text-muted-foreground text-4xl">+</span>
              </div>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider relative z-10">Transformaciones</p>

              {/* Wave line */}
              <div className="mt-6 flex justify-center relative z-10">
                <svg className="w-full h-10" viewBox="0 0 200 40">
                  <path
                    d="M 0 20 Q 25 5 50 20 T 100 20 T 150 20 T 200 20"
                    fill="none"
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 0 25 Q 25 35 50 25 T 100 25 T 150 25 T 200 25"
                    fill="none"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Bottom row — bigger feature card */}
          <div className="liquid-glass rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            {/* Decorative gradient blob — now white-toned */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/[0.03] rounded-full blur-3xl" />
            <div className="absolute -top-20 -left-20 w-48 h-48 bg-white/[0.03] rounded-full blur-3xl" />

            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-3xl mx-auto font-medium">
                &ldquo;El fitness debe adaptarse a tu vida, no al revés. No importa tu nivel, tu edad o tu tiempo disponible.
                Lo importante es <span className="text-foreground font-bold">empezar</span>, mantenerte <span className="text-foreground font-bold">constante</span> y disfrutar el <span className="text-foreground font-bold">proceso</span>.&rdquo;
              </p>

              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/[0.08] border border-white/[0.12] flex items-center justify-center">
                  <span className="text-lg font-bold text-foreground font-[family-name:var(--font-heading)]">M</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">Miguel</p>
                  <p className="text-sm text-muted-foreground">Fundador, Fit Con Miguel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
