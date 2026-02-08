import { useState, useRef, useEffect } from 'react'
import useReducedMotion from '../hooks/useReducedMotion'

export default function LazyImage({ src, alt, className = '', onClick, thumbnail = false, eager = false, ...props }) {
  const [loaded, setLoaded] = useState(false)
  const [inView, setInView] = useState(eager) // eager images are immediately "in view"
  const ref = useRef()
  const prefersReducedMotion = useReducedMotion()

  // Force WebP - always convert .jpg to .webp
  const webpSrc = src.replace('.jpg', '.webp')
  const thumbnailWebp = src.replace('/photos/', '/photos/thumbs/').replace('.jpg', '.webp')
  const fallbackSrc = webpSrc // Use WebP as primary, no JPG fallback needed

  useEffect(() => {
    if (eager) return // Skip observer for eager images
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [eager])

  const transitionClass = prefersReducedMotion 
    ? '' 
    : 'transition-opacity duration-500'

  const clickableProps = onClick ? {
    onClick,
    role: 'button',
    tabIndex: 0,
    onKeyDown: (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        onClick(e)
      }
    },
    style: { cursor: 'pointer' }
  } : {}

  return (
    <div 
      ref={ref} 
      className={`relative overflow-hidden ${className}`} 
      {...clickableProps}
      {...props}
    >
      {/* Placeholder with shimmer */}
      <div 
        className={`absolute inset-0 shimmer-placeholder ${transitionClass} ${loaded ? 'opacity-0' : 'opacity-100'}`} 
        aria-hidden="true"
      />
      
      {inView && (
        <picture>
          {thumbnail ? (
            <>
              {/* Thumbnail mode: responsive srcSet with thumb for small, full for large */}
              <source
                srcSet={`${thumbnailWebp} 400w, ${webpSrc} 800w`}
                type="image/webp"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
              <img
                src={webpSrc}
                alt={alt}
                width="800"
                height="600"
                loading={eager ? 'eager' : 'lazy'}
                onLoad={() => setLoaded(true)}
                className={`w-full h-full object-cover ${transitionClass} ${loaded ? 'opacity-100' : 'opacity-0'}`}
              />
            </>
          ) : (
            <>
              {/* Full-size mode: just use full WebP */}
              <source srcSet={webpSrc} type="image/webp" />
              <img
                src={webpSrc}
                alt={alt}
                width="800"
                height="600"
                loading={eager ? 'eager' : 'lazy'}
                onLoad={() => setLoaded(true)}
                className={`w-full h-full object-cover ${transitionClass} ${loaded ? 'opacity-100' : 'opacity-0'}`}
                decoding="async"
              />
            </>
          )}
        </picture>
      )}
    </div>
  )
}
