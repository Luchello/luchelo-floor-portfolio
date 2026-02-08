export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { href: '#services', label: '시공분야' },
    { href: '#portfolio', label: '시공사례' },
    { href: '#about', label: '소개' },
    { href: '#contact', label: '문의' },
  ]

  const handleNavClick = (e, href) => {
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
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <div className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <footer role="contentinfo" className="bg-dark-950 text-dark-400 py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-10">
          {/* Column 1: Company Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center" aria-hidden="true">
                <span className="text-white font-bold">대</span>
              </div>
              <div>
                <span className="font-bold text-white text-lg block">대성몰탈</span>
                <span className="text-dark-500 text-xs">바닥미장 전문 시공</span>
              </div>
            </div>
            <p className="text-dark-500 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              방통, 재물 등 바닥미장 전문 시공업체입니다.
            </p>
          </div>

          {/* Column 2: Nav Links */}
          <nav aria-label="푸터 네비게이션" className="text-center">
            <h3 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">바로가기</h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-dark-400 hover:text-accent transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark-950 rounded px-2 py-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">연락처</h3>
            <div className="space-y-3">
              <a
                href="tel:010-5535-7129"
                className="text-accent font-bold text-lg hover:text-accent-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-2 py-1 inline-flex items-center gap-2"
                aria-label="전화 걸기: 010-5535-7129"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"/>
                  <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.086-1.391l-4.064-3.696z"/>
                </svg>
                010-5535-7129
              </a>
              <div className="text-dark-500 text-sm space-y-1">
                <p>
                  <span className="text-dark-400">영업시간:</span> 평일 08:00 ~ 18:00
                </p>
                <p>
                  <span className="text-dark-400">시공지역:</span> 충청권 · 경기도권
                </p>
              </div>
              {/* SNS Icons */}
              <div className="flex items-center justify-center md:justify-end gap-3 pt-2">
                <a
                  href="tel:010-5535-7129"
                  className="w-9 h-9 rounded-full bg-dark-800 hover:bg-accent flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark-950"
                  aria-label="전화로 연락하기"
                >
                  <svg className="w-4 h-4 text-dark-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"/>
                    <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.086-1.391l-4.064-3.696z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top */}
        <div className="text-center mb-8">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-dark-500 hover:text-accent transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark-950 rounded-lg px-4 py-2"
            aria-label="페이지 맨 위로 이동"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
            맨 위로
          </button>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-dark-800/50 text-center text-sm text-dark-600">
          <p>© {currentYear} 대성몰탈 <span className="text-accent">·</span> 충청권 · 경기도권</p>
        </div>
      </div>
    </footer>
    </>
  )
}
