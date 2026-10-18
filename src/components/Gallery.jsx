const IMG = 'https://media.base44.com/images/public/6ad49dd8c083e49bc52fdccb'

const images = [
  { url: `${IMG}/92eeb6605_Rectangle1.png`, label: 'Product Detail' },
  { url: `${IMG}/5a4f11879_Rectangle2.png`, label: 'Engineered Hinge' },
  { url: `${IMG}/0825758f6_Rectangle3.png`, label: 'Neon City' },
  { url: `${IMG}/49076f822_Rectangle4.png`, label: 'Cyber Station' },
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
