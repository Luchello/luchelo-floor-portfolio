import { useState, useEffect, useRef } from 'react'
import useReducedMotion from '../hooks/useReducedMotion'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const rafRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(scrollPercent)
    }

    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(updateProgress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    updateProgress() // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  // For reduced motion: just show/hide based on progress
  if (prefersReducedMotion) {
    return (
      <div
        className="fixed top-0 left-0 right-0 h-[3px] z-[60]"
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="페이지 스크롤 진행률"
      >
        <div
          className="h-full bg-accent"
          style={{ width: `${progress}%` }}
        />
      </div>
    )
  }

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] z-[60]"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="페이지 스크롤 진행률"
    >
      <div
        className="h-full bg-accent transition-[width] duration-100 ease-out shadow-[0_0_8px_rgba(158,123,79,0.5)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
