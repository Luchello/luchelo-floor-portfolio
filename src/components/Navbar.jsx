import { useState, useEffect, useCallback } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const links = [
    { href: '#services', label: '시공분야', id: 'services' },
    { href: '#portfolio', label: '시공사례', id: 'portfolio' },
    { href: '#about', label: '소개', id: 'about' },
    { href: '#contact', label: '문의', id: 'contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = ['services', 'portfolio', 'about', 'contact']
    const observers = []

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(id)
            }
          },
          { 
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0 
          }
        )
        observer.observe(element)
        observers.push(observer)
      }
    })

    return () => observers.forEach(obs => obs.disconnect())
  }, [])

  // Smooth scroll with offset for fixed navbar
  const handleNavClick = useCallback((e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    
    if (element) {
      const navbarHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    
    setMenuOpen(false)
  }, [])

  const handleLogoClick = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setActiveSection('')
  }

  return (
    <nav 
      role="navigation"
      aria-label="메인 네비게이션"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-cream-200/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a 
          href="#" 
          onClick={handleLogoClick}
          className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-lg"
          aria-label="대성몰탈 홈으로 이동"
        >
          <div className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${
            scrolled ? 'bg-accent' : 'bg-white/15 backdrop-blur-sm'
          }`} aria-hidden="true">
            <span className="text-white font-bold text-sm">대</span>
          </div>
          <span className={`font-bold text-lg tracking-tight transition-colors ${
            scrolled ? 'text-dark-900' : 'text-white'
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
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium transition-colors relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded px-1 py-0.5 ${
                scrolled 
                  ? activeSection === link.id
                    ? 'text-accent'
                    : 'text-dark-500 hover:text-accent' 
                  : activeSection === link.id
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
              }`}
              aria-current={activeSection === link.id ? 'true' : undefined}
            >
              {link.label}
              {activeSection === link.id && (
                <span 
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full transition-colors ${
                    scrolled ? 'bg-accent' : 'bg-white'
                  }`}
                  aria-hidden="true"
                />
              )}
            </a>
          ))}
          <a
            href="tel:010-5535-7129"
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
              scrolled
                ? 'bg-accent text-white hover:bg-accent-dark'
                : 'bg-white/15 backdrop-blur-sm text-white hover:bg-white/25'
            }`}
            aria-label="전화 걸기: 010-5535-7129"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            010-5535-7129
          </a>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href="tel:010-5535-7129"
            className={`text-sm font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-2 py-1 ${scrolled ? 'text-accent' : 'text-white'}`}
            aria-label="전화 걸기"
          >
            📞 전화
          </a>
          <button
            className="flex flex-col gap-1.5 p-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
          >
            <span 
              className={`w-5 h-0.5 transition-all duration-300 ease-in-out origin-center ${scrolled ? 'bg-dark-900' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} 
              aria-hidden="true"
            />
            <span 
              className={`w-5 h-0.5 transition-all duration-200 ease-in-out ${scrolled ? 'bg-dark-900' : 'bg-white'} ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} 
              aria-hidden="true"
            />
            <span 
              className={`w-5 h-0.5 transition-all duration-300 ease-in-out origin-center ${scrolled ? 'bg-dark-900' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} 
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="bg-cream-50/98 backdrop-blur-md px-6 py-4 space-y-1 border-t border-cream-200/50">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`block transition-colors py-3 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset rounded-lg px-3 ${
                activeSection === link.id 
                  ? 'text-accent bg-accent/5' 
                  : 'text-dark-600 hover:text-accent hover:bg-cream-100'
              }`}
              tabIndex={menuOpen ? 0 : -1}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:010-5535-7129"
            className="block text-accent font-bold py-3 px-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
            tabIndex={menuOpen ? 0 : -1}
          >
            📞 010-5535-7129
          </a>
        </div>
      </div>
    </nav>
  )
}
