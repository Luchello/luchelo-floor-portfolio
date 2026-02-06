import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Equipment from './components/Equipment'
import Process from './components/Process'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'
import ScrollProgress from './components/ScrollProgress'
import FloatingCTA from './components/FloatingCTA'

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
      <ScrollProgress />
      
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
      </main>
      
      <Footer />
      <ScrollTop />
      <FloatingCTA />
    </div>
  )
}

export default App
