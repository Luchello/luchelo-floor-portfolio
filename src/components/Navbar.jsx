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
    { href: '#about', label: '업체소개' },
    { href: '#contact', label: '견적문의' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className={`font-bold text-xl transition-colors ${
            scrolled ? 'text-concrete-900' : 'text-white'
          }`}>
            대성몰탈
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
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
            href="tel:010-0000-0000"
            className={`flex items-center gap-2 px-4 py-2 rounded font-bold text-lg transition-colors ${
              scrolled
                ? 'bg-accent text-white'
                : 'bg-white text-accent'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            010-0000-0000
          </a>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href="tel:010-0000-0000"
            className={`text-sm font-bold ${scrolled ? 'text-accent' : 'text-white'}`}
          >
            010-0000-0000
          </a>
          <button
            className="flex flex-col gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`w-6 h-0.5 transition-all ${scrolled ? 'bg-concrete-900' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 transition-all ${scrolled ? 'bg-concrete-900' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 transition-all ${scrolled ? 'bg-concrete-900' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        menuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-md px-6 py-4 space-y-2">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="block text-concrete-700 hover:text-accent transition-colors py-2"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
