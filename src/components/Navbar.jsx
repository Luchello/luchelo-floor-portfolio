import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: '소개' },
    { href: '#services', label: '서비스' },
    { href: '#portfolio', label: '포트폴리오' },
    { href: '#process', label: '시공 과정' },
    { href: '#contact', label: '연락처' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
            <span className="text-white font-bold text-sm">대</span>
          </div>
          <span className={`font-bold text-lg tracking-tight transition-colors ${
            scrolled ? 'text-concrete-900' : 'text-white'
          }`}>
            대성몰탈
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? 'text-concrete-600' : 'text-white/80'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-accent text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-accent-dark transition-colors"
          >
            무료 상담
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`w-6 h-0.5 transition-all ${scrolled ? 'bg-concrete-900' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 transition-all ${scrolled ? 'bg-concrete-900' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 transition-all ${scrolled ? 'bg-concrete-900' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-md px-6 py-4 space-y-3">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="block text-concrete-700 hover:text-accent transition-colors py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block bg-accent text-white text-center px-5 py-2.5 rounded-full font-medium"
            onClick={() => setMenuOpen(false)}
          >
            무료 상담
          </a>
        </div>
      </div>
    </nav>
  )
}
