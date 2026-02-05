export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - 산골 석양 작업 사진 (가장 드라마틱한 사진) */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/70 via-dark-900/50 to-dark-950/80 z-10" />
        <img 
          src="./photos/mountain-trowel.jpg" 
          alt="산 배경 바닥미장 작업" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 mb-8">
          <div className="w-2 h-2 bg-accent rounded-full" />
          <span className="text-cream-300 text-sm font-medium tracking-wide">바닥미장 전문 시공업체</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
          창성바닥미장
        </h1>

        <p className="text-lg md:text-xl text-cream-200/90 max-w-xl mx-auto mb-4 leading-relaxed">
          에폭시 · 셀프레벨링 · 폴리싱 · 우레탄방수
        </p>
        <p className="text-base text-cream-400/60 mb-10">
          수도권 전 지역 · 현장 방문 견적 무료
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:010-5535-7129"
            className="inline-flex items-center gap-3 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg shadow-accent/20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            010-5535-7129
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 text-cream-300 hover:text-white border border-cream-300/30 hover:border-white/50 px-8 py-4 rounded-lg font-medium transition-all"
          >
            시공 사례 보기
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
