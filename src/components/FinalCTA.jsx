import { ShoppingCart, GitCompare } from 'lucide-react'

const IMG = 'https://media.base44.com/images/public/6ad49dd8c083e49bc52fdccb'

export default function FinalCTA() {
  return (
    <section id="order" className="relative py-24 md:py-32 px-6 md:px-20 overflow-hidden">
      {/* Real wave background */}
      <img
        src={`${IMG}/596a289e5_final-cta.png`}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
      />
      {/* Gradient overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-base/70 via-base/40 to-base/80 pointer-events-none" />

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
