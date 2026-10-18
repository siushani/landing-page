import { AudioWaveform } from 'lucide-react'

export default function ANCSimulator() {
  // Generate noisy waveform (left — chaotic red)
  const noisePath = (() => {
    const pts = []
    for (let x = 0; x <= 400; x += 3) {
      const y = 60 + Math.sin(x * 0.08) * 22 + Math.sin(x * 0.03) * 14 + (Math.random() - 0.5) * 8
      pts.push(`${x === 0 ? 'M' : 'L'} ${x} ${y.toFixed(1)}`)
    }
    return pts.join(' ')
  })()

  // Generate flat-ish anti-noise (right — cyan, near-zero)
  const calmPath = (() => {
    const pts = []
    for (let x = 0; x <= 400; x += 3) {
      const y = 60 + Math.sin(x * 0.08) * 1.5
      pts.push(`${x === 0 ? 'M' : 'L'} ${x} ${y.toFixed(1)}`)
    }
    return pts.join(' ')
  })()

  return (
    <section id="anc" className="bg-panel py-20 md:py-24 px-6 md:px-20 mb-12">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center gap-5">
        <div className="badge">
          <AudioWaveform size={12} /> ADAPTIVE ANC SIMULATOR
        </div>

        <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-white">
          Destructive Wave Cancellation
        </h2>

        <p className="font-sans font-normal text-[14px] md:text-[15px] leading-[160%] text-muted max-w-2xl">
          Observe how the dual cyber-sensors detect incoming low-frequency noise and instantly
          generate an opposing anti-phase wave, dropping ambient feedback to zero decibels.
        </p>

        {/* Visualization container */}
        <div className="w-full bg-base border border-white rounded-2xl p-6 md:p-8 mt-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left — noise */}
            <div className="flex flex-col gap-4">
              <span className="font-mono font-normal text-[12px] text-muted">
                OUTSIDE AMBIENT NOISE (90dB)
              </span>
              <div className="bg-black/40 rounded-xl p-4 border border-red-500/20 overflow-hidden h-[120px] flex items-center">
                <svg viewBox="0 0 400 120" className="w-full h-full" preserveAspectRatio="none">
                  <path d={noisePath} fill="none" stroke="#ff4757" strokeWidth="2" className="animate-wave-noise" />
                  <path d={noisePath} fill="none" stroke="#ff4757" strokeWidth="1" opacity="0.4"
                    transform="translate(0, 10)" className="animate-wave-noise" />
                </svg>
              </div>
            </div>

            {/* Right — cancelled */}
            <div className="flex flex-col gap-4">
              <span className="font-mono font-normal text-[12px] text-accent">
                ANTI-NOISE CORRECTION ACTIVE (0dB)
              </span>
              <div className="bg-black/40 rounded-xl p-4 border border-accent/20 overflow-hidden h-[120px] flex items-center">
                <svg viewBox="0 0 400 120" className="w-full h-full" preserveAspectRatio="none">
                  <path d={calmPath} fill="none" stroke="#00F0FF" strokeWidth="2" strokeDasharray="6 6"
                    className="animate-wave-calm" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
