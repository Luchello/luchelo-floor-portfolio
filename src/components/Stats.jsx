import { useState, useEffect, useRef } from 'react'
import { AnimateIn } from '../hooks/useScrollAnimation'
import useReducedMotion from '../hooks/useReducedMotion'

const stats = [
  { value: 10, suffix: '+', label: '년 경력', prefix: '' },
  { value: 500, suffix: '+', label: '시공 현장', prefix: '' },
  { value: 100, suffix: '%', label: '책임 시공', prefix: '' },
]

function Counter({ value, suffix, prefix, label }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [finished, setFinished] = useState(false)
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()

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
      setFinished(true)
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
        setFinished(true)
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
    <div ref={ref} className="text-center px-4">
      <div className={`text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-2 transition-transform duration-300 ${finished ? "scale-100" : "scale-95 opacity-90"}`}>
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
    <section className="relative overflow-hidden py-16 sm:py-20 px-4 sm:px-6 bg-dark-900" aria-labelledby="stats-heading">
      <div className="absolute inset-0">
        <img src="./photos/factory-rebar.webp" className="w-full h-full object-cover" alt="" />
        <div className="absolute inset-0 bg-dark-900/85" />
      </div>
      <h2 id="stats-heading" className="sr-only">대성몰탈 실적</h2>
      <div className="relative max-w-5xl mx-auto">
        <AnimateIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:divide-x md:divide-dark-700">
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
