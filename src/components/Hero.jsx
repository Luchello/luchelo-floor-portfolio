import { useEffect, useRef } from 'react'

export default function Hero() {
  const parallaxRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* Background with overlay */}
      <div ref={parallaxRef} className="absolute inset-0 -top-20">
        <div className="absolute inset-0 bg-gradient-to-b from-concrete-950/70 via-concrete-900/50 to-concrete-950/80 z-10" />
        {/* Placeholder pattern for floor texture */}
        <div className="absolute inset-0 bg-concrete-800">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(200,149,106,0.3) 0%, transparent 50%),
                              radial-gradient(circle at 75% 75%, rgba(200,149,106,0.2) 0%, transparent 50%),
                              radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)`,
            backgroundSize: '100% 100%'
          }} />
          {/* Subtle grid texture to suggest polished floor */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `linear-gradient(0deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          탄탄한 바닥,
          <br />
          <span className="text-accent">오래가는 시공</span>
        </h1>

        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          수도권 바닥 미장 전문 대성몰탈입니다.
          <br className="hidden md:block" />
          현장 경험으로 제대로 시공해드립니다.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#portfolio"
            className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:shadow-lg hover:shadow-accent/20"
          >
            시공 사례 보기
          </a>
          <a
            href="#contact"
            className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full font-medium text-lg transition-all"
          >
            상담 문의
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
