import { Check, Package } from 'lucide-react'

const items = [
  'AURA PRO Headset',
  'Hard Shell Travel Case',
  'Braided Audio Cable',
  'USB-C Charging Cable',
  'Flight Adapter',
]

export default function Unboxing() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold">What's Inside Your Pod</h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            Every AURA PRO ships with a complete premium accessory kit, ready for any listening environment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — checklist */}
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item} className="glass-card p-5 flex items-center gap-4 hover:border-cyan-neon/20 transition-colors">
                <div className="w-8 h-8 rounded-full bg-cyan-neon/15 border border-cyan-neon/30 flex items-center justify-center shrink-0">
                  <Check className="text-cyan-neon" size={16} />
                </div>
                <span className="text-white/80 font-medium">{item}</span>
              </div>
            ))}
            <div className="flex items-center gap-3 pt-4 text-white/40 text-sm">
              <Package size={16} className="text-cyan-neon" />
              Premium recyclable packaging with magnetic closure
            </div>
          </div>

          {/* Right — packaging image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
              alt="AURA PRO packaging and accessories"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
            <div className="absolute inset-0 border border-white/10 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
