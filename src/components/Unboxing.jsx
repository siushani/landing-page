import { Check } from 'lucide-react'

const IMG = 'https://media.base44.com/images/public/6ad49dd8c083e49bc52fdccb'

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

        {/* Right — real packaging photo */}
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10">
          <img
            src={`${IMG}/687b3f57a_Frame2.png`}
            alt="AURA PRO premium packaging and accessories"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-base/40 to-transparent" />
        </div>
      </div>
    </section>
  )
}
