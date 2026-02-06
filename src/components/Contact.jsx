import { AnimateIn } from '../hooks/useScrollAnimation'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const phone = form.phone.value
    const service = form.service.value
    const message = form.message.value
    
    // 전화 연결로 폴백 — 실제 문의는 전화/카톡으로
    const text = `[대성몰탈 문의]\n이름: ${name}\n연락처: ${phone}\n시공종류: ${service}\n내용: ${message}`
    
    // 카카오톡 채널 미설정 시 전화 연결
    if (confirm(`문의 내용을 확인해주세요:\n\n${text}\n\n전화로 연결하시겠습니까?`)) {
      window.location.href = 'tel:010-5535-7129'
    }
  }

  return (
    <section id="contact" className="py-28 px-6 bg-cream-50">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <div className="text-center mb-12">
            <span className="text-accent font-medium text-sm tracking-widest uppercase">Contact</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-dark-900">
              견적 문의
            </h2>
            <p className="text-dark-500 mt-3">
              편하신 방법으로 연락 주세요
            </p>
          </div>
        </AnimateIn>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-4">
            <AnimateIn delay={100}>
              <a href="tel:010-5535-7129" className="block bg-white rounded-2xl p-6 border border-cream-200/80 shadow-sm hover:shadow-md hover:border-accent/30 hover:-translate-y-0.5 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-dark-800">전화 문의</h3>
                </div>
                <p className="text-2xl font-bold text-accent">010-5535-7129</p>
                <p className="text-sm text-dark-400 mt-1">평일 08:00 ~ 18:00</p>
              </a>
            </AnimateIn>

            <AnimateIn delay={200}>
              <div className="bg-white rounded-2xl p-6 border border-cream-200/80 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-dark-800">시공 지역</h3>
                </div>
                <p className="text-dark-600 font-medium">수도권 전 지역</p>
                <p className="text-sm text-dark-400 mt-1">그 외 지역도 상담 가능합니다</p>
              </div>
            </AnimateIn>

            <AnimateIn delay={300}>
              <div className="bg-accent/5 rounded-2xl p-6 border border-accent/10">
                <p className="text-dark-700 font-medium text-sm leading-relaxed">
                  💡 전화 한 통이면 현장 방문 일정을 잡아드립니다. 
                  바닥 사진을 미리 보내주시면 더 정확한 상담이 가능합니다.
                </p>
              </div>
            </AnimateIn>
          </div>

          {/* Form */}
          <AnimateIn delay={150} className="md:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-cream-200/80 shadow-sm space-y-4">
              <h3 className="font-bold text-dark-800 text-lg mb-4">온라인 문의</h3>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="이름"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-cream-50 border border-cream-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none text-dark-800 placeholder:text-dark-400 transition-all"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="연락처"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-cream-50 border border-cream-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none text-dark-800 placeholder:text-dark-400 transition-all"
                />
              </div>
              <select
                name="service"
                required
                className="w-full px-4 py-3.5 rounded-xl bg-cream-50 border border-cream-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none text-dark-600 transition-all"
              >
                <option value="">시공 종류 선택</option>
                <option value="에폭시">에폭시 코팅</option>
                <option value="셀프레벨링">셀프레벨링</option>
                <option value="폴리싱">폴리싱 / 그라인딩</option>
                <option value="우레탄방수">우레탄 방수</option>
                <option value="기타">기타 / 상담</option>
              </select>
              <textarea
                name="message"
                rows={4}
                placeholder="현장 주소, 면적, 요청사항 등을 적어주세요"
                className="w-full px-4 py-3.5 rounded-xl bg-cream-50 border border-cream-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none resize-none text-dark-800 placeholder:text-dark-400 transition-all"
              />
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-dark text-white py-4 rounded-xl font-bold text-lg transition-all shadow-md shadow-accent/20 hover:shadow-accent/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                문의하기
              </button>
            </form>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
