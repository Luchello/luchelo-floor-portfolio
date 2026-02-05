import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    area: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: 실제 폼 제출 연동
    alert('상담 신청이 완료되었습니다! 빠른 시일 내에 연락드리겠습니다.')
  }

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left - Info */}
          <div>
            <span className="text-accent font-medium text-sm tracking-wider uppercase">Contact</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
              연락처
            </h2>
            <p className="text-concrete-600 leading-relaxed mb-10">
              궁금한 거 있으시면 편하게 연락주세요.
              현장 방문해서 보고 견적 알려드립니다.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">전화 상담</h3>
                  <p className="text-concrete-500">010-XXXX-XXXX</p>
                  <p className="text-concrete-400 text-sm">평일 08:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">카카오톡</h3>
                  <p className="text-concrete-500">카카오톡 ID: daesung-mortar</p>
                  <p className="text-concrete-400 text-sm">언제든 편하게 문의</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">시공 지역</h3>
                  <p className="text-concrete-500">수도권 전체</p>
                  <p className="text-concrete-400 text-sm">지방도 협의 가능</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-warm-50 rounded-2xl p-8 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-concrete-700 mb-1.5 block">이름</label>
                  <input
                    type="text"
                    placeholder="홍길동"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-concrete-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-concrete-700 mb-1.5 block">연락처</label>
                  <input
                    type="tel"
                    placeholder="010-0000-0000"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-concrete-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-concrete-700 mb-1.5 block">시공 장소</label>
                  <input
                    type="text"
                    placeholder="서울 강남구"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-concrete-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm"
                    value={formData.location}
                    onChange={e => setFormData({...formData, location: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-concrete-700 mb-1.5 block">면적 (㎡)</label>
                  <input
                    type="text"
                    placeholder="100"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-concrete-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm"
                    value={formData.area}
                    onChange={e => setFormData({...formData, area: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-concrete-700 mb-1.5 block">시공 종류</label>
                <select
                  className="w-full px-4 py-3 rounded-xl bg-white border border-concrete-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm text-concrete-600"
                  value={formData.service}
                  onChange={e => setFormData({...formData, service: e.target.value})}
                >
                  <option value="">선택해 주세요</option>
                  <option value="epoxy">에폭시 코팅</option>
                  <option value="leveling">셀프레벨링</option>
                  <option value="polishing">폴리싱 / 그라인딩</option>
                  <option value="waterproof">우레탄 방수</option>
                  <option value="other">기타</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-concrete-700 mb-1.5 block">상세 내용</label>
                <textarea
                  rows={4}
                  placeholder="현재 바닥 상태, 원하시는 마감 등을 자유롭게 적어주세요"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-concrete-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm resize-none"
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-dark text-white py-4 rounded-xl font-medium text-lg transition-all hover:shadow-lg hover:shadow-accent/20"
              >
                문의하기
              </button>
              <p className="text-center text-concrete-400 text-xs">
                * 확인하는 대로 연락드립니다
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
