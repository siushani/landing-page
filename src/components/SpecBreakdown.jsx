import { Cpu, Bluetooth, Gauge, Waves, Weight } from 'lucide-react'

const IMG = 'https://media.base44.com/images/public/6ad49dd8c083e49bc52fdccb'

const specs = [
  { icon: Gauge, label: 'Acoustic Driver', value: '40mm Custom Beryllium-Coated Dynamic' },
  { icon: Waves, label: 'Frequency Range', value: '4Hz – 45,000Hz (Hi-Res Audio Certified)' },
  { icon: Cpu, label: 'ANC Threshold', value: 'Adaptive -48dB Active Suppression' },
  { icon: Bluetooth, label: 'Connectivity Protocols', value: 'Bluetooth® 5.3 LE, AAC, LDAC, aptX HD' },
  { icon: Weight, label: 'Weight Specifications', value: '260 Grams Ultra-balanced Ergonomics' },
]

export default function SpecBreakdown() {
  return (
    <section id="specs" className="py-20 md:py-24 px-6 md:px-20">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center gap-5 mb-14">
        <div className="badge">DATA SHEET // AURA PRO</div>
        <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white">
          Engineered Down To Every Micro-Decibel
        </h2>
      </div>

      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left — real exploded driver image */}
        <div className="relative flex items-center justify-center min-h-[380px]">
          <div className="absolute w-[280px] h-[280px] bg-accent/8 rounded-full blur-[80px]" />
          <img
            src={`${IMG}/c1e6772d3_Frame.png`}
            alt="Exploded view of AURA PRO acoustic driver"
            className="relative z-10 max-w-full max-h-[450px] object-contain rounded-2xl"
          />
        </div>

        {/* Right — spec table */}
        <div className="space-y-3">
          {specs.map((s) => (
            <div key={s.label} className="card flex items-start gap-4 !p-5">
              <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                <s.icon className="text-accent" size={18} />
              </div>
              <div>
                <p className="font-mono font-normal text-[11px] uppercase tracking-widest text-muted mb-1">
                  {s.label}
                </p>
                <p className="font-sans font-medium text-[15px] text-white">{s.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
