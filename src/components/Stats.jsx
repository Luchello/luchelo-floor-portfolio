import { useState, useEffect, useRef } from 'react'
import { AnimateIn } from '../hooks/useScrollAnimation'

const stats = [
  { value: 10, suffix: '+', label: '년 경력', prefix: '' },
  { value: 500, suffix: '+', label: '시공 현장', prefix: '' },
  { value: 100, suffix: '%', label: '책임 시공', prefix: '' },
  { value: 0, suffix: '', label: '현장 견적', prefix: '무료' },
]

function Counter({ value, suffix, prefix, label }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const ref = useRef(null)

  // Check for reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    const handleChange = (e) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // IntersectionObserver to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [hasAnimated])

  // Animate count when in view
  useEffect(() => {
    if (!hasAnimated || value === 0) return

    if (prefersReducedMotion) {
      setCount(value)
      return
    }

    const duration = 1500 // ms
    const steps = 60
    const stepValue = value / steps
    const stepTime = duration / steps
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      if (currentStep >= steps) {
        setCount(value)
        clearInterval(timer)
      } else {
        // Easing: start fast, slow down
        const progress = currentStep / steps
        const easedProgress = 1 - Math.pow(1 - progress, 3) // Cubic ease out
        setCount(Math.floor(value * easedProgress))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [hasAnimated, value, prefersReducedMotion])

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
        {prefix && <span>{prefix}</span>}
        {value > 0 && <span>{count}</span>}
        {suffix && <span className="text-accent">{suffix}</span>}
      </div>
      <div className="text-cream-400 text-sm sm:text-base font-medium tracking-wide">
        {label}
      </div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-dark-900" aria-labelledby="stats-heading">
      <h2 id="stats-heading" className="sr-only">대성몰탈 실적</h2>
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, i) => (
              <AnimateIn key={stat.label} delay={i * 100}>
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  label={stat.label}
                />
              </AnimateIn>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
