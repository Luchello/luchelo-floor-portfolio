import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.')
  }

  return (
    <section id="contact" className="py-24 px-6 bg-cream-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm tracking-wider">CONTACT</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-dark-900">
            견적 문의
          </h2>
          <p className="text-dark-500 mt-3">
            편하신 방법으로 연락 주세요
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-4">
            <a href="tel:010-5535-7129" className="block bg-white rounded-2xl p-6 border border-cream-200/80 shadow-sm hover:shadow-md hover:border-accent/30 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-bold text-dark-800">전화</h3>
              </div>
              <p className="text-xl font-bold text-accent">010-5535-7129</p>
              <p className="text-sm text-dark-400 mt-1">평일 08:00 ~ 18:00</p>
            </a>

            <div className="bg-white rounded-2xl p-6 border border-cream-200/80 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="font-bold text-dark-800">카카오톡</h3>
              </div>
              <p className="text-dark-600 font-medium">문의 가능</p>
              <p className="text-sm text-dark-400 mt-1">24시간 접수</p>
            </div>

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
              <p className="text-sm text-dark-400 mt-1">그 외 지역 상담 가능</p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-cream-200/80 shadow-sm space-y-4">
              <h3 className="font-bold text-dark-800 mb-2">온라인 문의</h3>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="이름"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-200 focus:border-accent focus:ring-1 focus:ring-accent/30 outline-none text-dark-800 placeholder:text-dark-400"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
                <input
                  type="tel"
                  placeholder="연락처"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-200 focus:border-accent focus:ring-1 focus:ring-accent/30 outline-none text-dark-800 placeholder:text-dark-400"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <select
                required
                className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-200 focus:border-accent focus:ring-1 focus:ring-accent/30 outline-none text-dark-600"
                value={formData.service}
                onChange={e => setFormData({...formData, service: e.target.value})}
              >
                <option value="">시공 종류 선택</option>
                <option value="epoxy">에폭시</option>
                <option value="leveling">셀프레벨링</option>
                <option value="polishing">폴리싱 / 그라인딩</option>
                <option value="waterproof">우레탄 방수</option>
                <option value="other">기타 / 상담</option>
              </select>
              <textarea
                rows={4}
                placeholder="현장 주소, 면적, 요청사항 등을 적어주세요"
                className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-200 focus:border-accent focus:ring-1 focus:ring-accent/30 outline-none resize-none text-dark-800 placeholder:text-dark-400"
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
              />
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-dark text-white py-3.5 rounded-xl font-bold transition-all shadow-sm"
              >
                문의하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
