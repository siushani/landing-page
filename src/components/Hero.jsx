const IMG = 'https://media.base44.com/images/public/6ad49dd8c083e49bc52fdccb'

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

        {/* Right — real product photo */}
        <div className="relative flex items-center justify-center flex-1 min-h-[300px] lg:min-h-[600px]">
          <div className="absolute w-[320px] h-[320px] md:w-[460px] md:h-[460px] bg-accent/10 rounded-full blur-[90px] animate-glow" />
          <img
            src={`${IMG}/b97c29f92_Rectangle.png`}
            alt="AURA PRO headphones"
            className="relative z-10 max-w-full max-h-[500px] object-contain animate-float drop-shadow-[0_0_40px_rgba(0,240,255,0.15)]"
          />
        </div>
      </div>
    </section>
  )
}
