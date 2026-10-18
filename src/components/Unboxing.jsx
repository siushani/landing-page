import { Check } from 'lucide-react'

const items = [
  '1x AURA PRO Headphone',
  '1x Hard Shell Travel Case',
  '1x Braided Audio Cable',
  '1x USB-C Charging Cable',
  '1x Flight Adapter',
]

export default function Unboxing() {
  return (
    <section className="py-20 md:py-24 px-6 md:px-20">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center gap-5 mb-14">
        <div className="badge">UNBOXING PACKAGE</div>
        <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white">
          What's Inside Your Pod
        </h2>
      </div>

      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left — checklist */}
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item} className="card flex items-center gap-4 !p-5">
              <div className="w-8 h-8 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0">
                <Check className="text-accent" size={16} />
              </div>
              <span className="font-sans font-medium text-[15px] text-white/80">{item}</span>
            </div>
          ))}
        </div>

        {/* Right — stylized package visual */}
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 bg-panel">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-[200px] h-[200px] bg-accent/8 rounded-full blur-[60px]" />
            <div className="relative flex flex-col items-center gap-2">
              {/* Stylized case */}
              <div className="w-48 h-32 rounded-2xl bg-gradient-to-br from-[#1a1a1f] to-[#08080A] border border-white/10 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border-2 border-accent/30 bg-accent/5 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-accent shadow-[0_0_12px_rgba(0,240,255,0.6)]" />
                </div>
              </div>
              <span className="font-mono text-[11px] text-muted uppercase tracking-widest mt-2">Premium Packaging</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
