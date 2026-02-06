import { useState, useEffect, useCallback, useRef } from 'react'

export default function Lightbox({ images, initialIndex = 0, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [isVisible, setIsVisible] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const modalRef = useRef(null)
  const previousActiveElement = useRef(null)

  const currentImage = images[currentIndex]

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    const handleChange = (e) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Fade in on mount
  useEffect(() => {
    previousActiveElement.current = document.activeElement
    const timer = setTimeout(() => setIsVisible(true), 10)
    return () => clearTimeout(timer)
  }, [])

  // Lock body scroll
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [])

  // Focus trap
  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.focus()
    }
  }, [])

  const handleClose = useCallback(() => {
    setIsVisible(false)
    const delay = prefersReducedMotion ? 0 : 200
    setTimeout(() => {
      onClose()
      if (previousActiveElement.current) {
        previousActiveElement.current.focus()
      }
    }, delay)
  }, [onClose, prefersReducedMotion])

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'Escape':
          handleClose()
          break
        case 'ArrowRight':
          goNext()
          break
        case 'ArrowLeft':
          goPrev()
          break
        default:
          break
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleClose, goNext, goPrev])

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  const transitionDuration = prefersReducedMotion ? 'duration-0' : 'duration-300'

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${currentImage.title || '사진'} - ${currentIndex + 1} / ${images.length}`}
      tabIndex={-1}
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity ${transitionDuration} ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90" aria-hidden="true" />

      {/* Close button */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="닫기"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); goPrev() }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="이전 사진"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goNext() }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="다음 사진"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Main content */}
      <div 
        className={`relative z-10 flex flex-col items-center max-w-[90vw] max-h-[90vh] transition-transform ${transitionDuration} ${
          isVisible ? 'scale-100' : 'scale-95'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage.photo}
          alt={currentImage.title || '시공 현장 사진'}
          className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
        />
        
        {/* Caption */}
        <div className="mt-4 text-center px-4 max-w-2xl">
          {currentImage.title && (
            <h3 className="text-white text-lg sm:text-xl font-bold mb-2">
              {currentImage.title}
            </h3>
          )}
          {currentImage.story && (
            <p className="text-cream-300/80 text-sm sm:text-base leading-relaxed">
              {currentImage.story}
            </p>
          )}
          {images.length > 1 && (
            <p className="text-white/50 text-sm mt-3">
              {currentIndex + 1} / {images.length}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
