import { useState, useEffect, useRef } from 'react'
import useReducedMotion from '../hooks/useReducedMotion'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const [parallaxY, setParallaxY] = useState(0)
  const [scrollStarted, setScrollStarted] = useState(false)
  const sectionRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  // Preload hero image (WebP only) — 빠르게 로드 + fallback
  useEffect(() => {
    const img = new Image()
    img.onload = () => setLoaded(true)
    img.onerror = () => setLoaded(true) // 에러여도 콘텐츠는 보여줌
    img.src = './photos/mountain-trowel.webp'
    // 3초 안에 안 로드되면 강제 표시 (headless 환경 대응)
    const fallback = setTimeout(() => setLoaded(true), 3000)
    return () => clearTimeout(fallback)
  }, [])

  // Parallax effect on scroll + hide scroll indicator
  useEffect(() => {
    const handleScroll = () => {
      // Hide scroll indicator after scrolling starts
      if (window.scrollY > 50) {
        setScrollStarted(true)
      }

      if (prefersReducedMotion) return

      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        // Only apply parallax when section is in view
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          setParallaxY(window.scrollY * 0.3)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prefersReducedMotion])

  const handlePortfolioClick = (e) => {
    e.preventDefault()
    const element = document.getElementById('portfolio')
    if (element) {
      const navbarHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section 
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay"
      aria-label="대성몰탈 메인 배너"
    >
      {/* Background with parallax */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 z-10" />
        <div 
          className="absolute inset-0 z-[1] transition-opacity duration-1000 motion-reduce:duration-0 opacity-100"
          data-loaded={loaded}
          style={!prefersReducedMotion ? { transform: `translateY(${parallaxY}px)`, willChange: 'transform' } : undefined}
        >
          <img
            src="./photos/mountain-trowel.webp"
            alt="산 배경에서 파워트라웰로 바닥미장 마감 작업을 진행하는 현장"
            className="absolute inset-0 w-full h-[120%] object-cover brightness-150 contrast-110 saturate-110"
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
        </div>
        <div className="absolute inset-0 bg-dark-800 z-0" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-5 py-2 mb-6 sm:mb-8">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse motion-reduce:animate-none" aria-hidden="true" />
          <span className="text-cream-300 text-xs sm:text-sm font-medium tracking-wide">바닥미장 전문 시공업체</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent leading-tight mb-4 sm:mb-6 tracking-tight hero-text-shadow drop-shadow-lg">
          대성몰탈
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-cream-200/90 max-w-xl mx-auto mb-2 sm:mb-3 leading-relaxed font-light hero-text-shadow tracking-widest">
          방통 <span className="text-accent">·</span> 재물 <span className="text-accent">·</span> 바닥미장
        </p>
        <p className="text-sm sm:text-base text-cream-400/50 mb-8 sm:mb-12">
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="tel:010-5535-7129"
            className="group inline-flex items-center gap-3 bg-accent hover:bg-accent-dark text-white w-full px-8 py-4 text-lg sm:w-auto sm:px-8 sm:py-4 sm:text-lg rounded-xl font-bold transition-all shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900 justify-center btn-press"
            aria-label="전화 걸기: 010-5535-7129"
          >
            <svg className="w-5 h-5 group-hover:animate-pulse motion-reduce:group-hover:animate-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            010-5535-7129
          </a>
          <a
            href="#portfolio"
            onClick={handlePortfolioClick}
            className="inline-flex items-center gap-2 text-cream-300 hover:text-white border border-cream-300/30 hover:border-white/50 px-8 py-4 rounded-xl font-medium text-lg transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900 w-full sm:w-auto justify-center btn-press"
          >
            시공 사례 보기
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator - hides after scrolling starts */}
      <div
        className={`absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center transition-opacity duration-500 motion-reduce:duration-0 ${
          loaded && !scrollStarted ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      >
        <p className="text-cream-400/40 text-xs mb-2 tracking-widest uppercase">scroll</p>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-bounce motion-reduce:animate-none" />
        </div>
      </div>

      {/* Gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-32 bg-gradient-to-b from-transparent to-[#FEFCF9]" aria-hidden="true" />
    </section>
  )
}
