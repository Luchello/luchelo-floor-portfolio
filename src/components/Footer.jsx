export default function Footer() {
  return (
    <footer className="bg-dark-950 text-dark-400 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">대</span>
            </div>
            <div>
              <span className="font-bold text-white text-lg block">대성몰탈</span>
              <span className="text-dark-500 text-xs">바닥미장 전문 시공</span>
            </div>
          </div>

          <div className="flex items-center gap-8 text-sm">
            <a href="#services" className="hover:text-accent transition-colors">시공분야</a>
            <a href="#portfolio" className="hover:text-accent transition-colors">시공사례</a>
            <a href="#about" className="hover:text-accent transition-colors">소개</a>
            <a href="#contact" className="hover:text-accent transition-colors">문의</a>
          </div>

          <a href="tel:010-5535-7129" className="text-accent font-bold hover:text-accent-light transition-colors">
            📞 010-5535-7129
          </a>
        </div>

        <div className="mt-10 pt-8 border-t border-dark-800/50 text-center text-sm text-dark-600">
          <p>© 2025 대성몰탈. 수도권 바닥미장 전문 시공업체.</p>
        </div>
      </div>
    </footer>
  )
}
