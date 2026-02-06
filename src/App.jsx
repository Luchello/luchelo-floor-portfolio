import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Equipment from './components/Equipment'
import Process from './components/Process'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'

function App() {
  return (
    <div className="bg-cream-50 text-dark-900 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
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
