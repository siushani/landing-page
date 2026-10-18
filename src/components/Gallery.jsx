const images = [
  { url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80', label: 'Studio Close-Up' },
  { url: 'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?auto=format&fit=crop&w=600&q=80', label: 'Cyberpunk City Wear' },
  { url: 'https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=600&q=80', label: 'Gaming Setup' },
  { url: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80', label: 'Daily Commute' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-24 px-6 md:px-20">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center gap-5 mb-14">
        <div className="badge">INDUSTRIAL AESTHETICS</div>
        <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white">
          Form and Function. United.
        </h2>
      </div>

      <div className="max-w-[1440px] mx-auto grid grid-cols-2 gap-4 md:gap-6">
        {images.map((img) => (
          <div key={img.label} className="relative group rounded-2xl overflow-hidden aspect-square md:aspect-[4/3]">
            <img src={img.url} alt={img.label} loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-base via-base/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <span className="font-sans font-medium text-[14px] text-white/90">{img.label}</span>
            </div>
            <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-accent/30 transition-colors pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  )
}
