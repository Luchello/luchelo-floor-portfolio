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
        <div className="inline-block mb-6">
          <span className="text-accent text-sm font-medium tracking-[0.3em] uppercase border border-accent/30 px-4 py-2 rounded-full">
            Professional Floor Finishing
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          바닥이 달라지면
          <br />
          <span className="text-accent">공간이 달라집니다</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          10년 이상의 현장 경험으로 완성하는 프리미엄 바닥 미장.
          <br className="hidden md:block" />
          매끈한 마감, 오래 가는 품질을 약속합니다.
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
            무료 상담 신청
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { num: '10+', label: '년 경력' },
            { num: '500+', label: '시공 완료' },
            { num: '100%', label: '고객 만족' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent">{stat.num}</div>
              <div className="text-white/50 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
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
