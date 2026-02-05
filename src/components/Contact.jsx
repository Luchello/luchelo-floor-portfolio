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
    // TODO: 실제 폼 제출 연동
    alert('상담 신청이 완료되었습니다! 빠른 시일 내에 연락드리겠습니다.')
  }

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            견적 문의
          </h2>
          <p className="text-concrete-600">
            연락주시면 빠르게 답변드립니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Contact Info */}
          <div className="space-y-4">
            <div className="bg-concrete-50 rounded-lg p-5 border border-concrete-200">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <h3 className="font-bold">전화</h3>
              </div>
              <a href="tel:010-0000-0000" className="text-lg font-bold text-accent">010-0000-0000</a>
              <p className="text-sm text-concrete-600 mt-1">평일 08:00 - 18:00</p>
            </div>

            <div className="bg-concrete-50 rounded-lg p-5 border border-concrete-200">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <h3 className="font-bold">카카오톡</h3>
              </div>
              <p className="text-concrete-700 font-medium">ID: daesung-mortar</p>
              <p className="text-sm text-concrete-600 mt-1">24시간 문의 가능</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="이름"
                required
                className="w-full px-4 py-3 rounded-lg bg-concrete-50 border border-concrete-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="연락처"
                required
                className="w-full px-4 py-3 rounded-lg bg-concrete-50 border border-concrete-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div>
              <select
                required
                className="w-full px-4 py-3 rounded-lg bg-concrete-50 border border-concrete-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none text-concrete-700"
                value={formData.service}
                onChange={e => setFormData({...formData, service: e.target.value})}
              >
                <option value="">시공 종류 선택</option>
                <option value="epoxy">에폭시</option>
                <option value="leveling">셀프레벨링</option>
                <option value="polishing">폴리싱</option>
                <option value="waterproof">방수</option>
                <option value="other">기타</option>
              </select>
            </div>
            <div>
              <textarea
                rows={3}
                placeholder="간단한 문의 내용"
                className="w-full px-4 py-3 rounded-lg bg-concrete-50 border border-concrete-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none resize-none"
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent-dark text-white py-3 rounded-lg font-bold transition-all"
            >
              문의하기
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
