import { ShoppingCart, GitCompare } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section id="order" className="relative py-24 md:py-32 px-6 md:px-20 overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full bg-accent/8 blur-[150px]" />
      </div>

      {/* Wave SVG */}
      <svg className="absolute bottom-0 left-0 w-full h-24 opacity-15" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path d="M0,50 Q360,0 720,50 T1440,50 V100 H0 Z" fill="#00F0FF" />
      </svg>

      <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center gap-6 relative z-10">
        <div className="badge">EXCLUSIVE RELEASE OFFER</div>

        <h2 className="font-display font-extrabold text-[36px] md:text-[56px] leading-[110%] tracking-[-0.02em]">
          <span className="text-white">Disconnect From The </span>
          <span className="text-accent">Chaos</span>
        </h2>

        <p className="font-sans font-normal text-[15px] md:text-[16px] leading-[160%] text-muted max-w-xl">
          Secure your pair of AURA Pro today. Free Express Shipping globally. 30-day risk-free
          acoustic trials in your studio.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <a href="#" className="btn-primary">
            <ShoppingCart size={18} /> Order Pre-Release Pack
          </a>
          <a href="#" className="btn-outline">
            <GitCompare size={18} /> Compare Models
          </a>
        </div>

        <p className="font-mono text-[12px] text-muted mt-4">Pre-order ships Q1 2026 · Limited to 5,000 units</p>
      </div>
    </section>
  )
}
