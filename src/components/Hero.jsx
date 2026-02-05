export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-concrete-900/80 via-concrete-900/70 to-concrete-900/80 z-10" />
        {/* Simple floor texture placeholder */}
        <div className="absolute inset-0 bg-concrete-700">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `linear-gradient(45deg, #FF8A1A 25%, transparent 25%, transparent 75%, #FF8A1A 75%, #FF8A1A),
                              linear-gradient(45deg, #FF8A1A 25%, transparent 25%, transparent 75%, #FF8A1A 75%, #FF8A1A)`,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px'
          }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          바닥미장 전문
          <br />
          <span className="text-accent">대성몰탈</span>
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
          수도권 바닥 시공 / 현장 견적 무료
        </p>

        <a
          href="#contact"
          className="inline-block bg-accent hover:bg-accent-dark text-white px-10 py-4 rounded font-bold text-lg transition-all"
        >
          견적 문의하기
        </a>
      </div>
    </section>
  )
}
