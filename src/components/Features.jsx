import { Battery, Brain, Award, Headphones } from 'lucide-react'

const features = [
  {
    icon: Battery,
    title: '48+ Hours',
    subtitle: 'Laser Battery Life',
    desc: 'Extended playback with fast-charge support — 10 minutes yields 5 hours of audio.',
  },
  {
    icon: Brain,
    title: 'Adaptive ANC',
    subtitle: 'Cognitive Smart Cancellation',
    desc: 'Real-time environment noise detection adjusts suppression levels 50,000 times per second.',
  },
  {
    icon: Award,
    title: 'Hi-Res Cert',
    subtitle: 'Audiophile Acoustic Grade',
    desc: 'Certified driver systems deliver studio-reference frequency response across the spectrum.',
  },
  {
    icon: Headphones,
    title: 'Spatial Audio',
    subtitle: '360° Dynamic Head-Tracking',
    desc: 'Immersive surround sound with gyroscopic head-tracking for a theater-grade experience.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-neon/30 bg-cyan-neon/5 text-xs font-semibold text-cyan-neon tracking-widest uppercase mb-4">
            Uncompromising Hardware
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold">Machined For Audio Perfectionists</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="glass-card p-8 group hover:border-cyan-neon/30 hover:bg-cyan-neon/[0.05] transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-cyan-neon/10 border border-cyan-neon/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <f.icon className="text-cyan-neon" size={24} />
              </div>
              <h3 className="text-2xl font-extrabold mb-1">{f.title}</h3>
              <p className="text-cyan-neon text-sm font-semibold mb-3">{f.subtitle}</p>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
