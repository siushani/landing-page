import { ShoppingCart, GitCompare } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section id="order" className="relative py-32 px-6 overflow-hidden">
      {/* Animated wave background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full bg-cyan-neon/10 blur-[150px] animate-glow-pulse" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,242,254,0.08),transparent_70%)] pointer-events-none" />

      {/* Wave SVG */}
      <svg className="absolute bottom-0 left-0 w-full h-32 opacity-20" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,60 Q360,0 720,60 T1440,60 V120 H0 Z" fill="#00F2FE" className="animate-wave-slow" />
        <path d="M0,80 Q360,20 720,80 T1440,80 V120 H0 Z" fill="#00d8d6" className="animate-wave-fast" opacity="0.5" />
      </svg>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
          Disconnect From The{' '}
          <span className="bg-gradient-to-r from-cyan-neon to-cyan-teal bg-clip-text text-transparent">
            Chaos
          </span>
        </h2>
        <p className="text-lg text-white/60 mb-8 max-w-xl mx-auto">
          Join thousands of audio perfectionists. 30-day risk-free trial with free shipping
          and returns. Your silence is guaranteed.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="btn-primary flex items-center gap-2">
            <ShoppingCart size={18} /> Order Pre-Release Pack
          </a>
          <a href="#" className="btn-outline flex items-center gap-2">
            <GitCompare size={18} /> Compare Models
          </a>
        </div>
        <p className="text-white/30 text-sm mt-6">Pre-order ships Q1 2026 · Limited to 5,000 units</p>
      </div>
    </section>
  )
}
