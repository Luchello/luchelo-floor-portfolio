import { useEffect, useRef, useState } from 'react'
import useReducedMotion from './useReducedMotion'

// eslint-disable-next-line react-refresh/only-export-components
export function useScrollAnimation(options = {}) {
  const { threshold = 0.1, rootMargin = '0px 0px -60px 0px' } = options
  const ref = useRef()
  // Start visible if no IntersectionObserver (SSR/headless) or reduced motion
  const [isVisible, setIsVisible] = useState(
    () => typeof window === 'undefined' || !('IntersectionObserver' in window)
  )

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return [ref, isVisible]
}

export function AnimateIn({ children, className = '', delay = 0, direction = 'up' }) {
  const [ref, isVisible] = useScrollAnimation()
  const prefersReducedMotion = useReducedMotion()
  
  const directions = {
    up: 'translate-y-8',
    down: '-translate-y-8',
    left: 'translate-x-8',
    right: '-translate-x-8',
    none: '',
  }

  // If user prefers reduced motion, skip animation entirely
  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 translate-x-0' 
          : `opacity-0 ${directions[direction]}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
