"use client"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Base gradient — subtle depth, not pure dead black */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.06_0_0)] via-[oklch(0.08_0_0)] to-[oklch(0.10_0_0)]" />

      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated orbs — give life to the dark background */}
      {/* Orb 1 — Top left, warm white */}
      <div
        className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)',
          animation: 'orb-drift-1 25s ease-in-out infinite, orb-pulse 8s ease-in-out infinite',
        }}
      />

      {/* Orb 2 — Bottom right, cool white */}
      <div
        className="absolute bottom-[5%] right-[10%] w-[600px] h-[600px] rounded-full blur-[140px]"
        style={{
          background: 'radial-gradient(circle, rgba(200,210,230,0.05) 0%, transparent 70%)',
          animation: 'orb-drift-2 30s ease-in-out infinite, orb-pulse 10s ease-in-out infinite 2s',
        }}
      />

      {/* Orb 3 — Center, very subtle */}
      <div
        className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-[160px]"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 65%)',
          animation: 'orb-drift-3 35s ease-in-out infinite, orb-pulse 12s ease-in-out infinite 4s',
        }}
      />

      {/* Orb 4 — Top right, slight warm */}
      <div
        className="absolute top-[5%] right-[20%] w-[400px] h-[400px] rounded-full blur-[100px]"
        style={{
          background: 'radial-gradient(circle, rgba(240,235,220,0.04) 0%, transparent 70%)',
          animation: 'orb-drift-4 28s ease-in-out infinite, orb-pulse 9s ease-in-out infinite 1s',
        }}
      />

      {/* Orb 5 — Bottom left, cool blue-ish tint */}
      <div
        className="absolute bottom-[20%] left-[5%] w-[450px] h-[450px] rounded-full blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(210,220,240,0.04) 0%, transparent 70%)',
          animation: 'orb-drift-1 32s ease-in-out infinite reverse, orb-pulse 11s ease-in-out infinite 3s',
        }}
      />

      {/* Mesh grid overlay — very subtle structural texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
    </div>
  )
}
