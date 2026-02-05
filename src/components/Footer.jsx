export default function Footer() {
  return (
    <footer className="bg-dark-950 text-dark-400 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">대</span>
            </div>
            <span className="font-bold text-white">대성몰탈</span>
          </div>

          <div className="flex items-center gap-8 text-sm">
            <a href="#services" className="hover:text-accent transition-colors">시공분야</a>
            <a href="#portfolio" className="hover:text-accent transition-colors">시공사례</a>
            <a href="#about" className="hover:text-accent transition-colors">소개</a>
            <a href="#contact" className="hover:text-accent transition-colors">문의</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-dark-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-4">
            <p>© 2025 대성몰탈</p>
            <span className="text-dark-700">|</span>
            <a href="tel:010-5535-7129" className="hover:text-accent transition-colors">010-5535-7129</a>
          </div>
          <p className="text-dark-600">
            수도권 바닥미장 전문 시공
          </p>
        </div>
      </div>
    </footer>
  )
}
