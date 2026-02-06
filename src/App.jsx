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
        <About />
        <Stats />
        <Services />
        <Portfolio />
        <Equipment />
        <Process />
        <Contact />
      </main>
      
      <Footer />
      <ScrollTop />
    </div>
  )
}

export default App
