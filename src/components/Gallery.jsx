const images = [
  { url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80', label: 'Studio Close-Up' },
  { url: 'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?auto=format&fit=crop&w=600&q=80', label: 'Cyberpunk City Wear' },
  { url: 'https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=600&q=80', label: 'Gaming Setup' },
  { url: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80', label: 'Daily Commute' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-neon/30 bg-cyan-neon/5 text-xs font-semibold text-cyan-neon tracking-widest uppercase mb-4">
            Industrial Aesthetics
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold">Form and Function. United.</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {images.map((img) => (
            <div key={img.label} className="relative group rounded-2xl overflow-hidden aspect-square md:aspect-[4/3]">
              <img src={img.url} alt={img.label} loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <span className="text-sm font-semibold text-white/90">{img.label}</span>
              </div>
              <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-cyan-neon/30 transition-colors pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
