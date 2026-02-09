import { useState, useEffect, useCallback } from 'react'

export default function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
  
  const handleChange = useCallback((e) => setPrefersReducedMotion(e.matches), [])
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [handleChange])
  
  return prefersReducedMotion
}
