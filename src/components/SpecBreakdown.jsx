import { Cpu, Bluetooth, Gauge, Waves } from 'lucide-react'

const specs = [
  { icon: Gauge, label: 'Acoustic Driver', value: '40mm Beryllium-Coated Dynamic' },
  { icon: Waves, label: 'Frequency Range', value: '4Hz – 45,000Hz (Hi-Res Certified)' },
  { icon: Cpu, label: 'ANC Chipset', value: 'Adaptive -48dB Active Suppression' },
  { icon: Bluetooth, label: 'Connectivity', value: 'Bluetooth 5.4 LE / AAC / LDAC / aptX HD' },
]

export default function SpecBreakdown() {
  return (
    <section id="specs" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-neon/30 bg-cyan-neon/5 text-xs font-semibold text-cyan-neon tracking-widest uppercase mb-4">
            Explosive Engineering
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold">Engineered Down To Every Micro-Decibel</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — exploded view diagram */}
          <div className="relative flex items-center justify-center min-h-[400px]">
            <div className="absolute w-[300px] h-[300px] bg-cyan-neon/10 rounded-full blur-[80px]" />
            <div className="relative">
              {/* Exploded driver layers */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-48 h-3 rounded-full bg-gradient-to-r from-cyan-neon/30 to-cyan-teal/30 border border-cyan-neon/40" />
                <div className="w-44 h-6 rounded-full bg-white/5 border border-white/10" />
                <div className="w-40 h-10 rounded-full bg-gradient-to-r from-[#1a2030] to-[#0b0f17] border border-white/15 flex items-center justify-center">
                  <span className="text-[10px] text-cyan-neon font-mono">40mm DRIVER</span>
                </div>
                <div className="w-36 h-5 rounded-full bg-white/5 border border-white/10" />
                <div className="w-32 h-8 rounded-full bg-gradient-to-r from-cyan-neon/15 to-cyan-teal/15 border border-cyan-neon/30 flex items-center justify-center">
                  <span className="text-[9px] text-cyan-neon/70 font-mono">MAGNET</span>
                </div>
                <div className="w-28 h-3 rounded-full bg-white/5 border border-white/10" />
              </div>
              {/* Connector lines */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-neon/0 via-cyan-neon/20 to-cyan-neon/0" />
            </div>
          </div>

          {/* Right — spec table */}
          <div className="space-y-4">
            {specs.map((s) => (
              <div key={s.label} className="glass-card p-6 flex items-start gap-4 hover:border-cyan-neon/20 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-cyan-neon/10 border border-cyan-neon/20 flex items-center justify-center shrink-0">
                  <s.icon className="text-cyan-neon" size={20} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest font-semibold mb-1">{s.label}</p>
                  <p className="text-lg font-semibold text-white">{s.value}</p>
                </div>
              </div>
            ))}
            <div className="glass-card p-6 flex items-center justify-between">
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest font-semibold mb-1">Weight</p>
                <p className="text-lg font-semibold text-white">260 Grams Ultra-Balanced</p>
              </div>
              <span className="text-2xl font-extrabold text-cyan-neon">260g</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
