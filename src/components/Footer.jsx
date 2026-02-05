export default function Footer() {
  return (
    <footer className="bg-concrete-950 text-concrete-400 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-sm">대</span>
            </div>
            <span className="font-bold text-white">대성몰탈</span>
          </div>

          <div className="flex items-center gap-8 text-sm">
            <a href="#about" className="hover:text-accent transition-colors">소개</a>
            <a href="#services" className="hover:text-accent transition-colors">서비스</a>
            <a href="#portfolio" className="hover:text-accent transition-colors">포트폴리오</a>
            <a href="#contact" className="hover:text-accent transition-colors">연락처</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-concrete-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© 2025 대성몰탈. All rights reserved.</p>
          <p className="text-concrete-600">
            Professional Floor Finishing
          </p>
        </div>
      </div>
    </footer>
  )
}
