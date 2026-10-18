import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Sound', href: '#features' },
  { label: 'ANC', href: '#anc' },
  { label: 'Specs', href: '#specs' },
  { label: 'Reviews', href: '#reviews' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-base/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
    }`}>
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-20 min-h-[80px]">
        <a href="#" className="font-display font-extrabold text-[20px] uppercase tracking-[-0.04em] text-accent">
          AURAPRO
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}
              className="font-sans font-medium text-[14px] text-muted hover:text-white transition-colors duration-200">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-7">
          <a href="#" className="font-sans font-normal text-[14px] text-white hover:text-accent transition-colors">Shop</a>
          <a href="#order" className="btn-primary !py-3.5 !px-7 text-[15px]">Order Now</a>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-base/95 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
              className="font-sans font-medium text-[14px] text-muted hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
          <a href="#order" onClick={() => setMobileOpen(false)} className="btn-primary text-sm">Order Now</a>
        </div>
      )}
    </header>
  )
}
