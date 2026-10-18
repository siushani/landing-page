import { AudioWaveform } from 'lucide-react'

export default function ANCSimulator() {
  // Generate waveform paths
  const generateWave = (offset, amplitude, frequency, phase, width, height, color, dashed = false) => {
    const points = []
    for (let x = 0; x <= width; x += 4) {
      const y = height / 2 + Math.sin((x * frequency + phase) * 0.05) * amplitude + offset
      points.push(`${x === 0 ? 'M' : 'L'} ${x} ${y}`)
    }
    return { d: points.join(' '), color, dashed }
  }

  const width = 500
  const height = 100

  const waves = [
    generateWave(0, 28, 2, 0, width, height, '#ff4757'),
    generateWave(0, 28, 2, 180, width, height, '#00F2FE', true),
    generateWave(0, 14, 4, 90, width, height, '#ff4757', true),
    generateWave(0, 14, 4, 270, width, height, '#00F2FE'),
  ]

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-neon/30 bg-cyan-neon/5 text-xs font-semibold text-cyan-neon tracking-widest uppercase mb-4">
          <AudioWaveform size={12} /> Adaptive ANC Simulator
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Destructive Wave Cancellation</h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          Active phase-inversion technology generates a mirror-image waveform in real-time,
          neutralizing external noise before it reaches your ear.
        </p>
      </div>

      <div className="max-w-5xl mx-auto glass-card p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* External noise */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-red-400">Outside Ambient Noise</span>
              <span className="text-xs px-2 py-1 rounded-full bg-red-500/10 text-red-400 font-mono">90 dB</span>
            </div>
            <div className="relative bg-black/30 rounded-xl p-4 overflow-hidden border border-red-500/20">
              <svg viewBox={`0 0 ${width} ${height}`} className="w-full" preserveAspectRatio="none">
                <path d={waves[0].d} fill="none" stroke={waves[0].color} strokeWidth="2" className="animate-wave-slow" />
                <path d={waves[2].d} fill="none" stroke={waves[2].color} strokeWidth="1.5" strokeDasharray="4 4" className="animate-wave-fast" opacity="0.6" />
              </svg>
            </div>
          </div>

          {/* Anti-noise */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-cyan-neon">Anti-Noise Correction Active</span>
              <span className="text-xs px-2 py-1 rounded-full bg-cyan-neon/10 text-cyan-neon font-mono">0 dB</span>
            </div>
            <div className="relative bg-black/30 rounded-xl p-4 overflow-hidden border border-cyan-neon/20">
              <svg viewBox={`0 0 ${width} ${height}`} className="w-full" preserveAspectRatio="none">
                <path d={waves[1].d} fill="none" stroke={waves[1].color} strokeWidth="2" strokeDasharray="4 4" className="animate-wave-slow" />
                <path d={waves[3].d} fill="none" stroke={waves[3].color} strokeWidth="1.5" className="animate-wave-fast" opacity="0.6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Result bar */}
        <div className="mt-8 flex items-center gap-4 p-4 rounded-xl bg-cyan-neon/5 border border-cyan-neon/20">
          <div className="flex-1">
            <div className="flex justify-between text-xs text-white/50 mb-2">
              <span>Noise Reduction</span>
              <span className="text-cyan-neon font-mono">-45 dB</span>
            </div>
            <div className="h-2 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-[90%] bg-gradient-to-r from-cyan-neon to-cyan-teal rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
