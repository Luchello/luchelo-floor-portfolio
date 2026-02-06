import { useState, useEffect, useRef, useCallback } from 'react'
import { AnimateIn } from '../hooks/useScrollAnimation'
import useReducedMotion from '../hooks/useReducedMotion'

export default function Contact() {
  const [formState, setFormState] = useState('idle') // idle | confirm
  const [formData, setFormData] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const modalRef = useRef(null)
  const previousActiveElement = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const phone = form.phone.value
    const service = form.service.value
    const message = form.message.value
    
    // Prepare SMS text (limited to keep it short)
    const smsText = `[대성몰탈 문의] ${name} / ${phone} / ${service}${message ? ` / ${message.slice(0, 50)}` : ''}`
    
    // Store current focus for restoration
    previousActiveElement.current = document.activeElement
    
    setFormData({ name, phone, service, message, smsText })
    setFormState('confirm')
  }

  // Modal open effect: fade in, focus trap, body scroll lock
  useEffect(() => {
    if (formState === 'confirm') {
      // Fade in
      const timer = setTimeout(() => setIsVisible(true), 10)
      
      // Lock body scroll
      const originalStyle = window.getComputedStyle(document.body).overflow
      document.body.style.overflow = 'hidden'
      
      // Focus the modal
      if (modalRef.current) {
        modalRef.current.focus()
      }
      
      return () => {
        clearTimeout(timer)
        document.body.style.overflow = originalStyle
      }
    } else {
      setIsVisible(false)
    }
  }, [formState])

  const handleClose = useCallback(() => {
    setIsVisible(false)
    const delay = prefersReducedMotion ? 0 : 200
    setTimeout(() => {
      setFormState('idle')
      setFormData(null)
      // Restore focus
      if (previousActiveElement.current) {
        previousActiveElement.current.focus()
      }
    }, delay)
  }, [prefersReducedMotion])

  // Keyboard handling: Escape to close
  useEffect(() => {
    if (formState !== 'confirm') return
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [formState, handleClose])

  const handleSMS = () => {
    const encoded = encodeURIComponent(formData.smsText)
    window.location.href = `sms:010-5535-7129?body=${encoded}`
    handleClose()
  }

  const handleCall = () => {
    window.location.href = 'tel:010-5535-7129'
    handleClose()
  }

  const transitionDuration = prefersReducedMotion ? 'duration-0' : 'duration-200'

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 bg-cream-50">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <div className="text-center mb-10 sm:mb-12">
            <span className="text-accent font-medium text-xs sm:text-sm tracking-widest uppercase">Contact</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 text-dark-900 section-header tracking-wide">
              견적 문의
            </h2>
            <p className="text-dark-500 mt-3 text-sm sm:text-base leading-loose">
              편하신 방법으로 연락 주세요
            </p>
          </div>
        </AnimateIn>

        <div className="grid md:grid-cols-5 gap-6 sm:gap-8">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-3 sm:space-y-4">
            <AnimateIn delay={100}>
              <a 
                href="tel:010-5535-7129" 
                className="block bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-cream-200/80 shadow-sm hover:shadow-md hover:border-accent/30 hover:-translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 btn-press"
                aria-label="전화 문의: 010-5535-7129, 평일 08:00 ~ 18:00"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center" aria-hidden="true">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-dark-800">전화 문의</h3>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-accent">010-5535-7129</p>
                <p className="text-sm text-dark-400 mt-1">평일 08:00 ~ 18:00</p>
              </a>
            </AnimateIn>

            <AnimateIn delay={200}>
              <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-cream-200/80 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center" aria-hidden="true">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-dark-800">시공 지역</h3>
                </div>
                <p className="text-dark-600 font-medium">충청권 · 경기도권</p>
                <p className="text-sm text-dark-400 mt-1">그 외 지역도 상담 가능합니다</p>
              </div>
            </AnimateIn>

            <AnimateIn delay={300}>
              <div className="bg-accent/5 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-accent/10">
                <p className="text-dark-700 font-medium text-sm leading-loose">
                  <span aria-hidden="true">💡</span> 전화 한 통이면 현장 방문 일정을 잡아드립니다. 
                  바닥 사진을 미리 보내주시면 더 정확한 상담이 가능합니다.
                </p>
              </div>
            </AnimateIn>
          </div>

          {/* Form */}
          <AnimateIn delay={150} className="md:col-span-3">
            <form 
              onSubmit={handleSubmit} 
              className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-cream-200/80 shadow-sm space-y-4 relative"
            >
              <h3 className="font-bold text-dark-800 text-lg mb-4">온라인 문의</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="sr-only">이름</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="이름"
                    required
                    className="w-full px-4 py-3.5 sm:py-3.5 min-h-[44px] rounded-xl bg-cream-50 border border-cream-200 focus:border-accent focus:ring-2 focus:ring-accent/20 focus-visible:outline-none text-dark-800 placeholder:text-dark-400 transition-all text-base"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="sr-only">연락처</label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    placeholder="연락처"
                    required
                    className="w-full px-4 py-3.5 sm:py-3.5 min-h-[44px] rounded-xl bg-cream-50 border border-cream-200 focus:border-accent focus:ring-2 focus:ring-accent/20 focus-visible:outline-none text-dark-800 placeholder:text-dark-400 transition-all text-base"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-service" className="sr-only">시공 종류 선택</label>
                <select
                  id="contact-service"
                  name="service"
                  required
                  className="w-full px-4 py-3.5 sm:py-3.5 min-h-[44px] rounded-xl bg-cream-50 border border-cream-200 focus:border-accent focus:ring-2 focus:ring-accent/20 focus-visible:outline-none text-dark-600 transition-all text-base"
                >
                  <option value="">시공 종류 선택</option>
                  <option value="방통">방통 시공</option>
                  <option value="재물">재물 마감</option>
                  <option value="보수">보수 시공</option>
                  <option value="기타">기타 / 상담</option>
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" className="sr-only">현장 주소, 면적, 요청사항</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="현장 주소, 면적, 요청사항 등을 적어주세요"
                  className="w-full px-4 py-3.5 sm:py-3.5 min-h-[120px] rounded-xl bg-cream-50 border border-cream-200 focus:border-accent focus:ring-2 focus:ring-accent/20 focus-visible:outline-none resize-none text-dark-800 placeholder:text-dark-400 transition-all text-base"
                />
                <p className="text-xs text-dark-400 mt-2 px-1">
                  현장 주소, 면적, 요청사항 등
                </p>
              </div>
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-dark text-white py-4 min-h-[48px] rounded-xl font-bold text-base sm:text-lg transition-all shadow-md shadow-accent/20 hover:shadow-accent/30 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 btn-press"
              >
                문의하기
              </button>
            </form>
          </AnimateIn>
        </div>
      </div>

      {/* Confirmation Modal */}
      {formState === 'confirm' && formData && (
        <div 
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          tabIndex={-1}
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity ${transitionDuration} ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-dark-900/60 backdrop-blur-sm" aria-hidden="true" />
          
          <div 
            className={`relative bg-white rounded-2xl p-6 sm:p-8 w-full max-w-md shadow-2xl transition-transform ${transitionDuration} ${
              isVisible ? 'scale-100' : 'scale-95'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center text-dark-400 hover:text-dark-600 rounded-full hover:bg-cream-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="닫기"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h3 id="modal-title" className="text-xl font-bold text-dark-900 mb-4 text-center">
              문의 내용 확인
            </h3>
            
            <div className="bg-cream-50 rounded-xl p-4 mb-6 text-sm space-y-2">
              <p><span className="text-dark-500">이름:</span> <span className="font-medium text-dark-800">{formData.name}</span></p>
              <p><span className="text-dark-500">연락처:</span> <span className="font-medium text-dark-800">{formData.phone}</span></p>
              <p><span className="text-dark-500">시공종류:</span> <span className="font-medium text-dark-800">{formData.service}</span></p>
              {formData.message && (
                <p><span className="text-dark-500">내용:</span> <span className="font-medium text-dark-800">{formData.message}</span></p>
              )}
            </div>

            <p className="text-center text-dark-600 text-sm mb-5">
              연락 방법을 선택해주세요
            </p>

            <div className="space-y-3">
              <button
                onClick={handleSMS}
                className="w-full flex items-center justify-center gap-3 bg-accent hover:bg-accent-dark text-white py-4 rounded-xl font-bold transition-all btn-press focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                <span className="text-lg" aria-hidden="true">📱</span>
                SMS 문자 보내기
              </button>
              
              <button
                onClick={handleCall}
                className="w-full flex items-center justify-center gap-3 bg-dark-800 hover:bg-dark-900 text-white py-4 rounded-xl font-bold transition-all btn-press focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                <span className="text-lg" aria-hidden="true">📞</span>
                전화 걸기
              </button>
              
              <button
                onClick={handleClose}
                className="w-full py-3 text-dark-500 hover:text-dark-700 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
