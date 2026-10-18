const features = [
  {
    node: 'SECURE_NODE // 01',
    stat: '40+ Hours',
    subtitle: 'Laser Battery Life',
    desc: 'High-density reserve cells deliver 40 hours of playtime with Active ANC turned on. Quick-charge via cyber USB-C grants 8 hours of power in just 10 minutes.',
  },
  {
    node: 'SECURE_NODE // 02',
    stat: 'Adaptive ANC',
    subtitle: 'Cognitive Smart Cancellation',
    desc: 'Six internal hybrid microphones process environmental noises 48,000 times per second to create perfectly responsive counter-phase acoustic blockages.',
  },
  {
    node: 'SECURE_NODE // 03',
    stat: 'Hi-Res Cert',
    subtitle: 'Audiophile Acoustic Grade',
    desc: 'Custom 40mm beryllium-coated dynamic drivers output rich, low distortion bass and crisp sparkling trebles certified for studio master-tier frequencies.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-24 px-6 md:px-20">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center gap-5 mb-14">
        <div className="badge">UNCOMPROMISING HARDWARE</div>
        <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white">
          Machined For Audio Perfectionists
        </h2>
      </div>

      <div className="max-w-[1440px] mx-auto grid md:grid-cols-3 gap-6">
        {features.map((f) => (
          <div key={f.node} className="card flex flex-col gap-4 text-left">
            <span className="font-mono font-normal text-[12px] text-accent">{f.node}</span>
            <h3 className="font-mono font-extrabold text-[28px] md:text-[32px] text-white leading-tight">
              {f.stat}
            </h3>
            <p className="font-display font-bold text-[18px] md:text-[20px] text-white">{f.subtitle}</p>
            <p className="font-sans font-normal text-[14px] leading-[150%] text-muted">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
