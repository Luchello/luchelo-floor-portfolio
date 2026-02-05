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
    { href: '#services', label: '시공분야' },
    { href: '#portfolio', label: '시공사례' },
    { href: '#about', label: '소개' },
    { href: '#contact', label: '문의' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-cream-200/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${
            scrolled ? 'bg-accent' : 'bg-white/15 backdrop-blur-sm'
          }`}>
            <span className="text-white font-bold text-sm">창</span>
          </div>
          <span className={`font-bold text-lg tracking-tight transition-colors ${
            scrolled ? 'text-dark-900' : 'text-white'
          }`}>
            창성바닥미장
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                scrolled 
                  ? 'text-dark-500 hover:text-accent' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:010-5535-7129"
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm transition-all ${
              scrolled
                ? 'bg-accent text-white hover:bg-accent-dark'
                : 'bg-white/15 backdrop-blur-sm text-white hover:bg-white/25'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            010-5535-7129
          </a>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href="tel:010-5535-7129"
            className={`text-sm font-bold ${scrolled ? 'text-accent' : 'text-white'}`}
          >
            📞 전화
          </a>
          <button
            className="flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`w-5 h-0.5 transition-all ${scrolled ? 'bg-dark-900' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-5 h-0.5 transition-all ${scrolled ? 'bg-dark-900' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-0.5 transition-all ${scrolled ? 'bg-dark-900' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-cream-50/98 backdrop-blur-md px-6 py-4 space-y-1 border-t border-cream-200/50">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="block text-dark-600 hover:text-accent transition-colors py-3 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:010-5535-7129"
            className="block text-accent font-bold py-3"
            onClick={() => setMenuOpen(false)}
          >
            📞 010-5535-7129
          </a>
        </div>
      </div>
    </nav>
  )
}
