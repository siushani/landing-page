import { Twitter, Instagram, Youtube, Github, Mail } from 'lucide-react'

const columns = [
  {
    title: 'Products',
    links: ['AURA PRO', 'AURA Lite', 'AURA Studio', 'Accessories'],
  },
  {
    title: 'Resources',
    links: ['Tech Specs', 'Reviews', 'Support', 'Warranty'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Press Kit', 'Contact'],
  },
]

const socials = [Twitter, Instagram, Youtube, Github]

export default function Footer() {
  return (
    <footer className="relative bg-graphite border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand + newsletter */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 text-xl font-extrabold mb-4">
              AURA<span className="text-cyan-neon">.</span>PRO
            </a>
            <p className="text-white/50 text-sm max-w-xs mb-6">
              Precision audio engineering for those who demand silence, redefined.
            </p>
            <div className="flex gap-3 mb-6">
              {socials.map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-cyan-neon hover:text-cyan-neon transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
            {/* Newsletter */}
            <div className="flex gap-2 max-w-sm">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={16} />
                <input type="email" placeholder="Email for updates"
                  className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm text-white placeholder-white/30 focus:border-cyan-neon focus:outline-none transition-colors" />
              </div>
              <button className="btn-primary text-sm whitespace-nowrap px-5">Subscribe</button>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white/80 mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/40 hover:text-cyan-neon transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">© 2026 AURA PRO. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-white/30 hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-white/30 hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
