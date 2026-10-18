import { Star, Quote } from 'lucide-react'

const IMG = 'https://media.base44.com/images/public/6ad49dd8c083e49bc52fdccb'

const testimonials = [
  {
    quote: "The adaptive ANC is genuinely the best I've tested. The 40mm driver delivers a level of clarity that rivals studio monitors I've worked with for twenty years.",
    name: 'Alex Chen',
    title: 'Studio Lead Engineer',
    avatar: `${IMG}/4ad8f6012_Ellipse.png`,
  },
  {
    quote: "Build quality is exceptional — machined aluminum that feels premium in hand. Spatial audio head-tracking is so precise it feels like a dedicated theater room.",
    name: 'Sarah Vance',
    title: 'Senior Tech Critic',
    avatar: `${IMG}/66b60a993_Ellipse2.png`,
  },
  {
    quote: "48 hours of real-world battery is not marketing fluff. I flew coast to coast twice on a single charge with ANC on the entire time. Utterly reliable.",
    name: 'Kaelen Cross',
    title: 'Audio Engineer',
    avatar: null,
  },
]

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-panel py-20 md:py-[120px] px-6 md:px-20 mb-12 md:mb-20">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-12">
        {/* Left — light mode mockup (42%) */}
        <div className="lg:w-[42%]">
          <div className="bg-white rounded-2xl p-8 min-h-[400px] md:min-h-[500px] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="text-[#FFB800] fill-[#FFB800]" size={18} />
                ))}
              </div>
              <p className="font-display font-extrabold text-[16px] text-[#08080A] mb-4">
                Absolutely incredible sound isolation...
              </p>
              <p className="font-sans font-normal text-[14px] leading-[160%] text-[#666] mb-6">
                "The moment I put these on, the world just vanished. The bass is punchy without
                being overwhelming, and the treble sparkles with crystal clarity. Worth every penny
                of the $399. I've tried Sony, Bose, and Apple — AURA Pro beats them all."
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              <img
                src={`${IMG}/4ad8f6012_Ellipse.png`}
                alt="Alex Chen"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-sans font-semibold text-[14px] text-[#08080A]">Alex Chen</p>
                <p className="font-sans font-normal text-[12px] text-[#999]">Verified Buyer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right — testimonial cards (58%) */}
        <div className="flex-1 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <div className="badge self-start">CRITICAL PRAISE</div>
            <h2 className="font-display font-extrabold text-[28px] md:text-[36px] text-white">
              Sounds Like True Perfection
            </h2>
          </div>

          {testimonials.map((t) => (
            <div key={t.name} className="bg-base border border-white/10 rounded-2xl p-6 flex flex-col gap-3 hover:border-accent/30 transition-colors">
              <Quote className="text-accent/30" size={24} />
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="text-accent fill-accent" size={14} />
                ))}
              </div>
              <p className="font-sans font-normal text-[13px] leading-[150%] text-white/70 flex-1">"{t.quote}"</p>
              <div className="pt-3 border-t border-white/5 flex items-center gap-3">
                {t.avatar ? (
                  <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full object-cover" />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center font-display font-bold text-[14px] text-accent">
                    {t.name.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-sans font-semibold text-[14px] text-white">{t.name}</p>
                  <p className="font-sans font-normal text-[12px] text-accent/70">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
