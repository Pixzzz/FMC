export function TrustBar() {
  return (
    <section className="py-10 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-10 md:gap-16 flex-wrap opacity-30">
          {/* Partner brand names as text placeholders */}
          {[
            "Nike",
            "STRAVA", 
            "ASICS",
            "adidas",
            "WHOOP",
            "Garmin"
          ].map((brand) => (
            <span 
              key={brand} 
              className="font-[family-name:var(--font-heading)] font-bold text-sm md:text-base tracking-widest uppercase text-foreground hover:text-foreground/80 transition-opacity duration-300 cursor-default"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
