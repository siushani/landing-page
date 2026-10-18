import { Star, Battery, Zap, BadgeCheck } from 'lucide-react'

const stats = [
  { icon: Star, label: '4.9 Global Rating' },
  { icon: BadgeCheck, label: 'Hi-Res Certified Audio' },
  { icon: Battery, label: '48h Tested Battery' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-neon/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-cyan-teal/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full border border-cyan-neon/30 bg-cyan-neon/5 text-xs font-semibold text-cyan-neon tracking-widest uppercase">
            <Zap size={12} /> Precision Audio Engine
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
            Silence.{' '}
            <span className="bg-gradient-to-r from-cyan-neon to-cyan-teal bg-clip-text text-transparent">
              Redefined.
            </span>
          </h1>

          <p className="text-lg text-white/60 max-w-xl leading-relaxed">
            Zero-distortion active noise cancellation meets aerospace-grade acoustics.
            Experience ultimate sonic clarity engineered for audio perfectionists.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#order" className="btn-primary">Pre-Order Now</a>
            <a href="#specs" className="btn-outline">Explore Tech</a>
          </div>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-6 pt-6 border-t border-white/10">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-2">
                <s.icon className="text-cyan-neon" size={18} />
                <span className="text-sm text-white/70 font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Hero headphone visual */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-[380px] h-[380px] bg-cyan-neon/15 rounded-full blur-[80px] animate-glow-pulse" />
          <div className="relative animate-float">
            {/* Stylized headphone render */}
            <div className="relative w-[340px] h-[340px] md:w-[420px] md:h-[420px]">
              {/* Headband */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[280px] h-[160px] md:w-[340px] md:h-[190px]
                border-[14px] md:border-[18px] border-white/10 border-b-transparent rounded-t-full" />
              {/* Left ear cup */}
              <div className="absolute bottom-8 left-2 md:left-4 w-[120px] h-[120px] md:w-[150px] md:h-[150px]
                rounded-full bg-gradient-to-br from-[#1a2030] to-[#0b0f17] border border-white/10
                flex items-center justify-center shadow-2xl">
                <div className="w-[60px] h-[60px] md:w-[75px] md:h-[75px] rounded-full border-2 border-cyan-neon/40
                  bg-cyan-neon/5 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-cyan-neon cyan-glow" />
                </div>
              </div>
              {/* Right ear cup */}
              <div className="absolute bottom-8 right-2 md:right-4 w-[120px] h-[120px] md:w-[150px] md:h-[150px]
                rounded-full bg-gradient-to-br from-[#1a2030] to-[#0b0f17] border border-white/10
                flex items-center justify-center shadow-2xl">
                <div className="w-[60px] h-[60px] md:w-[75px] md:h-[75px] rounded-full border-2 border-cyan-neon/40
                  bg-cyan-neon/5 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-cyan-neon cyan-glow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
