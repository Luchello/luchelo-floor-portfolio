import { useState, useEffect, lazy, Suspense } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

// Lazy load below-fold components
const About = lazy(() => import('./components/About'))
const Stats = lazy(() => import('./components/Stats'))
const Portfolio = lazy(() => import('./components/Portfolio'))
const Services = lazy(() => import('./components/Services'))
const Equipment = lazy(() => import('./components/Equipment'))
const Process = lazy(() => import('./components/Process'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))
const ScrollTop = lazy(() => import('./components/ScrollTop'))
const ScrollProgress = lazy(() => import('./components/ScrollProgress'))
const FloatingCTA = lazy(() => import('./components/FloatingCTA'))

// Minimal loading fallback
const SectionFallback = () => <div className="py-32" aria-hidden="true" />

// Wave divider component
function WaveDivider({ fromColor, toColor, flip = false }) {
  return (
    <div className="wave-divider" aria-hidden="true" style={{ marginTop: '-1px' }}>
      <svg 
        viewBox="0 0 1200 60" 
        preserveAspectRatio="none" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={flip ? { transform: 'rotate(180deg)' } : undefined}
      >
        <path d="M0 60V30C200 60 400 0 600 30C800 60 1000 0 1200 30V60H0Z" fill={toColor}/>
      </svg>
    </div>
  )
}

function App() {
  const [appLoaded, setAppLoaded] = useState(false)

  useEffect(() => {
    // Brief delay for initial fade-in animation
    const timer = setTimeout(() => setAppLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div 
      className={`bg-cream-50 text-dark-900 min-h-screen transition-opacity duration-500 motion-reduce:duration-0 ${
        appLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Suspense fallback={null}>
        <ScrollProgress />
      </Suspense>
      
      {/* Skip to content link for keyboard navigation */}
      <a
        href="#main-content"
        className="skip-link"
      >
        본문으로 바로가기
      </a>
      
      <Navbar />
      
      <main id="main-content" role="main">
        <Hero />
        {/* Hero has built-in wave to cream-50 */}
        
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Stats />
          {/* Wave: dark Stats to light Services */}
          <WaveDivider fromColor="#282520" toColor="#FEFCF9" />
          <Services />
          <Portfolio />
          {/* Wave: white Portfolio to cream Equipment */}
          <WaveDivider fromColor="#FFFFFF" toColor="rgba(253, 248, 240, 0.5)" />
          <Equipment />
          <Process />
          <Contact />
        </Suspense>
      </main>
      
      <Suspense fallback={null}>
        <Footer />
        <ScrollTop />
        <FloatingCTA />
      </Suspense>
    </div>
  )
}

export default App
