import { useState, useEffect, useRef } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Process from './components/Process'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-warm-50 text-concrete-900 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
