import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "The adaptive ANC is genuinely the best I've tested. The 40mm driver delivers a level of clarity that rivals studio monitors I've worked with for twenty years.",
    name: 'Alex Chen',
    title: 'Studio Lead Engineer',
    rating: 5,
  },
  {
    quote: "Build quality is exceptional — machined aluminum that feels premium in hand. Spatial audio head-tracking is so precise it feels like a dedicated theater room.",
    name: 'Maria Vasquez',
    title: 'Senior Tech Critic',
    rating: 5,
  },
  {
    quote: "48 hours of real-world battery is not marketing fluff. I flew coast to coast twice on a single charge with ANC on the entire time. Utterly reliable.",
    name: 'James Okafor',
    title: 'Audio Engineer',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="reviews" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-neon/30 bg-cyan-neon/5 text-xs font-semibold text-cyan-neon tracking-widest uppercase mb-4">
            Critical Praise
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold">Sounds Like True Perfection</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card p-8 flex flex-col gap-4 hover:border-cyan-neon/20 transition-colors">
              <Quote className="text-cyan-neon/40" size={32} />
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="text-cyan-neon fill-cyan-neon" size={16} />
                ))}
              </div>
              <p className="text-white/70 leading-relaxed text-sm flex-1">"{t.quote}"</p>
              <div className="pt-4 border-t border-white/10">
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-cyan-neon/70 text-sm">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
