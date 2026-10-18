import { Twitter, Instagram, Youtube, Github } from 'lucide-react'

const columns = [
  { title: 'PRODUCTS', links: ['AURA PRO', 'AURA Lite', 'AURA Studio', 'Accessories'] },
  { title: 'RESOURCES', links: ['Tech Specs', 'Reviews', 'Support', 'Warranty'] },
  { title: 'COMPANY', links: ['About Us', 'Careers', 'Press Kit', 'Contact'] },
]

const socials = [Twitter, Instagram, Youtube, Github]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-8 px-6 md:px-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="font-display font-extrabold text-[20px] uppercase tracking-[-0.04em] text-accent mb-4 block">
              AURAPRO
            </a>
            <p className="font-sans font-normal text-[14px] text-muted max-w-xs mb-6">
              Precision audio engineering for those who demand silence, redefined. Built for audio perfectionists.
            </p>
            <div className="flex gap-3">
              {socials.map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono font-semibold text-[12px] uppercase tracking-widest text-white/80 mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="font-sans font-normal text-[14px] text-muted hover:text-accent transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans font-normal text-[13px] text-muted">© 2026 AURAPRO. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="font-sans font-normal text-[13px] text-muted hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="font-sans font-normal text-[13px] text-muted hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
