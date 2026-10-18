export default function Hero() {
  return (
    <section className="relative pt-[160px] md:pt-[120px] pb-[120px] md:mb-8 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-20 flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-8 relative z-10 min-h-[600px] md:min-h-[720px]">
        {/* Left content — ~43% */}
        <div className="flex flex-col gap-6 lg:w-[43%] lg:pt-8">
          <div className="badge">
            THE FUTURE OF PREMIUM AUDIO
          </div>

          <h1 className="font-display font-extrabold text-[40px] md:text-[64px] leading-[110%] tracking-[-0.03em]">
            <span className="text-white">Silence.</span>{' '}
            <span className="text-accent">Redefined.</span>
          </h1>

          <p className="font-sans font-normal text-[16px] md:text-[18px] leading-[160%] text-muted max-w-lg">
            Step into absolute sonic isolation. The AURA Pro blends aerospace-grade
            acoustics with adaptive neon-lit cyber intelligence. Your world, completely silenced.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#order" className="btn-primary">Buy Now — $399</a>
            <a href="#anc" className="btn-outline">Explore Technology</a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 md:gap-10 pt-6 border-t border-white/5">
            {[
              { stat: '4.9★', label: 'Global Rating' },
              { stat: 'Hi-Res', label: 'Certified Audio' },
              { stat: '48h', label: 'Tested Battery' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="font-mono font-bold text-[16px] text-accent">{s.stat}</span>
                <span className="font-sans font-normal text-[12px] text-muted">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — headphone visual */}
        <div className="relative flex items-center justify-center flex-1 min-h-[300px] lg:min-h-[600px]">
          <div className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] bg-accent/10 rounded-full blur-[80px] animate-glow" />
          <div className="relative animate-float">
            <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px]">
              {/* Headband */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[220px] h-[130px] md:w-[300px] md:h-[170px]
                border-[12px] md:border-[16px] border-[#1a1a1f] border-b-transparent rounded-t-full" />
              {/* Sliders */}
              <div className="absolute top-[120px] left-[24px] w-[10px] h-[40px] bg-[#1a1a1f] rounded-sm" />
              <div className="absolute top-[120px] right-[24px] w-[10px] h-[40px] bg-[#1a1a1f] rounded-sm" />
              {/* Left ear cup */}
              <div className="absolute bottom-2 left-0 w-[110px] h-[110px] md:w-[140px] md:h-[140px]
                rounded-full bg-gradient-to-br from-[#15151a] to-[#08080A] border border-[#2a2a2f]
                flex items-center justify-center shadow-2xl">
                <div className="w-[55px] h-[55px] md:w-[70px] md:h-[70px] rounded-full border-2 border-accent/40
                  bg-accent/5 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_12px_rgba(0,240,255,0.8)]" />
                </div>
              </div>
              {/* Right ear cup */}
              <div className="absolute bottom-2 right-0 w-[110px] h-[110px] md:w-[140px] md:h-[140px]
                rounded-full bg-gradient-to-br from-[#15151a] to-[#08080A] border border-[#2a2a2f]
                flex items-center justify-center shadow-2xl">
                <div className="w-[55px] h-[55px] md:w-[70px] md:h-[70px] rounded-full border-2 border-accent/40
                  bg-accent/5 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_12px_rgba(0,240,255,0.8)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
